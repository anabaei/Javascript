# Heroku 

<details>
      <summary> simple node on Heroku </summary>

* Connect heroku to [go daddy](https://www.youtube.com/watch?v=kKGSGT7mSnQ)         
* Run nodejs simple on heroku like [sfucall](https://github.com/anabaei/JavaScript_Notes/tree/master/sfucall)
* Key: name app.js to server.js then vola!
</details>
<details> 
  <summary> Heroku connect to PostgrSQL</summary>

* First download it
```javascript
brew tap heroku/brew && brew install heroku
```
* First make sure you already created postgres in your app on heroku then it goes to find it at `process.env.DATABASE_URL` 
```javascript
// connection.js 

import Sequelize from 'sequelize';

let connection = null;
// postgres exist?
 if(process.env.DATABASE_URL){
	connection =  new Sequelize(`${process.env.DATABASE_URI}?sslmode=require`, null, null, {
		url: process.env.DATABASE_URI,
		dialect: 'postgres',
		logging: false,
		dialectOptions: {
		  ssl: {
			require: true,
			rejectUnauthorized: false, // very important
		  }
		}
	  });
}
else {
	// the application is executed on the local machine
	connection= new Sequelize('postgres://localhost:5432/aaa', { dialect: 'postgres' });
}
connection.authenticate().then(() => {
	console.log('Connection to db established successfully');
});
export default connection;
```

</details>
<details> 
  <summary> Heroku connect to MySQL </summary>
 
 
* followed this guy [this](https://railsifyme.wordpress.com/2013/05/21/import-mysql-tables-to-heroku/) and the offical [source](https://devcenter.heroku.com/articles/cleardb#the-complete-tutorial) and [video](https://www.youtube.com/watch?v=mBCH9OTVaGw)
* An example of [working](https://github.com/anabaei/Node_LMS_APP) app connected to mysql on Heroku
* From heroku go to add-on and find clearDbmysql and install it then to make sure there is 
 ```ruby
 heroku config
 // it returns
 mysql://user:password@xxxxx.cleardb.com/yourdababsename?reconnect=true
 ``` 
* Dump data into a file from local mysql (I dont have password)
```shell
mysqldump -u username -h localhost databaes_name table_name > file_name.sql
// with password just add -p ppassword followed by username
```
* Then 
```shell
mysql --host=xxxxx.cleardb.com --user=user --password=password --reconnect heroku_xxxxxx < file_name.sql
```
* To check if this works or not download [sequelpro](https://sequelpro.com/download) and literally connect to mysql heroku 
* To connect localhost put
```java
host: 127.0.0.1
user: root
password: pass
```
* leave empty port number and database name
### MySQL
* Create new user
```java
create user amir@localhost;
```
```sql
create database aml;   // create database
GRANT ALL PRIVILEGES ON * . * TO 'amir'@'localhost';
```
* 
```java
create table allusers (allnames varchar(255));
```

### connect Node

```ruby
var db_config = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "aml"
  }
connection = mysql.createConnection(db_config); 
```

### Keep connection
* Put below code before app.gets as a middleware to keep connecting to server 
```ruby
var db_config = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "aml"
  }
  
  var connection;
  
  function handleDisconnect() {
    connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                    // the old one cannot be reused.
  
    connection.connect(function(err) {              // The server is either down
      if(err) {                                     // or restarting (takes a while sometimes).
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
      }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
                                            // If you're also serving http, display a 503 error.
    connection.on('error', function(err) {
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
        handleDisconnect();                         // lost due to either server restart, or a
      } else {                                      // connnection idle timeout (the wait_timeout
        throw err;                                  // server variable configures this)
      }
    });
  }
  
  handleDisconnect();
```
</details>
<details>
  <summary> CRUD MySQL NodeJS </summary>
  
  
  * To create a table we have it in
  ```javascript
  app.get('/migrate', (request, response) => { 
  var drop_sanction = "DROP TABLE IF EXISTS sanction_list";
  doSql(drop_sanction, "drop sanction");
  
  var create_address = " CREATE TABLE address (source VARCHAR(255), info_id INT, "
   +"country VARCHAR(255), "
  +"city VARCHAR(255), "
  +"street VARCHAR(255), "
  +"postal_code VARCHAR(255), "
  +"country_code VARCHAR(255), "
  +"region VARCHAR(255), "
  +"note Text, "
  +"street_2 VARCHAR(255))";
  
  doSql(create_address, "created address");  /// where connection is alreay defined on above 
   function doSql(table, message)
  {
    connection.query(table, function (err, result) 
    {
      if (err) console.log(err);
      else {console.log(message);}
    });
  }
  
  
   response.send(`created`) 
})
  ```
  * To update 
  ```javascript
  let country = "UPDATE info ,( SELECT entity_id, country_name, country_code FROM au_dfat_sanctions_nationalities) AS src"
+" SET info.country = src.country_name"
+" WHERE info.source = src.entity_id"

doSql(country , "info country updated");
  ```
  * mysql subquery[link](http://www.mysqltutorial.org/mysql-subquery/)
  * Inorder to update we have
  ```javascript
   update info ,(select id, source from info where alias = 'no') as src set info.parent = src.id where info.source = src.source;
  ```
  * Change the password for user 
  
  ```javascript
  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
  ```
  </details>
   <details>
    <summary> Mongo and Heroku </summary>
    

  * First make sure on heroku dashboard select resource `mlab MongoDB`. You can use `MONGOLAB_URI` as variable to connect to mongo as `process(process.env.MONGOLAB_URI)`  app listens on `process.env.PORT` 
  ```javascript
  app.listen(process.env.PORT || 3000);
  ```
  ```javascript
    const mongoose = require('mongoose');
    require('mongoose').connect('mongodb://yourusername:yourpassword@ds121825.mlab.com:11025/yourmongodb', { useNewUrlParser: true });

    var TodoSchema = new mongoose.Schema({
      completed: Boolean,
      name: String
    });

    var TodoModel = mongoose.model('Todo', TodoSchema); 
    module.exports = TodoModel;
  ```
  * Find an example [here](https://github.com/anabaei/dialuge/tree/start_heroku)
   </details>
  
   <details>
    <summary> Join vs Unio </summary>
  
  * Join combine two tables by adding columns
  * The UNION operator is used to combine the results set of two or more SELECT statements
  * If we have `users` and `post` tables as below
  * ![post](https://user-images.githubusercontent.com/7471619/51446598-3f72c080-1cc9-11e9-8cdb-41da2559a16d.png)
  * ![users](https://user-images.githubusercontent.com/7471619/51446611-73e67c80-1cc9-11e9-98df-7950be4a30d0.png)
   * Then `join` created for each contact in user table a column of post 
   * `2*1 = 2 `, with 4 users and 3 posts we would have `3*4=12` rows 
   ![images](https://user-images.githubusercontent.com/7471619/51446631-a001fd80-1cc9-11e9-8770-f848ecd4754a.png)


   </details>
  
<details>
<summary> DNS GoDaddy and Heroku</summary>

* on go daddy
```
type  host value 
CNAME	www	yourApp.herokuapp.com
a      @  ip of www.nabaei.com   // to use dns name without www
```
* To get ip address of default dns ping it 
```
ping www.nabaei.com
```
* New solution:
```javascript
heroku login
heroku host www.nabaei.com
heroku domains:add www.nabaei.com
```
* At settings heroku add domain namaes as
```javascript
*.nabaei.com
nabaei.com
www.nabaei.com
```
* Then inside goDaddy define CNAME and name: www and value: mynew.heroku.app
* Then to make sure run in your terminal app
```javascript
 host www.nabaei.com
```
* It should return a list of hosts!
</details>
...