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


 ### Cloud Security Audit

 * Audit test cloud environment to ensure controls are in place to protect assets
 -  A `cloud audit` is an assessment of the cloud environment that is usually conducted by a third party.
 -  It results in a set of findings that describe how well an organization is meeting the audit standards, and it also provides ideas for improvement.
 -  The audit plan includes the controls auditors will be evaluating for in the audit.
 -  Audit focus on security controls,security controls are safeguards designed to reduce specific security risks.
 -  Another benefit is contractual compliance and insurability.
 -  Two of the biggest challenges of audit are time and resources.
 -  Without an accredited auditor, your organization will not be certified or receive an official `SOC 2` letter.

##### What covered in a cloud audit:

An organization is preparing for a cloud security audit, security controls should they check for compliance with audit standards are:

* `cloud security procedures and policies`: The auditor will evaluate current cloud security policies.
*  `access control`: assess access controls to ensure they are adequately implemented.  strong password standards and policies, multifactor authentication, privileged access management, and least privilege principle for all cloud assets.
*  `network segregation`: They search for evidence that network is segregated in accordance with standard, as outlined in the audit plan.
*  `data protection`: They verify that data is encrypted at rest and in transit using effective cryptographic algorithms. Auditors also ensure that data loss prevention tools are in place.
*  `loggin and monitoring`: to verify that all required actions are logged and that critical activities are monitored.
*  `incident response`: verify that the organization is prepared to respond to incidents by reviewing the incident response processes.
*  A `security audit` can be internal or external, and includes an evaluation of various areas of control. The intent of an internal audit is to provide the board audit committee and stakeholders, like the CFO, evidence that internal controls are appropriately applied.
*  The purpose of an external audit may be to become certified in a standard, like ISO 27001.
*  `Security assessments`, however, are less complex. They only scan the company’s technological systems and identify flaws. Security assessments usually consist of an automated scan to ensure that controls are in place as intended.

* Audit best practice:
- study the audit requirements and make a plan to pass the audit.
- identify asset and control inventory, such as control mappings, components, connections, functionality, and the people accountable.
- assess your cloud architecture.
- be sure to identify points of contact to work with auditors, and ensure their schedule has availability.
- test run your own internal audit. The single best practice for audit preparation is to do an internal test audit using the exact testing criteria outlined in the audit plan.
- gather evidence and prepare reports on the existing security controls.

#### Control inheritance

* Control inheritance is the process of using controls or compliance certifications and audits that are already provided by a cloud service provider.
* Lack of internal compliance may result in a less secure cloud environment.
* Lack of external compliance may result in a failure to secure or retain a commercial relationship with a business, or incur fines and penalties by a regulatory body.
* Frameworks are consensus agreements that outline the minimum acceptable level of security.
* Recognizing and adapting inherited controls to business requirements will enable you to achieve compliance within your organization.
* Once you understand industry requirements, legal requirements, and commercial expectations, you can choose frameworks and or compliance certification programs to help guide your cloud security team.
* `Noncompliance` is the failure to follow standards and regulations that are set by internal standards and policy, or external laws and regulations.
* Negative organizational impacts include:
  - financial loss,
  - legal risk,
  - reputational loss,
  - talent loss.
* An organization that is not in compliance may be subject to legal risks like imprisonment of its leaders, fines, and shareholder and customer lawsuits.

#### Infrastructure as code, Policy as code
* Infrastructure as code or IaC, is the practice of automating and managing infrastructure using reusable scripts.
* When you apply IaC, you’ll likely experience stronger security, faster incident recovery, and improved accountability.
* Policy as code, or PaC, is the use of code to define, manage, and automate policies, rules, and conditions using a high-level programming language.
* PaC allows you to write continuous assessment checks against the infrastructure to determine that it’s secure and compliant, and remains that way.
  - Efficiency: a security team can share policies and automatically enforce them, rather than manually.
  - Speed: security team operations are faster when the team automatically enforces policies.
  - Visibility: it’s easier for all stakeholders to understand what’s happening in the system.
  - Collaboration: PaC provides a clear and uniform way of managing policies, and so simplifies collaboration, not only within the same team, but also between different departments or teams.
  - Accuracy: when a security team automatically enforces policies, there’s less risk in making a mistake.
  - Version control: if your team keeps track of policy files as they change, PaC makes it
  - Testing and validation: with PaC, it’s easier for a security team to utilize automated auditing software to check that the code is valid and doesn’t have any gaps or errors.
