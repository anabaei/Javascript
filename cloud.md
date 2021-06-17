
## Amazon

<details>
         <summary> EC2 instance </summary>

* Login to aws console and create new EC2 instance. Use ssh to connect [Tutorial](https://www.youtube.com/watch?v=J8sdi-JtTlE&list=PLyesZnaOymnyF7jiHjQkcXJINmtXXG1rt&index=8)
* Install Node js using this [link](https://ourcodeworld.com/articles/read/977/how-to-deploy-a-node-js-application-on-aws-ec2-server)
* Create  RDS in aws and connect it to EC2 [tutorial](https://www.youtube.com/watch?v=muuLF4jrAXk)
* Install postgres on your EC2 [link](https://betterprogramming.pub/how-to-provision-a-cheap-postgresql-database-in-aws-ec2-9984ff3ddaea)
*  

</details>

<details>
         <summary>Deploy Next.js to AWS amplify</summary>

* it is easy way to host an app on aws. [link](https://dev.to/dabit3/5-minute-tutorial-deploying-a-next-app-with-aws-amplify-hosting-5199)

```javascript
amplify publish
```
</details>

<details>
         <summary>S3</summary>

#### FIRST
* Create `upload.js` file as
```javascript
var aws = require('aws-sdk');
var multer = require('multer');
var multerS3 = require('multer-s3');
const config = require('../config/config.json');

aws.config.update({
	secretAccessKey: config.Secret_Access_Key_S3,
	accessKeyId: config.Access_Key_ID_S3,
	region: config.REGION_S3
});

var s3 = new aws.S3();

var upload = multer({
	storage: multerS3({
		s3: s3,
		bucket: 'youBucketName',
		metadata: function(req, file, cb) {
			cb(null, { fieldName: file.fieldname });
		},
		key: function(req, file, cb) {
			cb(null, Date.now().toString());
		}
	})
});
module.exports = upload;
```
* Alternatively if you want to save into folder `amirkhan`
```javascript
	key: function(req, file, cb) {
			cb(null, 'amirkhan/'+Date.now().toString());
```
* you can use `req.params.postid` to make folders for postids
### Second
* on rout level define this
* make `formData` with `file` name
```javascript
const upload = require('../../services/upload.js');

router.post('/uploadFile', upload.single('file'), async (req, res, next) => {
	singleUpload(req, res, function(err) {
		return res.json({ imgUrl: req.file.location });
	});
```
##### OR
* make `formData` with `image` name file attach
```javascript
const upload = require('../../services/upload.js');
const singleUpload = upload.single('image');

router.post('/uploadFile', async (req, res, next) => {
	singleUpload(req, res, function(err) {
		return res.json({ imgUrl: req.file.location });
	});
```
### Third
* Also make sure your bodyparser is set as
```javascript
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
```

* Here is a [tutorial](https://www.youtube.com/watch?time_continue=636&v=ASuU4km3VHE&feature=emb_title)
* To save images. Need `s3` as storage and `IAM` to keep credentials
* Create bucket
* Create IAM: IAM -> USERS -> AddUSER -> check programming access -> continue press next ->get accesss UID and secret Id
* copy bitbucket policy as [source](https://github.com/keithweaver/python-aws-s3) and change the `AWS` iam with what you find at `console login-> users -> user ARN`
* Change resouce with what we have on top
```javascript
{
    "Version": "2012-10-17",
    "Id": "Policy1488494182833",
    "Statement": [
        {
            "Sid": "Stmt1488493308547",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::281979644754:user/sample-user"
            },
            "Action": [
                "s3:ListBucket",
                "s3:ListBucketVersions",
                "s3:GetBucketLocation",
                "s3:Get*",
                "s3:Put*"
            ],
            "Resource": "arn:aws:s3:::img-bucket-00123"
        }
    ]
}
```
* Paste above after changing the ARN to `s3->bucket->permission-> policy`
* Change `resource` with what we have on top of bucket at  `Bucket policy editor ARN: ar`
### Set Cors
* Copy from below and pased in `s3-> bitbucket-> permissions->cors configuration`
```javascript
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
  <CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedMethod>POST</AllowedMethod>
    <AllowedMethod>PUT</AllowedMethod>
    <MaxAgeSeconds>3000</MaxAgeSeconds>
    <AllowedHeader>Authorization</AllowedHeader>
  </CORSRule>
</CORSConfiguration>
```
### User Policy
* Go to `IAM -> User -> permissions -> Add inline plicy` and pasete below
```javascript
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListAllMyBuckets",
                "s3:PutObject",
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::*"
            ]
        }
    ]
}
```
* it is pretty loose ploicy. By changing resouce we can define access to specific resource
### TEST Connection
* You should be able to see the connection as
```javascript
const AWS = require('aws-sdk');
router.get('/', async (req, res, next) => {
	let s3bucket = new AWS.S3({
		accessKeyId: 'A****************L',
		secretAccessKey: 's*********************',
		Bucket: 'your-bucket-name'
	});
	s3bucket.listBuckets(function(err, data) {
		if (err) {
			console.log('Error', err);
		} else {
			res.json(data);
		}
	});
});
```
</details>
<details>
<summary> Upload File</summary>

* You need to get `multer` package to have a file attachment in your request as [here](https://github.com/expressjs/multer#readme)
* Then use it as a middleware for a single file as
```javascript
router.post('/uploadFile', upload.single('nameOfThekey'), async (req, res, next) => {
    console.log(req.file)
```

## An upload on React

```javascript
const User = {
	createNew(attributes, userId, pictureFiles) {
		let data = new FormData();
		data.append('file', pictureFiles[0]);
		console.log(pictureFiles);
		return fetch(`https://cors-anywhere.herokuapp.com/${DOMAIN}/uploadFile/${userId}`, {
			headers: { 'Access-Control-Allow-Origin': '*' },
			method: 'POST',
			body: data
		})
			.then((res) => res.json())
			.catch((error) => console.log('Error= ' + error.message));
	},
  getAll() {
		return fetch(`${DOMAIN}/user`, {
  ....
        }}
}
export { User };
```
* Where you call above utilities with on drop as using `ImageUploader`
```javascript
import ImageUploader from 'react-images-upload';

	onDrop(pictureFiles, pictureDataURLs) {
		this.setState({
			pictures: this.state.pictures.concat(pictureFiles)
		});
		let formData = new FormData();
		formData.append('file', pictureFiles);
		User.createNew({}, 3, pictureFiles)
			.then((res) => {
				console.log(res + 'saved!!');
			})
			.catch((error) => console.log('Failed: ' + error.message));
		console.log(this.props);
	}
    	render() {
		return (
			<div>
				{this.state.postId}
				<ImageUploader withIcon={true} buttonText="Choose images" onChange={this.onDrop} />
			</div>
		);
	}
```
</details>
<details>
       <summary>AWS Command lines</summary>

* Here is basic [required](https://czak.pl/2015/09/15/s3-rest-api-with-curl.html)
#### Get
* To get a file or image from s3
```javascript
 curl -o GET https://bucketName.s3.amazonaws.com/imageName.jpg
```


#### ACL
* Returns the access control list ([ACL](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html)) of an object [here](https://czak.pl/2015/09/15/s3-rest-api-with-curl.html)
```javascript
curl -v https://bucketName.s3.amazonaws.com&acl

```
#### ls s3
* To see list of buckets we can have
```javascript
aws s3 ls s3://bucketName
```

### Partial retrieves
* This is how you can get partial of files
```javascript
curl -r  0-100000  https://myBucketAddress.s3.amazonaws.com/img.jpg  -o part4.jpg
```

</details>


## Kubernetes

* Never delete deployment files. When server is down or wrong remove `pods` files
* `Elasticsearch cluster` is a group of one or more Elasticsearch nodes instances that are connected together. The power of an Elasticsearch cluster lies in the distribution of tasks, searching and indexing, across all the nodes in the cluster.
<details>
<summary> Elastic Search </summary>

* Elastic stack or ELK(old name) includes elasticsear, logstash, kibana and beats. It is free open source software.
* We use it as backend monitoring repository.

* Web based dashboard and reliable alarming configuration for proactiving alert problems before anyone else knows there is an issue.

* `ELASTICSEARCH` is a distributed scaleable document database.
* `LOGSTASH` is an open source data collection engine. It is designed to enhance data and then forwarded to backend enhanced facilities. Data comes from different locations and send out in digestable junks.
* It is a tool for aggregating incoming logs and messages. It processing them by modifying or supplementing log data. we can send directly data to elasticsearch but it can lead to inconsistent data. By passing logs to logstash first, we have opportunately to clean it up, fix formating add additional data and then forwarded directly to elasticsearch.
* `Kibana` is a web-based front end that works easily with elasticsearch. It easily grab the data with visualizing charts
* `Beats` are lightweight utilities for reading logs from variety of sources and usually send to logstash or elasticsearch directly. Currently we have `Filebeat` to text log files, `Metricbeat` to OS and applications and `Packetbeat` for networking monitoring. We also can have our own beat `Libbeat` utility using `goLang`

* `Alerting` helps track conditions based on Elasticsearch. Continually monitors log data for pre-configured conditions. It supports email notification and Slack
</details>
<details>
<summary> ElasticSearch install  </summary>

* `vm.max_map_count` is a system level environment variable that tells to kernel(core of linux OS, core interface between a computer’s hardware and its processes) how much memory meps(mmap facility allows direct memory access to a user space device, then it can use mmap() system call to associate with a device) it can use.
* `Filebeat` Togather data from monitoring systems and applications we are going to use   `Beats` application from elastic. The respected `beats` application reads data, forwarded information to logstash server and it would be massage and augment it then send to elasticsearch server. And then data can be graph and turn into usefull information using kibana.
### Build Elasticsearch Cluster
* First you should build a cluster. Typical elasticsaerch installation comprise many nodes to form a cluster which bounces up the work and storage of the indices. Currently to make it simple we have one node on cluster.
* `Install elasticsearch`:
```javascript
ifconfig // install java jvm
java // gives you list of available jdks to install
mkdir pkg
cd pkg
wget https://artifacts.elastic.co/download/elasticsearch/elasticsearch-7-2-1
dpkg -i nameOfWhatYouDowloaded.deb // it unpacked and place all files where they need to be
```
* Modify elasticsearch config to alter defaults:
```javascript
vi /etc/elasticsearch/elasticsearch.yml
//inside file changes
cluster.name: name-of-monitoting
node.name: make-node-name-to-host-name-01
network.host: 192-... // our ip address. It binds elasticsearch to this ip address and it would be accessible from outside connections
```
* Elasticsearch uses extensive amount of memory maps so we need to increase the default number.
```javascript
cat /proc/sys/vm/max_map_count
sysctl -w vm.max_map_count=262144
service elasticsearch start
curl http://192....:9200 // to make sure it is working
```
* To run elasticsearch automatically on each boot
```javascript
systemctl enable elasticsearch
```
*
</details>
<details>
<summary> Logstash install  </summary>

* `Logstash` is open source data collection engine. It design to ingest data usually logs. Enhance or modify data and forward it to frontend.
Three main configurations:
```javascript
input{
// read apache logs, log4j files etc..
}
filter{
// describe what to do with dataa, should we parse or ignore
}
output{
// tell where to send data in our case elasticsearch
}
```
* Two main filters are `grok` and `geoip`. `grop` is using for parsing unstructured data and turn it into structured data. For example to parse a segment of a log line and turn it into structured data
```
93.111.32.12 - - [08/Jan/2012] "GET /images"
```
Grok can convert it to ip, data and action coma
* Install `LOGSTASH`. Need java and then download it directly from elastic company
```javascript
//TO FIND YAML:
cd /etc/logstash
cd /etc/elasticsearch
cd /etc/kibana

cat /etc/issue.net
mkdir logstash
cd logstash
// same java jvm needs when you installed elasticsearch
apt-get install openjdk-8-jre-headles // install java jvm, now install logstash
wget -gO https://artifacts.elastic.co/GPG-KEY=elasticsearch | sudo apt-key add -  // it adds GPG signing key to our keychain
echo "deb https://aritifacts.elastic.co/packages/7.x/apt stable main" | tee -a /etc/apt/sources.list.d/ // add elastic package sources to apt-source list.
apt-get update && apt-get install logstash
```
* To confirm it is working
```javascript
// invoke logstash by binary,  the 192... address is elasticsearch server address
cd /usr/share/logstash/
bin/logstash -e 'input {stdin{}} output {elasticsearch {hosts=>["192...."]}}' // to test it we have input and output without filters
then type a message and then check the endpoint with potman endup with wildcar GET http://192.2421:9200/logstash-*/_searh
```
* To run in background use system command control
```javascript
service logstash start
```
### Install kibana
* Is easy and simple, then go to `/etc/kibana/kibana.yml` and change elasticsearch url as where your elasticsearch running

```javascript
server.host: "82191.21.2"
server.name: "kibana"
elasticsearch.url: "http://192.12,223..:9200"
```
```javascript
service kibana start
```
</details>
<details>
<summary>  Installing a Node on Elasticsearch </summary>

* Install elasticsearch
```javascript
cat /etc/os-release
cat /etc/hostname
```
* Install java (the only pre request to install elastic search)
```javascript
add-apt-repository ppa:webupd8team/java //add java repository first
apt-get update
apt-get install oracle-java8-installer // apt automatically install some dependencies
java -version
```
* Then you can make wget to pull down
```javascript
wget https://download.elasticsearc......
dpkg -i nameoffile.deb
service elasticsearch start// restart
curl http://localhost:9200  //to check elasticsearch running
// nod
```
* Congrats you created your first node in elasticsearch.
### Where Are Important files
* In `/etc/elasticsearch`
* `bin` contains executeable files that starts elasticsearch service
* `config` contains configuration files
* `data` is where elasticsearch stores the file systems
* `lib` contains libraries and files
* `logs` contains text logs from elasticsearch
* `plugins` any external plugins

```javascript
sudo su // connect as root
node.name: nameOfNode // in elasticsearch.hml
cluster.name: nameOfCluster
```
</details>
<details>
      <summary>Extra Node Planing</summary>

* A well planed elasticsearch cluster is a stable well performing elasticsearch cluster.
* Typical SQL databases are designed like one db residing on a server with enough resources interms of RAM,CPU and Disk Space. And you have replicate server2 to help with high load.
* Elasticsearch is quite different than above model. It is a distributed system and scale horizontally means to add more nodes to assistant, such as adding new computer to a distributed application. These nodes automatically take some of the loads of reads and writes.
### Index, Shards, Replica
* In ES data store at index(imaging a database). A logical name of data that you can query. Indexes are stored in `shards`. You must have at least one shards. Also One Index can live on multiple shards. We can allocate one index to several shards
* Replica is an exact copy of a shard and can also move among nodes.
### New Node brings rebalancing
* When adding a new node, it automatically joins as a peer to cluster. Nodes gossip to exchange information and therefore some shards may move to new nodes in order to balance the amount of data that stored and severd on each server
* If any nodes went down, rebalancing replica their data into remaining nodes to avoid missing any data.
### Master,Data and Client Node
* We can give certain function to each node.
### HOW MANY NODES?
* `Capacity planing` depends on the size and numbder of documents on cluster. Insert bunch of document on a node to exhaust the server. Then for example if it takes 4 seconds to get response from node, then you need at least 4 nodes to share loads to keep response time under 1 second.

* `Master` Nodes are very important. There is a setting in yaml file as. When there is one master and it is down, elasticsearch choose one then if the old one back then it conflict with the new one, that is why we should have specific nodes only being master.
```javascript
minimum_master_nodes: x
```
* For example, if there are 10 nodes on cluster and all are allowed to be master then number(quorum) is `6` which is `10/2 +1`
* Data and client nodes could be 8 and 4 respectively.
* Client nodes takes direct queries.
</details>
<details>
      <summary>Configuration:</summary>

* At `elasticsearch.yml`
```javascript
cluster.name: "somename"
node.name: "somenameuniquename" // examples es-mater-0x ex-data-1x
minimum_master_nodes: 2 // it means we want two eligible nodes on top of the main master(total is 3)

// it tells ES waits at least 8 nodes presents and then wait for 9 or 3 m to pass before recovery.
gateway.recovery_after_nodes: 8 // tells how many nodes we need to recove
gateway.expected_nodes: 9 // total there are 9
gateway.recover_after_time: 3m //

// in order to keep specific nodes on a cluster you can add this on all nodes
discovery.zen.ping.unicast.hosts: "host1", "host2",....
discovery.zen.ping.multicast.enabled: false // to disable automatically add the rest of nodes to our cluster,

//set up roles for each node
//MASTER
node.master: true
node.data: false //disabllow any data or shards to store on it

// CLITENT
node.client: true
node.data: false // no pickup shards

// DATA
node.data: true
node.client: false
node.master: false
http.enabled: false // data node not allow to be queried

bootstrap.mlockall: true // to allow swaping
EXPORT ES_HEAP_SIZE=32g // HEAP SIZE

MMAP: unlimited // if os allows
FILE Descriptors: 64,000 // minimum
```
* `JVM Heap` is a memory dedicated to java store objects before its garbage collector collect them. JVM HEAP ES is 1 GB which is too small, it is suggested half of memory 32GB for JVM HEAP not more than 32.
* Notice `path.data` `path.logs` and `path.plugins` should be use only if you download from zip files. in other cases we don't need to assign them.
* File Descriptors: how many file can a process use?


### Example
* System checks
```javascript
vi /etc/hostname   //change host names
unlimit -n  // find how many default is unlimited
unlimit -m  // you should see unlimit
top // show rams
cat /proc/meminfo
curl http://localhost:9200 // check ES nodes
```
*

#### To remove problem about JVM mapping memory around on the heap.
*  Increase process limits per user. we allow all users or processes to use 64000 files by
```javascript
// at the bottom of file
vi /etc/security/limits.conf
*  soft  nofile 64000
*  hard  nofile 64000
root  soft  nofile 64000
root  hard  nofile 64000
```
* Edit
```javascript
vi /etc/pam.d/common-session
// under pam_permit.so
session required pam_limits.so
```
*
```javascript
vi /etc/pam.d/common-session-noninteractive
// under pam_permit.so
session required pam_limits.so
```
* Assiging heap based on ram
```javascript
RAM/2 = heap //formula we should follow
// add system level variable
vi /etc/environment
add ES_HEAP_SIZE="2g"   // if the ram is 4g
```
### Create Master Node
* on elasticsearch.yml file
```javascript
node.name: es-mater-01
node.master: true
node.data: false
// you may dont need this last part
network.host:  somenumbers// address to bind or ES to access it remotely

// set multicast settings that nodes can find each other
discovery.zen.ping.multicast.enabled = false
discovery.zen.ping.unicast.hosts = ["es-client-01","es-master-02"]
```
* Now restart ES
### On client add same
```javascript
discovery.zen.ping.multicast.enabled = false
discovery.zen.ping.unicast.hosts = ["es-client-01","es-master-02"]
```
</details>

<details>
    <summary>Index Strategy</summary>

* We know indexes are stored into shards or multiple shards and ideally multiple replicas.
### Create an Index
* create knowledge_base index as
```javascript
POST http://namofcluster/knowledge_base
```
*
</details>


```javascript
ls -lh filename //gives the size of the file
ls -lah
ls | wc -l // read number of dirs in one folder
```


Changes:
on master: ip-10-10-0-100
1- elasticsearch.yml
add clyster name, nodename

on client: ip-10-10-6-222
1- elasticsearch.ym
2- vi  /etc/security/limits.conf
3- /etc/pam.d/common-session
session required                        pam_limits.so

ps -ef | grep elas


### AWS Lambda
* you can resize images from [lambda](https://levelup.gitconnected.com/resize-an-image-in-aws-s3-using-lambda-function-dc386afd4128)
* [here](https://www.youtube.com/watch?v=Z5gm80l7Nts)

### AWS Storage
* Storage on aws means everyone with suffient permission can upload and download data to that. It is cheap, fast and reliable.
* AWS S3 is an object storage, you can't database server or OS there you need EBS for them.
* Good reference to see how write a good [S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/dev/optimizing-performance.html)
#### Features
* Build infrastructure for videos,photos or music upload and download
* Provide data backup for other services like EBS(ebs is block storage these are virtual hard drive we can attach to ec2 machine and take backups. these backups called snapshots) snapshots and AMI templates
* We can host static website on S3. Then we can have a backend on lambda s3
* Access control rules apply to each bucket
* Objects are the entities stored in Amazon S3. It consist of object data and metadata.(data would be the content of the image file and metadata could be owner name, name or other properties of the object)
* Increase [Amazon performance](https://docs.aws.amazon.com/AmazonS3/latest/dev/optimizing-performance-guidelines.html#optimizing-performance-guidelines-combine)
### Terms
* We need to choose `region` for each bucket to optimize latency, minimize costs or address regulatory requirements(s3 is cheaper in few regions). If we have a regulation to keep data on the same country as they live.(European privacy roles different than americans)
* Objects stored in a region never leave that region unless we explicitly transfer them(this protect our data from being accidently move)
* AWS can handle 3500 put/post requests per perifx per seconds on each buckets [here](https://docs.aws.amazon.com/AmazonS3/latest/dev/optimizing-performance.html)
