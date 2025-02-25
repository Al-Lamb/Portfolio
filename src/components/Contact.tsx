import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-gray-600 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors w-full md:w-auto justify-center"
            >
              <Mail className="mr-2" size={20} />
              Send Email
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors w-full md:w-auto justify-center"
            >
              <MessageSquare className="mr-2" size={20} />
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}