* Pac Activity [pac activity review.pdf](https://github.com/user-attachments/files/17424778/pac.activity.review.pdf)

Questions/Answers
* Using threat intelligence to assist in the analysis of risk is an example of a Risk Assessment control.
* The Awareness and Training control focuses on establishing security education policies and procedures related to awareness and training.
* The Access Control policy focuses on granting or denying privileges to users.
* The reputational risks of non-compliance include a loss of customers’ trust, which can lead to lost business. Reputational risks also include damage to the brand’s reputation with stakeholders, partners, and the general public.
* PaC is easy for stakeholders to check, making it easier for them to understand what is happening in the system. PaC also improves accuracy because policies are automatically enforced. PaC also makes it easier for a security team to utilize automated auditing software to check that the code is valid and doesn’t have any gaps or errors.

* [module 3 glossory.pdf](https://github.com/user-attachments/files/17426720/module.3.glossory.pdf)
* [CCS-C2-act-005c-en-file-58.en (1).pdf](https://github.com/user-attachments/files/17426721/CCS-C2-act-005c-en-file-58.en.1.pdf)
 
 </details>

<details>
<summary>
Cloud tools for risk management and compliance
</summary>


* MITRE is a not-for-profit organization that conducts research to support government agencies in several fields, including cybersecurity.
* The National Vulnerability Database, or NVD, is a publicly accessible repository of data about known system and software vulnerabilities created and updated by the National Institute for Standards and Technology, or NIST
* The primary purpose of using a CVE® identifier is to streamline communication and sharing of vulnerability information. Its purpose is to standardize the name of vulnerabilities, not to develop fixes or patches.
* NVD uses:
- vulnerability management: The vulnerabilities in the NVD are categorized based on their unique CVE® numbers. The NVD also contains information about vulnerabilities’ severity, whether fixes or patches have been created to address them, and how much potential they have to affect systems.
- security measurement: 
- compliance
* The Open Web Application Security Project, or OWASP is a foundation that creates guidelines and frameworks for securing software.  The OWASP Top Ten is a regularly updated report of critical security risks for web applications.
* OWASP created the Top Ten by researching common risks that make it easier for attackers to target web applications, like misconfigured security settings, or insecurely designed applications. Cloud security analysts use the Top Ten to guide their security testing efforts, minimize vulnerabilities in cloud environments, and assess risks.
* The purposes of the Open Web Application Security Project (OWASP®) Top Ten are to guide security testing efforts and minimize vulnerabilities in cloud environments. It does not focus on highlighting high-profile security breaches, but on identifying critical web application security risks as a reference to help organizations improve their security posture.

### Multicloud CSPM

* Multicloud is a strategy of using more than one cloud service provider.
* Cloud security posture management, or CSPM, is the process of monitoring and configuring cloud assets for security and compliance with best practices, regulations, and organization policy. using multi clouds allow to get best of each ones
* CSPM tools automatically scan cloud assets and alert security teams if a potential issue is found.
- CSPM provides a centralized place to ensure the right policy actions and controls are in effect and alert you to events within the multicloud environment.
- They also help keep the whole environment secure and in line with compliance standards.
* For example, CSPM tools can also automate threat response by automatically isolating assets that may have been compromised until the security team has a chance to address them.

Tools:
##### Palo Alto Prisma Cloud
* `Palo Alto Prisma Cloud` is a cloud-native application protection platform, or CNAPP.
* `Prisma Cloud` secures cloud-native applications through the stages of the development process.
* Prisma Cloud works by taking in configuration data, user activity, and network traffic from across an organization’s cloud environments. 
* Using this data, Palo Alto Prisma Cloud provides visibility across the hybrid or multicloud environment.
* It also provides security assessments and compliance monitoring.
* Prisma Cloud can also integrate with external services to help provide remediation.
* Prisma Cloud provides identity and access management, or IAM, capabilities to help your organization maintain least-privilege access.

##### Crowdstrike Falcon Cloud
* Next, Crowdstrike Falcon Cloud is a cloud-native endpoint protection platform.
* It’s designed to protect endpoints, including desktops and laptops, servers, and virtual machines.
* Like other CSPMs, Falcon CloudFalcon Cloud also uses machine learning, or ML, and artificial intelligence, or AI, threat detection algorithms to analyze activity and respond to potentially malicious behavior in real time. uses threat intelligence to detect potential threats in an organization’s cloud assets.

  
* `Orca scans` cloud workloads and identities and provides visual graphs of potential attack paths.
* Another agentless CSPM, Checkpoint Cloudguard, uses rules and queries written in a unique, human-readable syntax called Governance Specification Language.
* And finally, the Netskope Cloud Security Platform is a CSPM tool that has a unique focus on data security and data loss prevention.
* 
##### Security Command Center

* Security Command Center, or SCC, is Google Cloud's centralized vulnerability and threat reporting service with CSPM features.
* Security Command Center scans your organization’s cloud infrastructure, helping you prevent, detect, investigate, and respond to threats throughout your organization’s cloud environment.

* `SCC features`:
- You can use SCC’s assets feature to carry out an asset inventory review to help you discover and view your resources and policies in near-real time.
- This tool also provides asset tracking, so you can identify new, modified, or deleted assets.
- Real time notification
- Security Health Analytics service, which can identify misconfigured virtual machines, containers, networks, storage buckets, and IAM policies.
- And second is the Web Security Scanner service, which automatically detects vulnerabilities in App Engine, Google Kubernetes Engine (or GKE), and Compute Engine applications.
- `Web Security` Scanner provides two main types of vulnerability scanning:
   	- managed scans: Managed scans are configured and managed by SCC, and manage basic vulnerability detection for projects across the organization.
   	- custom scans: You can configure custom scans to provide more granular information about vulnerabilities in individual projects.
- The `Event Threat Detection service` scans your Cloud Logging stream for potential threats based on threat intelligence features, or information about known or potential threats.
- The Container Threat Detection service scans for potential compromises of GKE containers.
- And the Virtual Machine Threat Detection service scans for potentially malicious applications running in virtual machines, or VMs, or Compute Engine
- Beside thread detection, SCC can scan our cloud for violations of certain compliance frameworks. It recommends fixes for any violations found.
- SCC also integrates with other data sources to provide more details about your cloud security posture. For example, Cloud Armor analyzes traffic to help protect cloud assets from DDoS and common OWASP attacks.
- Sensitive Data Protection scans storage buckets and databases for sensitive and regulated data, and provides recommendations to secure it.

* SCC is available in two tiers: standard, or no cost, and premium.
  - The standard tier provides Security Health Analytics, including identifying high-severity threat detection.
  - The premium tier builds on the functionality of the standard tier, including the Security Health Analytics service with the addition of PCI and CIS Benchmark reporting support.
  - The premium tier also includes Web Security Scanner, along with Event Threat Detection, Container Threat Detection, and VM Threat Detection.

### Mange Risks in cloud by using tools
* There are a few tools included in the Google Security Command Center, or SCC,that you can use to improve your organization’s security posture and compliance. Risk Manager is a risk assessment and management service within Google Cloud SCC.
* When it’s time for your organization to purchase cyber insurance, you can send Risk Manager reports directly to cyber insurance carriers
* `Policy Analyzer` lets you know which users, service accounts, and domains can access which cloud resources, and helps you achieve least-privilege access.
* `Role-binding reports` include sets of one or more members and identities, known as principals, who have a permission or role granted by the cloud security team.
* `Assured Workloads`, is a tool that manages the security and compliance of Google Cloud workloads. Assured Workloads also provides data residency controls at rest or in use.
- If your compliance obligations require you to store data in certain geographic locations, Assured Workloads automatically restricts data storage to the regions you designate.
- Assured Workloads’ personnel data access controls help make sure only authorized Google personnel can access your data.
- Authorized personnel can include people within the physical area of your compliance program, and who satisfy the required background checks.
- Assured Workloads also provides monitoring and alerts to organization policy changes that break compliance.

* ![guid with image on risk management.pdf](https://github.com/user-attachments/files/17441723/guid.with.image.on.risk.management.pdf)
* [Cloud tools for risk management.pdf](https://github.com/user-attachments/files/17441724/Cloud.tools.for.risk.management.pdf)
QA:
* Which states of data does Assured Workloads control? in use and At rest
* What are Google Cloud's default settings for data encryption? in transit * at rest

### applying for cyber insurance using Google’s Risk Protection
* Buying cyber insurance can be challenging because it’s usually seen as difficult to underwrite
* `underwrite` Underwriting is an insurer’s process of pricing an insurance policy.
* it difficult for insurance companies to decide whether they will insure an organization, how much the policy will cover, and what the cost will be. To make it easy Google developed the `Risk Protection Program`, a solution that provides insurance carriers with information about an organization’s level of risk.
* The Risk Protection Program sends data from Risk Manager directly to Google’s insurance carrier partners to help make underwriting cyber insurance easier and more accurate.
* Here are the `Risk Protection Program` steps
-  the organization must generate a `Risk Manager report`. Risk Manager reports provide centralized recommendations an organization can use to minimize risk.
-  then sends it to the insurance carrier.
-  Next, the insurance carrier sends a specialized security questionnaire to the organization to fill in any details about the organization’s security posture.
-  The insurance carrier then uses this information to complete the underwriting process.
-  Then, they send a quote back to the organization through a broker based on the amount of risk the organization carries.

* `Cloud Protection+` is a specialized insurance policy developed by Google in collaboration with insurance carriers and is available through the Risk Protection Plan.
  - Cloud Protection+ helps cover losses to the insured organization’s computer systems or the critical IT systems of third-party IT providers.
  - The policy is based on underwriting that recognizes the security posture and investments of both the insured and Google.

###  shared fate
The shared fate model emphasizes a strong collaborative relationship between the customer (Jennifer's team) and their cloud service provider to manage risks effectively. This collaboration helps both parties understand and address security concerns, ensuring a more secure cloud environment.

* shared fate, a model of how cloud service providers and their customers depend on each other to keep cloud assets secure.
- The CSP is responsible for the security of the cloud infrastructure and services they provide. including physical and Operating systems
- The customer is responsible for securing resources in the cloud by configuring resources, managing IAM, and securing applications running in the cloud.
  
* Shared responsiblity may cause some issues: For example, your cloud security team may be unsure whether default settings on cloud products are right for the organization’s needs.
* In a `shared fate model`, the CSP plays a more involved role throughout the customer’s journey in the cloud.
* The shared fate model also includes secure-by-default settings. This means that cloud resources come with robust security settings.
* The CSP regularly tests controls in place on their cloud services to make sure everything’s working as it should.
* Cyber insurance can assist in retrieving data and cover financial losses. This could include retrieving lost or corrupted data after a cyber attack.

* A `cloud organizational policy` is a set of restrictions, or constraints on a specific cloud service or a list of services.
* Organizational policy addresses what resource configurations are allowed in an organization or in a specific set of resources.
* You can also set organizational policies using `tags`. Tags let you define groups of resources throughout a hierarchy and assign constraints to all resources in the group.
* And, since organizational policies can prevent unnecessary resources from being created, they can be used to control costs.

### constraint types
* list: List constraints are rules that allow or disallow a set of values, and are useful when you need to specify the characteristics of resources created within your environment.
* boolean: Boolean constraints are constraints that are either enforced or not enforced for a resource. This is known as the disable automatic role.

* The `editor` role includes a large number of permissions, and can pose a security risk if an account is compromised. Using the constraint: `disable automatic role grants` to default service accounts,” you can prevent new service accounts from automatically receiving the editor role when they’re created. This lets you choose which permissions to grant to service accounts either manually or by adding additional constraints to your organizational policy.

### Organization Policy Service
* Organization Policy Service gives you centralized control over organization policies throughout your resource hierarchy.
* And it lets you choose resource configurations to allow and enforce in your cloud environment.
* You can get all the permissions needed to set constraints using Organization Policy Service by asking your administrator to grant you the Organization Policy Administrator role. To be able to delete define or create constrains
* A `constraint` is a restriction against a Google Cloud service, or a list of services.
* The domain-restricted sharing constraint limits the set of identities that can be used in identity and access management, or IAM Policies. You can use this constraint to limit resource sharing to a specific Google domain or set of domains.
* Other constraints that can help keep service accounts secure include disable service account, or SA, key creation, disable SA key upload, or limit lifetime of service account keys.
* For example, you may work at an organization that falls under data residency requirements. You can use a list constraint to specify the set of locations where cloud resources can be created, and data can be stored. If someone in your organization attempts to create a resource in a location that isn’t on the list, they’ll get an error, the resource will not be created, and the attempt will be logged.
* 
QA:
- What is a cloud organizational policy? A set of restrictions or constraints on cloud services
- Security Health Analytics identifies misconfigured virtual machines, containers, networks, storage buckets, and Identity and Access Management (IAM) policies.

* [resources module 2.pdf](https://github.com/user-attachments/files/17446333/resources.module.2.pdf)
* [Glossary terms from module 4.pdf](https://github.com/user-attachments/files/17446336/Glossary.terms.from.module.4.pdf)


</details>

# <font color=green> Identify and Protect Against Threats </font> 

<details>
<summary>
 Fundamentals 
</summary>
At this course, we learn tools and techninuqe to protect your organization's data and infrastructure. After completing this material, you’ll be on your way to becoming an effective and knowledgeable cloud security expert who is capable of addressing challenges and protecting an organization's cloud assets.

## Identity Management

* `Identity management` is a core component for access control in cloud environments. Combining identity and network controls strengthens the defense of cloud environments.
* Organizations GS+ uses multitude of service providers,  this diversity, while offering flexibility and choice, also requires a unified approach to managing user identities and access control.
* Centralized and consistent identity management is essential for several reasons.
-  you streamline access control when you have multiple platforms and services in play and centralize the process of granting, modifying, and revoking access to resources —as opposed to managing these resources in separate environments.
-  you enhance security when you minimize vulnerable systems by consolidating access controls and preventing potential breaches.
-  you improve compliance when you fulfill requirements to meet compliance rather than when you just focus on implementing controls on data access and user authentication.
-  you simplify administration when you provide a single interface for managing users, groups, and permissions across many systems in your environments.
-  you save operational and resource costs when you centralize multiple identity management systems into a single identity platform.

### key concepts in identity management

* `Role-based access control`, or RBAC, is a method of controlling access to resources based on the roles assigned to users. This helps ensure users only have permissions and access to the resources necessary for their job.
* `Single sign-on`, or SSO, is a technology that combines several different logins into one. It simplifies the authentication process by allowing users to access multiple applications using a single set of credentials. This minimizes the risk of password fatigue, which is when users feel overwhelmed by the number of different login credentials they need to manage.
* `Multifactor authentication`, or MFA, is a security measure that requires a user to verify their identity in two or more ways to access a system or network.
* `Identity and access management services, or IAM`, is a collection of processes and technologies that help organizations manage digital identities in their environment.These services enable you to create, manage, and delete users and groups, and assign and enforce access policies.

- [IAM BEST GRAPH.pdf](https://github.com/user-attachments/files/17446644/IAM.BEST.GRAPH.pdf)

### Authentication, authorization, and auditing AAA

* AAA describes a security framework that is used to verify the identity of users or groups in systems and grant them access based on their privileges.
* `Authentication` is the process of verifying who someone is. MFA significantly reduces the risk of unauthorized access, as malicious actors would need multiple forms of authentication to breach the system.
* `Authorization` is the concept of granting access to specific resources in a system. One form of authorization is role-based access control, or RBAC. RBAC streamlines the process for administrators, allowing them to manage permissions collectively rather than individually.
* `Auditing` is the process of recording and reviewing system activity to ensure compliance with security policies and identifying potential security breaches. Auditing also helps identify potential security threats and vulnerabilities. there are several types of audits that can be conducted:
  - Compliance audits: Compliance audits ensure that the organization is complying with the relevant laws and regulations.
  - Security audits: Security audits assess the security posture of the information system.
  - Operational audits: Operational audits evaluate the effectiveness and efficiency of the system's operations.
* An audit is only effective when its objectives are clearly defined from the beginning. These objectives should be specific, measurable, achievable, relevant, and time-bound called SMART goals.
* Tool we need is The Triple A framework which provides a comprehensive and effective approach to ensure the confidentiality, integrity, and availability of cloud resources.

### Security principles

* As a cloud security professional, `credential management` is a good place to start. The risks associated with unauthorized access to data are primarily because of inadequate credential management practices.
* Users in organization need to constantly change their passowrds, users can also use a password manager to securely store and manage their credentials.
* `Secret management`: Secrets are sensitive information like Application Programming Interface, or API keys, passwords, and certificates that are used to authenticate and authorize access to systems.
* Best practices for managing secrets include using a centralized secret management tool, strong encryption methods to protect them, and regular rotation of API keys, passwords, and certificates.
* `Non-interactive service` These accounts are created for automated processes and services and are often overlooked. If not properly managed, they can provide an easy entry point for malicious actors to infiltrate your systems. To mitigate this risk, it's important to regularly review and audit these accounts, rotate keys associated with service accounts regularly, and limit their privileges. GS+

### security protocols
mTLS, OAuth, and OpenID are three common protocols that provide secure communication between different systems and services.
* `mTLS`, or mutual Transport Layer Security, is a protocol that provides mutual authentication and encryption between servers. It's a variation of the Transport Layer Security, or TLS protocol, that secures communication between a client and a server. With mTLS, both the client and the server authenticate each other, ensuring that the communication is secure and private.
* `Open Authorization, or OAuth`, is a method that allows users to grant applications access to their information on other sites or systems without the need to share their passwords. Open Authorization, or OAuth, is a method that allows users to grant applications access to their information on other sites or systems without the need to share their passwords. can use OAuth to securely authorize the application to access your account without sharing your credentials.
* `OpenID` is a protocol that is used for single sign-on functionality, allowing users to authenticate once and access multiple services. The process involves the user authenticating with an identity provider in exchange for an identifier. This identifier can then be used on another site or service, without the user having to authenticate on that site or service for a second time. This simplifies the login process for users and reduces the risk of password fatigue and credential reuse.

## Access Control Types 

* Access Control ensures that only authorized individuals can access data and resources.
* `discretionary`, `mandatory`, and `role-based` access controls.
- `Discretionary access control`, or DAC, a security model where the owner of the data or resource has the discretion to grant or revoke access to other users. For example, in Google Drive, it’s possible to share only view access with an individual to one specific file, while simultaneously providing edit access to a different file. These varying levels of access —from partial to full— from the owner of the files, are discretionary. DAC can be implemented using access control lists, or ACLs for each user or group
- `mandatory access control`, or MAC, which is a strict security model in which access is granted based on predefined security policies. In a cloud environment, MAC can be implemented using security labels or tags which are assigned to both data and users.
-  `Role-based access control`, or RBAC. RBAC is a method of controlling access to resources based on the roles assigned to users.
-  `Attribute-based access control`, or ABAC is a security model where access is granted based on attributes like user, resource, and environment. 

* `policies` can be based on a variety of attributes, like the user's job title, the sensitivity level of the data, or even the current day and time. Implementing ABAC in a cloud environment typically involves setting up a policy decision point, or PDP, and a policy enforcement point, or PEP.
* The PDP evaluates policies and makes access decisions, while the PEP enforces those decisions by granting or denying access to the resources.
* Remember IAM allows you to manage users, groups, roles, and permissions across your cloud environment. Along with IAM, organizations must also consider policies and resource hierarchies.

#### best practices for implementing access controls

* Apply the principle of least privilege, giving users only the permissions they need to perform their tasks
* Separate duties to minimize the risk of unauthorized access or actions
* Regularly audit access controls in your cloud environment to ensure access permissions are up to date.

### Types of Perimeter Protection

* `perimeter protection` refers to the security measures implemented at the edge of a network or system to defend against unauthorized access and cyber threats. several types of perimeter defenses that can be implemented to protect a cloud environment
- Identity and context-based access is increasingly becoming the first line of defense because it offers a robust security solution compared to traditional methods.
- Firewalls typically are only for internal networks and can help prevent lateral movement within the system.
- Intrusion detection systems, or IDSs, monitor network traffic, check for signs of suspicious activity, and alert administrators when detected.
- Intrusion detection and prevention systems, or IDPSs, monitor network traffic for signs of malicious activity and either alert the administrator, or actively block the threat, or both
- Virtual private networks, or VPNs, create a secure, encrypted tunnel for data to travel between
-  Access control lists, or ACLs, restrict access to resources in the cloud, ensuring that only authorized users have access to specific data or services.
#### Trust boundaries
* Without clearly defined trust boundaries, your network is at risk of unauthorized access, data breaches, and other security issues. Establishing trust boundaries can help you better manage access to sensitive data and identify potential vulnerabilities.
* These best practices can be categorized into three primary areas: improve cloud network security, monitor and control access, and maintain security policies and training
- `improve cloud network security`: Implement network architecture that always requires user authentication. Segment networks, use microperimeters, and apply context-aware access controls and define trust boundaries between network zones based on risk and required access controls.
- ` monitor and control access`: Regularly review and update firewall rules. Deploy cloud-based IDS IPS solutions for protection, and implement secure remote access solutions, and enforce strong authentication methods.
- `audit and update IAM policies for least privileges, train employees `  on cloud security best practices, and enforce strong password policies and multifactor authentication, or MFA.

* Fire wall rules [firewall rules.pdf](https://github.com/user-attachments/files/17447708/firewall.rules.pdf)
* Trust [Trust boundaries.pdf](https://github.com/user-attachments/files/17447709/Trust.boundaries.pdf)
* [Cloud access control in action.pdf](https://github.com/user-attachments/files/17447711/Cloud.access.control.in.action.pdf)

* `src_port` - This is the source port number that's assigned to your computer. According to Internet Assigned Numbers Authority (IANA) standards, this is typically a random port number between 49152-65535.
* direction - The rule's traffic direction can be either ingress or egress, here it is INGRESS which means the action will apply to incoming traffic.


## Common Attack Vector

`Attack vectors` are pathways attackers use to penetrate security defenses. Guidelines of using attack vectors
- gain insight into attack vectors that are vital for network and system security.
- once you gain insight into attack vectors, pinpoint potential vulnerabilities, and effectively defend against targeted attacks.
- Next, we’ll discuss strategies using countermeasures to help you overcome common attack vectors that impact perimeter and boundary protections

* Malicious actors may use social engineering tactics that exploit human mistakes to gain access to sensitive data or valuables. Examples of social engineering are phishing, vishing, smishing, and spear phishing attacks.
- These types of social engineering attacks involve the use of digital communications to trick people into revealing sensitive data or deploying malicious software.To counter this, you can implement user training and email security measures.

* password attacks are a widespread threat that usually involve brute force techniques in which attackers use trial and error to reveal private information.
- To significantly improve security, strengthen your password policies and incorporate multifactor authentication.

* Cybercriminals might also exploit vulnerable software by taking advantage of known vulnerabilities.
- To counteract this, it's crucial to regularly patch and update software, and use vulnerability scanning tools.

* Then, there's malware, or software designed to harm devices or networks, which infiltrate and compromise systems.
- To combat malware, use advanced malware protection solutions and regularly update your software.

* distributed denial of service, or DDoS attacks, are a type of denial of service attack that uses multiple devices or servers located in different locations to flood the target network with unwanted traffic
- To protect your company from these attacks, deploy DDoS mitigation services and monitor network traffic

QA:
* A large real estate company has become aware of multiple attempts by cybercriminals to exploit their software vulnerabilities. What steps will protect their client data and prevent financial loss? 
- Implementing user training and email security measures, deploying DDoS mitigation services, and monitoring network traffic can protect the company’s client data and help avoid financial loss.
* Methods that improve cloud network security include defining trust boundaries based on risk and required access controls, segmenting networks, and applying context-aware access controls.

### Zero Trust
Traditional access control models, like role-based access control, or RBAC, and discretionary access control, or DAC, were designed with the assumption that everything within the network perimeter could be trusted. Zero trust is based on the principle of "never trust, always verify."
* This means that every user, device, or system must be authenticated and authorized before accessing any resources or data. This approach assumes that any user or device, whether inside or outside the network perimeter, could be compromised. So, every access request must be validated and authorized on a case-by-case basis.
* `Granular access` control allows for more defined control over access, as permissions can be granted or restricted based on specific conditions.

 `core principles of zero trust`:
 
  - The first principle is verify explicitly: This means that every access request must be authenticated and authorized before access is granted to any resource.
  - The second principle is apply least-privilege access: This means that users, devices, and systems should only be granted the minimum access necessary to perform their tasks.
  - The third principle is assume breach: Organizations embracing zero trust should operate under the assumption that a breach has already happened or will happen, and design their security measures accordingly.

* Another critical aspect of zero trust is the use of `context-aware access controls`. Context-aware access controls are decisions about granting or denying access to resources, based on the user's identity and contextual information like location, device, and behavior patterns.
* CASBs act as intermediaries between cloud service users and cloud service providers, enabling organizations to enforce security policies and maintain visibility over cloud-based activities. By incorporating ZTP, CASBs can restrict access to sensitive data based on user identity, device, and context, ensuring that trust is not automatically granted.
* `SASE platforms`, on the other hand, combine network and security functions into a single, cloud-based service. By integrating ZTP with SASE, organizations can apply adaptive security policies based on real-time context, like user identity, device, location, and application.
* Both CASBs and SASE platforms play an important role helping organizations implement ZTP by providing granular access controls, continuous monitoring, and adaptive security policies based on context.

##### How to implement Zero trust
* zero trust policies using key access control mechanisms. hese mechanisms include: identity and access management, or IAM, multifactor authentication, or MFA, microsegmentation, and network access control, or NAC.
* `Microsegmentation` is a security technique that divides a network into smaller, isolated segments to limit unauthorized access and reduce the potential attack surface. This approach ensures that even if an attacker gains access to one segment, they can’t easily move within the network. 
* Network access control, or NAC, is a security solution that enforces policy-based access control to network resources, ensuring that only authorized devices and users can access the network. NAC's core function doesn't just stop at policy enforcement; it extends to identification, monitoring, and control of devices and users on the network.

* [zero trust policy.pdf](https://github.com/user-attachments/files/17449173/zero.trust.policy.pdf)

QA:
* How does centralized and consistent identity management enhance security? Select two answers? By preventing potential breaches and By consolidating access controls
* A company wants to assess the current state of their security system, identify any possible weaknesses, threats, or vulnerabilities, and receive recommendations to enhance their system protections. Which type of audit should the company conduct?  Security audit
* OpenID will reduce password fatigue and credential reuse.
* Deploy a firewall with access control rules that limit only the development team's IP addresses to access the development team's servers. If A small software development company has multiple departments. Due to the sensitive nature of the projects handled by the development team
* The company's focus changes from securing the network perimeter to implementing granular access control over individual resources. when A company decides to implement zero trust security architecture in their network

</details>

<details>
<summary>
Threat, Asset, vulnerability Remediation and Posture managements
</summary>

It is crucual to have threat management strategy

### Threat Management
* A `threat management strategy` is a comprehensive plan that addresses the various types of cyber threats an organization may face. The key components of an effective threat management strategy are prevention, detection, response, and recovery.
- `Prevention` involves implementing security controls to prevent cyber attacks from occurring in the first place. This includes firewalls, endpoint protection software, and access controls.
- `Detection` involves monitoring systems and networks for any signs of suspicious activity This includes intrusion detection systems, log analysis, and security information and event management, or SIEM, systems.
- `Response` involves quickly identifying and containing any cyber attacks that occur. This could include incident response plans, communication protocols, and emergency response teams.
- `Recovery` involves restoring systems and data to their pre-attack state. This could include backups and disaster recovery plans.

* Challenges to have effective implement threat
- As soon as you think you’ve handled one threat, another emerges.
- Another challenge is the lack of resources and expertise in the field of threat management
- There is the challenge of balancing security with productivity.

* Organizations needs to be update
* Have to use best tools include
* encourage cyber securtiy among employees

* Regular audits can help increase system uptime —when the system is working— by identifying potential issues before they cause downtime —when the system isn’t working.
* The organization should take two actions in the response phase: implement an emergency response team, and establish communication protocols for handling the incident. Reimplementing security controls is part of the recovery phase after a threat has been contained.

### Asset and Resource Management

* In the context of cybersecurity, asset management involves identifying all devices, software, and data within the organization; classifying assets based on their sensitivity and criticality; tracking assets throughout their lifecycle, from procurement to disposal; and ensuring proper security controls are in place for each asset.
*  Best Practices for asset management:
  - centralized inventory of all digital assets, including devices, software, and data.
  - categorize assets based on risk. This will help prioritize security efforts and allocate resources more effectively.
  - Assign clear ownership and accountability for each asset to ensure that they are properly managed and protected.
  - Establish access controls to limit who can access specific assets and ensure that only authorized personnel have access to sensitive data
  - Monitor and audit assets regularly

* One, establish a centralized asset repository.
* Two, automate asset discovery and updates. reducing the risk of human error
* Three, implement a regular review process.
* Train your staff

#### Tools to asset manager
* ITAM software offers a comprehensive inventory of software and hardware within a business environment, including details like purchase dates, prices, license information, and serial numbers. ITAM software also streamlines the process of tracking, monitoring, and managing your IT assets.
* Configuration management database, or CMDB, a repository designed to store data about your entire IT environment, including its relationships between hardware and software assets.This provides a holistic view of your IT infrastructure, allowing for better understanding and management.
* There are network scanners and discovery tools, which can help identify and catalog all devices connected to your network, providing visibility into your organization's assets.
* Vulnerability scanners can help identify potential security risks and vulnerabilities in your organization's assets, allowing you to prioritize remediation efforts.Maria should invest in vulnerability scanners first to help identify potential security risks in the organization's assets. Time tracking software is not primarily a tool for identifying potential threats to data security or managing IT assets.

#### Steps to do asset managemnet

* Identify: When the cloud security team identifies assets, it helps them understand the scope of their cloud environment and prioritize resources based on their criticality. Assets include servers, like virtual machines, DBs, Apps, APIs, LB, Storage buckets, network components
* Risk tiering is a process that enables organizations to identify and categorize their assets based on their importance and potential impact. like high-risk assets, medium-risk assets
  - High-risk assets include electronic health records, or EHR, which contain sensitive patient information, proprietary research data, and mission-critical applications like hospital management systems. GS+, Medium-risk assets include internal communication systems, employee records, and billing information.While not as critical as high-risk assets, medium-risk assets still require a solid level of protection to prevent unauthorized access and data breaches.
* `maintain effective oversight` This inventory should include information like asset type, location, ownership, and risk level.
* The process you follow to monitor and track assets is called asset lifecycle management, which helps organizations optimize their cloud resource usage and reduce potential security risks. Asset lifecycle management encompasses planning –which entails defining procurement requirements and handling capital expenditure– and addressing all aspects of the asset lifecycle.

#### vulnerability remediation and posture management

* Vulnerability remediation is the process of identifying, assessing, and resolving security vulnerabilities in your cloud environment, Vulnerability remediation is a process that typically involves six steps. 
  - Find it. The team must understand the vulnerability and how potential attackers could exploit it.  Tasks may involve reviewing code, consulting documentation, and researching known security issues related to the active technologies the organization uses. This analysis will help the team address potential consequences and set how they prioritize the urgency of issues.
  -  assess the severity and impact of these and  rioritize vulnerabilities based on their severity, potential impact
  -  Develop and implement t patches, updates, or configuration changes to address these vulnerabilities. 
  -  test the remediation efforts to ensure that you’ve effectively resolved the vulnerabilities.
  -  document the details 
* posture management, or the continuous process of monitoring, assessing, and maintaining the security stance of an organization's cloud resources.
  - One: monitor the cloud environment. In this step, you’ll detect potential security threats, misconfigurations, and compliance violations.
  - Two: evaluate the security posture. In this step, you’ll assess the robustness of the security posture by comparing the current state to established security standards and best practices.
  - Report: In this step, you’ll create regular reports and dashboards that highlight areas of concern and improvement.
  - Remediate: In this step, you’ll address security issues through vulnerability remediation, configuration changes, and other corrective actions to ensure a secure environment.
  - Implement: In this step, you’ll ensure that cloud resources are consistently configured and operated securely.
  - Update: reguraly update tools
 
  * Secure configuration refers to the practice of setting up your cloud resources with the proper security settings and configurations to minimize potential risks.
  * Well, they help prevent unauthorized access, maintain data integrity, and protect your cloud resources from potential threats.

  * `types of remediations` Hotfixes , Security patches Unlike hotfixes, they’re usually scheduled and systematically planned, A key feature of security patches is their ability to simultaneously fix multiple security issues, enhancing the overall security of the system. Updating dependencies involves updating or replacing third-party libraries and frameworks to more secure versions.

####  automation tools for posture management and vulnerability remediation.
* The features and benefits of IT automation tools include flexibility, efficiency, and consistency.

* Ansible, a fast and simple configuration management tool; and Puppet, a more powerful but complex configuration engine.
* Ansible: Ansible is an open-source IT automation tool that helps organizations manage their infrastructure and applications more efficiently.
  - Ansible has agentless architecture and does not require any additional software to be installed on the managed nodes.
  - It uses yet another markup language, or YAML, for defining automation tasks.
  - Ansible’s modular design allows for the creation and sharing of reusable components, which can be used to automate tasks across multiple systems.
  - With Ansible, you can also integrate with security tools, like vulnerability scanners and intrusion detection systems, to automate security tasks and enhance overall security posture.

* Puppet is another popular IT automation tool that helps organizations manage their infrastructure and ensure security compliance.
- Puppet uses a declarative language to specify the desired infrastructure configuration. This approach allows it to manage the implementation details itself.
- Puppet also provides comprehensive reporting and auditing capabilities, enabling organizations to track changes, demonstrate compliance, and identify potential security issues.
- And, created with extensibility in mind, Puppet includes a wide range of modules and plugins.

* Update and patch management tools are essential for businesses to mitigate security risks.
* GS+ Organizations are recommended to have proper patch management processes in place to ensure the security of their systems and data. These tools help maintain compliance with various industry regulations and standards. Also, regular updates can improve system performance and stability by fixing errors and optimizing code.

* Before deploying security remediations, it’s important to validate them to ensure compatibility and minimize potential disruptions. Some best practices for validating security remediations include: canary testing, rolling deployments, and blue-green testing.
- Canary testing involves deploying a security update to a small percentage of the environment first, monitoring its impact, and then rolling it out to the rest of the environment if no issues are detected. This approach helps minimize the risk of widespread disruptions caused by a problematic update.
- Rolling deployments involve gradually deploying a security update across the environment in stages. This approach allows you to monitor the impact of the update on each stage, and address any issues before moving on to the next stage.
- Blue-green testing involves creating two identical environments, blue and green, and deploying a security update to one of them while the other remains unchanged. Once the update is tested and verified in the updated environment, traffic is gradually shifted from the unchanged environment to the updated one. This approach helps minimize downtime and allows for easy rollback, when appropriate.

  *  three-fold:
    - First, use IT automation tools like Ansible and Puppet.
    - Second, implement robust update and patch management solutions.
    - And third, follow best practices for validating security remediations.

Lab:
<script>alert('This is an XSS Injection to demonstrate one of OWASP vulnerabilities')</script>
- Scan the application
- APIs & Services > Enabled APIs and services. Enable APIs and services.
- Cloud Web Security Scanner toolbar, click + New scan.
- 
</details>


<details>
<summary>
Principles of architecture , module 3
</summary>
Cloud architecture is pretty complex, and there’s a lot you need to do to keep it secure. Automation can support you in this process.


#### Virtualization
* The hypervisor is software that serves as an abstraction layer that sits between the physical computer and the virtual machine, allowing the creation and management of virtualized computing environments.
* The hypervisor allows one host computer to share its memory, processing, and other resources to support multiple virtual machines.
* A container is a software package that holds only the components necessary to execute a particular application.
* Both containers and virtual machines let you use isolated environments for running software services. A virtual machine has its own guest operating system, like Linux, running on top of a host operating system. A benefit of using a virtual machine is that the hypervisor is allowed access to utilize the host's hardware.
* A pod uses shared resources and a specification on how to run containers.
* Pods are grouped by container clusters.
* A pod uses shared resources and a specification on how to run containers.
* Pods are grouped by container clusters.
* Container clusters are dynamic systems that manage and place containers, grouped in pods.
* Container clusters run on nodes, along with all the interconnections and communication channels.
* Containers hold only the dependencies they need, but they don’t have access to their own hardware. A benefit to containers is that they’re lightweight, meaning they use a lot less memory than virtual machines.
* You can also use Docker to create, deploy, and manage your containers. Docker has its own command-line interface, and builds the containers based on your needs. You can use this interface to interact with Docker in a terminal.Your commands are then sent to a program running in the background called the Docker Daemon. The Docker Daemon manages the containers, and the images those containers are created from.
* One critical element of containers is that they share the kernels of their hosts instead of having their own kernels.
* The kernel is the component of an operating system that manages processes and memory.
* containers share the host’s kernel, so if the host is vulnerable to an exploit, an infected container can attack the kernel’s vulnerability.
* This means that the host kernel needs to be up-to-date, and all the libraries in the containers need to be patched.
* K8 Kubernetes is a platform for automating deployment, scaling, and managing containers. If a container goes down, Kubernetes will start a new one using automation.
* Kubernetes also includes built-in commands to deploy applications, scale up and down for changing needs, monitor applications, and roll out changes.The Kubernetes platform handles a lot of the work that goes into application management, runs health checks against services, and replaces stalled containers when they’re unhealthy.
* Containers are like the musicians in an orchestra or students in a music class.
* Kubernetes groups containers into pods, which are like the classrooms or music halls within the school where the orchestra practices.
* They are shared spaces that house multiple containers, similar to classrooms accommodating students with various roles.
* These pods enable containers to work closely together, sharing resources like power and the local network, much like students sharing facilities within the same room.
* Nodes are the physical or virtual machines where the performance takes place, akin to the school buildings hosting multiple classrooms.
* Just as a school building may have many classrooms, a node can have many pods running within it, providing the stage for the orchestra -containers- to perform.
* A layered file system is another important element of containers. When you make a new container, there’s one new container layer that new commands and files can be written to. So, any new commands, such as run or copy, that you give to the running container are written to the container layer. Each layer of a container is built on another layer to form an image. After the layers are put together, you get a final image.




#### DevSecOps
* Policy as code is the use of code to define, manage, and automate policies, rules, and conditions using a high-level programming language. Cloud professionals build policy into infrastructure to help manage policy.
* Development Operations, or DevOps, consists of practices designed to increase the frequency of delivery and reduce lead time. When security is incorporated, it’s called Development Security Operations or DevSecOps.
* With the DevSecOps model, policy as code and other security measures are incorporated throughout the operations and development process.
* DevSecOps employs automation tools to automate several security processes. Some of these processes include: Continuous integration and continuous deployment, or CI/CD, the version control system, continuous testing, continuous monitoring, containerization, orchestration, and configuration management and deployment.
* Another benefit to consider when using policy as code is avoiding violations and penalties in order to comply with government and industry standards.
	
#### Defence strategies
* One of the ways to protect your assets is to apply authentication between each component.
* Rate limiting is a method that prevents an operation’s frequency from exceeding a set limit or value. This will help you avoid overusing services or overloading them beyond use.
* TTL time to live, This will help secure your cloud, leaving less data available for possible attacks
* Multilevel Security:
-  Access controls are security controls that manage access, authorization, and accountability of information. To do this, you need to determine how sensitive your data is and assign access based on its classification.
-  Other aspects of multilevel security include using data sensitivity and classification together with IAM.

* `Ephemerality` is the concept that things only exist for a short amount of time.
* `Immutability` is the concept of being unable to change an object after it is created and assigned a value.

#### Secure Containers
*  don’t put anything in your container that you don’t need.
*  use verified or signed images.
*  never grant unnecessary privileges.
*  avoid problems by using namespaces to group services for your application, and to isolate applications in your container clusters.
*  use role-based access controls, or RBAC to prevent unauthorized access.
*  scan each image you use to make sure there are no vulnerabilities or misconfigurations.
*  Vulnerability scanning is another process that can help you find any vulnerabilities in your container images.
*  Security threats: Using container runtime security can help you detect abnormal behavior, and stop a threat by isolating a container on a different network.
*  When your container has a container layer, it can write to that layer and make changes. A container layer is a writable space in a container. That’s container drift.
*  Even a popular, commonly-used container library can contain thousands of images with malware. This malware might include cryptocurrency miners, back doors, website redirectors, and DNS hijackers.
*  You can use drift prevention to keep your container immutable, meaning no new executables can be added.
*  A software bill of materials, or SBOM, is a machine-readable list of each piece of software and its components involved in the supply chain.
* Imagine a container is about to be deployed, but it has vulnerabilities that violate a policy. If a violation of the policy is found during orchestration, deployment will be stopped.
* Role-based Access Control, or RBAC is a type of identity and access management, or IAM, that is central to Kubernetes operations. It involves a template or permission set that determines who can execute what, and where it can be executed.
* Because the cluster-admin role grants unlimited access, never grant cluster-admin access to any users or teams that don’t need high-level access.
* Also, avoid aggregating or combining privileges.
  
</details>

<details>
<summary>
Data Protection and Privacy
</summary>

* Data at rest is stored on servers, databases, mobile devices, physical drives, or in the cloud.
* At rest data includes intellectual property, employee and customer personal information, financial documents, contracts, and other types of data, like healthcare data.
* Data in transit. This is data that is moving between two places, like between a cloud provider and your site, or between two services.
* Data in use is data that’s being accessed by one or more users. Data in use includes, but is not limited to data that is being processed, erased, read, or accessed.

#### Data Encryption
* Data encryption is the process of converting data from a readable format to an encoded format.
* The Advanced Encryption Standard, or AES is the world standard encryption tool that helps protect data at rest.
* AES is a tool that converts data to unintelligible cybertext and back into its original form with the proper key.
* Encryption helps keep data protected with data encryption keys, or DEKs.
* Another way to protect data at rest is to break it into chunks for storage. Each of these chunks get their own DEKs.
* You can use Transport Layer Security or TLS to encrypt data in transit to keep it secure.
* TLS is a security protocol that encrypts data transmitted between two communicating applications.
* Confidential computing is the protection of data in use with hardware-based Trusted Execution Environment, or TEE.  To encrypt data, a TEE offers a secure and isolated environment that prevents unauthorized access, or modification of applications and data, while they are in use.
* A TEE is secured through embedded encryption keys and only authorized code can utilize these keys.

* Data classification is the process of analyzing data to determine its sensitivity and value.
* Lower sensitivity levels represent less of a risk for organizations like
* Medium: At a marketing company, an associate sends an internal memo with a little information about the company, along with meeting notes on an advertising plan outline
* High sensitivity data includes information like personal financial data, legal documentation, and company secrets.

* Cloud security professionals use tags as a consistent way to document and classify data. Tags are custom metadata fields you can attach to a data entry to provide context to people authorized to access the data.
* Let’s review an example of a customized PII tag
  The first line of code is the label for the tag and it has the letters PII.The next line of code is the first metadata pair; it verifies that the value is true. The last line of code has the second metadata pair and it identifies the type of PII as a social security number, or SSN.
```
pii 
has_pii: true
type_pii: ssn
```
* The tag classifies this information as high sensitivity, making it easier for security controls to locate.
* When you make your tags, you can use tag templates, or reusable structures to rapidly create new tags.
* You can make a template by putting together metadata values in fields.

### Data governance 
* Data governance is a set of processes that ensures that data assets are managed throughout an organization. These processes are everything an organization does to ensure data is private, accurate, secure, available, and usable.
* `Data stewards` are subject matter experts who are responsible for collecting and managing data, and preserving the quality of the data.
* Usually, data quality is judged on six dimensions: accuracy, completeness, consistency, timeliness, validity, and uniqueness.
  - Data is accurate when it can be confirmed with a verifiable source. like email
  - Data is complete when there is enough data to deliver meaningful decisions and inferences.
  - Data is consistent when data stored and used at multiple instances matches the values across various records. If a specific customer's name is spelled differently in each database, the data is not consistent. 
  - Data timeliness means that the data is available when the user needs it.
  - And data is unique when there are minimal overlaps or duplicates. Consider a salon customer who uses an online form to make two appointments for the same service, at the same time, on the same day.

* Data quality means your data is complete, accurate, available when you need it, and fits with the organization’s requirements. GS+

###  data sovereignty, residency

* Data sovereignty means data stored in a physical location has to follow the regulations of that geographic location. To comply with data sovereignty, data professionals need to know what data they have and where their data resides.
* Data residency refers to the physical or geographic location of an organization's data or information. Once data is moved, stored, or processed within a particular geographic location, it is subject to the laws, customs, and expectations of that specific location.
* Sometimes there’s a need to keep sensitive data within the borders of a particular country to enhance data security.
* Data localization is the requirement that all data generated within a country's borders remain within those borders.
* This is so important, because data localization helps countries safeguard the data of their citizens and organizations in their territory.
* Data governance helps organizations comply with and reinforces data sovereignty.
* The organization could even create an organizational policy to use as a preventative guardrail.
* As a reminder, guardrails are the policies, procedures, and processes to manage and monitor an organization’s regulatory, legal, risk, environmental, and operational requirements. It’s often helpful for organizations to check with their cloud provider to figure out if there’s a policy the organization can use.
* When an organization uses location constraints in their policy, they can limit where their resources are deployed and maintained to make sure that they meet sovereignty requirements.

###  data discovery
* Data discovery is the process of searching, identifying, and analyzing large amounts of data within an organization to uncover hidden patterns, relationships, and insights.
* During data discovery, organizations can flag data that is subject to governmental sovereignty laws and regulations.
* Then, they can use data governance to ensure they’re in compliance with those regulations.
* Organizations use data discovery to check for the dimensions of data quality, including the accuracy, completeness, consistency, timeliness, validity, and uniqueness of data.
* The organization needs to keep track of this data and know how the data is collected, where it is collected from, and where it’s stored. GS+
* At various stages of the data lifecycle, you can use a data loss prevention engine -also known as a DLP engine- to filter and search for sensitive data. You can also use DLP to inspect, mask, or remove sensitive data once it’s discovered.

### Data retention
* Data retention is the process of storing data, including how long it needs to be stored.
* GS+, A data retention period is the length of time an organization keeps information.
* A data retention policy helps determine: What data needs to be stored, and where the data should be stored.

- Valid and unique data helps enhance data quality by minimizing duplications. Valid data matches specific criteria, and unique data has fewer duplicates or overlaps.
- Data in cloud storage is stored globally, not locally. This makes it challenging to manage data localization.
- The CIO should consider that different kinds of data may need different policies. A data retention policy should be flexible and based on an organization's needs.
- Anna should recommend a bucket-based policy. By implementing a bucket-based policy, the retention period for data is clearly defined, and data can only be deleted or replaced once it has exceeded the set retention period. This approach allows for both consistent enforcement and flexible management of stored data.
- Data discovery is like a bank teller finding where customers' money is stored. The same way a bank teller locates a customer's savings, data discovery identifies and locates sensitive or regulated data.

### A business continuity plan, also called a BCP

While BCPs focus on keeping a business going during a disruption, DRPs focus on recovering assets and data after the disruption.
* A business continuity plan, also called a BCP, is a document that outlines the procedures to sustain business operations during and after a significant disruption. A disaster recovery plan, or DRP, is an important part of each business’ continuity plan.
* A DRP is a plan that allows an organization’s security team to outline the steps needed to minimize the impact of a security incident.

* Departments throughout an organization usually collaborate to create a BCP, with each department planning for their own operations.
- The first step in building a business continuity plan is to determine the most critical apps and data for business function. For example, let’s say you’re helping create the BCP for your employer, a financial institution. If your online banking app goes down, your customers won’t be able to access their accounts from their phones -this means the banking app is a high priority. 
- A recovery time objective, or RTO, is the target time allowed for the recovery of a service in the event of a disaster. The services most critical to your organization’s operations should have the shortest RTOs.
- A recovery point objective, or RPO, is the maximum acceptable length of time during which data might be lost from an application due to a major incident. GS+
- The third step in developing a business continuity plan is to conduct a risk assessment to identify what risks could affect your resources.
- This plan should include solutions to recover your operations as soon as possible, including steps to restore backup data.

* Suddenly, a message appears telling you that sensitive customer data has been encrypted and you need to pay a large sum of money to unlock it. You realize the data storage has been infected with ransomware.
  - Let’s explore how business continuity planning can help the company solve this problem.
  - Your business plan also lists acceptable amounts of downtime for each of those resources.
  - Because the ransomware attack affected sensitive customer data, your plan only allows for one hour of downtime.
  - Your risk assessment identified that a ransomware attack could affect your data storage, so you have a disaster recovery plan in place.
  - The disaster recovery plan portion of your BCP contains information about each team member’s role.
  - Another colleague is responsible for shutting down cloud resources affected by the ransomware.
  - Meanwhile, you are responsible for getting the data back online.
  - Because the data affected by the ransomware has a short acceptable downtime, your team has worked with your cloud service provider to back it up to another site.
  - You’re able to reach out to your CSP and access the backed-up data, which hasn’t been affected by the ransomware.
* The recovery time objective (RTO) is the maximum acceptable time period for an application to be offline. Establishing RTOs is essential in a business continuity plan, as it helps minimize disruptions and provides a target for how quickly systems must be restored following a data center shutdown.
* The final step of BCP is to test and update the BCP and the disaster recovery plan (DRP) regularly. BCP testing should include role-plays of different situations with everyone in the company.

### 

</details>

<details>
<summary>
Detect, Respond, and Recover from Attacks
</summary>

### Security Operations

* SecOps, is the practice of combining people, processes, and technology to effectively protect an organization's data and infrastructure. High-level goals of SecOps include detecting, preventing, and mitigating threats in real time.
* In cloud security, SecOps consists of several key components, including logging and monitoring, incident detection, incident response, and incident recovery. SecOps includes:
- Logging and monitoring are essential for maintaining visibility in your cloud environment. By collecting, analyzing, and storing logs, security professionals can identify potential security threats, track changes, and monitor user activities.
- Incident detection is the process of identifying and addressing security threats in the cloud environment.  This process includes analyzing log data, correlating events, and prioritizing incidents based on severity and potential impact. By detecting incidents promptly, security professionals can minimize the damage and prevent further escalation.
- Incident response is the process of identifying, investigating, and mitigating security incidents promptly and effectively. This includes assembling a response team, containing the threat, investigating the root cause, and communicating with stakeholders.
- Incident recovery is the process of restoring affected systems and data to their normal state. 

#### Tools for Secops
* Cloud’s Security Command Center, or SCC; Chronicle SIEM, Chronicle SOAR, VirusTotal, and Mandiant Threat Intelligence.
- SCC This tool is an on-guard security specialist for all things Google Cloud. SCC also identifies security findings, keeps an inventory of cloud assets, and even scans web applications for security threats.
- SIEM  This tool provides actionable security insights in real time. Chronicle’s SIEM tool takes massive amounts of machine data and translates it into helpful security information.
- Chronicle also offers the Security Orchestration, Automation, and Response solution, or SOAR. This tool gives teams the power to fight common threats by using automated response workflows. From managing alerts and cases, to deploying incident response playbooks, SOAR ensures security teams are able to shift from detection to response quickly.
- VirusTotal, This service is an online detector used to identify malicious content. Just submit files or URLs to VirusTotal and it will analyze them using various tools, like antivirus engines and website scanners. VirusTotal also uses analysis tools to detect viruses, worms, or trojans.
- Mandiant's Threat Intelligence: Mandiant’s Threat Intelligence helps security professionals understand the tactics, techniques, and procedures used by global threats before they occur.

##### Thread Detection Tools:
* Google Cloud Security Command Center,SCC which can help you gain visibility into your cloud resources, and detect potential security threats.
- It provides insights, alerts, and recommendations to enhance incident detection and response.
* Google Cloud Logging and Monitoring. This tool enables you to collect, analyze, and visualize logs and metrics from your cloud infrastructure, allowing you to identify suspicious activities and potential security incidents.
* Tools included in the Google Chronicle Security Operations Suite.Chronicle SIEM, SOAR, and threat intelligence provide security professionals with the ability to detect, respond, and analyze incidents from several different sources.

#### Vulnerability Management

* Vulnerability management is the process of finding and patching vulnerabilities.
- In vulnerability management, the red team and blue team play crucial roles.
- A red team is a group of ethical hackers who mimic potential adversaries in order to examine the security defenses of an organization.
- The blue team is a group responsible for defending the organization's systems and networks from simulated attacks.  The blue team focuses on monitoring, detection, incident response, and recovery to ensure your organization's security remains robust.
- Penetration testing, or pen testing, is a simulated attack that helps identify vulnerabilities in systems, networks, websites, applications, and processes.
* Example GS+ Imagine this scenario: A healthcare organization initiates a penetration test on their patient portal. The objective is to assess the security of patient data. The penetration test found a vulnerability that allowed unauthorized access to an insecure Application Programming Interface, or API, linked to the patient portal. Despite the organization having detection protocols in place, the unauthorized access to the API went undetected.
- As a result, the organization adds additional security measures including encryption, adjusted access controls, and more robust authentication.
- They also initiate a reassessment of their security event log coverage, monitoring for better incident detection and response.
- Finally, the organization commits to conducting frequent security audits for real-time evaluations.

* Tabletop These exercises aim to replicate emergency security situations and are grounded in the organization's current policies, plans, and procedures. The main objectives of tabletop exercises include fostering a deeper understanding of concepts, pinpointing strengths and weaknesses, and driving changes in policies and procedures.
* Tabletop exercises replicate emergency situations, allowing the organization to test its readiness in real-world scenarios. While tabletop exercises can indeed help pinpoint weaknesses, they do not do so by exploiting these weaknesses. This is a characteristic of penetration testing.


#### Incident Detection
* Incident detection is the process of identifying and addressing security threats in the cloud environment. The focus of incident detection is to spot anything out of the ordinary, like strange patterns and abnormal events. For example, this could include a user login from a new physical location. Analyzers should answer these questions for incidents:
-  What are the indicators of compromise associated with this incident?
-  What is the potential impact?
-  What critical systems or resources are affected?
-  Has the incident spread to other systems?
-  And, what evidence should be collected to help my team?
* Answers to these questions can strengthen your team’s ability to respond effectively to these types of incidents.

#### Incident Management
* Effective incident management helps minimize the impact of security incidents, enables you to quickly identify and repair vulnerabilities, and also ensures that your organization remains compliant with regulations and industry standards.
*  Incident management  helps organizations identify, analyze, and respond to security incidents in a timely and efficient way.
* NIST framework, provides guidelines and best practices for a structured approach to handling security incidents. You can use this framework to guide YOUR response to security incidents. It consists of four phases: preparation, detection and analysis, containment, eradication and recovery, and finally, post-incident activity.
- `Preparation`: This includes everything an organization needs to do before a security incident occurs. During this initial phase, an organization develops an incident response plan, defines policies, assigns roles and responsibilities, and identifies critical assets. Clear roles and responsibilites
- `Detection`: The goal of this phase is to identify security incidents early on by collecting and analyzing data using monitoring and logging. For example, a user might report an issue, or a security monitoring solution might generate an alert. In Google Cloud, you can use tools like Security Command Center, Cloud Logging, Cloud Monitoring, Chronicle SIEM, Error Reporting, and Stackdriver Trace to detect anomalies, trigger alerts, and analyze logs. With detection tools, you can configure alerting policies to notify you when a specific event happens, like an admin login from an unusual location. For example, examining any logins before the alert, and monitoring any changes, like role assignments or unusual configuration changes after the alert. During the investigation, it's also helpful to ask questions that can triage the incident. Some types of questions include how the alert was initially detected, the timing of detection, what logs are accessible, and if there are signs of ongoing unauthorized access.
monitoring and alerting tools like Google Cloud Monitoring and Grafana can help identify potential security threats in real time. Recognize it. Security tool integrations. like SIEM. tools like Century make sure it scalate to right place. 
- `containment, eradication and recovery`: After the incident has been correctly identified, any compromised systems need to be contained to limit impact. Recovery actions are then performed to return operations to normal, ensuring that all systems are functioning as expected. There are several cloud tools that you can use to enable containment, eradication, and recovery actions. By leveraging Google Cloud's capabilities, you can isolate the resources that have been affected using Virtual Private Cloud, or VPC firewalls, with the Cloud Security Scanner. Also, identity and access management, or IAM, plays a key role in the containment and removal of an attacker in cloud environments. By leveraging IAM features, you can address the security concerns identified during the Detection and Analysis phase. This includes actions like disabling compromised accounts, revoking suspicious OAuth tokens, and blocking untrustworthy IP addresses.

* Google Cloud Backup and DR Service is a complete disaster recovery solution safeguarding data, applications, and digital assets. It ensures system restoration post-disaster, verifies backups for readiness, and offers configurable on-demand and scheduled backups.
* You also need to be careful while restoring systems to avoid the accidental reintroduction of malicious elements like backdoors, compromised accounts, or command and control —or C2— elements.
- post-incident activity. Once the threat has been successfully contained, you can perform post-incident activities such as conducting a postmortem analysis, documenting the incident, and implementing changes to prevent similar incidents in the future. Google Cloud's Cloud Audit Logs and Cloud Security Command Center's continuous monitoring and recommendations are valuable resources in understanding the actions leading to the incident and identifying improvements.
* Google Cloud's Cloud Audit Logs can help you understand the actions that led to the incident and identify areas for improvement.
* You can also use Cloud Security Command Center's continuous monitoring and recommendations to proactively improve your security posture and prevent future incidents.

#### Intrusion Detection

* using intrusion Detection Systems, you can detect when unauthorized access is taking place.
* An IDS works much like a security camera system in a bank. The security cameras monitor the physical environment for any suspicious activity. Cloud IDS actively uses IDS principles to enhance security by detecting network threats, managing in the cloud, having thorough security, keeping full traffic visibility, meeting customer compliance, focusing on main threats, finding disguised apps, and providing efficient performance.
- detecting network threats, Cloud IDS identifies intrusive and obstructive behavior throughout both network and application layers.
- Cloud IDS identifies concealed malware hidden in various file formats and web content.
- managing in the cloud, Cloud IDS allows you to manage your systems in a way that best suits your needs.
- Cloud IDS integrates with Palo Alto Networks' threat detection capabilities to provide a broad security range.
- Cloud IDS, equipped with Google Cloud's Packet Mirroring, actively expands its reach beyond standard internet traffic. It includes communication within and between Virtual Private Clouds, or VPCs. This enhancement allows for efficient detection of suspicious lateral movements that could suggest the presence of potential intruders, significantly strengthening cloud security.
- Cloud IDS actively helps customers meet compliance standards by providing strong network threat detection. Using advanced algorithms, it identifies risks in real time and supports businesses in adhering to required standards.
- With customizable options, Cloud IDS adjusts to unique risk levels and ensures constant network security, maximizing threat detection while minimizing false alerts.
- Providing efficient performance is at the core of Cloud IDS capabilities.
  
#### signature 
* A signature actively checks packet patterns for any malicious activity using factors like IP addresses, used ports, types of protocol, and payload details.
* In network security, a signature database should be regularly maintained and updated. The signatures in this database are designed to identify specific patterns in network traffic that may indicate malicious. When network traffic is analyzed, it's compared to these signatures.
* This Python dictionary is evaluating network traffic from a specific source IP address, utilizing the TCP , protocol to make requests at the destination port 80, and carrying a payload labeled as exploit_payload.
* Anomaly-based detection is an alternative to signature-based detection that involves creating a normal baseline for network activity. This baseline is then used as a standard for comparison to identify activities that aren’t part of normal network operations. It keeps a constant watch on all the network traffic, comparing it against a baseline of regular or average network activity.
* Anomaly-based detection is an effective strategy when dealing with new or unidentified threats that may not have an identifiable signature.
* The next two NIST phases are to quarantine the system with the miner, and eliminate the miner and restore the system. Launching a post-activity session about the miner is a post-incident activity that should only take place after containment, eradication, and recovery.

### Logs 

- First, a log is a record of events that occur within an organization’s systems.
- Second, log analysis is the process of examining logs to identify events of interest.
- Third, logging is the recording of events occurring on computer systems and networks.
- And fourth, log management is the process of collecting, storing, analyzing, and disposing of log data.

* There are several ways logs can be used:
- log analysis analyzes logs for patterns
- Setting up monitoring alerts based on specific log
- Maintaining retention policies ensures logs are retained for the required duration
- And threat detection proactively detects and mitigates security threats based on log data

* By analyzing logs, security teams can identify suspicious patterns, detect potential security breaches, and investigate incidents.

* Types of logs include: admin activity audit logs, data access audit logs, system event audit logs, and policy denied audit logs.
- Admin activity audit logs provide a view into the activities of administrators and other authorized individuals. who did what and when a database forexample
-  Data access audit logs record API calls that create, modify, or read user-provided data.
-  System event audit logs report changes to your system's configurations and settings.
-  Policy denied audit logs capture instances where requests were denied because of existing IAM policies. Unauthorized access by users can be fined here any failed requests

* Logs follow a lifecycle that includes generation, storage, analysis, and eventual expiration.
* Log retention is an important part of the log lifecycle as it's used to preserve logs for a specific period to meet regulatory requirements and facilitate historical research.
* Retained logs can be used to investigate past incidents, identify trends, and improve security posture.
* Users also might choose to save their logs to cold storage or store them offline.

  
* Security Information and Event Management, or SIEM systems, like Chronicle, can aggregate logs from different sources, providing a centralized platform for log analysis and security monitoring.

* Chronicle SIEM and SOAR are two tools that can enhance your essential skills. These tools collect and correlate data, organizing it in a way that makes it easier to decipher.  Functions like intelligent threat detection, customizable alerts, and visualization give you new insights into security operations.
* These include collaboration features, incident tracking, and comprehensive reporting tools.


## Alerts and Notifications
With these insights and strategies, you’ll be prepared to start implementing alert management systems in your Security Operations, or SecOps.

* There are some common alert types to consider for a cloud environment.
- First is unusual network traffic.
- Second is suspicious login activity.
- Third is policy violations.

* A `false positive` is an alert that incorrectly detects the presence of a threat. Here are the essential steps for managing false positives more efficiently.
- First, refine alert parameters by adjusting them to align with your organization's specific risk tolerance and security posture.
- audit regularly.
- collaborate across teams.
- apply feedback and utilize it
- use automation like AI and machine learning to spot false positives.

#### Querying alerts

* `Querying alerts` is the act of scanning through numerous security alerts from your cloud infrastructure to identify possible threats.
* Effective querying allows you to
  - identify important alerts in real time,
  - prioritize high-impact issues,
  - streamline response to incidents,
  - enhance proactive security posture.
* Chronicle Security Information and Event Management, or SIEM, tool improves search efficiency and threat analysis by enhancing alert filters.  These filters focus on specific details, like event categories, severity levels, or time frames to narrow down search results.
* Chronicle SIEM also offers refined features, like
  - customized filtering criteria,
  - adaptable event correlation,
  - machine learning-based insights to simplify data management.
* The most common filters include alert title, source, destination, severity, and time.
* Chronicle SIEM provides better alert filter performance, and stronger threat detection and analysis.
* It’s important to consistently update your filters to stay aware of new risks and technological updates.
* Chronicle SIEM provides machine learning-based insights to simplify data management in handling cloud security events. Chronicle SIEM enhances alert filters by focusing on certain details, not by including broader, undefined queries. This improves efficiency and precision in searching for and analyzing threats.
* 

</details>


<details>
<summary>
-----------
</summary>

</details>

------------------------------------------------------------

* 
* Some core workplace skills include: high attention to detail, critical thinking skills, effective time management skills, solid communication skills, and adaptability and curiosity.
* Communication skills include clearly articulating findings and insights, collaborating with team members and stakeholders, and writing comprehensive reports and documentation.
* My advice, dig into a specific topic, explore it until you reach a stopping point, build a solution to highlight your learning, and then show it off on the internet.
* Maintaining a portfolio of simple to complex projects is a highly valuable tool in showcasing your individual journey.
* You wouldn't try to surg big waves before knowing how to swim
The skill that I think is most important for cybersecurity practitioners is a willingness to understand that you don't know everything. 
* I would say what interests me the most about jobs in cloud cybersecurity is the fact that you're continuously learning.
* with perimeter protection, this is essentially your security measures that
* With the second, with trust boundaries, that's essentially trying to separate or separate your trusted and untrusted environments.
* The impact that I had on the project was essentially to act as one of the security gates to make sure that there were proper security requirements put in place and practices before we actually went through with full migration.
* Imagine you're asked to explain the key components of a threat and vulnerability management strategy to a business leader with not a lot of technical experience.? So there are four components that I would highlight to explain a effective threat vulnerability management strategy. The first being prevention, the second being detection, the third being response, and the fourth being recovery So there are four components that I would highlight to explain a effective threat vulnerability management strategy.
*  I perform threat simulations to help make Alphabet and its users safe.
---------------------------------

# <font color=green> Cloud other Infos </font> 

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
