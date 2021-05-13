import MongoClient from "mongodb";
import common from "@livingsky/backend-common";
import { demeterLogger } from "../demeterLogger.js";
import { EntryTypes, Permissions } from "../EntryKeys.js";


export default class MongoAdapter {
  async init({ url, dbName }) {
    this.client = await new Promise((resolve, reject) => {
      MongoClient.connect(url, (err, client) => {
        if (err) {
          reject(err);
        } else {
          resolve(client);
        }
      });
    });
    this.db = this.client.db(dbName);

    // connect to database, create if not exist

    const collections = await this.db.listCollections().toArray();
    try {
      if (collections.findIndex(coll => coll.name === "entries") < 0) {
        await this.db.createCollection("entries", {
          validator: {
            $or: [
              { userId: { $type: "string" } },
              { parentId: { $type: "string" } },
              { category: { $type: "string" } },
              { root: { $type: "object" } },
              { type: { $in: Object.keys(EntryTypes) } },
            ],
          },
        });
        await this.db.collection("entries").createIndex({ parentId: 1 });
        await this.db.collection("entries").createIndex({ parentId: 1, category: 1 });
        await this.db.collection("entries").createIndex({ userId: 1 });
      }
    } catch (err) {
      demeterLogger.error(err.stack);
    }
    try {
      if (collections.findIndex(coll => coll.name === "owners") < 0) {
        await this.db.createCollection("owners", {
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
        await this.db.collection("owners").createIndex({ entryId: 1, userId: 1 });
        await this.db.collection("owners").createIndex({ userId: 1 });
        await this.db.collection("owners").createIndex({ entryId: 1 });
      }
    } catch (err) {
      demeterLogger.error(err.stack);
    }
    try {
      if (collections.findIndex(coll => coll.name === "keys") < 0) {
        await this.db.createCollection("keys", {
          validator: {
            $or: [
              { parentId: { $type: "string" } },
              { userId: { $type: "string" } },
              { alg: { $type: "string" } },
              { secret: { $type: "string" } },
              { permission: { $in: Object.keys(Permissions) } },
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
      if (collections.findIndex(coll => coll.name === "dom") < 0) {
        await this.db.createCollection("dom", {
          validator: {
            $or: [{ parentId: { $type: "string" } }],
          },
        });
        await this.db.collection("dom").createIndex({ parentId: 1 });
      }
    } catch (err) {
      demeterLogger.error(err.stack);
    }
  }

  async get(id) {
    const entriesCollection = this.db.collection("entries");
    return entriesCollection.findOne({ _id: id });
  }

  async multiGet(ids) {
    const entriesCollection = this.db.collection("entries");
    return entriesCollection.find({ _id: { $in: ids } }).toArray();
  }

  async put(json) {
    const entriesCollection = this.db.collection("entries");
    try {
      await entriesCollection.updateOne({ _id: json.id }, { $set: json }, { upsert: true });
    } catch (error) {
      common.logger.error(error);
    }
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
    const entriesCollection = this.db.collection("entries");
    return entriesCollection.findOneAndDelete({ _id: id });
  }

  async find(condition, options = {}) {
    const entriesCollection = this.db.collection("entries");
    return entriesCollection.find(condition, options).toArray();
  }

  async getKey(id) {
    const keysCollection = this.db.collection("keys");
    return keysCollection.findOne({ _id: id });
  }

  async putKey(json) {
    const keysCollection = this.db.collection("keys");
    await keysCollection.updateOne({ _id: json.id }, { $set: json }, { upsert: true });
  }

  async getFrom(id, collection = "entries") {
    const keysCollection = this.db.collection(collection);
    return keysCollection.findOne({ _id: id });
  }

  async deleteFrom(id, collection = "entries") {
    const theCollection = this.db.collection(collection);
    return theCollection.deleteOne({ _id: id });
  }

  async deleteManyFrom(ops, collection = "entries") {
    const theCollection = this.db.collection(collection);
    await theCollection.deleteMany(ops);
  }

  async putTo(json, collection = "entries") {
    const theCollection = this.db.collection(collection);
    await theCollection.updateOne({ _id: json.id }, { $set: json }, { upsert: true });
  }

  async insertMany(jsons, collection = "entries") {
    const theCollection = this.db.collection(collection);
    const insertJsons = jsons.map(json => ({ ...json, _id: json.id }));
    await theCollection.insertMany(insertJsons, { ordered: false });
  }

  async findFrom(condition, collection = "entries", options = {}) {
    const theCollection = this.db.collection(collection);
    return theCollection.find(condition, options).toArray();
  }

  async updateWith(condition, update, collection = "entries") {
    const theCollection = this.db.collection(collection);
    return theCollection.updateMany(condition, update);
  }

  async bulkOperations(ops, collection = "entries") {
    const theCollection = this.db.collection(collection);
    return theCollection.bulkWrite(ops);
  }

  async insertOwner(obj, userId, collection = "owners") {
    console.log(obj, userId);
    const theCollection = this.db.collection(collection);
    const insertJsons = obj.map(json => ({ ...json }));
    const re = await theCollection.insertMany(insertJsons, { ordered: false });
    return re;
  }
  // async search({ text, collectionName }) {
  //   common.logger.debug(`search ${text}-${collectionName}`);
  // }
}
