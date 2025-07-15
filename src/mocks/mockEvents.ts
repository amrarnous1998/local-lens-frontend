import { LocalEvent, Location } from '../types';

const mockLocation: Location = {
  latitude: 40.7128,
  longitude: -74.0060,
  address: '123 Main St, New York, NY 10001',
  city: 'New York',
  state: 'NY',
  country: 'USA',
  postalCode: '10001',
};

export const mockEvents: LocalEvent[] = [
  {
    id: '1',
    title: 'Weekend Farmers Market',
    description: 'Fresh produce, local crafts, and live music every Saturday morning. Support local farmers and artisans while enjoying the community atmosphere.',
    imageUrl: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=600&fit=crop',
    venue: 'Central Park Plaza',
    location: mockLocation,
    startTime: new Date('2024-01-20T08:00:00Z'),
    endTime: new Date('2024-01-20T14:00:00Z'),
    category: 'food',
    tags: ['farmers market', 'local', 'produce', 'crafts'],
    price: 0,
    currency: 'USD',
    ticketUrl: undefined,
    organizer: 'City Parks Department',
    attendeeCount: 150,
    maxAttendees: 500,
    distance: 0.3,
    source: 'local',
  },
  {
    id: '2',
    title: 'Jazz Night at Blue Moon Cafe',
    description: 'Enjoy an evening of smooth jazz with local musicians. Perfect for a date night or relaxing after work.',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    venue: 'Blue Moon Cafe',
    location: { ...mockLocation, latitude: 40.7300, longitude: -74.0020 },
    startTime: new Date('2024-01-19T19:00:00Z'),
    endTime: new Date('2024-01-19T22:00:00Z'),
    category: 'entertainment',
    tags: ['jazz', 'music', 'nightlife', 'cafe'],
    price: 15,
    currency: 'USD',
    ticketUrl: 'https://bluemooncafe.com/tickets',
    organizer: 'Blue Moon Cafe',
    attendeeCount: 45,
    maxAttendees: 80,
    distance: 0.7,
    source: 'local',
  },
  {
    id: '3',
    title: 'Community Art Exhibition',
    description: 'Local artists showcase their work in various mediums. Opening reception with refreshments and artist meet-and-greet.',
    imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
    venue: 'Downtown Art Gallery',
    location: { ...mockLocation, latitude: 40.7200, longitude: -74.0080 },
    startTime: new Date('2024-01-18T18:00:00Z'),
    endTime: new Date('2024-01-18T21:00:00Z'),
    category: 'entertainment',
    tags: ['art', 'exhibition', 'local artists', 'gallery'],
    price: 0,
    currency: 'USD',
    ticketUrl: undefined,
    organizer: 'Downtown Art Gallery',
    attendeeCount: 75,
    maxAttendees: 120,
    distance: 0.9,
    source: 'local',
  },
  {
    id: '4',
    title: 'Youth Basketball Tournament',
    description: 'Annual tournament for local youth teams. Exciting games and family-friendly atmosphere.',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop',
    venue: 'Community Sports Center',
    location: { ...mockLocation, latitude: 40.7400, longitude: -73.9900 },
    startTime: new Date('2024-01-21T09:00:00Z'),
    endTime: new Date('2024-01-21T17:00:00Z'),
    category: 'sports',
    tags: ['basketball', 'youth', 'tournament', 'sports'],
    price: 5,
    currency: 'USD',
    ticketUrl: 'https://sportscenter.com/tickets',
    organizer: 'Community Sports Center',
    attendeeCount: 200,
    maxAttendees: 400,
    distance: 1.2,
    source: 'local',
  },
  {
    id: '5',
    title: 'Tech Meetup: AI in Healthcare',
    description: 'Monthly tech meetup featuring presentations on artificial intelligence applications in healthcare.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    venue: 'Innovation Hub',
    location: { ...mockLocation, latitude: 40.7500, longitude: -74.0100 },
    startTime: new Date('2024-01-25T18:30:00Z'),
    endTime: new Date('2024-01-25T21:00:00Z'),
    category: 'technology',
    tags: ['tech', 'meetup', 'AI', 'healthcare'],
    price: 0,
    currency: 'USD',
    ticketUrl: 'https://eventbrite.com/tech-meetup',
    organizer: 'Tech Community NYC',
    attendeeCount: 85,
    maxAttendees: 150,
    distance: 1.5,
    source: 'eventbrite',
  },
  {
    id: '6',
    title: 'Cooking Class: Italian Cuisine',
    description: 'Learn to make authentic Italian dishes with a professional chef. All ingredients and equipment provided.',
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    venue: 'Culinary Institute',
    location: { ...mockLocation, latitude: 40.7150, longitude: -74.0150 },
    startTime: new Date('2024-01-22T14:00:00Z'),
    endTime: new Date('2024-01-22T17:00:00Z'),
    category: 'food',
    tags: ['cooking', 'Italian', 'class', 'cuisine'],
    price: 75,
    currency: 'USD',
    ticketUrl: 'https://culinaryinstitute.com/classes',
    organizer: 'Culinary Institute',
    attendeeCount: 12,
    maxAttendees: 20,
    distance: 0.8,
    source: 'local',
  },
  {
    id: '7',
    title: 'Book Club Discussion: Modern Fiction',
    description: 'Monthly book club meeting discussing contemporary literature. New members welcome!',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    venue: 'Central Library',
    location: { ...mockLocation, latitude: 40.7536, longitude: -73.9832 },
    startTime: new Date('2024-01-24T19:00:00Z'),
    endTime: new Date('2024-01-24T20:30:00Z'),
    category: 'education',
    tags: ['book club', 'literature', 'discussion', 'reading'],
    price: 0,
    currency: 'USD',
    ticketUrl: undefined,
    organizer: 'Central Library',
    attendeeCount: 25,
    maxAttendees: 40,
    distance: 1.8,
    source: 'local',
  },
  {
    id: '8',
    title: 'Yoga in the Park',
    description: 'Free outdoor yoga class suitable for all levels. Bring your own mat and enjoy nature.',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    venue: 'Riverside Park',
    location: { ...mockLocation, latitude: 40.7589, longitude: -73.9851 },
    startTime: new Date('2024-01-23T08:00:00Z'),
    endTime: new Date('2024-01-23T09:00:00Z'),
    category: 'health',
    tags: ['yoga', 'outdoor', 'fitness', 'wellness'],
    price: 0,
    currency: 'USD',
    ticketUrl: undefined,
    organizer: 'Parks & Recreation',
    attendeeCount: 30,
    maxAttendees: 50,
    distance: 2.1,
    source: 'local',
  },
  {
    id: '9',
    title: 'Business Networking Breakfast',
    description: 'Monthly networking event for local entrepreneurs and business owners. Light breakfast provided.',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop',
    venue: 'Chamber of Commerce',
    location: { ...mockLocation, latitude: 40.7350, longitude: -74.0050 },
    startTime: new Date('2024-01-26T07:30:00Z'),
    endTime: new Date('2024-01-26T09:00:00Z'),
    category: 'business',
    tags: ['networking', 'business', 'breakfast', 'entrepreneurs'],
    price: 20,
    currency: 'USD',
    ticketUrl: 'https://chamber.com/networking',
    organizer: 'Chamber of Commerce',
    attendeeCount: 40,
    maxAttendees: 80,
    distance: 0.6,
    source: 'eventbrite',
  },
  {
    id: '10',
    title: 'Live Music: Local Band Showcase',
    description: 'Three local bands perform original music. Support the local music scene!',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    venue: 'The Underground',
    location: { ...mockLocation, latitude: 40.7250, longitude: -73.9950 },
    startTime: new Date('2024-01-27T20:00:00Z'),
    endTime: new Date('2024-01-27T23:00:00Z'),
    category: 'entertainment',
    tags: ['music', 'live', 'bands', 'local'],
    price: 12,
    currency: 'USD',
    ticketUrl: 'https://theunderground.com/tickets',
    organizer: 'The Underground',
    attendeeCount: 90,
    maxAttendees: 120,
    distance: 1.3,
    source: 'local',
  },
];

