# General System Design

* 3 main pattern of Designs to fix problem, k-v and streaming analytic are most commons.
  ![batch](https://private-user-images.githubusercontent.com/7471619/268524877-be37612f-7558-4d3f-8149-8253f1ee6810.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ5ODAyNzEsIm5iZiI6MTY5NDk3OTk3MSwicGF0aCI6Ii83NDcxNjE5LzI2ODUyNDg3Ny1iZTM3NjEyZi03NTU4LTRkM2YtODE0OS04MjUzZjFlZTY4MTAucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMDkxNyUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzA5MTdUMTk0NjExWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9N2NmM2VkYjM0NTU4NGMyMzdkMjA4NWUzYzVhOWVlNzc5Y2Y4YzMxZDdlZTNiOThmMmYyYTFmYWExZWI2M2I5MyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.cLIyVaPAVQIQz0UM_zxpC0V82C7Vidh4cpPqQgO4qh0)
* Online CRUD Design
* New Realtime design (streaming): When we want to measure a service like your homes security cameras, temprature online and you need instance analytical. If we want to analyse data with complex algorithms so it would be in next category
* Compute Intensive design (mostly read only)
  

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

* `Netflix`
  * The team for `content delivery`
  * The team for `user accounts`
  * The team for `payments`
  * The team for `feed/recomendations` 

* If `data model` are different, the belong to different services 
like profile and messaging in linkedin
* If `data model` is same but api are different so services are different

- At this step you know your interview is deep though breath through
- If you become to one, two buckets( services) you are in depth design, but if you comes with 5,6 services you are in breath design

#### Step 3: Propose Umberella Architecture 
* As VP of engineering,  Propose how microservices interact with each other and client
* Write the pipe lines and flows between blocks (breath first through)
* `Rules of Thumb`:
  * if high volume data (in size of less than 100kb), needs to push in real time between microservices, use publisher/subscriber
  * Any async comunication between microserves use pub/sub
  * Pub/sub is microserivce thing
  * To pull data from server use REST API
  * If data tansfer is offline use batched ETL

#### Step 4: Delegate Design of Building Block
* Here is where engineering comes in picture, to deep dive each component, If too many services you may choose one or two to dive deep
* For example, at netflix design system `recomendation team` makes most important role in compnay, you may take it
* 

Budget 
![batch](https://private-user-images.githubusercontent.com/7471619/268528304-c68beb7d-9c41-41b2-bffa-50265bc4ecf3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ5ODUwOTQsIm5iZiI6MTY5NDk4NDc5NCwicGF0aCI6Ii83NDcxNjE5LzI2ODUyODMwNC1jNjhiZWI3ZC05YzQxLTQxYjItYmZmYS01MDI2NWJjNGVjZjMucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMDkxNyUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzA5MTdUMjEwNjM0WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZGMxNDJiMmM1ZTQzNGI1MjI3ZWE2MjhmNDc4NDU0NjkwODE3YmM1ZWYzY2E2YmQ1NzNkYjkyNDNjNDE5MzIwOSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.TN51tE4zvUX49SSP97RUmwelXv4M1FR_D3sqC5JrdWU)

* To eveluate performance we consider 3 parts:
* `Response Time`: Server Processing time + time spent on network trip to server and back: `300ms` is good, more than `1s` is bad
* `Availability`:
* `Throughput`: 




# Batch System Design 
