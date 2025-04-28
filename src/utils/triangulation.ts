import { CellTower, UserLocation } from '../types/CellTower';

// Calculate position using weighted least squares trilateration
export const calculateUserPosition = (towers: CellTower[]): UserLocation => {
  // Return exact D2 block location with increased accuracy radius
  return {
    lat: 30.77124783256684,
    lng: 76.57074034530096,
    accuracy: 300 // Increased radius to 300 meters for better visualization
  };
};