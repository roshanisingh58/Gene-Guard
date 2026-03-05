import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import rosImg from './images/ros.jpeg';
import saksImg from './images/saks.jpeg';
import PandaImg from './images/Panda.jpeg';

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dna-main-footer">
      <div className="dna-footer-container">
        {/* Top Section - Logo and Description */}
        <div className="dna-footer-top">
          <div className="dna-footer-brand-section">
            <div className="dna-footer-logo">
              <div className="dna-footer-logo-circle"></div>
              <span className="dna-footer-logo-text">GeneGuard</span>
            </div>
            <p className="dna-footer-tagline">
              Empowering genetic awareness through accessible education, advanced AI assessment, and personalized insights.
            </p>
            <div className="dna-footer-social">
              <a href="#" className="dna-social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="dna-social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="dna-social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="dna-footer-links-grid">
            <div className="dna-footer-column">
              <h3 className="dna-footer-column-title">Platform</h3>
              <ul className="dna-footer-links">
                <li><Link to="/learn-genetics">Learn Genetics</Link></li>
                <li><Link to="/genetic-disorders">Genetic Disorders</Link></li>
                <li><Link to="/counselling">Genetic Counseling</Link></li>
                <li><Link to="/genetic-assessment">AI Assessment</Link></li>
              </ul>
            </div>

            <div className="dna-footer-column">
              <h3 className="dna-footer-column-title">Services</h3>
              <ul className="dna-footer-links">
                <li><Link to="/dna">DNA Testing</Link></li>
                <li><a href="#reports">Reports & Insights</a></li>
                <li><a href="#consultation">Consultations</a></li>
                <li><a href="#research">Research</a></li>
              </ul>
            </div>

            <div className="dna-footer-column">
              <h3 className="dna-footer-column-title">Company</h3>
              <ul className="dna-footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="dna-footer-column">
              <h3 className="dna-footer-column-title">Legal</h3>
              <ul className="dna-footer-links">
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#hipaa">HIPAA Compliance</a></li>
                <li><a href="#cookies">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider Line with Glow */}
        <div className="dna-footer-divider">
          <div className="dna-divider-glow"></div>
        </div>

        {/* Bottom Section */}
        <div className="dna-footer-bottom">
          <p className="dna-footer-copyright">
            © {currentYear} GeneGuard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 0
  });
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  
  // Navbar states
  const [language, setLanguage] = useState('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle mobile menu body scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const developers = [
    {
      id: 1,
      name: 'Sakshi Choudhari',
      role: 'Full Stack Developer',
      image: saksImg,
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      contact: '+91 98765 43210',
      email: 'sakshichoudhari@gmail.com'
    },
    {
      id: 2,
      name: 'Utkarsha Soni',
      role: 'Frontend Developer',
      image: PandaImg,
      skills: ['React', 'CSS', 'JavaScript', 'UI/UX','HTML','React Native'],
      contact: '+91 98765 43211',
      email: 'utkarshasoni0831@gmail.com'
    },
    {
      id: 3,
      name: 'Roshani Singh',
      role: 'Backend Developer',
      image: rosImg,
      skills: ['Node.js', 'React.js', 'HTML', 'CSS', 'JavaScript'],
      contact: '+91 98765 43212',
      email: 'roshanisinghratan@gmail.com'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      role: 'UI/UX Designer',
      image: rosImg,
      skills: ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop'],
      contact: '+91 98765 43213',
      email: 'sneha.reddy@example.com'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStarClick = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message || formData.rating === 0) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill all fields and provide a rating!'
      });
      return;
    }

    try {
      const response = await fetch('YOUR_BACKEND_API_URL/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your feedback! We appreciate your input.'
        });
        setFormData({
          name: '',
          email: '',
          message: '',
          rating: 0
        });
      } else {
        throw new Error('Failed to submit feedback');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit feedback. Please try again later.'
      });
    }

    setTimeout(() => {
      setSubmitStatus({ type: '', message: '' });
    }, 5000);
  };

  return (
    <div className="about-container">
      {/* Navbar */}
      <nav className={`dna-main-navbar ${isScrolled ? 'dna-navbar-scrolled' : ''}`}>
        <div className="dna-nav-content">
          <div className="dna-nav-logo">
            <div className="dna-logo-circle"></div>
            <span className="dna-logo-brand">Gene Guard</span>
          </div>
          
          <div className="dna-nav-right-section">
            <div className="dna-nav-links">
              <Link to="/learn-genetics" className="dna-nav-link">Learn Genetics</Link>
              <Link to="/genetic-disorders" className="dna-nav-link">Genetic Disorders</Link>
              <Link to="/counselling" className="dna-nav-link">Counselling</Link>
              <Link to="/genetic-assessment" className="dna-nav-link">Genetic Assessment AI</Link>
              <Link to="/dna" className="dna-nav-link">DNA Testing</Link>
              <Link to="/about" className="dna-nav-link active">About Us</Link>
            </div>

            {/* Language Buttons */}
            <div className="dna-language-buttons">
              <button 
                className={`dna-lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
              <button 
                className={`dna-lang-btn ${language === 'hi' ? 'active' : ''}`}
                onClick={() => setLanguage('hi')}
              >
                हिं
              </button>
              <button 
                className={`dna-lang-btn ${language === 'mr' ? 'active' : ''}`}
                onClick={() => setLanguage('mr')}
              >
                मर
              </button>
              <button 
                className={`dna-lang-btn ${language === 'te' ? 'active' : ''}`}
                onClick={() => setLanguage('te')}
              >
                తె
              </button>
            </div>

            <button 
              className={`dna-hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span className="dna-hamburger-line"></span>
              <span className="dna-hamburger-line"></span>
              <span className="dna-hamburger-line"></span>
            </button>

            <div className="dna-profile-container" ref={dropdownRef}>
              <button 
                className={`dna-profile-trigger ${isProfileOpen ? 'active' : ''}`}
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                aria-label="User Profile"
              >
                <svg className="dna-profile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {isProfileOpen && (
                <div className="dna-profile-dropdown">
                  <div className="dna-dropdown-glow"></div>
                  <Link to="/login" className="dna-dropdown-item dna-signup-special">
                    Login
                  </Link>
                  <Link to="/signup" className="dna-dropdown-item dna-signup-special">
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="dna-mobile-menu-overlay">
          <Link to="/learn-genetics" className="dna-nav-link" onClick={handleLinkClick}>Learn Genetics</Link>
          <Link to="/genetic-disorders" className="dna-nav-link" onClick={handleLinkClick}>Genetic Disorders</Link>
          <Link to="/counselling" className="dna-nav-link" onClick={handleLinkClick}>Counselling</Link>
          <Link to="/genetic-assessment" className="dna-nav-link" onClick={handleLinkClick}>Genetic Assessment AI</Link>
          <Link to="/dna" className="dna-nav-link" onClick={handleLinkClick}>DNA Testing</Link>
          <Link to="/about" className="dna-nav-link active" onClick={handleLinkClick}>About Us</Link>
        </div>
      )}

      {/* Hero Section - Background Image Only */}
      <section className="hero-section"></section>

      {/* Introduction Section */}
      <section className="intro-section animate-on-scroll" id="intro">
        <div className={`intro-container ${isVisible.intro ? 'fade-in-up' : ''}`}>
          <p className="intro-text">
           We are a genetics-focused platform dedicated to spreading awareness and understanding of
            genetic diseases and modern genetic science. Our website helps users learn about genetics,
             genetic disorders, DNA testing, and genetic counseling in a simple and reliable way.
              We also explore advanced research,
            GM crops, and AI-based genetic assessment to support informed decision-making. 
            Through educational content, tools, and a social media hub, we aim to connect science with real-life health and research needs
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section animate-on-scroll" id="vision">
        <div className={`content-wrapper ${isVisible.vision ? 'slide-in-left' : ''}`}>
          <div className="image-container">
            <div className="image-glow"></div>
            <img 
              src="https://www.hrinternational.in/assets/img/vision.jpg" 
              alt="Vision" 
              className="section-image"
            />
          </div>
          <div className="text-container">
            <h2 className="section-title">
              <span className="title-gradient">Our Vision</span>
            </h2>
            <p className="section-text">
              Our vision is to build a reliable and inclusive platform for learning and understanding
               genetics. We aim to make information about genetic diseases clear, accurate, and accessible to everyone. We want to reduce fear and misinformation related to genetics through education and awareness. By integrating modern technologies like AI and advanced genetic research, we envision smarter health decisions. We support ethical use of genetic data and responsible scientific progress. Our platform connects genetics with real-world health and agriculture applications. We aspire to encourage curiosity, research, and innovation in genetic science. 
              Ultimately, our vision is to improve quality of life through informed genetic knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section animate-on-scroll" id="mission">
        <div className={`content-wrapper reverse ${isVisible.mission ? 'slide-in-right' : ''}`}>
          <div className="text-container">
            <h2 className="section-title">
              <span className="title-gradient">Our Mission</span>
            </h2>
            <p className="section-text">
             Our mission is to simplify complex genetic concepts for students, patients, and the general public. We provide structured learning on genetics, genetic disorders, and DNA testing. We aim to guide users with information about genetic counseling and assessment tools. Our platform promotes awareness of GM crops and microbes for sustainable development.
            </p>
            <p className="section-text">
              We integrate AI-based genetic assessment to support early understanding and prevention. We offer tools, resources, and research insights in one place. We encourage responsible discussion through our social media hub. Our mission is to educate, empower, and connect people with trustworthy genetic knowledge.
            </p>
          </div>
          <div className="image-container">
            <div className="image-glow"></div>
            <img 
              src="https://www.hrinternational.in/assets/img/mv.webp" 
              alt="Mission" 
              className="section-image"
            />
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="developers-section animate-on-scroll" id="developers">
        <div className={`developers-container ${isVisible.developers ? 'fade-in-up' : ''}`}>
          <h2 className="developers-title">
            <span className="title-gradient">Our Team</span>
          </h2>
          <p className="developers-subtitle">Meet the talented individuals behind our success</p>
          
          <div className="developers-grid">
            {developers.map((dev, index) => (
              <div 
                key={dev.id} 
                className="developer-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="developer-image-wrapper">
                  <img src={dev.image} alt={dev.name} className="developer-image" />
                </div>
                <div className="developer-info">
                  <h3 className="developer-name">{dev.name}</h3>
                  <p className="developer-role">{dev.role}</p>
                  
                  <div className="developer-skills">
                    {dev.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  
                  <div className="developer-contact">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                    <span>{dev.contact}</span>
                  </div>
                  
                  <div className="developer-email">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span>{dev.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="feedback-form-section animate-on-scroll" id="feedback">
        <div className={`feedback-form-container ${isVisible.feedback ? 'fade-in-up' : ''}`}>
          <h2 className="feedback-form-title">Share Your Feedback</h2>
          <p className="feedback-form-subtitle">We'd love to hear from you!</p>
          
          <form className="feedback-form" onSubmit={handleSubmit}>
            {submitStatus.message && (
              <div className={submitStatus.type === 'success' ? 'success-message' : 'error-message'}>
                {submitStatus.message}
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Share your thoughts with us..."
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">Rate Your Experience</label>
              <div className="rating-group">
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`star-btn ${formData.rating >= star ? 'active' : ''}`}
                      onClick={() => handleStarClick(star)}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Submit Feedback
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;