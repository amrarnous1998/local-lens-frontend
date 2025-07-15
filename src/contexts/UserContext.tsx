import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { User, UserPreferences, UserContextType } from '../types';

interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

type UserAction = 
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'CLEAR_ERROR' }
  | { type: 'UPDATE_PREFERENCES'; payload: Partial<UserPreferences> }
  | { type: 'UPDATE_PROFILE'; payload: Partial<User> }
  | { type: 'LOGOUT' };

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload, isLoading: false, error: null };
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    case 'UPDATE_PREFERENCES':
      return { 
        ...state, 
        user: state.user ? { 
          ...state.user, 
          preferences: { ...state.user.preferences, ...action.payload } 
        } : null 
      };
    case 'UPDATE_PROFILE':
      return { 
        ...state, 
        user: state.user ? { ...state.user, ...action.payload } : null 
      };
    case 'LOGOUT':
      return { ...state, user: null, error: null };
    default:
      return state;
  }
};

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      const mockUser: User = {
        id: '1',
        email,
        name: 'John Doe',
        preferences: {
          categories: ['news', 'events', 'weather'],
          notificationSettings: {
            pushEnabled: true,
            emailEnabled: true,
            weatherAlerts: true,
            safetyAlerts: true,
            newsDigests: true,
            eventReminders: true,
            jobAlerts: false,
            quietHours: {
              start: '22:00',
              end: '07:00',
            },
          },
          radius: 10,
          language: 'en',
          isPremium: false,
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      dispatch({ type: 'SET_USER', payload: mockUser });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Login failed. Please try again.' });
    }
  };

  const logout = async (): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Logout failed. Please try again.' });
    }
  };

  const updatePreferences = async (preferences: Partial<UserPreferences>): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      dispatch({ type: 'UPDATE_PREFERENCES', payload: preferences });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to update preferences.' });
    }
  };

  const updateProfile = async (profile: Partial<User>): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      dispatch({ type: 'UPDATE_PROFILE', payload: profile });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to update profile.' });
    }
  };

  const register = async (email: string, password: string, name: string): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Mock successful registration
      const mockUser: User = {
        id: Date.now().toString(),
        email,
        name,
        preferences: {
          categories: ['news', 'events', 'weather'],
          notificationSettings: {
            pushEnabled: true,
            emailEnabled: true,
            weatherAlerts: true,
            safetyAlerts: true,
            newsDigests: true,
            eventReminders: true,
            jobAlerts: false,
            quietHours: {
              start: '22:00',
              end: '07:00',
            },
          },
          radius: 10,
          language: 'en',
          isPremium: false,
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      dispatch({ type: 'SET_USER', payload: mockUser });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Registration failed. Please try again.' });
    }
  };

  const forgotPassword = async (email: string): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful password reset request
      dispatch({ type: 'SET_LOADING', payload: false });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Password reset failed. Please try again.' });
    }
  };

  const resetPassword = async (token: string, newPassword: string): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful password reset
      dispatch({ type: 'SET_LOADING', payload: false });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Password reset failed. Please try again.' });
    }
  };

  const clearError = (): void => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  // Auto-login with stored token (if available)
  useEffect(() => {
    const checkStoredAuth = async () => {
      try {
        // In a real app, check for stored auth token
        // For now, we'll skip auto-login
        dispatch({ type: 'SET_LOADING', payload: false });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to restore session' });
      }
    };

    checkStoredAuth();
  }, []);

  const value: UserContextType = {
    user: state.user,
    isLoading: state.isLoading,
    error: state.error,
    login,
    logout,
    updatePreferences,
    updateProfile,
    register,
    forgotPassword,
    resetPassword,
    clearError,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
