import React from 'react';
import { Map, Radio, Activity, Signal, Sun, Moon } from 'lucide-react';
import Footer from './Footer';

interface LandingPageProps {
  onViewMap: () => void;
  onLearnMore: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ 
  onViewMap, 
  onLearnMore, 
  isDarkMode,
  onToggleDarkMode 
}) => {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} backdrop-blur-sm border-b border-gray-200 dark:border-gray-800`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Radio className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className="text-xl font-bold">Cell Tower Tracker</span>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={onViewMap}
                className={`${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200`}
              >
                <Map className="h-4 w-4" />
                <span>View Map</span>
              </button>
              <button
                onClick={onToggleDarkMode}
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

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 opacity-75 blur"></div>
                <Signal className={`h-12 w-12 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'} relative z-10`} />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold">
              Cell Tower Location{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Tracker
              </span>
            </h1>
            
            <p className={`text-xl max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Track and visualize cell tower locations in real-time. See your position relative to
              nearby towers and understand your network coverage.
            </p>
            
            <div className="flex justify-center space-x-4">
              <button 
                onClick={onViewMap}
                className={`${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-200 hover:scale-105`}
              >
                <Map className="h-5 w-5" />
                <span>View Map</span>
              </button>
              <button 
                onClick={onLearnMore}
                className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-200 hover:scale-105`}
              >
                <Activity className="h-5 w-5" />
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Real-time Tracking */}
            <div className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'} p-6 rounded-xl transition-colors duration-200 shadow-lg`}>
              <div className={`${isDarkMode ? 'bg-blue-600/20' : 'bg-blue-50'} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <Map className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                View your current position and nearby cell towers in real-time on an interactive map.
              </p>
            </div>

            {/* Signal Strength */}
            <div className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'} p-6 rounded-xl transition-colors duration-200 shadow-lg`}>
              <div className={`${isDarkMode ? 'bg-blue-600/20' : 'bg-blue-50'} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <Signal className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Signal Strength</h3>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                Monitor signal strength from different towers and optimize your network connection.
              </p>
            </div>

            {/* Coverage Analysis */}
            <div className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'} p-6 rounded-xl transition-colors duration-200 shadow-lg`}>
              <div className={`${isDarkMode ? 'bg-blue-600/20' : 'bg-blue-50'} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <Activity className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Coverage Analysis</h3>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                Analyze your network coverage and identify areas with strong or weak signal strength.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer isDarkMode={isDarkMode} onLearnMore={onLearnMore} />
    </div>
  );
};

export default LandingPage; 