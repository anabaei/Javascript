

[Node Docs](https://nodejs.org/api/https.html#https_server_close_callback)

<details>
	<summary> Start Nodejs</summary>

# Quick start
```javascript
npm init // manual
npm init -y // automatic
npm i express body-parser esm 
"start": nodemon -r esm index.js // to run es6

```
* make `index.js` and run it on any port
```javascript
import Express from 'express';
import bodyParser from 'body-parser';

///////////////////////////////////////////////////
////////// Allow to parse bodies in json //////////
///////////////////////////////////////////////////
const app = Express()
app.use(bodyParser.json()); // help us to handle json in body
app.use(bodyParser.urlencoded({ extended: false})); // help us to have req.body in callbacks and reads what is inside body

app.get('/', (request, response) => { response.json(`Hello, World!`) })
const port = process.env.port || 3000;
app.listen(
port, ()=>console.log('server is running')
)
```


### Easy debug 
*  on vs code select `node.js` and `node.js attach to process` then run it locally then click on `debug` to attach debug to the current process you are running (the best)

#### VS code debug
* Easy way is select node debug on vs code and define `debug` on package.json
* A Good Resource to handl errors [vscode](https://code.visualstudio.com/docs/supporting/errors)
```javascript
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/app.js"
    }
  ]
}
```
* also to render html

```javascript
app.get('/', function (req, res) {
     res.sendFile(path.join(__dirname+'/index.html'));
    // or if you don't want to define dirname
     res.sendFile('index.html', { root: '.' })
   });

```

* [TUTORIAL](https://fem-node-api.netlify.com/)
* `fs` is a module to read/write files and the output of that is buffer
```javascript
var fs = require('fs')
fs.readFileSync('./package.json') // the out put is a buffer, we can use toString as well
```
* Routing without using express
```javascript
const server = http.createServer((req, res) => {
  res.on("error", err => {
    console.error(err);
    // Handle error...
  });
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "This is a JSON response"}`);
  } else if (req.url === "/tcs" && req.method === "GET") {
    res.end("HI RCSer");
  } else {
    res.statusCode = 404;
    res.end("404: File Not Found");
  }
});
```
*  [Use import](https://timonweb.com/posts/how-to-enable-es6-imports-in-nodejs/)
#### Setting up Express
 * nodejs is server side render javascript, and simply is a way to run javascript and it is not a sever framework. Nodejs uses the same `v8` that google Chrome use it and outside of the browser.  in Concole type `node` you get into `repo` javascript.
 * `polyfill` some features that modern browsers do them. `npm` uses package.json to install what is needed but it is seperate entity than `node` itself they just work togather.
 * `CommonJS` is a module loader using `require` allows us to access third party npm modules. We use
```javascript
exports.enable = funciton(){}
exports.setup = funciton(){}
exports.config = funciton(){}

 var mymodules = require('./....') // here mymodules object includes three funcitons at top to get them we can have
 mymodules.enables
 mymodules.setup
 mymodules.config
 ```
 * Using `modile.exports` allow us to export whatever and not only object
 ```javascript
module.exports ={
  action: function(){},
  trigg: true
}
module.exports = 3
// when we requre it value would be exactly above, it could be 3 then when we export we would have 3
 ```
 #### server node
 * Node has a built in `http` module which allows us to built servers. But it has some limitation and the code you have to write to run a basic server is overwhelming. `Express` is one of the framework to help us to get ease about it. (sails.js, hapi, koa, etc..). Express is a framework which runs on node and uses http node module to make node servers. Express allows to abstruct it.
 * Everything in node is Evented  which means `asycn` because it is single threat.
 * `Express` allows us to get combination of `https verbs` , `routes` that are hit and the function(callback) that has be executed. That is all things that express does. Express infact do the routing for us.

 ```
 npm init
 ```
 Then we have our package.json. npm is package manaer for node and yarn is facebook alternative for package manager.
 * Then create app.js file as below

```javascript
const Express= require('express')
const app = Express()
import 'babel-polyfill';

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

///////////////////////////////////////////////////
////////// Allow to parse bodies in json //////////
///////////////////////////////////////////////////

app.use(bodyParser.json()); // help us to handle json in body
app.use(bodyParser.urlencoded({ extended: false})); // help us to have req.body in callbacks and reads what is inside body

// Configure our Express app to use ejs as our templating engine
app.set('view engine', 'ejs');

app.get('/', (request, response) => { response.send(`Hello, World!`) })
const PORT = 3000
app.listen(
PORT, ()=>console.log('server is running')
)
 ```
 * `app.get('/', function(req, res){} )` means when express receieve a get request with `/` it would execute a funciton and the function has req and res which here we just send a message hellow world. Then it should listen to a port with the formula as
 ```javascript
 listen(port: number, hostname: string, callback func)
 ```
 * `morgan` is a Node. js and Express middleware to log HTTP requests and errors
 * Then install
 ```
 npm i body-parser cookie-parser morgan esm express babel-polyfill nodemon
 ```
 * To run it just call `node app.js` which execute the file
 ```javascript
"start": "node -r esm app.js",
 ```

 ,,,
 ### Add Es6 (no need)
 * it may return error as 
 ```javascript
 SyntaxError: Cannot use import statement outside a module
 ```
 *  There are some cases that in our node we want to work with not only javascript other languages like coffee script, typescript or JSX. 
* The main tool that allows us to use those langauges is `babel`. `Babel` takes some javascript and turns it into old version of javascript readable by all browsers and engines. 
* Nodejs doesn't support `import` but babel does and compile it to old version of javascript
```javascript
npm i @babel/core @babel/preset-env -D // only developers needs to transplie it to old javascript so save in dev env
// babel core transpile imports and it gets the roles of transpile from preset-env
npm i babel-loader -D
npm i @babel/node -D // gives us cli to execute code
// inside package.json
"start": "babel-node ./app"
"dev:start": "nodemon --exec babel-node ./app" // it exec with babel first before running node js
// babel needs to know what roles to use, they look at .babelrc file
```
* Create file `.babelrc` 
```javascript
{
  "preset": ["@babel/preset-env"] // the roles of compile are in preset-env
}
```


 * You can see the complete version mysql connected to heroku from this [code](https://github.com/anabaei/sanction/blob/fixErrorMysqlHeroku/server.js)
 * To access request body and also some params we can have
 ```javascript
app.post('/todo', function(req, res){
   var todo = req.body.todo
   // send todos to json backend
   res.send(todo)
})
app.get('todos/:id', function(req, res){
  var todo = _.find(todo, {id: req.params.id})
  res.json(todo);
})
 ```
 * `Express` helps us to make them easy. We should have at least one function at each request type but we can have more functions which called them `Middleware`
 * Express uses  `middleware` to modify and inspect incoming request. In fact middleware is a function which ran in sequence we run it.
* `REST` Modern web is mostly built around REST. The basic are that it should be stateless, use http verbs explicity, expost a directory like url pattern routs and transfer json or xml.
```javascript
npm i lodash
npm i morgan
```
</details>
<details>
	<summary> Setup Jest in Nodejs and Test VS Code Launch</summary>

## Jest
* To use ES6 in tests add `npm i @babel/preset-env` and in `.babelrc` add
```javascript
{
  "presets": ["@babel/preset-env"]
}
```
* Now to run just `npm t` and in package.json we have below
```javascript
"test": "jest"
```
### Add pre process in test
* To run one function before all test we can define it inside `jest.config.js` as
```jaa

### lounch json
* On VS code select `node with npm`
```javascript
Node with npm ("name": "Launch via NPM",)
// Then in package.json define debug script
 "debug": "node -r esm index.js",
```
* launch would be like 
```javascript
{
     "configurations": [
     {
          "name": "Launch via NPM",
          "request": "launch",
          // the commands define in package.json 
          "runtimeArgs": [  
               "run-script",
               "debug"
          ],
          "runtimeExecutable": "npm",
           "skipFiles": [
               "${workspaceFolder}/node_modules/**/*.js"
          ],
          // type of launch
          "type": "node",
          // avoid getting into transpiled files when you stepping through in debug
          // smartStep only debugs the original source code and not generated code
           "smartStep": true,
           // usefull when we have nodemon, try to re attach
           "restart": true
     }
     ]
}
```

* Testing [async](https://www.pluralsight.com/guides/test-asynchronous-code-jest) 
```javascript
npm install eslint -D // eslint is a test and can be run independently
npm install --save-dev jest
```
* In package.json define config file
```javascript
 "scripts": {
    "eslint": "eslint",
```
### Setup eslint
* eslint requires a config file as `.eslintrc.json` could be extenion of json, yaml or javascript
```javascript
{
  "parserOptions": {
   "ecmaVersion": 6,
   "sourceType": "module" // for node js we use module
  }
  "extends": "eslint:recommended",
  // also we have rules they can be 0,1,2 as ignore, warn and error 
  "rules": {
    "no-empty": "warn",
    "no-multiple-empty-lines": "warn",
    "no-var": "warn"
  }
}
```
* Run eslint in current directory
```javascript
npm run eslint .
```

### Jest
* simple test:
```javascript
"test": "jest",
```
* `mytest.test.js`
```javascript
describe("Filter function", () => {
     test("it should filter by a search term (link)", () => {
       expect(3).toBe(3);
     });
   });
```
</details>
<details>
          <summary>websocket ws</summary>


* Create a web socket connection

```javascript
// establish connection
const websocketConnection = new WebSocket.Server({
  app,
  port: 8090,
  clientTracking: true
});
// set a global variable to use it later 
app.set('websocketConnection ', websocketConnection ); 
// now we have it in each request 
const websocketConnection = req.app.get('websocketConnection');
```
* Then inside routes we have
```javascript
router.get('/', async (req, res, next) => {
  const { requestId } = req.locals;
  const websocketConnection = req.app.get('websocketConnection');
wss.on("connection", function connection(ws, req, verifyClient, ...args) {

    
     console.log(req.socket.remoteAddress);
     // on message event
     ws.on("data", data => {
       console.log(data.toString());
     });
   
     ws.on("message", function incoming(message) {
       wss.clients.forEach(function each(client) {
         // Redis comes here
         // make https just look
         // update janus
         // find unique connection id like each tab
         // add userId for each user
         // register subsrciption wiht redis
         // userId,clientdId
         // disconnection, heartbeat live or not like ping,
         if (client !== ws && client.readyState) {
           client.send(message);
         }
         if (process.env.NODE_ENV !== "test") {
          // publisher.publish("livechat", message);
         }
         user[userId] = {
           method: "connect"
         };
       });
     });
     ws.send(JSON.stringify(user));
   });
```
* Or not using express as below
```javascript
// on tcp connection
const server = http.createServer((req, res) => {
  res.on("error", err => {
    console.error(err);
    // Handle error...
  });
 if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "This is a JSON response"}`);
  } else {
    res.statusCode = 404;
    res.end("404: File Not Found");
  }
});
// then create a websocket on any port or the same port
const wss = new WebSocket.Server({ server, port: 8090 });
wss.on("connection", function connection(ws) {
  ws.on("onopen", () => {
    console.log("opened");
  });
  ws.on("onclose", () => {
    console.log("closed");
  });
  ws.on("message", function incoming(message) {
    console.log("******", message);
    wss.clients.forEach(function each(client) {
      client.send(message);
    });
  });
});
// listen to server 
server.listen(8084, () => {
  console.log("Example app listening on port 8084!");
});
```
* Now on the client side
```javascript
let ws = new WebSocket("ws://localhost:8090");
// send request from client to server 
ws.send("SSS");

// then with having clients.send inside server this message is broadcast to all clients, now we need to define get it in other clients as

ws.onmessage = message => console.log("from server", message.data);
```
* Limitness: WebSockets support sending and receiving: `strings`, `typed arrays` (ArrayBuffer) and `Blobs`
* Send and receive string
```javascript
jsonObject = {topic:'handshake', data:'sdf487rgiuh7'};
// convert obj to string and send
ws.send(JSON.stringify(jsonObject));
```
* Then inside server convert string to json and parse it
```javascript
 ws.on("message", function incoming(message) {
    console.log("******", JSON.parse(message))
    wss.clients.forEach(function each(client) {
     client.send(message);
    });
  });
```
* the on open event is only for the client not for the server. 
* Assign id to each connection
```javascript

```
* 
## Kong Connection
* To connect to kong
### Add service
* point to the port that websocket is running using http protocol
* On Route only assign a path and use http, https protocol the rest are default
* Then you need to make export to db to have it in local exports. If you want to make changes and submit you need to add it to each env you think is desire like local or test

ToDos
* 
</details>
<details>
        <summary> setTimeout and SetInterval </summary>

* print each 1 seconds
```javascript
setInterval(function() {

  console.log("1 seconds");

}, 1000);
```
* same above but using setTimeOut
```javascript
  function doSomething() {
    console.log("10 seconds");
    setTimeout(doSomething, 1000);
}

setTimeout(doSomething, 100);
```
</details>
<details>
          <summary>Redis</summary>

* List of services running in background
```javascript
brew services list
// to run any service
brew services start redis
// connect to cli
redis-cli
127.0.0.1:6379> ping
npm i response-time nodemon // to know how much time takes for response
// response-time add one header 
```
* Use RestClient to ease hit endpoints
* `Redis` is a fast in memory

```javascript
redisClient.set("foo", "bar");
redisClient.get("foo", function(err, reply) {
  // reply is null when the key is missing
  console.log(reply);
});
```
### sub/pub 
* To have publisher and subscription on each client you may create two tcp connection for each with redis
* 
* Client can subscribe to any number of channels
```javascript
redis-cli 
127.0.0.1:6379> subscribe myChannel
// on another tab
127.0.0.1:6379> publish myChannel hi
```
```javascript
// publish on any channel starts with m
publish m* hi
```
</details>
<details>
          <summary>config</summary>

* Config file can be like this:

```javascript
var config = {
  env: process.env.NODE_ENV || 'development',
  logging: false,
  secrets: {
    githubToken: process.env.GITHUB_TOKEN,
    jwtSecret: process.env.JWT_SECRET
  }
};
```
* We can use `process.env.NODE_ENV` to tell our application what envarionment its running in. We can turn off all console.login by assiging it is dev or pro environemnt.
```javascript
// load up development.js ||
// testing.js ||
// production.js
// all which have they're own configs that may change and add values
var envConfig = require('./testing');
var envConfig = require('./development');
var envConfig = require('./' + config.env); // this is how we use these cofig files in our application. just let it what environemnt you are the rest would be found since we have testing,
// merge the two objects and export it so our app can use it
```
</details>

 <details>
	<summary> Organization </summary>

* The API is a collection of resources with models to define how the resource look, controllers to access resources, and routes to let controllers expose our api. That would be like this
```javascript
config/
api/
  todos/   // todo is one api and each api has its own model, controller and routes
    todoModel.js
    todoRouter.js
  user/
    userModel.js
    userRouter.js
  post/
    postModel.js
    postRouter.js
  api.js
utils/
index.js/
```
### Controller & Model
* A simple Controller(Router) is like
```javascript
var router = require('express').Router();

router.route('/')
    .get(function(req,res){
      console.log('hey you are here!');
      res.send({ok:true})
    })

module.exports = router;
```
* And simple model. schema is a blue print for its model.
```javascript
var mongoose = require('mongoose');
var Schema = momgoose.Schema

var useSchema = new Schema({
  // fill out the schema
  firstName: {
    type: String,
    unique: true
  },
  lastName: {
    type: String,
  }
})
module.exports = mongoose.model('user', userSchema);
```
* Notice: `type` is keyword if there is no type, mongoose thinks it is an object.
### Route
* `api.js` is like our route service and would be like
```javascript
var router = require('express').Router();

router.use('/users', require('./user/userRoutes'));
router.use('/posts', require('./post/postRoutes'));

module.exports = router;
```
### START

* A quick link to start from [pluralsignt](https://app.pluralsight.com/guides/getting-started-with-nodejs)
* `index.js`
```javascript
var config = require('./server/config/config')
var app = require('./server/server') // app is exported
var logger = require('./server/logger')
app.listen(config.port)
logger.log('litening on port '+ config.port) // logger is a wrapper around console log that adds color
```
* `server.js`
```javascript
var express = require('express');
var app = express();
var api = require('./api/api'); // this is router

// it requires whatever appMiddlware is and invoke it and pass one argument/signiture to it.
require('./middleware/appMiddlware')(app); // this is a function that doing somthing and it is why it doesnt return anything
//Also it is same as
  // var s = require('./middleware/appMiddlware')
  // s(app)
// instead we could have
    // app.use(morgan('dev'));
    // app.use(bodyParser.urlencoded({ extended: true }));
    // app.use(bodyParser.json());

// setup the api
app.use('/api', api); // mounting any request with /api to api router
// set up global error handling

// export the app for testing
module.exports = app;
```
* `appMiddleware`. Just takes `app` and sets on global middleware on it. We may have 15 middleware that is why we take them out
```javascript
var morgan = require('morgan');
var bodyParser = require('body-parser');
// setup global middleware here

module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};
```
* `Relative path` is for all require statements and `absolute path` is for file systems.
* then we have api folder ad `api.js`
```javascript
var router = require('express').Router();

// api router will mount other routers
// for all our resources. Each resource directory
// has a resourceRoutes.js file with the router ready to go,
// require them and mount them to their respective routes below

router.use('/users', requrie('./user/userRoutes'));
router.use('/categories', requrie('./category/categoryRoutes'));
router.use('/posts', requrie('./post/postRoutes'));

module.exports = router;
```
* And inside watch users or posts folder there is routes as
```javascript
// userRoutes.js
var router = require('express').Router();
var logger = require('../../util/logger');

// setup boilerplate route jsut to satisfy a request
// for building
router.route('/')
  .get(function(req, res){
    logger.log('Hey from user!!');
    res.send({ok: true});
  });
module.exports = router;
```
* And we have our config folder
```javascript
var _ = require('lodash');

// deafult config object for our api
var config = {
  /* just placing the name of our possible NODE_ENV values for later*/
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000 // Heroku and AWS does listen to process.env.PORT
  // you can change the port by simply `export PORT = 343`
};

// check to see if the NODE_ENV was set, if not, the set it to dev
// in heroku or AWS because they are set so it knows it is not dev otherwise it is dev
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// set config.env to whatever the NODE_ENV is
config.env = process.env.NODE_ENV;
// TODO
// envConfig is nothing right now, but it should be an object.
// depending on what ever config.env is, load up the appropriate file
// add assign the value to envConfig so the merge at the bottom actually works.
// What's happening here is that we have a base config in this file then we
// conditionally load in another config file depending on what
// env we are in. We then merge those objects with the env config overriting
// the default config if here. We then export that new object for our app to use
var envConfig;
try {
  envConfig = require('./' + config.env);
  // just making sure the require actually
  // got something back :)
  envConfig = envConfig || {};
} catch(e) {
  envConfig = {};
}
// when we merge it overwrite every object we have. so we can change envConfig properties like ports or env and it would overwrite default config.
// merging goes from right to left objects and overwrites on each other
module.exports = _.merge(config, envConfig);
```
* And we have development.js or testing.js as
```javascript
module.exports = {
  // enabled logging for development
  logging: true
};
```
* utils/logger.js. There is `noop` functions that does nothing but we need.
```javascript
// no var needed here, colors will attached colors
// to String.prototype
require('colors');
var _ = require('lodash');

var config = require('../config/config');

