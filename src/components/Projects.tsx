
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'EcoTracker',
      description: 'A full-stack application for tracking carbon footprint with real-time analytics and social features.',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'DevFlow',
      description: 'A collaborative development platform with real-time code sharing and integrated chat.',
      tech: ['TypeScript', 'WebSocket', 'Redis', 'Docker'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'AI Content Generator',
      description: 'An intelligent content creation tool powered by machine learning algorithms.',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 4,
      title: 'CryptoTracker Pro',
      description: 'Real-time cryptocurrency portfolio tracker with advanced analytics and alerts.',
      tech: ['Vue.js', 'Python', 'PostgreSQL', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-hot-pink to-cyber-blue bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-hot-pink to-cyber-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 font-mono">
            Building the future, one project at a time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative glass rounded-lg overflow-hidden neon-border transition-all duration-500 hover:scale-105 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-center space-y-4">
                    <div className="flex justify-center space-x-4">
                      <a 
                        href={project.github}
                        className="p-3 bg-cyber-blue text-black rounded-full hover:bg-white transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a 
                        href={project.live}
                        className="p-3 bg-electric-purple text-white rounded-full hover:bg-hot-pink transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyber-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-gradient-to-r from-hot-pink to-electric-purple text-xs font-mono rounded">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-mono rounded-full border border-gray-700 group-hover:border-cyber-blue transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-transparent border-2 border-hot-pink text-hot-pink hover:bg-hot-pink hover:text-black transition-all duration-300 glow-pink font-mono uppercase tracking-wider">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
