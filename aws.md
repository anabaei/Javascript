

# <font color=orange> AWS </font> 

<details>
<summary> Data center, Zone, Region, APIs </summary>

## Data center, Zone, Region
* AWS keep different copy of data at different Data Centers. 
  * One cluster can have more than one data centers in one Available `zone`, with redundant power and networks. In case one data center goes down
  * But what if the whole cluster goes down?
    * AWS has different redundant cluster around the world. 
      * So like data centers, AWS clusters AZs togather and connect them
      * A Cluster of AZ called a `region` 
* How to choose `Region`
  * Compliance:
    * data residency if that matter for country or org
  * Latency
    * how close region are to you impact latency 
  * Price
    * Is vary in region to region
  * Service Availability 
    * Check the region you want to use have those services you want 
###### Resiliency
* At a minimum, you should use two Availability Zones. That way, if an Availability Zone fails, your application will have infrastructure up and running in a second Availability Zone to take over the traffic

###### Edge Locations
* Edge locations are global locations where content is cached. 
* Edge Location and regional edge caches to cache content closer to the end users
* CloudFront is edge location. When a user requests content that is being served with CloudFront, the request is routed to the location that provides the lowest latency


## AWS APIs
* 3 ways to interact with aws, 
  * Command line interface CLI
  * Management Console (web GUI)
  * Software Development Kits SDK
* Some aws cli commands:
```bash
aws s3api list-buckets #list of buckets
```
</details>

<details>
<summary> Security </summary>

* Host VMs on cloud, EC2 is primary use. AWS is responsible to update OS of the host. 
* Client is responsible for 
  * Configuring firewalls 
  * who can and how much other access the resources
  * Server side encryption 
  * Network traffic protection encrypt
  * Customer side data encryption

### Root user
* Each account has a root user who created account
* Single factor authentication is not that secure, it is better to have multi factor authentication on root user
  * One way is virtual MFA device, like a phone app that create one time pass every minute
### IAM
* Manage API calls to to our services like from EC2 to S3 or other services 
* Authentication make sure you are who you are saying you are
* Authorization is level of accessing resources, permission control what you can do
* `IAM Policy` is the way to manage Authorizations. It is a json file
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
* IAM policy can attach to specific users or groups, it is suggestion to assign policy to group
* It is better with root user create MFA then create admin user, log out from root and log in as admin user. 
* We can't apply policy against root user

#### Access S3 and other services
* IF you want to access apis through your app inside EC2, you need to have secret keys. 
* Create `role`  name yourApplicationName. This role is assigned to resource for example `EC2` during creation of EC2. 
  * Select trusted entity like `aws service`, `aws account` to say from which service the api call can make,  
  * select a service for example `EC2` then, select a policy for example `S3 full access` and `dynamodb full access` policy
  * So EC2 instances using this role can access S3 and dynamodb

* Then create a `user` with a `group`. Create group like `ec2 admin` and attach policy like `ec2 access` to the group then select that group to the user.
* 
* Then you get Access key and secret Access key associate with this user 
  

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
* Then press launch, it boots and give you an ip address when it is done
</details>

<details>
<summary> Compute </summary>

* VMs, Serverless, container services are different solutions for compute services
* Linux, MacOS, Ubunto, windows and more are type of VMs OS.

#### Amazon Machine Image AMI
* You can choose what OS with what Application Image you want to run your EC2 instance, you can have your custom AMI as well. You can select what memory and compute instances. G resources implies for high graphic resource, M5 implies of balance of memory and compute. 
```bash
# Ec2 instances type
c5n.xlarge
# c instance family
# 5 generation
# n attribute
# large size
t3.medium # first is type instance second is the size of instance
a1.large
```
* Ec2 is resizeable after creation
* Easy to spinning up servers


#### EC2 Lifecycle