// create a noop (no operation) function for when loggin is disabled
var noop = function(){};
// check if loggin is enabled in the config
// if it is, then use console.log
// if not then noop but definately it would be a function as consoleLog
var consoleLog = config.logging ? console.log.bind(console) : noop;
var logger = {
  log: function() {
    // arguments is an array like object with all the passed
    // in arguments to this function
    var args = _.toArray(arguments)
      .map(function(arg) {
        if(typeof arg === 'object') {
          // turn the object to a string so we
          // can log all the properties and color it
          var string = JSON.stringify(arg, 2);
          return string.magenta;
        } else {
          // coerce to string to color
          arg+='';
          return arg.magenta;
        }
      });
    // call either console.log or noop here
    // with the console object as the context
    // and the new colored args :)
    consoleLog.apply(console, args);
  }
};
module.exports = logger;
```
* Now it should works. We can use httpie  or curl as
```javascript
http localhost:3000/api/users
```
</details>
<details>
        <summary> Module exports </summary>

* `Module` is a variable that represents current module. `exports` is an object that will be exposed as a module so whatever we assign to  `module.exports` will be exposed as `module`.
```javascript
// case 1
module.exports = 'Hello world'; // at message.js
var msg = require('./Messages.js'); // at index
//case 2
module.exports = {
    firstName: 'James',
    lastName: 'Bond'
}
var person = require('./data.js');
console.log(person.firstName + ' ' + person.lastName);
//case 3 send function
module.exports = function (msg) {
    console.log(msg);
};
var msg = require('./Log.js');
msg('Hello World');
//case 4 function as a class
module.exports = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}
var person = require('./Person.js');
var person1 = new person('James', 'Bond');
console.log(person1.fullName());
 ```
 * More examples [here](https://www.tutorialsteacher.com/nodejs/nodejs-module-exports)
 * When `export default ` then import could be as `import whateverName from`. It means there is only one file is exporting. On the other hand, `export something` thne you need to use brackets at import as `import {somethign} from`
</details>
<details>
       <summary> App USE </summary>

* App use requires a middle ware like
```javascript
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});
```
* You can import/export it.
```javascript
const item = {
   value = { .... },
   name = { ... }
}
export {item}
```
```javascript
import item from './somewhere';
```
</details>

<details>
       <summary> Start with Swagger </summary>

* Define your api [here](https://editor.swagger.io/) and generate node.js
* [Tutorial](https://www.youtube.com/watch?v=w71TrUUWRDU)
* `operationId` defines controller_functions or just name of function.
* `ref` saying go to component and find the schema of reponses. Notice for date we have `type: string, format: date-time`
* to define an address like
```javascript
// in json format
"Addresses": [{
  "Address1": "544 Henry strerrt",
  "City": "Vancouver",
  "State": "BC"
}],
"Preferences": {
  "pariatner": "volume volutes some data",
  "cupidator": "stuff like here"
}
```
* in swagger we have array of obejcts `addresses` and an object includes objects `Preferences`
```javascript
  Addresses:
     type: array
       items:
         "$ref":"#/definations/address"
  Preferences:
     type: array
       items:
         "$ref":"#/definations/settings"
address:
  type: object
  properties:
    Address1:
      description: some info
      type: string
    City:
    description: some info
    type: string
settings:
    description: some info
    additionalProperties:
      type: string
```
* In Index we have:
```javascript
// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'), // tell where to find json files
  controllers: path.join(__dirname, './controllers'), // tell where to find controllers
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};
```
* Controllers are functions only that are exported.
* `http://localhost:8080/api-docs` that uses pure json.
* it is good to have `global.AppBase = __dirname`;
* Then it read yamle file and create swagger doc file. Then convert this file to safeload. Then we initialize swagger middleware.
* Reading files in json, you u need to encode them to `urf8` otherwise you get back an array of bits. you need to parse json and then stringify and send it.
</details>
<details>
       <summary>JWT</summary>

