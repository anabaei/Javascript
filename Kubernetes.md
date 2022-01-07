
<details>
 <summary> GKE </summary>
 
 * K8s manage and orchereyed containers and has specific relation with gcp because both are on google
 * GKE sevice uses Google Compute Engine instance under the hood and Kubernetes runs on GCE VM instances
 * K8s Clusters follow master worker paradigm. Each cluster has one master if we run in High Availability configuration we can have multiple master nodes. This adds additional level of fault tolerance in cluster.
 * Master nodes responsible to manage cluster.  We always interact with masters nodes when using glclud or webconsole terminal or apiserices.   
 * When we interact with master nodes and master nodes spin up containers that will run on worker nodes.
 * Node referes to a machine that runs various k8s services and host our container. Nodes can be on-premise VM or cloud VM. Subset of nodes instances which have same configuration are called node pool. Also we can have configuration more than default node pool, like high memory node pool to run containers which have additional memory requirements. 
 * When you instantiates k8s cluster nodes on GCP, then GCP offers specialize operating system images to run containers. Below you see containers (docker cotainers) inside each node run. A container is wrapped in pod and each pod could have more than one container. 
 
<img width="987" alt="Screen Shot 2021-11-21 at 3 34 05 PM" src="https://user-images.githubusercontent.com/7471619/142783419-04404cd9-16ec-47bb-97f3-c715faf279ff.png">


 * K8s doesn't interact directly with containers. It uses high-level entities refered to as objects like (replicaset, deployment, service, ingresss) 
 * Ip addresses for each pod can be expose to external endpoints.  
 
 ### Deployment
 * Once you create a cluster and specifed how many replica of pods you need, then you need deployment. 
 * Deployment provides versioning and rollbacks functionality
 * When you deploy containerized workload on Google Kubernetes Engine, you work directly with deployment which allows you to push new version of container. This is versioning support that deployment support

### Services
 * To expose your containerized app to external or to  load balancer to distribute traffic. Service connect them to backend pods. It is service object responsibilty to ensure FE IP address exposed to client are unchanged and only BE changed if pods are down or traffic changed

### 


 
</details>

