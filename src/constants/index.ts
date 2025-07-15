// Application constants

export const APP_CONFIG = {
  name: 'Local Lens',
  version: '1.0.0',
  description: 'AI-powered hyperlocal news and info app',
  bundleId: 'com.locallens.app',
  
  // API Configuration
  api: {
    baseUrl: __DEV__ ? 'http://localhost:3000' : 'https://api.locallens.com',
    timeout: 10000,
    retryAttempts: 3,
  },
  
  // Location settings
  location: {
    defaultRadius: 10, // kilometers
    maxRadius: 50, // kilometers
    minRadius: 1, // kilometers
    updateInterval: 300000, // 5 minutes in milliseconds
    accuracy: 100, // meters
  },
  
  // UI Configuration
  ui: {
    feedRefreshInterval: 300000, // 5 minutes
    mapUpdateInterval: 60000, // 1 minute
    searchDebounceTime: 500, // milliseconds
    animationDuration: 300, // milliseconds
  },
  
  // Pagination
  pagination: {
    defaultLimit: 20,
    maxLimit: 100,
  },
  
  // Cache settings
  cache: {
    newsMaxAge: 900000, // 15 minutes
    weatherMaxAge: 600000, // 10 minutes
    eventsMaxAge: 1800000, // 30 minutes
    jobsMaxAge: 3600000, // 1 hour
  },
  
  // AdMob configuration
  ads: {
    bannerAdUnitId: __DEV__ 
      ? 'ca-app-pub-3940256099942544/6300978111' // Test ad unit
      : 'ca-app-pub-YOUR_ACTUAL_AD_UNIT_ID',
    interstitialAdUnitId: __DEV__
      ? 'ca-app-pub-3940256099942544/1033173712' // Test ad unit
      : 'ca-app-pub-YOUR_ACTUAL_AD_UNIT_ID',
    rewardedAdUnitId: __DEV__
      ? 'ca-app-pub-3940256099942544/5224354917' // Test ad unit
      : 'ca-app-pub-YOUR_ACTUAL_AD_UNIT_ID',
  },
  
  // Notification settings
  notifications: {
    defaultQuietHours: {
      start: '22:00',
      end: '07:00',
    },
  },
  
  // Premium features
  premium: {
    monthlyPrice: 4.99,
    yearlyPrice: 49.99,
    features: [
      'Ad-free experience',
      'Faster updates',
      'Extended radius',
      'Advanced filters',
      'Offline reading',
      'Priority support',
    ],
  },
};

export const COLORS = {
  primary: '#2563EB', // Blue
  primaryDark: '#1E40AF',
  primaryLight: '#3B82F6',
  
  secondary: '#10B981', // Green
  secondaryDark: '#059669',
  secondaryLight: '#34D399',
  
  accent: '#F59E0B', // Amber
  accentDark: '#D97706',
  accentLight: '#FBBF24',
  
  // Neutral colors
  black: '#000000',
  white: '#FFFFFF',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  
  // Status colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  
  // Background colors
  background: '#FFFFFF',
  backgroundSecondary: '#F9FAFB',
  surface: '#FFFFFF',
  
  // Text colors
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',
  textInverse: '#FFFFFF',
  
  // Border colors
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
  
  // Category colors
  categories: {
    news: '#3B82F6',
    events: '#8B5CF6',
    weather: '#06B6D4',
    jobs: '#10B981',
    business: '#F59E0B',
    safety: '#EF4444',
    sports: '#EC4899',
    entertainment: '#A855F7',
    food: '#F97316',
    health: '#22C55E',
    education: '#6366F1',
    technology: '#0EA5E9',
  },
};

export const TYPOGRAPHY = {
  fontFamily: {
    regular: 'System',
    medium: 'System',
    semibold: 'System',
    bold: 'System',
  },
  
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
  },
  
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  
  fontWeight: {
    thin: '100' as const,
    extralight: '200' as const,
    light: '300' as const,
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
    black: '900' as const,
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
  '4xl': 80,
  '5xl': 96,
};

export const CATEGORIES = [
  { id: 'news', name: 'News', icon: 'newspaper', color: COLORS.categories.news },
  { id: 'events', name: 'Events', icon: 'calendar', color: COLORS.categories.events },
  { id: 'weather', name: 'Weather', icon: 'cloud', color: COLORS.categories.weather },
  { id: 'jobs', name: 'Jobs', icon: 'briefcase', color: COLORS.categories.jobs },
  { id: 'business', name: 'Business', icon: 'building', color: COLORS.categories.business },
  { id: 'safety', name: 'Safety', icon: 'shield', color: COLORS.categories.safety },
  { id: 'sports', name: 'Sports', icon: 'basketball', color: COLORS.categories.sports },
  { id: 'entertainment', name: 'Entertainment', icon: 'music', color: COLORS.categories.entertainment },
  { id: 'food', name: 'Food & Dining', icon: 'utensils', color: COLORS.categories.food },
  { id: 'health', name: 'Health', icon: 'heart', color: COLORS.categories.health },
  { id: 'education', name: 'Education', icon: 'graduation-cap', color: COLORS.categories.education },
  { id: 'technology', name: 'Technology', icon: 'laptop', color: COLORS.categories.technology },
];

