# Kubernetes 


[Resource](https://learning.oreilly.com/videos/getting-started-with/9780136787709/9780136787709-GSK2_01_04_06/)

## Kubernetes Project Status
* Project status is determined by the CNCF
* Sandbox: One status to show new projects
* Incubating: Adobption of project is becoming more wide-spread
* Graduated: project is part of core kubernetes environment

## Kubernetes Solutions
* Different open source distribution are available to work with kubernetes like Rancher and Red had OpenShift Container Platform
* Kubernetes can be used on-premise, but also as a managed solution in public cloud like Azure Kubernetes Service, EKS Amazon Kubernetes Platform, GKE Google Kubernetes public cloud 
* CKAD is basic, then CKA, 

## Understanding Containers
 
* Container host platform can be a linux distribution, but also a minimal distribution such as Fedora Atomic or CoreOS like what we have in clouds 
* Containers are linux and run on container engine. Engine runs on top of Linux Kernal. Like you run app in smartphone. They are self-contained and never offer dependency problem

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
* To manage gcp environment, 
