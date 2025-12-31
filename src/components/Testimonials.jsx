import { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Travel Enthusiast',
      photo: '👩‍💼',
      rating: 5,
      text: 'Book Here made my vacation planning so easy! I found the perfect beachfront villa and booked everything from transportation to activities in one place. Highly recommended!',
      location: 'New York, USA'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Professional',
      photo: '👨‍💻',
      rating: 5,
      text: 'As someone who travels frequently for work, Book Here has been a game-changer. The booking process is seamless, and I love how I can manage all my reservations in one app.',
      location: 'Singapore'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Event Planner',
      photo: '👩‍🎨',
      rating: 5,
      text: 'I\'ve used Book Here for multiple corporate events, and it never disappoints. From venues to catering services, everything is just a few taps away. Customer support is exceptional!',
      location: 'Madrid, Spain'
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'Adventure Seeker',
      photo: '👨‍🦰',
      rating: 5,
      text: 'Found the most amazing adventure tours through Book Here! The reviews are genuine, prices are competitive, and the instant confirmations give me peace of mind. Love this app!',
      location: 'Sydney, Australia'
    },
    {
      id: 5,
      name: 'Priya Patel',
      role: 'Digital Nomad',
      photo: '👩‍💻',
      rating: 5,
      text: 'Being a digital nomad means I\'m always booking accommodations and workspaces. Book Here has made my life so much easier with its wide range of options and reliable service.',
      location: 'Mumbai, India'
    },
    {
      id: 6,
      name: 'David Martinez',
      role: 'Food Blogger',
      photo: '👨‍🍳',
      rating: 5,
      text: 'The restaurant booking feature is brilliant! I can reserve tables at top restaurants worldwide and even book private dining experiences. Book Here is my go-to app now.',
      location: 'Paris, France'
    },
    {
      id: 7,
      name: 'Lisa Anderson',
      role: 'Yoga Instructor',
      photo: '👩‍🏫',
      rating: 5,
      text: 'I regularly book wellness retreats and spa services through Book Here. The variety of options is impressive, and the secure payment system makes everything hassle-free.',
      location: 'California, USA'
    },
    {
      id: 8,
      name: 'Alex Thompson',
      role: 'Photographer',
      photo: '👨‍📷',
      rating: 5,
      text: 'As a freelance photographer, I often need to rent equipment and book venues. Book Here has everything I need in one place. The platform is intuitive and reliable.',
      location: 'London, UK'
    }
  ];

  const itemsPerView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex >= maxIndex ? 0 : prevIndex + 1
        );
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, maxIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        viewBox="0 0 24 24"
        fill={index < rating ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="star-icon"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Users Say</h2>
          <p className="testimonials-subtitle">
            Join thousands of satisfied users who trust Book Here for all their booking needs
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="carousel-wrapper">
          {/* Navigation Buttons */}
          <button
            className="carousel-nav prev"
            onClick={prevSlide}
            aria-label="Previous testimonials"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="carousel-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="testimonial-card"
                  style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                >
                  <div className="testimonial-content">
                    {/* Quote Icon */}
                    <div className="quote-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Rating */}
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Review Text */}
                    <p className="testimonial-text">"{testimonial.text}"</p>

                    {/* User Info */}
                    <div className="testimonial-user">
                      <div className="user-photo">{testimonial.photo}</div>
                      <div className="user-details">
                        <h4 className="user-name">{testimonial.name}</h4>
                        <p className="user-role">{testimonial.role}</p>
                        <p className="user-location">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-nav next"
            onClick={nextSlide}
            aria-label="Next testimonials"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="carousel-dots">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">4.9</div>
            <div className="stat-stars">
              {renderStars(5)}
            </div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Happy Reviews</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
