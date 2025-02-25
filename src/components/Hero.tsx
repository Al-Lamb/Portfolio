import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Hi, I'm Alistair Lambert
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              UX/UI Designer and Front-end Developer crafting beautiful, user-centered digital experiences.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=800&q=80"
                alt="Profile placeholder"
                className="absolute inset-0 w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}