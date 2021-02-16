### some notes

```javascript
 "message": "Could not find assoicated test."
```
* It means there is no local database for that service, so go and create database in postgres

* Create Image and Container and run a node js fron docker file [LINK](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
<details>
 <summary>Testing</summary>

 ### Catch Error

* To find a test error first you need to put it inside try catch block and read error
```javascript
try {
    await service.getData();
  } catch (err) {
    expect(err.name).toEqual('TypeError')
  }
```
* To have it more advance it would be like
```javascript
 await expect(myfun1(uuid.v4())).rejects.toThrow(404);
```
[fs files js](https://flaviocopes.com/node-folders/)

* Match more than one object as
```javascript
 expect({num: 2 . result: {x:1}} ).toMatchObject({
        result: {
          x:  expect.toEqual(1)
         }
        num: expect.any(Number)
      });
```
### S3 mock
* S3 mock create actual s3 files for us on current directory. structure would be like

```javascript
import fs from "fs-extra";
import fileType from "file-type";
import path from "path";
import rimraf from "rimraf";

let dir_s3 = path.join(process.cwd(), `mys3${uuid.v4()}`);

async function cleatItup() {
  if (fs.existsSync(dir_s3)) {
      rimraf.sync(dir_s3);
  }
}

class S3 {
  upload({ mybucket, mykey, thebody }) {
    return {
      promise: async () =>
        fs.outputFile(path.join(dir_s3, mybucket, mykey), thebody)
    };
  }

  headObject({ mybucket, mykey, thebody }) {
    return {
      promise: async () => {
        let exists = await fs.exists(
          path.join(dir_s3, mybucket, mykey),
          thebody
        );
        if (!exists) console.log("error")
        let file = await fs.readFile(
          path.join(dir_s3, mybucket, mykey),
          thebody
        );
        let { mime: ContentType } = await fileType.fromBuffer(file);
        return { ContentType, ContentLength: file.length };
      }
    };
  }

  getObject({ mybucket, mykey, thebody }) {
    return {
      createReadStream: () =>
        fs.createReadStream(path.join(dir_s3, mybucket, mykey), thebody)
    };
  }

  deleteObjects({ mybucket, Delete }) {
    return {
      promise: async () => {
        let files = Delete.Objects.map(({ mykey }) =>
          path.join(dir_s3, mybucket, mykey)
        );
        let promises = files.map(file => fs.remove(file));
        return Promise.all(promises);
      }
    };
  }

  listObjects({ mybucket, Prefix }) {
    return {
      promise: async () => {
        let dir = path.join(dir_s3, mybucket, Prefix);
        if (fs.existsSync(dir) && fs.lstatSync(dir).isDirectory()) {
          let res = await fs.readdir(dir);
          return { Contents: res.map(result => ({ mykey: result })) };
        }
        return { Contents: [] };
      }
    };
  }
}

export default {S3,cleatItup};

```

 * On debugin test
 ```javascript
// in debuging sometimes you neeed to us below instead of fs because babel translate or remove some of them!
_fsExtra.default.existsSync(dir)
 ```
</details>

<details>
<summary>psql command lines</summary>

* Order by:
```javascript
select * from public."userGroups" ORDER BY "userId";
```
</details>

<details>
  <summary> postgres sequelize </summary>

### UUID or Int ID
* Integer is faster than String or varchar.Integers are cheaper to compare than characters, because character sets and collations (sorting rules) make character comparisons complicated.
* UUID is usefull since they are unique and make you avoid creating
* UUID is varchar(36) vs 4 bytes for an int.  strings don’t sort as fast as numbers because they rely on collation rules.

### One to many relation

* Define favorite model as having three attribtues as
```javascript
  {
      userId: {
        type: types.UUID,
        required: true,
        allowNull: false
      }
    },
    {
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ["projectId", "userId"]
        }
      ]
    }
```
* And by adding below it would add `projectId` as foriegn mykey.
* To define a unique pair mykey you need to define indexes as an array of two unique index.
```javascript
Project.hasMany(Favourite, { foreignmykey: "projectId" });
```

### Auto increment id
```javascript
id: {
        type: types.INTEGER,
        primarymykey: true,
        autoIncrement: true
      }
```
### JSONB & pgAdmin
* On this way we can retrive inside array an object value as `path`
```javascript
select distinct p."patch"->0->>'path' from public.patches as p where p."projectId"='8be02ca0-cce1-45c9-a283-f4f661b85db7';
```
</details>
<details>
   <summary> git </summary>

```javascript
./dev-release -d ALSANDRa
Dev-deploy -d release // to release it
```
### Rebase
* This is the scenario:
```
- Create a branch on top of master
- Someone else updated master
- You want your new branch is updated with these changes and write your code on top of them
```
* In your branch
```javascript
git rebase master // then you must finish the rebase task
git rebase --abort //
```
* Alternatively `git pull` would update your branch but still not updating the master.

* undo the most recent commit [git](https://stackoverflow.com/questions/2530060/in-plain-english-what-does-git-reset-do)
```javascript
git reset --soft HEAD^
```

### Git on usage
```
GIT:  git rebase origin/myBranch  // If I am in master then I want to update it with myBranch I use rebase
GIT   git diff and git stash //
use forman start // it runs it it is like running on heroku on port 5000
```
* Error you may need to update your remote version as
```javaScript
git remote set-url origin git@thesourcecodeaddress
```


</details>

### DATA
<details>
      <summary> Array </summary>

* When we have an array and we want to sort them out based on specific levels:

```javascript
let myarray = ["W", "R"];
// this is my solution!
groups.map(e => e === 'w' ? "1-w" : e )    // returns ['1-w','R']
        .map(e => (e === 'r' ? "2-r" : e)) // returns ['1-w','2-r']
        .sort()
        .shift()
        .replace(/.-/, ""); // returns 'w'
```
```javascript
// this is a better one!
let levels = {
  R: 1,
  W: 2
};
myarray.sort((a, b) => levels[a] - levels[b]).pop(); // returns 'w'
```
</details>
<details>
  <summary>  instance of postgres </summary>

* In testing to reove instances use
```javascript
ps -ef | grep postgres
kill -9 pid
```
</details>
<details>
<summary> Error: there is missing From a table...</summary>

* When this happen in paginations, we need to add below to query
```javascript
duplicate: false
```
also
```javascript
required: false  //left join
required: true   // inner join
```
</details>
<details>
      <summary>Test Cases for Error</summary>

* To catch error expected in tests we have
```javascript
  await expect(groupService.createGroup(uuid.v4())).rejects.toThrow(
        common.errors.BadRequest
      );
```
</details>

### Docker
<details>
  <summary>Docker</summary>

* Create Image and Container and run a node js fron docker file [LINK](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
### What is Docker
* Docker in fact is a shipping container system for codes in any environment.
* It runs natively on Linux server, but If you have windows or mac you need to run it on virtual machine.
#### Image
* Images are blueprint to build a container. They have files to run an application on linux environment. They are like a bash file to execute different commands.
* Map my externally 3000 to internal 80 in container. because container runs on port 80 and not exposed to outer world unless we map it.
```javascript
docker run -d -p 3000:80 // d means run in background
```
```javascript
docker run nameOfImage// runs the image
docker images // list of images
docker ps // to see what containers are running on which ports.
docker ps -a // show containers with exit status
docker ps -a format 'table {{.ID}}\t{{.Command}}' // displays only id and command columns

docker stop // stop containers
docker rm nameofdocker // remove container
docker images
```
#### Container
* Containers are where the applications run. `Docker Client` can be where you want your container runs.
* Docker Container vs Virtual Machines: Containers sit on the host OS(like Linux) but VM not only seats on OS but also they keep their own copy of the OS on each VM.
* nginx: reverse proxy
* download docker
```
download docker CE -> docker community edition for mac -> stable

```
* HELP
```javascript
docker // type in terminal
```

### Docker Compose
* Docker compose is a tool to run multiple docker images, or apps if we define them as [here](https://docs.docker.com/compose/gettingstarted/), so need to upload it [link](https://www.youtube.com/watch?v=HUpIoF_conA)
```javascript
docker-compose version
```
* create a `docker-compose` file as yaml file. We need to create web server and db. 
```javascript
version: "1"
services: 
  serviceName: //give any name to our service
  image: "22222.dkr.ecr.us-east-1.amazonaws.com/service-name"
  // address of the image like aws
  database: // "image of any database if any exists"
  environment: // if any env key exist 
   - MyKey="1223214133"
  ports:
   - "3000:80" // expose port 80 of the service to my localhost://3000
```
* To check validity of a compoer, for example we we have a `docker-compose.yml` file below checks it is valid or not
```javascript
docker-compose config
```
* If it didn't retrn error, then run docker-compost
```javascript
docker-compose up -d// command to create container in our application, -d makes it to start in attached mode
docker-compose down // ti stops containers
```
* if it had your images it would start just your containers
* It will pull image and download it, if there is any databse it is pulling it as well. 
* Then if we can check if those container running or not
```javascript
docker ps
```
* Also by scale we can assign how many instance of database we need 
```javascript
docker-compose up -d --scale database=4 // it creates 4 instance of our database
```
* 

</details>
<details>
        <summary> HaProxy Load Balance  </summary>

* `stateless connection`: protocol does not require the server to retain session information or status about each communicating partner for the duration of multiple requests
* `stateful connection`: like `TCP` both systems maintain information about the session itself during its life
```javascript
docker image ls  // list of images
docker build --build-arg somVariables=something -t 2222.dkr.ecr.us-east-1.amazonaws.com/anyname . // create an image of current app
```
* Then need to run the `image` to create a running `container` 
```javascript
docker ps // list of containers
docker run --name service-name -it 3333333.dkr.ecr.us-east-1.amazonaws.com/service-name
```

### TCP layer 4
* We have `ip addresses` it comes from and the one it goes to. We can see `port` and we can't see anything else. No content, no header and no rewriting 
* We can block some people based on their ip on this layer
### Http layer 7
* It can look at data, it can see `/project/id` routes, it can do redirecting. But data in Layer 7 needs to be decrypted. 

### TCP Socket Connection
* Browsers create a connection and try to stick to that. 
* Each time you run `telnet` it creates a connection 
```javascript
telnet 127.0.0.1 80 
GET /
// equal with localhost:80
```
### TCP, TLS and Http layer 4-7
* Tcp make connection, TLS check security and http which is layer 7 have contents
[link](https://user-images.githubusercontent.com/7471619/107089923-48e9fb00-67b4-11eb-9fba-625fc65044b3.png)

* 
</details>
<details>
        <summary> Create Websocket Connection </summary>

* When we need to update clients without asking server then we can use it
* It is Http compatible because of upgrade header. If we start creating a socket and sending binding information the fire wall start blocking it. 
* Because it started with a legit `http` request then we upgrade to a websocket and it should work with anything. 
* We create http server and then make handshake to have websocket connection

* Then make websocket connection

* 
</details>        

### ERRORS
* Because of not assiging `content-type` to `application-json`
```javascript
  "type": "UnsupportedMediaType",
    "message": "false is not a supported content type for"
```

<details>
<summary> ENJOY!</summary>

* An example of a test to throw error and reduce

```javascript
it("TEST IT ", async () => {
        let finalresult= res.res.reduce(
          (id, val) =>
            val.name === "AMIR" ? (id = val.name) : id,
          0
        );
        await expect(
          callAFunction
        ).rejects.toThrow(NotFound);
      });
```
</details>
<details>
  <summary>Sequelize Transaction Queue</summary>

  * When hit the max number of connections the requests are starved of resources.Solution is using queue in transactions.
```javascript
brew install parallel
```
```javascript
seq 20 | parallel -j0 curl 'http://address.com'
```
*
</details>
<details>
 <summary>Measure Time Request  </summary>

 * Find the time on when a request is sent and the time response back
 * You can find it [here](https://jj09.net/properly-measuring-http-request-time-with-node-js/)
</details>
<details>
        <summary> Terminnal </summary>

### nvm
```javaScript
nvm alias default v12.16.1 // newest version of node
```
</details>
<details>
       <summary>Kafka cluster</summary>

* Apache kafka is a messaging platform message broker
* `Message brokers` are software that receive messages and store them for some time and passes them to other apps. It is like a board.
* Why we need it? uber client open app `->` want to go from a to be `->` call a booking service, it could be a container or clustre of services `->` the it call routing service to display route from a to b `->` then based on route info booking service call another service to get estimateion cost( quotes service) `->` then booking send it to client `->` if client accept then booking servie needs a driver by passing info to other service like dispatch service `->` if there are many retries of sending messaging then it is better to have a `message board` where others can go and read from there. `->` also when a car is dispatch then we need a board that service go and read from there. 
* `Message Broker` accept information from services and makes it available to other services. which we call them producer and consumers.
* Producer send message to broker and consumer be notified when new message arrive
### Pap SAP system (publish subscribe)
* Coupling of producers and consumers. Producers send message to specific topic and consumers give the freedom to the topics of their choice without constraints
* No assumption are made about the number and activity of consumers. Kafka is more publish subscribe product
### Message queuing 
* It is like setting up mailboxes. Producers send message but this time the recipient of each message is known and it can pick only once by its owner. This pattern often applied to task use queue. The task that don't need to be done twice and rm immediately.Then client send ack after receving 
* Recipient of the message is clearly defined and is expected to process it only once
  
#### Flow
* Kafka uses logs instead of queue( an order sequence off elements). Kafka stores every message on disk.
* Kafka removing messages is in batch and it detach it from consumer. Kafka keeps track of where in the log where the consumer is and it has noting to do with message retensions.
  
## Start
* `Kafka broker` and `Zookeeper`(used in distributed services which allow us to have coordination between services)
* We run them locally using docker containers. 
* We define it in `docekr compose`
* `Kafka broker` is core piece. Manage topics and messages and clients connect to the broker.
* To create a topic we need to send message to kafka broker (kafka doesnt use REST API or any other standard application protocol) but kafka use a custom binary protocl. So we need a client that understand this protocl
* `Future` are runs in background and completed with resolve or exception then use `get` method.
* 
</details>