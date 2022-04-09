## Kubernetes

- Kubernetes are orchestering containers which are running instances of applications that are defined in image
- Registeries use to share container images, a famous registery is `docker` hub. Mayn people think container as docker container
- `LXC` is linux native container and has been along for long time and docker is based on LXC container

## k8 projects status

- K8 is also called a CNCF project and K8 includes projects.
-

- Never delete deployment files. When server is down or wrong remove `pods` files
- `Elasticsearch cluster` is a group of one or more Elasticsearch nodes instances that are connected together. The power of an Elasticsearch cluster lies in the distribution of tasks, searching and indexing, across all the nodes in the cluster.
<details>
<summary> Elastic Search </summary>

- Elastic stack or ELK(old name) includes elasticsear, logstash, kibana and beats. It is free open source software.
- We use it as backend monitoring repository.

- Web based dashboard and reliable alarming configuration for proactiving alert problems before anyone else knows there is an issue.

- `ELASTICSEARCH` is a distributed scaleable document database.
- `LOGSTASH` is an open source data collection engine. It is designed to enhance data and then forwarded to backend enhanced facilities. Data comes from different locations and send out in digestable junks.
- It is a tool for aggregating incoming logs and messages. It processing them by modifying or supplementing log data. we can send directly data to elasticsearch but it can lead to inconsistent data. By passing logs to logstash first, we have opportunately to clean it up, fix formating add additional data and then forwarded directly to elasticsearch.
- `Kibana` is a web-based front end that works easily with elasticsearch. It easily grab the data with visualizing charts
- `Beats` are lightweight utilities for reading logs from variety of sources and usually send to logstash or elasticsearch directly. Currently we have `Filebeat` to text log files, `Metricbeat` to OS and applications and `Packetbeat` for networking monitoring. We also can have our own beat `Libbeat` utility using `goLang`

- `Alerting` helps track conditions based on Elasticsearch. Continually monitors log data for pre-configured conditions. It supports email notification and Slack
</details>
<details>
<summary> ElasticSearch install  </summary>

- `vm.max_map_count` is a system level environment variable that tells to kernel(core of linux OS, core interface between a computer’s hardware and its processes) how much memory meps(mmap facility allows direct memory access to a user space device, then it can use mmap() system call to associate with a device) it can use.
- `Filebeat` Togather data from monitoring systems and applications we are going to use `Beats` application from elastic. The respected `beats` application reads data, forwarded information to logstash server and it would be massage and augment it then send to elasticsearch server. And then data can be graph and turn into usefull information using kibana.

### Build Elasticsearch Cluster

- First you should build a cluster. Typical elasticsaerch installation comprise many nodes to form a cluster which bounces up the work and storage of the indices. Currently to make it simple we have one node on cluster.
- `Install elasticsearch`:

```javascript
ifconfig // install java jvm
java // gives you list of available jdks to install
mkdir pkg
cd pkg
wget https://artifacts.elastic.co/download/elasticsearch/elasticsearch-7-2-1
dpkg -i nameOfWhatYouDowloaded.deb // it unpacked and place all files where they need to be
```

- Modify elasticsearch config to alter defaults:

```javascript
vi /etc/elasticsearch/elasticsearch.yml
//inside file changes
cluster.name: name-of-monitoting
node.name: make-node-name-to-host-name-01
network.host: 192-... // our ip address. It binds elasticsearch to this ip address and it would be accessible from outside connections
```

- Elasticsearch uses extensive amount of memory maps so we need to increase the default number.

```javascript
cat /proc/sys/vm/max_map_count
sysctl -w vm.max_map_count=262144
service elasticsearch start
curl http://192....:9200 // to make sure it is working
```

- To run elasticsearch automatically on each boot

```javascript
systemctl enable elasticsearch
```

- </details>
  <details>
  <summary> Logstash install  </summary>

- `Logstash` is open source data collection engine. It design to ingest data usually logs. Enhance or modify data and forward it to frontend.
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

- Two main filters are `grok` and `geoip`. `grop` is using for parsing unstructured data and turn it into structured data. For example to parse a segment of a log line and turn it into structured data

```
93.111.32.12 - - [08/Jan/2012] "GET /images"
```

Grok can convert it to ip, data and action coma

- Install `LOGSTASH`. Need java and then download it directly from elastic company

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

- To confirm it is working

