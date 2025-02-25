import React from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800">AL</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/Al-Lamb" target="_blank" rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/alistair-lambert-2bab35138/" target="_blank" rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t">
            <div className="flex flex-col space-y-4 p-6">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              <div className="flex items-center space-x-4 pt-2">
                <a href="https://github.com/Al-Lamb" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/alistair-lambert-2bab35138/" target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}