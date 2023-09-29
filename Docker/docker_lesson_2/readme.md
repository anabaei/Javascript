

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

