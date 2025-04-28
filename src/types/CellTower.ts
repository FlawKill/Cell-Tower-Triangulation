export interface CellTower {
  id: string;
  lat: number;
  lng: number;
  signalStrength: number; // in dBm
  distance?: number; // in meters
}

export interface UserLocation {
  lat: number;
  lng: number;
  accuracy: number;
}

export interface CellularInfo {
  type: string;
  signalStrength: number;
  cellId?: string;
  mobileCountryCode?: string;
  mobileNetworkCode?: string;
  locationAreaCode?: string;
  latitude: number;
  longitude: number;
}