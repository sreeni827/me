import React, { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const [activeJobId, setActiveJobId] = useState('wissen');
  
  const jobs: Job[] = [
    {
      id: 'tecbeans',
      title: 'SDE Intern',
      company: 'Tecbeans',
      location: 'Dallas, Texas',
      period: 'January 2025 - Present',
      responsibilities: [
        'Designed and deployed scalable Azure cloud infrastructure using Terraform and ARM Templates, reducing provisioning time by 40% and enhancing deployment efficiency.',
        'Engineered and automated CI/CD pipelines leveraging Azure DevOps and GitHub Actions, cutting deployment failures by 50% through streamlined workflows and rigorous testing.',
        'Implemented and managed containerized applications using Docker and Azure Kubernetes Service (AKS), ensuring 99.9% uptime and improved application reliability.',
        'Strengthened Azure Networking configurations, including VNet, NSG, Load Balancer, and Application Gateway, reducing latency by 30% while enhancing system security and resilience.'
      ]
    },
    {
      id: 'wissen',
      title: 'Senior Software Engineer',
      company: 'Wissen Infotech',
      location: 'Bangalore, India',
      period: 'March 2022 - August 2023',
      responsibilities: [
        'Configured and integrated AWS CloudWatch with Grafana, enhancing cloud observability and increasing monitoring efficiency for AWS resources, reducing incident response time by 20%.',
        'Designed and implemented AWS cloud solutions for Morgan Stanley, reducing infrastructure costs by 30% and improving system efficiency by 25% through performance tuning and cost optimization strategies.',
        'Led the architecture and deployment of AWS networking solutions including VPC, Direct Connect, and Transit Gateway, strengthening security and optimizing hybrid cloud connectivity.',
        'Deployed and managed Amazon EKS (Kubernetes) auto-scaling for 100+ microservices, reducing system downtime by 35% while ensuring high availability and scalability.',
        'Spearheaded automation initiatives with Terraform and Ansible, cutting manual provisioning efforts by 60% and increasing deployment consistency.',
        'Provided L2/L3 support for mission-critical production systems, reducing resolution time by 40% through proactive troubleshooting and root cause analysis.'
      ]
    },
    {
      id: 'ellipse',
      title: 'System Engineer',
      company: 'Ellipse Technologies Pvt Ltd',
      location: 'Chennai, India',
      period: 'November 2018 - March 2022',
      responsibilities: [
        'Designed and implemented CI/CD pipelines using Jenkins and GitHub, streamlining software delivery and increasing deployment speed by 40%.',
        'Integrated DevOps frameworks (Jenkins, GitHub) to enhance CI/CD workflows, improving deployment frequency by 40% and reducing manual interventions.',
        'Automated infrastructure provisioning and configuration with Ansible, cutting manual setup time by 50% and enhancing system reliability.',
        'Developed and enforced Git branching strategies (GitFlow, feature branching), improving team collaboration, code management, and release efficiency.',
        'Managed Linux and Windows servers, ensuring 99.5% uptime for production and staging environments through proactive monitoring and optimization.',
        'Configured and maintained Apache Tomcat and Nginx for hosting applications, optimizing load balancing and improving response times by 35%.'
      ]
    }
  ];
  
  const activeJob = jobs.find(job => job.id === activeJobId) || jobs[0];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <div className="sticky top-24">
              {jobs.map(job => (
                <button
                  key={job.id}
                  onClick={() => setActiveJobId(job.id)}
                  className={`block w-full text-left px-6 py-4 mb-2 rounded-lg transition-colors duration-300 ${
                    activeJobId === job.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className={activeJobId === job.id ? 'text-blue-100' : 'text-gray-500'}>
                    {job.company}
                  </p>
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:w-2/3 lg:pl-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800">{activeJob.title}</h3>
                <h4 className="text-xl text-blue-600 font-semibold">{activeJob.company}</h4>
                
                <div className="flex flex-wrap items-center mt-2 text-gray-600">
                  <div className="flex items-center mr-6 mb-2">
                    <Calendar size={18} className="mr-2 text-blue-600" />
                    <span>{activeJob.period}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <MapPin size={18} className="mr-2 text-blue-600" />
                    <span>{activeJob.location}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold text-gray-800 mb-3">Key Responsibilities & Achievements:</h5>
                <ul className="space-y-3">
                  {activeJob.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-600">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;