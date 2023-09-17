# General System Design

* 3 main types of Designs:

* Online CRUD Design
* Compute Intensive design (mostly read only)
* New Realtime design (streaming)   

#### Step 1: (product manager)
* APIs Questions:
* How large is data record?
* How many data record to handle?
* What would be response time of the API? 
* How many API Calls per second
* Consistently over Availability, which one is more important here?

* Generic non functional requirements (these are very low level engineering, we just list them and later use), most of them are yes usually but it is good to ask
* Availability
* Reliability
* Hotspots
* Geo 
* Security, rest encrypted, ssl


#### Step 2: (Engineer Lead)
* Engineer lead should devide into components and assign each one to a team. Here is the concept of Microservices come in. You devide application into services where each component is independently maintainable and testable, loosely couple, independently deployable, organize around function requirements and can be owned by small team


* For example: Profile, messaging, notification in Linkedin are seprate teams(services), Messaging and profile have the same apis, but handle with two different teams. 4 APIS for Profile(CRUD) and 4 for messaging require. At `linkedin` there are `4` different teams:
    * The team `identity` handle profile use cases
    * The team `feed` handle feed 
    * The team `messaging` handle messaging use cases   
    * The team `notification` handle notification
* If `data model` are different, the belong to different services like profile and messaging in linkedin
* If `data model` is same but api are different so services are different

- At this step you know your interview is deep though breath through
- If you become to one, two buckets( services) you are in depth design, but if you comes with 5,6 services you are in breath design


* To eveluate performance we consider 3 parts:
* `Response Time`: Server Processing time + time spent on network trip to server and back: `300ms` is good, more than `1s` is bad
* `Availability`:
* `Throughput`: 




# Batch System Design 