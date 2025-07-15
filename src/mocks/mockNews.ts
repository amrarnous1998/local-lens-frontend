import { NewsArticle, Location } from '../types';

const mockLocation: Location = {
  latitude: 40.7128,
  longitude: -74.0060,
  address: '123 Main St, New York, NY 10001',
  city: 'New York',
  state: 'NY',
  country: 'USA',
  postalCode: '10001',
};

export const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'Local Coffee Shop Opens New Location in Downtown',
    summary: 'Popular neighborhood coffee shop expanding to serve more customers in the heart of the city.',
    content: 'After months of planning and construction, Blue Mountain Coffee is excited to announce the opening of their second location in downtown Manhattan. The new shop features locally sourced beans, artisanal pastries, and a cozy atmosphere perfect for remote work or catching up with friends.',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop',
    source: 'Local News Network',
    author: 'Sarah Johnson',
    category: 'business',
    tags: ['coffee', 'downtown', 'local business', 'opening'],
    publishedAt: new Date('2024-01-15T10:30:00Z'),
    location: mockLocation,
    distance: 0.5,
    readingTime: 2,
    relevanceScore: 0.8,
    isSponsored: false,
    url: 'https://localnews.com/coffee-shop-opening',
  },
  {
    id: '2',
    title: 'City Council Approves New Park Development',
    summary: 'Historic vote ensures green space preservation and new recreational facilities for families.',
    content: 'In a unanimous decision, the city council approved the development of Riverside Park, a 15-acre green space that will include playgrounds, walking trails, and a community garden. The project is expected to begin construction next spring and will be completed by fall 2024.',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    source: 'City Tribune',
    author: 'Michael Chen',
    category: 'news',
    tags: ['city council', 'park', 'development', 'recreation'],
    publishedAt: new Date('2024-01-15T08:15:00Z'),
    location: { ...mockLocation, latitude: 40.7589, longitude: -73.9851 },
    distance: 1.2,
    readingTime: 3,
    relevanceScore: 0.9,
    isSponsored: false,
    url: 'https://citytribune.com/park-development',
  },
  {
    id: '3',
    title: 'Local High School Wins State Championship',
    summary: 'Jefferson High School basketball team brings home the trophy after intense playoff season.',
    content: 'The Jefferson High School Eagles made history last night by defeating the Lincoln Lions 78-72 in the state championship game. This marks the school first state title in over 20 years and caps off an incredible season for the team.',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop',
    source: 'Sports Weekly',
    author: 'David Rodriguez',
    category: 'sports',
    tags: ['basketball', 'high school', 'championship', 'Jefferson'],
    publishedAt: new Date('2024-01-14T22:45:00Z'),
    location: { ...mockLocation, latitude: 40.7282, longitude: -73.7949 },
    distance: 2.1,
    readingTime: 4,
    relevanceScore: 0.7,
    isSponsored: false,
    url: 'https://sportsweekly.com/jefferson-championship',
  },
  {
    id: '4',
    title: 'Weather Alert: Snow Expected This Weekend',
    summary: 'Meteorologists predict 6-8 inches of snow with potential travel disruptions.',
    content: 'The National Weather Service has issued a winter weather advisory for the metropolitan area, with significant snowfall expected to begin Friday evening and continue through Saturday morning. Residents are advised to prepare for potential travel delays and stock up on essentials.',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    source: 'Weather Channel',
    author: 'Jennifer Williams',
    category: 'weather',
    tags: ['snow', 'weather alert', 'winter', 'travel'],
    publishedAt: new Date('2024-01-15T14:20:00Z'),
    location: mockLocation,
    distance: 0.3,
    readingTime: 2,
    relevanceScore: 0.95,
    isSponsored: false,
    url: 'https://weather.com/snow-alert',
  },
  {
    id: '5',
    title: 'Community Garden Seeks Volunteers',
    summary: 'Local organization looking for green thumbs to help maintain neighborhood garden.',
    content: 'The Riverside Community Garden is actively seeking volunteers to help with spring planting, maintenance, and educational programs. No experience necessary - just bring enthusiasm and a willingness to learn about sustainable gardening practices.',
    imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
    source: 'Community Bulletin',
    author: 'Maria Lopez',
    category: 'news',
    tags: ['community', 'garden', 'volunteers', 'environment'],
    publishedAt: new Date('2024-01-15T09:00:00Z'),
    location: { ...mockLocation, latitude: 40.7505, longitude: -73.9934 },
    distance: 1.8,
    readingTime: 3,
    relevanceScore: 0.6,
    isSponsored: false,
    url: 'https://community.com/garden-volunteers',
  },
  {
    id: '6',
    title: 'New Tech Startup Launches in Innovation District',
    summary: 'AI-powered healthcare platform secures $2M in seed funding.',
    content: 'HealthTech Solutions, a promising startup focused on AI-powered diagnostic tools, has officially launched its operations in the city innovation district. The company recently secured $2 million in seed funding and plans to hire 25 local employees by the end of the year.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    source: 'Tech Daily',
    author: 'Alex Turner',
    category: 'technology',
    tags: ['startup', 'AI', 'healthcare', 'funding'],
    publishedAt: new Date('2024-01-15T11:45:00Z'),
    location: { ...mockLocation, latitude: 40.7400, longitude: -74.0030 },
    distance: 0.8,
    readingTime: 5,
    relevanceScore: 0.7,
    isSponsored: true,
    url: 'https://techdaily.com/healthtech-launch',
  },
  {
    id: '7',
    title: 'Local Restaurant Week Begins Tomorrow',
    summary: 'Over 50 restaurants participate in annual culinary celebration with special menus.',
    content: 'The highly anticipated Restaurant Week kicks off tomorrow, featuring specially curated menus from over 50 local establishments. Diners can enjoy three-course meals at participating restaurants for just $35, showcasing the best of the local culinary scene.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    source: 'Food & Wine',
    author: 'Emily Davis',
    category: 'food',
    tags: ['restaurant week', 'dining', 'local', 'culinary'],
    publishedAt: new Date('2024-01-15T16:30:00Z'),
    location: mockLocation,
    distance: 0.2,
    readingTime: 3,
    relevanceScore: 0.8,
    isSponsored: false,
    url: 'https://foodandwine.com/restaurant-week',
  },
  {
    id: '8',
    title: 'Public Library Expands Digital Services',
    summary: 'New online platform offers virtual events and expanded e-book collection.',
    content: 'The Central Public Library has launched a comprehensive digital platform featuring virtual author readings, online workshops, and access to over 10,000 e-books. The expansion aims to better serve the community during changing times and provide 24/7 access to resources.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    source: 'Library Journal',
    author: 'Robert Kim',
    category: 'education',
    tags: ['library', 'digital', 'e-books', 'virtual events'],
    publishedAt: new Date('2024-01-15T13:15:00Z'),
    location: { ...mockLocation, latitude: 40.7536, longitude: -73.9832 },
    distance: 1.5,
    readingTime: 4,
    relevanceScore: 0.6,
    isSponsored: false,
    url: 'https://libraryjournal.com/digital-expansion',
  },
];

export const getNewsById = (id: string): NewsArticle | undefined => {
  return mockNews.find(article => article.id === id);
};

export const getNewsByCategory = (category: string): NewsArticle[] => {
  return mockNews.filter(article => article.category === category);
};

export const searchNews = (query: string): NewsArticle[] => {
  const searchTerm = query.toLowerCase();
  return mockNews.filter(article => 
    article.title.toLowerCase().includes(searchTerm) ||
    article.summary.toLowerCase().includes(searchTerm) ||
    article.content.toLowerCase().includes(searchTerm) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

export const getRecentNews = (limit: number = 10): NewsArticle[] => {
  return mockNews
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

export const getNewsByDistance = (maxDistance: number = 5): NewsArticle[] => {
  return mockNews.filter(article => article.distance <= maxDistance);
};
