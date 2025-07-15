import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Location, LocationContextType } from '../types';
import * as ExpoLocation from 'expo-location';

interface LocationState {
  location: Location | null;
  isLoading: boolean;
  error: string | null;
}

type LocationAction = 
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_LOCATION'; payload: Location }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'CLEAR_ERROR' };

const locationReducer = (state: LocationState, action: LocationAction): LocationState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_LOCATION':
      return { ...state, location: action.payload, isLoading: false, error: null };
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
};

const initialState: LocationState = {
  location: null,
  isLoading: false,
  error: null,
};

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const useLocation = (): LocationContextType => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};

interface LocationProviderProps {
  children: ReactNode;
}

export const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(locationReducer, initialState);

  const requestPermission = async (): Promise<boolean> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      const { status } = await ExpoLocation.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        dispatch({ type: 'SET_ERROR', payload: 'Location permission denied' });
        return false;
      }
      
      dispatch({ type: 'SET_LOADING', payload: false });
      return true;
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to request location permission' });
      return false;
    }
  };

  const getCurrentLocation = async (): Promise<Location | null> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      const hasPermission = await requestPermission();
      if (!hasPermission) {
        return null;
      }

      const position = await ExpoLocation.getCurrentPositionAsync({
        accuracy: ExpoLocation.Accuracy.Balanced,
      });

      const { latitude, longitude } = position.coords;
      
      // Reverse geocode to get address
      try {
        const addresses = await ExpoLocation.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        if (addresses.length > 0) {
          const address = addresses[0];
          const location: Location = {
            latitude,
            longitude,
            address: `${address.street || ''} ${address.streetNumber || ''}`.trim(),
            city: address.city || undefined,
            state: address.region || undefined,
            country: address.country || undefined,
            postalCode: address.postalCode || undefined,
          };
          
          dispatch({ type: 'SET_LOCATION', payload: location });
          return location;
        }
      } catch (geocodeError) {
        console.warn('Reverse geocoding failed:', geocodeError);
      }

      // If reverse geocoding fails, still return the coordinates
      const location: Location = {
        latitude,
        longitude,
      };
      
      dispatch({ type: 'SET_LOCATION', payload: location });
      return location;
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to get current location' });
      return null;
    }
  };

  const watchLocation = (callback: (location: Location) => void): (() => void) => {
    let watchId: ExpoLocation.LocationSubscription | null = null;
    
    const startWatching = async () => {
      try {
        const hasPermission = await requestPermission();
        if (!hasPermission) {
          return;
        }

        watchId = await ExpoLocation.watchPositionAsync(
          {
            accuracy: ExpoLocation.Accuracy.Balanced,
            timeInterval: 60000, // Update every minute
            distanceInterval: 100, // Update every 100 meters
          },
          async (position) => {
            const { latitude, longitude } = position.coords;
            
            try {
              const addresses = await ExpoLocation.reverseGeocodeAsync({
                latitude,
                longitude,
              });

              let location: Location = { latitude, longitude };
              
              if (addresses.length > 0) {
                const address = addresses[0];
                location = {
                  latitude,
                  longitude,
                  address: `${address.street || ''} ${address.streetNumber || ''}`.trim(),
                  city: address.city || undefined,
                  state: address.region || undefined,
                  country: address.country || undefined,
                  postalCode: address.postalCode || undefined,
                };
              }
              
              dispatch({ type: 'SET_LOCATION', payload: location });
              callback(location);
            } catch (error) {
              console.warn('Reverse geocoding failed:', error);
              const location: Location = { latitude, longitude };
              dispatch({ type: 'SET_LOCATION', payload: location });
              callback(location);
            }
          }
        );
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to watch location' });
      }
    };

    startWatching();

    return () => {
      if (watchId) {
        watchId.remove();
      }
    };
  };

  // Auto-request location on mount
  useEffect(() => {
    getCurrentLocation();
  }, []);

  const value: LocationContextType = {
    location: state.location,
    isLoading: state.isLoading,
    error: state.error,
    requestPermission,
    getCurrentLocation,
    watchLocation,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
