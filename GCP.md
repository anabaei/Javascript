# <font color=green> GCP </font> 
<details>
<summary>
Cloud Infrastrcuture
</summary>

### Redundancy
* Zone: Is one or more datacenters, physical buildings to keep machines and networks and link to other datacenters.
* Region: A group of Zones
* Failure Domains: A resource that can fail without impacting availability of data
* Failure Domains include zones and regions where data is duplicated to improve resiliency
* Reundancy: A practice of having multiple copies of data in different locations to avoid single point failure

### Latency
* Latency is a time for data to travel from one location to another
* 3 seconds 53% users leave website 

* Public cloud shared datacenter
* Private cloud is dedicating datacenter and infrastructure to a single user
* Hybrid cloud is a mix of both. Ask a public cloud provider to allow users to choose where their data can sit
* Multi cloud service,using more than one cloud service
* Cloud computing: the practice of usisng on demand computing resources as services hosted over internet
* Instance: a service resource that runs workloads in the cloud
* Ephemeraliy: Things only exist for a short amount of time
*  

* Two main task:
* Use infrastructure-as-code (IaS) to securely provision virtual machines, address
security concerns, and ensure the consistent deployment of cloud resources across
cloud infrastructure.
* Create and configure a virtual network in a test environment to explore the security of
the configuration settings before deploying to the production environment.


</details>

* You wouldn't try to surg big waves before knowing how to swim

<details>
<summary>
cloud shell
</summary>

* Allows you access to cloud. The way it works is using google software develooment kit with no need to install it. 
*  <font color=blue> What is SDK </font> SDK includes some toole like gcloud: main command line tool to manage products and services. gsutil: manage google cloud storage and bq which is for bigquery
* Easy way to click on cloud shell button on the GCP console. The command line pops up with preinstalled SDKs. We can install SDK on laptop, on-premise service or virtual machines. SDK also available as docker image.
* Can use REST API to get data from GCP. You need to enable apis you want first by using <font color=blue> APIs Explorer </font> . There are libraries to help us to do that called Google Apis Client Libraries. 
* Quicklabs helps you to learn for free
 
</details>

<details>
<summary>
quick labs links in google cloud
</summary>

* here is the link for quicklabs https://sathishvj.medium.com/qwiklabs-free-codes-gcp-and-aws-e40f3855ffdb
<details>
<summary>
Cloud Storage
</summary>

* It is not like file storage which manage data as hierarchy of folders
* It is not like block storage which operating system manage data as chunk of disk
* It keeps bunch of bytes for you and give a unique key (url) to access them usefull ways are
* Storing data for disaster recovery, archive data, static web data, distribute large object via direct download...
* cloud storage is encrypted in cloud, 
* How to turn on object versioning and  history of modifications. If we don't do that new always override old one. Cloud storage has object cycling example, tell delete obj more than 365 days old never used.

</details>
<details>
<summary>
K8
</summary>

* compute engine: gcp's infrastructure as a service which lets you run VM on cloud and gives you storage and networking for them. It lets you share compute resources with others by virtualizing hardware. Each VM has an instance of OS which we can build app on it with access to memory, file system networking interface. 
* app engine: gcp's platform as a service 
* A process is an intance of running a program.
* kubernates engine: It is like Iaas and like Paas as it has tools as developers needs.  Orchestering containers
* Write a docker file, to run container. 
```javascript
docker build -t exampleName .  // build container 
docker run -d exampleName      //run the image
```
Then build container and store in local system as runable image with below code. 
* In GCP you upload image to google container registry and share or download from there.

# How K8 helps us 

