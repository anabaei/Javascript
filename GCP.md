# <font color=green> Intro to Cloud Security </font> 
<details>
<summary>
Cloud Infrastrcuture Intro
</summary>

### Redundancy
* Zone: Is one or more datacenters, physical buildings to keep machines and networks and link to other datacenters.
* Region: A group of Zones
* Failure Domains: A resource that can fail without impacting availability of data
* Failure Domains include zones and regions where data is duplicated to improve resiliency
* Reundancy: A practice of having multiple copies of data in different locations to avoid single point failure

### Latency
* Latency is a time for data to travel from one location to another
* 3 seconds 53% users leave website 

* Public cloud shared datacenter
* Private cloud is dedicating datacenter and infrastructure to a single user
* Hybrid cloud is a mix of both. Ask a public cloud provider to allow users to choose where their data can sit
* Multi cloud service,using more than one cloud service
* Cloud computing: the practice of usisng on demand computing resources as services hosted over internet
* Instance: a service resource that runs workloads in the cloud
* Ephemeraliy: Things only exist for a short amount of time, it helps for flexibility 
*  Assets in CSP scale quickly using ephemerality


####  3 categories of CSP:
* Compute: Computation perform by physical computer in remote env
* Storage: Organization can keep access and maintain data on off-site, cloud based storage device 
* Network: Network in the cloud run using software, sofware allow to change network design

#### Virtualization & Hypervisor
* Virtualization: is a technology that create virtual version of infrastructures like servers, storage and network
* VM: Vistualization uses VM technique. VM contains their own Operatin Systems like windows linux, and a portion of underlying computers power
* Hypervisor: in abstraction layer that stays between physical layer and VM, Abstraction is what seperate hardware and software, Hypervisor has 2 types
* Hypervisor Type 1: Also known as bare metal: it replaces entire unerlying OS component directly it is more common,having direct access makes type 1 streamlined and secure 
* Hypervisor Type 2: Also know as hosted: uses the computer OS and runs as an application over OS. It easier to install but need to take care of security and overhead of the underlying OS
* Hypervisor distribute resources accross VMs
* VMs: can have extra cpu, storage and memory
* Advantages of VMs:
* Portability: Makes VM useful for hybrid cloud env, where app resources share between on premise and cloud infrastructure, becuase each one are isolated and dev can move them via network
* Scaleabilit: VM can scale down or up if dev need
* Testing Environment: test code without affecting current infrastrucutre or users and can delete it after ward

####  Serverless
* Serverless computing is a cloud computing model where servers are abstracted from development. Serverless means servers and cmputations manages by CSP
* Serverless has two types: Backend as a Service BaaS and Function as a service Faas
* BaaS: CSPs manages all aspects VMs, containers and servers. Developers need to create FE, database, file storage and authentications
* Faas: Is a type of serverless that runs functions. Functions are ephemeral, meaning they only exist for a short period of time. Google’s Cloud Functions is a serverless product t
* Serverless benefits are scaleable and pay-as-you-go.
* While organizations share responsibilities with their CSP, security professionals should be prepared to protect data and resource access in a serverless environment.


#### Containers
* Container: Is a software package that holds only the components necessary to execute a particulare application
* Image: contains code and dependencies that an application require to run
* Container Registery: keep all images, allow to download and upload images
* Packaging software requires less memory and cpu since OS is not included
* 3 container benefits:
* portability: you can run each container run on different OS
* Imuteablity: means object can not be changed. If container needs to change user needs to create new image and deploy.
* Test Environment: Seperate responsibility among developers and operrational teams
* 

#### Data Storage
* Data storage is a solution enables users to keep access data on off site, cloud base storage
* Data storage helps for redundancy, cost, security compare with keep data on premise
* Redundancy: is the practice of distributing cloud resources across zones and regions
* Security provides authentication, data encryption and access control
Types of Data:
* Structured Data: Data sotre in rows and columns and predefined Format, all data categorize into specific field, good for search
* Unstrcutured Data: Data not organize in an easy identify way, images videos and documents
##### Data Storage Types:
* File Storage: Uses hierarchy of files in folders. It is good for small amount like family photos. It relies on repositories, a central place to download, store and share data.
* Object Storage: keep unstructured data in Bucket, a virtual container that holds objects. Each Bucket has unique name, publick or private.
* Block Storage: Data split into smaller blocks and each one store in different location to increase effiency. Each block has unique ID and when user retrive it blocks connected togather
* 4 classes of Cloud Storage:
* Standard: is use for hot data like mobile data which users frequently access or medical data
* Nearline: Data that users access once a month
* Coldline: Data users access each 90 days
* Archive: Like data uses for disaster racovery

* 

