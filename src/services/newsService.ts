import { NewsArticle, Location } from '../types';
import { mockNews, getNewsById, getNewsByCategory, searchNews, getRecentNews, getNewsByDistance } from '../mocks/mockNews';

class NewsService {
  private baseUrl = 'http://localhost:3000/api/news';

  async getLocalNews(location: Location, radius: number = 10): Promise<NewsArticle[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // For now, return mock data filtered by distance
    return getNewsByDistance(radius);
  }

  async getArticleById(id: string): Promise<NewsArticle> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const article = getNewsById(id);
    if (!article) {
      throw new Error('Article not found');
    }
    
    return article;
  }

  async searchNews(query: string, location: Location): Promise<NewsArticle[]> {
    await new Promise(resolve => setTimeout(resolve, 600));
    
    return searchNews(query);
  }

  async getNewsByCategory(category: string): Promise<NewsArticle[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    return getNewsByCategory(category);
  }

  async getRecentNews(limit: number = 10): Promise<NewsArticle[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return getRecentNews(limit);
  }

  async getPersonalizedFeed(location: Location, preferences: string[]): Promise<NewsArticle[]> {
    await new Promise(resolve => setTimeout(resolve, 700));
    
    // Filter news based on user preferences
    const filteredNews = mockNews.filter(article => 
      preferences.includes(article.category) || preferences.length === 0
    );
    
    // Sort by relevance score and distance
    return filteredNews.sort((a, b) => {
      const relevanceA = a.relevanceScore * (1 / (a.distance + 1));
      const relevanceB = b.relevanceScore * (1 / (b.distance + 1));
      return relevanceB - relevanceA;
    });
  }

  async getTrendingNews(): Promise<NewsArticle[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return news sorted by relevance score
    return mockNews
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 10);
  }

  async getBreakingNews(): Promise<NewsArticle[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    // Return recent news with high relevance
    const sixHoursAgo = new Date();
    sixHoursAgo.setHours(sixHoursAgo.getHours() - 6);
    
    return mockNews.filter(article => 
      new Date(article.publishedAt) > sixHoursAgo && 
      article.relevanceScore > 0.8
    );
  }

  async getSponsoredContent(): Promise<NewsArticle[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return mockNews.filter(article => article.isSponsored);
  }

  async markAsRead(articleId: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // In a real app, this would update the backend
    console.log(`Marked article ${articleId} as read`);
  }

  async saveArticle(articleId: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // In a real app, this would save to user's reading list
    console.log(`Saved article ${articleId} to reading list`);
  }

  async shareArticle(articleId: string, platform: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // In a real app, this would handle sharing logic
    console.log(`Shared article ${articleId} on ${platform}`);
  }

  async reportArticle(articleId: string, reason: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // In a real app, this would report the article
    console.log(`Reported article ${articleId} for: ${reason}`);
  }

  async getRelatedArticles(articleId: string): Promise<NewsArticle[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const article = getNewsById(articleId);
    if (!article) {
      return [];
    }
    
    // Find articles with similar tags or category
    return mockNews.filter(a => 
      a.id !== articleId && 
      (a.category === article.category || 
       a.tags.some(tag => article.tags.includes(tag)))
    ).slice(0, 5);
  }

  // Real API methods (commented out for now)
  /*
  async getLocalNews(location: Location, radius: number = 10): Promise<NewsArticle[]> {
    try {
      const response = await fetch(`${this.baseUrl}?lat=${location.latitude}&lng=${location.longitude}&radius=${radius}`);
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      const data = await response.json();
      return data.articles;
    } catch (error) {
      console.error('Error fetching local news:', error);
      throw error;
    }
  }

  async getArticleById(id: string): Promise<NewsArticle> {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch article');
      }
      const data = await response.json();
      return data.article;
    } catch (error) {
      console.error('Error fetching article:', error);
      throw error;
    }
  }

  async searchNews(query: string, location: Location): Promise<NewsArticle[]> {
    try {
      const response = await fetch(`${this.baseUrl}/search?q=${encodeURIComponent(query)}&lat=${location.latitude}&lng=${location.longitude}`);
      if (!response.ok) {
        throw new Error('Failed to search news');
      }
      const data = await response.json();
      return data.articles;
    } catch (error) {
      console.error('Error searching news:', error);
      throw error;
    }
  }
  */
}

export default new NewsService();
