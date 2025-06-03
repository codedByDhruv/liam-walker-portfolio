
import React from 'react';
import { Code, Zap, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Development', level: 88 },
    { name: 'Database Design', level: 85 },
    { name: 'DevOps & Deployment', level: 78 },
    { name: 'UI/UX Design', level: 82 },
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue to-electric-purple bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-hot-pink mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile section */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full border-4 border-cyber-blue glow-blue overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
                  alt="Liam Walker"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-electric-purple rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-hot-pink rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Content section */}
          <div className="space-y-8">
            <div className="glass rounded-lg p-8 neon-border">
              <h3 className="text-2xl font-bold text-cyber-blue mb-4 font-mono">Hello World!</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate full-stack developer with over 5 years of experience crafting 
                digital solutions that make a difference. My journey started with a simple 
                "Hello World" and evolved into building complex, scalable applications that 
                serve millions of users.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or mentoring aspiring developers. I believe in the power 
                of clean code, innovative design, and continuous learning.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="glass rounded-lg p-6 text-center neon-border hover:glow-blue transition-all duration-300">
                <Code className="w-8 h-8 text-cyber-blue mx-auto mb-3" />
                <h4 className="font-mono text-sm text-cyan-100">Clean Code</h4>
              </div>
              <div className="glass rounded-lg p-6 text-center neon-border hover:glow-purple transition-all duration-300">
                <Zap className="w-8 h-8 text-electric-purple mx-auto mb-3" />
                <h4 className="font-mono text-sm text-purple-100">Performance</h4>
              </div>
              <div className="glass rounded-lg p-6 text-center neon-border hover:glow-pink transition-all duration-300">
                <Heart className="w-8 h-8 text-hot-pink mx-auto mb-3" />
                <h4 className="font-mono text-sm text-pink-100">Passion</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 font-mono">
            <span className="text-cyber-blue">&lt;</span>
            Skills
            <span className="text-cyber-blue">/&gt;</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-gray-300">{skill.name}</span>
                  <span className="text-cyber-blue font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyber-blue to-electric-purple rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%`, animationDelay: `${index * 0.2}s` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