export const getEventById = (id: string): LocalEvent | undefined => {
  return mockEvents.find(event => event.id === id);
};

export const getEventsByCategory = (category: string): LocalEvent[] => {
  return mockEvents.filter(event => event.category === category);
};

export const searchEvents = (query: string): LocalEvent[] => {
  const searchTerm = query.toLowerCase();
  return mockEvents.filter(event => 
    event.title.toLowerCase().includes(searchTerm) ||
    event.description.toLowerCase().includes(searchTerm) ||
    event.venue.toLowerCase().includes(searchTerm) ||
    event.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

export const getUpcomingEvents = (limit: number = 10): LocalEvent[] => {
  const now = new Date();
  return mockEvents
    .filter(event => new Date(event.startTime) > now)
    .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
    .slice(0, limit);
};

export const getEventsByDistance = (maxDistance: number = 5): LocalEvent[] => {
  return mockEvents.filter(event => event.distance <= maxDistance);
};

export const getFreeEvents = (): LocalEvent[] => {
  return mockEvents.filter(event => event.price === 0);
};

export const getEventsByDateRange = (startDate: Date, endDate: Date): LocalEvent[] => {
  return mockEvents.filter(event => {
    const eventDate = new Date(event.startTime);
    return eventDate >= startDate && eventDate <= endDate;
  });
};

export const getTodayEvents = (): LocalEvent[] => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  return getEventsByDateRange(today, tomorrow);
};

export const getThisWeekEvents = (): LocalEvent[] => {
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 7);
  
  return getEventsByDateRange(today, nextWeek);
};
