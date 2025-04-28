import { CellTower, CellularInfo } from '../types/CellTower';

// Your exact location coordinates
const USER_LOCATION = {
  latitude: 30.77124783256684,
  longitude: 76.57074034530096
};

// Real cell tower locations from CellMapper
const PROXY_CELL_TOWERS = [
  {
    id: 'TOWER-1',
    lat: 30.76582287637056,
    lng: 76.57548125362655,
    signalStrength: -65
  },
  {
    id: 'TOWER-2',
    lat: 30.77435612901843,
    lng: 76.57057912423733,
    signalStrength: -62
  },
  {
    id: 'TOWER-3',
    lat: 30.76335269464675,
    lng: 76.60269550932587,
    signalStrength: -75
  },
  {
    id: 'TOWER-4',
    lat: 30.777003993001337,
    lng: 76.55574189555762,
    signalStrength: -70
  }
];

// Get cellular network information using exact coordinates
const getCellularInfo = async (): Promise<CellularInfo> => {
  return {
    type: 'cellular',
    signalStrength: -62,
    cellId: 'TOWER-2',
    mobileCountryCode: '404', // India MCC
    mobileNetworkCode: '70', // Jio MNC
    locationAreaCode: '40445',
    latitude: USER_LOCATION.latitude,
    longitude: USER_LOCATION.longitude
  };
};

export const getNearestCellTowers = async (): Promise<CellTower[]> => {
  return PROXY_CELL_TOWERS;
};