import './DownloadCTA.css';

const DownloadCTA = () => {
  return (
    <section id="download" className="download-cta">
      {/* Geometric Background Elements */}
      <div className="geometric-background">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
        <div className="shape shape5"></div>
        <div className="floating-circle circle1"></div>
        <div className="floating-circle circle2"></div>
        <div className="floating-circle circle3"></div>
      </div>

      <div className="download-container">
        <div className="download-content">
          {/* Text Content */}
          <div className="download-text">
            <div className="text-badge">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span>#1 Booking App</span>
            </div>

            <h2 className="download-headline">
              Ready to Start <br />
              <span className="gradient-text">Booking?</span>
            </h2>

            <p className="download-subtext">
              Download Book Here today and unlock seamless bookings, exclusive deals,
              and a world of possibilities at your fingertips.
            </p>

            {/* Features List */}
            <ul className="download-features">
              <li>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free to download and use
              </li>
              <li>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Available on iOS and Android
              </li>
              <li>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Instant booking confirmations
              </li>
            </ul>

            {/* App Store Buttons */}
            <div className="download-buttons">
              <a href="#app-store" className="store-button apple">
                <div className="button-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                </div>
                <div className="button-text">
                  <span className="button-label">Download on the</span>
                  <span className="button-store">App Store</span>
                </div>
              </a>

              <a href="#google-play" className="store-button google">
                <div className="button-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <div className="button-text">
                  <span className="button-label">Get it on</span>
                  <span className="button-store">Google Play</span>
                </div>
              </a>
            </div>

            {/* QR Code Section */}
           
          </div>

          {/* Phone Mockup */}
          <div className="download-visual">
            <div className="phone-container">
              <div className="phone-mockup-download">
                <div className="phone-frame-download">
                  <div className="phone-notch-download"></div>
                  <div className="phone-screen-download">
                    {/* App Preview */}
                    <div className="app-interface">
                      {/* Status Bar */}
                      <div className="status-bar">
                        <span className="time">9:41</span>
                        <div className="status-icons">
                          <div className="signal"></div>
                          <div className="wifi"></div>
                          <div className="battery"></div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="app-header-download">
                        <div className="logo-icon">📱</div>
                        <h3>Book Here</h3>
                      </div>

                      {/* Search Bar */}
                      <div className="search-bar-download">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8"/>
                          <path d="m21 21-4.35-4.35"/>
                        </svg>
                        <span>Where do you want to go?</span>
                      </div>

                      {/* Categories */}
                      <div className="categories-download">
                        <div className="category-pill active">🏨 Hotels</div>
                        <div className="category-pill">🚗 Cars</div>
                        <div className="category-pill">✈️ Flights</div>
                      </div>

                      {/* Featured Cards */}
                      <div className="featured-cards">
                        <div className="feature-card-download card-1">
                          <div className="card-badge">Top Rated</div>
                          <h4>Luxury Resort</h4>
                          <p>$299/night</p>
                          <div className="card-rating">⭐ 4.9</div>
                        </div>
                        <div className="feature-card-download card-2">
                          <div className="card-badge">Special Offer</div>
                          <h4>Beach Villa</h4>
                          <p>$199/night</p>
                          <div className="card-rating">⭐ 4.8</div>
                        </div>
                      </div>

                      {/* Bottom Nav */}
                      <div className="bottom-nav">
                        <div className="nav-item active">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                          </svg>
                        </div>
                        <div className="nav-item">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="11" cy="11" r="8"/>
                          </svg>
                        </div>
                        <div className="nav-item">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                        </div>
                        <div className="nav-item">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="floating-badges">
                  <div className="badge badge-1">
                    <span className="badge-icon">✓</span>
                    <span className="badge-text">Verified</span>
                  </div>
                  <div className="badge badge-2">
                    <span className="badge-icon">🔒</span>
                    <span className="badge-text">Secure</span>
                  </div>
                  <div className="badge badge-3">
                    <span className="badge-icon">⚡</span>
                    <span className="badge-text">Fast</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
