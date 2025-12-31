import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Download & Sign Up',
      description: 'Download the Book Here app from App Store or Google Play. Create your account in seconds with email or social login.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      ),
      color: '#FF6B9D',
      gradient: 'linear-gradient(135deg, #FF6B9D 0%, #FFA07A 100%)'
    },
    {
      number: '02',
      title: 'Browse & Select',
      description: 'Explore thousands of listings with advanced filters. Compare options, read reviews, and choose what fits your needs perfectly.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      ),
      color: '#4DB8E8',
      gradient: 'linear-gradient(135deg, #4DB8E8 0%, #667eea 100%)'
    },
    {
      number: '03',
      title: 'Book & Enjoy',
      description: 'Complete your booking with our secure payment system. Get instant confirmation and enjoy your experience hassle-free.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      color: '#43e97b',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="works-container">
        <div className="works-header">
          <h2 className="works-title">Get Started in 3 Simple Steps</h2>
          <p className="works-subtitle">
            Your journey to seamless booking begins here. Follow these easy steps and start exploring.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-wrapper">
              <div className="step-card" style={{ '--step-color': step.color }}>
                <div className="step-number" style={{ background: step.gradient }}>
                  {step.number}
                </div>

                <div className="step-icon-container">
                  <div className="step-icon" style={{ background: step.gradient }}>
                    {step.icon}
                  </div>
                  <div className="step-glow" style={{ background: step.color }}></div>
                </div>

                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>

                <div className="step-action">
                  <button className="step-button" style={{ background: step.gradient }}>
                    Learn More
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line" style={{ background: step.gradient }}></div>
                  <div className="connector-dot" style={{ background: step.color }}></div>
                  <div className="connector-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress Flow Indicator */}
        <div className="progress-flow">
          <div className="flow-line"></div>
          {steps.map((step, index) => (
            <div key={index} className="flow-dot" style={{ background: step.gradient }}>
              <span>{index + 1}</span>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="works-cta">
          <h3 className="cta-title">Ready to get started?</h3>
          <p className="cta-subtitle">Download the app now and experience the easiest booking platform</p>
          <div className="cta-buttons">
            <button className="cta-btn primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              Download on App Store
            </button>
            <button className="cta-btn secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Google Play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
