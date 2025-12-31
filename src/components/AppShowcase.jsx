import { useState } from 'react';
import './AppShowcase.css';

const AppShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 'browse',
      title: 'Browse & Search',
      description: 'Discover thousands of options with our powerful search engine. Filter by location, price, ratings, and more to find exactly what you need.',
      highlights: [
        'Advanced search filters',
        'Real-time suggestions',
        'Location-based results',
        'Category browsing'
      ],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      emoji: '🔍'
    },
    {
      id: 'book',
      title: 'Book Instantly',
      description: 'Complete your booking in seconds with our streamlined checkout process. Select dates, confirm details, and you\'re all set.',
      highlights: [
        'One-tap booking',
        'Instant confirmation',
        'Calendar integration',
        'Flexible scheduling'
      ],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      emoji: '⚡'
    },
    {
      id: 'manage',
      title: 'Manage Rentals',
      description: 'Keep track of all your bookings in one place. View upcoming reservations, modify details, or cancel with ease.',
      highlights: [
        'Booking history',
        'Easy modifications',
        'Cancellation management',
        'Status tracking'
      ],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      emoji: '📋'
    },
    {
      id: 'checkout',
      title: 'Secure Checkout',
      description: 'Your payments are protected with industry-leading encryption. Choose from multiple payment methods for your convenience.',
      highlights: [
        'Multiple payment options',
        'Bank-level encryption',
        'Saved payment methods',
        'Instant receipts'
      ],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      emoji: '🔒'
    },
    {
      id: 'profile',
      title: 'User Profiles',
      description: 'Personalize your experience with a customizable profile. Manage preferences, view booking history, and track rewards.',
      highlights: [
        'Custom preferences',
        'Booking history',
        'Reward points',
        'Profile customization'
      ],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      emoji: '👤'
    },
    {
      id: 'reviews',
      title: 'Reviews & Ratings',
      description: 'Share your experiences and read authentic reviews from verified users. Help others make informed decisions.',
      highlights: [
        'Verified reviews',
        'Photo uploads',
        'Rating system',
        'Response from hosts'
      ],
      gradient: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
      emoji: '⭐'
    },
    {
      id: 'favorites',
      title: 'Favorites/Wishlist',
      description: 'Save your favorite listings and create wishlists for future bookings. Get notified about price drops and availability.',
      highlights: [
        'Save favorites',
        'Multiple wishlists',
        'Price alerts',
        'Share with friends'
      ],
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      emoji: '❤️'
    },
    {
      id: 'chat',
      title: 'Chat Support',
      description: 'Get instant help with our in-app messaging system. Chat with hosts or contact customer support 24/7.',
      highlights: [
        'Live chat support',
        'Message hosts directly',
        'File sharing',
        'Chat history'
      ],
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      emoji: '💬'
    }
  ];

  return (
    <section className="app-showcase">
      <div className="showcase-container">
        <div className="showcase-header">
          <h2 className="showcase-title">Explore Book Here Features</h2>
          <p className="showcase-subtitle">
            Discover all the powerful features that make booking easier and faster
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="tabs-container">
          <div className="tabs-wrapper">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="tab-emoji">{feature.emoji}</span>
                <span className="tab-text">{feature.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Feature Display */}
        <div className="features-display">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`feature-showcase ${activeTab === index ? 'active' : ''} ${
                index % 2 === 0 ? 'layout-left' : 'layout-right'
              }`}
            >
              <div className="feature-content">
                <div className="content-badge">{feature.emoji}</div>
                <h3 className="content-title">{feature.title}</h3>
                <p className="content-description">{feature.description}</p>
                <ul className="content-highlights">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="highlight-item">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="feature-visual">
                <div className="phone-mockup-showcase">
                  <div className="phone-frame-showcase">
                    <div className="phone-notch-showcase"></div>
                    <div className="phone-screen-showcase" style={{ background: feature.gradient }}>
                      <div className="app-preview-showcase">
                        <div className="preview-header">
                          <div className="preview-time">9:41</div>
                          <div className="preview-icons">
                            <div className="icon-signal"></div>
                            <div className="icon-wifi"></div>
                            <div className="icon-battery"></div>
                          </div>
                        </div>

                        <div className="preview-content">
                          <div className="feature-icon-large" style={{ background: feature.gradient }}>
                            {feature.emoji}
                          </div>
                          <div className="feature-title-preview">{feature.title}</div>

                          {/* Dynamic content based on feature */}
                          {feature.id === 'browse' && (
                            <>
                              <div className="search-preview">
                                <div className="search-input-preview">
                                  🔍 Search locations...
                                </div>
                              </div>
                              <div className="results-preview">
                                <div className="result-card"></div>
                                <div className="result-card"></div>
                                <div className="result-card"></div>
                              </div>
                            </>
                          )}

                          {feature.id === 'book' && (
                            <>
                              <div className="booking-preview">
                                <div className="date-selector">
                                  <div className="date-box">Check-in</div>
                                  <div className="date-box">Check-out</div>
                                </div>
                                <div className="booking-button">Book Now</div>
                              </div>
                            </>
                          )}

                          {feature.id === 'manage' && (
                            <>
                              <div className="bookings-list">
                                <div className="booking-item active">
                                  <div className="booking-dot"></div>
                                  <div className="booking-info">
                                    <div className="booking-name">Luxury Resort</div>
                                    <div className="booking-date">Dec 25-28</div>
                                  </div>
                                </div>
                                <div className="booking-item">
                                  <div className="booking-dot"></div>
                                  <div className="booking-info">
                                    <div className="booking-name">City Apartment</div>
                                    <div className="booking-date">Jan 5-10</div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          {feature.id === 'checkout' && (
                            <>
                              <div className="payment-preview">
                                <div className="payment-method">
                                  <div className="card-icon">💳</div>
                                  <div className="card-info">•••• 4242</div>
                                </div>
                                <div className="payment-amount">$199.00</div>
                                <div className="payment-button">Secure Payment</div>
                              </div>
                            </>
                          )}

                          {feature.id === 'profile' && (
                            <>
                              <div className="profile-preview">
                                <div className="profile-avatar">👤</div>
                                <div className="profile-name">John Doe</div>
                                <div className="profile-stats">
                                  <div className="stat">12 Bookings</div>
                                  <div className="stat">⭐ 4.8</div>
                                </div>
                              </div>
                            </>
                          )}

                          {feature.id === 'reviews' && (
                            <>
                              <div className="reviews-preview">
                                <div className="review-item">
                                  <div className="review-stars">⭐⭐⭐⭐⭐</div>
                                  <div className="review-text">"Amazing experience!"</div>
                                  <div className="review-author">- Sarah M.</div>
                                </div>
                                <div className="review-item">
                                  <div className="review-stars">⭐⭐⭐⭐⭐</div>
                                  <div className="review-text">"Highly recommend!"</div>
                                  <div className="review-author">- Mike R.</div>
                                </div>
                              </div>
                            </>
                          )}

                          {feature.id === 'favorites' && (
                            <>
                              <div className="favorites-preview">
                                <div className="favorite-card">
                                  <div className="heart-icon">❤️</div>
                                  <div className="favorite-name">Beach Villa</div>
                                </div>
                                <div className="favorite-card">
                                  <div className="heart-icon">❤️</div>
                                  <div className="favorite-name">Mountain Cabin</div>
                                </div>
                              </div>
                            </>
                          )}

                          {feature.id === 'chat' && (
                            <>
                              <div className="chat-preview">
                                <div className="chat-message received">
                                  <div className="message-bubble">Hi! How can I help?</div>
                                </div>
                                <div className="chat-message sent">
                                  <div className="message-bubble">I have a question...</div>
                                </div>
                                <div className="chat-input">
                                  Type a message...
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="dots-navigation">
          {features.map((_, index) => (
            <button
              key={index}
              className={`dot ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
