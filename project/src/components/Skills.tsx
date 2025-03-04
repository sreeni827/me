import React, { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skills: Skill[] = [
    { name: 'AWS', level: 90, category: 'cloud' },
    { name: 'EC2', level: 85, category: 'cloud' },
    { name: 'S3', level: 90, category: 'cloud' },
    { name: 'RDS', level: 80, category: 'cloud' },
    { name: 'ECR', level: 85, category: 'cloud' },
    { name: 'CloudFormation', level: 75, category: 'cloud' },
    { name: 'Azure', level: 80, category: 'cloud' },
    { name: 'VM', level: 85, category: 'cloud' },
    { name: 'Blob Storage', level: 80, category: 'cloud' },
    { name: 'Azure DevOps', level: 85, category: 'devops' },
    { name: 'Terraform', level: 90, category: 'devops' },
    { name: 'Ansible', level: 85, category: 'devops' },
    { name: 'Jenkins', level: 90, category: 'devops' },
    { name: 'Docker', level: 95, category: 'devops' },
    { name: 'Kubernetes', level: 85, category: 'devops' },
    { name: 'Prometheus', level: 80, category: 'devops' },
    { name: 'Grafana', level: 80, category: 'devops' },
    { name: 'Datadog', level: 75, category: 'devops' },
    { name: 'SonarQube', level: 70, category: 'devops' },
    { name: 'Bash', level: 85, category: 'programming' },
    { name: 'Python', level: 80, category: 'programming' },
    { name: 'PowerShell', level: 75, category: 'programming' },
    { name: 'Java', level: 80, category: 'programming' },
    { name: 'Spring Boot', level: 75, category: 'programming' },
    { name: 'MySQL', level: 85, category: 'database' },
    { name: 'MongoDB', level: 80, category: 'database' },
    { name: 'DynamoDB', level: 75, category: 'database' },
    { name: 'Hibernate', level: 70, category: 'programming' },
  ];

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'devops', name: 'DevOps' },
    { id: 'programming', name: 'Programming' },
    { id: 'database', name: 'Database' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've developed a diverse set of technical skills throughout my career, with expertise in cloud technologies, DevOps practices, and software development.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%`, animationDelay: `${index * 0.1}s` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;