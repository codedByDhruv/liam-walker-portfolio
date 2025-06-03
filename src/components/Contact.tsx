
import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:liam@example.com', label: 'Email' }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue via-electric-purple to-hot-pink bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-hot-pink mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 font-mono">
            Ready to build something amazing together?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-lg p-8 neon-border">
            <h3 className="text-2xl font-bold text-cyber-blue mb-6 font-mono">
              &gt; Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-transparent border-2 border-gray-700 rounded px-4 py-3 text-white font-mono focus:outline-none transition-all duration-300 ${
                    focusedField === 'name' || formData.name ? 'border-cyber-blue glow-blue' : ''
                  }`}
                  required
                />
                <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-mono ${
                  focusedField === 'name' || formData.name 
                    ? '-top-2 text-xs text-cyber-blue bg-black px-2' 
                    : 'top-3 text-gray-400'
                }`}>
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-transparent border-2 border-gray-700 rounded px-4 py-3 text-white font-mono focus:outline-none transition-all duration-300 ${
                    focusedField === 'email' || formData.email ? 'border-electric-purple glow-purple' : ''
                  }`}
                  required
                />
                <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-mono ${
                  focusedField === 'email' || formData.email 
                    ? '-top-2 text-xs text-electric-purple bg-black px-2' 
                    : 'top-3 text-gray-400'
                }`}>
                  Email Address
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className={`w-full bg-transparent border-2 border-gray-700 rounded px-4 py-3 text-white font-mono focus:outline-none transition-all duration-300 resize-none ${
                    focusedField === 'message' || formData.message ? 'border-hot-pink glow-pink' : ''
                  }`}
                  required
                />
                <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-mono ${
                  focusedField === 'message' || formData.message 
                    ? '-top-2 text-xs text-hot-pink bg-black px-2' 
                    : 'top-3 text-gray-400'
                }`}>
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyber-blue to-electric-purple text-black font-mono font-bold py-3 px-6 rounded hover:from-electric-purple hover:to-hot-pink transition-all duration-300 uppercase tracking-wider"
              >
                Execute Message.send()
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass rounded-lg p-8 neon-border">
              <h3 className="text-2xl font-bold text-electric-purple mb-6 font-mono">
                &gt; Get In Touch
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Whether you have a project in mind, want to collaborate, or just 
                want to say hello, I'm always excited to connect with fellow 
                developers and creators.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyber-blue" />
                  <span className="font-mono">liam.walker@example.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="w-5 h-5 text-electric-purple">🌍</span>
                  <span className="font-mono">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-lg p-8 neon-border">
              <h3 className="text-xl font-bold text-hot-pink mb-6 font-mono">
                &gt; Follow Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center justify-center space-x-2 p-3 bg-gray-800 rounded hover:bg-gradient-to-r hover:from-cyber-blue hover:to-electric-purple hover:text-black transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-mono text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 font-mono">
            &copy; 2024 Liam Walker. Built with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
