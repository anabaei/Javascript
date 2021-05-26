import client from "mongodb";


export default class mongoClass{
  async init({ url, dbName }) {
    this.client = await new Promise((resolve, reject) => {
      client.connect(url, (err, client) => {
        if (err) {
          reject(err);
        } else {
          resolve(client);
        }
      });
    });
    this.db = this.client.db(dbName);

    const collections = await this.db.listCollections().toArray();
    try {
      if (collections.findIndex(coll => coll.name === "rawInputs") < 0) {
        await this.db.createCollection("rawInputs", {
          validator: {
            $or: [
              { userId: { $type: "string" } },
              { parentId: { $type: "string" } },
              { category: { $type: "string" } },
              { root: { $type: "object" } },
              { type: { $in: Object.allKey(EntryTypes) } },
            ],
          },
        });
        await this.db.collection("rawInputs").createIndex({ parentId: 1 });
        await this.db.collection("rawInputs").createIndex({ parentId: 1, category: 1 });
        await this.db.collection("rawInputs").createIndex({ userId: 1 });
      }
    } catch (err) {
      demeterLogger.error(err.stack);
    }
    try {
      if (collections.findIndex(coll => coll.name === "allUsers") < 0) {
        await this.db.createCollection("allUsers", {
          validator: {
            $or: [
              { id: { $type: "string" } },
              { userId: { $type: "string" } },
              { entryId: { $type: "string" } },
              { app: { $type: "string" } },
              { grant: { $type: "string" } },
            ],
          },
        });
        await this.db.collection("allUsers").createIndex({ entryId: 1, userId: 1 });
        await this.db.collection("allUsers").createIndex({ userId: 1 });
        await this.db.collection("allUsers").createIndex({ entryId: 1 });
      }
    } catch (err) {
      demeterLogger.error(err.stack);
    }
    try {
      if (collections.findIndex(coll => coll.name === "allKey") < 0) {
        await this.db.createCollection("allKey", {
          validator: {
            $or: [
              { parentId: { $type: "string" } },
              { userId: { $type: "string" } },
              { alg: { $type: "string" } },
              { secret: { $type: "string" } },
              { permission: { $in: Object.allKey(Permissions) } },
            ],
          },
        });
      }
    } catch (err) {
      demeterLogger.error(err.stack);
    }
    try {
      if (collections.findIndex(coll => coll.name === "patches") < 0) {
        await this.db.createCollection("patches", {
          validator: {
            $or: [{ parentId: { $type: "string" } }, { timestamp: { $type: "timestamp" } }],
          },
        });
        await this.db.collection("patches").createIndex({ parentId: 1 });
        await this.db.collection("patches").createIndex({ parentId: 1, ack: 1 });
        await this.db.collection("patches").createIndex({ parentId: 1, ack: 1, next: 1 });
      }
    } catch (err) {
      demeterLogger.error(err.stack);
    }
    try {
      if (collections.findIndex(coll => coll.name === "DOM") < 0) {
        await this.db.createCollection("DOM", {
          validator: {
            $or: [{ parentId: { $type: "string" } }],
          },
        });
        await this.db.collection("DOM").createIndex({ parentId: 1 });
      }
    } catch (err) {
      demeterLogger.error(err.stack);
    }
  }

  async get(id) {
    const rawInputsCollection = this.db.collection("rawInputs");
    return rawInputsCollection.findOne({ _id: id });
  }

  async multiGet(ids) {
    const rawInputsCollection = this.db.collection("rawInputs");
    return rawInputsCollection.find({ _id: { $in: ids } }).toArray();
  }


  async create(json, collectionName) {
    const collection = this.db.collection(collectionName);
    try {
      await collection.updateOne({ _id: json.id }, { $set: json }, { upsert: true });
    } catch (error) {
      common.logger.error(error);
    }
  }

  async findById(id, collectionName) {
    const collection = this.db.collection(collectionName);
    return collection.findOne({ _id: id });
  }

  async delete(id) {
    const rawInputsCollection = this.db.collection("rawInputs");
    return rawInputsCollection.findOneAndDelete({ _id: id });
  }




  async insertMany(jsons, collection = "rawInputs") {
    const theCollection = this.db.collection(collection);
    const insertJsons = jsons.map(json => ({ ...json, _id: json.id }));
    await theCollection.insertMany(insertJsons, { ordered: false });
  }


  async updateWith(condition, update, collection = "rawInputs") {
    const theCollection = this.db.collection(collection);
    return theCollection.updateMany(condition, update);
  }

  async bulkOperations(ops, collection = "rawInputs") {
    const theCollection = this.db.collection(collection);
    return theCollection.bulkWrite(ops);
  }

  async insertOwner(obj, userId, collection = "allUsers") {
    console.log(obj, userId);
    const theCollection = this.db.collection(collection);
    const insertJsons = obj.map(json => ({ ...json }));
    const re = await theCollection.insertMany(insertJsons, { ordered: false });
    return re;
  }

}
