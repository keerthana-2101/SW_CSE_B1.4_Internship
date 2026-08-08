export const categories = ['all', 'cloud', 'data', 'devops'];


export const projectsData = [
  {
    id: 1,
    title: 'Deploying a Scalable Static Website with a CDN',
    description: 'Scalable static website deployment using AWS S3 and CloudFront.',
    longDesc:
      'This project focused on deploying a scalable static website using Amazon S3 and Amazon CloudFront. The objective was to understand how static websites can be hosted efficiently without relying on a continuously running virtual machine such as Amazon EC2. The website files were stored in an S3 bucket, while CloudFront was used as a Content Delivery Network to distribute and cache the content through global edge locations.\\n\\nThe implementation involved preparing the static website content, creating an S3 bucket, configuring static website hosting, uploading the website files, and managing the required access permissions. CloudFront was then configured to use the S3 bucket as the origin so that website content could be delivered efficiently to users from locations closer to them.\\n\\nThe project also focused on understanding CDN caching. When website content is updated at the origin, CloudFront may continue serving a previously cached version. Cache invalidation can be used to force CloudFront to retrieve the latest content from the origin. The project helped build an understanding of scalable cloud architecture, object storage, content delivery, permissions, caching, and performance optimization.',
    tech: ['AWS S3', 'AWS CloudFront', 'HTML', 'CSS', 'CDN'],
    category: 'cloud',
    featured: true,
    liveUrl: '#',
    githubUrl: '#'
  },

  {
    id: 2,
    title: 'Implementing a Personal Cloud Storage Solution',
    description: 'Secure personal cloud storage using AWS S3, IAM and CLI.',
    longDesc:
      'This project focused on implementing a personal cloud storage solution using Amazon S3 with an emphasis on security, access control, and programmatic interaction. The objective was to understand how cloud object storage can provide scalable and durable storage while giving administrators detailed control over who can access the stored data.\\n\\nThe implementation involved provisioning an S3 bucket and enabling Block Public Access to prevent unintended exposure of stored objects. Bucket Versioning was also explored to make it possible to recover previous versions of files when objects are overwritten. These configurations demonstrated important practices for building a more resilient and secure cloud storage environment.\\n\\nThe project also introduced AWS Identity and Access Management (IAM). Instead of using the root account for everyday storage operations, a dedicated storage user was considered with limited permissions following the Principle of Least Privilege. The required permissions included uploading, downloading, and listing objects.\\n\\nProgrammatic interaction was performed through the AWS Command Line Interface (CLI), including commands for listing and managing objects in the bucket. A graphical cloud-storage workflow using Cyberduck was also explored to understand how cloud storage can provide a user experience similar to traditional file-storage applications. This project provided practical understanding of S3, IAM policies, access control, versioning, AWS CLI, and secure cloud storage management.',
    tech: ['AWS S3', 'IAM', 'AWS CLI', 'Cyberduck', 'Cloud Storage'],
    category: 'cloud',
    featured: true,
    liveUrl: '#',
    githubUrl: '#'
  },

  {
    id: 3,
    title: 'Tata Group Data Analytics Job Simulation',
    description: 'AI-powered data analytics and strategy development simulation with Tata iQ.',
    longDesc:
      'Completed a job simulation on Forage involving AI-powered data analytics and strategy development for the Financial Services team at Tata iQ on June 18, 2026. The simulation provided practical exposure to using data analysis and Generative AI to support financial decision-making and strategy development.\\n\\nAs part of the simulation, exploratory data analysis (EDA) was conducted using GenAI tools to assess data quality, identify risk indicators, and structure useful insights for predictive modeling. The analysis focused on understanding the available data and preparing meaningful information that could support subsequent modeling decisions.\\n\\nAn initial no-code predictive modeling framework was also proposed and justified to assess customer delinquency risk. GenAI was used to structure the model logic and define evaluation criteria, demonstrating how AI tools can support the development and explanation of analytical approaches.\\n\\nThe simulation also involved designing an AI-driven collections strategy using agentic AI and automation. The proposed strategy incorporated ethical AI principles, regulatory compliance, and scalable implementation considerations. Overall, the experience strengthened understanding of data analytics, predictive modeling, Generative AI, responsible AI, and AI-driven business strategy.',
    tech: ['Data Analytics', 'EDA', 'GenAI', 'Predictive Modeling', 'Agentic AI'],
    category: 'data',
    featured: true,
    liveUrl: '#',
    githubUrl: '#'
  },

  {
    id: 4,
    title: 'Datacom Introduction to Cloud Job Simulation',
    description: 'Cloud and DevOps engineering job simulation completed through Forage.',
    longDesc:
      'Completed the Datacom Introduction to Cloud Job Simulation on Forage on June 19, 2026. The simulation focused on understanding the role and responsibilities of a DevOps engineer and provided practical exposure to cloud-based application workflows.\\n\\nAs part of the simulation, an application was registered on the cloud for a hypothetical client, WCD Bank. This provided an opportunity to understand how applications can be represented and managed within a cloud environment while considering the requirements of a client scenario.\\n\\nA GitHub Actions workflow was also created as part of the simulation. This introduced the concept of automating development workflows using GitHub Actions and provided practical exposure to the role of automation within modern DevOps practices.\\n\\nThe experience helped build an introductory understanding of cloud engineering, DevOps responsibilities, cloud application workflows, GitHub Actions, and automation.',
    tech: ['Cloud Computing', 'DevOps', 'GitHub Actions', 'GitHub'],
    category: 'devops',
    featured: true,
    liveUrl: '#',
    githubUrl: '#'
  }
];