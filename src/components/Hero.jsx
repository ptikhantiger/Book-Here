import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [stats, setStats] = useState({
    downloads: 0,
    users: 0,
    bookings: 0,
    rating: 0
  });

  useEffect(() => {
    const targetStats = {
      downloads: 50000,
      users: 25000,
      bookings: 100000,
      rating: 4.8
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        downloads: Math.floor(targetStats.downloads * progress),
        users: Math.floor(targetStats.users * progress),
        bookings: Math.floor(targetStats.bookings * progress),
        rating: (targetStats.rating * progress).toFixed(1)
      });

      if (currentStep >= steps) {
        setStats(targetStats);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K+';
    }
    return num;
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Book Anything, <br />
              <span className="gradient-text">Anytime, Anywhere</span>
            </h1>
            <p className="hero-subtitle">
              Your all-in-one solution for seamless bookings and rentals.
              From hotels to cars, events to services - book everything
              with just a few taps on your mobile device.
            </p>

            <div className="hero-buttons">
              <button className="download-btn ios-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="btn-text">
                  <span className="btn-label">Download on</span>
                  <span className="btn-store">App Store</span>
                </div>
              </button>

              <button className="download-btn android-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="btn-text">
                  <span className="btn-label">Get it on</span>
                  <span className="btn-store">Google Play</span>
                </div>
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">{formatNumber(stats.downloads)}</div>
                <div className="stat-label">Downloads</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">{formatNumber(stats.users)}</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">{formatNumber(stats.bookings)}</div>
                <div className="stat-label">Bookings Made</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">{stats.rating}</div>
                <div className="stat-label">Rating ⭐</div>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="phone-mockup">
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <div className="app-preview">
                    <div className="app-header">
                      <div className="app-time">9:41</div>
                      <div className="app-icons">
                        <div className="signal-icon"></div>
                        <div className="wifi-icon"></div>
                        <div className="battery-icon"></div>
                      </div>
                    </div>
                    <div className="app-content">
                      <div className="search-bar">
                        <div className="search-icon">🔍</div>
                        <div className="search-text">Search for anything...</div>
                      </div>
                      <div className="category-pills">
                        <div className="pill active">All</div>
                        <div className="pill">Hotels</div>
                        <div className="pill">Cars</div>
                        <div className="pill">Events</div>
                      </div>
                      <div className="featured-card">
                        <div className="card-image"></div>
                        <div className="card-info">
                          <div className="card-title">Luxury Resort</div>
                          <div className="card-price">$199/night</div>
                        </div>
                      </div>
                      <div className="featured-card small">
                        <div className="card-image"></div>
                        <div className="card-info">
                          <div className="card-title">City Tour</div>
                          <div className="card-price">$49/person</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="floating-elements">
                <div className="float-element element1">📅</div>
                <div className="float-element element2">🏨</div>
                <div className="float-element element3">🚗</div>
                <div className="float-element element4">✨</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
