import React from 'react';
import { Radio, ArrowLeft, MapPin, Signal, Activity, Wifi, Navigation, Zap } from 'lucide-react';
import Footer from './Footer';

interface AboutPageProps {
  onBack: () => void;
  isDarkMode?: boolean;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack, isDarkMode = true }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Radio className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold">Cell Tower Tracker</span>
          </div>
          <button 
            onClick={onBack}
            className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6">About Cell Tower Tracker</h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Cell Tower Tracker is an advanced real-time location tracking system that utilizes cellular network infrastructure to provide accurate positioning and network analysis capabilities.
          </p>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">Key Benefits</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                <span>Accurate indoor and outdoor positioning without relying solely on GPS</span>
              </li>
              <li className="flex items-start space-x-3">
                <Signal className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                <span>Real-time signal strength monitoring and network optimization</span>
              </li>
              <li className="flex items-start space-x-3">
                <Activity className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                <span>Comprehensive coverage analysis and network performance metrics</span>
              </li>
            </ul>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">How Cell Tower Triangulation Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Wifi className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Signal Measurement</h3>
              <p className="text-gray-300">
                The system measures signal strength and timing from multiple nearby cell towers. Each tower provides a unique signal signature and timing information.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Navigation className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Position Calculation</h3>
              <p className="text-gray-300">
                Using the measured signals from multiple towers, the system calculates your position through trilateration, determining where the signal circles intersect.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Advanced Features</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
                  <p className="text-gray-300">
                    Our system continuously monitors and updates your position and network status in real-time, providing instant feedback about your location and connection quality.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Activity className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Coverage Analysis</h3>
                  <p className="text-gray-300">
                    Get detailed insights about network coverage in your area, including signal strength heatmaps, dead zones, and optimal connection points.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer isDarkMode={true} />
    </div>
  );
};

export default AboutPage; 