# Socket Io 
* Socket.io stands on websocket


<details>
<summary> NetWork Protocols  </summary>

* Data send over Internet via  packets of Data. Each packet has [five layers](https://microchipdeveloper.com/tcpip:tcp-ip-five-layer-model):
* As data pass in via server and client. Each layer care about its own header and not the body
```javascript
1- Application -> HTTP/FTP/SSH/SMTP
2- Transport -> UDP/TCP
3- Network -> IP
4- Link -> wifi connection
5- Physical -> cables
```
* Layer `2,3` are called `TCP/IP` or `internet protocol` 
* `Http` in `Application layer` has one `header` and one `body`. In header we have `metadata` which means data about data like `content-type` tells how to treat with this packet in body. to know what cache, what protocl and what date we need to use
* TCP in `Transport layer` also has header with metadata. There are source port, destination port, sequence number, achknowledge number. In the body is the whole `header and body` of HTTP or application layer.
* Network Ip has its own header. It has source Ip, destination Ip and some checks. The body is entire message from `Transport layer`. 
* And On `link` layer we have `Mac address` as header and previouse layer as whole body.

* `Transport layer` creates `2^16` ports on computer or `65,536` ports. An application issue a network request like an HTTP request originate from port 3000 to another machine on another port like 80. This request is handed off to transport layer. This layer put it inside a segment and define destination port and address and source of the request. Then hand it off to network layer. 



* There are two different types of transport layer: `UDP` and `TCP`. 
### UDP
* `UDP` is light weight, fast and unreliable. Header is only 8 bytes and has less connection. Because clients in UDP don't need to make connections before start talking, even if the other computer doesn't want to hear it. `UDP` send data no matter what, even if network is conjusted it doesn't care and it is fast

### TCP
* `TCP` is reliable and needs `HTTP`. It starts with 3 ways handshaking. 
```
1- Client says I want to talk
2- Server says yes/no
3- Then actual data starts (if yes received)
```
* There is delivery `acknowledgment`, it means whenever data received let the client know when in `UDP` client can't confirm the data has received or not.
* TCP you make sure data comes in order regardless of what happen on network
* `Congestion Control` when network is overwhelemd, TCP may add latency to minimize loosing packets
</details>

<details>
         <summary> Websocket & Switch protocols </summary>
 
* [Websocket](https://github.com/websockets/ws/blob/master/doc/ws.md) is native browser protocol allows you connect to server socket via `TCP`. First one `HTTP` connection stablish then through that one we have socket connection. Each process running in your machine connected to a port via a socket connection.
* `ws` protocol requires to connect client to server. In server `websocket module` interprete between socket in process and javascript websoeckt
* `ajax` 10 yrs ago opened a connection, then if it gets tired terminated and if needed created a new one. problem was two many connection required but websocekt needs only one connection

### client websocket 
* websocket client (an html/javascript page) is where [websocket api](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) lives. It has ability to create a direct connection to a server

```html
<script>

    let ws = new WebSocket("ws://localhost:8000")
    console.log(ws)
    ws.onopen = (event) => { // as soon as we open connection, send the message
        ws.send('connected to server on open')
    } 

   // as soon as recive message print it out
    ws.onmessage = (msg) =>{
        console.log(msg) 
    }
</script>

```


### server websocket 
* websocket module or socket io module is require in server. 
* Inspect or modify [headers](https://github.com/websockets/ws/blob/master/doc/ws.md#event-headers) before they sent. 
```javascript
// before make connection customize header
// any time websocket receive a request, we can see what is in the header
wss.on('headers', (header, msg)=>{
  header.push("nothing");
  console.log(header);
})

wss.on('connection', (ws, req)=>{
  // as soon as connected send message
  ws.send("connected to backend.")
  //ADD listener as soon as receive message print it
  ws.on('message', (msg) =>{
    console.log(msg)
  })
  

  console.log(req[0]); // this is header, the rest are body
})

server.listen(8000)
```
*
```javascript
// before even start we create a http server running on port 8000
// then create a websocket server on it
const http = require('http')
const websocket = require('ws')
const fs = require('fs')

const server = http.createServer((req, res) =>{
  console.log("connected")
    var html = fs.readFileSync('./justwsServer.html', 'utf8')
    res.setHeader('Content-Type', 'text/html')
    res.write(html);
    res.end();
})

const wss = new websocket.Server({server: server})

```
<details>
         <summary> websoeck code </summary>

```javascript
npm i -g nodemon
nodemon app.js

setInterval(()=>{
    console.log("1 second each")
}, 1000)

const http = require('http')
const websocket = require('ws')
const fs = require('fs')

const server = http.createServer((req, res) =>{
  console.log("connected")
    var html = fs.readFileSync('./justwsServer.html', 'utf8')
    res.setHeader('Content-Type', 'text/html')
    res.write(html);
    res.end();
})

const wss = new websocket.Server({server: server})

server.listen(8000)
```
</details>

</details>

<details>
         <summary> Socket Io </summary>

* [link udemy](https://www.udemy.com/course/socketio-with-websockets-the-details/learn/lecture/12005440#overview)
* Socket.io is realtime, bidirectional and event based comunication.
* Socket.io uses [Engine.io](https://socket.io/docs/v4/how-it-works/#transports) which it uses websocket. Engine.io establish a long-polling connection, it means it is responsible to have http connection and then tries to upgrade to transport and if it fails it create new one.

* socket.io has disconnetion detection. if something went wrong like server dies, it keeps telling us. A heartbeat is implemented in engin.io level.

* Binary support like any serializeable data structure is supported

* Multiplexing is supported. In one connection you can connect to different endpoints. It uses room for that

```javascript
// we need http becuase we don't have express, express has hittp behind the seen
const http = require("http");
const socketio = require("socket.io");
const fs = require('fs')

const server = http.createServer((req, res) => {
    var html = fs.readFileSync('./basic.html', 'utf8')
    res.setHeader('Content-Type', 'text/html')
    res.write(html);
  res.end("finish send");
});

const io = socketio(server);


io.on("connection", (socket, req) => {
    // the server has one event sender and one listener 
  socket.emit("connected to backend.");
  // define an event welcome. everytime receive this event emit or send message
  socket.emit("welcome", "connected to backend.");
  // if a message or any event(here is message) comes in,  then call the callback
  socket.on("message", (msg) => {
    console.log(msg);
  });
});
server.listen(8001);

```
* Client side is
```javascript
<html>
    basic
    <script src="https://cdn.socket.io/4.4.1/socket.io.min.js" integrity="sha384-fKnu0iswBIqkjxrhQCTZ7qlLHOFEgNkRmK2vaO/LbTZSXdJfAu6ewRBdwHPhBo/H" crossorigin="anonymous"></script>
<script>
   
    const socket = io("http://localhost:8001") 
    console.log(socket)
    socket.on('connect', data=>{
        // define a listener event call welcome
        socket.on('welcome', msg=>{
            console.log(msg)
        })
        // define a sender event and in callback tell what to send
        socket.emit('message', {data: "I am from FE"})

    })
</script>
</html>
```
</details>
<details>  
        <summary> Events and handlers on socket.io </summary>

* `socket.conn` you can mess with TCP/IP to deal with transport layer. There are two main APIs. One for server and another one for client

# Server API
* [link](https://socket.io/docs/v4/server-instance/)
* chat.js craete public folder and add chat.html in it
```javascript
const express = require('express')
const socketio = require('socket.io')
const app = express()

app.use(express.static('public'))

const expressServer = app.listen(9000)
const io = socketio(expressServer)
// define a listener. 
// Connection is specific socket io event we don't need to create that
io.on("connection", (socket)=>{
  // when connected, define an event 
  socket.emit('messageFromServer',{data: 'welcome to socket io from back end'})

  // define a listener
  socket.on('messageToServer', (msg)=>{
      console.log(msg)
  })
})
```
### socket.emit(anyEventName, dataYouWantToSend, ack)
* You don't need usually send data, it could be a callback to say hey something happend to let other side which has listener knows.
* `ack` is optional and it would be call when client answer. But `socket.on` does the ack job.

### socket.on(eventName, callBack)
* It register a handler for the given event.

#### connect, disconnect, error
* Reserved events which we don't need to define them. Only need to add listener to catch them whenever they fire
* Event `connect` or `connection` are protected. We handed a callback and that callback fires an upon connection from client. The parameter comes with call back is socket or just client that has been connected. Here is actual [socket](https://socket.io/docs/v4/server-api/#socket) we can access. 
```javascript
io.on('connect', (socket)=>{
  //...
})
```
#### attach(httpServer)/attach(port) 
* you can make socket server then attach it to any http service. `listen` is identical
```javascript
const io = socketio(app.listen(9000))

//equivalent
const io = socketio()
io.attach(9000)
```

# client API
* [link](https://socket.io/docs/v4/client-socket-instance/)
```html
    chat
    <script src="/socket.io/socket.io.js"></script>
<script>
   const socket = io('http://localhost:9000')
   // add a listener 
   socket.on('messageFromServer', (data)=>{
       console.log(data)
      // define an event
       socket.emit('messageToServer', {data: "This is from client"})
   })

</script>
```
* url is our server, it returns `socket` object on FE. We have all properties for socket available as [here](https://socket.io/docs/v4/server-api/#socket) some examples:
* `socket.connected` or `socket.disconnected` lets client know whether it is connected or not
* `socket.emit(eventName, args)` to define an event on client by passing args/data to server
* `socket.on(eventName, callback)` add listener when it happened trigger callback. Callback `params` are all whatever is sent from `other side` or server

</details>

<details>  
        <summary>  socket.io  </summary>

### Namespaces 
* [Namespaces](https://socket.io/docs/v4/rooms/) are a way to name to group a bunch of sockets. Usually it uses for different `urls`. There is no communication between different namespaces. Each socket then are totally different

```javascript
// default is root so they are the same
// io.on = io.of("/").on
```
* Define two connection in BE, two different channels. one is `/` another is `/admin`. they are seperate of each other. In FE define correct event handlers after that
```javascript
const express = require('express')
const socketio = require('socket.io')
const app = express()
// every html files are in the public folder, so when we run the .js it knows where to find theNameOfJs.html file which here is chat.html
app.use(express.static('public'))


const expressServer = app.listen(9000)
// below we hand it express server to have a socket.io server
const io = socketio(expressServer)
// define a listener. 
// from socket server, when we connect we get socket object as call back associated with that connection
io.on("connection", (socket)=>{
  socket.emit('messageFromServer',{data: 'welcome to socket io from back end'})
})
// it is like above we only applies connection handler/listener 
io.of('/admin').on('connection', (socket)=>{
  socket.emit('messageFromServerAdmin',{data: 'admin welcome to socket io from back end'})
  // we can cross namespaces from server side
  io.of('/anyotherNameSpace').emit('messageFromServerForOthers', {data: 'some data'})
})
```
* FrontEnd is like chat.html
```html
    chat
    <script src="/socket.io/socket.io.js"></script>
<script>
   const socket = io('http://localhost:9000')
   const socket2 = io('http://localhost:9000/admin')

   socket.on('connect', ()=>{
       console.log(socket.id)
   })
   socket2.on('connect', ()=>{
       console.log(socket2.id)
   })
   // add a listener 
   socket.on('messageFromServer', (data)=>{
       console.log(data)
   })

   socket2.on('messageFromServerAdmin', (data)=>{
       console.log(data)
   })

</script>
```
* Each event

### Rooms

* `Rooms` within  each namespace, we can define channels that users can `join/leave` . We can broadcast to a group of people. 
* `Client` has never know it is in room. Client can just listen to a namespace and it knows it got that from the event
```javascript
// it only emits on the socket on that room only
socket.to('roomName').emit(' Event', {data: 'some data'})
socket.to('room1').socket.to('room2').emit(' Event 2', {data: 'some data'})
```

### Pass Query

* you can pass [query](https://socket.io/docs/v4/client-options/#query) from front end as second params. To see it in the BE you need to 
```javascript
io.on('connection', socket=>{
  socket.handshake
})
```


</details>





