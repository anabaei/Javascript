### Docker-compose
* Under services define any name to name containers
* Under each service either it wants to build a container from a new image, so need to say build: and tell where dockerfile can be find, or it is already built in image and tell image: mysql like image name
* it build containers 
* to expose to localhose port, you can mention ports:3001:41, we assume container port 41 is handling requests, so we can see it in localhost:3001


### Docker Run
* `Docker run` it runs container, it first check if the image exist locally, it doesn't find the image, it will pull it from Docker Hub then run.
```javascript
docker run hello-world
```


### Dockerfile Hello World

* Add http proxy, on docker file.
* 
```
# Use the official "Hello World" image as the base image
FROM hello-world

# Set an environment variable (replace with your desired value)
ENV MY_VARIABLE=my-value

# Set proxy environment variables if needed
# Example: HTTP and HTTPS proxy
ENV http_proxy=http://your-proxy-server:port
ENV https_proxy=http://your-proxy-server:port

# Optionally, set no proxy for certain addresses or domains
# ENV no_proxy=host1,host2,domain.com

# Command to run the container (same as the base image)
CMD ["./hello"]
```

### Dockerfile first example

* A docker-compose to run a dockerfile to execture simple sh command
* At Dockerfile define command, using nginx which is common to create we server
```javascript
# Use the official NGINX image as the base
FROM nginx:latest

# Copy your custom shell script into the container
COPY run.sh /usr/share/nginx/

# Make your shell script executable (if needed)
RUN chmod +x /usr/share/nginx/run.sh

# Set the shell script as the entry point
ENTRYPOINT ["/usr/share/nginx/run.sh"]
```
* Then create run.sh file at the same folder as
```
#!/bin/sh

# Navigate to the application directory
#cd /app
ls

# Install any application dependencies (if needed)
mkdir ali
ls
```
* Then build image and then run it to make sure works
```
docker build -t testrunimage .
docker run -it testrunimage
```
* Then add it to docker-compose as
```docker-compose.yml
version: '3'
services:
  myapp:
    image: testrunimage:latest
```



### Dockerfile Second Example

* on top mention if there is a base image
* tell where is a workdir in container
```
WORKDIR /app
Copy app.js /app/app3.js
Expose 41
```
* copy all files you think are require to container to run
* Expose port 41 of container to the host 
```
CMD ["node", "app3.js"]
```
* or you can use sh, where inside start.sh is 
```
CMD ["./start.sh"]
```
* start.sh
```
#!/bin/sh

# Navigate to the application directory
cd /app

# Install any application dependencies (if needed)
# npm install

# Start the Node.js application
node app3.js

```
* Also instead of having seperate app.js you can have it all in one file as 
```
# Set the working directory in the container
WORKDIR /app

# Create a simple "Hello, World!" Node.js application
RUN echo "const http = require('http');\n\
const server = http.createServer((req, res) => {\n\
  res.statusCode = 200;\n\
  res.setHeader('Content-Type', 'text/plain');\n\
  res.end('Hello, World!');\n\
});\n\
server.listen(80, '0.0.0.0', () => {\n\
  console.log('Server running on port 80');\n\
});" > app.js

```
#### Manually build and run image 
* Build image 
```javascript
docker build -t hello-world-node-image4 . 
```
* Run the image

```javascript
docker run -d -p 3001:41 hello-world-node-image4
```

#### Commands inside Container when Run Container

* First use run to pull/run the contianer
```javascript
docker run --rm -v $(pwd):/app --user $(id -u):$(id -g) eyesore/composer install
```
* `--rm` it container remove when container stop working, good for cleaning up containers
* `-v $(pwd):/app` this option indicate of volume mount, it maps current directory `$(pwd)` on host machine to `/app` directory within container
* To aoid permission issues when creating/modifying files inside container, sets userId and groupd Id. `--user $(id -u):$(id -g)` Here it matches from the host to the container
* `eyesore/composer` this is the name of docker image to run
* `install1` this is the command that you want to run inside container
* If you want to rewrite above command into a dockerfile it would be like below
```
# Use the official PHP image as the base image
FROM php:7.4-cli

# Install required packages
RUN apt-get update && \
    apt-get install -y --no-install-recommends git zip unzip && \
    apt-get clean

# Set the working directory
WORKDIR /app

# Copy the current directory into the container
COPY . /app


# Switch to the user, this user is known for almost all linux env, it is not always needed to create user in containers
#USER www-data

# Run the composer install command
CMD ["composer", "install"]
```
* Then run these two commands to build and run container
```
docker build -t my-composer-container .
docker run --rm -v $(pwd):/app my-composer-container
```
  

#### K8 Pods Service
* Kubernetes pods service allow you to create pods from running containers and lable them for future use
* K8 pods service is a yml file, has a neme to be addressed by services like load balancers or clusterIPs 

```javascript
apiVersion: v1
kind: Pod
metadata:
  name: my-pod-1
  labels:
    app: my-app
    environment: development
spec:
  containers:
    - name: my-container
      image: my-image
```
* spec: Specifies the specification for the Pod, including the containers to run within the Pod. In this case, it defines a single container named my-container and specifies the Docker image (my-image) to use for that container.

#### Pods
* Each Pod can have many containers which share same resources
* you can label pods to work togather
* you can tell what containers should be in the pod by their name 
* This yml file which is creating pod by giving it a name and label and tell which containers should work with, is called k8 manifest 
* Need to run kubectl apply my-pod.yml to create pods

```
kubectl get pods -> to check the status of pods
```

##### K8s flow
*  Kubernetes Services are 3 primary type: lb, clusterIp, Nodeport
* Request from the client hit the VM, as implemented k8 in vm so we call it k8 node.
* Ingress is between redhat and k8s services. We can remove ingress and directly connect redhat to k8 services. for this one clusterIp or nodeport IP of the service. 
* Ingress controller route data to correct backend name (ingeress resource)  which is(a load balancer here)
* Inisde ingress resource we define load balancer as our target, it could be clusterIp as well. This lb or clusterIp called service,
* To create service, need to define `Service resource manifest`, loadbalance, clousterIp or nodeport

```javascript
apiVersion: v1
kind: Service
metadata:
  name: my-loadbalancer-service
spec:
  selector:
    app: my-app   # Match the labels of your Pods
  ports:
    - protocol: TCP
      port: 80     # Port on the Service
      targetPort: 8080  # Port on the Pods
  type: LoadBalanceri # NodePort , remove type it would be clusterIp
```
* service is responsible to routes request to one of the pods that matches the selector in LB or services, it could select pods by labels or environments 
* ClusterIp: is default which allows internal IP address, that allows comunication between pods inside cluster
* LoadBalancer: exposes k8 service externally, which communicate with client external LB. If you run it on premise it works as nodeport and a port is open now, then you need to use any of the node's IP addresses along with the allocated NodePort
* NodePort: 

