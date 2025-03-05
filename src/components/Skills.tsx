import React, { useState } from 'react';

interface Skill {
  name: string;
  category: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skills: Skill[] = [
    { name: 'AWS', category: 'cloud' },
    { name: 'EC2', category: 'cloud' },
    { name: 'S3', category: 'cloud' },
    { name: 'RDS', category: 'cloud' },
    { name: 'ECR', category: 'cloud' },
    { name: 'CloudFormation', category: 'cloud' },
    { name: 'Azure', category: 'cloud' },
    { name: 'VM', category: 'cloud' },
    { name: 'Blob Storage', category: 'cloud' },
    { name: 'Azure DevOps', category: 'devops' },
    { name: 'Terraform', category: 'devops' },
    { name: 'Ansible', category: 'devops' },
    { name: 'Jenkins', category: 'devops' },
    { name: 'Docker', category: 'devops' },
    { name: 'Kubernetes', category: 'devops' },
    { name: 'Prometheus', category: 'devops' },
    { name: 'Grafana', category: 'devops' },
    { name: 'Datadog', category: 'devops' },
    { name: 'SonarQube', category: 'devops' },
    { name: 'Bash', category: 'programming' },
    { name: 'Python', category: 'programming' },
    { name: 'PowerShell', category: 'programming' },
    { name: 'Java', category: 'programming' },
    { name: 'Spring Boot', category: 'programming' },
    { name: 'MySQL', category: 'database' },
    { name: 'MongoDB', category: 'database' },
    { name: 'DynamoDB', category: 'database' },
    { name: 'Hibernate', category: 'programming' },
  ];

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'devops', name: 'DevOps' },
    { id: 'programming', name: 'Programming' },
    { id: 'database', name: 'Database' },
  ];

  const filteredSkills =
    activeCategory === 'all' ? skills : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've developed a diverse set of technical skills throughout my career, with expertise in
            cloud technologies, DevOps practices, and software development.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map(skill => (
            <div
              key={skill.name}
              className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center font-semibold text-gray-800"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
