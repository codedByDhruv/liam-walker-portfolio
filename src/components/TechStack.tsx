
import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'TypeScript', icon: '🔷', category: 'Language' },
    { name: 'Python', icon: '🐍', category: 'Language' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'GraphQL', icon: '📊', category: 'API' },
    { name: 'Redis', icon: '🔴', category: 'Cache' },
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-electric-purple to-hot-pink bg-clip-text text-transparent mb-6">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-purple to-hot-pink mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 font-mono">
            Technologies I love working with
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group glass rounded-lg p-6 text-center neon-border hover:scale-110 hover:glow-blue transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="font-mono text-white group-hover:text-cyber-blue transition-colors duration-300">
                {tech.name}
              </h3>
              <p className="text-xs text-gray-400 mt-2 font-mono">
                {tech.category}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass rounded-lg p-8 neon-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-cyber-blue mb-4 font-mono">
              Always Learning
            </h3>
            <p className="text-gray-300 leading-relaxed">
              The tech world never sleeps, and neither do I. Currently exploring 
              <span className="text-electric-purple font-mono"> WebAssembly</span>, 
              <span className="text-hot-pink font-mono"> Machine Learning</span>, and 
              <span className="text-cyber-blue font-mono"> Web3 technologies</span> 
              to stay ahead of the curve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
