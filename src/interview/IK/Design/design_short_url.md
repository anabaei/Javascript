
* In system design need for collecting the Functional requirements for(functions that this system has to accomplish)
  * To detail out problem statement
  * To describe user's view of the system
  * To design minimum viable product
  * Convert each functional requirment to a function in server

* Monolotic is use depth-oriented approach to design
* A third party to save authentication use depth-oriented
* 
* CPU usage is Time Complexity
* RAM usage is Space Complexity
* Scalability: Build a system to handle millions of traffics comes to our system
* APIs: use for client-server interaction enabling to hide the complexities of the service
* URL: Uniform Resource Locator, includes 
  * protocol: indicate which protocol is used by client to comunicate
  * webserver: which webserver is going to hit
  * papge: which page of the webserver
    * https://www.servicename.com/page1
  * short_url: some services can created a unique short links from long urls, and map them with any URL you have  [bitley](https://bitly.com/). Also you can keep track of number of hits on your URL
    * Some medias don't allow you use long urls like twitter, or sms messages which may be limited 
    * Bitley can allow use to update url to a meaningful name
    * Marketing can track of which individual can work better for the company to encourage people to land our service
    * even we can use first half of custom domain name
    * 
* 

### Steps to take
1- Collect functional requirements
2- Cluster them into a collection of Microservice, assign each function related to each service and how are the requests and responses are 
3- Draw the architecture diagram connecting them
4- Dive into each microservice 
5- scale if it is in picture on each microservice to handle traffic




### Design a shortend url
* Need to define two function requirements
  * Encode the current url
  * Decode the upcomping url and redirect to actual one
* To Encode we can have:
  * Predicted urls like below to convert to base64 any upcoming element:
```python
def base10_to_base64(num):
    # Define the base 64 alphabet
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

    # Initialize the result string
    result = ''
    print("alphabet ",alphabet)
    # Convert the number to base 64
    while num > 0:
        remainder = num % 64
        print("alphabet[remainder]", alphabet[remainder])
        result = alphabet[remainder] + result
        num //= 64
    print(result)
    return result

base10_to_base64(127)
```
#### How make sure the message is not tamper on the way?
  * One is to encrypt it in a way to avoid predictable urls:
    * Any ecrypt could be duplicate key, so after creating an ecrypt first check if alreay a key exist (in O(1)) if not then assign url to this key
    * To make sure a message is not `tamper` from client to another client
```javascript
user 1 send message m, and a hashed code of that message
user 2 receieved message m, and hashed code, use hash function from message me and the out put should be same as hashed code it received.
Then it san say message are not temper.
```
##### Cryptographic Hash Functions
* Ways of hashing
```python
MD5 output fix length of 128-bit
SHA 1   output 160-bit # secure hash algorithm 1 
SHA 2
SHA 3
```
* we can convert 128 bits to base 64 to have a shorted urls,  so need to take each 6 bits as one character which ends to roughly 22 characters
```python
128 -> base64 -> 128/6 ~22 characters
```
* If we enter one url several times we get the same result, to avoid it we can concat a counter or timestamp to the end of url, so hashed of it would be enique at the end
* We can take first 36 bits and convert it to a 6 characters, but downside would be we could have more collisions
  
#### Reduce time by Offline generating  (Key Generating Service)
* We can pre-generate short urls, before getting long urls then match them togather. For this you can pregenerate short urls and put them into a queue waiting for upcoming requests.
* This way we handle duplication, we can sort it because it is offline so it won't affect the overal speed
* Downside is we need a lot of space to store it 

#### Network Protocol
* Browser use `curl -v` command to send HTTP request under the hood of browser
*  http imply the port number is using is (80) 
* Client (browser) Make call to DNS, take response from it as Ip address of destination
  * DNS: Send names and returns IP address
* Client put Ip address of destination into header and send it
* Router Service look at header of message and look up for ip address destination
* Port numbers indicate which specific service a client needs
* Server needs to know which client ip needs to send their response and which port
```python
# request and response headers include:
ip destination, port destination, ip source, port source 
```
* Protocol: When two machines communicate with each other they need to use the same language
  * IP:specifies the format of the message as whole, otherwise the routers cannot handle the request
  * HTTP: is a protocol to get website from server

#### Web Server
* We always run multiple copies of our program as server
  * Even in system with one running program we need multiple I/O on network
  * Instead of one request waiting for I/O to complete we can use other copies of program 
* Use multiple copies of running program (multiple processors)
* I/O on webserver happen when they 

How two service in one microservices architecture  communicate with each other ?
They can use API key which generated and saved into process.env. Each request header should have one APIkey to verify
To make sure API key are safe we can encrypt them
Or use Secret Management tools to save keys
const crypto = require('crypto');
crypto.randomBytes(16).toString('hex');

In a microservices architecture, services communicate with each other through APIs. There are several approaches to implement API communication between services, including HTTP/REST, gRPC, and messaging protocols such as AMQP or Kafka.
To keep authentication and authorization safe in microservices, what can we do?
Implement them using a centralized identity provider, such as OAuth2 or OpenID.
We used HTTP/REST to communicate between two services



