import React from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Sreenivasulu Ramanaboina</h2>
            <p className="text-gray-400">Cloud & DevOps Engineer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:sreeni.ramanaboina@gmail.com" 
                className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} className="mr-2" />
              <span>Back to top</span>
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Sreenivasulu Ramanaboina. All rights reserved.
            </p>
            
            <div className="text-sm text-gray-500">
              <p>Designed and built with React & Tailwind CSS</p>
              <p>Optimized for GitHub Pages deployment</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;