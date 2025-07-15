// Core application types

export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
}

export interface User {
  id: string;
  email?: string;
  name?: string;
  avatar?: string;
  preferences: UserPreferences;
  location?: Location;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPreferences {
  categories: string[];
  notificationSettings: NotificationSettings;
  radius: number; // in kilometers
  language: string;
  isPremium: boolean;
}

export interface NotificationSettings {
  pushEnabled: boolean;
  emailEnabled: boolean;
  weatherAlerts: boolean;
  safetyAlerts: boolean;
  newsDigests: boolean;
  eventReminders: boolean;
  jobAlerts: boolean;
  quietHours: {
    start: string; // HH:MM format
    end: string; // HH:MM format
  };
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl?: string;
  source: string;
  author?: string;
  category: string;
  tags: string[];
  publishedAt: Date;
  location: Location;
  distance: number; // in kilometers
  readingTime: number; // in minutes
  relevanceScore: number;
  isSponsored: boolean;
  url?: string;
}

export interface LocalEvent {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  venue: string;
  location: Location;
  startTime: Date;
  endTime: Date;
  category: string;
  tags: string[];
  price?: number;
  currency?: string;
  ticketUrl?: string;
  organizer: string;
  attendeeCount?: number;
  maxAttendees?: number;
  distance: number;
  source: 'eventbrite' | 'local' | 'yelp';
}

export interface WeatherData {
  location: Location;
  current: {
    temperature: number;
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    windDirection: number;
    visibility: number;
    uvIndex: number;
    condition: string;
    icon: string;
  };
  forecast: WeatherForecast[];
  alerts: WeatherAlert[];
  lastUpdated: Date;
}

export interface WeatherForecast {
  date: Date;
  high: number;
  low: number;
  condition: string;
  icon: string;
  precipitationChance: number;
  windSpeed: number;
}

export interface WeatherAlert {
  id: string;
  title: string;
  description: string;
  severity: 'minor' | 'moderate' | 'severe' | 'extreme';
  startTime: Date;
  endTime: Date;
  areas: string[];
}

export interface JobListing {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: Location;
  description: string;
  requirements: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
    period: 'hour' | 'day' | 'month' | 'year';
  };
  employmentType: 'full-time' | 'part-time' | 'contract' | 'temporary' | 'internship';
  remote: boolean;
  postedAt: Date;
  expiresAt?: Date;
  applyUrl: string;
  source: string;
  distance: number;
  category: string;
  tags: string[];
}

export interface MapPin {
  id: string;
  type: 'news' | 'event' | 'weather' | 'job' | 'business' | 'safety';
  title: string;
  description: string;
  location: Location;
  category: string;
  priority: 'low' | 'medium' | 'high';
  data: NewsArticle | LocalEvent | WeatherAlert | JobListing;
  createdAt: Date;
}

export interface Digest {
  id: string;
  title: string;
  summary: string;
  content: string;
  audioUrl?: string;
  createdAt: Date;
  location: Location;
  articles: NewsArticle[];
  events: LocalEvent[];
  weather: WeatherData;
  type: 'morning' | 'afternoon' | 'evening' | 'custom';
  duration: number; // in minutes
}

export interface Advertisement {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  targetUrl: string;
  type: 'banner' | 'interstitial' | 'native';
  location?: Location;
  radius?: number;
  impressions: number;
  clicks: number;
  isActive: boolean;
  startDate: Date;
  endDate: Date;
}

// Navigation types
export type RootStackParamList = {
  Onboarding: undefined;
  Main: undefined;
  NewsFeed: undefined;
  MapView: undefined;
  Events: undefined;
  Weather: undefined;
  Jobs: undefined;
  Profile: undefined;
  Settings: undefined;
  ArticleDetails: { articleId: string };
  EventDetails: { eventId: string };
  JobDetails: { jobId: string };
  LocationPicker: undefined;
  Preferences: undefined;
  Notifications: undefined;
  Premium: undefined;
};

export type TabParamList = {
  Feed: undefined;
  Map: undefined;
  Events: undefined;
  Weather: undefined;
  Profile: undefined;
};

// API Response types
export interface ApiResponse<T> {
  data: T;
  message: string;
  status: 'success' | 'error';
  timestamp: Date;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

// Error types
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
  timestamp: Date;
}

// App state types
export interface AppState {
  user: User | null;
  location: Location | null;
  preferences: UserPreferences;
  isLoading: boolean;
  error: string | null;
  isOnboarded: boolean;
  theme: 'light' | 'dark';
  connectivity: boolean;
}

// Context types
export interface LocationContextType {
  location: Location | null;
  isLoading: boolean;
  error: string | null;
  requestPermission: () => Promise<boolean>;
  getCurrentLocation: () => Promise<Location | null>;
  watchLocation: (callback: (location: Location) => void) => () => void;
}

export interface UserContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updatePreferences: (preferences: Partial<UserPreferences>) => Promise<void>;
  updateProfile: (profile: Partial<User>) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
  clearError: () => void;
}

// Service types
export interface NewsService {
  getLocalNews: (location: Location, radius: number) => Promise<NewsArticle[]>;
  getArticleById: (id: string) => Promise<NewsArticle>;
  searchNews: (query: string, location: Location) => Promise<NewsArticle[]>;
}

export interface EventService {
  getLocalEvents: (location: Location, radius: number) => Promise<LocalEvent[]>;
  getEventById: (id: string) => Promise<LocalEvent>;
  searchEvents: (query: string, location: Location) => Promise<LocalEvent[]>;
}

export interface WeatherService {
  getCurrentWeather: (location: Location) => Promise<WeatherData>;
  getWeatherForecast: (location: Location, days: number) => Promise<WeatherForecast[]>;
  getWeatherAlerts: (location: Location) => Promise<WeatherAlert[]>;
}

export interface JobService {
  getLocalJobs: (location: Location, radius: number) => Promise<JobListing[]>;
  getJobById: (id: string) => Promise<JobListing>;
  searchJobs: (query: string, location: Location) => Promise<JobListing[]>;
}