### Imperative Commands
* K8 provides apis to control operations through several utilities like kubectl.
* k8 allows you deploy containers on a set of nodes called a cluster
*  <font color=blue> what is cluster </font> A set of master components that control system as a whole and a set of nodes that run containers. In k8 node is a computing instance. In Google Cloud nodes are VM running in compute engine
* <font color=blue> how we get a cluster </font> GKE is there for help us to create cluster. We can create k8 cluster with k8 engine (GKE), using gcp console or gcloud command. GKE can be cosutomize and support different network and machine type. Here is sample command to create cluster using gke:
```javascript
gcloud container clusters create k1
```
* When above message complete we have a cluster created and complete and ready to go.
*  <font color=blue> what is pod </font> pod is the smallest part of k8, when ever k8 wants to deploy a container it does it inside pod. Think of pod as a process in app. Each container in pod has a unique address and set of ports locally. 
*  <font color=blue> how to run container in pod </font> is this command start deployment with an image of NGINX open source server. kubectl is smart enough to fetch the image from `container registry` 
```
kubectk run NGINX  --image=nginx:1.15.7
```
* <font color=blue> how to expose pods to internet </font> run kubectl expose command. k8 creates a service with a fixed ip address on top of our pods. A service infact is load balancing. So others outside cluster can access to pods via Load balancer. This is called network load balancer. Compute engines makes it available to VMs. in fact a public address manage by network load balancer on top of service.
  
<img width="374" alt="Screen Shot 2022-04-08 at 11 33 29 AM" src="https://user-images.githubusercontent.com/7471619/162501063-1bb0b74f-fff0-48b0-b9a8-a2c415983ff7.png">
	
* <font color=blue>  why do we need services? can FE directly hit pod ip address </font> yes in theory but whenever deployment has done, new pod created and old pods destroy then we miss ip address of those pods. Serives or network load balancers keeps fixed ip address on top of pods

```javascript
kubectl get services // display clusters with public ip addresses, clients can use these address to hit our service remotely	
```
##### More power
* <font color=blue> Scale number of pods ? </font> yes create 3 web service. They all behind the service and behind one available fixed ip address. 
```javascript
kubectl scale nginx(nameofCluster) --replicas=3 

// autoscale :min number of pods and max and the criteria to scale up if reach that point which is cpu 80%
kubectl autoscale nginx --min=10 --max=15 --cpu=80 
```
* Check replicas
```javascript
kubectl get replicasets // to view your replicas
```
* Check pods 
```javascript
kubectl get pods 
kubectl get deployments 
```
* 
### Declarative commands (Configuration files)
* Aove works when we learn and test k8 step by step, but real strength comes when we use declarative commands.
* These configuration files becomes management tools, edit change and present it to k8.
* We can get starting point from one of the files as 
```javascript
kubectl get pods -l "app=nginx" -o yaml
```
* Then it would create one yaml as 

	<img width="379" alt="Screen Shot 2022-04-09 at 2 05 59 PM" src="https://user-images.githubusercontent.com/7471619/162591701-e33d1b72-063c-4af3-a694-280c2b15fe1e.png">
* All 3 replica above tagged as NGINX. 
* We can save them in our version control system to keep track of infrastructures. 
* You can edit above yampl file and deploy it as 
```javascript
kubectl apply -f nginx-deployment.yaml
```


</details>

<details>
<summary>
Kubectl
</summary>


