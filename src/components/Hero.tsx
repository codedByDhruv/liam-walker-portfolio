
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Developer';
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background code animation */}
      <div className="absolute inset-0 opacity-10 font-mono text-xs text-cyber-blue">
        <div className="absolute top-20 left-10 animate-fade-in">
          <code>const developer = &#123;</code><br />
          <code>&nbsp;&nbsp;name: 'Liam Walker',</code><br />
          <code>&nbsp;&nbsp;skills: ['React', 'Node.js'],</code><br />
          <code>&nbsp;&nbsp;passion: 'Building the future'</code><br />
          <code>&#125;;</code>
        </div>
        <div className="absolute top-40 right-20 animate-fade-in" style={{ animationDelay: '1s' }}>
          <code>function createMagic() &#123;</code><br />
          <code>&nbsp;&nbsp;return 'Amazing experiences';</code><br />
          <code>&#125;</code>
        </div>
        <div className="absolute bottom-40 left-20 animate-fade-in" style={{ animationDelay: '2s' }}>
          <code>while (coding) &#123;</code><br />
          <code>&nbsp;&nbsp;learn();</code><br />
          <code>&nbsp;&nbsp;build();</code><br />
          <code>&nbsp;&nbsp;innovate();</code><br />
          <code>&#125;</code>
        </div>
      </div>

      {/* Main content */}
      <div className="text-center z-10 relative">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyber-blue via-electric-purple to-hot-pink bg-clip-text text-transparent animate-slide-up">
            Liam Walker
          </h1>
          <div className="h-16 flex items-center justify-center mt-4">
            <span className="text-2xl md:text-3xl font-mono text-white border-r-2 border-cyber-blue typewriter">
              {displayText}
            </span>
          </div>
        </div>
        
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '3s' }}>
          Crafting digital experiences with cutting-edge technology and creative innovation. 
          Welcome to my digital realm.
        </p>
        
        <div className="flex gap-6 justify-center animate-fade-in" style={{ animationDelay: '4s' }}>
          <button 
            onClick={scrollToAbout}
            className="px-8 py-3 bg-transparent border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black transition-all duration-300 glow-blue font-mono uppercase tracking-wider"
          >
            Explore My Work
          </button>
          <button className="px-8 py-3 bg-gradient-to-r from-electric-purple to-hot-pink text-white hover:scale-105 transition-all duration-300 glow-purple font-mono uppercase tracking-wider">
            Download CV
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-fade-in pulse-glow"
        style={{ animationDelay: '5s' }}
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-8 h-8 text-cyber-blue animate-bounce" />
      </div>
    </div>
  );
};

export default Hero;
