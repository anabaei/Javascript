

# Docker
* It’s a known fact that Docker provides the lifecycle management of containers and a Docker image builds the runtime containers.
*  But, since these individual containers have to communicate, Kubernetes is used
  

# K8
* manually linked and orchestrated running containers, using Kubernetes. 
* Each application (running containers = cluster of containers) can have its own libraries independent from the rest of containers inside each container
* Each containers could be a microservices, they can communicate with each other using K8 (gke if it is in gcp). 
* At k8 you can define VPC, exposed internal or external ip addresses, with range and cidar
```javascript
Features of k8:
- Recreate pods which are dies
- Rollout or rollback if needed for containers
- Horizental scalling and load balancing
- Build contianer automatically 
```
* `Kubectl` is the platform using which you can pass commands to the cluster
* get ingress and LB from here https://www.edureka.co/blog/interview-questions/kubernetes-interview-questions/
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

```javascript
mongoose.connect('mongodb://docker.for.mac.localhost:27017/databaseName')
```

#### Publish on Dockerhub
* Docker login
* docker tag app_image infroger/app_image:1
* docker push infroger/app_image:1