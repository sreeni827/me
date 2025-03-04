import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Info</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Location:</p>
                    <p className="text-gray-600">St. Louis, Missouri</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Phone:</p>
                    <p className="text-gray-600">(573)-587-1636</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-gray-600">sreeni.ramanaboina@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
                <div>
                  <p className="font-medium">Southeast Missouri State University</p>
                  <p className="text-gray-600">Applied Computer Science</p>
                  <p className="text-gray-600">GPA: 3.8</p>
                  <p className="text-gray-600">Graduated: January 2025</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 md:pl-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Professional Summary</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Driven by a passion for cloud technologies and DevOps, I've spearheaded key projects at Wissen Infotech, 
              achieving a 30% reduction in infrastructure costs through AWS optimizations. My expertise spans Terraform, 
              Kubernetes, and proactive problem-solving, showcasing my ability to enhance system efficiency and reliability 
              while fostering team collaboration.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm an innovative professional in software development, known for productivity and efficiency in completing projects. 
              I possess strong skills in algorithm design, system architecture, and code optimization. I excel in problem-solving, 
              communication, and teamwork, ensuring successful collaboration on complex projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
                <h4 className="text-xl font-semibold text-blue-600 mb-3">Cloud Expertise</h4>
                <p className="text-gray-600">
                  Proficient in AWS and Azure cloud platforms, with experience in infrastructure design, deployment, and optimization.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
                <h4 className="text-xl font-semibold text-blue-600 mb-3">DevOps Mastery</h4>
                <p className="text-gray-600">
                  Expert in CI/CD pipelines, containerization, and infrastructure as code using tools like Jenkins, Docker, and Terraform.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
                <h4 className="text-xl font-semibold text-blue-600 mb-3">System Architecture</h4>
                <p className="text-gray-600">
                  Skilled in designing scalable, resilient system architectures that optimize performance and reduce costs.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
                <h4 className="text-xl font-semibold text-blue-600 mb-3">Problem Solving</h4>
                <p className="text-gray-600">
                  Strong analytical and problem-solving abilities, with a track record of resolving complex technical challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;