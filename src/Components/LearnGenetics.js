import React, { useState, useEffect, useRef } from 'react';
import './LearnGenetics.css';

// Navbar Component (from Home.js)
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <>
      <nav className={`main-navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-content">
          <div className="nav-logo">
            <div className="logo-circle"></div>
            <span className="logo-brand">Gene Guard</span>
          </div>
          
          <div className="nav-right-section">
            <div className="nav-links">
              <a href="/learn-genetics" className="nav-link">Learn Genetics</a>
              <a href="#disorders" className="nav-link">Genetic Disorders</a>
              <a href="/counseling" className="nav-link">Genetic Counseling</a>
              <a href="#ai" className="nav-link">Genetic Assessment AI</a>
              <a href="/dna" className="nav-link">DNA Testing</a>
              <a href="/about" className="nav-link">About Us</a>
            </div>

            <button 
              className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>

            <div className="profile-container" ref={dropdownRef}>
              <button 
                className={`profile-trigger ${isProfileOpen ? 'active' : ''}`}
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                aria-label="User Profile"
              >
                <svg className="profile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {isProfileOpen && (
                <div className="profile-dropdown">
                  <div className="dropdown-glow"></div>
                  <a href="/signup" className="dropdown-item signup-special">
                     Login
                  </a>
                  <a href="/signup" className="dropdown-item signup-special">
                     Sign Up
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <a href="/learn-genetics" className="nav-link" onClick={handleLinkClick}>Learn Genetics</a>
          <a href="#disorders" className="nav-link" onClick={handleLinkClick}>Genetic Disorders</a>
          <a href="/counseling" className="nav-link" onClick={handleLinkClick}>Genetic Counseling</a>
          <a href="#ai" className="nav-link" onClick={handleLinkClick}>Genetic Assessment AI</a>
          <a href="/dna" className="nav-link" onClick={handleLinkClick}>DNA Testing</a>
          <a href="/about" className="nav-link" onClick={handleLinkClick}>About Us</a>
        </div>
      )}
    </>
  );
};

// Footer Component (from Home.js)
// Footer Component (Updated for premium background effects)
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      {/* Background patterns to match home page */}
      <div className="footer-bg-grid"></div>
      <div className="footer-gradient-orb"></div>
      
      <div className="footer-container">
        {/* Top Section - Logo and Description */}
        <div className="footer-top">
          <div className="footer-brand-section">
            <div className="footer-logo">
              <div className="footer-logo-circle"></div>
              <span className="footer-logo-text">GeneGuard</span>
            </div>
            <p className="footer-tagline">
              Empowering genetic awareness through accessible education, advanced AI assessment, and personalized insights.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="footer-links-grid">
            <div className="footer-column">
              <h3 className="footer-column-title">Platform</h3>
              <ul className="footer-links">
                <li><a href="#learn">Learn Genetics</a></li>
                <li><a href="#disorders">Genetic Disorders</a></li>
                <li><a href="#counseling">Genetic Counseling</a></li>
                <li><a href="#ai">AI Assessment</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">Services</h3>
              <ul className="footer-links">
                <li><a href="#testing">DNA Testing</a></li>
                <li><a href="#reports">Reports & Insights</a></li>
                <li><a href="#consultation">Consultations</a></li>
                <li><a href="#research">Research</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">Company</h3>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">Legal</h3>
              <ul className="footer-links">
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#hipaa">HIPAA Compliance</a></li>
                <li><a href="#cookies">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider Line with Glow */}
        <div className="footer-divider">
          <div className="divider-glow"></div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} GeneGuard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main LearnGenetics Component
const LearnGenetics = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.content-section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Binary to DNA Animation Effect
  useEffect(() => {
    const phrases = [
      "Your DNA, Explained",
      "Understanding Genetics",
      "Decoding Life"
    ];
    
    let currentPhraseIndex = 0;
    let isConverting = false;

    const convertToDNA = async (text) => {
      setIsAnimating(true);
      
      // Phase 1: Show original text
      setDisplayText(text);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Phase 2: Convert to binary
      const binary = text.split('').map(char => 
        char.charCodeAt(0).toString(2).padStart(8, '0')
      ).join(' ');
      
      for (let i = 0; i <= binary.length; i++) {
        setDisplayText(binary.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, 20));
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Phase 3: Convert to DNA sequence
      const dnaLetters = ['A', 'T', 'C', 'G'];
      let dnaSequence = '';
      
      for (let i = 0; i < text.length * 4; i++) {
        dnaSequence += dnaLetters[Math.floor(Math.random() * 4)];
      }
      
      for (let i = 0; i <= dnaSequence.length; i++) {
        setDisplayText(dnaSequence.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, 30));
      }
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Phase 4: Back to original text
      for (let i = dnaSequence.length; i >= 0; i--) {
        setDisplayText(dnaSequence.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, 15));
      }
      
      for (let i = 0; i <= text.length; i++) {
        setDisplayText(text.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsAnimating(false);
    };

    const animationLoop = async () => {
      if (!isConverting) {
        isConverting = true;
        await convertToDNA(phrases[currentPhraseIndex]);
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        isConverting = false;
      }
    };

    // Start animation after initial delay
    const startDelay = setTimeout(() => {
      animationLoop();
      const interval = setInterval(animationLoop, 10000);
      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <div className="learn-genetics-page-wrapper">
      <Navbar />
      
      <div className="learn-genetics-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Learn Genetics</h1>
            <p className="hero-subtitle">
              Discover the fascinating world of genetics through beautiful visuals and clear explanations
            </p>
            
            {/* Binary to DNA Animation */}
            <div className="dna-animation-container">
              <div className={`dna-text-display ${isAnimating ? 'animating' : ''}`}>
                {displayText || 'Your DNA, Explained'}
              </div>
              <div className="dna-animation-label">
                <span className="animation-dot"></span>
                Binary-to-DNA Translation
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections - Alternating Layout */}
        
        {/* Section 1: What is a Gene? - Image Right */}
        <section className="content-section section-image-right">
          <div className="section-container">
            <div className="text-content">
              <div className="content-wrapper">
                <span className="section-label">Fundamentals</span>
                <h2>What is a Gene?</h2>
                <p className="lead-text">
                  A gene is like a recipe book instruction that tells your body how to build and operate. 
                  Just as a recipe tells you how to make a cake, genes tell your cells how to make proteins 
                  that determine everything from your eye color to how tall you'll grow.
                </p>
                <p>
                  Genes are made of DNA (deoxyribonucleic acid), which is a special molecule that looks like 
                  a twisted ladder - scientists call this shape a "double helix." Each gene is a specific 
                  section of this DNA ladder that contains the instructions for making one particular protein.
                </p>
                <div className="highlight-box">
                  <div className="highlight-icon">💡</div>
                  <div>
                    <strong>Did You Know?</strong>
                    <p>Humans have about 20,000-25,000 genes, and each one has a specific job to do in your body!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-content">
              <div className="image-wrapper">
                <img 
                  src="https://geneticeducation.co.in/wp-content/uploads/2019/09/Genetics-Basics-2.001-e1568179792143.jpeg" 
                  alt="Genetics Basics Diagram" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: DNA Structure - Image Left */}
        <section className="content-section section-image-left">
          <div className="section-container">
            <div className="image-content">
              <div className="image-wrapper">
                <img 
                  src="https://nci-media.cancer.gov/pdq/media/images/761781.jpg" 
                  alt="DNA Structure Detailed Diagram" 
                />
              </div>
            </div>
            <div className="text-content">
              <div className="content-wrapper">
                <span className="section-label">Structure</span>
                <h2>Understanding DNA Structure</h2>
                <p className="lead-text">
                  DNA is organized in a precise hierarchical structure, from the tiny nucleotides to 
                  the visible chromosomes that contain all your genetic information.
                </p>
                <div className="feature-list">
                  <div className="feature-item">
                    <div className="feature-icon">🔵</div>
                    <div className="feature-content">
                      <h4>Nucleotides</h4>
                      <p>The basic building blocks of DNA. Each nucleotide consists of a sugar molecule, 
                      a phosphate group, and one of four nitrogen bases: Adenine (A), Thymine (T), 
                      Guanine (G), or Cytosine (C).</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">🧬</div>
                    <div className="feature-content">
                      <h4>Double Helix</h4>
                      <p>Two strands of nucleotides twist around each other like a spiral staircase. 
                      The bases pair up in specific ways: A always pairs with T, and G always pairs with C.</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">📚</div>
                    <div className="feature-content">
                      <h4>Chromosomes</h4>
                      <p>DNA is packaged into structures called chromosomes. Humans have 23 pairs of 
                      chromosomes (46 total) in almost every cell, containing all the genetic instructions 
                      needed to build and maintain your body.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Genes & Chromosomes - Image Right */}
        <section className="content-section section-image-right">
          <div className="section-container">
            <div className="text-content">
              <div className="content-wrapper">
                <span className="section-label">Organization</span>
                <h2>From Genes to Chromosomes</h2>
                <p className="lead-text">
                  Your genetic information is organized in a remarkably efficient way, allowing vast 
                  amounts of data to be stored in the tiny nucleus of each cell.
                </p>
                <p>
                  Think of your genome as a library. The entire library is your genome, each book is a 
                  chromosome, each chapter is a gene, and the words are the DNA sequence made up of the 
                  four nucleotide "letters" (A, T, G, C).
                </p>
                <div className="info-cards">
                  <div className="info-card">
                    <div className="card-number">01</div>
                    <h4>Gene</h4>
                    <p>A specific sequence of DNA that codes for a particular protein or RNA molecule</p>
                  </div>
                  <div className="info-card">
                    <div className="card-number">02</div>
                    <h4>Chromosome</h4>
                    <p>A packaged structure of DNA containing many genes, proteins, and regulatory elements</p>
                  </div>
                  <div className="info-card">
                    <div className="card-number">03</div>
                    <h4>Genome</h4>
                    <p>The complete set of genetic instructions - all 3 billion base pairs of human DNA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-content">
              <div className="image-wrapper">
                <img 
                  src="https://blog.myheritage.com/wp-content/uploads/chapter-3.jpg" 
                  alt="Genes and Chromosomes Illustration" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: How Genes Work - Image Left */}
        <section className="content-section section-image-left">
          <div className="section-container">
            <div className="image-content">
              <div className="image-wrapper">
                <img 
                  src="https://my.clevelandclinic.org/-/scassets/images/org/health/articles/genes" 
                  alt="How Genes Work - DNA to Protein Process" 
                />
              </div>
            </div>
            <div className="text-content">
              <div className="content-wrapper">
                <span className="section-label">Function</span>
                <h2>How Do Genes Work?</h2>
                <p className="lead-text">
                  Genes work through an elegant two-step process that transforms DNA instructions into 
                  functional proteins that do the work in your cells.
                </p>
                <div className="process-flow">
                  <div className="process-step">
                    <div className="step-badge">Step 1</div>
                    <h3>Transcription</h3>
                    <p>
                      The gene's DNA sequence is copied into a messenger molecule called RNA (ribonucleic acid). 
                      This is like making a temporary copy of the recipe to take into the kitchen, protecting 
                      the original in the cookbook (nucleus).
                    </p>
                  </div>
                  <div className="process-arrow">↓</div>
                  <div className="process-step">
                    <div className="step-badge">Step 2</div>
                    <h3>Translation</h3>
                    <p>
                      The RNA message travels to cellular machines called ribosomes, which read the RNA 
                      sequence and assemble amino acids in the correct order to build a specific protein. 
                      This is like following the recipe to actually create the dish.
                    </p>
                  </div>
                </div>
                <div className="callout-box">
                  <p>
                    <strong>The Central Dogma:</strong> DNA → RNA → Protein. This fundamental principle 
                    describes how genetic information flows in biological systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Why Genetics Matters - Full Width */}
        <section className="content-section section-full-width">
          <div className="section-container">
            <div className="text-content centered">
              <div className="content-wrapper">
                <span className="section-label">Impact</span>
                <h2>Why Genetics Matters</h2>
                <p className="lead-text centered-text">
                  Understanding genetics isn't just for scientists - it affects your everyday life in 
                  countless important ways
                </p>
              </div>
            </div>
            <div className="matters-grid">
              <div className="matter-card">
                <div className="matter-icon-img">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8NhX5JfaYDwEiL8eErvnbTBX2wg0DlYDIgQ&s" 
                    alt="Healthcare & Medicine"
                  />
                </div>
                <h3>Healthcare & Medicine</h3>
                <p>
                  Genetic testing helps predict disease risk, guide treatment decisions, and enable 
                  personalized medicine tailored to your unique genetic makeup.
                </p>
              </div>
              <div className="matter-card">
                <div className="matter-icon-img">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHT46XU0tGIN6mqfbwCBVvjPNxAaN6I2R1_g&s" 
                    alt="Family Planning"
                  />
                </div>
                <h3>Family Planning</h3>
                <p>
                  Understanding genetic inheritance patterns helps families make informed decisions and 
                  prepare for potential hereditary conditions.
                </p>
              </div>
              <div className="matter-card">
                <div className="matter-icon-img">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4Ck3_kDIEoQIAxRBvtR8pLoRdlvDkEJ9vU5Ws10U&s" 
                    alt="Personal Traits"
                  />
                </div>
                <h3>Personal Traits</h3>
                <p>
                  Your genes influence physical characteristics, talents, and even how you respond to 
                  medications and environmental factors.
                </p>
              </div>
              <div className="matter-card">
                <div className="matter-icon-img">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCBETrpAldN9NCkD6-C0vW9cFv0QTUnM_Ka8WJC8rq&s" 
                    alt="Agriculture"
                  />
                </div>
                <h3>Agriculture</h3>
                <p>
                  Genetic knowledge helps develop better crops that are more nutritious, disease-resistant, 
                  and sustainable for feeding the world.
                </p>
              </div>
              <div className="matter-card">
                <div className="matter-icon-img">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-dv5q8tqJz0nKdaSJFV4WtvHvEpevpzfla7qoX1Wt3g&s" 
                    alt="Scientific Discovery"
                  />
                </div>
                <h3>Scientific Discovery</h3>
                <p>
                  Genetics research unlocks mysteries about human evolution, biodiversity, and the 
                  fundamental mechanisms of life.
                </p>
              </div>
              <div className="matter-card">
                <div className="matter-icon-img">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-dv5q8tqJz0nKdaSJFV4WtvHvEpevpzfla7qoX1Wt3g&s" 
                    alt="Biotechnology"
                  />
                </div>
                <h3>Biotechnology</h3>
                <p>
                  From developing new medicines to creating biofuels, genetic engineering is solving 
                  some of humanity's biggest challenges.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default LearnGenetics;