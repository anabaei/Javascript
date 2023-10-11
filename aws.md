
#<font color=orange> AWS </font>

#### <font color=orange> 4 main Domains for Exam </font>

###### IAM
* login with16, Ma...!, 

###### skillbuilder
* aws skillbuulder -> 17, ..

###### Scope

- Different architectural pattern like event-driven, microservices, choreography, orchestration and fan out. You should code and best error handlers practices.
- Pattern should be fault tolerant such as retries with exponential backups, jitter and dead-letter queues
- Method of requests, responses, integration request, integration response, enforce validation rule, over riding status code, mapping templates, stage, variable, caches, throttling.
- Dive deep into AWS Lambda developing, define config in lambda, such as memory, concurrency, timeout, runtime, handler, layers, extensions, triggers and destinations.
- Make sure how to use, manage and datastore lifecycle, know different data caching services, caching strategies and make sure how to choose the best practice and how to encrypt data
- 
_________________________________________________________________
###<font color=lightgreen> Essentials AWS </font>

<details>
<summary> Data center, Zone, Region, APIs </summary>

## Data center, Zone, Region

- AWS keep different copy of data at different Data Centers.
  - One cluster can have more than one data centers in one Available `zone`, with redundant power and networks. In case one data center goes down
  - But what if the whole cluster goes down?
    - AWS has different redundant cluster around the world.
      - So like data centers, AWS clusters AZs togather and connect them
      - A Cluster of AZ called a `region`
- How to choose `Region`
  - Compliance:
    - data residency if that matter for country or org
  - Latency
    - how close region are to you impact latency
  - Price
    - Is vary in region to region
  - Service Availability
    - Check the region you want to use have those services you want

###### Resiliency

- At a minimum, you should use two Availability Zones. That way, if an Availability Zone fails, your application will have infrastructure up and running in a second Availability Zone to take over the traffic

###### Edge Locations

- Edge locations are global locations where content is cached.
- Edge Location and regional edge caches to cache content closer to the end users
- CloudFront is edge location. When a user requests content that is being served with CloudFront, the request is routed to the location that provides the lowest latency

## AWS APIs

- 3 ways to interact with aws,
  - Command line interface CLI
  - Management Console (web GUI)
  - Software Development Kits SDK
- Some aws cli commands:

```bash
aws s3api list-buckets #list of buckets
```

</details>

<details>
<summary> Security </summary>

- Host VMs on cloud, EC2 is primary use. AWS is responsible to update OS of the host.
- Client is responsible for
  - Configuring firewalls
  - who can and how much other access the resources
  - Server side encryption
  - Network traffic protection encrypt
  - Customer side data encryption

### Root user

- Each account has a root user who created account
- Single factor authentication is not that secure, it is better to have multi factor authentication on root user
  - One way is virtual MFA device, like a phone app that create one time pass every minute

### IAM

- Manage API calls to to our services like from EC2 to S3 or other services
- Authentication make sure you are who you are saying you are
- Authorization is level of accessing resources, permission control what you can do
- `IAM Policy` is the way to manage Authorizations. It is a json file

```json
// This file allow the identity which attached to any EC2 related action
{
    "statement":[{
        "Effect": "Allow", // allow ro Deny
        "Action": "ec2:*", //* Every EC2 actions is available
        "Resource": <Amazon Resource Name> // means what resources from EC2 can access to them
        "Condition": {<Condition Here>} // further restrict actions
    }]
}
```

- IAM policy can attach to specific users or groups, it is suggestion to assign policy to group
- It is better with root user create MFA then create admin user, log out from root and log in as admin user.
- We can't apply policy against root user

#### Access S3 and other services

- IF you want to access apis through your app inside EC2, you need to have secret keys.
- Create `role` name yourApplicationName. This role is assigned to resource for example `EC2` during creation of EC2.

  - Select trusted entity like `aws service`, `aws account` to say from which service the api call can make,
  - select a service for example `EC2` then, select a policy for example `S3 full access` and `dynamodb full access` policy
  - So EC2 instances using this role can access S3 and dynamodb

- Then create a `user` with a `group`. Create group like `ec2 admin` and attach policy like `ec2 access` to the group then select that group to the user.
-
- Then you get Access key and secret Access key associate with this user

</details>

<details>
<summary> Compute </summary>

- VMs, Serverless, container services are different solutions for compute services
- Linux, MacOS, Ubunto, windows and more are type of VMs OS.

#### Amazon Machine Image AMI

- You can choose what OS with what Application Image you want to run your EC2 instance, you can have your custom AMI as well. You can select what memory and compute instances. G resources implies for high graphic resource, M5 implies of balance of memory and compute.

```bash
# Ec2 instances are family and instance size
c5n.xlarge
# c family
# 5 generation
# n attribute
# large size
t3.medium # first is type instance second is the size of instance
a1.large
```

- Ec2 is resizeable after creation
- Easy to spinning up servers

#### EC2 Lifecycle

- `Launch` instance from AMI
- `Pending State` when it launches, waiting for VM booting up.
- `Running State` after booting, it enters to running, here you charge
- `reboot` you can reboot it
- Use stop to go stopping state
- `stopping state` when can ask to stop
- `stopping state` is charged same as running only if you want to `stop-hibernate`
- `stopped state` after stopping state it enters to stop state
- from stopped state you can spinning it and enter the running through pending state again
- you can use `stop-hibernate` to stopping and stop instance, but when you start it again, everything is same as it was before. Same as when you close laptop and open it. No boot sequence is requires since state of machine is saved into memory and ready to back to back and running
- `terminate` get you from running to `shutting down` and then `terminated` state. Here is gone and for get it. They are visible for a while on console but they are gone
- There is one tool call termination protection.

- `Terminate` is good, if there is an issue or require update, you can launch new instance and terminate the old one

- We provision new EC2 on demand and charge for instances that are running currently
- `Elastic Application` means that resources it needs are added or removed dynamically

#### EC2 Hosting

- When you create EC2 you select these steps
  - name of instance
  - AMI type of OS and apps
  - Instance Type, the size and type of machine
  - Key Pair, if you need SSH connection to your instance you can create one
  - Network setting
  - Select auto assign public ip
  - Create security group and configure the roles like HTTP HTTPS with source from 00000 means whole internet
  - at Advance Details select IAM instance profile to assign Role you already defined
  - under user data you can paster user data script to launch the app

```bash
# data source
# download app
#!/bin/bash -ex
wget https://aws-tc-largeobjects.s3-us-west-2.amazonaws.com/DEV-AWS-MO-GCNv2/FlaskApp.zip
# unzip it
unzip flaskApp.zip
# change directory
cd flaskApp
# install requirements
yum -y install python3 mysql
pip3 install -r requirement.txt
amazon-linux-extras install epel
yum -y install stress
# export environment variables
export PHOTO_BUCKET=${SUB_PHOTO_BUCKT}
export AWS_DEFAULT_REGION=<INSERT REGION HERE>
export DYNAMO_MODE=on
# run the app
FLASK_APP=application.py /usr/local/bin/flask run --host=0.0.0.0 --port=80
```

## Container Services (EKS, ECS)

- Both runs containers on EC2 instances using orthestrating tools to manage containers
- Containers have shorter bootup time than VMs.
- Also protability for containerized app is very useful

- Amazon Kubernetes Servic and Amazon Elastic Container. EKS uses kubernetes to orchestrate contianers and is fully manage able but ECS doesn't use k8. ECS uses its own property and provide api to control plane for managing containers. ECS is simpler and manage task, scaling and scheduling container for us
- Containers are portable, because everything an application needs to run including the app code, dependencies, configs are all packed up together as one executeable file.
- it is selfcontained so we expect same behave across environments like QA prodcution
- `Fargate` is a serverless solution which does hosting our containers without need to manage EC2 instances or accessing OS

## Serverless

- You never pay for idle resources. only pay for running functions
- Using EC2,ECS,EKS compute platforms require to manage instances
  - Update Instances when new software package or security update came
  - Setting up scaling instances
  - Architect solution in highly available manner. Like deploy instances in to AZs at minimum
  - But not every single solution not require that level of underlying control
- `Serverless` you can't access infrastructure, patching, all scaling, fault tolerance, maintenance are taking care for you
- With EC2, we need to patch the OS when new security release
- So we choose between control and convenience when choosing between EC2 and serverless

##### Fargate

