import { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [stats, setStats] = useState({
    users: 0,
    bookings: 0,
    cities: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const targetStats = {
      users: 500000,
      bookings: 2000000,
      cities: 150,
      satisfaction: 98
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        users: Math.floor(targetStats.users * progress),
        bookings: Math.floor(targetStats.bookings * progress),
        cities: Math.floor(targetStats.cities * progress),
        satisfaction: Math.floor(targetStats.satisfaction * progress)
      });

      if (currentStep >= steps) {
        setStats(targetStats);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M+';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K+';
    }
    return num;
  };

  const values = [
    {
      icon: '🎯',
      title: 'Innovation First',
      description: 'We constantly push boundaries to deliver cutting-edge booking solutions that make life easier.'
    },
    {
      icon: '🤝',
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We listen, adapt, and improve based on your needs.'
    },
    {
      icon: '🔒',
      title: 'Trust & Security',
      description: 'Your data and transactions are protected with industry-leading security measures.'
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Connecting people worldwide with seamless booking experiences across borders.'
    }
  ];

  const milestones = [
    { year: '2020', title: 'The Beginning', description: 'Book Here was founded with a vision to simplify bookings' },
    { year: '2021', title: 'First Million', description: 'Reached 1 million downloads and expanded to 50 cities' },
    { year: '2022', title: 'Going Global', description: 'Launched in 100+ cities worldwide with multi-language support' },
    { year: '2023', title: 'Innovation Award', description: 'Recognized as the most innovative booking platform' },
    { year: '2024', title: 'Today & Beyond', description: 'Serving 500K+ users with AI-powered recommendations' }
  ];

  return (
    <section id="about" className="about">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-background">
          <div className="hero-circle circle1"></div>
          <div className="hero-circle circle2"></div>
          <div className="hero-circle circle3"></div>
        </div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            About <span className="gradient-text">Book Here</span>
          </h1>
          <p className="about-hero-subtitle">
            Transforming the way people book and experience services worldwide
          </p>
          <div className="scroll-indicator">
            <span>Scroll to explore our story</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        </div>
      </div>

      <div className="about-container">
        {/* Mission Statement */}
        <div className="mission-section">
          <div className="section-badge">Our Mission</div>
          <h2 className="section-title">Empowering Seamless Connections</h2>
          <p className="mission-text">
            At Book Here, we believe that booking anything should be as simple as a tap.
            Our mission is to bridge the gap between people and the services they need,
            creating a world where convenience meets reliability. We're committed to
            providing a platform that's not just a booking tool, but a trusted companion
            for life's moments—big and small.
          </p>
          <div className="mission-highlights">
            <div className="highlight-box">
              <div className="highlight-icon">💡</div>
              <h3>Simplify</h3>
              <p>Make booking effortless</p>
            </div>
            <div className="highlight-box">
              <div className="highlight-icon">🚀</div>
              <h3>Innovate</h3>
              <p>Lead with technology</p>
            </div>
            <div className="highlight-box">
              <div className="highlight-icon">❤️</div>
              <h3>Connect</h3>
              <p>Build lasting relationships</p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="story-section">
          <div className="story-content">
            <div className="story-text">
              <div className="section-badge">Our Story</div>
              <h2 className="section-title">How It All Started</h2>
              <p className="story-paragraph">
                Book Here was born from a simple frustration: booking services was too complicated.
                In 2020, our founders experienced the hassle of juggling multiple platforms, endless
                phone calls, and uncertain availability while trying to plan a simple weekend getaway.
              </p>
              <p className="story-paragraph">
                That moment sparked an idea—what if there was one platform that could handle everything?
                A place where you could book hotels, rent cars, reserve event spaces, and access services
                with complete transparency and trust.
              </p>
              <p className="story-paragraph">
                Today, Book Here has grown from a small startup to a global platform serving hundreds of
                thousands of users. But our core belief remains the same: technology should simplify
                life, not complicate it.
              </p>
              <div className="story-quote">
                <div className="quote-mark">"</div>
                <p className="quote-text">
                  We didn't just build an app. We built a movement to make booking accessible,
                  reliable, and delightful for everyone, everywhere.
                </p>
                <p className="quote-author">— The Book Here Team</p>
              </div>
            </div>
            <div className="story-visual">
              <div className="visual-card card1">
                <div className="card-icon">📱</div>
                <div className="card-label">Mobile First</div>
              </div>
              <div className="visual-card card2">
                <div className="card-icon">🌟</div>
                <div className="card-label">User Centered</div>
              </div>
              <div className="visual-card card3">
                <div className="card-icon">🔄</div>
                <div className="card-label">Always Evolving</div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="values-section">
          <div className="section-badge">Our Values</div>
          <h2 className="section-title">What We Stand For</h2>
          <p className="section-description">
            These core values guide everything we do, from product development to customer support
          </p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        

        {/* Timeline */}
        <div className="timeline-section">
          <div className="section-badge">Our Journey</div>
          <h2 className="section-title">Milestones & Achievements</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <p className="timeline-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="vision-section">
          <div className="vision-content">
            <div className="section-badge">Looking Ahead</div>
            <h2 className="section-title">Our Vision for the Future</h2>
            <p className="vision-text">
              As we look to the future, our vision is clear: to become the world's most trusted
              and comprehensive booking platform. We're investing in AI-powered personalization,
              expanding our global footprint, and building features that anticipate your needs
              before you even know them.
            </p>
            <div className="vision-goals">
              <div className="goal-item">
                <div className="goal-number">2025</div>
                <div className="goal-text">Launch in 200+ cities with AR preview features</div>
              </div>
              <div className="goal-item">
                <div className="goal-number">2026</div>
                <div className="goal-text">Reach 1M users with AI-powered smart recommendations</div>
              </div>
              <div className="goal-item">
                <div className="goal-number">2027</div>
                <div className="goal-text">Carbon-neutral operations and sustainable partnerships</div>
              </div>
            </div>
            <div className="vision-cta">
              <h3>Join Us On This Journey</h3>
              <p>Be part of the future of booking. Download Book Here today.</p>
              <button className="vision-button">
                Get Started Now
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
