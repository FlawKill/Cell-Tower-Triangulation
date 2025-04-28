import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  isDarkMode?: boolean;
  onLearnMore?: () => void;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode = false, onLearnMore }) => {
  return (
    <footer className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'} border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              About Cell Tower Tracker
            </h3>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
              An advanced real-time location tracking system that utilizes cellular network infrastructure
              to provide accurate positioning and network analysis capabilities.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@celltowertracker.com"
                className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={onLearnMore}
                  className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
                >
                  Documentation
                </button>
              </li>
              <li>
                <a 
                  href="https://www.cellmapper.net" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
                >
                  API Reference
                </a>
              </li>
              <li>
                <a 
                  href="mailto:ayushdayal7300@gmail.com"
                  className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
                >
                  Support
                </a>
              </li>
              <li>
                <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact
            </h3>
            <ul className="space-y-2">
              <li className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Chandigarh University
              </li>
              <li className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                NH-95 Chandigarh-Ludhiana Highway
              </li>
              <li className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Punjab, India
              </li>
              <li>
                <a 
                  href="tel:+917742435934"
                  className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
                >
                  +91 7742435934
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-8 pt-8 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} Cell Tower Tracker. Made with{' '}
            <Heart className="h-4 w-4 inline-block text-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 