- Fargate is AWS compute platform fro containers that we can use either ECS or EKS
- Scaling and fault tolerate all built in, and no need to worry about OS. There is no provisioning, pathcing, cluster capacity management.

###### How Containerize work

- Create container image and send to repo like ECR Amazon Elastic Registry.
- Define compute and memory for your task if using ECS, or your pod if using EKS. You charge based on memory, compute and storage which consumed by containerized apps. But without Fargate in EKS/ECS you charge based on resources you provision and not necessary use.
- Fargate does saving pricing options so it is good for microservice, batch processing, ML, migrating on premises app to cloud

#### Labmda Serverless

- Lambda function only runs with triggers. There are long list of lambda triggers. For example, `HTTP` request, `upload of a file` to S3, `events` from other services, `in-app` activity in mobile devices.
- Code is run in managed environment and you charged when code is running only.
- You select language of lambda, memory and cpu, permissions and dependencies.
- Not usefull for hosting wordpress, it is useful for quick processing like BE handle request.

- For example, no one need to run an app 24 hours on EC2 to resize an image when new photo uploaded. You only need to run resize logic when new photo uploaded.
- When a new photo uploaded to S3, triggers lambda function it resize the image and upload to S3 bucket but to different location where the original image stored.
  - Go to AWS lambda console
  - Create function
  - Type of function
    - Author from scratch
  - Run time, select language
  - Permission -> select existent role which we created was include read and write to S3
  - Add trigger
  - configure trigger select S3
  - select which S3 bucket is event source
  - Event type: select Put operation
  - prefix: only trigger when put occurs inside this bucket
  - select same S3 for out put
  - say name of output prefix as bucket name for output
  - Now it is created
  - select code tab
  - write your code
  - Test now!
    - Go to s3 and upload an image
    - You should see out put prefix is created and thumbnail image is created
- Ec2 charge per seconds, per hour so if there is an action that runs a request barely like once in 3 months, it is better to use Lambda to save cost, since Lambda charge you based on when code runs
- In case you want to migrate from on-premises Linux server data center to AWS. You want to minimize the amount of refactoring needs for migration. Also you want to have elastic service. You need to use Ec2 which has AMI Linux environment and allows to scale down up based on demands.
- Brand new app using microservices or service-oriented design. It needs to scale up/down quickly, lower risk of deploying new changes to production. The best answer is ECS/EKS. Containers bootup quicker than Ec2.
</details>
  <details>
  <summary> Network </summary>

* Each aws instance must live inside a network. There is default VPC when we create EC2. We can select no preference for subnets here.
* With firewall we can define HTTP and HTTPS to allow hit our EC2 from anywhere for example.
* We can run script when instance boots up. like

```bash
# download source code for the app
wget http//aws-tc-.....
unzip
cd
# start web server
yum install...
```

- Then press launch, it boots and give you an ip address when it is done

### VPC

