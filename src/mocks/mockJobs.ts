import { JobListing, Location } from '../types';

const mockLocation: Location = {
  latitude: 40.7128,
  longitude: -74.0060,
  address: '123 Main St, New York, NY 10001',
  city: 'New York',
  state: 'NY',
  country: 'USA',
  postalCode: '10001',
};

export const mockJobs: JobListing[] = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'TechCorp Inc.',
    companyLogo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=100&h=100&fit=crop',
    location: mockLocation,
    description: 'We are seeking a talented Software Engineer to join our growing team. You will be responsible for developing and maintaining web applications using modern technologies.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of experience in software development',
      'Proficiency in JavaScript, React, and Node.js',
      'Experience with databases (PostgreSQL, MongoDB)',
      'Strong problem-solving skills',
      'Excellent communication skills'
    ],
    salary: {
      min: 80000,
      max: 120000,
      currency: 'USD',
      period: 'year'
    },
    employmentType: 'full-time',
    remote: false,
    postedAt: new Date('2024-01-10T09:00:00Z'),
    expiresAt: new Date('2024-02-10T23:59:59Z'),
    applyUrl: 'https://techcorp.com/jobs/software-engineer',
    source: 'LinkedIn',
    distance: 0.8,
    category: 'technology',
    tags: ['software', 'javascript', 'react', 'nodejs', 'full-time']
  },
  {
    id: '2',
    title: 'Marketing Manager',
    company: 'Creative Solutions',
    companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
    location: { ...mockLocation, latitude: 40.7200, longitude: -74.0080 },
    description: 'Join our dynamic marketing team as a Marketing Manager. You will develop and execute marketing strategies to drive brand awareness and customer acquisition.',
    requirements: [
      'Bachelor\'s degree in Marketing or related field',
      '5+ years of marketing experience',
      'Experience with digital marketing channels',
      'Strong analytical and project management skills',
      'Proficiency in marketing tools (Google Analytics, HubSpot)',
      'Creative thinking and leadership abilities'
    ],
    salary: {
      min: 65000,
      max: 85000,
      currency: 'USD',
      period: 'year'
    },
    employmentType: 'full-time',
    remote: true,
    postedAt: new Date('2024-01-12T14:30:00Z'),
    expiresAt: new Date('2024-02-12T23:59:59Z'),
    applyUrl: 'https://creativesolutions.com/careers/marketing-manager',
    source: 'Indeed',
    distance: 0.9,
    category: 'marketing',
    tags: ['marketing', 'digital', 'manager', 'remote', 'full-time']
  },
  {
    id: '3',
    title: 'Barista',
    company: 'Blue Mountain Coffee',
    companyLogo: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=100&h=100&fit=crop',
    location: { ...mockLocation, latitude: 40.7300, longitude: -74.0020 },
    description: 'We are looking for a friendly and skilled Barista to join our team. Previous coffee experience preferred but not required.',
    requirements: [
      'High school diploma or equivalent',
      'Customer service experience preferred',
      'Ability to work in a fast-paced environment',
      'Basic math skills',
      'Flexibility to work various shifts',
      'Passion for coffee and customer service'
    ],
    salary: {
      min: 15,
      max: 18,
      currency: 'USD',
      period: 'hour'
    },
    employmentType: 'part-time',
    remote: false,
    postedAt: new Date('2024-01-14T10:15:00Z'),
    expiresAt: new Date('2024-02-14T23:59:59Z'),
    applyUrl: 'https://bluemountaincoffee.com/jobs/barista',
    source: 'Local',
    distance: 0.7,
    category: 'hospitality',
    tags: ['barista', 'coffee', 'customer-service', 'part-time', 'entry-level']
  },
  {
    id: '4',
    title: 'Data Analyst',
    company: 'Analytics Pro',
    companyLogo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop',
    location: { ...mockLocation, latitude: 40.7400, longitude: -74.0100 },
    description: 'We are seeking a detail-oriented Data Analyst to help us make data-driven decisions. You will analyze complex datasets and provide insights to support business operations.',
    requirements: [
      'Bachelor\'s degree in Statistics, Mathematics, or related field',
      '2+ years of experience in data analysis',
      'Proficiency in SQL, Python, and Excel',
      'Experience with data visualization tools (Tableau, Power BI)',
      'Strong analytical and problem-solving skills',
      'Excellent written and verbal communication'
    ],
    salary: {
      min: 60000,
      max: 80000,
      currency: 'USD',
      period: 'year'
    },
    employmentType: 'full-time',
    remote: false,
    postedAt: new Date('2024-01-13T11:45:00Z'),
    expiresAt: new Date('2024-02-13T23:59:59Z'),
    applyUrl: 'https://analyticspro.com/careers/data-analyst',
    source: 'Glassdoor',
    distance: 1.2,
    category: 'technology',
    tags: ['data', 'analyst', 'sql', 'python', 'full-time']
  },
  {
    id: '5',
    title: 'Registered Nurse',
    company: 'City General Hospital',
    companyLogo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop',
    location: { ...mockLocation, latitude: 40.7500, longitude: -73.9900 },
    description: 'Join our healthcare team as a Registered Nurse. You will provide compassionate patient care in a fast-paced hospital environment.',
    requirements: [
      'Active RN license in the state',
      'Bachelor\'s degree in Nursing (BSN) preferred',
      '1+ years of hospital experience',
      'Strong clinical skills and attention to detail',
      'Excellent communication and teamwork abilities',
      'Commitment to patient safety and quality care'
    ],
    salary: {
      min: 70000,
      max: 90000,
      currency: 'USD',
      period: 'year'
    },
    employmentType: 'full-time',
    remote: false,
    postedAt: new Date('2024-01-11T16:20:00Z'),
    expiresAt: new Date('2024-02-11T23:59:59Z'),
    applyUrl: 'https://citygeneral.com/careers/registered-nurse',
    source: 'Hospital Jobs',
    distance: 1.5,
    category: 'healthcare',
    tags: ['nurse', 'healthcare', 'hospital', 'rn', 'full-time']
  },
  {
    id: '6',
    title: 'Graphic Designer',
    company: 'Design Studio',
    companyLogo: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=100&h=100&fit=crop',
    location: { ...mockLocation, latitude: 40.7350, longitude: -74.0050 },
    description: 'We are looking for a creative Graphic Designer to create visually appealing designs for our clients. You will work on various projects including branding, print, and digital media.',
    requirements: [
      'Bachelor\'s degree in Graphic Design or related field',
      '3+ years of design experience',
      'Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)',
      'Strong portfolio demonstrating design skills',
      'Understanding of typography and color theory',
      'Ability to work under tight deadlines'
    ],
    salary: {
      min: 50000,
      max: 70000,
      currency: 'USD',
      period: 'year'
    },
    employmentType: 'full-time',
    remote: true,
    postedAt: new Date('2024-01-15T08:30:00Z'),
    expiresAt: new Date('2024-02-15T23:59:59Z'),
    applyUrl: 'https://designstudio.com/jobs/graphic-designer',
    source: 'Dribbble',
    distance: 0.6,
    category: 'creative',
    tags: ['design', 'graphic', 'adobe', 'creative', 'remote']
  },
  {
    id: '7',
    title: 'Sales Associate',
    company: 'Retail Plus',
    companyLogo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop',
    location: { ...mockLocation, latitude: 40.7250, longitude: -73.9950 },
    description: 'Join our retail team as a Sales Associate. You will assist customers, maintain store appearance, and help achieve sales goals.',
    requirements: [
      'High school diploma or equivalent',
      'Previous retail experience preferred',
      'Strong customer service skills',
      'Ability to work flexible hours including weekends',
      'Good communication and interpersonal skills',
      'Basic math and cash handling skills'
    ],
    salary: {
      min: 14,
      max: 16,
      currency: 'USD',
      period: 'hour'
    },
    employmentType: 'part-time',
    remote: false,
    postedAt: new Date('2024-01-14T12:00:00Z'),
    expiresAt: new Date('2024-02-14T23:59:59Z'),
    applyUrl: 'https://retailplus.com/careers/sales-associate',
    source: 'Indeed',
    distance: 1.3,
    category: 'retail',
    tags: ['sales', 'retail', 'customer-service', 'part-time', 'entry-level']
  },
  {
    id: '8',
    title: 'Project Manager',
    company: 'Construction Co.',
    companyLogo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=100&h=100&fit=crop',
    location: { ...mockLocation, latitude: 40.7150, longitude: -74.0150 },
    description: 'We are seeking an experienced Project Manager to oversee construction projects from start to finish. You will coordinate with various stakeholders and ensure project completion on time and within budget.',
    requirements: [
      'Bachelor\'s degree in Construction Management or related field',
      '5+ years of project management experience',
      'PMP certification preferred',
      'Strong organizational and leadership skills',
      'Knowledge of construction processes and regulations',
      'Excellent problem-solving abilities'
    ],
    salary: {
      min: 75000,
      max: 95000,
      currency: 'USD',
      period: 'year'
    },
    employmentType: 'full-time',
    remote: false,
    postedAt: new Date('2024-01-09T13:45:00Z'),
    expiresAt: new Date('2024-02-09T23:59:59Z'),
    applyUrl: 'https://constructionco.com/jobs/project-manager',
    source: 'Construction Jobs',
    distance: 0.8,
    category: 'construction',
    tags: ['project-manager', 'construction', 'pmp', 'management', 'full-time']
  },
];