* [reference](https://medium.com/@siddharthac6/json-web-token-jwt-the-right-way-of-implementing-with-node-js-65b8915d550e)
* [set header](https://nodejs.org/docs/v0.4.12/api/http.html#response.writeHead)
* [general](https://medium.com/swlh/a-practical-guide-for-jwt-authentication-using-nodejs-and-express-d48369e7e6d4)
* A testing version that works
```javascript
app.get('/jwt', (request, response) => {
  var privateKEY  = fs.readFileSync('./private.key', 'utf8');
var publicKEY  = fs.readFileSync('./public.key', 'utf8');
var payload = {
  data1: "Data 1",
  data2: "Data 2",
  data3: "Data 3",
  data4: "Data 4",
 };
 var i  = 'Mysoft corp';
 var s  = 'some@user.com';
 var a  = 'http://mysoftcorp.in';
 var signOptions = {
  issuer:  i,
  subject:  s,
  audience:  a,
  expiresIn:  "12h",
  algorithm:  "RS256"   // RSASSA [ "RS256", "RS384", "RS512" ]
 };
 //var token = jwt.sign(payload, privateKEY, signOptions);
 var token = jwt.sign(signOptions, privateKEY);
 console.log("Token :" + token);
 var decoded = jwt.verify(token, privateKEY);
 // invalid token
// jwt.verify(token, 'wrong-secret', function(err, decoded) {
//   // err
//   // decoded undefined
// });

  response.send(decoded)
})
```
* A module version
```javascript
const fs   = require('fs');
const jwt   = require('jsonwebtoken');

// use 'utf8' to get string instead of byte array  (512 bit key)
var privateKEY  = fs.readFileSync('./private.key', 'utf8');
var publicKEY  = fs.readFileSync('./public.key', 'utf8');  module.exports = {
 sign: (payload, $Options) => {
  /*
   sOptions = {
    issuer: "Authorizaxtion/Resource/This server",
    subject: "iam@user.me",
    audience: "Client_Identity" // this should be provided by client
   }
  */  // Token signing options
  var signOptions = {
      issuer:  $Options.issuer,
      subject:  $Options.subject,
      audience:  $Options.audience,
      expiresIn:  "30d",    // 30 days validity
      algorithm:  "RS256"
  };
  return jwt.sign(payload, privateKEY, signOptions);
},verify: (token, $Option) => {
  /*
   vOption = {
    issuer: "Authorization/Resource/This server",
    subject: "iam@user.me",
    audience: "Client_Identity" // this should be provided by client
   }
  */
  var verifyOptions = {
      issuer:  $Option.issuer,
      subject:  $Option.subject,
      audience:  $Option.audience,
      expiresIn:  "30d",
      algorithm:  ["RS256"]
  };   try{
     return jwt.verify(token, publicKEY, verifyOptions);
   }catch (err){
     return false;
   }
}, decode: (token) => {
    return jwt.decode(token, {complete: true});
    //returns null if token is invalid
 }
}
```
</details>

<details>
       <summary> VS Code </summary>

* Go to debug at VS and select node or attach. Then if you choose node then it would be like below when running the app is with `npm index.js`
```javascript
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Debug",
      "address": "localhost",
      "port": 9233,
      "localRoot": "${workspaceFolder}",
      "remoteRoot": "/dist",
      "protocol": "inspector"
    }
  ]
}
```
* VS Code helps us to debug. Its config file located at .vscode/launch.json . To start debugging we need to create a debug file if it doesn't exist as:
![img](https://user-images.githubusercontent.com/7471619/69191309-17b1dc00-0ad7-11ea-83ba-238d2838b80d.png)
![im](https://user-images.githubusercontent.com/7471619/69191406-43cd5d00-0ad7-11ea-8444-c6f7e03059f8.png)
* Make sure you have defined `debug` script in package.josn as well.
```javascript
"scripts":{
   "debug": "nodemon -L --experimental-modules --nolazy --inspect=0.0.0.0:9229 index.js",
}
```
</details>
<details>
       <summary> Prometheus </summary>

* Prometheus is a  metrics system to collect data from both kubernates itself  and any prometheus  enable data application. so we can add prometheus metrics to our application so it would be able to collect.

Here is `appmetrics-prometheus` a module which collects application metrics  and makes it available to prometheus it also provides installation instructor.

- install
- require and attach to express server
- check /metrics
* It provides `/metrics` endpoint which `prometheus` provides to collect data. It provides alot of statistical data from our application. It is not human readable data
Prometheus is gonna gather these data and use it to display graph and charts that we gonna create ourself.
To have metrics running live into kubernetes:

#### To available at kubernetes
- update docker  `docker build -t nodeserver -f Dockerfile .`  nodeserver is image
- Then tag the image since we change it as `docker tag nodeserver seabayala/nodeserver:1.2.0`
- update `helm` chart tag at values.yml
* Now we can redeploy our application into Kubernate to have metrics live into kubernate

- `helm upgrade —install nodesever chart/nodeserver`

- install prometheuse into kubernate cluster, by using `helm install stable/prometheus `
`helm install --name prometheus stable/prometheus --namespace prometheus`

* it means when we search up for available application prometheus won't show up because it is in separate namespace

* `helm status prometheus`   display all application status either deploy/running/creating/init

* It provides commands to save our application names into pod inorder to expose that server on  local host we connect to it on the browser

* We can use Grafana that works with prometheus and we can create custom charts and custom dashboards
</details>

<details>
       <summary> OPENAPI 3 </summary>

* Yaml has important properties like
```
- info: description, version, email, version ....
- basePath: "/v1/"  // api versioning info comes here
- tage: name, description,
- paths:  // it is actual url thtat peopel will call
```
* [link](https://www.youtube.com/watch?v=w71TrUUWRDU) and [swagger editor](http://editor.swagger.io/)
* `operationId`: is controllername + '_'+ function to call like `PeopleList_peopleGet` in fact it represent what method in what controller should be called to implement this url
*
</details>
<details>
       <summary> Execution Context & Closure</summary>

# (no closure) Same Level Execution context 

```javascript
function outer(){
  const counter=0
  function incrementCounter(){
   counter ++; 
  }
  incrementCounter()
}
outer()
```
Steps JS Compiler runs:
* Line 1: declare a function outer, store it in Global Memory
* Line 8: execute function outer
In memory it creates a brand new Execution Context and thread goes inside function (thread goes from global memory to local memory) line by line. It stores any function or variable inside local memory inside execution context.
How JS trace it? It push outer into stack memory while it is inside execution context

* Line 2: Declare label counter and assign it to 0
* Line 3: Declare function incrementCounter 
* Line 6: execute incrementCounter 
It creates brand new execution context with its own variable environment. Then it push on incrementCounter to stack on top of outer and global. 
* Line 4: increment counter. To find it first it looks at its own env variables, can't find it then it goes one level down stack to find it. If it doesn't exist inside lower stacks and not in global memory it is closure when it is in upper stacks.

# Closure

```javascript
function outer(){
  const counter=0
  function incrementCounter(){
   counter ++; 
  }
  return incrementCounter
}
var myNewFunction = outer();
myNewFunction()
```
Steps JS Compiler runs:
* Line 1: declare a function outer, store it in Global Memory
* Line 8: declare myNewFunction, it would be undefined for now until we get whatever comes of calling outer with return it would be inside it.
It is execution, so it create a new execution context 
* Line 2: Inside execution context declare counter and set it to 0, add one row on stack
* Line 3: Declare and store incrementFunction inside local memory  
* Line 6: Return the function and store it inside myNewFunction
Now stack pops, and only global remains 
* Line 8: execute myNewFunction which is infact incrementCounter. Create executional context then increment counter. There is no counter anymore since it is wiped out from memory. 
Notice:
When we declare a function in memory, behind the scene javascript does very special. It determines also what data will be available when we end up calling that function. It is smart enough and determine what are souronding data needed in function. So counter is inside that souronded data and is attached to function declaraion
* Line 8: increment orange box one -> counter = 1, then pops up from stack
* Line 9: create executional context, push code to callstack, run counter ++, then add one to  box one -> counter = 2, even before checking lower stacks 
So Every function has its own memory which stays with it and it is persist. Most beatiful conceptional and empowering in javascript






</details>
<details>
       <summary> Promises, async await </summary>

* When I was node develop I always concern about performance issue but main concern was about debug ability.
* 
* Promise is an object that you can either resolve or reject it.
```javascript
var promise = new Promise(function(resolve, reject){
  if(false){
    resolve("some message")
  }
  else{
    reject("some info")
  }
})
```
## ASYNC
* Use implicit promises in `async`. Async are async function that implicitly has promises.
```javascript
async function foo(){
  return 42;
}
const p = foo();
// -> promise
p.then(console.log)
// print 42 on the next run
```
* Async function are daisy, it means you get value on the next time the micro tasks are on. 
```javascript
// semantically equivalent to just using promise result with the value
function foo(){
  return Promise.resolve(42);
}
```
* Is async await faster than promises?
* Yes, you read that right. The V8 team made improvements that make async/await functions run faster than traditional promises in the JavaScript engine.
## AWAIT
* The await expression causes async function execution `pause` until a Promise is fullfiled. It returns the value of `await` is fullfiled promise. It means execution of `async` is suspended on this await and it only resumed when the fetch promise fulfills. So if you call `foo` the implicit promise is out and then you can wait on it `then` to promise be fullfil. 
```javascript
async function foo(url){
  const r = await fetch(url);
  returns r;
}
const p = foo('https://v8.dev')
p.then(console.log);
```
* Below is equivalent to chaining a handler on to the fetch promise. The code inside handler is same as the await and the async function above
```javascript
function foo(url){
  return fetch(url).then(r => r);
}
```
### UnhandledPromiseRejectionWarning
* `Await` operator converted to a resolved Promise. If your fullfilled promise was `rejected` then you need to address rejections on top of await like below to avaoid getting `UnhandledPromiseRejectionWarning` or put `await call`   between a `try and catch`
```javascript
async function foo(url){
  const r = await fetch(url).catch(error => console.log("error");
  // r has resolved results unless there is rejection then console.log would handlepromise rejection
  returns r;
}
```
* We can await on any object that has `then` in it and it shouldn't ne a promise even. It can be even a `setTimeout()` function as this link with [NV8 google](https://www.youtube.com/watch?time_continue=402&v=DFP5DKDQfOc&feature=emb_title)

# V8
* When V8 sees an `async` it marked it as resumeable function. It means suspend it and resume it later. It creads so called an implicit promise which is a promise that is returned when you invoke the async function. 


```javascript
// now use it
promise.then(function( message ){
            console.log( message);
            },
             function(err) {
            console.log(err);
            }
          })
// we can write it as well
promise
  .then(function( message ){
            console.log( message);
            })
  .catch(function(err) {
            console.log(err);
            }
          });
```
```javascript
const apromis  = util.promisify(download)
apromise(passparams).then((res)=> anotherfun(res,new)).then(..)
```
## Tasks and Microtasks
* In v8 there are `tasks` and `microtasks`. `Tasks` handle events like `io` or `setTimeout` and execute one at a time
* Microtasks implement deffered execution for `async await` and `promises`. Microtasks queue is always empty before execution returns to `event loop`.



</details>

<details>
       <summary> sum </summary>

* in service
```javascript
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

const jwtVerify = promisify(jwt.verify);

class TokenVerificationService {
  async init({ location, apiVersion }) {
    this.baseUrl = `http://${location}/${apiVersion}`;
    const result = await axios.get(`${this.baseUrl}/auth-params`);
    const { publicKey, ...verifyOptions } = result.data;
    this.publicKey = publicKey;
    this.verifyOptions = verifyOptions;
  }

  async verifyToken(token) {
    return jwtVerify(token, this.publicKey, this.verifyOptions);
  }
}

const tokenVerificationService = new TokenVerificationService();

export default tokenVerificationService;
```
```javascript


class captchaService {
  async init({ location, apiVersion }) {
    this.baseUrl = `http://${location}/${apiVersion}`;
    const result = await axios.get(`${this.baseUrl}/auth-params`);
    const { publicKey, ...verifyOptions } = result.data;
    this.publicKey = publicKey;
    this.verifyOptions = verifyOptions;
  }

  async generateCaptcha(){

    // use promise.all
  }


  async verifyToken(token) {
    return jwtVerify(token, this.publicKey, this.verifyOptions);
  }
}

const captchaService = new captchaService();

export default captchaService;

````
* use it in middleware
* Create two middleware, one for calling `generateCaptcha` and another for `validateCaptcha`
```javascript

import tokenVerificationService from '.....';

export default async function verifyToken(req, res, next) {
  if (req.token === undefined) {
    return next(new errors.UnauthorizedRequest('Token required.'));
  }

  try {
    await tokenVerificationService.verifyToken(req.token);
    return next();
  } catch (error) {
  }}
    }
}
```
* generateCapcha
```javascript

import captchaService from '../services/token-verification-service.js';
export default async function generateCapcha(req, res, next) {
  // if (req.token === undefined) {
  //   return next(new errors.UnauthorizedRequest('Token required.'));
  // }

  try {
    await captchaService.generateCapcha();
    return next();
  } catch (error) {
  }}
    }
}
```

* call middleware from index.js
```javascript
import verifyToken from './middleware/token-verification.js';
app.use('/v1/protected-route', verifyToken, (req, res) => res.sendStatus(200));
app.get('/v1/captcha', (req, res) => res.sendStatus(200));
app.post('/v1/captcha/response', (req, res) => res.sendStatus(200));
```
</details>
<details>
	<summary> Passport </summary>

* A good [resource](https://github.com/Hyperkind/Basic-Authentication-with-Passport/tree/cb3ba96845c0282152322ab46bd077badde7a6ba)
* we need express-session module to export and pull it before passport and session takes an object secret which can be anything.
* Passport is most widely used authentication module in nodejs. It provides `authenticate` function. This function provides `strategy` to authenticate user. `strategies` are pluggable authentication modules that can install seperately.
* Through these `strategies` passport covers back end for variety of thrid parties including single sign on providers and login via social media
* After through one of the strategies user authenticate, passport take care of storing user in session and restoring it from every request.
#### Hook passport into App in Express
* we need two middle ware.
* `passport.initialize()` Returns middleware that uses request to store passport internal data in it.
* `passport.session()` Looks for previously serialized user in the current session. It uses deserialize function and `req.user` to provide users info in all application places.
* `npm install passport`
* create a module to have two properties to point out to our two main middle wares
```javascript
//auth.js
import passport from 'passport '
module.exports = {
  initialize: passport.initialize(),
  session: passport.session(),
  setUser: (req, res, next) => {
    res.local.user = req.user, // if users exist passport give it to us.
    return next();
  },
}
```
* then add it to `app.js`
```javascript
import auth from '../adderess/auth`
// they need to use after any session initialize
app.use(auth.initialize)
app.use(auth.session)
app.use(auth.setUser)
```
* Now passport is set we need an authentication strategy.
#### Retrieve user from db
* we can use one of the strategies
```javascript
npm install passport-local
```
```javascript
// at above passport module
passport.use(new Localstrategy)
```
....
* now we have to save and get it from session we call it serialize and deserilize
### Serialize
* put user into session. It takes a function and pass you user object and call back when it is ready to go
```javascript
passport.serializeuser(function(user, done){
  done(null, user.id) // save id into session and without an error function null
})
// oposit is deseirlizedi
takes a funciton and a done callback. this is what passport uses to pull back from session.
passport.deserializeuser(function(userId, done){
  user.findbyid(userid);
  done(null, user.id) // save id into session and without an error function null
})
```
* we can save everything in session but it is better to save user's id
```javascript
// after passport-local
passport.serializeUser((user, done)=>{
  return done(null, user._id)
})
passport.deserializeUser(async (id, done)=> {
  try {
   const user = await UserModel.findById(id).exec()
   return done(null, user)
  }catch(err){
    return done(err);
  }
})
```
 </details>
 <details>
	<summary> MiddleWare </summary>

* MiddleWare are backbone of express. Express is just routing and middleware framework.
* `MiddleWare` is a funciton with access to the request object, response object, and next function that when we call it goes to next middleware.
* `MiddleWare` can change request and response objects, end the request response cycle and call next middleware in the stack.If middleware does not call next or end the the cycle then server will just hang.
* Middle are the function that has to pass a `function` at the same time they access to params that is passed to them like below are the `opts`
```javascript
var options2 =  funciton(req, res, next){
    next();
  }
var options = funciton(opts){
  return funciton(req, res, next){
    // do sth with opts
    next();
  }
}
app.use(options({name: 'hey'})) // middleware with paramas. This pattern also is clusor (using a variable from outside of the function! )
app.use(options2) // middleware without params
```
* An example of whether we shoud send okay and next or stop app to doing more usine middleware as
```javascript
app.use(function(req, res, next){
  if(req.data.secretword === 'amir'){
    next();
  }else{
    res.status(404).send({message: 'nope'})
  }
})
```
#### Types
* Middlewares have different types :
* `Router level` which only one rout of application use it. `checkAuth()` is an error middleware in route level
* This middleware check authorize pple and say you are okay or not to log in.
```javascript
app.get('/todos',checkAuth(), function(req, res){
})
```
* `checkAuth()` is a function that if it was false it `res.status(404).send('something')` otherwise return next() to go through next middleware in the route.
```javascript
module.export = function(){
  return function(err, req, res, next){
  req.headers.theparams === config.myparams ? res.status(200).send({ message: 'Testing were okay' }):  next();
}
```
* And we use it as
```javascript
var validate = require('./middleware/validate')
app.use(validate()) // beucase it sends a function then we call it as (), otherwise we could have in this way we can send closure through validate
```
* Send function
```javascript
function validate(req, res, next) {
  // eslint-disable-next-line no-unused-expressions
  req.headers.my === config.correct? res.status(200).send({ message: 'Testing' })  next();
}
export default validate;
```
* Then call it as
```javascript
import validate from '../../middleware/validate.js';
routes.post('/response', validate, proxyRequest(`${baseUrl}/somewhare`));
```

* `Application level` which the whole application use it
```javascript
app.use(bodyParser.json())
```
* `Error-handling` middleware (can be in both app or router lever) is slightly different. It gets one extra argument as first one which is error. If you forget to put extra argument express thinks it is like a normal middle ware.
```javascript
app.use(function(err, req, res, next){
  console.log("error happened anywhere in the app came here")
})
// To trigger we should call it as
// now any where in app like inside route / if we create new error as
next(new Error('noop')) // it tells go to next in the middleware and trigger our error handling middle ware
// next means go looking for next app.use and check if it handles errors
```
* `Remember`: if `app.use` is before routes where the `next(new error)` happend then it never called it because after route there is no error middleware hadnler. So error-middleware hanlder should be always after errors in routes

#### app.param
* This function runs only if any routes has that param and check them before they actually gets into
```javascript
app.param('id', function(req, res, next, id){
  // check id and attach the result to req.lion and inide the routes if we check req.lion we would see the lion object. And it summerized all calls
})
### Example
* write a middleware to add  increment id and add new property to req. So everytime they post lions, it goes to updateid and attach one id to it which in routs is accessible.
var id = 0
var updateid = function(req, res, next){
  id++
  req.body.id = id  + ''
  next();
}

app.post('/lions',updateid, function(req, res, next){
  id = req.body.id

})
```
* `morgan` uses for login
* Notice if `updateid` were returning a function then we had to call `updateid()` but here it returns a value so we call it as var.
</details>


<details>
	<summary> Routes and Sequelize include</summary>

* command line
```javascript
brew info postgres

```
* Mounting URLS
* Create a `route/v1` folder and define a route like `users.js` as
```javascript
import express from "express";
const router = express.Router();

// this is important
const db = require('../../models/index.js');
db.sequelize.sync();
///

router.post("/", async (req, res, next) => {
  const { name, list } = req.query;
  let result;
  try {
   db.sequelize.models.User.create({ name: 'joe', bio: 'new bio' });
  } catch (err) {
    return next(err);
  }
  return res.send(result);
});
export default router;
```
* why there is User?`db.sequelize.models.User` This is sequelize. Notice when we define index.js in models, then other models would add to it as models object.
* In `index.js` you would have
```javascript
import users from "./routes/v1/users.js";
app.use("/v1/user", users);
```
* Above is API design and below is a web.
```javascript
var todorouter = express.Router();
todoRouter.get('/',function(req, res){
  res.json(todos)
})
app.use('/todos',todoRouter); // First came here our app.
```
* First it comes to app.use if the todos match, then it goes to todorouter.get.
</details>

### Email
<details>
	<summary> Send Email </summary>

* Many options here we use `Noodemailer`
* First build `transport` object by describing service(it is suggested) like mailgun or sendgrid or use `smtp` ourselve but since we don't have authority many emails could flag it as spam [here](https://www.youtube.com/watch?v=gzDB0ZGOjA0)
* Then when you create transport object use sendMail function as
```
transport.sendMail(From,to,subbject,content)
```
</details>

### Postgres
<details>
	<summary> postgres </summary>

### Start From Sratch
* [Tutorial link](https://www.youtube.com/watch?v=ExTZYpyAn6s)
* run below to have a basic npm package installed in empty folder
* Sequelize is promise based ORM (object relational mapping). A promise is the eventual completion of an async operation.
* Sequelize uses `bluebird` a promise library. So we can use any of the methods you find on `bluebird` website. Two mains one are `catch` and `then`. Then chain down 
success of an object.
for example
```javascript
User.findById(1).then((user)=> res.json(user)).catch((err)=>{ console.log(err)});
```
```javascript
npm init -y
npm i express sequelize pg
npm i express sequelize  sqlite3 -S // use -S to save this package in package.json
// check pg
brew install postgres
brew services start postgresql
brew info postgres
brew postgresql-upgrade-database
psql postgres
\du
\dt
```
* Then defince server.js as
```javascript
const express = require('express')
const Sequelize = require('sequelize')

const app = express();
const port = 8001;
// Create connection here 👇🏾
// Define Model by using the connection
// Sync
// Action
app.listen(port, () => { console.log('running server on port 8001')})
```
* Now test it by `npm start`
* It is better we create a class name connection and in that class all (create connection, define models(use models from models files), sync them and define assoication as well) then return an object as connection which will be used in `Actions`.
### Define Connection
* Move to sequelize by adding connection
```javascript
// inside database.js we would have below
// on index.js we could have import sequelize from './database.js' & it should print connection is establish 
import Sequelize from "sequelize";
/// first is for heroku
sequelize = null;
if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
	// the application is executed on Heroku ... use the postgres database
	sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
		dialect: 'postgres',
		protocol: 'postgres',
		port: match[4],
		host: match[3],
		logging: true //false
	});
} else {
	// the application is executed on the local machine
	sequelize = new Sequelize('postgres://localhost:5432/localDatabaseName', { dialect: 'postgres' });
}
sequelize.authenticate().then(() => {
	console.log('Connection to db established successfully');
});

export default sequelize;
```
* if needed more info like 
```javascript
// If your database has password or stuff then it means
// where above could be meanings: 
const connection = new Sequelize('databasename', 'username', 'password',{
host: '', port: '5432', dialect: 'postgres', storage, logging
});
```
### Define Model
* Connect to models. Model are singulare but the table they create are plurals.
```javascript
const User = connection.define('User',{
  name: Sequelize.STRING,
  bio: Sequelize.TEXT
});
// then you only need to import sequelize and sync it 
import sequelize from './utils/database.js';
sequelize.sync() // creates tables if not exist 
```

#### Extras on models 
```javascript
// OR use migrate cli to create model as sequelize model:create --name User --attributes "name:string, bio:text" and association you can define below model inside it as:
// associate: function(models){ Post.belongsTo(User)} // add FK user inside post model
// or you can run npx sequelize-cli init and replace above with connection.
//npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,loginId:string,imageUrl:string,ip:string,location:string
import User from './user.js'
///// this actuall connect model with sequelize and create table
let user = User(sequelize, Sequelize); // it does above
```
### Sync
* simply add sync to model or connection and remove authorize
```javascript
connection.sync(); // you can connection.sync({ logging: console.log, force: true}) it drops table and create new one everytime we run.
```
### Action


* Need just chain it to model.
```javascript
connection.sync({ logging: console.log}).then( ()=>{
User.create({ name: 'joe', bio: 'new bio'})
})
```
* now you can run again `npm start`;
* Here is db [cheatsheet](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546)
### Common CLI
```javascript
select * from public."groups" as p where p."ownerId" = '62f35c8aaef387692';
update public."projects" as p  set  title = 'Jaco' where p."ownerId"='44378ac7-c532-4194-964c-a056fb2446b2';
select p."projectId", p."ownerId", p."title", p."thumbnailKey", p."bannerImageKey", p."updatedAt" from  public."projects" as p order By p."createdAt" DESC limit 1;
delete from  public."projectGroups" as p where p."id"='4ff56868-9162-4892-9d07-9ed3d34e0f2a';
```
#### Inner and Left Join Secuelize
* User has many to many relatioship with groups and there is a  junction table called `groupMembers`. We want to retrieve groups that a specific user belongs to them.
* To inner join `groups` with `groupMembers` on `group.id = members.groupId` where `members.userId = 123` is like below:
```javascript
 const data = await this.models.Group.findAll({
      where: { "$members.userId$": userId },
      logging: console.log, // this is to show us actual query
      attributes: { exclude: ["groupName"] },
      include: [
        {
          as: "members",
          duplicating: false,
          model: this.models.Member,
          attributes: { exclude: ["groupId"] },
          required: true // true means innerjoin, and if it is false it would become Left Join,
        }
      ]
    });
```
```javascript
 const data = await this.models.Group.findAndCountAll({
      include: [
        {
          as: "members",
          model: this.models.Member,
          where: { userId },
          attributes: { exclude: ["groupId"] },
          required: true
        }
      ]
```
```javascript
       project = await this.models.Project.findOne(
          {
            where: { projectId },
            include: [
              {
                model: this.models.Group,
                required: true,
                through: {
                  where: { groupId: groupIds2 }
                }
              }
            ],
            logging: console.log
          },
          transaction
        );

```
* Notice: If you have
```javascript

```
### 4 tables inner joins
* Here we jave group to project many to many relation. and also group has many members. We have list of userIds which is in memeber table and a project id from project table.
```javascript
 group3 = await this.models.Project.findOne(
{
            // add check ownerId
            where: { projectId, "$groups.members.userId$": userIds3 },
            logging: console.log,
            include: [
              {
                as: "groups",
                model: this.models.Group,
                required: true,
                where: { type: "PERSONAL" },
                include: [
                  {
                    as: "members",
                    model: this.models.Member,
                    required: true
                  }
                ]
              }
            ]
    }
 )
```

* a reference for [subquery](https://hiswe.github.io/2018/09-sequelize-subqueries-with-squel/)
* When you define `belngsToMany` or `hasMan` relations then you need just query those table using include. The rest of comarison among foriegn keys are done by itself.
like:
```javascript
      const data = await this.models.Project.findAndCountAll({
        include: [
          {
            duplicating: false,
            model: this.models.Group,
            required: true
          }
        ]
      });
```
* Where the project and groups are defined as many to many relationshipships as
```javascript
Project.belongsToMany(Group, { foreignKey: "projectId", through: Share });
Group.belongsToMany(Project, { foreignKey: "groupId", through: Share });
```
* You could use other way defining group and defining conjunction table as `member`
```javascript
Group.hasMany(Member, { as: "members", foreignKey: "groupId" });
Member.belongsTo(Group, { sourceKey: "id" });
```

</details>
<details>
       <summary> ORM Sequelize </summary>

* Objec Relational Maping, any language has ORM to map objects to databases. one of them is `Sequilize`
### Sequelize
* [Sequelize](https://sequelize.readthedocs.io/en/v3/) is a promise based ORM that makes it easy to interact with sql. In simple words it transform a model from node to a table in db.
* A promise is the eventual completion or failure of an async operation. Because JavaScript is single threaded and if we dont use promises, our browsers  would lock up until some results comes back from db.
* `Sequlize` use `bluebird` promise library internally. It means we can use any method that is found the bluebird [website](http://bluebirdjs.com/docs/getting-started.html)

### Run small app
```javascript
npm i  sequelize sqlite3 -S
// sqlite is already instrall on all ios products
npm -y  // prepolulate package json file with some basic info
npm i express sequelize  sqlite3 -S // -s to save into package.json file
```
* sqlite is automatically defualt in sequelize, if we don't mention what type of db we want it goes with sqlite
* inside app.js or server.js
```javascript
const Sequelize = require('sequelize')
const express = require('express')

const app = express();
const port = 8001;
///// Connect app to DB ///////////
/////     Define Model  ///////////
///// Create Association //////////
///// Sync Model with DM //////////
///// Add Action to Table /////////
///// Add Action as route /////////
app.listen(port, ()=> { console.log('running server on port'+ port)});
```
* `npm start`
### Connect app to DB
* database Name, usrname and password are for connecting to db. But if it is local these could be anything.

```javascript
new Sequelize('database Name', 'username', 'password'), {optopm});
```
### sqlite
```javascript
const connection = new Sequelize('db', 'username', 'password'), {
  host: 'localhost',
  dialect: 'sqlite', // tell sequelize which db we use
  //storage: 'path to sql./sql.db', // since we use sqlite need storage to show which path we save our db.
  storage: 'db.sqlite', // just give the random name for our db 
  operatorAliases: false // this stop of receving of some unwanted messages to receive
}
// now make connect it to db as
connection
    .authenticate() // or use sync
        .then( () => {
           console.log('connection successfully established')
        })
         .catch(err => {
           console.log('error'err)
         }
```
### postgres
* `postgres` [tutorial](https://www.robinwieruch.de/postgres-express-setup-tutorial)
```javascript
const connection = new Sequelize(
  process.env.DATABASE, // in this case 'postgres'
  process.env.DATABASE_USER, // empty ''
  process.env.DATABASE_PASSWORD, // epmty ''
  {
    dialect: 'postgres',
  },
);
connection
    .sync()
        .then( () => {
           console.log('connection successfully established')
        })
         .catch(err => {
           console.log('error'err)
         }
```
### mysql
* Use [mySql & Heroku](https://github.com/anabaei/JavaScript_Notes/blob/3c9be839d070102f8ae03da38efd9fdb64ec6826/Heroku.md)
* Now if you run `npm start` or `node server.js` then it should run the server. Now you created a new sequelize instance and connected to postgres db.


### Define Model
* After create instance and connection now we define `models` to map javascript objects to tables.
### Models (map javascript object into sql tables)
* Models are `capitalize` and `singular`and sequelize convert them to  `plurals` names for tables.(models `User` converts to `Users` table)
* `define` methods create our model instance and accept two arguments, first is our model name and should match the variable reference name and second is the object to create a table.

```javascript
// first create a reference for our model with const,
// sequelize connection
const User = connection.define('User',{
    name: Sequelize.STRING, // attributes
    bio: Sequelize.TEXT    // text is kind of string with longer storage
})
```
### Sync Model with DB
* we can have some usefull info inside sync like when the table is created we can see them
```javascript
connection.sync();
connection.sync({
  force: true, // it drop table first then recreated
  logging: console.log // to show raw sql
})
```
* We can replace authorize with sync as well
```javascript
connection
    .sync({
      logging: console.log // we can see raw sql with this command
    })
        .then( () => {
           console.log('connection successfully established')
        })
         .catch(err) {
           console.log('error'err)
         }

```
---------- 
* `primary key` uniquely identified each row of a table and they are reference points that use when forming association between tables.
* We can add `uuid: { primaryKey: true, autoIncrement: true, defaultValue: Sequelize.UUIDV4}` 
### Add Action to Table
* Find model and add action to that like create, delete, etc... after model sync.
```javascript
connection
    .sync({
      logging: console.log // we can see raw sql with this command
    })
    .then(()=>{
         User.create({
           name: 'Joe',
           bio: 'asms'
         })
    })
        .then( () => {
           console.log('connection successfully established')
        })
         .catch(err) {
           console.log('error'err)
         }
```
#### Delete
```javascript

User.destroy('`name` LIKE "J%"').success(function() {
    // We just deleted all rows that have a name starting with "J"
})
```
* Bulkcreate: 
```javascript
User.bulkCreate(_users); // where users is a json file array of objects
```
#### Add Action As route

```javascript
app.post('/post', (req, res) => {
 //const newUser = req.body.user;
 User.create({
   name: 'joe',
   bio: 'new born'
 }).
   then(user =>{
     res.json(user)
   })
   .catch(error => {
     console.log(error);
     res.status(404).send(error);
   })
});
app.get('/findall', (req, res) => {
  User.findAll({
    where: {
      name: 'joe' //OR
      //  bio: {
      //   [opt.like]: 'Dave%'; wild card
      // }
    }
  })
  .then(user =>{
     res.json(user)
   })
   .catch(error => {
     console.log(error);
     res.status(404).send(error);
   })
}); 
```
## Create Association
* Adds UserId column to Posts table.
```javascript
Post.belongsTo(User);
```
```javascript
Post.create({
  UserId: 1,
  title: 'new'
})
```
* To retrive it as need to have `include` in our query as
```javascript
Post.findById('1',{
  include: [User]
})
// OR
Post.findById('1',{
  include: [{
    model: User
    attribute: ['name']
  }]
})
```
### Depth in Association
* FK is automatically generated.

* inside router
```javascript
router.delete('/user/:id', async (req, res, next) => {
     let newUser;
      try {
        newUser = await userService.deleteUserById(id);
      } catch (err) {
        return next(err);
      }
});
```
* Inside `userService`
```javascript
import Sequelize from 'sequelize';
import bcrypt from 'bcryptjs';
import UserModel from '../models/user.js';
class UserService {

  async init({
    port, database, host, dialect, password, username, storage,
  }) {
    this.sequelize = new Sequelize({
      username, password, database, host, port, dialect, storage, logging: false,
    });
    await this.sequelize.authenticate();
    this.modelInstance = UserModel('someinfo');

    await this.sequelize.sync();
  }

  async deleteUserById(id) {
    return this.sequelize.transaction(async (transaction) => {
      // keep verified users first to ensure faster response times
      const modelInstance = await this.modelInstance.findOne({
        where: { userId: id },
        transaction,
      });
      if (modelInstance !== null)
      {
        modelInstance.destroy('`name` LIKE "J%"').success(function() {
        })
      }
      .then(function(rowDeleted){ // rowDeleted will return number of rows deleted
        if(rowDeleted === 1){
          console.log('Deleted successfully');
        }
      }, function(err){
          console.log(err);
      });
      return null;
    });
  }
const userService = new UserService();
export default userService;
```
### Validation
* `freetableName` is a feature to match our model to a table.
* Third option of our creating constant User would be setting up some features.
* Qualifiers: like the types
```javascript
sqlite3 // getinto terminal
.qutie // exit
// go to folder you want
sqlite3 testdb.db // create db
.databases // relveals dbs
```
## Associations
* Join tables is merging tables and returns data associated with each other.
```javascript
Post.belongsTo(User); // puts foreignkey UserId in post table
//OR to rename foreignKey you can have
Post.belongsTo(User, {foreignKey: 'newuserid'}); // this does the same as above
Post.belongsTo(User, {as: 'userRef', foreignKey: 'newuserid'});  // this does the same as above  but creates alias. in return results instead of user:{...} you would see userRef:{...} Also to make sure to change include :[{model: User, as: 'userRef' }]
```
```javascript
// associate retrieve only one item
Post.belongsTo(User); // puts FK userId in post table
User.hasOne(Post);  //  same as above
```
```javascript
User.hasMany(Post); // puts  FK of userId in post table
// when a user query, it receives an array of posts associated with the user
```
### One To Many
```javascript
Post.hasMany(Commnet); // it create FK postId in commnets table
```

* below find a post with the user associated with that post.
```javascript
Post.findById('1',{
  include: [User]
})
```
### Example
```javascript
Const Post = Connection.define('Post',{
  title: Sequelize.STRING,
  content: Sequelize.TEXT
})
connection.sync({
  force: true
}).then(()=> {
  Post.create({
    UserId: 1,
    title: 'new',
    content: 'cont'
  })
})
```
```javascript
app.get('/allposts',(req, res)=>{
  Post.findAll({
    include: [User]
  }).then( posts => {
    res.json(posts);
  })
})
```
### Many to Many
* This code automatically creaets joint table include post and user ids
```javascript
User.belongsToMany(Post)
Post.belongsToMany(User)
```

## Transaction with Sequelize
</details>

### Mongo
<details>
	<summary> Mongod </summary>

* Mongo db is a non relational database nosql. In fact saving json files into database. We need to persist our apid data so we use mongo. Install [source](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
```javascript
//brew update
//brew install mongodb
brew tap mongodb/brewbrew
brew services start mongodb-community
// brew services start mongodb
mongod // to start mongo
mongo  // to get into mongo shell
mongo --help
show dbs   // show all databases
use admin  // create a database admin and switch into it
db.dropDatabase();
db.users.drop()
 ```
 * `Collections` are like tables. A place mongo save things we have collection of `dogs` `cats`
 ```javascript
use poppies // create database
db.createCollection('toys') // create collection
show collections // display all collections
db.toys.insert({color:'red', name:'yoyo' }) // insert document(data) into collection
db.toys.find() // query everything inside
 ```
 #### ORM
 * ORM is the library allow us talk to databse. For mongo and node `mongoose` is populare
 * Mongoos allow us to have schema (mongo itself doesnt care about schema).

 ( we dont need actual schema but it is good), allow us to stablish relationships. (mongo doesnt care about relational. it is all on mongoos)
 ### Connect to Node
 * If database exist it connects to it and if not it create one
```javascript
// userModel.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dialuge'); //dialuge is name of database
// if running inside docker then 
mongoose.connect('mongodb://docker.for.mac.localhost:27017/databaseName')
// CREATE SCHEMA:
import mongoose from "mongoose";

const { Schema } = mongoose;

const ownerSchema = new Schema({
  name: String,
  email: String,
  password: String,
  phone: Number,
  _enabled: Boolean,
});
export default mongoose.model("user", ownerSchema);
```
* It creates `users` collection
```javascript
import User from "./owner_model.js";

 const newUser = new User({
      name: "ASS",
      email: "amir@gmail.com",
    });
  
  newUser.save(function (err, book) {
      if (err) return console.error(err);
      console.log(`saved to bookstore collection.`);
    });
```
* Or try to hit the route and make new instance 
```javascript
// userRoutes.js
var TodoModel = require('./userModel');
router.route('/').get(function(req, res){
  TodoModel.create({
      name: 'clean up',
      completed: 'true'
  }).then(function(err, TodoModel){
  console.log(err)
  })
      console.log("came here!!!")
      res.send({ok: true});
    });
module.exports = router;
```
* We could use `save` when creating models instead of `create` as
```javascript
 const re = new TodoModel({ content: "new one", completed: true });
    re.save(function (err, book) {
      if (err) return console.error(err);
      console.log(`saved to bookstore collection.`);
    });
```
* Use this router anywhere as
```javascript
//routes.js
var router = require('express').Router();
router.use('/users', require('../user/userRoutes'));
module.exports = router;
```
*
```javascript
// index.js
var api = require('../api/routes');
app.use('/api', api);
```
* Then you done. `Notice` if you dont mention type, then mongoose thinks it is an object and need to define a nested object inside like
```javascript
// in schema
address: { // means address is an object
  state: {
    type: String
  }
}
```
* To create relational one to one (user-post) and one to many(post-category) in post schema you would have
```javascript
  author: { type: Schema.Types.ObjectId, ref: "user" },
  categories: [{ type: Schema.Types.ObjectId, ref: "category" }]
```
* In fact in user model we have no sign of referencing to `post`. How do we know the posts of a user? we check post model and ask it posts for that specific user.
* What is `denormalizing` data? `Normalize` data is when there is only one way to access a certain type of data in dbs. When it becomes `two ways` accessing data (post to user and user to post) we call it denormalization.
* A complete example of mongo
```javascript
var DogSchema = new mongoose.Schema({
  name: { // here is a property we call it name and its type is string.
    type: String,
    required: true,
    //enforce that no two dogs can have the same name
    unique: true
  },
  whenAdopted: Date,
  hasShots: Boolean,
  collarCode: Buffer,
  age: {
    type: Number,
    // setup min and mx validations
    min: 0,
    max: 30
  },
  toys: [],
  // nested objects. location object which has property and there is no type
  location: {
    state: String,
    city: String,
    zip: Number
  },
  // Create relational database in mongoos
  // type define an id. Owner schema exist in this database somewhere
  // so cant save a dog without an owner
  owner: {
    type: mongoose.Schema.Types.ObjectId, // pass ownerid here!
    ref: 'owner',
    required: true
  }
});
```
* `Schema` is actual blueprint of our data. `Model` is our javascript representaion. `collection` is group of documentations
* searching by index is much faster than seach by other attributes. In mongo we can index any property
```javascript
// userModel.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

});

module.exports = mongoose.model('user',UserSchema);

// userRoutes.js
var router = require('express').Router();
//var logger = require('../../util/logger');
var TodoModel = require('../dbTester');
// setup boilerplate route jsut to satisfy a request
// for building
router.route('/')
  .get(function(req, res){

TodoModel.create({
    name: 'clean up',
    completed: 'true'
}).then(function(err, TodoModel){
 console.log(err)
})
    console.log("came here!!!")
    res.send({ok: true});
  });
module.exports = router;
```
* Also we can have above as
```javascript
// userRoutes.js
var router = require('express').Router();
var userController = require('./userController');
router.route('/')
  .get(userController.post);
module.exports = router;
```
* And define controller as:
```javascript
exports.post = function(req, res, next) {
	var newUser = req.body;
	User.create(newUser).then(
		function(user) {
			res.json(user);
		},
		function(err) {
			next(err);
		}
	);
};
```

</details>
<details>
     <summary> Query with Mongo</summary>

* Documents returns by mongoos are not just object, they have specific methods like `remove` or `create`
#### Find
* Find always return an array either is empty or not.Simple query is like
```javascript
var post = mongoose.model('post', postSchema);
post.find({name: "some name"}, function(err,doc){
  /// do whatever you want with doc here
})
// OR
let result = await post.find({name: "some name"}) // because mongoose return promises
```
```javascript
Model.findById('7498237492371628'); // pass model objectId
```
#### Save
* To save
```javascript
var dog = new Dog({
  name: "name1"
})
dog.save(function(err,saveDog){
  if(err){
    next(err)
  }else{
    res.json(saveDog);
  }
})
```
#### Find and update
* Find by id and change the property you already provided which here is name.
```javascript
Model.findByIdAndUpdate('89463928179382', {name: 'new name'}, function(err, updateDoc){
  if(err){
    next(err)
  }else{
    res.json(updateDoc);
  }
})
```
#### Remove
* Because documents returns by mongoos are not just object, they are instance of collections and have specific methods and props like `remove` function.
```javascript
Model.findOne({name: 'Gigi'}, function(err,doc){
  doc.remove(function(err,removedDoc){
    // deleted document from db
  })
})
```
</details>
<details>
     <summary> Mongo Populdagion</summary>

## Population

* It is like join tables at call time. <br />
![text](https://user-images.githubusercontent.com/7471619/68080990-bb0aad80-fdc3-11e9-9929-f766e47196ac.png)
* This one instead of owner id, returns actual object of owner when querying. So if we do `dog.owner` returns the actual object of owner.
* We could say instead of whole owner object just give us name by puting comma after owner like
```javascript
.populate('owner, name')
```
* A Correct way of controller is here as [userController](https://github.com/FrontendMasters/api-design-node/blob/step-9/server/api/user/userController.js)
```javascript
// to get data or error from a model find in mongo
router.route('/').get(function(req, res, next) {
	postModel.findOne({ title: 'Casino Royale' })
     .populate('author')
    .then(
		function(post) {
			res.json(post);
		},
		function(err) {
			next(err);
		}
	);
});
```
* For example, below search would go through post and check author and the array of categories provided at params. We have to call `exec` because `populate` not returning promise.
```javascript
Post.find({}).populate('author categories').exec().then(
```

</details>
<details>
     <summary> Work with Mongo</summary>

* After connecting to monogo now work with it.
* Just makesure that there is schema as:
```javascript
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos', {useNewUrlParser: true });
// schema is a blueprint and model is actual represantation of our db.
var TodoSchema = new mongoose.Schema({ completed: Boolean, firstNaame: String}); //define what properties and the value types we want.
// Now tell the mongo about this schema.
var TodoModel = mongoose.model('Todo', TodoSchema); // first argument is name of the collection and second argunm
// TodoModel.create({
//     name: 'clean up',
//     completed: 'true'
// }).then(function(err, TodoModel){
//  console.log(err)
// })
module.exports = TodoModel;
```
* then import TodoMode and create table or add data as
```javascript
var TodoModel = require('../todo.js')
// inseid get routes
TodoModel.create({
    name: 'clean up',
    completed: 'true'
}).then(function(err, TodoModel){
 console.log(err)
})
```
* Above adds `_id` and `__v` properties to our table as default.
* `Notice`: if you add a property in create when it not exist inside `schema` then it would ignore that it even exists! so if you have different service talking to one db, their shcema should be same too.
* `Notice` there is no migrations in mongoos. If you change the schema it would validate new comming datas and doesn't touch the already existed datas format
* Add owner to todo by adding this propertys
```javascript
owner: {
  type: mongoose.Schema.Types.ObjectId, // tell the mongo there is objectId
  ref: 'owner',                        // tell the mongo it referencexes to another model/schema at the same db
  required: true
}
```

*
</details>
<details>
	<summary> Files </summary>

* The type of files when defining them as forexmaple db, is `Buffer`. Node readfiles as buffer we can have
```javascript
// at node terminal using file system
var fs = require('fs')
fs.readFileSync('./package.json') // returns numbers .toString() gets actual file.
```
*
</details>
<details>
	<summary> Image Upload , File streaming</summary>

* Node can't work with binary data so it saves binary data into buffer. 
* One problem with reading from buffer and wrting is buffer takes a lot of memory and it could
creash our service. The solution is using `stream pipe`
* if you use Express, `body-parser` handles only json. To handle multipart you need muler, connect-busboy or connect-multiparty. 
```javascript
var fileupload = require("express-fileupload");
app.use(fileupload());
app.post("/upload", function(req, res)
{
    var file;
    if(!req.files)
    {
        res.send("File was not found");
        return;
    }
    file = req.files.FormFieldName;  // here is the field name of the form
    res.send("File Uploaded");
});
```
* or use `multer` with more filters like imageSize and define destination of uploads

```html
<form method="post" enctype="multipart/form-data" action="/upload">
    <input type="hidden" name="msgtype" value="2"/>
    <input type="file" name="avatar" />
    <input type="submit" value="Upload" />
</form>
```
```javascript
var express = require('express');
var multer = require('multer');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;
var upload = multer({ dest: 'uploads/' });
//  fileSize: 10MB,
//  dest: ...
//  fileFilter: ....

server.listen(port, function () {
  console.log('Server successfully running at:-', port);
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/file-upload.html');
})

app.post('/upload2', upload.any(),  function(req, res) {
  console.log(req.files); // JSON Object
});

// app.post('/upload', upload.single('avatar'),  function(req, res) {
//   console.log(req.files); // JSON Object
// });
```
### Save into Mongo
```javascript
json = {  
        ...info,
        id,
        more: {
          path: thePathOnS3,
        }
}
      
this.db.collection("myMongoCollectionName").updateOne({ _id: id }, { $set: json }, { upsert: true });
```

### Stream  to S3
* 
```javascript
 const uploadToawsS3 = () => {
const file = fs.createReadStream(localPathToFile or the actal file or destination)); 
// or const file = fs.readdirSync(localPathToFile or the actal file);
s3AWS.upload(pathIns3AWS, mimeForContentType, file, (error, info) => {
        if (err) {
          reject(err);
        } else {
          resolve(info);
        }
      });
 };

// S3 class define upload function as below
  async upload(key, mimeForContentType, stream, callback) {
    this.s3AWS.upload({ Bucket, Key, Body: stream, ContentType: mimeForContentType }, cb);
  }
```

```javascript
var s = fs.createReadStream(file);
s.on('open', function () {
    res.set('Content-Type', type);
    s.pipe(res);
});
```

###  Resize 
* Sharp is npm to resize  
* Beore uploading to s3 we could resize it as below then call uploadToawsS3. 
```javascript
   const pipe = sharp(file);
      pipe.resize(400).toFile(destination, err => {
          if (err) {
            reject(err);
          } else {
            uploadToawsS3();
          }
        });
```
### File Systems
* Remove a file 
```javascript
 fs.unlinkSync(`path to the file`);
 // create folder
  fs.mkdirSync('///');
// exist?
fs.existsSync("///")
```
</details>
<details>
      <summary> Work Thread and sub Threads</summary>

```javascript
import { Worker } from "worker_threads";
```

```javascript
 this.resizeWorker = new Worker("location of our engine.js", {
        workerData: {
          var1: someInfo,
          var2: moreInfo,
          var3: an id like uuid.v4(),
        },
      });
```
* Then inside engine.js we have
```javascript
import { workerData } from "worker_threads";

const { var1, var2, var3 } = workerData;
// everything run here as sub thread 

```
* [resource](https://www.youtube.com/watch?v=wT4lg9oiMvI)
</details>
<details>
	<summary> Testing </summary>

  * `unit testing` is testing functions to check what we expect the results are of functions or objects
  * `integration testing` testing endpoints with different params to check if we get what we expect or not.
  * `TDD` is test driven development means you write test first then write actual program
  * `BDD` behavior driven development is how you write a test.

```javascript
app.litsten(3000) // it means app is running at this port. To test we can export app and test it on whatever is running
OR
module.exports = app // export app because we want to expose entire app for testing
  ```
* you could start app and then export it, it works too. Even test can start app on different port
* We gonna use Mocha, Chai and supertest module to test.
```javascript
var app = require('./app');
var request = require('supertest');
describe('todos', function() {
  it('should GET all todos', function(done) {
    request(app)
      .get('/todos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .done(function(err, resp) {
        expect(resp.id).toBeDefined();
        done();
      });
  });
});
```
 </details>
<details>
	<summary> Environement variables</summary>

 * `process` is actual process we are running and `process.env` displays all environment objects we have.
 ```javascript
export HEY = 'hey'; // inside our app
 ```
 </details>



 </details>
 <details>
<details>
	<summary> Postgres and Import</summary>

* [here](https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb)
```javascript
 brew install postgresql
 // run postgres and make sure everytime it runs
 // if you dont want background run, use it
pg_ctl -D /usr/local/var/postgres start
postgres -V
psql postgres // run it to connect.
```
```sql
\du
\dt
```
* command lines
```javascript
select a."deletedAt", a."title", a."ownerId", a."id"   from public."projects" as a where a."title" = 'test' ;
//
select * from public."projects" as a where a."ownerId" = '435dc722-f977-49c6-a50d-c1e5c3ae6834' and a."deletedAt" is not null ;
```
#### Example:
* Add a model like user.js in models/user.js as
```javascript
const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
    });
    return User;
  };
  export default user;
```
* Then define `models/index.js`
```javascript
import Sequelize from 'sequelize';
const sequelize = new Sequelize(
  'postgres', // process.env.DATABASE,
  '', // process.env.DATABASE,
 '', //  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);
const models = {
  User: sequelize.import('./user'),
//  Message: sequelize.import('./message'),
};
Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});
export { sequelize };
export default models;
```
* Finally add sequilize in sync when running in index.js
```javascript
import models, { sequelize } from './models';
sequelize.sync().then(() => {
      app.listen(3000, ()=>console.log('server is running'))
}
```
* Notice import es6 feature not inside node, do these 3 steps:
```javascript
npm install @babel/core @babel/register @babel/preset-env --save-dev
```
* create start.js as
```javascript
// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require("@babel/register")({
  presets: ["@babel/preset-env"]
});