* `Launch` instance from AMI
* `Pending State` when it launches, waiting for VM booting up. 
* `Running State` after booting, it enters to running, here you charge 
* `reboot` you can reboot it
* Use stop to go stopping state
* `stopping state` when can ask to stop
* `stopping state` is charged same as running only if you want to `stop-hibernate` 
* `stopped state` after stopping state it enters to stop state
* from stopped state you can spinning it and enter the running through pending state again
* you can use `stop-hibernate` to stopping and stop instance, but when you start it again, everything is same as it was before. Same as when you close laptop and open it. No boot sequence is requires since state of machine is saved into memory and ready to back to back and running
* `terminate` get you from running to `shutting down` and then `terminated` state. Here is gone and for get it. They are visible for a while on console but they are gone
* There is one tool call termination protection. 

* `Terminate` is good, if there is an issue or require update, you can launch new instance and terminate the old one

* We provision new EC2 on demand and charge for instances that are running currently
* `Elastic Application` means that resources it needs are added or removed dynamically


#### EC2 Hosting
* When you create EC2 you select these steps
  * name of instance
  * AMI type of OS and apps
  * Instance Type, the size and type of machine
  * Key Pair, if you need SSH connection to your instance you can create one
  * Network setting 
  * Select auto assign public ip
  * Create security group and configure the roles like HTTP HTTPS with source from 00000 means whole internet
  * at Advance Details select IAM instance profile to assign Role you already defined
  *  under user data you can paster user data script to launch the app
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
* Both runs containers on EC2 instances using orthestrating tools to manage containers
* Containers have shorter bootup time than VMs. 
* Also protability for containerized app is very useful

* Amazon Kubernetes Servic and Amazon Elastic Container. EKS uses kubernetes to orchestrate contianers and is fully manage able but ECS doesn't use k8. ECS uses its own property and provide api to control plane for managing containers. ECS is simpler and manage task, scaling and scheduling container for us
* Containers are portable, because everything an application needs to run including the app code, dependencies, configs are all packed up together as one executeable file. 
* it is selfcontained so we expect same behave across environments like QA prodcution
* `Fargate` is a serverless solution which does hosting our containers without need to manage EC2 instances or accessing OS


## Serverless
* Using EC2,ECS,EKS compute platforms require to manage instances
  * Update Instances when new software package or security update came
  * Setting up scaling instances
  * Architect solution in highly available manner. Like deploy instances in to AZs at minimum
  * But not every single solution not require that level of underlying control
* `Serverless` you can't access infrastructure, patching, all scaling, fault tolerance, maintenance are taking care for you
* With EC2, we need to patch the OS when new security release
* So we choose between control and convenience when choosing between EC2 and serverless

##### Fargate
* Fargate is AWS compute platform fro containers that we can use either ECS or EKS
* Scaling and fault tolerate all built in, and no need to worry about OS. There is no provisioning, pathcing, cluster capacity management. 
###### How Containerize work
* Create container image and send to repo like ECR Amazon Elastic Registry. 
* Define compute and memory for your task if using ECS, or your pod if using EKS. You charge based on memory, compute and storage which consumed by containerized apps. But without Fargate in EKS/ECS you charge based on resources you provision and not necessary use.
* Fargate does saving pricing options so it is good for microservice, batch processing, ML, migrating on premises app to cloud

#### Labmda Serverless
* Lambda function only runs with triggers. There are long list of lambda triggers. For example, `HTTP` request, `upload of a file` to S3, `events` from other services, `in-app` activity in mobile devices.  
* Code is run in managed environment and you charged when code is running only.
* You select language of lambda, memory and cpu, permissions and dependencies. 
* Not usefull for hosting wordpress, it is useful for quick processing like BE handle request. 

* For example, no one need to run an app 24 hours on EC2 to resize an image when new photo uploaded. You only need to run resize logic when new photo uploaded.  
* When a new photo uploaded to S3, triggers lambda function it resize the image and upload to S3 bucket but to different location where the original image stored. 
  * Go to AWS lambda console
  * Create function
  * Type of function
    * Author from scratch
  * Run time, select language
  * Permission -> select existent role which we created was include read and write to S3
  * Add trigger
  * configure trigger select S3
  * select which S3 bucket is event source
  * Event type: select Put operation
  * prefix: only trigger when put occurs inside this bucket
  * select same S3 for out put
  * say name of output prefix as bucket name for output
  * Now it is created
  * select code tab
  * write your code
  * Test now!
    * Go to s3 and upload an image
    * You should see out put prefix is created and thumbnail image is created

</details>
