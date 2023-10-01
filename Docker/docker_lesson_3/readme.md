## Network
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

