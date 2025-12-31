import { useEffect, useState } from 'react';
import './PageLoader.css';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    // Hide loader after animation completes
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="page-loader">
      <div className="loader-content">
        {/* Animated Logo */}
        <div className="loader-logo">
          <div className="logo-circle">
            <div className="logo-icon">📱</div>
          </div>
          <div className="logo-rings">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="loader-brand">Book Here</h1>
        <p className="loader-tagline">Loading your experience...</p>

        {/* Progress Bar */}
        <div className="loader-progress">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="loader-percentage">{progress}%</div>
      </div>
    </div>
  );
};

export default PageLoader;
