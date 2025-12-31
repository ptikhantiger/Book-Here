import { useState } from 'react';
import './Services.css';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const services = [
    {
      id: 'accommodations',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: 'Accommodations',
      description: 'Book hotels, apartments, vacation rentals, and unique stays. From budget to luxury.',
      items: ['Hotels & Resorts', 'Apartments & Condos', 'Vacation Homes', 'Hostels & B&Bs'],
      color: '#FF6B9D',
      gradient: 'linear-gradient(135deg, #FF6B9D 0%, #FFA07A 100%)'
    },
    {
      id: 'venues',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3h18v18H3V3z" />
          <path d="M8 10h8" />
          <path d="M8 14h8" />
          <path d="M3 3l18 18" />
        </svg>
      ),
      title: 'Venues & Spaces',
      description: 'Reserve event spaces, meeting rooms, and party venues for any occasion.',
      items: ['Event Halls', 'Meeting Rooms', 'Party Venues', 'Conference Centers'],
      color: '#4DB8E8',
      gradient: 'linear-gradient(135deg, #4DB8E8 0%, #667eea 100%)'
    },
    {
      id: 'equipment',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1" />
        </svg>
      ),
      title: 'Equipment Rentals',
      description: 'Rent cars, bikes, tools, and equipment for work or leisure at competitive rates.',
      items: ['Cars & Vehicles', 'Bikes & Scooters', 'Tools & Machinery', 'Sports Equipment'],
      color: '#43e97b',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 'services',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Professional Services',
      description: 'Hire photographers, caterers, tour guides, and other skilled professionals.',
      items: ['Photographers', 'Caterers & Chefs', 'Tour Guides', 'Event Planners'],
      color: '#f093fb',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 'experiences',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      title: 'Experiences & Activities',
      description: 'Discover tours, classes, adventures, and unique activities in your destination.',
      items: ['City Tours', 'Adventure Activities', 'Workshops & Classes', 'Cultural Experiences'],
      color: '#fccb90',
      gradient: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)'
    },
    {
      id: 'transport',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16.5 17.5l-8-8M8 17.5l8-8" />
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M6 6V4" />
          <path d="M10 6V4" />
          <path d="M14 6V4" />
          <path d="M18 6V4" />
        </svg>
      ),
      title: 'Transportation',
      description: 'Book airport transfers, private drivers, shuttle services, and more.',
      items: ['Airport Transfers', 'Private Drivers', 'Shuttle Services', 'Ride Sharing'],
      color: '#a8edea',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      id: 'wellness',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      title: 'Wellness & Spa',
      description: 'Reserve spa treatments, yoga classes, fitness sessions, and wellness retreats.',
      items: ['Spa & Massage', 'Yoga & Meditation', 'Fitness Classes', 'Wellness Retreats'],
      color: '#fa709a',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 'dining',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
      title: 'Dining & Restaurants',
      description: 'Reserve tables at top restaurants, book private chefs, or order catering services.',
      items: ['Restaurant Bookings', 'Private Chefs', 'Food Tours', 'Catering Services'],
      color: '#ff9a9e',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <h2 className="services-title">What You Can Book</h2>
          <p className="services-subtitle">
            From accommodations to experiences, book everything you need in one place
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${activeCategory === service.id ? 'active' : ''}`}
              style={{ '--service-color': service.color, animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveCategory(service.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="service-card-inner">
                {/* Icon Container */}
                <div className="service-icon-wrapper">
                  <div className="service-icon" style={{ background: service.gradient }}>
                    {service.icon}
                  </div>
                  <div className="icon-glow" style={{ background: service.color }}></div>
                </div>

                {/* Content */}
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>

                  {/* Service Items List */}
                  <ul className="service-items">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="service-item">
                        <svg viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Link */}
                <div className="service-action">
                  <a href={`#${service.id}`} className="learn-more-link" style={{ color: service.color }}>
                    Learn More
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>

                {/* Decorative Elements */}
                <div className="card-decoration" style={{ background: service.gradient }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-cta">
          <div className="cta-content">
            <h3 className="cta-title">Can't Find What You're Looking For?</h3>
            <p className="cta-text">
              We're constantly adding new categories and services. Suggest a category or contact our support team.
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary">
                Suggest a Service
              </button>
              <button className="cta-button secondary">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
