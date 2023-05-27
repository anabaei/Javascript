

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