![route](https://user-images.githubusercontent.com/7471619/244955952-bf7f1edb-3f82-4176-9df6-9ccb57b24019.png)

- Aws create VPC for us at every region by default. Serverless don't need VPC to create
- IP Addresses are 32 bits IPV4 (4 byte, each byte is 8 bits) as below

```bash
00000001  00011110 00000010 00000101
1.30.2.5
```

##### CIDR

- To say a range in ip addresses we use `192.168.1.0/24` for below

```bash
192.168.1.0 and 192.168.1.255 == 192.168.1.0/24
```

- 32 total bits subtracted by 24 fixed bits leaves 8 flexible bits (256 ip addresses) which here is last digits 0 and 255
- The higher the number after the /, the smaller the number of IP addresses in your network.

#### Create VPC

- Walls between VPC and datacentrs.
- Region and CIDR are important
  - Select right region
  - VPC -> create VPC
  - Select CIDR `10.1.0.0/16` - 65,536 ips addresses
  - Then we need subnet why?
    - IF we host our app on EC2 which is on a subnet, we don't want someone from that subnet access to our database, so we need a seperate subnet to isolate our database instances from app instances
    - select VPC for subnet
    - select Zone for subnet
    - select IP range for subnet
    - Make sure subnets are not overlap
  - choose `10.1.1.0/24` for EC2, to allow public access to our app at EC2 make it public, name it public subnet, same zone
  - select `10.1.3.0/24` for DB, name it private subnet, same zone
- Make our EC2 available on internet, you need a tool call `Internet Gateway`
  - Create gateway then attach to the `VPC`
- Make our EC2 available only for specific data centers not the whole internet, then you need a tool called `Virtual Private Gateway`:

  - `VGW` allows you to create VPN connection between an internal network or data center to VPC
  - It is not use for our application, other use cases is there

- To have `High Availability` in case of one `Zone` is down, we need to access to another Zone. So duplicate everything in another zone. We create two additional subnet each with another AZ. (as best practice we need to have at lease 2 AZ)
- Public subnet is `10.1.2.0/24`
- Private subnet is `10.1.4.0/24`

### VPC Routing

- Steps to take:
  - Create a VPC - select CDRS
  - Create subnets (for example 4) - none overlap CDRS
  - Create and attach internet gateway to the VPC- one internet gatway for each VPC
  - Configure and create route table
    - Each VPC has one already created route table, need to define new custom one
    - Add route that allows internet to flow traffic to some subnets we want

```bash
 # it is like add two rows as
 In Rout table, route tab add below
 destination: 0.0.0.0/0 target: nameOfInternetGateway # allow internet to our gateway

 at route table, subnet tab add below
 edit subnet, select which ones you want
```

![resource](https://user-images.githubusercontent.com/7471619/244955857-dd766778-9342-453f-b0b2-8d87e3a7ed67.png)

- Relaunch our app in the new VPC

  - To relaunch one app from EC2 to use our VPC, navigate to EC2 console, select it, select actions, select image and templates, select launch more like this
  - Select a new name for the app
  - On network setting, select VPC we created and select the public subnet
  - Security group, need to create new one because the previouse one is tied with VPC
  - IAM role select
  - Check the user data
  - Launch!

- Route Table always can attach to subnet
- When you create a VPC, aws create a route table called `main route table` and applies it to the entire `VPC`
- So in this example a main route table has `destination : 10.1.0.0/16` and `target: local`. Means all local traffic can flow freely within VPC.
- To add another row you can add new row `destination : 0.0.0.0/0` and `target: igw-id`. 0s means it can take and deliver traffic from anywhere and specify target as `internet gateway or igw-id`. Next we have to tell which subnet this route table applies to.
  - Click on the subnet association tab, then choose subnets we already created.
  - At above we hooked up subnets to route table that allows internet traffic from IGW to our app in EC2.
- But you may want to add some restriction to access to some subnets.
- If the route between `Internet Gateway` and `subnet` exist then this subnet has public access otherwise it doesn't.

### VPC Security

- VPC is secure, but when you open it to public internet you need to make some changes.
- There are 2 options: `Network Access Control List` refers as network ACLs and `security groups`

##### Network ACLs

- This is a guard around each subnet only.
- You can think about ACL as a firewall in subnet level. We can control what kind of traffic in and out from our subnets. They looks like a wall around each subnet.
  - Like you can add a role to allow only HTTPS to your subnet and denies everything else. Also you need to define same out bound role for HTTPS to allow request get out of the subnets in response to HTTPs in

#### Security Groups

- It is responsible for securing EC2 instances, at default it blocks all inbound traffic and allows all outbound traffic.
- Every time you create EC2 instance, you need to put that instance into a security group which allows appropriate traffic flow to the app.
- Security groups are stateful, they memorize the initial connection traffic from EC2 or outbound and based on that they can apply roles. So we can define inbound and outbound roles with different settings
- Create one security group:

  - EC2 default security group blocks all inbound traffic and allow only outbound traffics
  - For a webserver, need to create a group which allows HTTP/HTTPS inbound request

- By ACLs everything is allow and you can use block and allow rules, but with Security Group default every is block by default and you can use only allow rules
- To use `Ultimate` convenient leave ACL to default and use mainly security group to secure access, but you can always go further and add more security layers

</details>
  <details>
  <summary> Storage </summary>

- Two main storage we can store data: `Block` (EBS and ephermal) and `Object` (S3)
- Block storage chunk data into smaller pieces but Object database save all as one unit
- To find or update data in block it is easy since we need to update one part, but with objects data we need to change all blob

## Block Storages

- Internal storage called `instance store`
- External storage called `Amazon Elastic Block Store (EBS)`

##### Instance store (ephemeral storage)

- Directly attach to the Server, it is fast and response quickly
- Its life cycle depends on the instance, so when instance down all data will disappear
- It is good for temporary data to store and fast

##### Amazon Elastic Block Store EBS

- EBS only available on EC2 instances, not available with serverless like Lambda.
- Is detachable, You can detach an EBS volume from one EC2 instance and attach it to another EC2 instance in the same Availability Zone to access the data on it, so if one instance is down the data will not lost. Size-limited line 2TB. If you need 5TB, you add more volume. Most of time can connect to 1 computer 1-1 relations, buy it is possible to use EBS multi attach instances, but it is not supported by all volume instance types
- Drives (EBS) are network attached storage for instances
- EBS Volume directly talks with instances
- We can switch EBS Volume from one instance to another, we should first
  - stop instance
  - detach the volume
  - attach to another instance in the same AZ
- EBS Usages:
  - Databases which needs scale and quick access
  - OS
  - Business Critical applications which require high availability and high durability
  - Data analises
  - A storage for a high-transaction relational database on an Amazon EC2

##### Type of EBS Volumes

- EBS volumes are organized into two main categories: solid-state drives `SSDs` and hard-disk drives `HDDs`. SSDs are used for transactional workloads with frequent read/write operations with small I/O size. HDDs are used for large streaming workloads that need high throughput performance. AWS offers two types of each.

##### Back up EBS Volumes

- Error happens and EBS Volumes can fail, the way we take back up is `snapshot`
- `EBS snapshots` are incremental backups that store redundantly
- If something goes wrong, it create new volume from snapshots and restore data

There are some reasons which we may not save all photos for example in EBS. EBS sizes have limited sizes, and also multi volume EBS are not supported in all volumes types

## Object Storage

- Amazon Simple Storage Service S3, is storage solution that is not tied to compute. It is unlimited within individual size limit of `5 TB`.
- `S3` save objects in different regions. Bucket names are unique among all aws accounts globally. one example of bucket name `employee-photo-bucket-001` which is DNS compliant and everything on `S3` is private by default.
- `CloudFront` can store the frequently accessed content as a cache, and the performance is optimized for S3.

##### Security

- On bucket detail page, change permission which block all public access to this bucket
- On Object Ownership tab, select `ACL enabled`.
- Then go back to object detail page on object actions, select Make public using ACL. But usually you want to be more `granular` about photos. To do that you can use `IAM` policy attach to `User` or `Group` and `roles` to access S3, or use `S3 bucket policy`

###### S3 Bucket Policies vs IAM

- S3 policies are attached to the bucket and what actions are allowed or forbidden, but IAM policy attach to user, groups or roles. But both are json file format
- S3 bucket policies are only for buckets not for folders.
- S3 usages:
  - Backups: AWS stores EBS snapshots in S3
  - Media
  - Softwares: if your customers need to download software
  - Data Lake: S3 storage is unlimited from TB to Petabyte
  - Static Website and content: HTML etc

##### Amazon EFS (Elastic File System)

- If we have a wordpress which same files into filesystems, and needs different instances we can use EFS which is only for `file storage`, is elastic and can scale from TB to peta byte.
- S3 has flat hierarchy so it is not good to save file systems
- S3 can not mount on to different instances
- By saving Wordpress into EFS and mounting them into EC2 when each instance it boot, without depending on any EC2 instances
</details> 
<details> 
    <summary> Databases </summary>

- RDMS, you can install RDMS into EC2 which is good for migrating data from on premise to cloud
- Alternative to manage DBs on EC2 we can choose one of the managed databases offered in EC2 like `AWS RDS` and `dynamodb`

- RDS Benefits:
  - Complex SQL: We can join multiple table which we can more understand the relaiton between data
  - Reduce Redundancy: Save data in one table and address it from other places
  - Familiarity: Tech proffesional often more familiar with it
  - Accuracy: RDS make sure data is atomic, consistent, isolate and durability ACID
- RDS why:
  - Applications that have fixed schema and don't change often
  - Apps that follows ACID and needs persistance storage like
    - Enterprise resource planing
    - CRM
    - Commerce and financial apps
- Postgres, mysql, awz auroa are some kind which is faster than psql and mysql

- NoSQL:
  - we can have variation of data type
  - it is good for data sets which are less rigid
  - Not every item in table should have same attributes
  - If it is not complex data
  - If it is a simple look up data
  - It is not charge based on the running instance
  - Queries are simpler and focus only on one table not collection of tables
  -

### AWS RDS

- It charged when it is running. When you create RDS, it replaced inside a subnet same as EC2 instance. We know subnets are bound to one AZ. For best practice we replicas our solution, so another RDS should create in another subnet at another zone. So we configure our RDS to launch another instance in another zone with another subnet using RDS multi-AZ-deployment. RDS manage and `sync` data for us.
- Also RDS manage fail over instances, one is primary and one is secondary.
- We only need to make sure if the failur happen in databse, app can reconnect. It should use cache DNS Lookup first then try to reconnect, AWS RDS does the rest for us to connect to accessible db.

### AWS DynamoDB

- It is NoSQL, key value pair or document data. It works in massive scale with ms latency.
- Charge based on the usage of the table and amount of data reading from table not by hour like RDS
- Stores data in one table and underlying it acrosses multiple AZs which makes it `highly available`
- Milliseconds response time makes it `highly performance`
- No need schema
- It scales to 10 trillion request per day
- Create database tables that can store and retrieve any amount of data and serve any level of request traffic.
- Scale up or scale down your tables' throughput capacity without downtime or performance degradation.
- Monitor resource usage and performance metrics using the AWS Management Console.
- DynamoDB encrypt all your data using encryption keys stored in AWS Key Management Service
- IAM administrators control who can be authenticated and authorized to use DynamoDB resources
- Best solution for high concurrency and connections for millions of users and millions of requests per second.

### AWS DocumentDB

- A document database is a type of NoSQL database you can use to store and query rich documents in your application
- Works for content management systems, catalogs, user profiles. Amazon DocumentDB has API compatibility with MongoDB. This means you can use popular open-source libraries to interact with Amazon DocumentDB, or you can migrate existing databases to Amazon DocumentDB with minimal hassle

### AWS Neptune

- To have a social network app, track of who connects to who is complicated, so you can use a graph database AWS Neptone.
- Companies often use graph databases for recommendation engines, fraud detection, and knowledge graphs.

### Amazon QLDB

- If there is supply chain app which needs to track all actions to make sure nothing is lost, or have banking system that requires 100% immutability. We need immutable ledger that provides a complete and cryptographically verifiable history of all changes made to your application data.
- Any entry can never be removed in this database which is good for any audit

</details>

<details> 
    <summary> Monitoring </summary>

- Metrics, logs and network traffic are areas we monitor.
- Services generate data points which is called `Metrics` like current cpu utilization by EC2 instance, network generate flow log to monitor traffic in or out to our VPC, at db layer it generate number of simultaneously connection.
- `Metrics` that are generated over time are called `statistics`
- When we collect data, compare with base line, if passes the base line then trigger alert to someone or something

### CloudWatch

- 3 state of Amazon Cloud Watch: OK, ALARM, INSUFFICIENT_DATA
- Allow to monitor all data in one place. Data collected from all services
- 70% of cpu utilization more than 5 minutes
- You can define threshhold for matrics, if after certain amount of time threshhold pass then trigger an alarm
- Setup `AWS SNS` to send email or message to let someone know there is problem

</details>   
<details> 
    <summary> Auto Scaling & LB </summary>

### Auto Scaling

- 3 components of Auto Scaling: Launch template, scaling policies, Amazon EC2 Auto Scaling group
- When one instance is overloaded, then it report metrics to cloudWatch, then cloud watch go to alarm state and ask more instance to have horizontal scalability
- To have it we need to go to EC2 dashboard
  - Select create launch template, select role, group, etc to say what to launch
  - Select auto scaling group to tell when and where, attach to the template you create
    - select vpc and private subnets
    - check health ELB
    - select min=2 means 1 at each zone, desire = 2 means how many you want to run, max=4 means 2 at each zone if 2 zone
    - Define scaling policies like when threshhold reach a 60% amount trigger new instance
    - You can add notification when scaling happen.
- To test it you need to stress the app
- You can create stress cpu feature to mimic the load coming into our server or use load testing tool

- When number of EC2 instances increase, it is hard to route requests to each subnets in EC2. LB does the job for us also check health of instances. 3 types of LB are
- Application Load Balancer: Layer 7 HTTP/HTTPS, For a web app we should use ALB,
- Network Load Balancer: Layer4 TCP/UDP/TLS
- Gateway Load Balancer: Layer 4+3: IP, use for lbs to third party apps

### ALB

- ALB operates at application layer 7, Has 3 parts

  - `Listener`: listen to port 80 or 443 using HTTP protocol
  - `Target`: The target group of backend resources like EC2, lamdba. Each target group has set of health check befor sending traffic.
  - `Rule` Define how request route to target. So we can say all requests to `/info` routes gos to Target group B and with route `/about` goes to target group A

- Fleet Management: Automatically replaces unhealthy EC2 instances
- Predictive scaling : Uses machine learning to help schedule the optimum number of EC2 instances

</details> 
<details> 
    <summary> Design of System </summary>

- Two ways one using EC2 another using lambda

### EC2

![ec2](https://user-images.githubusercontent.com/7471619/244955627-055178d5-00a4-4ddf-917e-877615842c7c.png)

### Lambda

- RT53 uses DNS to match ip with DNS
- CloudFront uses cache to edge locations
- First S3 host static pages using only javascript, html, css, then they make request to API Gateway
- Lambda function could be one and could be many
- It is easier and less expensive, networking is already managed
- Another solution is using EKS or ECS
  ![design](https://user-images.githubusercontent.com/7471619/244955503-671b9cdb-e2d8-4de7-985d-a202c0e23da7.png)
  </details>

<details> 
    <summary> Quiz </summary>

Who is responsible for ensuring the security of AWS Regions, Availability Zones, and data centers?

- AWS
  Which of the following statements about containers and virtual machines is correct?

- Containers share an operating system (OS) kernel : correct
- Virtual machines share an operating system (OS) kernel: wrong
- Virtual machines must use the same operating system (OS) as the hypervisor :wrong
- Containers each have their own kernel : wrong

Which of the following elements are contained in an AWS Identity and Access Managment (IAM) policy? (Select THREE.)

- Effect
- Action
- Object
- Cause
- Resource
- Image

Users in a company are authenticated in the corporate network, and they want to use AWS services without signing in again. Which AWS authentication option should the company use?

- AWS Identity and Access Management (IAM) role -> correct
- AWS Identity and Access Management (IAM) group -> wrong

Which actions must be completed so resources in a public subnet can communicate with the internet?

- Attach an internet gateway to the virtual private cloud (VPC)
- Create a route in a route table to the internet gateway.

Which of the following components are NOT required to launch an Amazon EC2 instance? (Select TWO.)

- User data
- Tenancy
  these 3 are require
- Instance type, Storage, Operating system (OS)

What is a typical use case for Amazon Elastic Block Store (Amazon EBS)?

- Block storage for an Amazon EC2 instance

An employee at a healthcare facility is tasked with storing 7 years of patient information that is rarely accessed. Their boss wants them to consider one of the Amazon S3 storage tiers to store the information. Which storage tier should they use?

- S3 Glacier Deep Archive

Which database task is the customer's responsibility when using Amazon Relational Database Service (Amazon RDS)?

- Optimizing the database

A Multi-Availability Zone database (DB) deployment is beneficial when a customer wants to increase the availability of their database. What are other benefits of a Multi-AZ deployment?

- Automatic failover
- Protect db performance
  What are the main components that make up Elastic Load Balancing (ELB)?

* Rule, listener, target group

Which Elastic Load Balancing (ELB) load balancer type should be used for an application that uses a rule based on a website's domain to choose target groups?

- Application Load Balancer

* X-Ray can help users quickly identify services by response times. X-Ray can find poor performance service. CloudWatch provides the context, including the logs and metrics necessary to study specific issues.
* Parameter Store allows externalization parameters, like API key.
  secure string provides data security by value encrypted at rest.
  Authorized access to the parameter control by IAM.
  Parameter values can changed by authorized principals requiring a re-deployment of the function, although the function would require intelligence to re-read the parameter values.
* ElastiCache for Redis is a fast in-memory data store that provides sub-millisecond latency to power internet-scale applications. Data not stored on the instance itself. This choice is ideal for ensuring that the session state information persists across devices.
* Instead of using ARNs for the Lambda function in event mappings, you can use an alias ARN.
* A Lambda alias is a pointer to a specific Lambda function version.
* An ElastiCache cluster with a write-through strategy allow read requests to be redirected to ElastiCache efficiently. The strategy will allow for the most up-to-date data to be retrieved.
* You can enable DynamoDB Streams on a table to create event that invokes an AWS Lambda function.
* If you enable DynamoDB Streams on a table, you can associate the stream Amazon Resource Name (ARN) with an Lambda function that you write. Immediately after an item in the table is modified, a new record appears in the table's stream.

#### 2000 course

WHAT YOU'LL LEARN

Set up the AWS SDK and developer credentials for Java, C#/.NET, Python, and JavaScript
Interact with AWS services and develop solutions by using the AWS SDK
Use AWS Identity and Access Management (IAM) for service authentication
Use Amazon Simple Storage Service (Amazon S3) and Amazon DynamoDB as data stores
Integrate applications and data by using AWS Lambda, Amazon API Gateway, Amazon Simple Queue Service (Amazon SQS), Amazon Simple Notification Service (Amazon SNS), and AWS Step Functions
Use Amazon Cognito for user authentication
Use Amazon ElastiCache to improve application scalability
Leverage the CI/CD pipeline to deploy applications on AWS

</details>

_________________________________________________________________

###<font color=lightgreen> Develop AWS </font>

<details> 
    <summary> Containers </summary>

- Containers run on OS level.
- Single Hardware server host several containers they share underlying host system's OS kernel
- In this way we can utilize more VMs on the same OS, the middle image rather than the old left side design. But there is redundancies same libraries need to download same Guest OS, so the containers the most left one came in
- Container run time share `OS kernel`. Containers can share libraries if needed also can have its own libraries as well
- `Docker` is virtualization platform.
- `image` is a read only immutable template with instruction for creating container. Running container is an instance of that image.
- `Image` is based on other images with some customization.
- `From` base layer of the container OS,
- `Run yum -y update & yum -y install httpd` update OS and install apache
- `copy` copy over your system file to container, `CMD` execute the code

- Microservices are design pattern that speed up deployment cycle, improves maintainability and scalability.
- Each service communicate via api operation and run as single independent service. Each service support single function which support multiple applications.
- In old fashion, adding more resources was difficult
- Monolitic has risk in availability because many resources tightly coupled on single failure.
- Each service can scale independently, can update and deploy faster.
  - Decentralize of services: Each service can have different language framework which is more suited for the application
  - smart endpoints, dumb pipes: service receive data must be smart to handle it.
  - Independent product not project:
  - Design for failure: services are resiliant hadnle
  - Disposability: start fast, fail fast and reslease file handler fast
  - Faciliates devops
  - </details>

<details> 
    <summary> Serverless </summary>

## Serverless
* Serverless Cloud handles everything require scale without provisioning or managing servers. Only we need to build, deploy and monitor app the rest of jobs like dealing with instances, OS , or servers to manage manually. Below are list of serverless systems in aws.
*  Most AWS services `generate events` and act as an `event source` for Lambda

| Type of Service | Name of Service | Name of Service |
| -------- | -------- | -------- |
| Compute Service | Lambda | 
| Storage | S3 |
| Interprocessing Messaging | SNS | SQS |
| API Integration | API GateWay | AppSync  |
| Developer Tool | Development Kit CDK | Serverless Application Model SAM |
| Storage | DynamoDB |  
| Event Bus | EventBridge |  
| Orchestration | Step Function |  


## Lambda
* Lambda is a serverless `compute service` to run your application, you can define services to invoke your lambda without provisioning or maintaining servers.
* We configure event sources to launch your Lambda
  * It initiates functions for you in response to events
  * It scales automatically
  * It provides built-in code monitoring and logging via Amazon CloudWatch. 
*  Lambda can rapidly launch as many copies of the function as needed to scale to the rate of incoming events.
* new item to increase liability
*  `Define function`, `define event source to invoke function`, `define execution params like memory, timeout and concurrency` 
*  `Lambda handler` an entry point to process events, Lambda calls it to initiate lambda function
*  `Event Object` is meta data about the event that initiated lambda function
*  `Context Object` generated by AWS and provides metadata about the action. It includes information about which cloudwatch logs should be sent, runtime and requestId

###### Configuration
* You can assign `memory` (max 10GB) and  `CPU` increases accordingly when you increase memory
* You are charged based on time*memory. Free tier has 1 million req per month and 400,000 GB-seconds of compute time per month
* `Timeout` max 900 it is a time that aws dedicate to each function before terminates it
  * To reduce costs you can remove unnecessary SDKs 
* `Concurrency` When your function is invoked, Lambda launches an instance of the function to process the event, If the function is invoked again while the first request is still processed, another instance is allocated. Having more than one invocation running at the same time is the function's concurrency
  * `unreserverd` are 100 by aws, which allows you have available concurrency
  * `reservered` each function can have a set of reserverd concurrency (max) that no other funtction can use them and you are not charge for that
  * `provision concurrency` is the minimum amount of concurrency which you are charge for them since you allocate them 
  
* `Reasons for setting concurrency limits`
  * Limit costs
  * Regulate how long it takes you to process a batch of events
  * Match it with a downstream resource that cannot scale as quickly as Lambda
* `Reserve function concurrency to achieve the following:`
  * Ensure that you can handle peak expected volume for a critical function 
  * Address invocation errors
  
* When your function finishes processing an event, Lambda sends metrics about the invocation to Amazon CloudWatch. You can build graphs and dashboards with these metrics in the CloudWatch console. You can also set alarms to respond to changes in use, performance, or error rates.

#### Performance test
* To test concurrency need to run performance test that simulate peak levels of invocations.
* Does your error handling work as expected? Don't test in isolation. If you’re connecting to Amazon Relational Database Service (Amazon RDS), ensure that you test that the concurrency levels for your function can be processed by the database.

###### Resource (function) & Execution policies
* Resource policy tells which resource can invoke event
* Execution policy tells when function to interact with other services. 
* `Resource Base Policy`
  * Associated with a "push" event source 
  * Created when you add a trigger to a Lambda function
  * Allows the event source to take the lambda:InvokeFunction action
  
* `Execution policy role`
  * IAM policy includes actions you can take with the resource
  * Trust policy that allows Lambda to AssumeRole
  * Creator must have permission for iam:PassRole

###### Connect to VPC
* To connect lambda function to VPC and allow lambda functions to access resources on VPC, need to define an endpoint for VPC to connect with lambda APIs which is private and only available on AWS network it is called `PrivateLink`. 

* `stage variables`: 
* `dead letter` 2 times lambda function retries then even it can wait for days to retry again, we can set it as well
* `Event Driven` event driven architecture uses events to initiate actions. When an event occurs, information publish for other services to consume. 
* Event-driven" refers to a programming or system design paradigm where actions or functionalities are triggered by events or occurrences. Instead of following a linear sequence of steps, the flow of the program or system is determined by the events that happen 

#### Synchronous invocation Lambda
* When you invoke a function synchronously, Lambda runs the function and waits for a response and expect an immediate response
* There are no built-in retries. You must manage your retry strategy within your application code
* The following AWS services invoke Lambda synchronously:

* `Amazon API Gateway`
* `Amazon Cognito`
* `AWS CloudFormation`
* `Amazon Alexa`
* `Amazon Lex`
* `Amazon CloudFront`

#### Asynchronous invocation Lambda
* Invoke async, means invoke them then go. Not wait for the response
* Need define destination to tell where it should send the data
* The following AWS services `invokes` Lambda asynchronously
  * `Amazon SNS` 
  * `Amazon S3`
  * `Amazon EventBridge`

#### Polling invocation Lambda
* Lambda will poll (or watch) these services, retrieve any matching events, and invoke your functions. This invocation model supports the following services:

* `Amazon Kinesis`
* `Amazon SQS`
* `Amazon DynamoDB Streams`

* Lambda reads events from the following services:
  * `Amazon DynamoDB`
  * `Amazon Kinesis`
  * `Amazon MQ`
  * `Amazon Managed Streaming for Apache Kafka (MSK)`
  * `Self-managed Apache Kafka`
  * `Amazon SQS`



  
#### Write Function

- Use best practices, use repository to write your code in lambda. So not use management console for writing function
- `Handler`: is like a main function, add function configuration, lambda-specific code and `No` business logic
- `Controler` add business logic here
- `Service` layer dealing with external tools that need to work with
- `Cold Start` everytime lambda function is run, it needs time to bootstrap, this include executing libraries and dependencies. To reduce this time we should reduce size of libraries and dependencies
- Spring in Java take long time to initialize. To use compile libraries `aws` provide staticllay linking some of libraries like node, python. It is linked from S3 to reduce time of dynamically

#### AWS SAM CLI

- With these codes you can deploy

```bash
sam package # it takes all code base and create a zip file archive ready to deploy to lambda using S3
sam deploy #
```

#### Organize & Environment

- Divide application into services. So each lambda service can have one or more functions

- You can have for each user a development account, and each developer use their own credentials to submit their code to lambda, or have one share on different environments.
- Separate production and test/dev environments into different accounts

#### Testing Serverless application

- Testing are usually is done locally by own dev environment, then remote integration test run against sandbox account, and finally it is automated pipeline running expected tasks against other variable and environments.

- `Unit Test`: we keep all logic in controller, so we write unit test only for that.
- To mock up how other parts talks with lambda, we can use `DynamoDB local` and `LocalStack` on your local machine
- Also you can have custom mocks. It is expensive

#### Debug your code

- We can't have inter
- AWS SAM allows you run your lambda function on your own local using docker. This allows us to interactive with it. Then you can make API request using your browser.

</details> 
<details> 
    <summary> EKS Amazon Elastic Kubernetes Service </summary>

- EKS, create and manage k8 infrastructure across multiple zone to eliminate single point of failure. Also it can manage worker nodes. AWS support Native, upstream Kubernetes
- It comes with ELB, VPC, IAM for role base access control. `EKS` allows us to `create cluster` and `delete a managed node group`.
- EKS is responsible for k8 control plan nodes like API server, schedular, forth
- etc datastore
- Consumer of EKS is responsible for:
  - IAM
  - Pod security
  - runtime security
  - network security
  - security of the code inside image container
- EKS requires permission to make calls to AWS APIs on your behalf to manage the cluster. This permission is controlled by the `IAM role` assigned to your cluster. AWS provides an IAM policy with the recommended permissions for this role. IAM role assigned to the worker nodes which allow kubelet daemon on Amazon EKS talks with worker nodes
- The IAM role used to create the cluster will have full permission to manage the cluster, which is more permission than is usually required. For this reason, best practice is that you create a specific IAM role just for deploying clusters. Create additional principals in IAM that map to more restrictive roles in RBAC for routine operations, following the principle of least privilege

#### Kubernetes

- Only kubernetes(not EKS) can manually `create deployment` and `get all namespaces`.
- `Cluster` set of worker machines, called node, that runs containers.
- `Node` has services necessary to run pods(1 or more) and communicate with control plane. Node is VM or actual machine
- `Pod` Group of containers. Pod is the basic building block within Kubernetes for deployment, scaling, and replication.
- ` Kubernetes service` Logical collection of pods and a means to access them
- `Ephemeral volume` application in a pod have access to shared facilities which when pod dies they removed
- `Persistent volume` same as ephemeral but they don't depend on pods life cycle
- `Namespace` One cluster can have different namespace for different teams to separete nodes they work
- `Replica Set` number of pods running
- `Deployment` we describe desire state in deployment, then deployment change the current state to desire state
- `Secrets` all confidential data save there, `ConfigMap` save all non confidential as key value pair
- `Control Plan` manage the worker nodes and the pods in the cluster, EKS always control it
- `kubectl` can communicate with the Kubernetes API, commands to create resources, view detailed information about the cluster and resources, and access troubleshooting tools

#### EKS Control Plan

- EKS manage control plan for us. In standard kubernetes we are responsible for creating, maintaining control plan and nodes, but EKS does it for us.
- Amazon EKS automatically manages the availability and scalability of the Kubernetes API servers and the etcd persistence layer for each cluster. EKS handle provision, scale and management of k8 control plane.
- EKS automatically find and replace unhealthy nodes, we just connect to EKS,
- EKS uses `CloudFormation` in the background to build clusters based on the options you specify.

#### EKS Data Plan Fargate

- Managing infrastrucutre is difficult, by allowing Amazon EKS to manage some or all of your data plane, you can simplify your infrastructure and maintain standardization
- `Fargate` manages the complete infrastructure of your Kubernetes data plane. You need to worry only about running your pods. There is no accessible to the lifecycle
- One less automate EKS is `managed node groups`, you still see resources in your AWS , such as EC2 instances and Auto Scaling groups. You get all of the control, security, and visibility, with less work. You can use SSH to to get into lifecycle

### Networking

- We have services some keep in public and some keep in private subnets in the same VPC. How EKS handle them? as below image. NAT Gateway is a tool to make connection between private subnets and other part of the cluster.
- Services stays at public subnet can directly accessible from internet

![networking](https://user-images.githubusercontent.com/7471619/245320572-20d71739-4a15-4c3a-8ed5-a088231f96d9.png)

### Create Cluster

- Before create cluster, make sure install `AWS CLI`, `kubectl` and `eksctl` (optional)

##### Create Cluster using eksctl

- `eksctl` a command line simplifies creation, this command can do:
  - create IAM role for the cluster and nodes
  - create dedicated VPC with CIDR 192.168.0.0/16
  - create a cluster and node group
  - install CoreDNS
  - create kubernetes file for the cluster
- eksctl translates the instructions in your configuration file to equivalent CloudFormation templates.
- How do you change the AWS Region a cluster is created in by using eksctl? (Select TWO.)
  - Use the --region flag when running the command.
  - Use a customized cluster.yaml file.

```javascript
// install eksctl at linux host
curl --silent --location "https://github.com/weaveworks/eksctl/release/download/
sudo mv /tmp/eksctl /usr/location/bin
// create cluster
eksctl create cluster -f ./prod-cluster-config.yaml
// use kubectl to check on the status of the nodes
kubectl get nodes
```

- config file includes name, version, region, nodes, node min, node max, node type, version
### Horizontal and vertical scaling

* `Horizontally scalable` system is one that can increase or decrease capacity by adding or removing compute resources. For example more pods are deployed when demand spikes (scale out). Pods are removed when demand drops (scale in)
  
* `Vertically scalable` system increases performance by adding more resources to the compute resource, such as faster (or more) central processing units (CPUs), memory, or storage. For example, the size of pods (CPU and memory resources assigned) is increased when demand spikes (scale up) and decreased when demand drops (scale down). 

* `Kubernetes` has mechanisms to scale application workloads both vertically and horizontally

![im](https://user-images.githubusercontent.com/7471619/246274518-aaa79936-e01c-45be-a851-b1fd2af66b0d.png)


* It adjusted new nodes with the number of nodes when some where fails. Pods failure can happen when no lack of resource or nodes are underutilized! 
```bash
# setup of nodes could be 
2 min, 10 max, 2 desire # low demand
2 min, 10 max, 10 desire # high demand
2 min, 10 max, 6 desire # average 
```
* karpenter is another solution 

#### Horizontal Pod AutoScale
* It only scales number of  pod `instances` based on CPU utilization, memory utilization or any other metrics which you define in kubernetes. For example, below created HPA resource, which allows kubernetes when pass from 50% usage of CPU, scales up and when it is less scale down to min
```bash
kubectl autoscale deployment myapp --cpu-percent=50 --min=1 --max=10
```
#### Vertical Pod Autoscaler
* This set up increase the amount of CPU or memory reservation for the pods. 

* `metrics-server`, `cluster-autoscaler` are already installed, also `aws-node`, `coredns` and `kube-proxy` are installed as well.
```bash
# to display all clusters running
kubectl get pods -o wide A
# install php apache server as  a target server to activate scaling 
# to see how new deployment is configured
kubectl describe deployment php-apache  
# Create HPA resources to increase/decrease of pods
kubectl autoscale deployment php-apache --cpu-percentage=50 --min=1 --max=10
# 
```

### EKS Communication 
* 3 type of communication:
  * Container to Container:  There is same localhost address and only with different port they can talk with each other
  * Pod to Pod: Each node allocated a range of ip addresses, which each pod takes one and the pods can find each other with those ip addresses
  * Ingress to Cluster: `CNI` helps to Kubernetes pods to have the same IP address inside the pod as they do on the Amazon VPC network. Every pod has a real, routable IP address from the Amazon VPC and can easily communicate with other pods, nodes, or AWS services.
* `CNI` is a plugin that allows Kubernetes pods to have the same IP address inside the pod as they do on the VPC network
### Ephemeral pods
* When a pods die, k8 has an object called `service`, service is a tool to access pods. Instead of connecting to ip address of pods, we connect to service. `Service` check the health of pods constantly, if one pod die service replace it with new pod without changing ip address of that pod. 
* Kubernetes has 4 types of service
* `cluster IP` service, is static which maps to appropriate pods
* `Node port` service, It connects to cluster IP.  It expose on each node using static port and can be access from outside by adding nodeport, cluster ip
* `Load balance` service, balance traffic between nodes. It expose with `cloud provider LB`
* less use `external name` service, maps internal ip address to external DNS. This is usefull when you don't want to have routing change 

### Ingress
* Ingress helps to route traffic based on routes to different services to reduce load, like /about goes to serviceA and /info goes to service2, Each service is a LB service


### AWS Load Balance
![im](https://user-images.githubusercontent.com/7471619/246299360-3da6b48c-1a0b-40eb-b6bb-755a62cc2391.png)
* only Both NodePort and LoadBalancer are accessible from outside cluster
* The AWS Load Balancer Controller is a controller that manages Elastic Load Balancing (ELB) for a Kubernetes cluster. The load balancers can be Application Load Balancers when you create a Kubernetes Ingress or Network Load Balancers when you create a Kubernetes service of type LoadBalancer. An Application Load Balancer balances application traffic at Layer 7 (for example, HTTP or HTTPS) of the Open Systems Interconnection (OSI) model, while a Network Load Balancer balances network traffic at Layer 4 [for example, Transmission Control Protocol (TCP), User Datagram Protocol (UDP), and so forth]. Application Load Balancers can be used with pods that are deployed to nodes or to Fargate. Application Load Balancers can be deployed to public or private subnets. Network Load Balancers can load balance network traffic to pods deployed to Amazon EC2 IP and instance targets or to Fargate IP targets


### Kubernetes persistent storage 
* Application workloads requiring data persistence independent of the pod lifecycle require at least two Kubernetes objects: PV and PVC
* Two objects persistent volume PV and persistent volume claim PVC are require for EKS
* Data should not rely on running pods
  * PV: `persistent volume`  is ephermal but its lifecycle not depend on pod,  
  * PVC: `persistent volume claim` is a request for storage by cluster user, includes kind of storage, access, performance and how much storage is need
*  AWS EBS and EFS are available


### Deploy app to EKS
* `kubectl` is good to deploy apps for testing but for microservices is not ideal for production because of poor scalability and high administration overhead.
* CI: `Integration` Developers commits codes, passing initial testing, sent new version of code to delivery pipeline
* CD: `Delivery` decouple your team and release independently of other teams. It includes, build, test and deploy tasks.
  * `Commit Code` developers commit the code which initial pipeline
  * `detect code & create image` if jenkine, a webhook detect the change, then it pulls the changes and run unit, integration and smoke test on them. If tests fail Jenkins notify the appropriate team. If pass Jenkin create new container image with new tags
  * `push image` Jenkin push image to image repository like ECR, GCR or Docker container repository, after runs additional scan on security or vulnerability of images and build state
  * `Deploy` A pipleline is activated when new image is ready to deploy, it is felexible on how to deploy image to EKS. One way is creating trigger to lambda funciton to tell it is ready to deploy to production
  * Before deploy we can have `Helm` to create kubernetes manifest that will be use to deploy to EKS


### Monitoring
* 3 main area for monitoring
* `Metrics` Metrics collect data regarding the health and performance of resources, the ability of sending alerts when key performance indicators run out of bounds is desireable
* `Logs` Collect and aggregate logs file from resources 
* `Trace` Traces follow the path of a request as it passes though different services, tracing helps to identify the root cause of performance issues and errors
  
###### CloudWatch
![cw](https://user-images.githubusercontent.com/7471619/246644071-dcb5b879-5a13-421e-a64d-11c91a0f9ae2.png)
* Cludwatch can configure to collect, aggregate, and visualize metrics and logs from EKS. CloudWatch Container Insights also provides diagnostic information, such as container restart failures, to help you isolate issues and resolve them quickly.

###### Open Source tools
![pp](https://user-images.githubusercontent.com/7471619/246644086-0a37b07a-40e1-41c1-99f6-279ba91572e0.png)
* Other than cloudwatch, we can use `Prometheos` It can collect and store metrics from kubernetes projects, `Prometheos agent` runs on DaemonSet, means one agent per worker node. Agents collect and ship data to Prometheos server


### Service Mesh
![mesh](https://user-images.githubusercontent.com/7471619/246644580-61d97eb4-094c-43e2-b9a6-3adc536aa664.png)
* App mesh checking when any pods is available and bring reliability. 
* It connects services, secure network traffic using encryption, provide app performance visibility
* When communicating between services can make it complicated, then we can use service mesh. It controls the whole traffics. Service proxies can add additional identifiyers, metadata, and other configs to the original payloads. Also they validate request came in from network

### Defaults Ads-on EKS
* When you install EKS the following install as default
  * VPC CNI
  * kube-proxy
  * CoreDNS

* Some other commonly installed third party tools are
  * ingress controllers
  * continuous delivery systems
  * monitoring tools

* When EKS manage add-on updates(Added)?
  * When the add-on was installed using the `AWS Management Console` and `eksctl` with a configuration file


##### Costs
* Largest cost of EKS are on compute resources like using EC2 or Fargate.
* Next less expensive is network tools like subnets and load balance
* 3 strategy to purchase compute resources
  * `On-demand`: This is a good choice for workloads with spikes in demand and good for `stateful` system with not tolerate interruption
  * `reserved`: Savings Plans and Reserved Instances are good choices for `steady-state workloads` such as databases.
  * `spot or fargate spot`: Take advantage of unused Amazon EC2 is good for without the commitment of Reserved Instances for `stateless`. Fargate works as long as they not hit the max cost you define. It is good for non-critical workloads like batch-processing, web crawling, CI/CD, Dev/Test Environment

</details>

* To manage containers we have ECS, Kubernetes and Docker Swarm

<details>
<summary> Security </summary>


### Security in Lambda
* 

#### Cognito

* 


</details>

<details>
<summary> ECS Elastic Container Service</summary>

![ecs](https://user-images.githubusercontent.com/7471619/246681789-17202ef1-9b81-488e-bbd7-6f7889f25fdf.png)
* ECS is a container orchestration service that support docker container. ECS is easily integrated with IAM, cloudwatch, route53
  
* `Containers` are a form of virtualization which happen in OS level. Each running container is an instance of container image which is immutable object that can be store in public or private registry
*  Images pull from a Container registery like ECR
*  Create services based on provided config files
*  Make services online
   *  To bring service online we can select launch type:
      *  `Fargate Launch type`: provides near serverless experience with infrastructure to support containers, so don't need about worry on infrastructures
      *  `EC2 Launch type`: you create manage clusters of EC2 instances to support containers, availability requirements. Don't need to write cluster management or configuration management systems, scaling management infrastrcuture,  
* `Fargate` is the only service that manage all containers for us automatically
* The best use of services(more than one task) is when we need to have a lung running app. If needed batch job so only one task was enough 

### Tasks
* Tasks are atomic unit of deployment of ECS. 
* Tasks can have one or more containers.
* Tasks can run stand alone or part of a Service.
* Service can run multiple tasks and use LB to handle traffic on tasks. If one task fail or stop, service launch another instance of task.
* Should I use task or services?
  * Task manage by ECS schedular, and is on demand workloads. 
  * Long running apps is better to use Service, since they have health management, and availability zone-aware
* Task are defined at `Task defination` which is a json file. We can define one or more containers. Add `monunt volume and name`  
* Each task can host by either EC2 run time or fargate 
```javascript
{
  "requireCompatiities":["FARGATE"] // only if you want to use fargate launch type
   "memory": 512, // define as whole if use FArgate
   "cpu": 10, // deafine as whole if use fargate
  "containerDefinitions": [ // define serveral containers inside this array
    {
      "name": "simple-app",
      "image": "my-image:latest",
      "memory": 512, //MB
      "cpu": 10, // 1024 is one CPU
      "portMappings": [
        {
          "containerPort": 80, // expose p80
          "protocol": "tcp"
        }
      ],
      "secrets": [],
      "environment": []
    },
    ]}
```
##### ECS Agent

![ecs](https://user-images.githubusercontent.com/7471619/246684094-13c68c48-c17c-47c8-9358-4999fa337ae8.png)
* When using `EC2 launch type` tasks host by `EC2 instances`
* EC2 instances are groups in `EC2 clusters`. Clusters have the same region, but can be in diffrent or same zone (like the blue color in this image). Clusters (EC2 or ECS) are specific to each region.
* Is responsible to start/stop tasks based on request from ECS. 
* ECS backplane is singulare control plane for all ECS.


### How ECS places tasks into Container when we use EC2

* Each task is an instance of task defination. Resources are indicated in task defination like cpu, memory, network
* Placement Strategy: indicated there too
  * Random: places tasks randomly against container instances
  * Binpack: places tasks based on least amount of cpu, memory which minimize the resources use
  * Spread: places tasks evenly based on availability zone
* Placement Contraints: Biding
  * DistinctInsatnces
  * Memberof

* for example at below if we have 3 regions us-east-1d, us-east-1a, us-east-1dus-east-1c it only define task for two of them exclude `us-east-1d` and only does t2.medium and t2.small ones.
```javascript
aws ecs run-task --cluster ecs-demo --task-defination myapp --count 5 --placement-constraints type="memberOf", expression='(
  attribute:ecs.instance-type == t2.small or 
  attribute:ecs.instance-type == t2.medium and
  attribute:ecs.availability-zone != us-east-1d 
)'
```
* For example at below `Service Defination`, 
  * schedulare places task only on `t2` instances
  * Spread those task among availability zones
  * `binpack` the task under fewest number of instances by memory
  * `Constraints` are binding
  * `Strategies` are best efford
```javascript
"cluster": "ecs-demo",
"serviceName": "myService",
"taskDefination": "my-app",
"placementConstraints": [{
  "type": "memberOf",
  "expression": "attribute:ecs.instance-type matches t2.*"
}]
"placementStrategy":[
  {
    "type": "spread",
    "field": "attribute:ecs.availability-zone"
  },
  {
    "type": "binpack",
    "field": "memory"
  }
]
```

* Example: Running multiple services on one cluster as below

  ![images](https://user-images.githubusercontent.com/7471619/249657438-21ac7915-7e5b-4e5b-af4d-07f4950ea1d2.png)

* First Service runs only on zone `us-east-1d` t2.small
* Second service spreads on all zones 


### How ECS Integrate with Other AWS Services 

* Use `SQS` and `SNS` to send queue messaging and send messages
* `Elastic Load Balancing` to have a lb
* `Route S3` facilate for DNS service
* `IAM` for access management, authentication and authorization
* `Secret Manager` for manager encrypted secret keys
* `API Gateway` to expose services
* `Code Pipeline` CI/CD
* `Cloud Watch` for monitoring login and collecting matrics, also Cloud watch has a feature to set specific amount of cpu, memory in services if it hit that auto scaling triggers. 
* 
* `ECR` container registery, image repository, images are encrypted based on IAM control access
* `Microservice Design`: client access through `API Gateway` or `Route S3` to containerized applications. LB manages traffic to `ECS clusters` and `Amazon RDS`. ECR, IAM and Cloud watch 
(link)[https://explore.skillbuilder.aws/learn/course/91/play/202/amazon-elastic-container-service-ecs-primer]

##### CI/CD
* `CI/CD` there is source repository like github is called `codecommit` where developers commit their changes to it
* `aws pipleline` notified via cloud watch of new changes and trigger execution of pipeline. 
* the pipeline build a container using `aws codeBuild`, create an image and send it to ECR with a tag of build Id
* the pipleline also initiate `cloudFormation` which defines ECS task defination and source. In fact it allows to update ECS
* Then `ECS` fetches new Container from `ECR` and update old task with new one
* `CI` is a software developer practice where developers regurarely merge their code into central repository when autmate build and test run successfully. 
* `CD` is a practice where code build, test and deploy to test or staging. To deploy to production require manual confirmation. 
  * At `Build` these tasks are execute:
      * Compile code
      * Check code style and standards
      * Analyze complexity
      * Validate dependencies
      * Create Container image
      * Run unit test

  * At `test`:
    * Functional test
    * Integration test
    * Regression test: checks changes or updates to the software do not introduce new bugs
    * Acceptance test: validate whether the software meets the requirements and expectations
    * Load test: test service under normal and peak load conditions.
    * Security test: checks vulnerabilities and potential risks to ensure it is resistant to unauthorized access
  
* `microservices` A microservices architecture, is a design approach that builds an application as a set of loosely coupled services. Each service is designed for a set of capabilities and focuses on solving a specific business problem. Services do not need to share any of their code or implementation with other services. Any communication between individual components happens via well-defined APIs. These services can be assigned to fully accountable teams, and be developed, tested, an deployed independently of other services.

* Build tools: Jenkins, Travis CI, AWS CodeBuild
* Source control tools, repositories: Git, AWS CodeCommit
* Deployment tools: AWS CodeDeploy, AWS CloudFormation, Jenkin
* Pipeline automation tools: AWS CodePipeline, Jenkins, GitLab
* Infrastructure automation tools: AWS CloudFormation, Terraform, AWS Elastic Beanstalk

##### Blue/Green 
* Is a strategy to deploy software update wiht lower risk by creating two seperate environment. 
* Blue is the current running version of the app, green is new
* Blue/green allow to test new features comming to our application without impacting the current running version. When green version satisfy us, we can reroute traffic from blue to green environment
* Zero downtime, container freindly
* `AWS CodeDeploy` allow us to define blue/green in aws. 
* When a task services is updated then codedeploy make a copy of blue one and make it as green with new changes, And LB redirect traffic to green. Always we can roll back to blue. When auto testing completed the traffic moves to green service
  
### How Security Enforced on ECS Tasks

![taskB](https://user-images.githubusercontent.com/7471619/249971171-37f4c004-1710-435a-a129-fcb926b31441.png)
* Each task has its own `IAM` role provide granular permission for service access. 
* We have two EC2 instances, Each one has one TaskB and TaskA. TaskA allow to one EC2 access RDBS and TaskB allows to access S3. To add those roles to taskA and taskB, we need to already have defined roles with policies at `IAM` before
* So taskB can't access to RDBS and taskA cant to S3 unless we add them to their policy roles.
* `Secret Manager` allows you to use parameters, which in fact are functions return the secrets. We can attach IAM roles access to what secrets or Read/modify/access. Secrets are encrypted by `KMS` key management service. Also we can define policy for each secret manager
* Daemon is a program runs in the background of the system. There is usually no UI or direct command to access it. They usually need low resource and run continuesly 
* Each task can have its own IAM role and also each secret key can have its own policy as well

</details>


<details>
<summary> Select CDRS </summary>
- AWS suggested below CIDR blocks from the private IP address ranges:

  - 10.0.0.0/8, -> for example: vpc1= 10.0.0.0/16, vpc2 = 10.1.0.0/16
  - 172.16.0.0/12 -> for example: vpc3= 172.16.0.0/16, vpc4=172.17.0.0/16
  - 192.168.0.0/16-> vpc5=192.168.0.0/16

- `Management Console` give us a GUI to create cluter
- `AWS CLI` offers most potential for customization
</details>

_________________________________________________________________




<details> 
    <summary> Develp for host on AWS  </summary>

  * It includes 6 pillars:
    * `Security`, `Code Optimization`, `Reliability`, `Performance efficiently`, `Operational excellence`, `Sustainability`
  
  * Use SDKs, API Credentials, keys to run app on EC2 instances
  * Customizing network, manage resources
  * Ensure you know how to write code for event-driven, microserveices, chrogeraphy, orchestration, fan out
  * fault tolerate design pattern such as retry with exponential backoff, jitter and dead-letter queues
  * How to create, maintain APIs, API actions with services like API Gateway, Lambda, S3, SQS, DynamoDB. Make sure you know the method of request, responses, integration request and responses, enforcing valid rules, caching, variables, 
  * `API GateWay`
    * enforce validation roles
    * mapping templates
    * caching and throttling
  * `Data streaming` aws kenesis, apache storm 
  * `SDK`
  * `Codestar`
  * `testing` what services, sam, codepipeline,
  * `cognito sync`: adds less complexity across multiple devisec 
  * `DynamoDB SNS SQS MQ`: 
  * `Step funciton`: we can use aysnc and sync functions in step functions
  * `CloudFormation`: 
  * `SAM` simplifies deployment and simplify APIs
  * `item poten funciton` validate input data 
  * `stateful` keep state using tools like sqs, they increase performance
  * `stateless` in container, they are stateless 
  * `How use sdk`
  * `APIs in sdks`
  * Microservices design patterns 
    * ECS
    * Lambda
    * CloudFront
    * Coginito
    * API GATEWAY

</details> 

<details> 
    <summary> Develp for Lambda  </summary>

1.2: Develop code for AWS Lambda
    * Make sure you know how to confugure lambda functions by defining environmental variables and configs such as triggers

</details> 

<details> 
    <summary> Use data store in app development </summary>

1.3: Use data store in app development
  * Make sure you know how to use manage data store and how to use datacycle
  * know caching strategies, databases consistently models, choose correct data base and how to encrypt data

</details> 

<details> 
    <summary> Questions </summary>

-  Difference between `tightly coupled` and `loosely coupled` 

- AWS serverless services such as `SQS`, `SNS`, `EventBridge` allow to code and build `event driven` applications which are `scalable`, `resilience`, `agile` and `cost effective` solutions. 
- Tradeoffs of eventdriven: Event Driven apps communicate through networks
-  when we have `microservice` you can take benefits of getting parts failed independently and handle Failures


#### Handle Failures

* Your application should have `failure detection`, `automatic remediation` the point is to build a resiliance application to stand failurs
* Retries increases `reliability` , `reduce costs` but not good always for retries since so many retry increase load on system, so use exponential backoff which uses longer wait time. If backoffs retries still happening then use `jitter` to avoid overload from backoffs retries and contentions. 
* `AWS step functions` seperates retries, backoffs rates, max attems, intervals and timeouts

* `How to add message failures` we can use Lambda to send invocation to other services like `SQS`, `EventBridge`, and `SNS`
* If the work is more complex we can use `state machine` or `step funcitons` to orchestrate work felow 
  

- Unlike monolithic app which process everything on the same memory on a single device, Event driven app communicate across network.
- Microservices allows you to get benefit of having the parts fail independently and write app code to handle those failures. It needs to have failure detection and automatic remediation. This Increase `reliability` and `reduce cost`. But it is not always safe to retry because that retry increase the load to the system. Instead of retry immediately, exponential backoff, which wait longer time after each try. It still can add load, so we can use message failure. We can use lambda to send invocations to other services like SQS, SNS. Or you can use AWS step function to separete rettries, backoff rates, max attemps, interval and timeouts.

- You can use orchestrators to keep track of state, overal execution and failures.
- Lambda or any messaging pattern help us to manage orchestrate workflow.
- If functions are more complex we can use `Step Function` (state machine) to orchestrate workflow which can handle nested workflow logic, errors and retries
- But if you want to coordinate state changes across multiple services, you can use `Amazon EventBridge`.
- `Fan out` If service published messages to multiple endpoints, SQS, HTTPs you can use. It replicas data to different services.
- Prevent duplicate, loss inconsistent data in lambda, you can add `item potent function` logic to lambda to reduce unnecessary API calls, code processing time, throttle and latency

* `Questions` If you are builing a docker app using ECS,  and need to allow containers to access ports on the host container instance to send and recieve traffic using port mapping, which component of ECS should you confifure to implement this task ?
* The container agent
* The task defination
* Agent 
* Container instance

* Learn how to use `AWS SDK` to reduce 
* `Question`: Imagine your organization migrating to aws. You are responsible to build new serverless architecture that share memory and timeouts between resources such as Lambda, API Gateway and DynamoDB and deploy resources into single versional application.
  * Which service you use?
    * CloudFormation
    * OpsWorks
    * Elastic Beanstalk
    * SAM


##### Exponential backoff
* This is a method to not retry immediately, it expontially increase the interval time of retrieving to avoid overloading our network using `jitter`

#### Testing
* What services we can use for testing 
* `aws sam`, `code pipeline`, `cloudformation`
* 

</details>




[Images and content are all from below](https://explore.skillbuilder.aws/learn/course/1851/play/78733/aws-technical-essentials-111)