```javascript
// invoke logstash by binary,  the 192... address is elasticsearch server address
cd /usr/share/logstash/
bin/logstash -e 'input {stdin{}} output {elasticsearch {hosts=>["192...."]}}' // to test it we have input and output without filters
then type a message and then check the endpoint with potman endup with wildcar GET http://192.2421:9200/logstash-*/_searh
```

- To run in background use system command control

```javascript
service logstash start
```

### Install kibana

- Is easy and simple, then go to `/etc/kibana/kibana.yml` and change elasticsearch url as where your elasticsearch running

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

- Install elasticsearch

```javascript
cat / etc / os - release;
cat / etc / hostname;
```

- Install java (the only pre request to install elastic search)

```javascript
add-apt-repository ppa:webupd8team/java //add java repository first
apt-get update
apt-get install oracle-java8-installer // apt automatically install some dependencies
java -version
```

- Then you can make wget to pull down

```javascript
wget https://download.elasticsearc......
dpkg -i nameoffile.deb
service elasticsearch start// restart
curl http://localhost:9200  //to check elasticsearch running
// nod
```

- Congrats you created your first node in elasticsearch.

### Where Are Important files

- In `/etc/elasticsearch`
- `bin` contains executeable files that starts elasticsearch service
- `config` contains configuration files
- `data` is where elasticsearch stores the file systems
- `lib` contains libraries and files
- `logs` contains text logs from elasticsearch
- `plugins` any external plugins

```javascript
sudo su // connect as root
node.name: nameOfNode // in elasticsearch.hml
cluster.name: nameOfCluster
```

</details>
<details>
      <summary>Extra Node Planing</summary>

- A well planed elasticsearch cluster is a stable well performing elasticsearch cluster.
- Typical SQL databases are designed like one db residing on a server with enough resources interms of RAM,CPU and Disk Space. And you have replicate server2 to help with high load.
- Elasticsearch is quite different than above model. It is a distributed system and scale horizontally means to add more nodes to assistant, such as adding new computer to a distributed application. These nodes automatically take some of the loads of reads and writes.

### Index, Shards, Replica

- In ES data store at index(imaging a database). A logical name of data that you can query. Indexes are stored in `shards`. You must have at least one shards. Also One Index can live on multiple shards. We can allocate one index to several shards
- Replica is an exact copy of a shard and can also move among nodes.

### New Node brings rebalancing

- When adding a new node, it automatically joins as a peer to cluster. Nodes gossip to exchange information and therefore some shards may move to new nodes in order to balance the amount of data that stored and severd on each server
- If any nodes went down, rebalancing replica their data into remaining nodes to avoid missing any data.

### Master,Data and Client Node

- We can give certain function to each node.

### HOW MANY NODES?

- `Capacity planing` depends on the size and numbder of documents on cluster. Insert bunch of document on a node to exhaust the server. Then for example if it takes 4 seconds to get response from node, then you need at least 4 nodes to share loads to keep response time under 1 second.

- `Master` Nodes are very important. There is a setting in yaml file as. When there is one master and it is down, elasticsearch choose one then if the old one back then it conflict with the new one, that is why we should have specific nodes only being master.

```javascript
minimum_master_nodes: x;
```

- For example, if there are 10 nodes on cluster and all are allowed to be master then number(quorum) is `6` which is `10/2 +1`
- Data and client nodes could be 8 and 4 respectively.
- Client nodes takes direct queries.
</details>
<details>
      <summary>Configuration:</summary>

- At `elasticsearch.yml`

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

- `JVM Heap` is a memory dedicated to java store objects before its garbage collector collect them. JVM HEAP ES is 1 GB which is too small, it is suggested half of memory 32GB for JVM HEAP not more than 32.
- Notice `path.data` `path.logs` and `path.plugins` should be use only if you download from zip files. in other cases we don't need to assign them.
- File Descriptors: how many file can a process use?

### Example

- System checks

```javascript
vi /etc/hostname   //change host names
unlimit -n  // find how many default is unlimited
unlimit -m  // you should see unlimit
top // show rams
cat /proc/meminfo
curl http://localhost:9200 // check ES nodes
```

-

#### To remove problem about JVM mapping memory around on the heap.

- Increase process limits per user. we allow all users or processes to use 64000 files by