export const WEATHER_CONDITIONS = {
  clear: { icon: 'sun', name: 'Clear' },
  cloudy: { icon: 'cloud', name: 'Cloudy' },
  partlyCloudy: { icon: 'cloud-sun', name: 'Partly Cloudy' },
  rain: { icon: 'cloud-rain', name: 'Rain' },
  snow: { icon: 'snowflake', name: 'Snow' },
  thunderstorm: { icon: 'bolt', name: 'Thunderstorm' },
  fog: { icon: 'smog', name: 'Fog' },
  wind: { icon: 'wind', name: 'Windy' },
};

export const NOTIFICATION_TYPES = {
  NEWS: 'news',
  WEATHER: 'weather',
  EVENT: 'event',
  JOB: 'job',
  SAFETY: 'safety',
  DIGEST: 'digest',
  PROMOTIONAL: 'promotional',
};

export const STORAGE_KEYS = {
  USER_PREFERENCES: 'user_preferences',
  LOCATION: 'user_location',
  ONBOARDING_COMPLETE: 'onboarding_complete',
  CACHED_NEWS: 'cached_news',
  CACHED_WEATHER: 'cached_weather',
  CACHED_EVENTS: 'cached_events',
  CACHED_JOBS: 'cached_jobs',
  LAST_LOCATION_UPDATE: 'last_location_update',
  THEME: 'app_theme',
  NOTIFICATION_SETTINGS: 'notification_settings',
};

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network connection error. Please check your internet connection.',
  LOCATION_PERMISSION_DENIED: 'Location permission is required to show local content.',
  LOCATION_UNAVAILABLE: 'Unable to determine your location. Please try again.',
  GENERAL_ERROR: 'Something went wrong. Please try again.',
  NO_DATA: 'No data available for your location.',
  EXPIRED_SESSION: 'Your session has expired. Please log in again.',
  INVALID_CREDENTIALS: 'Invalid email or password.',
  REGISTRATION_FAILED: 'Registration failed. Please try again.',
  PASSWORD_RESET_FAILED: 'Password reset failed. Please try again.',
  PROFILE_UPDATE_FAILED: 'Profile update failed. Please try again.',
  PREFERENCES_UPDATE_FAILED: 'Preferences update failed. Please try again.',
};

export const SUCCESS_MESSAGES = {
  PROFILE_UPDATED: 'Profile updated successfully.',
  PREFERENCES_UPDATED: 'Preferences updated successfully.',
  PASSWORD_RESET: 'Password reset link sent to your email.',
  REGISTRATION_SUCCESS: 'Registration successful. Welcome to Local Lens!',
  LOCATION_UPDATED: 'Location updated successfully.',
  NOTIFICATION_SENT: 'Notification sent successfully.',
  PREMIUM_ACTIVATED: 'Premium subscription activated successfully.',
};

export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
};

export const SCREEN_NAMES = {
  ONBOARDING: 'Onboarding',
  MAIN: 'Main',
  NEWS_FEED: 'NewsFeed',
  MAP_VIEW: 'MapView',
  EVENTS: 'Events',
  WEATHER: 'Weather',
  JOBS: 'Jobs',
  PROFILE: 'Profile',
  SETTINGS: 'Settings',
  ARTICLE_DETAILS: 'ArticleDetails',
  EVENT_DETAILS: 'EventDetails',
  JOB_DETAILS: 'JobDetails',
  LOCATION_PICKER: 'LocationPicker',
  PREFERENCES: 'Preferences',
  NOTIFICATIONS: 'Notifications',
  PREMIUM: 'Premium',
} as const;

export const TAB_NAMES = {
  FEED: 'Feed',
  MAP: 'Map',
  EVENTS: 'Events',
  WEATHER: 'Weather',
  PROFILE: 'Profile',
} as const;

export const DEEP_LINK_PREFIXES = [
  'locallens://',
  'https://locallens.com',
];

export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
  
  // User
  PROFILE: '/user/profile',
  PREFERENCES: '/user/preferences',
  LOCATION: '/user/location',
  
  // News
  NEWS: '/news',
  NEWS_SEARCH: '/news/search',
  NEWS_CATEGORIES: '/news/categories',
  
  // Events
  EVENTS: '/events',
  EVENTS_SEARCH: '/events/search',
  EVENTS_CATEGORIES: '/events/categories',
  
  // Weather
  WEATHER: '/weather',
  WEATHER_FORECAST: '/weather/forecast',
  WEATHER_ALERTS: '/weather/alerts',
  
  // Jobs
  JOBS: '/jobs',
  JOBS_SEARCH: '/jobs/search',
  JOBS_CATEGORIES: '/jobs/categories',
  
  // Map
  MAP_PINS: '/map/pins',
  
  // Notifications
  NOTIFICATIONS: '/notifications',
  NOTIFICATION_SETTINGS: '/notifications/settings',
  
  // Premium
  PREMIUM: '/premium',
  SUBSCRIPTION: '/premium/subscription',
  
  // Digest
  DIGEST: '/digest',
  DIGEST_AUDIO: '/digest/audio',
};
