import { WeatherData, WeatherForecast, WeatherAlert, Location } from '../types';

const mockLocation: Location = {
  latitude: 40.7128,
  longitude: -74.0060,
  address: '123 Main St, New York, NY 10001',
  city: 'New York',
  state: 'NY',
  country: 'USA',
  postalCode: '10001',
};

export const mockWeatherData: WeatherData = {
  location: mockLocation,
  current: {
    temperature: 18, // Celsius
    feelsLike: 15,
    humidity: 65,
    windSpeed: 12,
    windDirection: 220,
    visibility: 10,
    uvIndex: 3,
    condition: 'partlyCloudy',
    icon: 'cloud-sun',
  },
  forecast: [
    {
      date: new Date('2024-01-16'),
      high: 22,
      low: 12,
      condition: 'partlyCloudy',
      icon: 'cloud-sun',
      precipitationChance: 20,
      windSpeed: 10,
    },
    {
      date: new Date('2024-01-17'),
      high: 25,
      low: 15,
      condition: 'clear',
      icon: 'sun',
      precipitationChance: 0,
      windSpeed: 8,
    },
    {
      date: new Date('2024-01-18'),
      high: 19,
      low: 8,
      condition: 'rain',
      icon: 'cloud-rain',
      precipitationChance: 80,
      windSpeed: 15,
    },
    {
      date: new Date('2024-01-19'),
      high: 12,
      low: 3,
      condition: 'snow',
      icon: 'snowflake',
      precipitationChance: 90,
      windSpeed: 20,
    },
    {
      date: new Date('2024-01-20'),
      high: 8,
      low: -2,
      condition: 'snow',
      icon: 'snowflake',
      precipitationChance: 85,
      windSpeed: 25,
    },
    {
      date: new Date('2024-01-21'),
      high: 15,
      low: 5,
      condition: 'cloudy',
      icon: 'cloud',
      precipitationChance: 30,
      windSpeed: 12,
    },
    {
      date: new Date('2024-01-22'),
      high: 20,
      low: 10,
      condition: 'partlyCloudy',
      icon: 'cloud-sun',
      precipitationChance: 15,
      windSpeed: 9,
    },
  ],
  alerts: [
    {
      id: 'alert-1',
      title: 'Winter Weather Advisory',
      description: 'Snow expected Friday evening through Saturday morning. Total snow accumulation of 6 to 8 inches possible. Plan for difficult travel conditions.',
      severity: 'moderate',
      startTime: new Date('2024-01-19T18:00:00Z'),
      endTime: new Date('2024-01-20T12:00:00Z'),
      areas: ['New York County', 'Kings County', 'Queens County'],
    },
    {
      id: 'alert-2',
      title: 'Wind Advisory',
      description: 'Sustained winds of 20 to 30 mph with gusts up to 45 mph expected. Use caution when driving high-profile vehicles.',
      severity: 'minor',
      startTime: new Date('2024-01-20T06:00:00Z'),
      endTime: new Date('2024-01-20T18:00:00Z'),
      areas: ['New York County', 'Bronx County'],
    },
  ],
  lastUpdated: new Date('2024-01-15T15:00:00Z'),
};

export const mockWeatherForecast: WeatherForecast[] = mockWeatherData.forecast;

export const mockWeatherAlerts: WeatherAlert[] = mockWeatherData.alerts;

export const getCurrentWeather = (): WeatherData => {
  return {
    ...mockWeatherData,
    lastUpdated: new Date(),
  };
};

export const getWeatherForecast = (days: number = 7): WeatherForecast[] => {
  return mockWeatherForecast.slice(0, days);
};

export const getWeatherAlerts = (): WeatherAlert[] => {
  const now = new Date();
  return mockWeatherAlerts.filter(alert => 
    new Date(alert.startTime) <= now && new Date(alert.endTime) >= now
  );
};

export const getActiveAlerts = (): WeatherAlert[] => {
  const now = new Date();
  return mockWeatherAlerts.filter(alert => 
    new Date(alert.startTime) <= now && new Date(alert.endTime) >= now
  );
};

export const getSevereAlerts = (): WeatherAlert[] => {
  return mockWeatherAlerts.filter(alert => 
    alert.severity === 'severe' || alert.severity === 'extreme'
  );
};

export const getWeatherByLocation = (location: Location): WeatherData => {
  return {
    ...mockWeatherData,
    location,
    lastUpdated: new Date(),
  };
};

// Temperature conversion utilities
export const celsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9/5) + 32;
};

export const fahrenheitToCelsius = (fahrenheit: number): number => {
  return (fahrenheit - 32) * 5/9;
};

// Weather condition utilities
export const getWeatherIcon = (condition: string): string => {
  const icons: { [key: string]: string } = {
    clear: 'sun',
    cloudy: 'cloud',
    partlyCloudy: 'cloud-sun',
    rain: 'cloud-rain',
    snow: 'snowflake',
    thunderstorm: 'bolt',
    fog: 'smog',
    wind: 'wind',
  };
  return icons[condition] || 'sun';
};

export const getWeatherDescription = (condition: string): string => {
  const descriptions: { [key: string]: string } = {
    clear: 'Clear skies',
    cloudy: 'Cloudy',
    partlyCloudy: 'Partly cloudy',
    rain: 'Rainy',
    snow: 'Snowy',
    thunderstorm: 'Thunderstorms',
    fog: 'Foggy',
    wind: 'Windy',
  };
  return descriptions[condition] || 'Unknown';
};

export const getAlertSeverityColor = (severity: string): string => {
  const colors: { [key: string]: string } = {
    minor: '#FCD34D', // Yellow
    moderate: '#FB923C', // Orange
    severe: '#F87171', // Red
    extreme: '#DC2626', // Dark red
  };
  return colors[severity] || '#6B7280'; // Gray
};

export const getUVIndexDescription = (uvIndex: number): string => {
  if (uvIndex <= 2) return 'Low';
  if (uvIndex <= 5) return 'Moderate';
  if (uvIndex <= 7) return 'High';
  if (uvIndex <= 10) return 'Very High';
  return 'Extreme';
};

export const getVisibilityDescription = (visibility: number): string => {
  if (visibility >= 10) return 'Excellent';
  if (visibility >= 5) return 'Good';
  if (visibility >= 2) return 'Moderate';
  if (visibility >= 1) return 'Poor';
  return 'Very Poor';
};

export const getWindDirection = (degrees: number): string => {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
};

export const getHumidityDescription = (humidity: number): string => {
  if (humidity < 30) return 'Dry';
  if (humidity < 50) return 'Comfortable';
  if (humidity < 70) return 'Moderate';
  if (humidity < 85) return 'Humid';
  return 'Very Humid';
};
