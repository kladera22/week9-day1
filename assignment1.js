/*1. What is AWS EC2? 
    AWS EC2 provide services a computing device can offer. Where you can rent virtual
    computers to run run thier own computer application. It helps you manage your website 
    without thinking about security, database, logic server and many more.

2. What are some use cases of using AWS EC2?
    * Hosting Environment.
    * Development and test environments.
    * High performance computing.
    
3. What is AWS Lambda? 
    A serverless compute service that run code without controlling or provisioning server.
    Lambda uses highly available, elastic infrastructure to run your code.

4. What are some use cases of using AWS Lambda?
    * Operating serverless websites.
    * Rapid document conversion.
    * Predictive page rendering.

5. How does AWS Lambda work for: 
   //? a. File Processing
        Lambda is a good option if you want a serverless architecture and have files that 
        are large but still within reasonable limits. It is possible to write a lambda function 
        that can process a large csv file.

   //? b. Web Applications
        Lambda runs code to retrieve local information from DynamoDB and returns data back to user.
        for example, when data is inserted in a DynamoDB table or when a file is uploaded to S3. 
        In this case, a lambda function will be run whenever a request hits one of the API endpoints 
        you'll set up in the next section.

   //? c. Stream Processing
        Lambda reads records from the data stream and invokes your function synchronously with an event that 
        contains stream records. Lambda reads records in batches and invokes your function to process records 
        from the batch. Each batch contains records from a single shard/data stream.

6. What is S3?
    S3 (Simple Storage Service) is a Object Storage service offering industry leading scalability, data availability, 
    security and performance. You can choose storage types namely, object storage, file storage, block storage services, 
    backups, and data migration options. All of which fall under the AWS Storage Services list.

7. How does S3 work? 
    Data, in S3, is stored in containers called buckets. Each bucket will have its own set of policies and configuration. 
    This enables users to have more control over their data. Then, you upload your data to that bucket as objects in 
    AWS S3. Each object has a key (or key name), which is the unique identifier for the object within the bucket.

8. What are some use cases of S3?
    * Backup and restore.
    * Archive.
    * Websites and mobile application.
    
9. What is DynamoDB? 
    DynamoDB create databases capable of storing and retrieving any amount of data and comes in handy while serving any 
    amount of traffic. It dynamically manages each customer’s requests and provides high performance by automatically 
    distributing data and traffic over servers. It is a fully managed NoSQL database service that is fast, 
    predictable in terms of performance, and seamlessly scalable.

10. How does DynamoDB work?
    DynamoDB uses the partition key value as input to an internal hash function. The output from the hash function 
    determines the partition (physical storage internal to DynamoDB) in which the item will be stored. 
    All items with the same partition key value are stored together, in sorted order by sort key value.

11. What are some use cases of DynamoDB?
    * Logging.
    * Analytics.
    * Cache.
    
12. What is Aurora?
    The AWS Aurora is a relational database service offered from AWS cloud. This is one of the widely used services 
    for the data storage, for low latency and value-based data storage and processing. AWS Aurora is a MySQL and 
    PostgreSQL-compatible relational database fabricated for the cloud, that consolidates the performance and 
    accessibility of traditional databases.

13. How does Aurora work?
    Aurora provides a reader endpoint so the application can connect without having to keep track of replicas as they 
    are added and removed. It also supports auto-scaling, automatically adding and removing replicas in response to 
    changes in performance metrics that you specify. Aurora supports cross-region read replicas.

14. What are some use cases of Aurora?
    * Scalability.
    * Cost-Effective
    * Fully Managed
    
15. What is AWS VPC?
    Gives you full control over your virtual networking environment, including resource placement, connectivity, and 
    security. Is a commercial cloud computing service that provides users a virtual private cloud, by 
    “provisioning a logically isolated section of AWS Web Services Cloud”.

16. How does AWS VPC work?
    You can specify an IP address range for the VPC, add subnets, add gateways, and associate security groups. 
    A subnet is a range of IP addresses in your VPC. This virtual network closely resembles a traditional network that 
    you'd operate in your own data center, with the benefits of using the scalable infrastructure of AWS.

17. What are some use cases of VPC?
    * Hosting a Public Facing Website.
    * Creating Branch Office and Business Unit Networks.
    * Extending Corporate Network in AWS Cloud.
    
18. What is API Gateway? 
    AWS API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, 
    and secure APIs at any scale. APIs act as the "front door" for applications to access data, business logic, or 
    functionality from your backend services. 

19. How does API Gateway work?
    Using API Gateway, you can create RESTful APIs and WebSocket APIs that enable real-time two-way communication 
    applications. API Gateway supports containerized and serverless workloads, as well as web applications. 
    It acts as a reverse proxy to accept all application programming interface (API) calls, aggregate the various services 
    required to fulfill them, and return the appropriate result.

20. What are some use cases of API Gateway?
    * Chat applications.
    * Real-time dashboards such as stock tickers.
    * Real-time alerts and notifications.
    
21. What is CloudFront?
    AWS CloudFront is a content delivery network operated by AWS Web Services. Content delivery networks provide a 
    globally-distributed network of proxy servers that cache content, such as web videos or other bulky media, more 
    locally to consumers, thus improving access speed for downloading the content.

22. How does CloudFront work?
    CloudFront compares the request with the specifications in your distribution and forwards the request to your origin 
    server for the corresponding object. When a user requests content that you're serving with CloudFront, the request is 
    routed to the edge location that provides the lowest latency (time delay), so that content is delivered with the 
    best possible performance.

23. What are some use cases of CloudFront?
    * Accelerate static website content delivery.
    * Serve video on demand or live streaming video.
    * Encrypt specific fields throughout system processing.

24. What is Cognito? 
    AWS Cognito enables simple, secure user authentication, authorization and user management for web and mobile apps. 
    With Cognito, a user or visitor can sign in with a username and password through AWS, or through a third party 
    like Facebook, Google or Apple.

25. How does Cognito work?
    The two main components of AWS Cognito are user pools and identity pools. User pools are user directories that 
    provide sign-up and sign-in options for your app users. Identity pools enable you to grant your users access to 
    other AWS services. You can use identity pools and user pools separately or together.

26. What are some use cases of Cognito?
    * add user management 
    * sync functionality to their mobile and web apps.
    * add sign-up and sign-in to their apps and to enable their users to securely access their app's resources.
    
27. What is CloudWatch?
    CloudWatch enables you to monitor your complete stack (applications, infrastructure, network, and services) 
    and use alarms, logs, and events data to take automated actions and reduce mean time to resolution (MTTR). 
    This frees up important resources and allows you to focus on building applications and business value.

28. How does CloudWatch work? 
    AWS CloudWatch is basically a metrics repository. An AWS service—such as AWS EC2—puts metrics into the 
    repository, and you retrieve statistics based on those metrics. If you put your own custom metrics into the 
    repository, you can retrieve statistics on these metrics as well.

29. What are some use cases of CloudWatch? 
    * Collect and track metrics
    * Collect and monitor log files, set alarms, and automatically react to changes in AWS resources.
    
30. What is Secrets Manager?
    AWS Secrets Manager is a secrets management service that helps you protect access to your applications, services, 
    and IT resources. This service enables you to easily rotate, manage, and retrieve database credentials, API keys, 
    and other secrets throughout their lifecycle.

31. How does Secrets Manager work? 
    Secrets Manager uses the plaintext data key to encrypt the secret in memory. AWS Secrets Manager stores and maintains 
    the encrypted secret and encrypted data key. When a secret is retrieved, Secrets Manager decrypts the data key 
    (using the AWS KMS default keys) and uses the plaintext data key to decrypt the secret.

32. What are some use cases of Secrets Manager?
    * Removing hard-coded credentials from source code.
    * Replacing configuration file secrets.
    * Pulling secrets into CI/CD systems like Jenkins, GitHub Actions and More.
    * Protecting access to privileged passwords, API keys and other managed secrets.
    
33. What is CloudTrail? 
    CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS 
    Web Services account. With CloudTrail, you can log, continuously monitor, and retain account activity related to 
    actions across your Amazon Web Services infrastructure.

34. How does CloudTrail work? 
    You can create a CloudTrail trail to archive, analyze, and respond to changes in your AWS resources. 
    A trail is a configuration that enables delivery of events to an Amazon S3 bucket that you specify. 
    You can also deliver and analyze events in a trail with Amazon CloudWatch Logs and Amazon EventBridge. 
    You can create a trail with the CloudTrail console, the AWS CLI, or the CloudTrail API.

35. What are some use cases of CloudTrail?
    * View
    * Search
    * Download
    * Archive
    * Analyze
    * Respond to account activity across your AWS infrastructure

36. What is CI/CD integration?
    Continuous integration is a DevOps software development practice where developers regularly merge their code changes 
    into a central repository, after which automated builds and tests are run. Continuous integration most often refers 
    to the build or integration stage of the software release process and entails both an automation component and a 
    cultural component. The key goals of continuous integration are to find and address bugs quicker, improve software 
    quality, and reduce the time it takes to validate and release new software updates.
*/