```javascript
kubectl config view
```
</details>

 
[Resource](https://learning.oreilly.com/videos/getting-started-with/9780136787709/9780136787709-GSK2_01_04_06/)
 
# K8s
 
* Old IT, you needed servers which they require OS like linux and apps run  on them with their dependencies. To escale up you need to add another server in vertical and manage them by a load balancer.
* New IT, we have containers which includes apps and its dependencies like an on cellphone. To run a container we need a `server` or `cloud`. On the server or cloud we need `container engine` which is an abstraction layer takes away old OS system. Containers doesn't care about it they just talk with engine which can be docker or another container solution. It can escale up on the cloud by creating more containers. To orchestred and automate containers we need `kubernetes`
image ....
*
 
## Some common names and What K8 brigns
yaml
containers: running instances of the apps that is defined in the image. By using Namespaces containers can be strictly isolated
Image: contains all that is needed to start an app, they are read only environments that contain runtime environment that include application and all libraries it requires. Images needs default command other wise container immediately stop
Registries: use to store images like docker also private registry is provided by all cloud providers
* All below are not available in container solution so we need something else like k8 to deal with
yaml
Automated rollouts and rollback: Which makes containers automatically created when they needed and can be rolled back.
Container Orchestration: that containers are running in the data center where they should be running
Storage Orchestration: if in scalability more storage is needed you want to automatically allocate storage
Loand Balancing or Service Discovery: in big environment you don't want to create DNS record for every new container thats added, we want it automated
self-healing: if container crashed automatically recreate it
High-availability: Make sure system critical component are always protectd
Batch Execution:
 
 
## Understanding Containers
* Apps need runtime environment, old it runtime environment were physical/virtual host which apps is installed with all dependencies. When we need to update dependencies it could be a problem like node version
* As complete runtime environment that is isolated a container is solution
* Containers are linux, run on top of container engine(like docker) and don't offer any platform requirement
* without specifing any application the container will start and stop as it doesn't know what to do



### VMs
* Many containers can run on top of the same host kernel
* One difference between VMs and containers is that containers have a defautl app that must start
* We have a kernel. With hypervisor (a virtualization process) it creates many VM. Each one has one an Operating System kernel that could run our apps with its dependencies.
Kernel is a program that have control on everything in system and reside in memory. It facilate interaction between hardware and software components
* Advantage of VM is we don't need physical machines since they are virtual but still we need to manage all dependencies and also we have a kernel that runs on each single machine compared with containers that runs all with one kernel
img ...
 
### Container Architecture
* Containers are linux and built on top of Linux kernel. They have their own security and internal process isolated from outside. Two main feature:
* `Namespaces` provide strict isolation at a linux kernel level, share among containers
* `CGroup` provide resource allocation to guarantee dedicated resources are available
* `SELinux` is about security and can enforce security in a containerized environment. SELinux is like a bubble around each container which moving from kernel to each container require a key
javascript
ps aux //see all container processes
* We can't move from one container to another, but we can move from kernel to container
image ...
 
* `Docker Registry` is an online platform where container images could be exchanged by anybody
* Docker in 2013 brought docker registry hub which companies could publish their containers
* OCI Open Containers Initiative standardizes use of container images and run time. This ensure that you can run one image on different container engine environment. It means if you take one Docker cotainer, you can run it in Podman environment for Refhats.`podman` is `docker` alternative for `Redhat` but commands are almost identical
 
#### Docker Architecture
* 
* Docker daemon is responsible for building, running and downloading container images and Docker client is responsible for communicating with Docker server
* Docker hub is a common registry, but there are some other private registries
* Container Engine is our docker environment.
* To install you can install docker-ce (free version of docker) or from distrobution repositories
*  To start container first enable Docker daemon then you need to pull an image from a regitry and run it
 
* To create repository in docker
javascript
wget https://download.docker.com/linux/centos/docker-ce.repo
// connet to docker
cat docker-ce.repo // to see all repositories
yum repolist // to verify docekr-ce stable repo
yum install docker-ce -y 
// now after download Run docker daemon
systemctl enable --now docker
// on red hat ent it is better to use podman instead of docker
systemctl status docker  //check status of docker daemon is running or not
 
// make it useable for users
grep docker /etc/group // to see which groups exist
usermod -aG docker student // make default user to run Docker commands, student is our default user and this user is able to run Docker commands
exit // to exist root shell
 
// one time running command to make user
 newgrp docker // new member of docker .. one time run command
 docker --version
 docker run hello-world // to run first container in our environment which it says i can't find the image so i pull it from docker registry
 
### Images
* Images are read-only environment that contain the runtime environment that includes application and dependencies
* Docker hubs hosts many images `https://hub.docker.com`
* Docker images are immutable, each modification adds an extra layer to the pre-existing layers and container sees it as a single virtual file system
* So when you save a new image, only a new layer stored
### create image
 
#### running container
 
* use `running container`, container is
started and moidifcation is applied to the container. From the container, docker commands are used to write modifications, docker commands like docker commits
 
####  Dockerfile`
*  `Dockerfile` contains structures for building an image. Each instruction adds a new layer to the image which offers more control over which files are added to which layer. Benefit is you don't have to distribute images, just distribute dockerfile.
* The user of dockerfile will use `docker build .` command to build the image based on the Dockerfile in current directory. Images would be stored locally but you can direct the image to to be stored in repository as well.
 
javascript
docker build --no-cache -t nameOfDockerFile . // Create image in current directory from current dockerfile
// nameOfDockerFile is what we are gonna be build
 
docker run nameOfDockerFile // to run the image which is already created
docker run -it nameOfDockerFile /bin/bash //trouble shooting
* `nameofDockerFile` example to generate new image
javascript
FROM centos  // main image going to downlod from docker hub as a container
MAINTAINER Sander <mail@sandervanvugt.nl>
 
# Add repo file
ADD ./sander.repo /etc/yum.repos.d/
 
# Install cool software
RUN yum --assumeyes update && \ //commands are capital
yum --assumeyes install bash nmap iproute && \
yum clean all
 
// ENTRYPOINT ["/usr/bin/nmap"]
CMD ["/usr/bin/nmap", "-sn", "172.17.0.0/24"]  // this is default command. A task that container does. This command is nmap command with sn option to scan network
 
## Docker Commands
 
* Simple commands on running docekr [in ECS](https://docs.aws.amazon.com/AmazonECS/latest/userguide/docker-basics.html)
 
javascript
docker --help
docker run // run a command in a new container
docker start // start an or more already stopped container
docker ps // show all processes
 
### Inside container environment
 
javascript
docker run -it ubuntu
// then inside container check current processes
// it interactive terminal
ps
control ->p control ->q // to exit
docker ps
// manage contianer with id or names
docker inspect name_of_container | less // to see details of container
docker inspect --format='{{.NetworkSettings.IPAddress}}' container_name // use filter to check container
 
docker images // list of images (the latest version)
 
docker stop name_of_container // stop container
 
docker rmi image_name // to remove image
docker rm container_name // remove container
*
javascript
sudo find / .name "hello"  // fine hello from directory
 

##  Docker Networking
 
* If we have multiple container running on Docker host, and we need to reach each ofcontainers we need something to reach these containers and thats called IP address. Docker Networking define by drivers. One driver is `bridge` which is default network deriver. `overlay` use to connect multiple Docker daemons togather.  External network derivers are available by third parties. In K8 we have `overlay` driving.
* Container network is `172.17.0.0/16` if using docker. This network connect to bridge which is `docker 0` and it connect to container network. This `docker 0` has IP address `172.17.0.1`. All C1, C2, C3 containers connect to the the network with ip addresses like  `172.17.0.2`, `172.17.0.3`, `172.17.0.4`.
* `virthual ethernet` interfaces connect our `bridge` or `docker 0` to each container via veth1, veth2 ... . They make sure that containers can put their trafic on the bridge and bridge to connected to actual network. `Bridge` put traffic of all containers into physical device using `Network Address Translation` tool. `docker 0` has a public ip address to recognize itself
* `bridge` drive is a default network driver that runs applications inside containers. On a single `node` all containers communicate with docker bridge. And docker bridge communicate with actual network `162.158.9.0`
javascript
docker run -d nginx // run a container, d means daeminize runing in background
docker images // show images
docker run nmap // nmap container scan what is happening on network
 
// to see host OS, and we don't see containers IP addresses here so we can see only interface
ip a // u see docker 0 interface, and the ip address associated with it like 172.18.0.1/16
 
// go to inside a container
docker exec -it nameOfContainerGetFromDocekrPS /bin/bash
// ip a not working inside contaienr
// inside container you can find info about network
cd /proc/net/ 
cat fib_trie // to see ip address seen by container
 
javascript
kubectl get nodes // see cluster's nodes
gcloud container clusters create hello-cluster // create a cluster
 



* `host` drive is only in Docker swarm, container connects to host network directly
* `overlay` drive, used in Docker swarm to connect multiple Docker Daemons togather
* `macvlan` used for legacy apps, where a MAC address can be assigned to a container to appear as a physical device on network
 
* In kubernates it defines a real overlay network
 
* To monitor [network use nmap](https://hub.docker.com/r/instrumentisto/nmap)
javascript
docker run -d nginx // run nginx container demonize means run in background
 
brew install iproute2mac
ip a
 
 
* On macOS the docker binary is only a client and you cannot use it to run the docker daemon, because Docker daemon uses Linux-specific kernel features, therefore you can't run Docker natively in OS X. So you have to install docker-machine in order to create VM and attach to it.
javascript
brew install --cask docker // Then launch the Docker app 
// Because docker is a system-level package you need --cask
brew install docker-machine docker

### Dockerfile
```docker
FROM node:latest  // it says what we our base container has to have
copy . /src       // look at current directory and copy everything into it, it tells where we should be when running build
workdir /src      // tells all the command below where they run
npm install --production   // first we start npm install
expose 3000        // means this container opens port 3000, because our server in nodejs here run on that port
so other containers can comunicate with this one on this port
CMD npm start   // how to run
```
* `From` tells which image you aim to use
* `Copy` copies we need to the destination locaiton we run code
* `Run` executes commands in conainer environment
* `Expose` expose the port

#### Commands to Run Docker
* docker build . converts your Dockerfile into an image.
* docker create your-image creates a container from your image from step 1.
* docker start container_id starts the container from step 2.
* docker run image is a shortcut for 2. and 3. (docker create image and docker start container_id)


#### Connect Node to Container 
```
mongoose.connect('mongodb://docker.for.mac.localhost:27017/databaseName')
``` 

#### Publish on Dockerhub
* Docker login
* docker tag app_image infroger/app_image:1
* docker push infroger/app_image:1


### S3
* Is an object storage service, that provides scalability and reliability. It can use as data backup and archiving data
* `aws-sdk` library requires to connect to s3
* `underscore` not use in bucket name, no `period` in bucket name, no `-` next to `period`. No `upper case` in bucket name
* S3 is not DFS or a distributed file system, it is a binary object that stores data in key value pairts. Keys being your "folder path" and values being the binary objects (files)
* use this to use s3 in mac
```
brew install s3fs 
echo ACCESS_KEY:SECRET_KEY > ~/.passwd-s3fs
cat ~/ .passwd-s3fs ACCESS_KEY:SECRET_KEY
chmod 600 .passwd-s3fs
```
* The owner of bucket can select who can access to buckets.
* How to use s3:
```javascript
const upload = require('../../services/upload.js');
const singleUpload = upload.single('image');

router.post('/uploadFile', async (req, res, next) => {
	singleUpload(req, res, function(err) {
		return res.json({ imgUrl: req.file.location });
	});
```
* Where upload.js is like 
```javascript
var aws = require("aws-sdk");
var multer = require("multer");
var multerS3 = require("multer-s3");
const config = require("../config/config.json");

aws.config.update({
  secretAccessKey: config.Secret_Access_Key_S3,
  accessKeyId: config.Access_Key_ID_S3,
  region: config.REGION_S3,
});

var s3 = new aws.S3();

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "youBucketName",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});
module.exports = upload;
```
* Get list of buckets
```javascript
const AWS = require("aws-sdk");
router.get("/", async (req, res, next) => {
  let s3bucket = new AWS.S3({
    accessKeyId: "A****************L",
    secretAccessKey: "s*********************",
    Bucket: "your-bucket-name",
  });
  s3bucket.listBuckets(function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      res.json(data);
    }
  });
});

```

### EKS vs ECS
* ECS EKS represent different containerzied services that they are withing in this cluster 
* ECS Elastic Container Service allows to run k8s. It does manage LB and or Network LB automatically unkike EKS which you can use more customize 
* Elastic Container Service for Kubernetes allows to use Kubernetes on AWS. It provides some feautes as:
  * Elastic LB for load distribution
  *  IAM for authentication
  *  VPC for isolation
  *   CloudTrail for logging
* EKS use to manage and deploy containerized applications. It is good for apps with high availability and fault tolerance, such as web applications, microservices, and data processing pipelines
* AWS provides all tools which you need in kubernetes environment at EKS like worker nodes or control plane, this is the different between EKS and EC2
* `ECR` keeps images, to access ECR from ECS you need to add a policy to IAM policy then access it via url 
* Get access to ECR images as 
```go
aws_account_id.dkr.ecr.region.amazonaws.com/my-repository:latest
```
* `Helm` helps you manage Kubernetes applications — Helm Charts help you define, install, and upgrade complex Kubernetes application. Charts are easy to create, version, share, and publish — so start using Helm and stop the copy-and-paste


### EC2
* Amazon Web Services EC2 (Elastic Cloud Compute) is a web service that offers resizable compute capacity in the Amazon Web Services cloud. It provides Infrastructure as a Service (IaaS) to its consumers (IaaS). It gives you full control over your computing resources, which you can scale as needed

### Route53
* A DNS web service
* Amazon Route 53 Traffic is a domain name system service that lets customer to define how end-user traffic is routed to application via drag-and-drop graphical user interface to ease traffic management, it has a global LB 
  
### Serverless service Lambda 
* Serverless Computing
* Event based computing which runs on the event, same as `Cloud Functions` in GCP. They both have automatic scaling and
As part of the free tier, they both provide at least a million free requests
* A standard serverless application consists of one or more functions triggered by events such as object uploads to Amazon S3, Amazon SNS notifications, or API actions, Amazon Simple Email Service, AWS CodeCommit
* You charged based on  number of requests functions and the duration
* There are 3 ways to trigger lambda:
  * API Gateway event, It will trigger your lambda function, when somebody is calling an API Gateway For Lambda. Need to specify in the configuration to find which event type has been triggered, or serverless.yml if you are using the Serverless Framework.
  * S3 When someone(s) modifies the contents of an S3 bucket, S3 events occur
  * DynamoDB events When someone updates a record in a specific DynamoDB table (a nosql supported aws db)


## Kubernetes Cluster
 
* In kubernetes are `control nodes` which run vital services for cluster. You make sure when one is down another work fine. Also there are `worker nodes`
* To build this cluster you need to run `kubeadm` command and is called `on-premise` solution. It means you run it locally on your hardware. On cloud we have EKS, AKS and GCP Google Cloud platform to give us cubernetes cluster
 
* K8 is all about managing pods, a pod can have one or more containers. Usally there is only one pod. in pod we have volume which makes sure files can be stored. Replicate helps if any pods fail, it create a new one also it takes care of scalability as well. In order to have it, kubernetes indroduces Replica set. Replica set take care of replication. All these are inside deployment (application).
* When we create Deployemnt or app, deployment monitors the replica set. The replica monitors the right amount of pods. 
* Kubernetes try to keep running pods. After they down it restart it
 
## K8 config files
* It stored in the Etcd database in JSON format. JSON format is not easy to edit that is why YAML is the current format to define kubernetes resources. YAML files need indentation to keep correct format and two spaces and not tab to define parent and child
 * When you create YAML file use below to create the resource
javascript
kubctl create -f myfile.yaml
... delete ...
// to generate
kubctl get <resource> -o yaml > myresource.yaml // append file to yaml file
 
## Create a Naked POD
javascript
git clone https://github.com/sandervanvugt/kubernetes
 
// create a pod from one yaml
kubctl create -f busybox.yaml
kubctl get all // to see all running containers
 
* Now we created a naked pod because it is not managed by anything. So if you delete the pod, then it is going to create it again because nothing is around it
 
javascript
apiVersion: v1
kind: Pod
metadata:
  name: busybox2
  namespace: default // if we remove it would be still namespace to default
spec: //most important part, define what are things inside pod
  containers: // one container
  - name: busy
    image: busybox
    command: // define array of commands to run our
      - sleep
      - "3600"
 
### K8 APIs
 
* APIs are updated each 3 months, so to we need keep eye on them because we use K8 APIs in YAML files
javascript
kubctl api-resources //shows a list of resources that is defined in the API
kubctl api-versions // shows resource versions
kubctl explain // give details
 

### Pods
 
* Each pod has its own ip address, pods internal ip address is that might be one of the Docker ip addresses like`172.17.0.XXX` but we can't address users to them direcly. That is why we have `service` object which is connected to deployment using `label` and deployment is what insides have pods. So we can see `service object` as load balancer.
If you have big and many `service objects` you can have one `ingress` on top of it and it load balance the traffice to different services.
*
 
### Setup K8 in GCP
 
* Login and create a cluster, Select zone, then select static version and leave node location empty -> click create -> then you see amount of cpu, ram available to this cluster
* Click on connect -> click on Run in Cloud Shell -> then it provides google cloud shell machine,
javascript
kubctl get all // inside the shell, then you see current k8 , replica set and pods if exist
kubctl create deployment g-nginx --image=nginx
 
### Workloads
* To manage gcp environment,
 

## How the application knows where is current
* From current instance the inside loganesnatesting application knows
 
* triggers check development.json file
* cluster
kubctl get all // to see all running containers
// connect to cluster and run ip a
 
`virthual ethernet` interfaces connect our `bridge` or `docker 0` to each container via veth1, veth2 ... . They make sure that containers can put their trafic on the bridge and bridge to connected to actual network. `Bridge` put traffic of all containers into physical device using `Network Address Translation` tool. `docker 0` has a public ip address to recognize itself
 
* Containers are ephemeral so it's storage. It means when we start a container it goes away and it is gone
* We can use bind mount mechanism within docker container.





## Projects in GCP
* Any resource you create is part of a project. Each project needs to associate with billing account. 
* Use projects as hierarchy to determine permisions and roles. Organazation, folders and then projects. Then you can manage 


# Terraform

 
<img width="330" alt="Screen Shot 2022-06-05 at 1 01 30 PM" src="https://user-images.githubusercontent.com/7471619/172068368-a52b2238-84b0-419d-a4eb-3f2502b4fa36.png">

### Providers

* There are two providers, one google and another is google beta
* <img width="496" alt="Screen Shot 2022-06-05 at 1 03 57 PM" src="https://user-images.githubusercontent.com/7471619/172068459-1ceb7c9c-2fd1-4e16-9511-470ee8a3fae6.png">

link for tutorial references:
* https://github.com/ned1313/terraform-tuesdays/tree/main/2021-07-20-Getting-Started-GCP
* https://www.youtube.com/watch?v=JQYgFSYFi-o
	
### Spin Compute Engine in GCP using Terraform

#### Enable Compute Engine API
```javascript
gcloud services enable compute.googleapis.com
```
### Standard Starts
```javascript
terraform init
terraform validate
terraform plan -var gcp_project='something' -out ex.tfplan // create a plan to execute
// once it generates plan apply it
terraform apply ex.tfplan

```
	
* 
	
# VPC
 
* We can use tags  to specific VM or container. Each company policy can be added to firewall so make sure
* VPC is virtual global resouce
* Cloud routes helps to connect to other region if it goes down other region
* By subnet we can assign which service can access to what subnets which gives us security
* Subnets gives native support for load balancing, GKE when we use ingress load balancer make sure FE reach to the pods.
* Aliance ips create primary and secondary ranges.
 

* VPC we have three different types of subnets. Subnet range first is your network, second is your gateway, last is your broadcast ip
* Primary and secondary IP range in case of faulirs
* VPC can access internally to all common google APIS like storages
* and subnet can be available on different zone under one region
* VPC Network
* Is IoC Infrastructure as Code software that provide resources an application requires to run
 
javascript
terraform plan    // it is going to create a resource but not commiting 
terraform apply // commiting the resource to cloud
terraform delete
 

# Gcloud
javascript
gcloud config configurations list  // list of accounts
gcloud config configurations activate default // active default account
gcloud config get-value project
gcloud info
gcloud compute networks list // list of connected vpc
gcloud compute subnets list --network <vpcName>
 
gclloud compute network create vpc-2 --subnet-mod custom
// subnets are regional
gclloud compute networks subnets create vpc-2-euroe-west --network vpc-2 --region europe-west --range 10.10.1.0/24
gcloud compute networks delete vpc-2
gcloud compute firewall-rules list
gcloud compute firewall-rules delete nemeoffirewall
 

gcloud auth application-default login
cd /terraform/environments/staging/loganstaging/vpc
terraform state list
gcloud projects list
gcloud config set project onesnatesting
terraform plan
gsutil ls gs://esna-terraform-state-staging 
terraform init --upgrade //
terraform plan
terraform apply
terraform destroy
 
// spaces/5fa958773f48c60af520c089
//  triggers -> spacesstaging -> RUN -> sit-ds-terraform
//  cluster_group_vpc  = vpc
//  env_path = sit/prod-ds
//             sit/prod-ds/flavors/ca/gke
//
//   cluster_flavor_compone =  gke                  
//   apply_plan = yes
//
//   OR
//  
//   _cluster_flavor_name = flavor/all
//   _ENV_PATH = sit/prod-ds/flavors
//    cluster_flavor_compone =  gke 



Working agenda for KTs:
Day 1
Database model
Terraform/terragrunt
Flavours
 
Day 2
Data migration
 
Load balancer
Type of LB - global
How it used to be created
How we do it now with NEGs
In HA environment how are NEGs configured to provide HA
How NEGs interact with LB
 
HA
How it's configured
How to swtich over
Switch back
GCS buckets syncing
Primary bucket -> secondary happens automatically
Secondary to primary is manual after primary comes back and we switched to secondary
Check with Vlad before he leaves
VPCs/Subnets
How they are set up
Why we set them up with a small CIDR range?
Why did we abandon the shared VPC?
MPaaS/CPaaS dial-in numbers
How to generate MPaaS token
What are MPaaS callbacks
How do they work with DR
MPaaS conf token used for recording
Adding new dial-in numbers
Unit tests
Mocha
Jest
Use of in-memory MongoDB
Remaining tasks
React upgrade
 


# <font color=Blue> Automation and CI/CD </font> 

* Automation is leveragin tools to get infrastructure created and getting deployed with less human intervention. Like define a buttom on the build to run terraform or aws cloudFormation, instead of manually provisions each service

* CI/CD having a pipeline since you commit the code to repository and it deploy to different environments for QAs, testing, staging and production with minimum intervenion. 

### Automation



# <font color=Blue> Stateless vs Statefull Services  </font> 
* Stateful services are good for small apps, all services use one db and comunicate. If one of them is down the app is down
* Statelss services, services not depends on each other works, each services can have replicas in case of down other works, each service could have its own db and helps in scaleability


# <font color=Red> Security, LB, Firewall, VPC, Policies </font> 
* LB: having many requests can increase unintended the cost, if they are not maliviouse, so LB is good to hadnle traffic. AWS has API gateway that is LB where we can rate limit reqs, max req
* Firewall: Make sure requests come from valid resources
* Policies: To make sure services can access the right service
* VPC: Only you and company and no other ppl

* SaaS: Software as a service: Application access over the web not manage by you like slack
* IaaS: Infra Structure as Service: Acuiring computing and storage on demand. The model is pay as you go model. EC2 you only pay the size of instance you have, DynamoDB: you pay as many as database you have you pay
* PaaS: Platform as service, Offer access to cloud base environment without installing it. Google App engine is an example


# <font color=green> Scalling Vertical and Horizental </font> 

### Vertical Scaling
* Means you upgrade hardware like need memory just add it. 
  * Pros: cost effective, less complex process, less software need change
  * Con: impact users, high possibility of downtime, upgrade limitation, singl point failure

### Horizental
* Means you increases the number of servers so more instances
  * Pros: Scaling is easir than hardware scales, less downtime, increase resiliance and fault tolerance, increase performance 
  * Cons: increase complexity maintain operation, more initial costs, track and trace requests on more machines is more complex

# <font color=green> Latency  vs Throughput </font> 

* `Bandwidth` the number of packets that can be transferred throughout the network
* `Latency` How long takes packets reach their destinations
* `Throughput` Number of packets that are proceed within a specific period of time
*