// Import the rest of our application.
module.exports = require('./app.js')
```
* then instead of runnign `node app.js` run `start app.js`
* complete resource is [here](https://timonweb.com/posts/how-to-enable-es6-imports-in-nodejs/)
</details>
	<summary> CRUD & Association</summary>

* [Generatedata.com](http://generatedata.com/)
* op methoods use [operators](https://sequelize.org/master/manual/querying.html)
* const op = Sequelize.Op;
* name: {[op.like]: 'Dav%' }
* Association:
After we define models below automatically added userId to post table.
```javascript
post.belongsTo(User); // a fk added to post model.
```
* to search
```javascript
post.findById('1',{
  include: [User]
  // OR specify attribute and not all model
  // include: [{
  //   model: User
  //   attribute: ['name']
  // }]
})
// To create
Post.create({
  UserId: 1,
  title: 'First post`,
  content: `content 1`
})
```
* ONE TO MANY: a foriegn key of post is added to comments table.
```javascript
post.hasMany(Comment, {as: 'All_Comments'});
```
* search
```javascript
 post.findById('1',{
   include: Comment
 })
```

</details>

<details>
	<summary> Callbacks or cb() </summary>

* `cb` is how a vanilla callback function is passed into a asynchronous function (sometimes labeld next) 
* Typically the first argument is an `error` which is usually false if everything goes fine, second argument is usually data of some form. 
```javascript
function myAsyncFunction(arg1, arg2, cb) {
    // console.log(arg1, arg2)
    // console.log("Async")
    // async things
    cb(false, { data: 123 });
}
```
* How to use it 
```javascript
myAsyncFunction(10, 99, function onComplete(error, data) {
    if (!error) {
        console.log(data)
    } else {
        console.log("error")
        // disaster - retry / respond with an error etc
    }
});
```
Alternative solution is returning promises then in myfunction you can use then and catch as this [link](https://stackoverflow.com/questions/31780872/what-is-cb-in-node#)


* Mentality JavaScript is a bunch of nested programs.
* `call back` is a piece of code that we pass along when we invocing a `function`, and it would be invoked after function is `done`
```javascript
fs.readFile(__dirname+"./english.10", "utf8", function(err,result){
  if(err){
    //do something return
  }
  console.log(result)
})
```
* function is callback convention that `error` first and `result` is after.

* Below function never goes stackover felow because for each callback it execute console after that and never wait it finish first callback. and when the first round finish it removes it from stack and add a new one. So there is always one function in stack memory
```javascript
function fact(num)
{
  setTimeout(function(){
    fact(1)
    console.log("Hello"); },
  0);
}
console.log(fact(100000))
```
* But below function lead to stackover felow. The differnces with above is only callback which is created by setTimeout.
```javascript
function fact(num)
{
      return  num *  fact(num-1)
}
console.log(fact(100000))
```


#### Biolerplates
* At below `app.post('/users'` code, register a `route` in node application, as an input that can receive a post request then the function would be called.
* This function receive a `request` and `response` object so it can look at what was requested and send back response
* `connection.query` insert user into table then after that it the funciton`callBack` received data from it. Then inside call back we send result which either can be err or success.

```javascript
app.post('/users', function (request, response) => {
    connection.query('INSERT INTO users SET ?', request.body,
    function(err,result){
      if(err) throw err;
      result.send('User added to table with id'+ result.insertId)
    })
  })
```
* At above only two lines are pure code `insert and send lines` and the rest are bioler plates
* Another example of `initialization` of an app when spin up for database
```javascript
// database setup
connenction.query('CREATE DATABASE IF NOT EXIST test', function(err){
  if(err) throw err
  connection.query('USE test', function(err){
    if(err) throw err
    connection.query('CREATE TABLE IF NOT EXIST users('
     + 'id INT NOT NULL AUTO_INCREMENT, `
     + 'PRIMARY KEY(id),'
     + 'name VARCHAR(30)'
     + ')', function(err){
        if(err) throw err
     })
  })
})
```
* Above table showing 3 callback functions `function(err)`
  </details>
  <details>
	<summary> ASYNCHRONOUS  </summary>

* Different source of Async
![src](https://user-images.githubusercontent.com/7471619/63243551-bfd1b380-c20f-11e9-849b-035fe53f17d3.png)
* Another words, asynch are things that likely push work to queue `event loop` to be executed later.
![ae](https://user-images.githubusercontent.com/7471619/63243721-42f30980-c210-11e9-9902-641e2ad33d54.png)


*  Model (concurency model) is not like Java or C. JavaSript engine executes `only one` program at the same time so we never have multithreading in JavaScript ( a bank with only one teller)
* So there is a queue or line up to execute programs whihc is called `event loop` in javascript.

### Why FAST!
* Beucase it reads through codes and before results backing it traverse next line
```javascript
var weatherReq = new XMLHttpRequest();
    weatherReq.onload = weatherSuccess
    weatherReq.open('get', url, true)
    weatherReq.send()

var fiveDayReq = new XMLHttpRequest();
    fiveDayReq.onload = fiveDaySuccess;
    fiveDayReq.open('get', url, true)
    fiveDayReq.send()

function weatherSuccess(){
  // do sth when it is success
}
function fiveDaySuccess(){
  // do it when sth is success
}
```
* JavaScript single threat engine runs above as:
```javascript
var weatherReq = ... // makes a request but doesnt wait to come back
var fiveDayReq = //makes a request but doesnt wait to come back
// at this point executing of program is done! we are not binding to get results
```
* behind the seen, after each request was sent there are pool of threads which makes these two above runing at the same time. But Javascript engines just read them as we said and done.
#### Concurrency and non-blocking (Example of blocking)
* But there is a way to create a block. When an event handler call back needs to be done it hugs all cpu. in 10 secs nothing can be done. Other languages are preemtive which means if a customer takes time they kick him at the end of lineup but in JavaScript Engine `runs completion`
```javascript
btn.addEventListener("click",function() {
  const start =Data.now()
  const a = 10
  while (Date.now()<start+ a +1000) {}
})
```

* JavaScript is like a single thread. It is like a bank with only one teller while a peace of a code is executing the rest of code has to wait. JavaScript has an `event loop` which works like a queue for.
* JavaScript is  `non-blocking` code when you wait for a request to come back from like remote service. If a job hug all cpu then even blocking would happen
* `not all callbacks async`: for example if a button click, all eventhandlers run `synchronosuly`
* `functions are not preemtive`: it means unlike other languages, if a funciton starts it has to be completed
* JavaScript supports `cooperative concurrency`. It means if a task takes time, bank opens another teller to run the rest of customers on the line when

 </details>

<details>
	<summary> run</summary>

* Middleware apply actions on some data, and it has access to req, res and some data.
* It added property to request object [here](https://expressjs.com/en/guide/writing-middleware.html)
```javascript

```
* run dev-deploy
```javascript
node dev-deploy -d sphinx -i
```
* Then make sure service yml assign correctly. like kharon assign to both cereberus and sphinx
```javascript
version: '3'
services:
  kharon:
    ports:
      - "${SERVICE_PORT}:3000"
    image: ${DOCKER_IMAGE}
    container_name: master-kharon
    environment:
      - KHARON_LOCATION_FOR_CERBERUS=${KHARON_LOCATION_FOR_CERBERUS}
      - KHARON_API_VERSION_FOR_CERBERUS=${KHARON_API_VERSION_FOR_CERBERUS}

      - KHARON_LOCATION_FOR_SPHINX=${KHARON_LOCATION_FOR_SPHINX}
      - KHARON_API_VERSION_FOR_SPHINX=${KHARON_API_VERSION_FOR_SPHINX}
```
* but sphinx point to non so remove all environemnt
* Then go to vsc and run the debug


</details>
<details>
	<summary> Test </summary>

* `Test Double` is replacing a module or method with the one. It can be a hardcode behaviour of a funciton no matter of what the actual response is and is config in test only It includes `stub`, `spy`, `mock` and `fake`
* Testing dependencies is actually an integration testing not unit test.
*
### Unit tests
* You should be able to do it without internet [here](https://www.youtube.com/watch?v=VcuJn_CJqPI)
* `sinon` just overright our objects, and keep the original one to replace it at the end
* We say if request object get function was called, then it should return what is defined at yields as
```javascript
// it runs before every single it in our node
const request = require('request')
beforeEach( ()=> {
  sinon.stub(request, "get") // we are telling overright the request object with get method
  .yields(undefined, {}, JSON.sgtringify({name: 'you'}) ) // yields always call the callback wich here is undefined means no err, and empty response and body is stringify of the object
})
afterEach ( ()=>{
  request.get.restore() // to restore the sinon and back to way it was
})

getweather('a','b').then(result =>{
  result.name.should.exist;
  done();
})
/// then test would be

```
### Jest test
* `npm test` then it runs the files like `hello.test.js` which are written for `hello.js`
```javascript
it('Retrieve auth configuration to verify tokens', async () => {
    const res = await agent.get('/v1/auth-params');
    expect(res.status).toBe(200);
```
* simple test define it, then using what to expect to be. or we can say
```javascript
it('test hello function', () => {
    expect(hello('amir').toBe('hi amir');
```
#### Functions
* to test function
```javascript
const functions = require('../')

test('add function to equal', () =>{
  expect(functions.add(2,2)).toBe(4)
})

test('add function to not equal', () =>{
  expect(functions.add(2,2)).not.toBe(5)
})

test('add function to not equal', () =>{
  expect(functions.add(2,2)).toBeNull()
})

/// this returns 0,null or undefined as true
test('add function to not equal', () =>{
  expect(functions.add(2,2)).toBeFalsy()
})
///REGEX. not inclued B in result of funciton. adding i at the end is key insensitive
test('add function to not equal', () =>{
  expect(functions.add(2,2)).toMatch(/B/i)
})
```
* for arrays
```javascript
// if the function returns array
test('add function to not equal', () =>{
  expect(functions.add(2,2)).toContains('amir')
})
```
* `toBe` is for primitive type, for comparing `objects and arrays` in javascript their type is `refrence` type and store in different area in memory.
* use `toEqual` for objects
```javascript
// toBeLessThanOrEqual
test('add function to not equal', () =>{
  expect(functions.add(2,2)).toBeLessThan(12)
})
```
* Compare [function](https://www.youtube.com/watch?v=7r4xVDI2vho)
```javascript
test('user test ', ()=> {
  expect(functions.createUser()).ToBe({ //`toEqual` for objects and arrays
    firstName: 'amir',
    lastName: 'nabaei'
  })
})
```
* `toBe` gives error, tobe is primitive type like string, but in object and arrays are reference type. You can have two same objects saved in different places in memory so we should use `toEqual`
* or use regulare expressions
```javascript
expect.not.toMatch(/I/i);
```
#### SINON
* [An openAPI to fer testing](https://jsonplaceholder.typicode.com/users)
* [Sinon](https://www.youtube.com/watch?v=Qlmv7nox5pM)
```javascript
function testme(callback){
  callback();
}
describe('testme function', function(){
  it('should call callback', function(){
    let callbackspy = sinon.spy() // anonymous call spy
    testme(callbackspy)
    expect(callbackspy).to.have.been.calledOnce // check back callback
  })
})
```
* In this case we use spy to wrap an existing method. `setName` function and `user` obejct are an example. It takes a name and setName to name.
```javascript
const user = {
  setName: function(name){
    this.name = name
  }
}
// unit test
describe('setName function', function(){
   it('should be called with name', function(){
     let setNameSpy = sinon.spy(user, 'setName') // set as (object, method)
     user.setName('Harry Pater')                 // then call object.method

     expect(setNameSpy).to.have.been.calledOnce
     expect(setNameSpy).to.have.been.calledWith('Harry Pater')

    //important to remove spy at the end to prevent future errors
    setNameSpy.restore()
   })
})
```
#### stubs
* This is second type of test double. They come with all functioenality with spies but they can replace entire function and spy on them.
* `stubs` has method that can custom behaviors including:
```
return specific value
throw exception
autoatically invoking callbacks with provided arguments
define behavior on nth call to stub
```
```javascript
// this post user object to /user endpoint and then invoke the callback
function saveUser(user, callback) {
  jQuery.post('/user',{
    first: user.firstname
    last: user.lastname
  }, callback)
}
///
describe('saveUser', function(){
   it('should call callback after saving', function(){
     let post = sinon.stub(jQuery, 'post') // prevent to send post request
     post.yields() // make the stub call the 1st callback it receives. Also we can pass argunemts to yields to provide with arguments
     let callBackSpy = sinon.spy(); // use spy as callback
     let testUser = {firstname: 'sfs', lastname: 'sfsfsa'} // create test user object
     // now call saveUser
     saveUser(testUser, callBackSpy);
     expect(callbackSpy).to.have.been.calledOne;
     post.restore();

   })
})
```
```javascript
describe('saveUser', function(){
   it('should send create parameters to expected url', function(){
     let post = sinon.stub(jQuery, 'post') // prevent to send post request
     let expectedUrl = '/users'
     let expextedParams = {
       first: 'ddsddd',
       last: 'dddssa'
     }
     let testUser = {
       firstname: expextedParams.first,
       lastname:  expextedParams.last
     }

     saveUser(testUser, function(){});
     expect(post).to.have.be.calledWith(expectedUrl, expectedParam);
     post.restore();

   })
})
```
* Some Examples:
```javascript
import httpMocks from 'node-mocks-http';

const res = httpMocks.createResponse({
  statusCode: 200,
});
const req = httpMocks.createRequest({
  id: '8797987',
});
let next;
beforeEach(() => {
  next = sinon.fake();
});
describe('do something', () => {
 test('it calls next when error has ', async () => {
    // sinon.stub(axios, 'request').yields(new Error('Not Allowed'), {}, {}); it jumps from axios request object
    sinon.stub(axios, 'request').throws(new ERROR('Unknown error')); // throws error always
    await somefunnction(req, res, next);
    expect(next.callCount).toEqual(1); // next callout 1
    expect(next.getCall(0).args.length).toBe(1); // when next is callout, it should have one argument
    axios.request.restore();
  });
});
```
### Mocks
* Similar to stubs but can be used to replace wholde objects and alter behavopr.
* Have to define your expectation up front and call verification function at the end of the test.
```javascript
// function we test
function setUpNewUser(info, callback){
  const user = {
    name: info.name
  }
  try{Database.save(user,callback)}
  catch(err){callback(err)}
}
```
* test
```javascript
describe('setUpNewUser', function(){
  it('should pass object with correct value to save only once', function(){
    let info = {name: 'info'}
    let expectedUser = {
      name: info.name,
      nameLowecase: info.name.toLowerCase()
    }
    let database = sinon.mock(Database)
    // we setup expectations here and later we call function
    database.expects('save').once.withArgs(expectedUser)
    // call the funciton
    setUpNewUser(info, funciton(){})

    database.verify()
    database.restore()

  })
})
```
### Exxample
*
```javascript
import request from "supertest";
import config from "config";
import uuid from "uuid";


import app from "...";
import groupService from "..";
import { PERSONAL_GROUP_NAME, groupTypes } from "..";

describe(" some description", () => {
  let server;
  let agent;

  beforeAll(async done => {
    await groupService.init(config.sequelize);

    server = app.listen(4000, err => {
      if (err) return done(err);
      agent = request.agent(server);
      return done();
    });
  });

  afterAll(() => server && server.close());

  it("create group", async () => {
    const userId = uuid.v4();
    const res = await agent.post(`/v1/user/${userId}/groups`);
    expect(res.status).toBe(httpStatusCodes.CREATED);
    expect(res.body.ownerId).toBe(userId);
    expect(res.body.name).toBe(PERSONAL_GROUP_NAME);
    expect(res.body.type).toBe(groupTypes.PERSONAL);
    expect(res.body.members.length).toBe(1);
    expect(res.body.members[0].userId).toBe(userId);
  });
});
```
</details>
<details>

	<summary> Hash </summary>


* use `bcrypt` to hash password.
```javascript
bcrypt.hash(this.password, 16.5, (err,hash) =>{
  if(err) {
    return
  }
  this.password = hash
  next()
}
```
* It means it hashes to `2` to power of `16.5` times which roughtly 92000 rounds of hashing.
```javascript
username.methods.passwordIsValid = function (pass, callback) {
const resu = !this.password || !passord
? false
: this.password = password;
callback(null, resu)
}
```
* With bcrypt we can replace it as
```javascript
username.methods.passwordIsValid = function (pass, callback) {
bcrypt.compare( password, this.password, function(err, res){
if (err) {callback(false); return}

callback(null, res)
})
}
```
* it goes to use same round of hashing to find if it is same hash results
* why `bcrypt` has high exposure to the public for finding any possible vulnerabilities within library.
* password enrypted or private key compromized lead to fraud.With encrypted value, you can decrypted if you have the key but with hased value, it is impossible to return to original text by using same algorithm.
* `Why is that?` When user type a password, we use hashing algorithm to produce a hashed password then compare it with what we stored as a hash password in our database! so there is no need to convert to original text at all.
* In this case if our database is compromized along with private key decrypting, there wouldn't be any problem acquiring passwords in our system.
* There are different cryptography hashing functions like MD5 sha-1 sha-2 but  we use a `key derivation function`the best one is `bcrypt`. because hashing passwords are one way operation acquiring passwords requires guesses
* bcrypt is a password hashing function, implement salt with high entropy and hashing a concept numerous times.

#### Validator
 * express-validator to write some roles that we wanna pull data fro our API,
 ```javascript
 import expressValidator from `express-validator`
 app.use(expressValidator())
 ```
 * add this to when user post something
 ```javascript
 req.checkBody(registrationSchema)
 const error = req.validationErrors()
 if(errors){
  return res.status(500).json(errors)
 }
 ```
 * Then our registration schema would be like
 ```javascript
 export const registrationSchema = {
   "email": {
      notEmpty: true,
      isEmail: {
        errorMessage: "Invalid Email"
      }
   },
   "password": {
    notEmpty: true.
    isLength: {
       options: [{min: 12}]
     }
   }
 }
 ```
*
</details>
<details>
	<summary> Brute force mitigation</summary>

* `Brute force attack` to avoid it we should bcrypt and running number of hashes or add one second delay under post register
```javascript
post() ...
const delay = res => {
  setTime()=> {
    res();
  }, 1000)
}
try{ the rest...}
catch(err){
}

```
* Also we can track faild logins
</details>
<details>
	<summary> Sessions </summary>

### Sessions
* We can track application request between users requests, they are cookies to responsible for transporting session id.
* We can specify only http request can access to cookies and not browsers by using
```javascript
app.use(session({
  store: new MongoStore({
     dbPromise: connectionProvider..
     ttl: (24*60*60)
  })
  cookie:{
   path: "/",
   httpOnly: true,
   secure: false
}
})
```
users can access session cookies from browsers by
```javascript
document.cookie.split("; ")[0]
```
* But still is volnuernable from stealing someone from network
* By making secure true, we make sure browsers never send cookies to not secure server

* Session Management file
```javascript
app.use(session({
  store: new MongoStore({
     dbPromise: connectionProvider..
     ttl: (24*60*60)
  })

})
```
* That allows to save mongo session, default for a session in connect db mongo is 14 days we can reduce it as

* https is stateless protocl and comuncation with server is seen as an isolated individual request.
* sessions or token are same. `express-session`. When running the app, in cookies you find `connect.sid` which shows you are using node, so we dont want to show it and want to generalize the name. to not showing what session managemnet system we are using.
```javascript
app.use(session({
  name: "id"
})
```
* Add session timing

</details>
<details>
	<summary> on load window </summary>

* As for
```javascript
window.addEventListener('load', function() {
    console.log('All assets are loaded')
})
```


</details>

<details>
	<summary> Selection </summary>

* By understading `e.options[e.selectedIndex]` you can understand javascript structure
* In order to select and assign a function to on change selection we can have
```javascript
 <select  onchange="select(this)" type="button" class="btn btn-primary dropdown-toggle form-control" >
          <option value=null > Select Endpoint </option>
          <option value="groups" id="1" name="2" s="3"> Groups </option>
          <option value="enrollments"> Enrollments </option>
    </select>
<script>
function select(e){
   console.log(e.value)  // returns value and if value not assign return text selected
   console.log(e.options[e.selectedIndex]) // return all selected item
   console.log(e.options[e.selectedIndex].text)  // return only text
   console.log(e) // return all codes regardless of selected or not

}
</script>
```
</details>

<details>
	<summary> Publish npm </summary>

* if two companies have private packages in order to access both you need
```javascript
update .npmrc file to point to both registries
npm whoami  // to print current npm user
.npmignore // is a file to put everything you dont want to be published
"private": true     /// makes a packad not to be able to publish
npm cacshe verify   // to check the cache integrity
npm prune // removes extraneous or irrelevant packages form node-module
npm prune @std/esm // remove packages matching name @std/esm if they are extraneous
CommonJS // is a style of JavaScript module which is native to node
```
* When require('somthing')
```javascript
Node resolve something at local node_modules then parent's node_modules folders
process.env  // access the host os environment variables
.npmrc       // save registry authentication tokens when logging in using NPM CLI
readline     // use for reading data from stream one line at a time
```
* Asynchronous method that exposes data
```javascript
asynMethod(params, (err, data) => {
  // continue execution after async is done
});
```
* `Strict` mode eliminates some JavaScript silent errors by changing them to throw errors like
```javascript
// Using a variable, without declaring it, is not allowed:
"use strict";
x = 3.14;                // This will cause an error
```
* Easy steps
```javascript
// inside the folder
npm run lint
npm version patch // to increase minor version
npm login // your living s email and pass
npm publish
```
</details>
<details>
	<summary> Docker & Containers</summary>

* Node is single threat so we can securly use it as microservice and it would callback let us know when it is done. Remember create a thread for each application depletes or consume resources.
* Why microsersices: slice applications into logical services. One microservice should do only one task like fethcing a customer from backend. Micorservices should comunication using HTTP methods like in safe id one microservice provides records from thousands users
* Microservices are good for big projects

## Docker
* [link](https://www.youtube.com/watch?v=4EqysCR3mjo&t=8s)
* `Docker build` creates an image using the `dockerfile` located in the same directory
* To get images, we can pull them from ecr instead of building them
```javascript

```
* After an image is created or pull from ecr, then we need to run it to create a running container
```javascript
// to build image without using cache, v7 is the tage
docker build --no-cache --build-arg  TOKEN=anynumner -t dude9/man9:v7 .

// to run container on port 5000 and exposed it to 5003
docker run  -p5003:5000 dude9/man9:v7
```
* `docker-compose` allows us to run serveral containers in one command. docker use a `yml` file to know what image, in what network and volume(directory) in what name needs to run. Those name allows containers which run on the same `network` find each other.  

docker ps  // list all available docker lists
docker -d -p 27010:27010 mongo // it maps all processes on mongo db. You find it runs on your laptop on port 27010 and maps to your container on the same port
docker ps // returns our machine and our containers maps
```
* To stop docker
```javascript
docker ps // returns the id and more datils of all containers
docker stop ..partialidofContainer
docker-compose up -d // spin all containers up

docker container ls --format ‘table {{.Names}}\t{{.Status}}’
```
* Check if a variable is definded already with value
```javascript
if(process.env.VAR_NAME){
var1 = process.env.VAR_NAME
}
module.export = { var1 }
```
### Dockerfile
* `Docker image` gets the docker `container` running and `containers` are where the applications live
* is a place to tell how to run app. it goes inside nodejs
```javascript
FROM node:latest  // it says what we our base container has to have
copy . /src       // look at current directory and copy everything into it, it tells where we should be when running build
workdir /src      // tells all the command below where they run
npm install --production   // first we start npm install
expose 3000        // means this container opens port 3000, because our server in nodejs here run on that port
so other containers can comunicate with this one on this port
CMD npm start   // how to run
```

```
..., async (req, res)
const a = await todo();
```
* Could be totally data driven apis.


## Run mongo with Node & Docker
* [Tutorial](https://www.digitalocean.com/community/tutorials/containerizing-a-node-js-application-for-development-with-docker-compose)
</details>


<details>
	<summary> Basic </summary>

* `Global` variables, global namespace is available so
```javascript
global.console.log("test")   same as console.log("test")
var a = "anme"
console.log(`${a}`);
console.log(__dirname);    /// get full path to current module
console.log(__filename);   // full path current file and this file name same as above but with its own file name
```
* `path` module is available to us with node installation that provide us some function like `basename` as
```javascript
var path = require("path")
console.log(`${path.basename(__filename)}`);
````
* `process` is an object that available globally
```javascript
console.log(process.argv) // returns an array about our node function and everything inside that
node app.js ---greeting "amir"  //assigning args greeting as "amir"

process.stdout.write("somthing")     // standard writng but not creating next line
process.stdout.write("\n new ")
 ```
* `setTimeout` create a delay and then callback a function after our delays.
```javascript
setTimeout(function() {

}, waitTime);  // this wait mlseconds and then execute funciton
clearInterval function is use to stop our iterval like
clearInterval(interval);
```
* Nodejs store varibales in its own module ( function) but browsers stores variables globally into their browsers.
* `require` is the function that globaly available to us and load modules into a place that we want. `core modules` are the ones that they install by node js at first.
* `util` module is another core module.
```javascript
var util = require(`util`)
util.log("amir")    // same as console but there is timestamp
console.log("amir")
```
* `V8` module is another code module. Since nodejs is built on top of v8 chrome processor, we use v8 to get memory info
```javascript
var v8 = require('v8')
console.log(v8.getHeapStatistics());   // get info about memory
```
* `ReadLine` is code module allows us handle input and output and reads lines one by one
```javascript
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout)
rl.question("what is your name", function(ans) {
  console.log(ans);    // ask question and publish the answer
});
```
`splice`. It removes/add items to a list
```javascript
array.splice(2,1,"amir","new") // . add amir and new to array, start from index 2 of array and remove one item then add those two
```

* `super` invokes the parent contstuctor and define lexical context and `this` object for child class
```javascript
constructor(parentContructorParam, wood) {
 super(parentConstructorparam);
 this.wood = wood;
}
```
At below all item until the first truly value are evaluated
```javascript
let x = amir() || nn || do || func();
let a = false || 0 || 1 // returns a=1
```
</details>
<details>
	<summary> Lexical Scope </summary>

* `lexical scope` is where the function is defined and looks for variables. inner functions contain the scope of parent functions even if the parent function has returned.
```javascript
var scope = "I am global";
function whatismyscope(){
   var scope = "I am just a local";
   function func() {return scope;}
   return func;
}

whatismyscope()()
```
* Above code will return "I am just a local". It will not return "I am a global". Because the function func() counts where is was originally defined.
</details>
<details>
	<summary> NPM </summary>


* node modules are third party libraries that `NPM` tracks known vulnerabilities. so we have
```javascript
npm audit   // shows security holes and upgrade to safe versions of that module if exist automatically
or
npm i  // displays these info as well
```
* npm audit doesnt care about your code, it just check modules that you upload from npm.
```javascript
npm audit > report.txt
npm audit | awk `/High/ {print $0}`  // display only high security volnuerability
npm audit --json  > report.json   // make it json
```
* `audit fix`
```javascript
npm audit fix    /// it upgrade to new version if exist and fix issues
^ means equal or bigger version
npm audit fix --package-lock-onlu // it updated packages but not node modules
```
* `node-gyp` is a tool which compiles Node.js Addons. Node.js Addons are native Node.js Modules, written in C or C++, which therefore need to be compiled on your machine. After they are compiled with tools like node-gyp, their functionality can be accessed via require(), just as any other Node.js Module.

</details>
<details>
	<summary> Moduls </summary>

* Exporting moduls(functions)

```javascript
// some vars and data at Person.js
module.exports = Person;
```
* To consume it we should have
```javascript
var person = require("./Person")
```
* Example
```javascript
exports.a = 1;
exports.b = 2;
module.exports = { c: 3 };
module.exports.d = 4;
```
output would be
```javascript
{ c: 3, d: 4 }
```
* use `REPL` session using  node

</details>
<details>
	<summary> Child process </summary>

* We can run other processes inside node using `exec` code module as
```javascript
var exec = require("child-process").exec
exec("open www.nabaei.com")

exec("ls", function(err, stdout){
  if(err) {}
  console.log("ls executing");
  console.log(stdout);
  stdin.on("ss"  //standard input on data ss
})
```
* Another one is spawn, we can define when a charactor inter then run the spawn

</details>
<details>
	<summary> Files System fs </summary>

* `fs` file system is core node module. All `fs` modules have option to be `sync` or  `async`
```javascript
var fs = require("fs")
var files = fs.readdirSync("./lib");   // it means reading content of this directory with blocking request
console.log(files)        // returns all files or folder names inside lib folder
var files = fs.readdir("./lib");       // by dropping sync it reads file asyncronously! then it wond return anything it should be as
fs.readdir('./lib', function(err, files){    // first arg in callback is err and second one is the files if error not occur
 console.log(files);
 })
  console.log("start to reading file wait ..... ");
```
#### readFile
* Reading a file as text or binary. If not mention `UTF` then it would be binary
```javascript
// reading with utf8 makes it text readable otherwise it reads as binary
var con = fs.readFileSync("./readme.md", "UTF-8")  // the content would be text
console.log(con)
```
* read files async so
```javascript
fs.readFile("./readme.md","UTF-8", function(err, content){
   if(err) {console.log(err)}
   console.log(content)
})
```
* So a file that reads inside a folder then for each file append current directory with lib and file name then get stattic of file synchronously because next line we check whether it is a file and if so then print the content of file as text
```javascript
var fs= require("fs");
var path = require("path");

fs.readdir("./lib", function(err, files) {
  files.forEach(function(filename) {
     var file = path.join(__dirname, "lib", filename);
     var stats = fs.statSync(file);
     if(stats.isFile()) {
       fs.readFile(file, "UTF-8", function(err, text) {
         console.log(text);
        })
      }
    })
 })
```
#### writeFile
* writeFile can be async and sync as well and async is default
```javascript
var md = "some test text"
fs.writeFile("sample.md", md, function(err) {
   console.log("file created!")
 })
```
* Dynamic file names like
```javascript
var names= "all names you need ";
var i = "1";
fs.writeFile("sample.md"+ i, names, function(err) {
// Alternatively use sync so there is no need to call back
fs.writeFile("sample.md"+ i, `${names}\n\n`);
```
* save whatever user says into the file
```javascript
fs.appendFile(realPerson.name+ ".md", `${saying}\n`)
```
#### readFile huges
* Below readile buffer entire file into one variable which can create latency and impact memory and also it waits until entire file is read
* `stream.on("data"..` it liston to data events on our stream when a data event is raised it means we do not have entire file but small chunk
```javascript
fs.readFile("./filename.md", "UTF-8", function(err, chats) {
   console.log(`file read ${chats}`);
 })
```
* To read file chunk by chunk use `createReadStream`.
```javascript
var stream = fs.createReadStream("./filename.md", "UTF-8");
var data ="";
stream.on("data", function(chunck) {                  //
  process.stdout.write( ` chunck: ${chunk.length} |`);
  data += chunk;
})
```
* To let users that the file is under reading then we need to add this stream which run once. We implement a once listener for `data` event. Then the very first data event that occurs will cause this call back.
```javascript
stream.once("data", function() {
  console.log("start reading file")
})
```
* And at the end put end listeonr when even `ends`
```javascript
stream.on("end", function() {
  console.log(`log finish reading code`)
})
```
#### wrireFile huges
* same readFile stream

</details>

<details>
	<summary> Security </summary>

```javascript
Devaraj, [Mar 29, 2021 at 9:58:07 AM]:
Injection occurs when an attacker is able to insert malicious code or commands into a program, usually where ordinary user input (such as a username or password) is expected. SQL injection is a specific type of injection attack, enabling an attacker to gain control of an SQL database.

Cross-site scripting (XSS) is a type of injection attack that occurs when a vulnerability enables an attacker to insert a malicious script (often JavaScript) into the code of a web app or webpage.

Distributed denial-of-service (DDoS) attacks make a network, system, or website unavailable to intended users, typically by flooding it with more traffic than it can handle. API endpoints are among the growing list of DDoS targets.

Man-in-the-middle (MitM) attacks occur when an attacker intercepts traffic between two communicating systems and impersonates each to the other, acting as an invisible proxy between the two. With APIs, MitM attacks can occur between the client (app) and the API, or between the API and its endpoint.

Credential stuffing is the use of stolen credentials on API authentication endpoints to gain unauthorized access.

These are important concepts in API designing

so try to add something from this

For Injection - We need to validate and sanitize all the params
```


* Need a certificate from [here](https://timonweb.com/posts/running-expressjs-server-over-https/)
* `Symethric` encryption method is faster.
* To save a flow control mechanism for a web form, use random value per form and storing in server side session
* to verify a loged on user can access to sensitive data developer should check `cookies` at http request
* An application uses `serialization` to transport objects across network.
* One way to minimize attakers is to change the application.
* set up cross domain policy means allowign cors
* Web servers can not redirect to pages that users input only if these redirect addresses are validated

* SSL vs SSH (Secure Shell). They both looks like each other unless SSL is working with sockets and SSH works with shell only. A formal defination is SSL Secure Socket Layer is a certificate for protecting data on the net, SSH, Secure Shell, is a network application used to transfer or share data with a remote computer

### TLS Encryption
* SSL Came first time in 1994. They build a specific navigator inside their browsers that other browsers didnt have and encorporated into thier browser.
* In 1999 Microsoft found they need it but didnt want to use the name SSL from Netscape so they named it TLS but people still saying SSL. After all we have TLSv1.3 and enabled in browsers.
 * Data Encryption , Key Exchange and Handshake  are three main parts of TLS
 #### Data Encryption
 * Protocols are the ones that encrypt data. 3des(168 bits) means des uses 3 times encryptign data with 3 secret keys. Then AES (128 or 256 bits) came in which is US government standard protocl now and replaces des. Then we add `GCM galwas counter mood` or `CBC cipher block chaining`. Then the sender can add some message then receiver through these two can notify no one tampered with encrypted message along the path. Chacha20 is another way which uses poly1305 to add integrity check like CBC
 * To read AES encrypted message receiver needs a secretkey. The `Symetric Encryption` came from here when both client and server needs same key ![Encrypted key](https://user-images.githubusercontent.com/7471619/44601080-3c15f000-a790-11e8-90f9-87a3c2c32ab0.png)
  #### Key Exchange
 * But we can not pass the secret key through the web because it is not safe. So how end point can have the same key? here is `key exchange` protocle came in. So we need that protocl, there are some solutions like `RSA` which two parties exchange some numbers and then they both have a number that never shared. `Diffie-Hellman DH` is another protocl to exchange public and private key.
 * `RSA` is another integrity checker for `DH`. One of the modern key exchange protocl is `(Elliptical Curve Diffie-Hellman ECDH)`.
 This is DH except it add some EC to it. The only difference is ECDH provides an ecryption no one with current machines can reverse engineers them. And signed in with RSA as below is great but not all browsers support it.
 ![Key Exchange](https://user-images.githubusercontent.com/7471619/44601177-85663f80-a790-11e8-8ecd-28ced8387658.png)
 * In order to get secret key on both sides we have below transactions. When we connected to HTTPS server, server send us a certificate which contains two large prime numbers (p and g).
 for simplicity here two prime numbers are choosen small
 * Then client choose a private key. Then we use a simple formula which results here is 5. then we send it to server. Then server is using same mathmatic by choosing a private key 6.
 ![prime numbers](https://user-images.githubusercontent.com/7471619/44601242-b47cb100-a790-11e8-8f40-57bea05f3bee.png)
 At the end we have two private keys and two encrypted keys at both sides. Everybody on the internet would know about all these numbers except private keys. And magic is here to get our session key we calculate it as below
  ![129](https://user-images.githubusercontent.com/7471619/44601283-cf4f2580-a790-11e8-97e6-5a04c920e35a.png)
 So we use this session key to encrypt our data to communicate.
 #### Handshake Integrity
 * In order to TLS to operate we need this process. TLS grab each header then combine those into digest and then run through a Secure Hash Algorithm SHA and then add it to last massage of hanshakes to make sure the shandshake itself is not tamperd the process if someone tamperd we start it again
 #### Certificates
 * Certificate contains public keys with two large prime values and verification information which is a part of certificate chain. It means there is a chain of authority in certificates that we can do some mathematics to make sure that the certificate is issued by valid authority.
 * In order to have certificate chain we need certificate authority server. We can setup our own certificate server using `open SSL` to generate certificate to own network. If we want we can have this as public by purchasing online certification. Then they publish some information out there into our browser to allow us that verify that web server is browsing to you are actually what they say they are

 ### TLS Handshake

 * So After sending SYN message, receving SYN ACK and sending ACK then we stablish our source and destincation port numbers and sessions we are going to use to transfer our HTTPS trafic. In fact HTTP trafic rapped up inside of TLS in an encrypted way. Once three way handshake is done TLS wil kick in and send hello message to server as below
 ![handke](https://user-images.githubusercontent.com/7471619/44602607-eee84d00-a794-11e8-9a9e-d647ff10d986.png)
  Supported Cipher Suites have sessionid and URL of the server we communicate with. Then the server send back Hello to client. Then client select the highest version of TLS which both client and server supports.
  * Once the server done with Hello, it sends certificate to client.

### Oauth 2, JWT Authentication method

 * Means users login into application, then front end send them to third pary server (OAuth Server), which is simple login page. Then after validation the temporary token access send to application.

 * JWT: is a tool to make security comunicate as json objects. It is secure because it is digitaly signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
 [source](https://jwt.io/introduction/)

</details>
<details>
	<summary> HTTP Module</summary>

* There are `Http` and `Https` modules the difference is in `Https` there is a need for security certificate.
* `request` function has a callbacks which returns the result and in nature is stream which chunk data
* `res.once("data",`  this is data event
```javascript
var https = require("https"); // it could be http as well
var fs = require("fs")

var options = {
   hostname: "en.wikipedia.org",
   port: 443,
   path: "/wiki/George_washingot",
   method: "GET
}
var req = https.request(options, function(res) {
  var responsebody = "";
  console.log(`status: ${res.statusCode}`)
  res.setEncoding("UTF-8") // make sure stream comes in as a text not binary
  res.once("data", function(chunk) {
   console.log(chunk)
  })
})
```
#### Build web server
* if you want https web server you need to add security certificate to node modules.
```javascript
var http = require("http")

// Everytime we make a request of our webserver the call back function it will be invoked, this function contains `req` and `res`
var server = http.createServer(function(){
    res.send("Hello");
});

// here we say listen to this local machine at port 3000
server.listen(3000);
```
##### serve files
* we should pipe our readStream file into resoponse
```javascript

```
</details>
<details>
	<summary> Gatsby </summary>

* Deploy node or React to [gatsby](https://www.gatsbyjs.org/tutorial/part-four/)
</details>
<details>
	<summary> Crawler Scrapping </summary>

* [crawling](https://code-maven.com/building-a-crawler-in-nodejs)
* [crawller](https://medium.freecodecamp.org/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3)
* [web crawling](https://medium.freecodecamp.org/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3)
```javascript
// save as amir.js
var http = require('https');

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " URL");
    process.exit(-1);
}

var url = process.argv[2]

http.get(url, function(res) {
    console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});
```
* To check above we can have
```javascript
node amir.js https://www.sfu.ca/~anabaei/a.json   // should returns 200
```
* A complete version
```javascript

var http = require('https');
if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " URL");
    process.exit(-1);
}

var url = process.argv[2]
http.get(url, function(res) {
    console.log("Got response: " + res.statusCode);
    var content = '';
    res.on('data', function(chunk) {
        console.log('chunk ' + chunk.length);
        content += chunk;
    });
    res.on('end', function() {
        console.log('end');
        console.log(content.length);
        console.log(content);
    });
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});
```
#### over auth
* use this [link](https://stackoverflow.com/questions/27621959/nodejs-web-scraper-for-password-protected-website)
```javascript

curl -d "username=myuser&password=mypw&submit=Login" URL
curl -d "username=myuser&password=&submit=Login" https://www.eventbrite.com/signin
```
</details>
<details>
	<summary> Augumented Reality </summary>

* link is [here](https://codelabs.developers.google.com/codelabs/ar-with-webxr/#1)
</details>
<details>
	<summary> Font Awesome</summary>

* This is easy use from [here](https://fontawesome.com/icons?d=gallery&q=place)
```javascript
simple use
    <i class="fas fa-university"></i>
mode advance
<span style="font-size: 1em; color: Tomato;">
            <i class="fas fa-university"></i>
 </span>
```
* Add cdn as
```javascipt
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
```
### Crawl with Node
* here we have
```javascript
const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url).then(function(html){
    //success!
    console.log($('big > a', html).length);
    console.log($('big > a', html));
  })
  .catch(function(err){
    console.log(err)
  })
```
</details>

<details>
	<summary> Promises Chain Async </summary>

* A synchronous operation blocks processes till the one operation completes, so sending receiving all processes can come in orders. Like web services transactions sending and receiving http requests.
* asycn operations can run at the same time and they don't lock any process. Like in nodejs or javasscripts the next line operations doesnt mean it would run after above ones.
* Good [nodejs asynch mysql](https://codeburst.io/node-js-mysql-and-promises-4c3be599909b)


* Below is the best example if we want to async functions
```javascript
	var promise1 = "amir";
	var promise2 = 42;
	var promise3 = new Promise(function(resolve, reject) {
	  setTimeout(resolve, 100, 'foo');
	});

	Promise.all([promise1, promise2, promise3]).then(function(values) {
	  console.log(values);
	});
```
* Chain call backs promises
```javascript
Promise.all([promise1, promise2]).then(function(values) {
  console.log(values); return 4;
}).then( (res) => console.log(res));
// which prints ["amir",42] then 4
```

</details>
<details>
	<summary> Nested Routes </summary>

* If you have define a get"/" in server.js, then you even can have another post or get inside it.
* It only works if you use those get/postOrget inorder otherwise it never work although it seems you entered right routing for example:
```javascript
app.post('/index', (req, res) =>
/// do stuff, render views
  app.get('/', (req, res) =>
   // render another view
   )}
 )}
```
To call above correctly you can have
```javascript
post localUrl/index
get localUrl/
```
but if you just directly call
```
get localUrl/
```
It never works although the url is correct!

</details>

<details>
	<summary> API  </summary>

* API with simple word [here](https://medium.freecodecamp.org/what-is-an-api-in-english-please-b880a3214a82)
</details>

<details>
	<summary> Check Undefined </summary>

* The best way to check undefined is using type of as
```javascript
typeof obj === "undefined" ? yes do it : no dont go
```
* Arrays are type of object.
</details>

<details>
	<summary> Global Variable  </summary>

* In order to have global variables in node we need to define a middle ware and append session to local req and use it
```javascript
var appendLocalsToUseInViews = function(req, res, next)
{
    //append request and session to use directly in views and avoid passing around needless stuff
    res.locals.session = req.session;
    next(null, req, res);
}

app.use(appendLocalsToUseInViews);
```
* Also we can have cookies in front end rather thatn sessions in backend.
```javascript
app.use(express.cookieParser());
app.use(function (req, res, next) {
 let list =	req.cookies.justName;
 if (list === undefined)
   {
	  // assign it
	  req.cookies.justName = '############'
   }
   next(null, req, res);
})
```
* And use it anywhere in app by calling
```javascript
req.cookies.justName
```
</details>

<details>
	<summary> Sweeet Alert</summary>

* You can find it [here](https://sweetalert.js.org/guides/)
```javascript
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>  // add cdn
swal("Hello world!");
```
</details>
<details>
	<summary> Connect SalesForce </summary>

* First Create connection in with salesforce, connect Nodejs To Saleceforce
```javascript
const jsforce = require('jsforce');

var conn = new jsforce.Connection({
	  // you can change loginUrl to connect to sandbox or prerelease env.
	  loginUrl : 'https://login.salesforce.com/',
	  clientId : config.pro.clientId,
	  clientSecret : config.pro.cliendSecret,
	  redirectUri : 'https://salesforceapisfu.herokuapp.com/'
  });
```
* Remember password is your reqular password append with `security token`
* To get security token go to `salesforce->yourname->my setting->personal->reset my security token` so our password is `loginPassword+securityToken` and `username` is same as what you login
```javascript
conn.login(username, password, function(err, userInfo) {
	if (err) {console.log(err)}
	//// to get query we can have
        conn.query("SELECT Id, name, description, email FROM Contact where email ='"+email+"'", function(err, result) {
	     if (err) { return console.error(err); }
	console.log("total : " + JSON.stringify(result) );
});
```
* OR to create a new object in salesforce we have
```javascript
conn.sobject("Contact").create({
  	FirstName: first_name,
  	LastName:  last_name, //.. req.body.LastName,
  	Email: email, // req.body.email,
	Title: course,
	Department: university,
	Description: lti_token
    }, function (err, ret) { if (err || !ret.success)
  	 { return console.error(err, ret); }
	 console.log("Created contact: " + ret.id + " success? " + ret.success  );
    });
```

</details>

<details>
	<summary> Excel Files, csv to json </summary>

* To download excel file use [excel](https://tableexport.v5.travismclarke.com/#javascript) and [here](https://tableexport.v3.travismclarke.com/#dependencies) for having tables we can use tabledata [here](https://datatables.net/manual/installation)

* Convert csv to json user [this](https://www.npmjs.com/package/convert-csv-to-json)
```javascript
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<script src="http://cdn.jsdelivr.net/g/filesaver.js"></script>
<script src="//cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/2.6.0/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.7.12/xlsx.min.js"></script>
<script src="https://unpkg.com/tableexport@5.2.0/dist/js/tableexport.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://unpkg.com/tableexport@5.2.0/dist/css/tableexport.min.css">

<table style="width:100%" class="table">
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
</table>

<script>
    $("table").tableExport();
</script>
```
</details>

* User selection in dorp down menu as ![text](https://user-images.githubusercontent.com/7471619/52431124-73692680-2abc-11e9-8921-e39e2f91cedd.png)
<details>
	<summary> Code is here </summary>

```javascript
<style>
.flex-container{
 display: flex; // remove it and try without it to see differences
 border: solid green 2px;
 height: 38px;
 color: black;
}
.flex-item{
margin-left: 1px;
margin-top: 10px;
font-size: 8px;
}
.flex-container:hover{
 color: black !important;
 text-decoration: none;
 background-color: #f2f2f2;
 font-weight: bold;
}
.fname{
	margin-left: 12px;
}
</style>

 <a class="flex-container">
<img src="https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif" alt="https://www.edmontoncorporatechallenge.com/Sports%20Icons/unknown-challenge.png" style="width:40px; border-radius: 50%;">
<div class="flex-item fname"> first Name</div>
<div class="flex-item"> last Name </div>
  </a>
```
</details>

<details>
	<summary> Start Nodejs</summary>

## Express Start
```javascript
mkdir myNewApp
cd myNewApp
npx express-generator
// Done
```
* [Express link](https://expressjs.com/en/starter/generator.html)

#### Setting up Express
 * nodejs is server side render javascript, and simply is a way to run javascript and it is not a sever framework. Nodejs uses the same `v8` that google Chrome use it and outside of the browser.  in Concole type `node` you get into `repo` javascript.
 * `polyfill` some features that modern browsers do them. `npm` uses package.json to install what is needed but it is seperate entity than `node` itself they just work togather.
 * `CommonJS` is a module loader using `require` allows us to access third party npm modules. We use
```javascript
exports.enable = funciton(){}
exports.setup = funciton(){}
exports.config = funciton(){}

 var mymodules = require('./....') // here mymodules object includes three funcitons at top to get them we can have
 mymodules.enables
 mymodules.setup
 mymodules.config
 ```
 * Using `modile.exports` allow us to export whatever and not only object
 ```javascript
module.exports ={
  action: function(){},
  trigg: true
}
module.exports = 3
// when we requre it value would be exactly above, it could be 3 then when we export we would have 3
 ```
 #### server node
 * Node has a built in `http` module which allows us to built servers. But it has some limitation and the code you have to write to run a basic server is overwhelming. `Express` is one of the framework to help us to get ease about it. (sails.js, hapi, koa, etc..). Express is a framework which runs on node and uses http node module to make node servers. Express allows to abstruct it.
 * Everything in node is Evented  which means `asycn` because it is single threat.
 * `Express` allows us to get combination of `https verbs` , `routes` that are hit and the function(callback) that has be executed. That is all things that express does.

 ```
 npm init
 ```
 Then we have our package.json. npm is package manaer for node and yarn is facebook alternative for package manager.
 * Then create app.js file as below

```javascript
const Express= require('express')
const app = Express()

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

///////////////////////////////////////////////////
////////// Allow to parse bodies in json //////////
///////////////////////////////////////////////////

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false})); // support encoded bodies

// Configure our Express app to use ejs as our templating engine
app.set('view engine', 'ejs');

app.get('/', (request, response) => { response.send(`Hello, World!`) })
const PORT = 3000
app.listen(
PORT, ()=>console.log('server is running')
)
 ```
 * `app.get('/', function(req, res){} )` means when express receieve a get request with `/` it would execute a funciton and the function has req and res which here we just send a message hellow world. Then it should listen to a port with the formula as
 ```javascript
 listen(port: number, hostname: string, callback func)
 ```
 * Then install
 ```
 npm i cookie-parser
 npm i express
 ```
 * To run it just call `node app.js` which execute the file
 * You can see the complete version mysql connected to heroku from this [code](https://github.com/anabaei/sanction/blob/fixErrorMysqlHeroku/server.js)
 <details>
	<summary> parse data from body </summary>

* To have that we need to add
```javascript
const bodyParser = require('body-parser');
app.use(bodyParser.json());
```
Then we have to send json as `raw` json format from `postman`
```javascript
{
	"s": "aass"
}
```
Then inside server.js we can have
```javascript
app.get('/test', (req,res) => {
	console.log(req.body);
})
```
</details>

 ### Fetch into jsonAPIs

 * In order to have fetching we need to `require ` it or `import` it in Nodejs as [here](https://www.npmjs.com/package/node-fetch)
 ```javascript
 const fetch = require('node-fetch');

fetch(`https://canvas.sfu.ca/api/v1/courses`
	, {method: 'GET',
	   //body:    JSON.stringify(body),
	   headers: {'Content-Type': 'application/json',  'Authorization': 'Bearer lqyygZCfN'},
	}).then(res => res.json())
	.then(json => console.log(json));
 ```


 #### Debugging options

 * run `node debug user.js` then it goes through the user.js line by line use `c` and `n` for continue and next and `ctr+x` exit
 * Best video [ever](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27) for debugging

 ```javascript
 npm install express
 npm install chalk // for colorful messages
 npm install debug // to have debug mode
 npm install nodemon // to run at the same time  then add "start": "nodemon server.js" in script at package.json file
 npm install morgan  // to create a middleware
 npm i sequelize // to run for databases
 forever -w start server.js // to start in background on server
 ```

 Then add this to app.js as `var chalk = require('chalk');` and `var debug = require('debug')('app');` and `var morgan = require('morgan'); app.use(morgan('combined')); // to use a middleware show connection`

 ```javascript
 console.log('server is running'+ chalk.white(' 3000'))
 console.log(`server is running ${ chalk.white(' 3000') }`) // ES6 Style helps using template strings notice using ` here
 ```
 * run `DEBUG=* nodemon app.js` or `DEBUG=app nodemon app.js`
 * morgan has different settings

 #### Serving views
 * Create views folder and index.html and use a built in package name `path` to join addresses as below. `__dirname` means current location
 ```javascript
 app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname + `/views/index.html`));
 }
 ```
 * To add `bootstrap` just replace bootstrap cdns inside index from [here](https://getbootstrap.com/docs/3.3/getting-started/)
 * Create a public public directory and put all css and js then use below to have all static resource in app.js
 * Notice always starts cdn with `/` which says from the root, if you dont have slash infront of cdn address then it would be locally address from where it already there
 ```javascript
 app.use(express.static(path.join(__dirname, '/public/')));
 ```
 * so far to run app we have `DEBUG=app nodemon app.js` to chanage it to `npm start` we change it in package.json under `scripts` there is a built in test so `npm test` would run that also we define
 ```javascript
 "start": "DEBUG=app nodemon app.js"
 ```
 * Then `yarn start` willl work

 #### Tools to generate HTML pages
* Redirect in nodejs. We can use it instead of `res.render('view', data: data)` to call another end point
```javascript
res.redirect('anotherEndPoint/');
```
* `res.render` first item is view and second is params we want to send to views.
* `res.render` always looked at views folder and if find any matches then renders it, in case `res.render(index, ...) ` it renders index.ejs or index.html from views folder. But we can trick it by changing default to something else as  `app.set('views','./relevant address of index')` set command doest it for us!

 * Install ejs by `npm install ejs`
 ```javascript
 app.set('view engine', 'ejs'); // tell express what is our view engine we want to use it automatically finds views folder and take index
 // to call that view and passing two variables title and list
 app.get('/', (req, res) => {
  res.render('index', { list: ['a', 'b'], title: 'List of mine '} );
  // or render as json when it is backend
  res.send(JSON.stringify(result));
})
 ```
 * To read parameters in index.ejs we need to put them inside `<%= %>`
 * To read js objects in console as json need to install and import `CircularJSON` and use it as `console.log("total : " + CircularJSON.stringify(result));`
 * When you pass `JSON` to `EJS` then you can read it as
 ```javascript
 <% for (i = 0; i < list.length; i++)   %>
<%= list[0].name  %>

<% list.forEach((item) => {
      %>
        <li><%= item.name %></li>
      <%
    }) %>
 ```
 * Assume you pass it like
 ```javascript
 fetch(`https://canvas.sfu.ca/api/v1/courses`
	, {
		method: 'GET',
		//body:    JSON.stringify(body),
		headers: {'Content-Type': 'application/json',  'Authorization': 'Bearer lqgrLerXXXXxNWkxxxxxxGPDgZCfN'},
	}).then(res => res.json())
	.then( result => res.render('index',  {list: result } ))
	;
 ```
 </details>
 <details>
	<summary> Session </summary>

* To have session first request it
```javascript
var session = require('express-session');

```
* Then define it as below
```javascript

sass = req.session;
sass.email = "amir";    /// assign a session with email name

console.log(" = "+ JSON.stringify(req.session) );
console.log(" = "+ sass.email );  // retrive the session email
```
Find this link [useful](https://codeforgeek.com/2014/09/manage-session-using-node-js-express-4/)
* These sessions are temporary after a couple of redirecting they gone, in order to make it globally add bellow function and the middle code
```javascript

var appendLocalsToUseInViews = function(req, res, next)
{
    //append request and session to use directly in views and avoid passing around needless stuff
    res.locals.session = req.session;
    next(null, req, res);
}

/// add this middleware
app.use(appendLocalsToUseInViews);
```
</details>

 ### DataBase
 * Then add below to `app.js` file as `const db = require('./db/index');`

 <details>
  <summary> Create and Export db </summary>

* To Create a database have a file name `createdb.js` and run it as `node ./db/createdb.js`
```javascript
var pgtools = require('pgtools');
pgtools.createdb({
  host: 'localhost'
}, 'test-db2', function (err, res) {
  if (err) {
    console.error('Error:'+ err);
    process.exit(-1);
  }
  console.log('Result '+res);
});
```
* Then define `db` folder and  `index.js` and run it as well

 ```javascript
 const pgp = require('pg-promise')();
 const db = pgp({
  host: 'localhost',
  database: 'test-db2'
});

module.exports = db;
 ```
</details>
 <details>
  <summary> Logs with Kibana</summary>


* Winston using [mongodb](https://www.youtube.com/watch?v=PdVlAi7nrRU)
* Define transports.Http as
```javascript

```
</details>
 <details>
  <summary> migrate.js </summary>

* `Sequelize cli` allows us to change database without losing any data by providing migration.Learn migration [here](https://www.youtube.com/watch?v=gwrfXtC-y3k)

* `Migration` in fact is an object with up and down functions. Inside `up` we write a code to modify our schema and in `down` we write a code to reverse those changes. Some common examples are like createTable, changeColumn and addColumn.

* `Notice`: Sequielize CLI allows us to create models via command line, and then it automatically generates migrations. Since we sometimes defined models before, so we need to create empty migration files and manually write the code(almost like models).To create empty migration file:
```javascript
npm install sequelize-cli -g
c=date +%s // timestamp
sequelize migration:generate --name timestamp-create-project.js
sequelize migration:generate --name $c-project.js //this is alternative way
```
* Then it creates migration file.

* In order to run all migrations inside migration folder run
```javascript
sequelize db:migrate  //:undo to undo changes

```
* Define config.json file as [here](https://sequelize.org/master/manual/migrations.html)
* one thing we can [have](https://github.com/sequelize/cli/issues/413) list of [available migrations](https://sequelize.org/master/manual/data-types.html)
* Define `.sequelizerc` as
```javascript
var path = require('path');

module.exports = {
  'config': path.resolve('./config','config.json'),
  'migrations-path': path.resolve('./','migrations'),
  'models-path': path.resolve('./', 'models')
}
```
* And config could be like:
```javascript
import config from "config";

export default {
  port: "",
  database: "",
  username: "", // whatever we should put like postgres
  password: "",
  host: "",
  dialect: "postgres",
  seederStorage: "sequelize"
};
```
* or
```javascript
{
    "development": {
      "database": "postgres",
      "username": "",
      "password": "",
      "host": "docker.for.mac.localhost",
      "dialect": "postgres"
    },
    "test": {
        "database": "postgres",
        "username": "",
        "password": "",
        "host": "docker.for.mac.localhost",
        "dialect": "postgres"
      },
      "production": {
        "database": "postgres",
        "username": "",
        "password": "",
        "host": "docker.for.mac.localhost",
        "dialect": "postgres"
      }
  }
```
### Use Babel in .sequelizerc
* When we need to use Babel, then we have to create a `hook.cjs` as
```javascript
require("babel-core/register"); // define hook
module.exports = require("./config.js");
```
* then use this `hook.cjs` in `.sequelizerc` 
```javascript
module.exports = {
  'config': path.resolve('./sequelize-cli','hook.cjs')
}
```

* Notice make sure you are running postgres locally by
```javascript
brew services start postgresql //brew services stop postgresql
```
* Now you should be able to run it by
```javascript
sequelize db:migrate //DONE!
```

* After creating and exporting it is ready to be used. Now we can create a first db as in the `migrate.js`
 ```javascript
 const db = require('./index');

db.query(`
  CREATE TABLE posts (
    id SERIAL,
    title VARCHAR(255),
    content TEXT,
    author VARCHAR(255)
  )
`)
  .then(() => {
    console.log('🛠 Created table posts!');
    // process is a global object provided by node (only)
    // that gives access to the running program. We can use it
    // to exit the program amongst other things.
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit();
  })
 ```
 * Run it add `"db:migrate": "node db/migrate.js"`

</details>

 <details>
  <summary> seeds.js </summary>

*
 ```javascript
 const db = require('./index');
const faker = require('faker');

db.query(`
  INSERT INTO posts (title, content, author)
  VALUES ($<title>, $<content>, $<author>)
`, {
  title: faker.hacker.noun(),
  content: faker.hacker.phrase(),
  author: faker.name.findName()
})
  .then(() => {
    console.log('🔨 Created a post!');
    process.exit();
 ```
 * And to run it add `"db:seed": "node db/seeds.js"`

</details>

<details>
  <summary>AWS & Node </summary>

  * Run Node js on AWS from the [link](https://hackernoon.com/tutorial-creating-and-managing-a-node-js-server-on-aws-part-1-d67367ac5171

  ### AWS CLI

  * to get ls we have
```javascript
aws s3 ls s3
```
</details>

<details>
	<summary> app.js </summary>

* Here we add it in app.js to check it works
```javascript
db.query(`
  INSERT INTO posts (title, content, author)
  VALUES ($<title>, $<content>, $<author>)
`, {
  title: "faker.hacker",
  content: "faker.hacker",
  author: "faker.hacker"
})
  .then(() => {
    console.log('🔨 Created a post!');
    process.exit();
  });
```

</details>


* To create db in command we can have the codes [here](https://github.com/anabaei/codeCore/blob/master/NodeJs_%20Tut/quiz/package.json)
* Just run `yarn db:setup` to have it running

 ### JSON API
 <details>
	<summary> JSON </summary>

* To have a JSON format as out put we define a selection as
```javascript
app.get('/', (req, res) => {
  db.query(
    `SELECT * FROM posts ORDER BY id DESC`
  )
  .then(posts => {
    res.send(JSON.stringify(posts));
  })
})
```
* Also to have XSS active add below to app.js
```javascript
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
```

### CSV to JSON
* Use 'csvtojson' module as [npm](https://www.npmjs.com/package/csvtojson)
```javascript
const csvFilePath='<path to csv file>'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
})
```
 </details>

 ### Routing
 * It encapsulates everything in single router. We use routing by defining `const bookRouter = Express.Router();` first. It allows us to setup a series of routes
 ```javascript
 bookRouter.route('/books')
.get((req,res)=>{ res.send('hello world');});
app.use('/',bookRouter); // it tells app we are using bookrouter as app.get('/books'.
 ```
 * We can have it in seperate file and export as `module.exports = bookRouter;` and use it with `require`
 #### Routing details
 * Express takes whatever passing as id `:id` and pass params into id by putting them into `req.params.id` so we have
 ```javascript
 bookRouter.route('/:id')
.get((req,res)=>{ const id = req.params.id;  res.render('book', {title: 'thebook', author: 'amir', bookid: id})});
```
* in ES6 we can use object destructure as `const {id} = req.params`
* Modal using [this](http://bootboxjs.com/examples.html#bb-alert-dialog)
```javascript
bootbox.alert("This is the default alert!");
```
In stead of writing long modal we can use above only!

-----------
### Extra
------------
* [ESLlint](https://eslint.org/) is static code analyisit. We install it globally
 ```javascript
 npm install -g eslint
 eslint --init
 select use a popular style guide, airbnb, javascript  // it installs required packages
 // to run it localy
  ./node_modules/.bin/eslint app.js
 ```
 * check airbnb/javascript. There is details of explanation of everything in javascript and ES6 we use.
 * Notice it is better to locally download packages because when we deploy to heroku or something we dont want them to globaly download it for this app. So we just install eslint locally.
 * define as `"lint": "eslint app.js"` inside `Scripts` which can help us to run locally packages from our node_module/bin directory just need to use
 ```javascript
 npm run lint  // it is same as  ./node_modules/.bin/eslint app.js notice npm start is same as npm run start(it is built in node to remove run for start and test )
 ```
 * Express using squilizer is like Rails brining moduls and folders and need to set up DB to postgresql
 * This [link](https://groundberry.github.io/development/2016/11/04/build-your-node-app-with-express-and-sequelize.html)
```javascript
  npm install -g express-generator
```
 basic css we can write with scss and ejs we need
 ```javascript
   express --view ejs --css sass AwesomeAnswerExpress
```
### PASS CSRF
* In order to pass CSRF and make it ready to be an end point add below middle ware to Node from [here](https://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue)
```javascript
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

```

![alt test](https://cdn-images-1.medium.com/max/1600/1*9wOLuKSjCIAqSX_K8O0PKQ.png)
#### Deploy to Heroku with minimum settings
* Key: name app.js to server.js then vola!
* first create heroku remote then `npm init` and `npm install --save express` and finally define a `server.js` and not app.js
* to have a different name rather than server.js like app.js just create `Procfile` file and add below line to it [link](https://gist.github.com/evenchange4/3773179)
```javascript
web: node app.js
```
* When in `package.json` we have `"start": "node app.js"` and we can run it in local by `yarn start`
* now heroku knows what file it should be run
* To test whether heroku works or not just create a [test.js](https://github.com/heroku/node-js-getting-started/blob/master/test.js) file and run it before pushing to heroku
* Also since heroku use other ports to run your node so use `process.env.PORT ` variable
```javascript
app.listen(process.env.PORT || 3000)
```
* We use node with a framework called express.
* Node js is brought javascrip and uses same engine as chrome, so we can use everything use chrome. It is not server but can be used as server.
* To get console in Heroku
```javascript
heroku run bash
```
<details>
	<summary> DB in Heroku </summary>

* To run db using postgresql in Heroku post it in server.js
```javascript
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

app.get('/db', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
```
* As you see it gets pool from pg, then uses `DATABASE_URL` variable, which we allow to heroku create a database and name it and put is inside this var via this command
```javaescript
heroku addons:create heroku-postgresql:hobby-dev
```
* Also watch out to check the db, you create a db inside views to see the result.
* Then inside pg heroku create table and insert one data to check out as
```javascript
heroku pg:psql
psql (9.5.2, server 9.6.2)
SSL connection (cipher: DHE-RSA-AES256-SHA, bits: 256)
Type "help" for help.
=> create table test_table (id integer, name text);
CREATE TABLE
=> insert into test_table values (1, 'hello database');
INSERT 0 1
=> \q
```
* You can find the details from [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database)
* Data base insertion in `node` this [link](http://kevgary.github.io/tutorials/2015/12/26/node.js-postgreSQL.html)

</details>
* Then you can run node migrate.js etc from here!
<details>
	<summary> Run the DM project </summary>

* To have uuid use `npm i uuid` and then
```javascript
const uuidv4 = require('uuid/v4');
uuidv4();
```

</details>

 <details>
	<summary> FORM in Node js </summary>

```javascript
app.use(express.bodyParser());
```
Then we can have
```javascript
app.post('/', function(request, response){
    console.log(request.body.user.name);
    console.log(request.body.user.email);
});
```
* Since 2016 below is more accepted
```javascript
const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());
app.post("/", function (req, res) {
    console.log(req.body.user.name)
});
```

</details>

<details>
	<summary> Deploy to CAS SFU </summary>

* First check the request in `app.get('/', function(req,res) { }
```node
res.redirect('https://cas.sfu.ca/cas/login?service=http://localhost:3000');
```
* Then we get in url tickets so use
```javascript
http://localhost:3000/?ticket=ST-437668-xUEMH1mjWN7c6WTYSzUn-cas1 // to get ticket from this url we run this query under app.get('/'..
if (req.query.ticket !== undefined){
var ticket = req.query.ticket;
var url = 'https://cas.sfu.ca/cas/serviceValidate?ticket='+ticket+'&service=http://localhost:3000';
 res.send(ticket);
 var options = { method: 'GET',
	  url: 'https://cas.sfu.ca/cas/serviceValidate',
	  qs:
	   { service: 'http://localhost:3000',
	     ticket: ticket },
	  // headers:
	  //  { 'postman-token': '01f16dca-650b-a846-3c84-7699ec992509',
	  //    'cache-control': 'no-cache' },
	  form:
	   { ticket: ticket,
	     service: 'http://localhost:3000' } };

	request(options, function (error, response, body) {
	  if (error) throw new Error(error);

	  console.log(body);
	});
	}
```
* Each ticket when assigend can be used only one time for login
* cb function is short term for if error happen do this else do that
```ruby
function myAsyncFunction(arg1, arg2, cb) {
    // async things
    cb(false, { data: 123 });
}
```
same as
```ruby
myAsyncFunction(10, 99, function onComplete(error, data) {
    if (!error) {
        // hooray, everything went as planned
    } else {
        // disaster - retry / respond with an error etc
    }
});
```
</details>

<details>
  <summary> Canvas LTI </summary>

### Start
* Applications needs to reference as XML format in canvas->settings-> view App Configuration -> + App -> Paste by XML
* Find xml generator from [here](https://www.edu-apps.org/build_xml.html)
* The app can run even locally on port 3000 but remmembder it should accept `POST` and `iFrame active`
* If it is Node then we can active iFrame by
* Follow Canvas LMS REST API [here](https://canvas.instructure.com/doc/api/file.tools_intro.html)
* Then when we create the app then we receive basic lunch data like [here](http://www.imsglobal.org/specs/ltiv1p1p1/implementation-guide#table-of-contents)
* Follow the [indirect post](https://canvas.instructure.com/courses/785215/assignments/2233111?module_item_id=4761769)
* In order to post Grades in Assignment you need to be a teacher and have student as well to change his grades

## Basic Launch Data
* First define a `app.post('/')` which allows you to get all information from Canvas when users run the embeded app in XML from it. All data exist at `req.body`. From here you can get info related to your user.
Your data would be called [basic launch data](http://www.imsglobal.org/specs/ltiv1p1p1/implementation-guide#table-of-contents)
* To hit endpoints you need Token. which either provided manually by user or Auth2 which needs developer key. Having token allow you follow the roles and hitting end points and receive data from


### How to get Key
* It's your job to generate the consumer key and shared secret, so make sure people know how to get one from you
[here](https://canvas.instructure.com/courses/785215/pages/catch-the-lti-vision?module_item_id=4762694)

### Token
* To hit the end points we need to created manualy by admin and pass it to developer or by having `client_id` we hit back end point and received token which is called OAuth2 [this](https://community.canvaslms.com/thread/18146-how-to-get-access-token-for-currently-logged-in-user-in-sharepoint-hosted-appc-application) `token` .
* We can create token from [OAuth2](https://canvas.instructure.com/doc/api/file.oauth_endpoints.html#post-login-oauth2-token) but still required `client_id` which is provided by admins like what is said at [here](https://community.canvaslms.com/thread/24637-clientid-and-secret)
* Here is [online](https://canexa.netkno.nz/) tool to provide in both cases

### Hit End points
* To hit end points never forget first add token as below in header pluse `Bearer` as you can see below
```javascript
key                     value
Authorization           Bearer lqgrLerkcM1GZtcGbhTTMmkmraJNHwxDs9vdNWkGPD874XJKRGI0GlwXYyygZCfN
```
Then in order to get data from end points we can start from here
* To see accounts you have
```javascript
https://canvas.sfu.ca/api/v1/course_accounts
```
* To see list of all courses
```javascript
https://canvas.sfu.ca/api/v1/courses
```
### Grades
* List grading standard (if exist) for a specific course here `14159`
```javascript
https://canvas.sfu.ca/api/v1/courses/14159/grading_standards
```
* As insturcture create an assignement and publish it into a published course. Then add student to it and then if you give grade to that student you would see it here
* Even if a course without student grade would respond to it
```javascript
https://canvas.sfu.ca/api/v1/audit/grade_change/courses/40530
```

* To change the grade use `put` to update grades as for course `40530` assignment `323011` with userid `16037` with grade 27!
```javascript
https://canvas.sfu.ca/api/v1/courses/40530/assignments/323011/submissions/16037?submission[posted_grade]=27
```
![this](https://user-images.githubusercontent.com/7471619/45457632-c7561780-b6a4-11e8-8968-ab82ac63c5fa.png)

* Also to get list of gradebook we use `get`
```javascript
https://canvas.sfu.ca/api/v1/courses/40530/custom_gradebook_columns
```
* and to create new gradebook use `post`  with
```javascript
https://canvas.sfu.ca/api/v1/courses/40530/custom_gradebook_columns
```
and with ![this](https://user-images.githubusercontent.com/7471619/45457491-0041bc80-b6a4-11e8-8ea9-d8955e1ce7ec.png)

### Create Account
* In order to create accounts we can use [this](https://canvas.instructure.com/doc/api/assignments.html) link to know which end point we want to hit
* To hit it successfully you need to have token


---------------------
</details>

<details>
  <summary> Cassandra </summary>

* Apache Cassandra is an open source distributed database system designed for managing large amounts of data across commodity servers. [here](https://docs.datastax.com/en/developer/nodejs-driver-dse/1.3/api/class.Client/)
* Download visual studio code from [here](https://academy.datastax.com/downloads) use Mac versions
* use different version of java  from [here](https://stackoverflow.com/questions/21964709/how-to-set-or-change-the-default-java-jdk-version-on-os-x)
* At `/Users/amirnabaei/dse` type
```java
cd /Users/amirnabaei/dse
export JAVA_HOME=`/usr/libexec/java_home -v 1.8`
bin/dse cassandra
bin/nodetool status
bin/cqlsh // if error happens use rm -Rf ~/.cassandra
```
*  Make it perm at `~/.bash_profile` file and put `export JAVA_HOME=....` there

* Usefull link from [here](https://gist.github.com/virajkulkarni14/1f79175ddbb2a0595118be8a9431f4bd)
```java
brew install cassandra // brew upgrade cassandra
cassandra -f  // if you dont want to start it at background
bin/nodetool status
```
* At cql
```java
DESCRIBE KEYSPACES
CREATE  KEYSPACE people  WITH REPLICATION = { 'class': 'SimpleStrategy', 'replication_factor':3};
use people
CREATE TABLE subscribers(id uuid, email text, first_name text, last_name text, PRIMARY KEY(id, email));
DESCRIBE tables;
INSERT INTO subscribers (id, email, first_name, last_name) VALUES (, 'user1@gmail.com', 'John', 'Doe');
Select * from subscribers;
```
* Then create new keyspace by `CREATE  KEYSPACE people  WITH REPLICATION = { 'class': 'SimpleStrategy', 'replication_factor':3};`
* Now create a table by `CREATE TABLE subscribers(id uuid, email text, first_name text, last_name text, PRIMARY KEY(id, email)); `
* now function generate uuid
* To use where only the one that has primary key (here email) can be put into where clause.
* To assign id, we use uuid module as
```javascript
 var uuidv1 = require('uuid/v1');  // it can be v1..v4
 var id = uuidv1();
```
* Cassandra is column based table which is unique. It has keyspace which equivalent schema and tables called columns and inside the tables we have fields and one field is uuid(unique cryptostring) field.
* The [tutorial](https://www.tutorialspoint.com/cassandra/cassandra_architecture.htm)
* One-To-Many relation is creating one table with a primary key and another is compound primary key like `PRIMARY KEY (question,content)` which ends to have two type of searches: first search by a pair key of  `(question,content)` and another is search by one key `question`
* Link to select from in [cassandra](https://docs.datastax.com/en/developer/nodejs-driver/3.5/)

### Timestamp
* `timestamp` is a data type which you can assign it as
```javascript
let date =  new Date()
```

### Using in Node
* This simple code, run query on questions and pass the result as a message variable to a view test.ejs. This code can be embeded into a get url as
```javascript
  app.get('/showquestion/:title', function(req, res){

  client.execute('Select question from questions ', function(err, result){
				if(err)
				{
					console.log('err: ' + err)
					res.render('test', {message: err })
				}
			 	console.log(result);
				res.render('test', {message: result })
  })
```
* To get good understandign of [select from database]() use the link and here is how we take them
```javascript
 app.get('/showquestion/:title', function(req, res){
		preventCaching(res)
		    var title = req.params.title
			client.execute('Select * from questions where context_title = ? ', [title] ,1, function(err, result){
				if(err)
				{
					console.log('err: ' + err)
					res.render('test', {message: err })
				}
				res.render('test', {message: JSON.stringify(result) })
				// var allEdits = saveEvent.edits
				 if(result.rows.length > 0){
					var prevEdits = JSON.parse(result.rows[0].id)
				// 	allEdits = prevEdits.slice(0, saveEvent.lastSavedIndex).concat(allEdits)
				 }
			})
```
### Select
* To run queries it should contain in primary key as
```java
client.execute('CREATE TABLE questions('+
	'id uuid,'+
	'question text,'+
	'PRIMARY KEY (question)'+
');', function(err,succ){if (err) {console.log('Question tableError= '+ err)}});

select * from evidence where question = 'amir';
```
* If primary key was more than one item and we needed to run over one item we can add allow filtering as

```java
client.execute('CREATE TABLE questions('+
	'id uuid,'+
	'question text,'+
	'PRIMARY KEY (question, id)'+
');', function(err,succ){if (err) {console.log('Question tableError= '+ err)}});

select * from evidence where question = 'amir' ALLOW FILTERING;
```
### Select With allow filtering
* Find a question with name of `amir` regardless of being primary key or not
```javascript
client.execute('select * from issues where question = ? ALLOW FILTERING',['amir'],1 , function(err, result){
				console.log('* ' + JSON.stringify(result.rows))
				if(err)
				{
					console.log('err: ' + err)
				}
                if(typeof result !== "undefined")
			    {
				  res.render('showdetails', {result: result });
		             }
  })
```
* AND in CQLSH we have
```javascript
select * from evidence where question = 'evidence1' allow filtering;
```

</details>

<details>
	<summary> Express </summary>

* To install express globally `npm install -g express` then `npm install -g express-generator` then create app by `express myproject` then cd project folder `npm install` and to debug `$ DEBUG=expressproject:* npm start`
 * Package.json has all modules that needs to be installed to run `npm install` like `bundle` in rails we need to add only`"cassandra-drive":"*"` to package.json
 * follow the [video](https://www.youtube.com/watch?v=fLOR_7upQp0)
 * Cassandra in Express in index.js add below
 ```javascript
 var cassandra = require('cassandra-driver');

var client = new cassandra.Client({contactPoints: ['207.23.192.54']});
client.connect(function(err, result){
 console.log('index cassandra connected');
});

var getall = 'Select * FROM people.subscribers';
router.get('/', function(req, res) {
   client.execute(getall,[], function(err,result){
    if(err) { console.log("err"+err); }
    else {
      console.log("res"+  JSON.stringify(result.rows) );
      res.render('index',{ subscribers: result.rows }); }
   });
});
 ```
 At index.jade we have to read a variable(subscribers) paasing to index view page
 ```javascript
 extends layout

block content
  h1 subscribers
  hl
   each i in subscribers
        li #{i.email}
        li #{i.first_name}
 ```
 * The ip address `207.23.192.54'` is the one when you run cqlsh without the port name at the end
 #### Middle Ware Rout
 * Rout [MiddleWare](http://expressjs.com/2x/guide.html#route-middleware) we have below code
 ```javascripte
 app.get('/user/:id', function(req, res, next){
  loadUser(req.params.id, function(err, user){
    if (err) return next(err);
    res.send('Viewing user ' + user.name);
  });
});
 ```
 * Then we can have above code with passing another callback funciton as params
 ```javascript
 function loadUser(req, res, next) {
  // You would fetch your user from the db
  var user = users[req.params.id];
  if (user) {
    req.user = user;
    next();
  } else {
    next(new Error('Failed to load user ' + req.params.id));
  }
}

app.get('/user/:id', loadUser, function(req, res){
  res.send('Viewing user ' + req.user.name);
});
 ```

</details>

<details>
	<summary> Access functions </summary>

* At tools.js we define function like
```javascript
// tools.js
// ========
module.exports = {
  foo: function () {
    // whatever
  },
  bar: function () {
    // whatever
  }
};
```
* At app.js we have
```javascript
// app.js
// ======
var tools = require('./tools');
console.log(typeof tools.foo); // => 'function'
console.log(typeof tools.bar);
 ```

</details>
<details>
	<summary> Ubuntu VM in VirtualBox </summary>

* First Download ubuntu 18.0.4 and then download VirtualBox. Then run virtualbox and let it to take ubuntu from your downloads file.
* This [link](https://www.lifewire.com/install-ubuntu-linux-windows-10-steps-2202108) may help except the part which downloading virtualbox (just google and find download virtualbox)
* Also I guess we need to install virtualboxguess iso file as below does it
Then to have a fullscreen vm running in ubuntu follow bellow link
* the link to have vm [here](https://websiteforstudents.com/installing-virtualbox-guest-additions-on-ubuntu-18-10-18-04-16-04-lts/)
</details>

<details>
	<summary> Authentication </summary>

### JWT
* Server create token and it always expexts to get it back to authorize the user. Token can be replaced by `auth2` they work the same.
* Many ways to protect an api. One way is basic `auth` by putting token in `header`. Also you can have `session` stores like key value pairs.
* On mobile it is hard to work with cookies, so we use `jwt` [JWT](https://jwt.io/). In this way since we use token we don't care about cookies anymore and no session store.
*  REST is `stateless` means we don't know about previouse requests.
* At browser you can see `local storages` which stores key:value of jwt.
```javascript
user = {_id: 1234241442113}
var token = jwt.sign(user, 'shhhh, this is a secret token')
///
var user = jwt.verify(req.headers.authorization, 'shhhh, this is a secret token')
const res = await User.findById(user._id);
```
### CORS
* CORS is Cross Origin Resources. If you are on `localhost:3000` and want to access `localhost:4000` browsers doesn't let you. Browsers always send two requests: one is `option` another is `get:put:post:update:fetch:delete..`. `OPTION` means am I allow to send you request(checking cors and see the server they allow or not).
</details>

<details>
    <summary> Deployment </summary>

* All servers runs below which means it install all `dependencies` from `package.json` and it won't `devDependencies` or others.
```javascript
npm i --production // heroku or other services runs this command always
```
* make sure app listen to the port and for heroku checks process.env as
```javascript
app.listen(process.env.NODE_ENV || '3000');
```
* if you dont run `node server.js` make `Procfile` and add
```javascript
web: node index.js
```
* To connect with mongo you need to `mongodb` from heroku and paste it in command and add mongo url as
```javascript
db: {
  url: process.env.MONGOLAB_URI || 'mongodb://localhost/dialuge'
}
```
* And this mongolab variable is available to see at settings profile on heroku. we can add more variables as
```javascript
MODE_ENV : production
JWT:  something
```
* Test a post from terminal as
```javascript
http POST https://myapp.herokuapp.com username=scott password=1234
```

</details>

```javascript
GIT:  git rebase origin/myBranch  // If I am in master then I want to update it with myBranch I use rebase
GIT   git diff and git stash //
use forman start // it runs it it is like running on heroku on port 5000
```

## LIVING_LEARNE
<details>
        <summary> use lodash</summary>

* A helper method called [loadash](https://medium.com/voobans-tech-stories/10-lodash-functions-everyone-should-know-334b372aec5d)
* check `_.identity` command
```javascript
(query.title && { title: query.title }}).
```
#### SEQUELIZE RETURNING
* [return](https://gist.github.com/zcaceres/f9b44ae18579411e57f3131654e92ce3)
</details>

### CHMOD
* always remember rwx is order in alphabetical.

| Bin        | Decimal           | Representation  |
| ------------- |:-------------:| -----:|
| 000      | 0 | -&nbsp;-&nbsp;- |
| 001      | 1 |   -&nbsp;-&nbsp;x |
| 010 | 2 |    -&nbsp;w&nbsp;- |
| 011 | 3 |    -&nbsp;w&nbsp;x |
| 100 | 4 |    r&nbsp;-&nbsp;- |
| 101 | 5 |    r&nbsp;-&nbsp;x |
| 110 | 6 |    r&nbsp;w&nbsp;- |
| 111 | 7 |    r&nbsp;w&nbsp;x |

<details>
  <summary>Reducer</summary>

* Return one value, here is reducer
```javascript
array.reduce( function(total, currentValue, currentIndex, arr), initialValue )
```
* For example
```javascript
[1,2,3].reduce( (sum, current, indx, theArr)=> sum += current, 0) // returns 6
```
</details>
<details>
      <summary> loadash avoid undefind</summary>

* Below is the code to aovid `nil`
```javascript
_.omitBy(my_object, _.isNil);
```
* For example if object is equal to
```javascript
my_object={ id: 1423, FK: 322, name: , isPrivate: false}
// returns
my_object={ id: 1423, FK: 322, isPrivate: false }
```
* Pickup below would remove false as well and returns only FK and id.
```javascript
 _.pickBy(my_object, _.identity)
```
</details>

<details>
      <summary> LOGS & SSH to DB</summary>

* Kibbana is easy to add field name to filter logs
* The only way to distinguish between environments in kibana is the tag they have on their service name like test, stg or dev. 
* Tier of data flow(layers or level of a series of rows) issue here. Kibana has https while we may need only http
* Make sure your ip is whitelisted
* All logs are sent to logstash http endpoint. It is kafka enable and they decide what to use for login.
* Every request does get logs and every response does get logs in all node services. 
* We use winston logger and it confiured over common library
* To connect to K8s (kubernates)
```javascript
ssh -p2202 -NL 8001:localhost:8001 amir@bastion-dev.lstlabs.com
history // show last 50 commands
```
Complete [resource](https://www.ssh.com/ssh/tunneling/example)
```javascript
redirect SSH on a port to another machine on local network
-L  // local port
This example opens a connection to the amir@bastion-dev.lstlabs.com server,
Forwards any connection to port 8001 on the local machine to port 8001 on localhost
```
</details>

<detials> 
       <summary> Common Library</symmary>

* `Initial services` is there to not allowing containers go down. It requires service has an init function to be called. It repeatedlly initialize the service based on config to logs errors. It helps a system to run forever if it fails untill it connect
* `MiddleWare` Every function that specified in a chain of middleware would be executed if you call `next` in the preceding middleware function
* `Error Middlware` we have to specify 4 params otherwise express sees this middleware as a regulare middleware. 
```javascript
return (error, req, res, next) => {
  return next(error)
```
* `error.js` The idea behind this is the way we handle uncaought exceptions. We have a logger attach to our request when they come in and for sanity sake we attach logger to it. It converts error to json objects. It checks if it has `toJson` function in it just call it otherwise just log the errors. It checks if the header is already sent, if for some reasons happen then it call next 
* `error.js` checks if it is not `lst` error then send general error message as `An unexpected error occured in ... ...` In fact here serialize() function is not really a serialize it should be toJson function. It converts all our errors into a format
* `stack trace` in nodejs are not enurmerable we don't log the stack. A hack would be just explicitly add the stack. 
* If something is not enumerable in javascript, Json stringify method doesn't detect non-enumerable parameters. That is why stack trace is not log because is not enumerable parameters or attribute. We need stack trace in development and not to send back to the client 
*  `logger.js` is a basic winston logger. We just added transport and some formatting here. for example this
```javascript
`[${t.s}] ${lev} :  ${mes} \n${JSON.stringify(
    data,
    null,
    2
  )}`;
```
make sure it is json string and is logable for the standard out looking.
* We extract metada into metada object.
* `detactor.js` goes on logger and remove if essential errors were logged
* For example you register as user and logged in password and usernames. so this means we need `detactor` to not to display everything. Specially on sequelize if something went wrong with query you still logging salted password to frontend. This is here for generic term
*  `log-request` if there is requestId it adds it. Then it attach logger and create a child of the logger by adding another metadata. 
* `log-response` modify res.sent function. It prepares header, json stringify on header didn't work. It send time difference between log received and sent. If res.send called several times it stop it.

</details>
<details>
         <summary> JS ENGINE and Stack Trace Devaraj Video</summary>

* Deva [video](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
* `Stack trace` is the state of stack when the error happend.
* JS has [engine](https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775) to run JavaScript. It is V8 in node js written in C++ and chrome has V8 as well. So when write JavaScript it needs engine on browser, node or IOT devise. as
```javascript
Browers enginea: Chakra microsoft, JavaScriptCore safari, Spirdermonkey firefox, V8 chrome
NodeJS: Chakra, V8, Spidermonkey
IoT: Duktape,Jerryscript // slower but take less memory
```
* 
```javascript
obj.hasOwnPropery
```
...
</details>
<details>
         <summary> Develop in VC CODE Docker world</summary>

* Allows us to lunch `vs code` inside [of container](https://code.visualstudio.com/docs/remote/containers).
* In the configuration you can get it lunch after installing remote development tool in vs. 
</details>