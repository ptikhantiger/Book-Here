import { useState } from 'react';
import './AppShowcase.css';

/* 🔹 UPDATE IMAGE NAMES IF NEEDED */
import browseImg from '../assets/browse.jpg';
import bookImg from '../assets/book.jpg';
import manageImg from '../assets/manage.jpg';
import checkoutImg from '../assets/checkout.jpg';
import profileImg from '../assets/profile.jpg';
import mapImg from '../assets/map.jpg';
import propertyImg from '../assets/property.jpg';
import chatImg from '../assets/chat.jpg';

const AppShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 'browse',
      title: 'Browse & Search',
      description:
        'Discover thousands of options with our powerful search engine. Filter by location, price, ratings, and more.',
      image: browseImg,
      emoji: '🔍'
    },
    {
      id: 'book',
      title: 'Book Instantly',
      description:
        'Complete your booking in seconds with our streamlined checkout process.',
      image: bookImg,
      emoji: '⚡'
    },
    {
      id: 'manage',
      title: 'Manage Rentals',
      description:
        'Keep track of all your bookings in one place with easy management tools.',
      image: manageImg,
      emoji: '📋'
    },
    {
      id: 'checkout',
      title: 'Secure Checkout',
      description:
        'Payments protected with industry-leading encryption.',
      image: checkoutImg,
      emoji: '🔒'
    },
    {
      id: 'profile',
      title: 'User Profiles',
      description:
        'Customize your profile and manage your booking preferences.',
      image: profileImg,
      emoji: '👤'
    },
    {
      id: 'map',
      title: 'Calendar Map View',
      description:
        'View property availability with a calendar-based map interface.',
      image: mapImg,
      emoji: '🗺️'
    },
    {
      id: 'property',
      title: 'Property Details',
      description:
        'Detailed property pages with images, reviews, and booking options.',
      image: propertyImg,
      emoji: '🏠'
    },
    {
      id: 'chat',
      title: 'Chat Support',
      description:
        'Chat instantly with hosts or customer support.',
      image: chatImg,
      emoji: '💬'
    }
  ];

  return (
    <section className="app-showcase">
      <div className="showcase-container">

        {/* Header */}
        <div className="showcase-header">
          <h2 className="showcase-title">Explore Book Here Features</h2>
          <p className="showcase-subtitle">
            Discover all the powerful features that make booking easier
          </p>
        </div>

        {/* Tabs */}
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
              className={`feature-showcase ${activeTab === index ? 'active' : ''}`}
            >
              {/* Text */}
              <div className="feature-content">
                <div className="content-badge">{feature.emoji}</div>
                <h3 className="content-title">{feature.title}</h3>
                <p className="content-description">{feature.description}</p>
              </div>

              {/* Image */}
              <div className="feature-visual">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="feature-image"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="dots-navigation">
          {features.map((_, index) => (
            <button
              key={index}
              className={`dot ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AppShowcase;
