import React from 'react';
import { Github as GitHub, Linkedin, Mail, ChevronRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 animate-fadeIn">
              Sreenivasulu Ramanaboina
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-6 animate-slideUp">
              Cloud & DevOps Engineer
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-lg animate-slideUp delay-100">
              Passionate about cloud technologies and DevOps, with expertise in AWS, Azure, Terraform, and Kubernetes.
              Focused on optimizing infrastructure, automating processes, and solving complex problems.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 animate-slideUp delay-200">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Contact Me <ChevronRight size={20} className="ml-2" />
              </a>
              <a 
                href="/resume.pdf" 
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-300"
                download
              >
                Resume <Download size={20} className="ml-2" />
              </a>
            </div>
            
            <div className="flex space-x-4 animate-slideUp delay-300">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:sreeni.ramanaboina@gmail.com" 
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl animate-fadeIn">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Sreenivasulu Ramanaboina" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg animate-slideUp delay-400">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <span className="font-bold">5+</span>
                  <span className="text-xs block">Years Exp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;