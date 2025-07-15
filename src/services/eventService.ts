import { LocalEvent, Location } from '../types';
import { 
  mockEvents, 
  getEventById, 
  getEventsByCategory, 
  searchEvents, 
  getUpcomingEvents, 
  getEventsByDistance,
  getFreeEvents,
  getEventsByDateRange,
  getTodayEvents,
  getThisWeekEvents
} from '../mocks/mockEvents';

class EventService {
  private baseUrl = 'http://localhost:3000/api/events';

  async getLocalEvents(location: Location, radius: number = 10): Promise<LocalEvent[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // For now, return mock data filtered by distance
    return getEventsByDistance(radius);
  }

  async getEventById(id: string): Promise<LocalEvent> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const event = getEventById(id);
    if (!event) {
      throw new Error('Event not found');
    }
    
    return event;
  }

  async searchEvents(query: string, location: Location): Promise<LocalEvent[]> {
    await new Promise(resolve => setTimeout(resolve, 600));
    
    return searchEvents(query);
  }

  async getEventsByCategory(category: string): Promise<LocalEvent[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    return getEventsByCategory(category);
  }

  async getUpcomingEvents(limit: number = 10): Promise<LocalEvent[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return getUpcomingEvents(limit);
  }

  async getFreeEvents(): Promise<LocalEvent[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    return getFreeEvents();
  }

  async getTodayEvents(): Promise<LocalEvent[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return getTodayEvents();
  }

  async getThisWeekEvents(): Promise<LocalEvent[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    return getThisWeekEvents();
  }

  async getEventsByDateRange(startDate: Date, endDate: Date): Promise<LocalEvent[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return getEventsByDateRange(startDate, endDate);
  }

  async getPersonalizedEvents(location: Location, preferences: string[]): Promise<LocalEvent[]> {
    await new Promise(resolve => setTimeout(resolve, 700));
    
    // Filter events based on user preferences
    const filteredEvents = mockEvents.filter(event => 
      preferences.includes(event.category) || preferences.length === 0
    );
    
    // Sort by date and distance
    return filteredEvents.sort((a, b) => {
      const dateA = new Date(a.startTime).getTime();
      const dateB = new Date(b.startTime).getTime();
      
      if (dateA === dateB) {
        return a.distance - b.distance;
      }
      
      return dateA - dateB;
    });
  }

  async getPopularEvents(): Promise<LocalEvent[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Sort by attendee count
    return mockEvents
      .filter(event => event.attendeeCount !== undefined)
      .sort((a, b) => (b.attendeeCount || 0) - (a.attendeeCount || 0))
      .slice(0, 10);
  }

  async getEventsByOrganizer(organizer: string): Promise<LocalEvent[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    return mockEvents.filter(event => 
      event.organizer.toLowerCase().includes(organizer.toLowerCase())
    );
  }

  async getEventsByVenue(venue: string): Promise<LocalEvent[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    return mockEvents.filter(event => 
      event.venue.toLowerCase().includes(venue.toLowerCase())
    );
  }

  async getEventsByPriceRange(minPrice: number, maxPrice: number): Promise<LocalEvent[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    return mockEvents.filter(event => {
      const price = event.price || 0;
      return price >= minPrice && price <= maxPrice;
    });
  }

  async registerForEvent(eventId: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In a real app, this would register the user for the event
    console.log(`Registered for event ${eventId}`);
  }

  async addToCalendar(eventId: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // In a real app, this would add the event to user's calendar
    console.log(`Added event ${eventId} to calendar`);
  }

  async shareEvent(eventId: string, platform: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // In a real app, this would handle sharing logic
    console.log(`Shared event ${eventId} on ${platform}`);
  }

  async reportEvent(eventId: string, reason: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // In a real app, this would report the event
    console.log(`Reported event ${eventId} for: ${reason}`);
  }

  async getRelatedEvents(eventId: string): Promise<LocalEvent[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const event = getEventById(eventId);
    if (!event) {
      return [];
    }
    
    // Find events with similar tags or category
    return mockEvents.filter(e => 
      e.id !== eventId && 
      (e.category === event.category || 
       e.tags.some(tag => event.tags.includes(tag)) ||
       e.venue === event.venue)
    ).slice(0, 5);
  }

  async getEventReminders(eventId: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // In a real app, this would set up reminders
    console.log(`Set up reminders for event ${eventId}`);
  }

  async getEventAttendees(eventId: string): Promise<any[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // In a real app, this would return attendee information
    return [];
  }

  async checkEventAvailability(eventId: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const event = getEventById(eventId);
    if (!event) {
      return false;
    }
    
    // Check if event is full
    return !event.maxAttendees || (event.attendeeCount || 0) < event.maxAttendees;
  }

  async getEventsBySource(source: string): Promise<LocalEvent[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    return mockEvents.filter(event => event.source === source);
  }

  // Real API methods (commented out for now)
  /*
  async getLocalEvents(location: Location, radius: number = 10): Promise<LocalEvent[]> {
    try {
      const response = await fetch(`${this.baseUrl}?lat=${location.latitude}&lng=${location.longitude}&radius=${radius}`);
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.json();
      return data.events;
    } catch (error) {
      console.error('Error fetching local events:', error);
      throw error;
    }
  }

  async getEventById(id: string): Promise<LocalEvent> {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch event');
      }
      const data = await response.json();
      return data.event;
    } catch (error) {
      console.error('Error fetching event:', error);
      throw error;
    }
  }

  async searchEvents(query: string, location: Location): Promise<LocalEvent[]> {
    try {
      const response = await fetch(`${this.baseUrl}/search?q=${encodeURIComponent(query)}&lat=${location.latitude}&lng=${location.longitude}`);
      if (!response.ok) {
        throw new Error('Failed to search events');
      }
      const data = await response.json();
      return data.events;
    } catch (error) {
      console.error('Error searching events:', error);
      throw error;
    }
  }
  */
}

export default new EventService();
