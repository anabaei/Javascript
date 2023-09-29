

#### Variables

* Build argument only available during build like aws region
* Environment variable are available all the time inside the container, same action when you inside vm use export env_var=something
* you can have args and environemnt variable and files as below
```
args:
  - region=us-east
environment:
  - runtime_env=env
env_file:
  - ./.env 

ports:
 - hostport: containerport
``` 

#### Volumes
* Is the place your container save data, you can specify the power of read and write by adding it after target 
```
    volumes:
	 - ./mysql:/var/lib/mysql:rw
   	source colon target colon mode
 	- anyname:/docker-entrypoint-initdb.d:rw
   	docker entrypoint is mysql default, 

volumes:
 anyname:
```
* name volume and add this name to tell get data from it
* `docker compose down --volumes` it delete the volume
* If you don't mention a name, the it create a volume by a random name  everytime docker-compose up 
* 

#### Depends on
* depends on require when you want a service run before another one, like mysql and web, need to add depends_on: mysqldb then it runs database first in docker compose


#### Profile
* profile key word on each service tell won't run those services unless you specify the name of profile, 

```
storefornt:
  build: .
  ports:
    - "80:80"
  depends_on:
    - database
  profiles:
    - store_front_service 
```
 * to run above need to run as `docker-compose --profile store_front_service up`
 * if don't mention then it would be default profile
 