* 
* Two main task:
* Use infrastructure-as-code (IaS) to securely provision virtual machines, address
security concerns, and ensure the consistent deployment of cloud resources across
cloud infrastructure.
* Create and configure a virtual network in a test environment to explore the security of
the configuration settings before deploying to the production environment.
* Summary of this part is provided  [Here](https://github.com/user-attachments/files/17036225/CCS-C1-r-015-en-file-23.en.pdf)

</details>

<details>
<summary>
Security Principles 
</summary>

* Defence in Depth: A layerd approach to volnurability management that reduce risk. Defence in depth uses different security controls to reduce risks

### Security controls:
* Identity Control: A measure to help authenticate user before they access to resource like network storage. One example is asked to add phone to have multi factor authentication 
* Protective Control: A measure that protect access to resources and shield against malicious attacks, like firewalls antiviruses or policies that only authorize people can access
* Network:A measure that helps protect access through network
* Detective Control: A measure that use to identify suspiciouse activity if it occurs. For example an intrution detective system that monitors system activity and alert analyist if there is possible intruder. Google Cloud Security command Center is an example of intrution.
* Respond: An application that automatically respond to security events. Via email could notify you
* Recovery: Is measure that restore access and functionality in the event of failure. Where you can revert to backup after you attack
* A cloud security analyst is asked to add protective controls to their organization’s defense in depth model. What controls should the analyst implement?
* 

### Shared Responsibilty Model: 

* Shared Responsibilty Model: Is implicit and explicit agreement between client and CSP regarding shared accountability for security controls. Is an agreenment to say who is respobsilbe for what resources
* Service Level Agreement `SLA`: Quantify the availability of Services
* `CSP responsibilites`:
* Physical infrastructure
* Ensure Network and resource availability
* `Customer Responsibilites`:
* Configure services for security and compliance
* Secure their own data
*  Responsiblity varieis by vary industry framework and regulatory
*  Inherited security controls: Demonstrate security posture
*  Location also affect shared responsibilites

### Shared Responsibilty Model Challenges:

* `Misconfiguration`: Leading cause of security breaches: To fix it need to `monitor resource provisioning`, `Incorporate automation and safe security policies`  and use security policies like `Properly manage IAM policies.`
  
* Use IAM policies, and principle of least privilage. Principle of least privilage  means security architecture grants minimum authorization needed to a principal to perform function
* Another challenge is `Tracking regulation Changes while compnaies growth`.
* `Stay up to Date in security`
* Shared fate fill gaps in shared responsinility where CSP prvoides more secure services and guidance, like challenges `navigating changing regulations`, `determine how security controls overlap` and approch security as ongoing process

#### Shared Fate:
*  Shared Fate Created to increase the level of trust between the users of cloud services and the cloud service provider?
* An approach that emphasize CSPs involve in customer entire security journey and offers resources to securly manage their environment
* Ways to help are:
* `Security Fundations for users`: list best practices for config and deploy Google services
* `Landing Zones`:A modular and scalable configuration that enables organizations to adopt Google Cloud for their business needs. For a user that's new to the cloud, using a landing zone provides a starting point for adding identity provisioning, a resource hierarchy, and network and security controls.
* `Mitigating Risk`: Risk manager is part of it, a tool that offers insight into your organization's technical risk posture. It lets us to generate report to evalute risk through out organization


### Cloud Computing Models: IaaS, PassS and Saas

* Infrastrcuture aaS: CSP has least responsibility in this model. It provides access to services, and customer manage all services like OS, Data Security, but maintating data center is not the job of customer. 
* Platform aaS: CSP provides software resources, customers manage data and security and apps. Less operation responsibility
* Software aaS: Customer only manage security content and access policies. Saas use when companies can't make their own apps like Gmail.
* Faas: Serverless computing sepearate physical servers from development environment. No need to backend setup
* IDaaS: Identity as service, use for multifactor authentication and single sign on. 
* Firewall As service: helps organization to create secure network to block unathurize access

### IaaS vs Paas
* CSP provides on demands access to computing resources as as servers, storage
* Scaleable, during pick time of school need to increase resource
* Customer is responsible for secring data, Operating, access and authentication
* `Lift and Shift` A migration model where workload moved to cloud with little and no modifications
* `Paas` unlike Iaas at Paas customer is not responsible for Identity, Operations, Access and Authentication, Network security, data and content. Like Heroku, SAP, Lambda

 ### SaaS
 * SaaS is cloud hosted application over internet through web, mobile
 * Is good when organization don't want to build their own app or infrastrucuter
 * Customer responsible for securing their data and Access Policies
 * Overhead is the use of execisve hardware or personal resources to accomplish a task
 * Shadow IT: Shadow IT tends to occur when employees or teams use SaaS products without getting approval from IT teams first.
 * This practice is a concern for IT staff because those products might be inadequately secured, leading to more vulnerabilities and security issues for the organization.

### IAM Policies
* It is important to know who access to what. Identity and Access Management has 3 key part: `Roles`, `Prinsiples`, `Policies`
* Roles: Collection of permission that can be applied to principales. Roles are a way to organize permissions of each prinipals
* Principales : End users or application
* Prinsipals assigned a role that grants permissions, rule policies
* Granting a role a principle, transfer all permissions to the role
* `Groups`: Organizations can use groups to combine users or service accounts together to more easily assign `access controls` for larger sets of accounts, instead of assigning individual access one-by-one
* `Policies`: Organizations can set allow or deny policies that attach roles or deny permissions to resources.
* An allow policy is a type of access a principal has.
* A deny policy prevent principals from carrying out certain actions.
* Best practice for IAM is to create an allow policy for Groups instead of multiple users

* For example fo a team of 50 engineers:
* Create a `group`, use `allow policy` to bind the group to a role, then assign the role to all engineers
* I AM Policies [Reference](https://github.com/user-attachments/files/17051410/CCS-C1-r-020-en-file-38.en.pdf)
* `Federation` is a method of granting users and service accounts access to a cloud environment using IAM.
* `Principals` are used to represent and assign roles to applications and users.
* A `service account` is a non-human identity that is typically granted to a virtual machine, application, or service. Service accounts are granted IAM roles to perform certain actions.
* Principle of `least privilege` involves granting only the minimal access and authorization required to complete a task or function

### Networking 
* Router: Connect networks togather
* Switches: A device that makes connections between devices by sending and receiving data
* This process is called software-defined networking, or SDN
* You define a routes by calling API, then API request access to the router for that organization
* SDN scaleable, can monitor network activities
* LB distribute traffic to appropriate service to stop overwhelms of a service
* LB app: It is in Layer 7 OSI for http/https traffic, this layer connect you using app to the internet 
* LB network. operate on layer 4 of OSI, this layer responsible for delivery and speed data between devices, The network load balancer handles traffic from the UDP and Transmission Control Protocol, or TCP. This means the load balancer takes information from a router and forwards it to the correct TCP or UDP server.
 

### Firewall
* Firewalls can also restrict specific incoming and outgoing network traffic
* Firewall as a service (FWaaS) is a service model for cloud environments. Organizations can
adopt FWaaS to help block unauthorized traffic on their network.
* Always use the principle of least privilege. When creating firewall rules, only allow
necessary traffic to traverse the network.
● Use hierarchical firewall policies, which will allow your organization to apply firewall
policies to the organization and folder levels. Invoking hierarchical policy structure
promotes consistency across organizational resources and the firewalls that protect
them.
* `Firewall rules` define who can access to specific resource based on their IP address and help to inforce helping enforce the principle of least privilege for employees.
* You can use VPN to connect VPC. it means users connect via one on-premise resource 
* 

### VPC
* A virtual private cloud, or VPC, is a private cloud hosted within a public cloud, enabling organizations to use the public cloud’s resources while being completely isolated from other cloud users. It is like you reserve your seat in restourant
* IN GCP, VPC are global resources means they are not attach to specific region or zone.
* VPC helps to devide network to chunks called subnets (segmentation)
* segmentation allow control network traffic
* It seperate resources which should not talk with each other reduce attack surface
* 
* Module 2 resource [Here](https://github.com/user-attachments/files/17051994/CCS-C1-r-025-en-file-45.en.pdf)


</details>
<details>
<summary>
Security Life Style
</summary>

### DevSecOps

* Plan, Code, Build, Test, Release, Deploy, Operate
* DevSecOps is a culture that consists of guidelines, best practices, and tools that development, operation, and security teams use to collaborate. development, operations, and security teams collaborate at the very beginning and throughout the development process.
* With DevSecOps, security teams implement automated security tests from the start of the project, which means the operations team releases applications even faster.
* DevSecOps culture also reinforces the security concept of shifting left. shift left means security check is done at the begining
* Shifting left means include code analysis, change and compliance management, threat modeling, and security training.
* `Waterfall approach` limitatitions: 
   - Developer move one step to next
   - returning to last step could lose developers lose their progress
   - It has Six steps: 1- requirements, 2- design 3- develop 4- test 5- release 6- maintanence
   - Drawbacks: 1- if tests fails other parts are stops and design or past steps need to revisit 2- one team is blocked project can't move
   - One solution for water fall is software `pipeline` 
*  `PipeLine` is a process that uses automation and tools to facilitate movement through each phase of the software development lifecycle.
*  `software pipeline` includes
   - Atuomation integration and testing: seamless security, testing through out lifecycle
   - Code Validation
   - Reporting Measures

### CI/CD
* It is most commonly applied pipeline methodology
* An approach to build. validate and deployment process
* `CI` Continously create and update code that's uploaded into shared repository (continouse integration). From validation tests and build process should be automatically
* `CD` delivery: continuous release of software builds to a staging or testing environment. Like CI, CD is also run test and build after build succeed manual approval is required to push updated to PROD
* `CD` deployement: Unlike Delivery, it automatically deploy builds to PROD in real time and manual approval is not required

* CI/CD has 4 stages
 - Source: devs push their code into repo, 
 - Build: devs implement edits to source code this trigger build. After build it run tests
 - Test: auto security tests, check new build 
 - Deploy: it deploys withing an 1 min

* `Security in CI/CD`
  - Source stage: source code scan
  - Build: In the build stage, the image is scanned for vulnerabilities and checked against policies.
  - If the build passes this step, it continues to the image repository.
  - After it measure IAM accessiblity on repository
  - test: stage detects any vulnerabilities and should trigger patching and redeployment
  - Build: Another security measure includes only limiting service accounts access to deploy builds, rather than individual human users.service account is a non-human identity
 
  * [security.pdf](https://github.com/user-attachments/files/17320004/CCS-C1-r-028-en-file-52.en.pdf)


### Software Supply Chain security
* Includes people and tools, code scripts that play a part in software developmnet, which each one could be a target 
* People: Any person with credentials to source code and system
* Organization Policies: results of inadequate system access, insecure review cycles, ineffective approval and communication
* Tech: libraires and packages can be thread when they are in use

* `Security hardening` is the process of strengthening a system to reduce its vulnerabilities and attack surface. one way is to implement CI/CD volnurability check through pipeline
* `SBOM` software bill of material. An SBOM is a machine-readable list of each piece of software and its components involved in the supply chain.
* Possessing an SBOM also demonstrates to stakeholders that your project or organization not only applies security measures, but also follows compliance guidelines.

### Security Frameworks Salsa
* Salsa: supply chain level for software artifacts. SLSA improves security by outlining standards and controls that enhance the integrity of artifacts.
* `Artifacts` An artifact is a digital object, like a file or image, that is used in the software development lifecycle.
* SLSA’s framework revolves around three trust boundaries:
  - build integrity: involves verifying the software uses the correct, original dependencies. 
  - source integrity: It make sure the actual source devs are suing actually reflects the developer’s goals and intent and that any code modifications are easily traced and monitored.
  - dependencies: The dependencies boundary requires that any dependencies used in an artifact are examined using security checks.
  
* Provenance is a description of the processes and tools used to build an artifact.
* Along with levels and boundaries, SLSA recommends incorporating technical controls such as version control, vulnerability scanning, build verification, deployment policies, and artifact management.
* `Salsa Pyramid`
  - In L1, document provenance, organizations must meet minimum requirements for documenting the artifact’s provenance.
  - With documentation standards met, advancing to L2 requires using a hosted build platform for managing builds.
  - Finally, L3 dictates that the build platform used must provide protection against tampering with the artifact’s provenance.

 ### Iac Infrastructure as code
 * Infrastructure as code, or IaC, is the practice of provisioning and managing infrastructure using reusable scripts.
 * Iac are immuteable, means  outdated resources are torn down and replaced with an updated version instead of merely patching the issue
 * configure IaC, called `declarative`. Remove manual configuration, it reduces config drift
 * `Configuration drift` is unwanted resource’s configuration change
 * `PaC` enables developers to provision and manage their policies to meet organizational requirements
 * Automated vulnerability scanning provides developers with continuous feedback about security concerns and red flags that may lead to compliance errors.
 * [Terraform](https://github.com/user-attachments/files/17321379/CCS-C1-r-031-en-file-58.en.pdf)
 * You should explain to leadership that IaC tools may offer the ability to scan the environment for configuration drift and can help you detect invalid inputs in the build process. You should also explain that automation ensures developers consistently use the same configuration settings for provisioning infrastructure. IaC does not save security checks for the final step of the development process. With IaC, you can implement automated security checks from the beginning of the process, allowing developers to correct security issues before they become a larger problem.
* `GitOps` is a framework that applies version control, collaboration, compliance, and CI/CD best practices to automate cloud infrastructure.
  
 </details>
<details>
<summary>
Roles and Responsibilities
</summary>

* To response, an analysts needs to know the core products: computing, storage and network
### cloud security Responsibilites:
* `mapping security concepts to cloud products` : it helps to identify potenrial attacks
* `using tools to check vulnerability` for vm, network and containers and also check misconfiguration settings
*  `use tools` to analyze threat detection and security compliance reports 
*  `comunicate with organization` to prepar report to talk with organizations.
*  `monitor infrastructure` using loggin to monitor unusall usage of network or computing
*   `respond to security incident` like a malware infection or attempt to gain unauthorize access, if it is threat analyst needs to contain it
  - to contain a threat we can shut down a vm,
  - then help to recover
  - then document what went down to allow in future 
*   `test and evalute products` continously test products
*   As a cloud security analyst, communicating cloud security concepts to a non-technical audience is a core responsibility, you may train other devleopers
*   `Security controls` are controls that safeguard cloud environments from threats and minimize the effects of harmful attacks, it includes firewalls and anti viruses
*   Analysts configure and use security tools to closely monitor and log network activity in the cloud, then receive alerts when something appears out of place.
*   Security analysts also use their skills to monitor and manage intrusion detection systems, or IDS, and intrusion protection systems, or IPS.
*   Intrusion detection systems monitor your cloud system for threat actors trying to gain access, while intrusion protection systems proactively remove threats based on specific rules.
*   `stay up to date with security and tech`
  [cloud security respon.pdf](https://github.com/user-attachments/files/17356445/cloud.security.respon.pdf)

Works include:
1- `Information risk management` is the process of identifying, assessing, and minimizing potential threats to information assets. An organization can use this process to prioritize which tools to include in its budget and which assets it should protect. The more money an asset represents for a company, the more they should invest to protect it.
  - Develop strategies for securing cloud assets
  - plan security budget: determine which assets organization need to deploy

2- `cloud security posture management` the process of monitoring and configuring cloud assets for security and compliance with best practices, regulations, and organization policy. Tools like GCP Security Command Center to find out what's going on on in cloud env. They check misconfiguration and volnurabilities to improve security posture
  - `security posture` is an organization’s ability to manage its defense of critical assets and data and react to change.
  - update and document 
  -  As part of security posture management, analysts also communicate with non-technical audiences, including management and users.
  -  Analysts use cloud security posture management tools, like Google Cloud Security Command Center, as centralized places to find and analyze information about what’s going on in the cloud environment

3-  `Threat intelligence` includes the collection, analysis, and evaluation of cyberthreat information.
   - cyberthreat: are techniques that a hacker use to damage
   - Cloud security analysts use threat intelligence to stay ahead of potential attackers and respond to security incidents. Threat intelligence provides information about prior attacks and how others have responded to them.

* When a cyberattack, breach, or other incident occurs, `cloud security analysts` are responsible for minimizing the impact on the organization and supporting the recovery process. know which assets are more vulnerable, 
Questions:
* A cloud security analyst is responsible for improving their organization’s security posture. What two things might the analyst do to achieve this goal? Select two answers.
* To continuously improve their organization’s security posture, cloud security analysts help decide which security products their organization should use and how to configure those security products. Cloud security analysts are responsible for identifying potential attack vectors for their organization’s cloud assets.
* To continuously improve their organization’s security posture, cloud security analysts help decide which security products their organization should use and how to configure those security products. Cloud security analysts are also responsible for regularly testing security products to make sure they work properly.
* Unusual behavior is detected on an organization’s network. What is the first step a cloud security analyst should take in responding?
* Responding to a security incident starts with identifying if unusual behavior is an actual threat, or just a false positive. If it is a threat, analysts work to identify and contain it, which could include shutting down a virtual machine running malicious software.
* Cloud security analysts prepare for audits by making sure they understand requirements, identifying gaps, and putting fixes in place. Cloud analysts may be involved in planning communication with users in the event of a security breach or other incident.
### Security Ecosystem

* Security Operations Center, or SOC, which detects and responds to cybersecurity incidents affecting the organization.
* `cloud security architect` is a professional who designs and develops security controls and measures within an organization’s cloud infrastructure. They consider organiztion goals and security requirements
* `cloud security engineer` is a professional who implements and manages secure cloud workloads and infrastructure.
* `stakeholder` is a person or organization who can affect or be affected by a system.
* a cloud security professional,  frequently be in charge of conveying important information to people who need it.

### Common Tools

* Tools are like: Linux, Terraform, reCAPTCHA, Wireshark, VirusTotal, and Lucidchart.

#### Linux
* open-source operating system, Linux uses `shell` environment as command line interpreter. The shell translates your commands so the computer can perform the instructed task.
* With Linux, you can verify the status of each application in your infrastructure, review networking traffic, and filter access to non-production IPs and ports.

#### Terraform
*  Terraform is infrastructure-as-code tool.It enables you to automate the provisioning of cloud resources.
*  Security teams can use Terraform to consistently create health checks and security enforcement policies across their infrastructure.

* `eCAPTCHA` a risk analysis engine that detects and helps prevent spam and malicious behavior from happening on websites.
* `Wireshark` is a packet analyzing tool that provides insight into your network. To identify suspicious activity, like data exfiltration.
* `VirusTotal` is a website that analyzes files and URLs for malicious content like viruses, worms, trojans, and more. Security professionals use VirusTotal as an investigative tool.
* `Lucidchart` a diagramming app helps users communicate and collaborate across teams.Cloud security analysts use this tool to help document security processes using visuals, For example, it’s common to create diagrams that show how information flows through a system, so that you can identify and implement the appropriate protection measures.

### Cloud Shell
* Cloud Shell, CLI where you interact with your cloud environment, Cloud Shell is accessible through a web browser, so you can use it anywhere, at any time.
* Shell itself is temporary and will shut down after a period of inactivity.
* Utilities like tools and commands are pre-installed
* Cloud Shell uses the Google Cloud CLI, also called the gcloud CLI, to build and manage resources. gcloud perform tasks
* VPCs provide network capabilities to resources like virtual machines or containers.

#### Create VPC
```
gcloud compute networks create labnet --subnet -mode=custom
```
* labnet is the name of network it creates
* subnets must have unique names, create subnet
```
gcloud compute networks subnets create labnet-sub --network=labnet \ Press Enter.
Then, --range=10.10.0.0/28 \ Press Enter.
```
* list networks
```
gcloud compute networks list
```
* we can delete default network for security purposes
* list subnets using the following command:
```
gcloud compute networks subnets list --network=labnet 
```
![vpc.pdf](https://github.com/user-attachments/files/17357954/vpc.pdf)

* The Cloud Shell command group compute can be used to initiate the creation or manipulation of Google Cloud Compute Engine resources, like virtual machines. The gcloud command invokes the gcloud command-line tool.

 ### Interview tips by google pro

 * Some dos when you're interviewing, feel comfortable understanding the question, which means please feel comfortable asking qualifying or clarifying questions.
 * Repeat and re-articulate that question to make sure that you're actually answering the thing that was asked of you.
 * And at the end of it, ask if that answers the question to make sure (chuckles) that you've actually articulated your point clearly.
 * Questions you can ask:
 * What's the environment like?
 * What's the work-life balance like?"
 * Hey, what's one of the big challenges that your team is working on right now?"
 * what interests you in a career in cloud security?
 * `Chris, my interest in cloud security is really comes down to how pervasive cloud security is in our day-to-Day lives, everything from streaming movies and video games, pretty much runs on the cloud these days. It's how technology's evolving to become more efficient and accessible and equitable for people around the world. So my interest in security for the cloud really comes down to making sure that all that information stays protected and safe.`
 * A cloud firewall can be an application or hardware, and it's essentially a resource that allows you to control traffic that comes in and out of a cloud environment It can allow you to create firewall rules, you can do things like filter out or block port 22 if you don't want SSH access into the cloud environment. It also allows you to sort of create rules that you can distribute to many different computers or many different services running on a cloud platform
 * 
 </details>


# <font color=green> Strategies for Cloud Security Risk Management </font> 

<details>
<summary>
cloud security domain
</summary>

* The International Information System Security Certification Consortium, or ISC2, is a non-profit organization specializing in training and certifications for cybersecurity professionals
* For ISC2, a `security domain` is a collection of tightly coupled security practices that address a specific security discipline. For example, domains help to ensure that you have the right processes, skills, and tooling There are six security domains 
* Domain 1 focuses on cloud concepts, architecture, and design: Focuses on high-level security that aligns with your organization's objectives. To make sure specific design meets business needs 
* Domain 2 consists of cloud data security: focuses on security of data within the cloud environment. It includes all procedures used in designing and implementing encryption, access controls, data loss prevention, and tokenization techniques and Controls are matched according to the value and sensitivity of data as well as relevant laws and regulations. It is like plumbing determine how data move into out and in of the system
* Domain 3 addresses cloud platform and infrastructure security: It addresses the virtual and physical security threats to cloud infrastructure, including cloud infrastructure connections, cybersecurity, and the implementation of audit tools.
* Domain 4 cloud application security: Focuses on how applications for the cloud environment should be built, released, and maintained. This might include investigating all cloud computing application security challenges
* Domain 5 investigates cloud security operations: It covers how to securely operate the designed, built, and deployed environment, including how to respond to events and restore the environment to a secure state. This may include attacks, configuration mistakes, or even cloud provider outages. This domain could be compared to the person that is responsible for installing final safety features like alarm systems and smoke detectors after a building is built.
* Domain 6 explores legal, risk, and compliance: It explores how cloud computing influences business risk management and how cloud security controls are audited. This domain is like an inspector that makes sure everything in a building complies with standards and regulations.
  
#### Security Vs Compliance
* Security and compliance are complementary processes.
* A strong security system makes it easier for an organization to meet compliance standards, because most of the necessary controls are already in place
  
* Security: includes systems and controls that protect an organization’s assets from threats. Security ensures confidentiality, integrity, and availability of the organization's services.
* Method to ensure security
- Mitigate threat:  using different types of controls, like firewalls,
- strong password management tools, and multi-factor authentication; implement controls designed to prevent threat actors from impacting
- provide guidelines for responding to a breach in a worst case scenario;

* While security protects an organization, `compliance` is the process of adhering to internal and external standards and government regulations.
* To be compliant, an organization must provide evidence that they are following the stated objective, like one of the standards, rules, regulations, or laws that apply to their business.
* Compliance standards are not unique to a single organization.
* The standards measure security protocols at a given point in time or over a specific period of time for any organization.
* Compliance sets a minimum standard for security and establishes common ground for organizations.
* The NIST CSF is a compliance framework that can easily be adapted across industries to create strong security programs.
* These can include the International Organization for Standardization, or ISO, the National Institute for Standards and Technology
* known as NIST, or a federal law, like the Health Insurance Portability and Accountability Act, or HIPAA.

### Security Control
* A security control is a safeguard designed to reduce specific security risks. Reducing the security risks in an organization means that you are trying to either reduce the impact from the threat or reduce the likelihood of that threat.
* For example, if you encrypt data, you reduce the impact of a breach, because the attacker cannot see the data without the key.
* `Cloud security controls` are measures that safeguard cloud environments from threats and minimize the effects of harmful attacks.
* To achieve compliance and prove it, you should use built-in and third-party cloud security tools, and run reports on workloads.
* The CSP automatically provides some controls for their customers, such as physical security, secure-by-design practices in software development, and strong security defaults on services, it also provides some controls
* The NIST SP 800-53 provides a set of over 1,000 controls, separated into 20 groups called
families, that support the development of secure information systems. Control families are
important because they represent similar types of controls to help address a set of threats.

### Risk and Compliance
* `Risk` is the measure of how much a threat impacts the confidentiality, integrity, and availability of an asset.
  - Data lost: When data deleted without authorization resulting by a threat actor 
  - Data leakage: when data changed by unauthrize user. 
  - Data corruption
* `Threat` any situation or circumstance that can negatively impact assets.
* `Vulnerabilities` are weaknesses that can be exploited by threat actors.
*  `risk appetite` is the amount of risk an organization is willing to take and still meet organizational needs.
*  To fully handle risk management, a security team needs to also assess security systems for vulnerability often on top of Meeting compliance requirements

### Complians 3 areas 
* The people, process, technology, or PPT
* The PPT framework can help organizations meet their security and compliance goals.
* To build a strong culture of compliance, it’s important to educate users and provide them with procedures.
* The team can also create processes to ensure protocols are followed. Processes include how people should use new technology
* Examples of effective processes include enforcing two-factor authentication, mandatory software updates, removing access rights from users who no longer need them, and implementing protocols for running scans and analyzing reports.
* Technology: the security team adopts a monitoring tool to help meet compliance requirements.

#### Command Center
* Security Command Center is Google Cloud's centralized vulnerability and threat reporting service. It evaluates an organization's security and data attack surface, provides asset inventory and discovery, and identifies misconfigurations, vulnerabilities, and threats.
* Benefits:
- improving security posture: by finding security misconfigurations and volunrabilities in environment
- detecting and uncovering threats: 
- assessing and managing risk: using attack path simulation to discover and shut down possible pathways that threat actors can use to access and compromise cloud resources.
* The key features of Security Command Center are threat prevention, threat detection, and attack path simulation.
  - Threat prevention can also uncover misconfigurations and find common web application vulnerabilities to quickly resolve issues with best practices.
  - Threat detection protects an organization’s resources by detecting threats to cloud services like Google Compute Engine, Google Kubernetes Engine, BigQuery, Cloud SQL, and more.
  - Attack path simulation helps pinpoint where and how an organization’s Google Cloud environment could be attacked.

### Cloud Security Control
* `cloud security controls` are measures that safeguard cloud environments from threats by reducing the likelihood and impact of harmful attacks
* There are three types of cybersecurity controls:
  - technical: hardware and software protect assets
  - administrative: policies, procedures, and guidelines put into place to protect assets
  - physical: Physical controls include any concrete means of preventing or detecting unauthorized access to facilities, systems, or assets, like gates and locks, or key cards to enter a building.
* `threat modeling` is the process of identifying assets, their vulnerabilities, and how each is exposed to threats.
* An organization can transfer risk by buying a cyber insurance policy that helps cover this risk or transferring the risk to the user in the terms of a service agreement.
* By threat modeling and checking that you’ve met compliance control standards, you can implement the necessary controls to reduce risk to an acceptable level.
##### Steps 
- Identify controls: start with threat modeling to identify controls you should implement. This way find specific thread and choose best control to elimiate it
- Develop implementation plan: Need to develop policies on how and who can access to resources, buy keys physical or remote
- Test:
- Monitor and maintain
- Record process in teams security plan doc

</details>
<details>
<summary>
 Risk management frameworks, regulations, and industry standards
 </summary>

* A `risk management framework` is a set of practices, processes, and technologies that enable an organization to identify, assess, analyze, and manage risk within an organization. Frameworks are tools 
* Here are some examples of industry standard frameworks.
  - The National Institute of Standards and Technology, better known as NIST: The NIST or CSF, is a voluntary framework that outlines a risk-based approach for governing security, privacy, and cyber supply-chain risk management. The CSF provides an outline of best practices to help an organization decide where to focus their time and money for cybersecurity protection.
  - The International Organization for Standardization, or ISO, 27001: main goal is to protect the confidentiality, integrity, and availability of information
  -  Confidentiality: only authorized persons have the right to access information.
  -  Integrity: only authorized persons can change the information.
  -  And availability: the information must be accessible to authorized persons whenever it is needed.
  - System and Organization Controls 2, referred to as SOC 2:can help the organization assess the third-party system’s security, developed by aicpa, the AICPA’s Trust Services Criteria to build trust and confidence for clients about a third-party service provider's system. a third-party service organization uses to process client’s data and the confidentiality and privacy of the information the system processes.

#### Data protection 

* `Data privacy` focuses on an individual’s rights to be in control of how and when their data is accessed and used.
* GDPR and CPRA put laws into place that grant consumers, as data subjects, certain rights regarding the use of their personal information.
* Data protection helps
  - enforce policies and regulations,
  - prevent unauthorized access,
  - focus on keeping information safe from attackers,
  - ensure that data is protected from unauthorized intervention and access,
  - safeguard collected data is closely tied to security controls.

#### NIST 
* NIST Privacy Framework was developed to help improve privacy risk management for an organization's data
* The NIST cybersecurity framework is a tool that a cloud surety team can use for data protection.
* The NIST Privacy Framework has three parts: core, profiles, and implementation tiers
* `core` is a set of privacy protection activities and desired outcomes that allows for communicating prioritized privacy protection activities and outcomes across the organization.
* `Profiles` represent the privacy outcomes the organization aims to achieve. To develop a profile, an organization will review the functions, categories, and subcategories of the framework, and decide which functions are the most important to focus on.
* `implementation tiers` provide context on how an organization views privacy risk and indicates if the organization has adequate processes and resources in place to manage that risk.
* The NIST Privacy Framework was developed to help improve privacy risk management for an organization's data. It is an international framework that strives to create a common language for international cooperation on privacy. The NIST Privacy Framework can help organizations meet their privacy obligations with the right selection of security controls and data protection practices.

### GDPR, FedRAMP
* The Federal Risk and Authorization Management Program, or FedRAMP, is a government-wide program that provides a consistent approach to security assessment, authorization, and continuous monitoring for cloud products and services in the United States.
*  Health Insurance Portability and Accountability Act, or HIPAA: a US federal law for healthcare organizations. The Privacy Rule focuses on the use and sharing of all PHI, by what are known as “covered entities.
*  `Covered entities` include healthcare providers, healthcare plans, healthcare clearinghouses and their healthcare business associates.
*  When applying industry-specific standards, organizations should consider the types of data they work with and the jurisdictions they operate in. They should also consider which standards apply to their industry, whether they will be working with governments, and whether their workloads will be in the cloud, on-premises, or a combination of both.
*  The General Data Protection Regulation (GDPR) includes regulations that protect the personal data and privacy of the residents of the European Union. All member states of the EU, and international organizations handling EU resident data, are obliged to follow the regulations set out by the GDPR.
*  All federal government agencies and non-federal government organizations providing services to the United States government are able to leverage the additional security provided by FedRAMP. Agencies or organizations handling sensitive data may also be required to use FedRAMP-authorized cloud services.
*  FedRAMP’s purpose is to ensure compliance of third-party cloud services for U.S. government users handling sensitive data. All federal government agencies and non-federal government organizations providing services to the federal government in the United States are able to leverage the additional security provided by FedRAMP.

### Risk Management Standards
* The Payment Card Industry Data Security Standard, or `PCI DSS`, is a widely accepted set of policies and procedures intended to optimize the security of credit, debit, and cash card transactions.
* PCI DSS also protects cardholders against misuse of their personal information.
* The PS SSC set the standards for payment security.
* The PCI DSS applies to any organization that accepts, transmits, or stores any cardholder data, regardless of the size of the organization, or the number of transactions.
* the payment brands are responsible for enforcing PCI DSS compliance, not the PCI council.
* All merchants will fall into one of four merchant levels based on transaction volume over a 12-month period.
  - Level1: applies to merchants that process over six million card transactions per year by any method, including online, in store, or by phone.
  - Level2: to merchants that process one to six million card transactions per year.
  - Level 3 applies to merchants that process 20,000 to 1 million ecommerce transactions per year.
  - level 4 applies to merchants processing fewer than 20,000 ecommerce transactions per year, and any other merchant processing up to 1M card transactions per year.
 
  * 3 ongoing steps a cloud security team follows to adhere to the PCI DSS
    - assess means to identify all locations of cardholder data, and analyze processes and IT assets for vulnerabilities that could expose cardholder data.
    - Second, repair means to fix the identified vulnerabilities, You can do this by securely removing any unnecessary cardholder data and implementing secure business processes.
    - And third, report means to document assessment and remediation details, and submit compliance reports to the bank and card brands you do business with.
   
* `ISO 27001` is an international framework that focuses on information security management systems.
  - Confidentiality (only authorized people), integrity (data not change by mistake or lost) and avaialability (organization and users can access data everytime)
  - 
Risk management framework: A set of practices, processes, and technologies that enable an
organization to identify, assess, analyze, and manage risk within an organization


 </details>

 <details>
<summary>
Compliance Life Cycle
</summary>

* The compliance lifecycle is a continuous lifecycle to help organizations comply with frameworks, industry standards, and internal organizational systems
* According to ISO 27001, the four stages of the compliance lifecycle are `plan`, `implement`, `monitor`, and `report`.
* NIST defines governance as the policies, procedures, and processes to manage and monitor an organization’s regulatory, legal, risk, environmental, and operational requirements that inform the management of cybersecurity risk.
* A `gap assessment` identifies the processes and controls that currently meet the organization’s obligations, and the areas that need to be addressed.
  - The planning process might involve evaluating controls, assets, and processes that are already in place This stage often involves a gap assessment.
  - In implementing stage, you will implement measures, like controls and processes, that will help you meet your compliance goals.
  - It is important to monitor the system to evaluate the effectiveness of the controls that were put into place
  - Report stage, your organization must measure compliance by running reports and control checks.

#### Cloud Security Control

* Let’s explore common types of cloud security controls, including preventative, detective, and corrective controls.
*  service level are applied to storage, computing, and networking.
* workload level are applied to a collection of resources or code that delivers business value, like a customer facing application.
* platform level are applied to a common environment for running applications, like operating systems, programming languages, and runtime

* `cloud security controls`
  - deterent controls:  which serve as a barrier to a potential attacke, ex:  a passphrase, which is more complex than a traditional password, is difficult and time consuming to crack. The added difficulty may deter an attacker. An example of a deterrent control against an insider attack is a company-wide policy stating the appropriate use of company assets and the consequences of nonadherence.
  - preventative controls, which manage, strengthen and protect assets; For example, you write code that disables unnecessary ports to ensure there are less entry points for attackers reducing the attack surface.
  - corrective controls, which reduce the aftereffects of an attack; For example, a corrective control could be a piece of code that corrects or repairs damage after unwanted or unauthorized activity and then notifies administrators of this action. Corrective controls are like an alarm that automatically calls the police in the event of an intrusion.
  - detective controls, which identify or detect an attack. Antivirus software and network or service monitoring are examples of detective controls. Even billing
  - A compensating control is a control to mitigate a risk that cannot be fully addressed by the organization's existing security controls. Compensating controls are usually used when the organization is unable to implement a specific control because of technical or business constraints.
  - The PCI Security Standards Council, or SSC, provides guidelines that are helpful for creating and implementing compensating controls.

#### Control Mapping process
* Mapping controls in the cloud ensures that all the necessary controls meet regulatory obligations and secure the cloud.
* To complete the control mapping process, an organization must identify controls; map required controls to cloud security benchmarks, standards, requirements, regulations, and rules; identify the controls
* When using a spreadsheet to map controls, choose appropriate control titles, domain categories, and descriptions to identify related controls
* Then, conduct an inventory of all assets, including hardware, software, and data. And then group controls by type of asset.
* After mapping, identify the controls that aren’t mapped and assess which ones need to be implemented.
* Next, it’s time to perform a platform and service level assessment.
  - Once you confirm your controls are fully mapped, gather any needed supporting information.
  - Once the documents are ready, the IT team or supporting organization will review all provided information in an official platform assessment
* Finally, implement guardrails using policy initiatives, using built-in or third-party tooling.
* Security guardrails are broad rules that prevent an insecure or not-policy-aligned action, but guardrails are not as narrow and directed as policy rules. For example, developers might be allowed to launch services that cannot be exposed to the public internet The control that prevents that exposure is the guardrail.
* Security controls used at the workload level are applied to a collection of resources or code that delivers business value, like a customer-facing application. Security controls used at the platform level are applied to a common environment for running applications, like operating systems, programming languages, and runtime environments.

* [compliance report.pdf](https://github.com/user-attachments/files/17406211/compliance.report.pdf)
* [compliance report1.pdf](https://github.com/user-attachments/files/17406186/compliance.report1.pdf)
* [compliance report 2.pdf](https://github.com/user-attachments/files/17406176/compliance.report.2.pdf)

 </details>
---------------------------------

You wouldn't try to surg big waves before knowing how to swim
The skill that I think is most important for cybersecurity practitioners is a willingness to understand that you don't know everything.

---------------------------------
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
quick labs links in google cloud
</summary>

* here is the link for quicklabs https://sathishvj.medium.com/qwiklabs-free-codes-gcp-and-aws-e40f3855ffdb
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
* Check replicas
```javascript
kubectl get replicasets // to view your replicas
```
* Check pods 
```javascript
kubectl get pods 
kubectl get deployments 
```
* 
### Declarative commands (Configuration files)
* Aove works when we learn and test k8 step by step, but real strength comes when we use declarative commands.
* These configuration files becomes management tools, edit change and present it to k8.
* We can get starting point from one of the files as 
```javascript
kubectl get pods -l "app=nginx" -o yaml
```
* Then it would create one yaml as 

	<img width="379" alt="Screen Shot 2022-04-09 at 2 05 59 PM" src="https://user-images.githubusercontent.com/7471619/162591701-e33d1b72-063c-4af3-a694-280c2b15fe1e.png">
* All 3 replica above tagged as NGINX. 
* We can save them in our version control system to keep track of infrastructures. 
* You can edit above yampl file and deploy it as 
```javascript
kubectl apply -f nginx-deployment.yaml
```


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
```
mongoose.connect('mongodb://docker.for.mac.localhost:27017/databaseName')
``` 

#### Publish on Dockerhub
* Docker login
* docker tag app_image infroger/app_image:1
* docker push infroger/app_image:1


### S3
* Is an object storage service, that provides scalability and reliability. It can use as data backup and archiving data
* `aws-sdk` library requires to connect to s3
* `underscore` not use in bucket name, no `period` in bucket name, no `-` next to `period`. No `upper case` in bucket name
* S3 is not DFS or a distributed file system, it is a binary object that stores data in key value pairts. Keys being your "folder path" and values being the binary objects (files)
* use this to use s3 in mac
```
brew install s3fs 
echo ACCESS_KEY:SECRET_KEY > ~/.passwd-s3fs
cat ~/ .passwd-s3fs ACCESS_KEY:SECRET_KEY
chmod 600 .passwd-s3fs
```
* The owner of bucket can select who can access to buckets.
* How to use s3:
```javascript
const upload = require('../../services/upload.js');
const singleUpload = upload.single('image');

router.post('/uploadFile', async (req, res, next) => {
	singleUpload(req, res, function(err) {
		return res.json({ imgUrl: req.file.location });
	});
```
* Where upload.js is like 
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
* Get list of buckets
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

### EKS vs ECS
* ECS EKS represent different containerzied services that they are withing in this cluster 
* ECS Elastic Container Service allows to run k8s. It does manage LB and or Network LB automatically unkike EKS which you can use more customize 
* Elastic Container Service for Kubernetes allows to use Kubernetes on AWS. It provides some feautes as:
  * Elastic LB for load distribution
  *  IAM for authentication
  *  VPC for isolation
  *   CloudTrail for logging
* EKS use to manage and deploy containerized applications. It is good for apps with high availability and fault tolerance, such as web applications, microservices, and data processing pipelines
* AWS provides all tools which you need in kubernetes environment at EKS like worker nodes or control plane, this is the different between EKS and EC2
* `ECR` keeps images, to access ECR from ECS you need to add a policy to IAM policy then access it via url 
* Get access to ECR images as 
```go
aws_account_id.dkr.ecr.region.amazonaws.com/my-repository:latest
```
* `Helm` helps you manage Kubernetes applications — Helm Charts help you define, install, and upgrade complex Kubernetes application. Charts are easy to create, version, share, and publish — so start using Helm and stop the copy-and-paste


### EC2
* Amazon Web Services EC2 (Elastic Cloud Compute) is a web service that offers resizable compute capacity in the Amazon Web Services cloud. It provides Infrastructure as a Service (IaaS) to its consumers (IaaS). It gives you full control over your computing resources, which you can scale as needed

### Route53
* A DNS web service
* Amazon Route 53 Traffic is a domain name system service that lets customer to define how end-user traffic is routed to application via drag-and-drop graphical user interface to ease traffic management, it has a global LB 
  
### Serverless service Lambda 
* Serverless Computing
* Event based computing which runs on the event, same as `Cloud Functions` in GCP. They both have automatic scaling and
As part of the free tier, they both provide at least a million free requests
* A standard serverless application consists of one or more functions triggered by events such as object uploads to Amazon S3, Amazon SNS notifications, or API actions, Amazon Simple Email Service, AWS CodeCommit
* You charged based on  number of requests functions and the duration
* There are 3 ways to trigger lambda:
  * API Gateway event, It will trigger your lambda function, when somebody is calling an API Gateway For Lambda. Need to specify in the configuration to find which event type has been triggered, or serverless.yml if you are using the Serverless Framework.
  * S3 When someone(s) modifies the contents of an S3 bucket, S3 events occur
  * DynamoDB events When someone updates a record in a specific DynamoDB table (a nosql supported aws db)


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





## Projects in GCP
* Any resource you create is part of a project. Each project needs to associate with billing account. 
* Use projects as hierarchy to determine permisions and roles. Organazation, folders and then projects. Then you can manage 


# Terraform

 
<img width="330" alt="Screen Shot 2022-06-05 at 1 01 30 PM" src="https://user-images.githubusercontent.com/7471619/172068368-a52b2238-84b0-419d-a4eb-3f2502b4fa36.png">

### Providers

* There are two providers, one google and another is google beta
* <img width="496" alt="Screen Shot 2022-06-05 at 1 03 57 PM" src="https://user-images.githubusercontent.com/7471619/172068459-1ceb7c9c-2fd1-4e16-9511-470ee8a3fae6.png">

link for tutorial references:
* https://github.com/ned1313/terraform-tuesdays/tree/main/2021-07-20-Getting-Started-GCP
* https://www.youtube.com/watch?v=JQYgFSYFi-o
	
### Spin Compute Engine in GCP using Terraform

#### Enable Compute Engine API
```javascript
gcloud services enable compute.googleapis.com
```
### Standard Starts
```javascript
terraform init
terraform validate
terraform plan -var gcp_project='something' -out ex.tfplan // create a plan to execute
// once it generates plan apply it
terraform apply ex.tfplan

```
	
* 
	
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
 


# <font color=Blue> Automation and CI/CD </font> 

* Automation is leveragin tools to get infrastructure created and getting deployed with less human intervention. Like define a buttom on the build to run terraform or aws cloudFormation, instead of manually provisions each service

* CI/CD having a pipeline since you commit the code to repository and it deploy to different environments for QAs, testing, staging and production with minimum intervenion. 

### Automation



# <font color=Blue> Stateless vs Statefull Services  </font> 
* Stateful services are good for small apps, all services use one db and comunicate. If one of them is down the app is down
* Statelss services, services not depends on each other works, each services can have replicas in case of down other works, each service could have its own db and helps in scaleability


# <font color=Red> Security, LB, Firewall, VPC, Policies </font> 
* LB: having many requests can increase unintended the cost, if they are not maliviouse, so LB is good to hadnle traffic. AWS has API gateway that is LB where we can rate limit reqs, max req
* Firewall: Make sure requests come from valid resources
* Policies: To make sure services can access the right service
* VPC: Only you and company and no other ppl

* SaaS: Software as a service: Application access over the web not manage by you like slack
* IaaS: Infra Structure as Service: Acuiring computing and storage on demand. The model is pay as you go model. EC2 you only pay the size of instance you have, DynamoDB: you pay as many as database you have you pay
* PaaS: Platform as service, Offer access to cloud base environment without installing it. Google App engine is an example


# <font color=green> Scalling Vertical and Horizental </font> 

### Vertical Scaling
* Means you upgrade hardware like need memory just add it. 
  * Pros: cost effective, less complex process, less software need change
  * Con: impact users, high possibility of downtime, upgrade limitation, singl point failure

### Horizental
* Means you increases the number of servers so more instances
  * Pros: Scaling is easir than hardware scales, less downtime, increase resiliance and fault tolerance, increase performance 
  * Cons: increase complexity maintain operation, more initial costs, track and trace requests on more machines is more complex

# <font color=green> Latency  vs Throughput </font> 

* `Bandwidth` the number of packets that can be transferred throughout the network
* `Latency` How long takes packets reach their destinations
* `Throughput` Number of packets that are proceed within a specific period of time
*