<details>
 <summary> Create a cluster on GKE  with Terraform </summary>
 
 
 * Get from [this tutorial](https://www.youtube.com/watch?v=Vcv6GapxUCI)
 * [good one](https://github.com/antonputra/tutorials)
 
 * Clone from repository 

 #### main.tf, development and service
 * Has google container cluster and have settings, we don't use basic auth
 * preemtible indicates to not to allow remove nodes due to change in pricing, in test should be false in production true
 * on google_container_node_pool define how many nodes we want, name of project, location we want this project, the cluster it belongs to and machine type as some apis at the bottom for monitoring and loging.
 * In variables update to your project and machine type and intiial node count which are optional
 * output gonna have some endpoints for master version and ip address for cluster
 
 ## Google Cloud SDK gcloud
 
 ```javascript
gcloud auth application-default login 
gcloud config configurations list // which one is true if you run
gcloud config configurations avtivate // switch between accounts configName
  gcloud info // shows current active which project or account we are connected to 
  gcloud components list // list all components that are available 

ls ~/.config/gcloud/configuration

# add new account
 gcloud init // select 2 to add new configuration with a name
             // 2 brower login ..
gcloud config configurations list  // now it should be active
gcloud projects list
 
gcloud config get-value project  // to see which one you connected to
 
gcloud config set account AccountName
gcloud config set project onesnastaging 
gcloud config list 
 
 // to rm google sdk and install again
 sudo snap remove google-cloud-sdk
 rm -rf ~/.config/gcloud
 which gcloud 
 sudo snap install google-cloud-sdk --classic
 gcloud auth list 
 ```
 * 
 ```javascript
 gcloud auth application-default login
 terraform init 
 terraform plan // create cluster and node pool
 terraform apply
 ```
 * Now in googl console -> kubernetes cluster -> connect -> copy/paste to terminal 
 
 ```javascript
 kubectl describe nodes
 kubectl get ns // get namespaces
 
 //add application to our cluster 
 kubectl apply -f development.yaml
 kubectl apply -f service.yaml
 kubectl get pods
 
 kubectl apply -f ingress.yaml // to create google cloud load balancer
 
 ```
 ```javascript
 arch -arm64 brew install terraform  //install terraform
 ```
 
 #### development
 * live in default namespace 
 * Set a container pull nginx image if not there and run it on port 80
 
#### Service
 * Assign target port, node port because we gonna need ingress to work with it
 
 #### Ingress
 * Gonna launch cloud load balancer, need to define above servie name and service port gonna be 80 which also we define it in service above the port
 
 * Now if you go to services/ingress on GKE, you see ingress endpoint which you can click and see nginx service
 
 * You can see pods logs -> logging -> select the container -> we can see requests from load balancers 
 
 ________________________________________________________________________
 </details>
 
 * create cluster 
 * login to google shell 
 * connect with the cluster 
 * add image to cluster 
```javascript
kubectl create deployement nameofourservice  --image=imageNameWhichAlreadyDeployedToRegistry:tagNameIfExist
kubectl get deployment // check the instance is ready
// expose to the world using load balancer
kubectl expose deployment nameofourservice 
```
* gcloud -> work with cluster, kubectl -> deploy or expose something 
* 

<details>
 
 <summary> Create VPC & subnets </summary>

 * VPC is global so we don't need to use vpc peering. Subnets are regional specific and different zones. So with two nodes on different region they can talk each other without needing vpc peering. 
 ![Image 2021-11-17 at 3 54 PM](https://user-images.githubusercontent.com/7471619/142300992-7769e72f-7654-4370-b554-e307ab6b24b4.jpg)
* Each google account has one `default` VPC network (we can delete it). It has 23 regions with subnets in each. 
* When we create VPC, we can create subnets. If select automatically it is going to create subnets for each region and assign ip range. The if these ip-range already were in used in `on-perm` network then we may not be able to set up peering connections. 
 
* These ip range are reserved before pods are creaetd. To have full control we define our subnets also specify which region we want that subnet. We can create firewal rule that apply only on that ip address.
* These pods/subnet address are accessible from cloud routes. 
* Each subne name should be unique in even different VPC. Better to use VPCname+region-version on each subnet
*  In short subnets are like networks we have on each VPC for each Region

 
 ### VMs 
 * ssh -> open in browser
 ```
hostname
lsblk  /// machine  
 cat /etc/os-release // this is not a service, it helps docker 
 ```
 * NAME="Container-Optimized OS" Container-Optimized OS is an operating system image for your Compute Engine VMs that is optimized for running Docker containers.
 * Check connect with gcloud then connect to machine 
 
 
## CLI Create VPC
```javascript
 // list available vpcs 
gcloud compute networks list
gcloud compute networks subnets list // list all subnets of all VPCs
gcloud compute networks subnets list --network nameOfSpecificVPC 

gcloud compute networks create NameOFVPC --subnet-mode custom // create custom subnet
gcloud compute firewall-rules create NameOfFireWall --network nameOfVPC --allow tcp:22
gcloud compute networks subnets create nameOfSubnet --network whichVPC --region nameOfRegion --range 10.10.1.0/24
 
gcloud compute networks subnets list
gcloud compute networks subnets list --network nameOfAVPC

 ```
 
 ### Nodes in Cluster are VMs
 * When you create a cluster, it has Nodes. In K8s Nodes are VMs. Unlike VMs we don't ssh to them, we don't install applications on them, all we need to write a K8s manifest and k8s would scheduale somewhere on these nodes. We just need to containerzie our apps with a docker file to let them know how to build the image into a container. So when these containers are built, k8s implement them based on our manifest. 
 
  ## Create VPC Via Terraform
 ```javascript
 #create vpc
resource "google_compute_network" "main" {
    name = "vpc-testonly"
    project = "prodigy-dev-1"
    auto_create_subnetworks = true
    routing_mode = "REGIONAL" # these two are default value
    mtu = 1500
}
 
 ```
 * 
 
 ```javascript
 
 provider "google" {
  project = "prodigy-dev-1"
}

module "vpc" {
    source  = "terraform-google-modules/network/google"
    version = "~> 3.0"

    project_id   = "prodigy-dev-1"
    network_name = "example-vpc"
    routing_mode = "GLOBAL"

    delete_default_internet_gateway_routes = "true"

    subnets = [
        {
            subnet_name           = "subnet-01"
            subnet_ip             = "10.10.10.0/24"
            subnet_region         = "us-west1"
        },
        {
            subnet_name           = "subnet-02"
            subnet_ip             = "10.10.20.0/24"
            subnet_region         = "us-west1"
            subnet_private_access = "true"
            subnet_flow_logs      = "true"
            description           = "This subnet has a description"
        },
        {
            subnet_name               = "subnet-03"
            subnet_ip                 = "10.10.30.0/24"
            subnet_region             = "us-west1"
            subnet_flow_logs          = "true"
            subnet_flow_logs_interval = "INTERVAL_10_MIN"
            subnet_flow_logs_sampling = 0.7
            subnet_flow_logs_metadata = "INCLUDE_ALL_METADATA"
        },
         
    ]

    secondary_ranges = {
        subnet-01 = [
            {
                range_name    = "subnet-01-secondary-01"
                ip_cidr_range = "192.168.64.0/24"
            },
        ]

        subnet-02 = []
    }

    routes = [
        {
            name                   = "egress-internet"
            description            = "default route through IGW to access internet"
            destination_range      = "0.0.0.0/0"
            tags                   = "egress-inet"
            next_hop_internet      = "true"
        }
    ]
}

 ```

 
 ## primary vs secondary subnets 
 * primary uses to address all node IP address 
 * one secondary for all pod addresses unless you specify maximum number of pods per node (1 - 110 pods) 
 * another secondry for service addresses (cluster IP), on a cluster running 3000 service, we need 3000 cluster ip address so secondary range should be 2^12 or /20
  * Remove default route and create exactly the same one
  * Subnet private require cloud router and `nat` gateway to access.But for the public ones we don't need to do anything because we have our route internet gateway whihc is map to all subnets. We can asign some tags to access certain nodes 
 
 ### cloud router 
 
 ```javascript
 # https://github.com/terraform-google-modules/terraform-google-cloud-router
module "cloud_router" {
  source  = "terraform-google-modules/cloud-router/google"
  version = "~> 0.4"

  name    = "example-router"
  project = "prodigy-dev-1"
  region  = "us-central1"
  network = module.vpc.network_name
#   network = "vpc-testonly"
  nats = [{
      name = "nat"
      nat_ip_allocation_option = "AUTO_ONLY"
      source_subnetwork_ip_ranges_to_nat = "LIST_OF_SOMETHINGS"
      subnetworks = [{
          name = "subnet-02"
          source_ip_ranges_to_nat = ["ALL_IP_RANGES"]
      }]
  }]
}
 
 ```
 * it provides blocks whihc calls `nat` 
 
 
 ### k8s manifest desired state
 * is yaml file service and deployment. 
 * In service: we tell we want a load balancer to front pods that is based on template. here our pod has two containers one is ui another is api source from images. 
 * K8s then run and execute it with desired states that we have here 
 
 ![Image 2021-11-18 at 3 36 AM](https://user-images.githubusercontent.com/7471619/142408260-94490946-879a-4fc8-8665-892fd8744cbf.jpg)
 
 * Then we need only run it to kick out them. K8s implement and observer it all time to have onserverd state wih this desired state 
 * Next is build image and apply manifest to our cluster
 * after that we can see list of pods
 ```
 kubectl get pods
 kubectl get services // it allows us to look at load balancers 
 ```
 * GKE in BE provision load balancer to front our pods and also provisioning an external ip address to access our app.
 
 so far 
 ```
 - had gke cluster
 - connect to cluster 
 - build our app and containers
 - declaretily deploy them to k8s
 - expose container behind load balancer and siplay on brower
 ```
 
 * 

 * After creating a cluster via terraform or google cloud we can connect to it then get list of nodes 
 ```javascript
 kubectl get nodes
 ```
 
 ### share vpc
 * [link](https://www.youtube.com/watch?v=XTcos7s0iDo)
 
 </details>

[cluster architecture](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture)

# Kubernetes 

* A cluster is the foundation of Google Kubernetes Engine. In GKE, a cluster consists of at least one control plane and multiple worker machines called nodes. These control plane and node machines run the Kubernetes cluster orchestration system. 
* When we create cluster, gke creates nodes.
* A cluster that uses alias IP address ranges is called a VPC-native cluster. A cluster that uses custom static routes in a VPC network is called a routes-based cluster

#### Benefits of VPC-native clusters
* Pod IP addresses are natively routable within the cluster's VPC network and other [VPC networks](https://cloud.google.com/vpc/docs/vpc#vpc_networks_and_subnets) connected to it by VPC Network Peerin
* Pod IP addresses are reserved in the VPC network before the Pods are created in cluster. This prevents conflict with other resources in the VPC network
* VPC-native cluster have ip ranges, and each ip address is associated with a subnet. Each subnet is for a region. A network must have at least one subnet before you can use it. Auto mode VPC networks create subnets in each region automatically. Custom mode VPC networks start with no subnets, giving you full control over subnet creation. You can create more than one subnet per region
* Subnet ranage: When you create a subnet, you must define its primary [IP address range](https://cloud.google.com/vpc/docs/vpc#manually_created_subnet_ip_ranges)


#### Control plane and node interaction

* The control plane is the unified endpoint for your cluster. We interact with the cluster through Kubernetes API calls and the control plane runs the Kubernetes API  to handle our requests
* We can hit kubernetes api with http/grpc, kubectl or gcp dashboard
* The control plane decides what runs on all of the cluster's nodes. The control plane schedules workloads, like containerized applications, and manages the workloads' lifecycle, scaling, and upgrades. The control plane also manages network and storage resources for those workloads
* Control plane pull images from [container registry or gcr.io](https://cloud.google.com/container-registry/docs/overview) 

#### Node
* A node runs the services necessary to support the containers and build cluster's workloads. These includes (kubectl), which communicates with the control plane and is responsible for starting and running containers scheduled on the node
* Each node has OS to run containers which is usually linux but we can specify it
* allocate [node resource](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture)


[Resource](https://learning.oreilly.com/videos/getting-started-with/9780136787709/9780136787709-GSK2_01_04_06/)
* K8 is a portable, extensible, open-source, platform for managing conainerized workloads and services, that facilates both declarative configuration and automation, letting you run distributed system resiliently, with scalling and failover for your application.
* K8 is a container orchestrated to make sure each container is where it's supposed to be and containers can work togather

#### Use case
* There are many applications we call `monolithics` means put all functionality like all transactions and third party inegration into a single deployable artifact. 
```
deployment: may take long time since everything needs to rollout togather 
and scalling has issue

```
* So we have `microservices` each piece of functionality split into smaller individual artifacts. If there is an update, only that serviec has to be replaced
```
scalling is easier, each part can be scale to match traffic.
```
* That is where `containers` are usefull. We can package up our services neatly. 

## Cluster 

* `Kubernetes` is all about managing containers on `virtual machines` or `nodes`. The nodes and containers running a group togather as a `cluster`.
* Each cluster can have many VM or nodes where you run your workloads on. Each node can have many pods and each pod can include containers
* Each `container` has `endpoints`, `DNS`, `Storage` and scalability. 
* Developer tells K8 what cluster need to be look like and K8 create it

## Containers
 
* Contianers are built to deploy smaller services with isolation and consistency. Containers are based on underlying concent from `linux kernel` Namespaces and Cgroups. 

#### Namespaces
* namespaces make sure that individual processes can't see the details of other processes and cgroups control how much resources a process can use like cpu, memory
* Container host platform can be a linux distribution, but also a minimal distribution such as Fedora Atomic or CoreOS like what we have in clouds 
* Containers are linux and run on container engine. Engine runs on top of Linux Kernal. Like you run app in smartphone. They are self-contained and never offer dependency problem

#### Container run times (Docker)
* There are few containers run time, one of them is `Docker`. Docker built APIs that help app developer build containers and a platform to run them sameway regardless of which machine they run on. 
* A docker file is like
```javascript
MAIN PARTS OF DOCKERFILE

// from which image to make container environment
FROM ubunto:16.04 

// Run some commands to download node or python 
RUN apth update && apt install python -y
RUN app install python-pip -y
RUN pip install flask

// Copy files from your local environment and put them into the container, then container can have our app files
COPY app.py /opt/app.py

//entrypoint command: run app
ENTRYPOINT FLASK_APP=/opt/app.py flask run --host=0.0.0.0
```

## Desired State
* Same as docekr file explain a container what to do, we configure k8 to manage whole cluster to do which we call it `Desired State`
* `POD` is a collection of multiple containers. It could be one or multiple applications (usually one app). How to create pods in a node? below example
```javascript
// a yaml file that tells desired state to create pod
apiVersion: V1
kind: pod
metadata: 
  name:static-web
  labels:
    role:myrole
spec:
  containers:
    - name: web
      image: nginx
      ports:
        -name: web
         containerPort: 80
         protocol: TCP

```
* `Metadata` section gives K8 to group pods and other resources togather
*  `spec` here first we name a pod, tell what image needs to run. Define ports through default port number 80. 
*  When we put it on K8, k8 make sure our actual state match with our `desired state` 


## Nodes details
* Each nodes contains the service necessary to run pods. A container run time for running containers, a kubelet make sure everything is running and kub proxy for handling networking. 

<img width="457" alt="Screen Shot 2021-11-08 at 2 11 03 PM" src="https://user-images.githubusercontent.com/7471619/140826411-415732d5-5755-4e7c-a644-5ee91d7bbc20.png">
* `kubelet` on nodes are watching what's going on on the node itself, so when control plane schedual a pod on that node, both the control plane and the node have enough information to make sure it works 
* If a pod runs into issue, control plane works with kubele to remove unhealth pod and replace it with ne

## Kubernates API
* Makes managing cloud native applications easier. We already talked about few API objects like pods, nodes, but there are also services, deployments, secrets and more.. 

# START with K8

* Have an app to run hello world on port 8080. First We need a VM or Node to run our app

```javascript
gcloud container clusters create hello-cluster
```
* This command creates a cluster and by default 3 nodes. Now how to run my app inside them? use `kubectl` to interact with node to create a kubernetes api object called `deployment`.  
```javascript
kubectl run dbd --image \ askcarter/example-db:1.0.0 --record
```
### Deployment
* Deployment is an abstraction that manages the life cycle of an application. We can set specific numbers of instances or replica for `deployement` to manage and then it makes sure the correct number are running
* Now my app is running on these nodes, how to access it? To that we have to create a `service` 

### Service
* Service create an endpoint to access the running app instances 
```javascript
kubectl expose deployment dbd \ --port 80 --type LoadBalancer
```
![Image 2021-11-08 at 4 26 PM](https://user-images.githubusercontent.com/7471619/140839934-ccb2666e-8b6a-4080-a63c-288952904bc4.jpg)
* So this service load balance between two running pods. For any container inside cluster they can connect using the service name. Also service keep tracks of wherever pods is running

# Imperatively vs Declaratively
* So far we create cluster imperatively, it means we told K8 what we want to do. In real world we use declaratively by having a file that describe or declares what we want things to be like. Having our state defined declaratively in files allow us to track changes through source control.
* [linke for tutorial](https://www.youtube.com/watch?v=LYcHaDDcCYo) 


## K8 Control plane
* Each cluster has one control plane, the way k8 manages pods it through whats called `control plane`. Inside we have
```javascript
API Server: handles data validations and configuration for all api objects, 
etcd: a key-value store for holding onto all the important data that k8 uses
schedualer: it makes decision where exactly a pod needs to run, it look at available resources for all the nodes and assign a pod to a node that can handle it.
controller manager: core k8 logic happens. 
cloud controller: allows k8 to hook into cloud providers
```

![Image 2021-11-08 at 2 38 PM](https://user-images.githubusercontent.com/7471619/140829341-d768ca40-8150-4dd3-8360-2669d2f78ba0.jpg)

* How we actually declare details ? here is we need k8 apis



## Kubernetes Project Status
* Project status is determined by the CNCF
* Sandbox: One status to show new projects
* Incubating: Adobption of project is becoming more wide-spread
* Graduated: project is part of core kubernetes environment

## Kubernetes Solutions
* Different open source distribution are available to work with kubernetes like Rancher and Red had OpenShift Container Platform
* Kubernetes can be used on-premise, but also as a managed solution in public cloud like Azure Kubernetes Service, EKS Amazon Kubernetes Platform, GKE Google Kubernetes public cloud 
* CKAD is basic, then CKA, 



### VMs 
* Many containers can run on top of the same host kernel
* One difference between VMs and containers is that containers have a defautl app that must start
* We have a kernel. With hypervisor (a virtualization process) it creates many VM. Each one has one an Operating System kernel that could run our apps with its dependencies. 
```
Kernel is a program that have control on everything in system and reside in memory. It facilate interaction between hardware and software components
```
### Container Architecture
* Containers are linux and built on top of Linux kernel. They have their own security and internal process isolated from outside
* Docker in 2013 brought docker registry hub which companies could publish their containers
* OCI Open Containers Initiative standardizes use of container images and run time. This ensure that you can run one image on different container engine environment. It means if you take one Docker cotainer, you can run it in Podman environment for Refhats.


### Docker Architecture
* Docker daemon is responsible for building, running and downloading container images and Docker client is responsible for communicating with Docker server
* Docker hub is a common registry, but there are some other private registries 
* Container Engine is our docker environment.
* To install you can install docker-ce (free version of docker) or from distrobution repositories
*  To start container first enable Docker daemon then you need to pull an image from a regitry and run it
```javascript
systemctl enable --now docker
// on red hat ent it is better to use podman instead of docker
systemctl status docker  //check status
grep docker /etc/group // to see which groups exist
usermod -aG docker student // make default user to run Docker commands, student is our default user,
 newgrp docker // new member of docker .. one time run command 
```

### Images
* Images are read-only environment that contain the runtime environment that includes application and dependencies
 
## Docker Commands

* Simple commands on running docekr [in ECS](https://docs.aws.amazon.com/AmazonECS/latest/userguide/docker-basics.html) 

```javascript
docker --help
docker run // run a command in a new container
docker start // start an or more already stopped container
docker ps // show all processes
```
* To example
```javascript
docekr run ubuntu:latest
// to see it 
docker ps -a // this container start a bash shell and exit imediately
```
* Classical error: containers aren't VM sits for you and wait, they more likely applications when you run

### Inside container environment

```javascript
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
```
* 
```javascript
sudo find / .name "hello"  // fine hello from directory
```


## Reach containers with Docker Networking
* `bridge` drive is a default network driver that runs applications inside containers. On a single `node` all containers communicate with docker bridge. And docker bridge communicate with actual network
* `host` drive is only in Docker swarm, container connects to host network directly
* `overlay` drive, used in Docker swarm to connect multiple Docker Daemons togather
* `macvlan` used for legacy apps, where a MAC address can be assigned to a container to appear as a physical device on network

* In kubernates it defines a real overlay network

* To monitor [network use nmap](https://hub.docker.com/r/instrumentisto/nmap) 
```javascript
docker run -d nginx // run nginx container demonize means run in background 

brew install iproute2mac 
ip a

```

* On macOS the docker binary is only a client and you cannot use it to run the docker daemon, because Docker daemon uses Linux-specific kernel features, therefore you can’t run Docker natively in OS X. So you have to install docker-machine in order to create VM and attach to it.
```javascript
brew install --cask docker // Then launch the Docker app  
// Because docker is a system-level package you need --cask 
brew install docker-machine docker
```

## Namespaces:

* Namespace is great to divide resources across various cluster and teams and give control to what you can access within a given cluster. 
```javascript
kubens // show all namesapce in your cluster, as well as which one your k8 context currently is configured to interact with
kubectl auth can-i defineVerb Resource
kubectl auth can-i create pods
kubectl describe namespace NameOfNameSpace // to look for constraints that define in namespace level


```


## Kubernetes Cluster

* In kubernetes are `control nodes` which run vital services for cluster. You make sure when one is down another work fine. Also there are `worker nodes` 
* To build this cluster you need to run `kubeadm` command and is called `on-premise` solution. It means you run it locally on your hardware. On cloud we have EKS, AKS and GCP Google Cloud platform to give us cubernetes cluster

* K8 is all about managing pods, a pod can have one or more containers. Usally there is only one pod. in pod we have volume which makes sure files can be stored. Replicate helps if any pods fail, it create a new one also it takes care of scalability as well. In order to have it, kubernetes indroduces Replica set. Replica set take care of replication. All these are inside deployment (application).
* When we create Deployemnt or app, deployment monitors the replica set. The replica monitors the right amount of pods.  
* Kubernetes try to keep running pods. After they down it restart it

 ## K8 config files
 * It stored in the Etcd database in JSON format. JSON format is not easy to edit that is why YAML is the current format to define kubernetes resources. YAML files need indentation to keep correct format and two spaces and not tab to define parent and child 
 * When you create YAML file use below to create the resource 
```javascript
kubctl create -f myfile.yaml
... delete ...
// to generate 
kubctl get <resource> -o yaml > myresource.yaml // append file to yaml file 
```

## Create a Naked POD
```javascript
git clone https://github.com/sandervanvugt/kubernetes

// create a pod from one yaml
kubctl create -f busybox.yaml
kubctl get all // to see all running containers

```
* Now we created a naked pod because it is not managed by anything. So if you delete the pod, then it is going to create it again because nothing is around it

```javascript
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

```
### K8 APIs 

* APIs are updated each 3 months, so to we need keep eye on them because we use K8 APIs in YAML files 
```javascript
kubctl api-resources //shows a list of resources that is defined in the API
kubctl api-versions // shows resource versions
kubctl explain // give details 
```


### Pods

* Each pod has its own ip address, pods internal ip address is that might be one of the Docker ip addresses like`172.17.0.XXX` but we can't address users to them direcly. That is why we have `service` object which is connected to deployment using `label` and deployment is what insides have pods. So we can see `service object` as load balancer. 
If you have big and many `service objects` you can have one `ingress` on top of it and it load balance the traffice to different services. 
* 

### Setup K8 in GCP
* Remember, whenever you create your cluster you would be charge 4,5$ a day
* Login and create a cluster, Select zone, then select static version and leave node location empty -> click create -> then you see amount of cpu, ram available to this cluster
* Click on connect -> click on Run in Cloud Shell -> then it provides google cloud shell machine, 
```javascript
kubctl get all // inside the shell, then you see current k8 , replica set and pods if exist
kubctl create deployment g-nginx --image=nginx 

```
### Workloads
* To manage gcp environment<img width="841" alt="Screen Shot 2021-10-31 at 11 36 44 PM" src="https://user-images.githubusercontent.com/7471619/140380612-ce209d91-40f1-4a4b-a13d-8e5f282b64e8.png">
, 

## Data Migration

* Move all data from one cluster to another one. So all user generated data should move to new cluster. And we should not have any user's data in public cluster anymore (that is the key). User's data is exception but all the other generated data needs to move to new cluster.
* When migrating data, data temorary store in google storage, 
```
1- lock the information
2- move data to new cluster
3- users use data, if there is no issue then it finalize
3.1 - if there is any issue, there is rollback workflow which can remove data from target cluster
4- remove data from first place
```

state diagram

sequence diagram

## Terraform 

* Comapre existed implenetation . 
* State is like a file that can be on gs or locally.  like we defined in Backend "gcs" bucket where we can store it with prefix. 
* it can be lock file as safety feature on terraform 

```
gcloud auth login default
terraform state list // need to be in the folder when main.tf and variable.tf are
```
* Add subnet
```javascript
sit -> prod-ds -> vpc -> variable.tf 
open terminal here to add new subnet here ////esna-terraform-state-staging  

gcloud projects list
gcloud config set project onesnastaging 
 gcloud config list
 gsutil ls gs://esna-terraform-state-staging   
 
terraform init -upgrade //terraform init --upgrade //

terraform plan // shows current configuration is different with what is deployed and changed. 
terraform apply // make those changes 
gsutil ls gs://esna-terraform-state-staging  

terraform plan
terraform apply
terraform destroy

```
# Terragrunt

* Terragrunt is a wrapper for terraform, isntead of calling terraform directly we can put them inside a terragrunt function. 
```javascript
staging -> env-1 ->flavor-global -> vars.yml 
    staging -> env-1 ->gke-> terragrunt.hcl  //run the module and also pass these variables to it
```
* define variables and assign them to run 
* We never call modules directly, there is under projects/spaces/gke define variables and main can actually call other modules
* In order to not go to each individual to change things, ionstead of going to eevery single one we can use modules


* Define new variables, define service google at here: modules- > gcp -> vcp-components -> subnets 

# Google Cloud create VPC
```javascript
gclloud compute network create vpc-2 --subnet-mod custom
gclloud compute networks subnets create vpc-2-euroe-west --network vpc-2 --region europe-west --range 10.10.1.0/24

gcloud compute networks delete vpc-2
gcloud compute firewall-rules list
gcloud compute firewall-rules delete nemeoffirewall

```

# Commands:
```javascript
gcloud container clusters update Name

```



### Docker 0

<img width="430" alt="Screen Shot 2021-11-01 at 4 51 38 PM" src="https://user-images.githubusercontent.com/7471619/140378704-1a519ccd-59c9-4352-82b3-8201032e0580.png">



# Data Migration
<img width="835" alt="Screen Shot 2021-11-04 at 11 50 14 AM" src="https://user-images.githubusercontent.com/7471619/140375750-88de951a-6f09-4945-ba6b-57f19608dafa.png">


