import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { CellTower, UserLocation } from '../types/CellTower';
import { getNearestCellTowers } from '../services/cellTowerService';
import { calculateUserPosition } from '../utils/triangulation';

import 'leaflet/dist/leaflet.css';

interface MapProps {
  isDarkMode: boolean;
}

const Map: React.FC<MapProps> = ({ isDarkMode }) => {
  const [cellTowers, setCellTowers] = useState<CellTower[]>([]);
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const towers = await getNearestCellTowers();
        setCellTowers(towers);
        const location = calculateUserPosition(towers);
        setUserLocation(location);
      } catch (error) {
        console.error('Error fetching cell tower data:', error);
        setError('Failed to determine your location. Please check your internet connection.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !userLocation) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-red-500 text-center">
          <p>{error || 'Unable to load the map'}</p>
        </div>
      </div>
    );
  }

  return (
    <MapContainer
      center={[userLocation.lat, userLocation.lng]}
      zoom={16}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={isDarkMode 
          ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        }
      />
      
      <Circle
        center={[userLocation.lat, userLocation.lng]}
        radius={userLocation.accuracy / 2}
        pathOptions={{ 
          color: isDarkMode ? '#60A5FA' : '#3B82F6',
          fillColor: isDarkMode ? '#60A5FA' : '#3B82F6',
          fillOpacity: 0.15,
          weight: 2
        }}
      />

      {cellTowers.map((tower) => (
        <Marker
          key={tower.id}
          position={[tower.lat, tower.lng]}
          icon={new Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41]
          })}
        >
          <Popup>
            <div className={isDarkMode ? 'text-gray-900' : ''}>
              Cell Tower {tower.id}<br />
              Signal Strength: {tower.signalStrength} dBm
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;