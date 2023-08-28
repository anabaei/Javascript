

# Design Steam Processing

#### All designs are in 3 main Categories 
* `Online Processing`: is user transactions and user responses, response fast, uber
* `Batch Processing`: email subscription, push notifications. 
TB or GB of data in batch so we need something to distribute them and output is also huge so apache spark is a choice. 
 *     
* `Steam Processing`: data always arriving, act if data arrives.
Stream processing is application generated data and instantly coming in. 
* Difference between Online systems which has ACID philosophy to make sure data has devlivered and we can't lost some orders, but system processing is fire and forget, it means it is okay if you drop some data

* `Map Reducer` is used both in batch and stream processing. Map reducers are like `Apache Spark`. Spark has spark streaming feature

### Stream Processing 
* Always moving data, analyze incoming data, growth in data size and velocity, any application monitoring tools are example of stream processing. 
* `Fraud detection` is another example which we need to response immediately
* `Predictive maintence and trend detection`: bubble up what is trending
* `Cameras IoT`: detection of human/animals needs to send 
* `Activity Tracking`: 


#### Design in High Level

* `data payload usually is small` because you have 1000/sec going through so it is better to keep payload small
* `publisher and producer` generate data
* `consumer and subscriber` consume data
* between generator and consumer there is a `queue` like kafka, rabbitmq, etc.. 
* `no downtime` means the flow of code is a forever loop. There is no termination of the code, we try to best not have downtime but if it happens it should back to state where it was and continue


#### Application Monitoring Tool (Designing Problem)

* Imagine you have 10000 servers each one emit 2000/s such as cpu utilization to send central brain and dashboard to display
 given serverId in time window of 2 days with granuarily of 1 min

### Queues inMemory & Disk
* RabbitMQ is in memory style queue and Kafka is in Disk style 

## Distributed Queues
#### RabbitMQ
* `RabbitMQ` and `AmazonMQ` are over on MQ, it is older than kafka and originated when computers were not easily available as now.  

* It supports low latency, priority because it is in memory but then Limited with large data 

* `Producer` generates data. Producers can be application, logstash, flowing or anything
* `Messages` are data in transit or payloads 
* `routing keys`
* `consumer` entities that act on data like application or spark streaming apps
* `Exchanges` has three parts in rabbit mq. 
    * `Direct`: one to one queue 
    * `Topic`: one to many queue
    * `Fanout`: one to all queue

* Consumer binds to `queues`, it attach itself to queues and data passes to consumer when exchange allow
* `rabbitmq` is smart enough when push to any queue, then it remove data
* message order delivery guaranteed
* You can add ranking to payload then broker can figure out to tell what is priority of the message
* smart broker and dumb client where clients only display data
* rabbitmq is push model not other way

#### Kafka
* Kafka is pull, client pull data from kafka
* More latency because it is in disk
* Kafka perform at very high throughput level of incoming data, and the order is not that important

* `Producers`: means some agents constantly generating data code, utility, fluentbit, utilliyy 
* everything written in file which called them segments, it never delete unless u delete
* `Topic` : Set of similar messages, any event can be a topic
* `partition` each topic has one or more  partitions for scalability solutions, it has entity which allows to write
* `consumer` read queues one by one which is called offseting
* kafka is good for saving huge amount of data on daily like how many clicks on something happened but it is not good for making queries 


# General approach
* Ask questions and write functional requirements, in a way you are defining end points 
* write down non functional requirements, 
* Always try to draw a simple working first diagrams using microservices to let it work
* half the rest scale, perfomance, availability 
### Functional Requirements questions
* How many users use the dashboard? number of users in total
* How often metrics emitted? (in case desiging)
* What is granularity? it means when we query thise data are in what time like in 1 min
* what is acceptable latency, 1-2 seconds usually is okay for hot data
* Is there a need to build alerting system, (if time exist)

* Then go with a simple sketch 
* Agent sent data, or generate data to stateless REST API server,
* Then server queues data into queues like kafka
* kafka send data to aggregate into server and save into database and cache (at cache we save garnularity which easily can retrieve from FE)
* There is a need to look up by keys, Users need a specific cpu, ip data, the best way is using relational db which makes this queries faster
* 
* users can retrieve data from REST, rest either get data from cache or database




* Multitendancies: each organization have their own policies, so dedicate infrastructure for each specific customer. One solution is have tenand id for each. But for some small customers we can clud them togather but we have to make sure data are not mix togather.  


* create ui to handle 1000/s into queue in kafka, create topic in kafka for each one, use different instances and add sections, then consumer can read those data in order it receievs, we can send updated via socket or server sent event which needs a time interval in the backend 
* 