export const getJobById = (id: string): JobListing | undefined => {
  return mockJobs.find(job => job.id === id);
};

export const getJobsByCategory = (category: string): JobListing[] => {
  return mockJobs.filter(job => job.category === category);
};

export const searchJobs = (query: string): JobListing[] => {
  const searchTerm = query.toLowerCase();
  return mockJobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm) ||
    job.company.toLowerCase().includes(searchTerm) ||
    job.description.toLowerCase().includes(searchTerm) ||
    job.requirements.some(req => req.toLowerCase().includes(searchTerm)) ||
    job.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

export const getJobsByDistance = (maxDistance: number = 5): JobListing[] => {
  return mockJobs.filter(job => job.distance <= maxDistance);
};

export const getJobsByEmploymentType = (employmentType: string): JobListing[] => {
  return mockJobs.filter(job => job.employmentType === employmentType);
};

export const getRemoteJobs = (): JobListing[] => {
  return mockJobs.filter(job => job.remote === true);
};

export const getRecentJobs = (limit: number = 10): JobListing[] => {
  return mockJobs
    .sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime())
    .slice(0, limit);
};

export const getJobsBySalaryRange = (minSalary: number, maxSalary: number): JobListing[] => {
  return mockJobs.filter(job => {
    if (!job.salary) return false;
    
    // Convert all salaries to yearly for comparison
    let yearlyMin = job.salary.min;
    let yearlyMax = job.salary.max;
    
    if (job.salary.period === 'hour') {
      yearlyMin *= 40 * 52; // 40 hours/week, 52 weeks/year
      yearlyMax *= 40 * 52;
    } else if (job.salary.period === 'month') {
      yearlyMin *= 12;
      yearlyMax *= 12;
    } else if (job.salary.period === 'day') {
      yearlyMin *= 5 * 52; // 5 days/week, 52 weeks/year
      yearlyMax *= 5 * 52;
    }
    
    return yearlyMin >= minSalary && yearlyMax <= maxSalary;
  });
};

