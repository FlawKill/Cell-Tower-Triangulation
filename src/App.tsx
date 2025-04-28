import React, { useState } from 'react';
import { Radio, Sun, Moon, ArrowLeft } from 'lucide-react';
import Map from './components/Map';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';

type Page = 'landing' | 'map' | 'about';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleViewMap = () => {
    setCurrentPage('map');
  };

  const handleLearnMore = () => {
    setCurrentPage('about');
  };

  const handleBackToHome = () => {
    setCurrentPage('landing');
  };

  if (currentPage === 'landing') {
    return (
      <LandingPage 
        onViewMap={handleViewMap} 
        onLearnMore={handleLearnMore}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />
    );
  }

  if (currentPage === 'about') {
    return <AboutPage onBack={handleBackToHome} isDarkMode={isDarkMode} />;
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-100'} transition-colors duration-300`}>
      <nav className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b shadow-sm transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Radio className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Cell Tower Navigation
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleBackToHome}
                className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200`}
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </button>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-200`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-yellow-400" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto p-4">
        <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-md transition-colors duration-300`}>
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold mb-2">Location Status</h2>
            <div className="space-y-2">
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Current Position: Chandigarh University
              </p>
              <div className={`flex items-center space-x-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Connected to 4 cell towers</span>
              </div>
            </div>
          </div>
          
          <div className="h-[600px] rounded-lg overflow-hidden">
            <Map isDarkMode={isDarkMode} />
          </div>

          <div className={`p-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <p>
              ℹ️ Red markers indicate cell towers. The blue circle represents the accuracy radius of the location estimate.
            </p>
          </div>
        </div>
      </main>

      <Footer isDarkMode={isDarkMode} onLearnMore={handleLearnMore} />
    </div>
  );
}

export default App;