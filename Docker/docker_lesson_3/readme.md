
### Docker Compose
* Docker compsoe is a file to pull different images and create containers in the same network, network name is assigned when docker compose run and there is no need to specify it manually 
* When docker compose runs different containers, these containers can talk with each other and find each other by name
* We can expost host port number, on the running containers and check them at localhost//portnumber, 
* On Vms, we can define the actual domain name
* If Vms are behind proxy server, we need to speficy it at red hat configuration on VMs
* 

### K8 Services 
Main K8 services are three types(first three), all type called `service` but with slight difference in a way it expose to outside or not
* `clusterIP` This is the default service type. It's used for communication between services within the same cluster. 
* `NodePort` This expose the service on a static port on each node's IP. When we need to access a service externally from outside. 
* `LoadBalancer` Expose external pods of the service to a public IP
* `ExternalName` expose to an external DNS
* `Ingress` Ingress is not exactly a service, it provides more advance routing. 
```bash
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  selector:
    app: web
  ports:
    - protocol: TCP
      port: 80  # The port to expose on the service
      targetPort: 80  # The port your "web" containers are listening on
  type: NodePort  # Use NodePort to expose the service on each node

```

#### K8 Deployment Service (docker compose replacement)
* When you write k8 service, no need to write docker compose, so it is replancement. So First step is to write k8 Deployement Service, below is an example
* When you create a Kubernetes Deployment, you are defining how your application should run within the Kubernetes cluster
* Below would run two containers, one web with 3 replicas  and another is db with 2 replicas
```bash
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-db-deployment
spec:
  replicas: 3  # Adjust the number of "web" replicas as needed
  selector:
    matchLabels:
      app: web-db
  template:
    metadata:
      labels:
        app: web-db # this is label we add to pods 
    spec:
      containers:
      - name: web
        image: craftcms/nginx:8.0-dev
        ports:
        - containerPort: 8080
        env:
        - name: PMA_HOST
          value: db
        - name: PMA_USER
          valueFrom:
            secretKeyRef:
              name: phpmyadmin-secret
              key: PMA_USER
        - name: PMA_PASSWORD
          valueFrom:
            secretKeyRef:
              name: phpmyadmin-secret
              key: PMA_PASSWORD
  replicas: 2  # Adjust the number of "db" replicas as needed
      - name: db
        image: mysql:5.7  # Choose a MySQL version
        ports:
        - containerPort: 3306
        env:
        - name: MYSQL_ROOT_PASSWORD
          valueFrom:
            secretKeyRef:
              name: mysql-secret
              key: MYSQL_ROOT_PASSWORD
        - name: MYSQL_DATABASE
          valueFrom:
            secretKeyRef:
              name: mysql-secret
              key: MYSQL_DATABASE
        - name: MYSQL_USER
          valueFrom:
            secretKeyRef:
              name: mysql-secret
              key: MYSQL_USER
        - name: MYSQL_PASSWORD
          valueFrom:
            secretKeyRef:
              name: mysql-secret
              key: MYSQL_PASSWORD

```
* Below is the command to run it
```bash
kubectl apply -f web-deployment.yaml
```
#### K8 Service, Expose (LB vs Ingress)
* After creating instances of replicas and running them, need to manage external access, ingress.
* We can define Loadbalncer service to address data to those pods
```bash
apiVersion: v1
kind: Service
metadata:
  name: web-loadbalancer
spec:
  selector:
    app: web-db
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
  type: LoadBalancer

---
apiVersion: v1
kind: Service
metadata:
  name: db-loadbalancer
spec:
  selector:
    app: web-db
  ports:
    - protocol: TCP
      port: 3306
      targetPort: 3306
  type: LoadBalancer
```

* Ingress is a more advance and is like below, first need to install ingress contorller like `nginx` 
```bash
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
spec:
  rules:
  - host: your.domain.com  # Your  IP of proxy service if is behind your ip
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: web-service
            port:
              number: 80
```
#### Next step
* After creating loadbalancer, k8 provision external IP address for this service. `kubectl get services` command to view the external IP 
* Ensure that your VM's firewall settings and security groups (if applicable) allow incoming traffic on the ports used by your services. Typically, for HTTP traffic, it's port 80, and for HTTPS, it's port 443. For the "db" service, make sure it's adequately secured, and consider limiting access to trusted sources.
* `Monitoring and Logging` Kubernetes provides tools and integrations for monitoring and logging, including `Prometheus`, `Grafana`, and `Elasticsearch`.
* Implement backup and recovery strategies for your applications and data. This is critical to ensure the availability and resilience of your services.


## Networking With Docker
* Each docker can have its own network, if we need our containers talk with each other, then we can tell the network name as below
```
docker run --name mysql -d \
    -e MYSQL_ROOT_PASSWORD=change-me \
    -v mysql:/var/lib/mysql \
    --network example-app \
    mysql:8

```
* And here is the server which is using the image api-server and can comunicate with container throw the same network
```
docker run --name api-server -d \
    -p 80:80 \
    --network example-app \
    example-api-server:latest

```
* Docker-compose its own create a network and manually name it, so in docker-compose there is no need to create network


### Actual Questions