```javascript
// at the bottom of file
vi /etc/security/limits.conf
*  soft  nofile 64000
*  hard  nofile 64000
root  soft  nofile 64000
root  hard  nofile 64000
```

- Edit

```javascript
vi /etc/pam.d/common-session
// under pam_permit.so
session required pam_limits.so
```

-

```javascript
vi /etc/pam.d/common-session-noninteractive
// under pam_permit.so
session required pam_limits.so
```

- Assiging heap based on ram

```javascript
RAM/2 = heap //formula we should follow
// add system level variable
vi /etc/environment
add ES_HEAP_SIZE="2g"   // if the ram is 4g
```

### Create Master Node

- on elasticsearch.yml file

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

- Now restart ES

### On client add same

```javascript
discovery.zen.ping.multicast.enabled = false;
discovery.zen.ping.unicast.hosts = ["es-client-01", "es-master-02"];
```

</details>

<details>
    <summary>Index Strategy</summary>

- We know indexes are stored into shards or multiple shards and ideally multiple replicas.

### Create an Index

- create knowledge_base index as

```javascript
POST http://namofcluster/knowledge_base
```

- </details>

## Amazon

<details>
         <summary> EC2 instance </summary>

- Login to aws console and create new EC2 instance. Use ssh to connect [Tutorial](https://www.youtube.com/watch?v=J8sdi-JtTlE&list=PLyesZnaOymnyF7jiHjQkcXJINmtXXG1rt&index=8)
- Install Node js using this [link](https://ourcodeworld.com/articles/read/977/how-to-deploy-a-node-js-application-on-aws-ec2-server)
- Create RDS in aws and connect it to EC2 [tutorial](https://www.youtube.com/watch?v=muuLF4jrAXk)
- Install postgres on your EC2 [link](https://betterprogramming.pub/how-to-provision-a-cheap-postgresql-database-in-aws-ec2-9984ff3ddaea)
-

</details>

<details>
         <summary>Deploy Next.js to AWS amplify</summary>

- it is easy way to host an app on aws. [link](https://dev.to/dabit3/5-minute-tutorial-deploying-a-next-app-with-aws-amplify-hosting-5199)

```javascript
amplify publish
```

</details>

<details>
         <summary>S3</summary>

#### FIRST

- Create `upload.js` file as

```javascript
var aws = require("aws-sdk");
var multer = require("multer");
var multerS3 = require("multer-s3");
const config = require("../config/config.json");

aws.config.update({
  secretAccessKey: config.Secret_Access_Key_S3,
  accessKeyId: config.Access_Key_ID_S3,
  region: config.REGION_S3,
});

var s3 = new aws.S3();

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "youBucketName",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});
module.exports = upload;
```

- Alternatively if you want to save into folder `amirkhan`

```javascript
	key: function(req, file, cb) {
			cb(null, 'amirkhan/'+Date.now().toString());
```

- you can use `req.params.postid` to make folders for postids

### Second

- on rout level define this
- make `formData` with `file` name

```javascript
const upload = require('../../services/upload.js');

router.post('/uploadFile', upload.single('file'), async (req, res, next) => {
	singleUpload(req, res, function(err) {
		return res.json({ imgUrl: req.file.location });
	});
```

##### OR

- make `formData` with `image` name file attach

```javascript
const upload = require('../../services/upload.js');
const singleUpload = upload.single('image');

router.post('/uploadFile', async (req, res, next) => {
	singleUpload(req, res, function(err) {
		return res.json({ imgUrl: req.file.location });
	});
```

### Third

- Also make sure your bodyparser is set as

```javascript
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
```

- Here is a [tutorial](https://www.youtube.com/watch?time_continue=636&v=ASuU4km3VHE&feature=emb_title)
- To save images. Need `s3` as storage and `IAM` to keep credentials
- Create bucket
- Create IAM: IAM -> USERS -> AddUSER -> check programming access -> continue press next ->get accesss UID and secret Id
- copy bitbucket policy as [source](https://github.com/keithweaver/python-aws-s3) and change the `AWS` iam with what you find at `console login-> users -> user ARN`
- Change resouce with what we have on top

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

- Paste above after changing the ARN to `s3->bucket->permission-> policy`
- Change `resource` with what we have on top of bucket at `Bucket policy editor ARN: ar`

### Set Cors

- Copy from below and pased in `s3-> bitbucket-> permissions->cors configuration`

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

- Go to `IAM -> User -> permissions -> Add inline plicy` and pasete below

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

- it is pretty loose ploicy. By changing resouce we can define access to specific resource

### TEST Connection

- You should be able to see the connection as

```javascript
const AWS = require("aws-sdk");
router.get("/", async (req, res, next) => {
  let s3bucket = new AWS.S3({
    accessKeyId: "A****************L",
    secretAccessKey: "s*********************",
    Bucket: "your-bucket-name",
  });
  s3bucket.listBuckets(function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      res.json(data);
    }
  });
});
```

</details>
<details>
<summary> Upload File</summary>

- You need to get `multer` package to have a file attachment in your request as [here](https://github.com/expressjs/multer#readme)
- Then use it as a middleware for a single file as

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

- Where you call above utilities with on drop as using `ImageUploader`

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

- Here is basic [required](https://czak.pl/2015/09/15/s3-rest-api-with-curl.html)

#### Get

- To get a file or image from s3

```javascript
 curl -o GET https://bucketName.s3.amazonaws.com/imageName.jpg
```

#### ACL

- Returns the access control list ([ACL](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html)) of an object [here](https://czak.pl/2015/09/15/s3-rest-api-with-curl.html)

```javascript
curl -v https://bucketName.s3.amazonaws.com&acl

```

#### ls s3

- To see list of buckets we can have

```javascript
aws s3 ls s3://bucketName
```

### Partial retrieves

- This is how you can get partial of files

```javascript
curl -r  0-100000  https://myBucketAddress.s3.amazonaws.com/img.jpg  -o part4.jpg
```

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
2- vi /etc/security/limits.conf
3- /etc/pam.d/common-session
session required pam_limits.so

ps -ef | grep elas

### AWS Lambda

- you can resize images from [lambda](https://levelup.gitconnected.com/resize-an-image-in-aws-s3-using-lambda-function-dc386afd4128)
- [here](https://www.youtube.com/watch?v=Z5gm80l7Nts)

### AWS Storage

- Storage on aws means everyone with suffient permission can upload and download data to that. It is cheap, fast and reliable.
- AWS S3 is an object storage, you can't database server or OS there you need EBS for them.
- Good reference to see how write a good [S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/dev/optimizing-performance.html)

#### Features

- Build infrastructure for videos,photos or music upload and download
- Provide data backup for other services like EBS(ebs is block storage these are virtual hard drive we can attach to ec2 machine and take backups. these backups called snapshots) snapshots and AMI templates
- We can host static website on S3. Then we can have a backend on lambda s3
- Access control rules apply to each bucket
- Objects are the entities stored in Amazon S3. It consist of object data and metadata.(data would be the content of the image file and metadata could be owner name, name or other properties of the object)
- Increase [Amazon performance](https://docs.aws.amazon.com/AmazonS3/latest/dev/optimizing-performance-guidelines.html#optimizing-performance-guidelines-combine)

### Terms

- We need to choose `region` for each bucket to optimize latency, minimize costs or address regulatory requirements(s3 is cheaper in few regions). If we have a regulation to keep data on the same country as they live.(European privacy roles different than americans)
- Objects stored in a region never leave that region unless we explicitly transfer them(this protect our data from being accidently move)
- AWS can handle 3500 put/post requests per perifx per seconds on each buckets [here](https://docs.aws.amazon.com/AmazonS3/latest/dev/optimizing-performance.html)


# <font color=green> GCP </font> 
<details>
<summary>
cloud shell
</summary>

* Allows you access to cloud. The way it works is using google software develooment kit with no need to install it. 
*  <font color=blue> What is SDK </font> SDK includes some toole like gcloud: main command line tool to manage products and services. gsutil: manage google cloud storage and bq which is for bigquery
* Easy way to click on cloud shell button on the GCP console. The command line pops up with preinstalled SDKs. We can install SDK on laptop, on-premise service or virtual machines. SDK also available as docker image.
* Can use REST API to get data from GCP. You need to enable apis you want first by using <font color=blue> APIs Explorer </font> . There are libraries to help us to do that called Google Apis Client Libraries. 
* Quicklabs helps you to learn for free
 
</details>
<details>
<summary>
Cloud Storage
</summary>

* It is not like file storage which manage data as hierarchy of folders
* It is not like block storage which operating system manage data as chunk of disk
* It keeps bunch of bytes for you and give a unique key (url) to access them usefull ways are
* Storing data for disaster recovery, archive data, static web data, distribute large object via direct download...
* cloud storage is encrypted in cloud, 
* How to turn on object versioning and  history of modifications. If we don't do that new always override old one. Cloud storage has object cycling example, tell delete obj more than 365 days old never used.

</details>
<details>
<summary>
K8
</summary>

* compute engine: gcp's infrastructure as a service which lets you run VM on cloud and gives you storage and networking for them. It lets you share compute resources with others by virtualizing hardware. Each VM has an instance of OS which we can build app on it with access to memory, file system networking interface. 
* app engine: gcp's platform as a service 
* A process is an intance of running a program.
* kubernates engine: It is like Iaas and like Paas as it has tools as developers needs.  Orchestering containers
* Write a docker file, to run container. 
```javascript
docker build -t exampleName .  // build container 
docker run -d exampleName      //run the image
```
Then build container and store in local system as runable image with below code. 
* In GCP you upload image to google container registry and share or download from there.

# How K8 helps us 

### Imperative Commands
* K8 provides apis to control operations through several utilities like kubectl.
* k8 allows you deploy containers on a set of nodes called a cluster
*  <font color=blue> what is cluster </font> A set of master components that control system as a whole and a set of nodes that run containers. In k8 node is a computing instance. In Google Cloud nodes are VM running in compute engine
* <font color=blue> how we get a cluster </font> GKE is there for help us to create cluster. We can create k8 cluster with k8 engine (GKE), using gcp console or gcloud command. GKE can be cosutomize and support different network and machine type. Here is sample command to create cluster using gke:
```javascript
gcloud container clusters create k1
```
* When above message complete we have a cluster created and complete and ready to go.
*  <font color=blue> what is pod </font> pod is the smallest part of k8, when ever k8 wants to deploy a container it does it inside pod. Think of pod as a process in app. Each container in pod has a unique address and set of ports locally. 
*  <font color=blue> how to run container in pod </font> is this command start deployment with an image of NGINX open source server. kubectl is smart enough to fetch the image from `container registry` 
```
kubectk run NGINX  --image=nginx:1.15.7
```
* <font color=blue> how to expose pods to internet </font> run kubectl expose command. k8 creates a service with a fixed ip address on top of our pods. A service infact is load balancing. So others outside cluster can access to pods via Load balancer. This is called network load balancer. Compute engines makes it available to VMs. in fact a public address manage by network load balancer on top of service.
  
<img width="374" alt="Screen Shot 2022-04-08 at 11 33 29 AM" src="https://user-images.githubusercontent.com/7471619/162501063-1bb0b74f-fff0-48b0-b9a8-a2c415983ff7.png">
	
* <font color=blue>  why do we need services? can FE directly hit pod ip address </font> yes in theory but whenever deployment has done, new pod created and old pods destroy then we miss ip address of those pods. Serives or network load balancers keeps fixed ip address on top of pods

```javascript
kubectl get services // display clusters with public ip addresses, clients can use these address to hit our service remotely	
```
##### More power
* <font color=blue> Scale number of pods ? </font> yes create 3 web service. They all behind the service and behind one available fixed ip address. 
```javascript
kubectl scale nginx(nameofCluster) --replicas=3 

// autoscale :min number of pods and max and the criteria to scale up if reach that point which is cpu 80%
kubectl autoscale nginx --min=10 --max=15 --cpu=80 
```
### Declarative commands (Configuration files)
* Aove works when we learn and test k8 step by step, but real strength comes when we use declarative commands.
* These configuration files becomes management tools, edit change and present it to k8.
* We can get starting point from one of the files as 
```javascript
kubectl get pods -l "app=nginx" -o yaml
```
* Then it would create one yaml as 


	
</details>

<details>
<summary>
Kubectl
</summary>


```javascript
kubectl config view
```
</details>

 
[Resource](https://learning.oreilly.com/videos/getting-started-with/9780136787709/9780136787709-GSK2_01_04_06/)
 
# K8s
 
* Old IT, you needed servers which they require OS like linux and apps run  on them with their dependencies. To escale up you need to add another server in vertical and manage them by a load balancer.
* New IT, we have containers which includes apps and its dependencies like an on cellphone. To run a container we need a `server` or `cloud`. On the server or cloud we need `container engine` which is an abstraction layer takes away old OS system. Containers doesn't care about it they just talk with engine which can be docker or another container solution. It can escale up on the cloud by creating more containers. To orchestred and automate containers we need `kubernetes`
image ....
*
 
## Some common names and What K8 brigns
yaml
containers: running instances of the apps that is defined in the image. By using Namespaces containers can be strictly isolated
Image: contains all that is needed to start an app, they are read only environments that contain runtime environment that include application and all libraries it requires. Images needs default command other wise container immediately stop
Registries: use to store images like docker also private registry is provided by all cloud providers
* All below are not available in container solution so we need something else like k8 to deal with
yaml
Automated rollouts and rollback: Which makes containers automatically created when they needed and can be rolled back.
Container Orchestration: that containers are running in the data center where they should be running
Storage Orchestration: if in scalability more storage is needed you want to automatically allocate storage
Loand Balancing or Service Discovery: in big environment you don't want to create DNS record for every new container thats added, we want it automated
self-healing: if container crashed automatically recreate it
High-availability: Make sure system critical component are always protectd
Batch Execution:
 
 
## Understanding Containers
* Apps need runtime environment, old it runtime environment were physical/virtual host which apps is installed with all dependencies. When we need to update dependencies it could be a problem like node version
* As complete runtime environment that is isolated a container is solution
* Containers are linux, run on top of container engine(like docker) and don't offer any platform requirement
* without specifing any application the container will start and stop as it doesn't know what to do



### VMs
* Many containers can run on top of the same host kernel
* One difference between VMs and containers is that containers have a defautl app that must start
* We have a kernel. With hypervisor (a virtualization process) it creates many VM. Each one has one an Operating System kernel that could run our apps with its dependencies.
Kernel is a program that have control on everything in system and reside in memory. It facilate interaction between hardware and software components
* Advantage of VM is we don't need physical machines since they are virtual but still we need to manage all dependencies and also we have a kernel that runs on each single machine compared with containers that runs all with one kernel
img ...
 
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
 
## Kubernetes Cluster
 
* In kubernetes are `control nodes` which run vital services for cluster. You make sure when one is down another work fine. Also there are `worker nodes`
* To build this cluster you need to run `kubeadm` command and is called `on-premise` solution. It means you run it locally on your hardware. On cloud we have EKS, AKS and GCP Google Cloud platform to give us cubernetes cluster
 
* K8 is all about managing pods, a pod can have one or more containers. Usally there is only one pod. in pod we have volume which makes sure files can be stored. Replicate helps if any pods fail, it create a new one also it takes care of scalability as well. In order to have it, kubernetes indroduces Replica set. Replica set take care of replication. All these are inside deployment (application).
* When we create Deployemnt or app, deployment monitors the replica set. The replica monitors the right amount of pods. 
* Kubernetes try to keep running pods. After they down it restart it
 
## K8 config files
* It stored in the Etcd database in JSON format. JSON format is not easy to edit that is why YAML is the current format to define kubernetes resources. YAML files need indentation to keep correct format and two spaces and not tab to define parent and child
 * When you create YAML file use below to create the resource
javascript
kubctl create -f myfile.yaml
... delete ...
// to generate
kubctl get <resource> -o yaml > myresource.yaml // append file to yaml file
 
## Create a Naked POD
javascript
git clone https://github.com/sandervanvugt/kubernetes
 
// create a pod from one yaml
kubctl create -f busybox.yaml
kubctl get all // to see all running containers
 
* Now we created a naked pod because it is not managed by anything. So if you delete the pod, then it is going to create it again because nothing is around it
 
javascript
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
 
### K8 APIs
 
* APIs are updated each 3 months, so to we need keep eye on them because we use K8 APIs in YAML files
javascript
kubctl api-resources //shows a list of resources that is defined in the API
kubctl api-versions // shows resource versions
kubctl explain // give details
 

### Pods
 
* Each pod has its own ip address, pods internal ip address is that might be one of the Docker ip addresses like`172.17.0.XXX` but we can't address users to them direcly. That is why we have `service` object which is connected to deployment using `label` and deployment is what insides have pods. So we can see `service object` as load balancer.
If you have big and many `service objects` you can have one `ingress` on top of it and it load balance the traffice to different services.
*
 
### Setup K8 in GCP
 
* Login and create a cluster, Select zone, then select static version and leave node location empty -> click create -> then you see amount of cpu, ram available to this cluster
* Click on connect -> click on Run in Cloud Shell -> then it provides google cloud shell machine,
javascript
kubctl get all // inside the shell, then you see current k8 , replica set and pods if exist
kubctl create deployment g-nginx --image=nginx
 
### Workloads
* To manage gcp environment,
 

## How the application knows where is current
* From current instance the inside loganesnatesting application knows
 
* triggers check development.json file
* cluster
kubctl get all // to see all running containers
// connect to cluster and run ip a
 
`virthual ethernet` interfaces connect our `bridge` or `docker 0` to each container via veth1, veth2 ... . They make sure that containers can put their trafic on the bridge and bridge to connected to actual network. `Bridge` put traffic of all containers into physical device using `Network Address Translation` tool. `docker 0` has a public ip address to recognize itself
 
* Containers are ephemeral so it's storage. It means when we start a container it goes away and it is gone
* We can use bind mount mechanism within docker container.



# Terraform
 
# VPC
 
* We can use tags  to specific VM or container. Each company policy can be added to firewall so make sure
* VPC is virtual global resouce
* Cloud routes helps to connect to other region if it goes down other region
* By subnet we can assign which service can access to what subnets which gives us security
* Subnets gives native support for load balancing, GKE when we use ingress load balancer make sure FE reach to the pods.
* Aliance ips create primary and secondary ranges.
 

* VPC we have three different types of subnets. Subnet range first is your network, second is your gateway, last is your broadcast ip
* Primary and secondary IP range in case of faulirs
* VPC can access internally to all common google APIS like storages
* and subnet can be available on different zone under one region
* VPC Network
* Is IoC Infrastructure as Code software that provide resources an application requires to run
 
javascript
terraform plan    // it is going to create a resource but not commiting 
terraform apply // commiting the resource to cloud
terraform delete
 

# Gcloud
javascript
gcloud config configurations list  // list of accounts
gcloud config configurations activate default // active default account
gcloud config get-value project
gcloud info
gcloud compute networks list // list of connected vpc
gcloud compute subnets list --network <vpcName>
 
gclloud compute network create vpc-2 --subnet-mod custom
// subnets are regional
gclloud compute networks subnets create vpc-2-euroe-west --network vpc-2 --region europe-west --range 10.10.1.0/24
gcloud compute networks delete vpc-2
gcloud compute firewall-rules list
gcloud compute firewall-rules delete nemeoffirewall
 

gcloud auth application-default login
cd /terraform/environments/staging/loganstaging/vpc
terraform state list
gcloud projects list
gcloud config set project onesnatesting
terraform plan
gsutil ls gs://esna-terraform-state-staging 
terraform init --upgrade //
terraform plan
terraform apply
terraform destroy
 
// spaces/5fa958773f48c60af520c089
//  triggers -> spacesstaging -> RUN -> sit-ds-terraform
//  cluster_group_vpc  = vpc
//  env_path = sit/prod-ds
//             sit/prod-ds/flavors/ca/gke
//
//   cluster_flavor_compone =  gke                  
//   apply_plan = yes
//
//   OR
//  
//   _cluster_flavor_name = flavor/all
//   _ENV_PATH = sit/prod-ds/flavors
//    cluster_flavor_compone =  gke 



Working agenda for KTs:
Day 1
Database model
Terraform/terragrunt
Flavours
 
Day 2
Data migration
 
Load balancer
Type of LB - global
How it used to be created
How we do it now with NEGs
In HA environment how are NEGs configured to provide HA
How NEGs interact with LB
 
HA
How it's configured
How to swtich over
Switch back
GCS buckets syncing
Primary bucket -> secondary happens automatically
Secondary to primary is manual after primary comes back and we switched to secondary
Check with Vlad before he leaves
VPCs/Subnets
How they are set up
Why we set them up with a small CIDR range?
Why did we abandon the shared VPC?
MPaaS/CPaaS dial-in numbers
How to generate MPaaS token
What are MPaaS callbacks
How do they work with DR
MPaaS conf token used for recording
Adding new dial-in numbers
Unit tests
Mocha
Jest
Use of in-memory MongoDB
Remaining tasks
React upgrade
 