export const getJobsBySource = (source: string): JobListing[] => {
  return mockJobs.filter(job => job.source.toLowerCase() === source.toLowerCase());
};

export const getExpiringJobs = (daysFromNow: number = 7): JobListing[] => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + daysFromNow);
  
  return mockJobs.filter(job => {
    if (!job.expiresAt) return false;
    return new Date(job.expiresAt) <= targetDate;
  });
};

export const getJobCategories = (): string[] => {
  return Array.from(new Set(mockJobs.map(job => job.category)));
};

export const getJobSources = (): string[] => {
  return Array.from(new Set(mockJobs.map(job => job.source)));
};

export const getEmploymentTypes = (): string[] => {
  return Array.from(new Set(mockJobs.map(job => job.employmentType)));
};

export const formatSalary = (job: JobListing): string => {
  if (!job.salary) return 'Salary not disclosed';
  
  const { min, max, currency, period } = job.salary;
  const currencySymbol = currency === 'USD' ? '$' : currency;
  
  if (min === max) {
    return `${currencySymbol}${min.toLocaleString()}/${period}`;
  }
  
  return `${currencySymbol}${min.toLocaleString()} - ${currencySymbol}${max.toLocaleString()}/${period}`;
};

export const getJobsPostedToday = (): JobListing[] => {
  const today = new Date();
  const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  
  return mockJobs.filter(job => new Date(job.postedAt) >= startOfDay);
};

export const getJobsPostedThisWeek = (): JobListing[] => {
  const today = new Date();
  const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
  
  return mockJobs.filter(job => new Date(job.postedAt) >= startOfWeek);
};
