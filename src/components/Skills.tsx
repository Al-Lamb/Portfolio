import React from 'react';
import { Code2, Palette, Wrench } from 'lucide-react';

export function Skills() {
  const skills = {
    frontend: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    design: ['UI Design', 'UX Research', 'Figma', 'Wireframing'],
    tools: ['VS Code', 'Git', 'GitHub', 'Command Line'],
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Code2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend Development</h3>
            <div className="space-y-2">
              {skills.frontend.map((skill) => (
                <div key={skill} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span className="text-gray-600">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Palette className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Design</h3>
            <div className="space-y-2">
              {skills.design.map((skill) => (
                <div key={skill} className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  <span className="text-gray-600">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Wrench className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools</h3>
            <div className="space-y-2">
              {skills.tools.map((skill) => (
                <div key={skill} className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  <span className="text-gray-600">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}