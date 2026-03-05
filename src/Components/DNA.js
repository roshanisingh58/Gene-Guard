import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './DNA.css';

// Footer Component (from Home.js)
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

const DNA = () => {
  const [activeTab, setActiveTab] = useState('medical');
  const [expandedFaq, setExpandedFaq] = useState(null);
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

  const testingTypes = {
    medical: {
      title: 'Medical Predictions',
      icon: '🏥',
      description: 'Discover potential health risks and make informed decisions about your healthcare',
      tests: [
        {
          name: 'Cancer Risk Screening',
          details: 'Identifies genetic mutations linked to breast, ovarian, colorectal, and other cancers',
          genes: 'BRCA1, BRCA2, TP53, MLH1',
          benefits: ['Early detection', 'Preventive measures', 'Family planning']
        },
        {
          name: 'Cardiovascular Health',
          details: 'Assesses genetic predisposition to heart disease, hypertension, and stroke',
          genes: 'APOE, PCSK9, LDLR',
          benefits: ['Lifestyle modifications', 'Medication planning', 'Risk monitoring']
        },
        {
          name: 'Pharmacogenomics',
          details: 'Determines how your genes affect your response to medications',
          genes: 'CYP2D6, CYP2C19, TPMT',
          benefits: ['Personalized dosing', 'Avoid adverse reactions', 'Optimal drug selection']
        },
        {
          name: 'Metabolic Disorders',
          details: 'Screens for genetic conditions affecting metabolism and nutrient processing',
          genes: 'HFE, G6PD, MTHFR',
          benefits: ['Dietary adjustments', 'Supplement guidance', 'Condition management']
        }
      ]
    },
    genealogical: {
      title: 'Genealogical Studies',
      icon: '🌍',
      description: 'Trace your ancestry and discover your genetic heritage across the globe',
      tests: [
        {
          name: 'Ethnic Origins',
          details: 'Breakdown of your ancestral origins across different regions and populations',
          genes: 'Autosomal DNA markers',
          benefits: ['Cultural connection', 'Heritage discovery', 'Family history']
        },
        {
          name: 'DNA Matching',
          details: 'Connect with genetic relatives and build your family tree',
          genes: 'Shared DNA segments',
          benefits: ['Find relatives', 'Confirm relationships', 'Expand family tree']
        },
        {
          name: 'Haplogroup Analysis',
          details: 'Trace maternal and paternal lineages through deep ancestral history',
          genes: 'mtDNA, Y-DNA',
          benefits: ['Ancient origins', 'Migration patterns', 'Historical context']
        },
        {
          name: 'Traits & Characteristics',
          details: 'Discover genetic traits inherited from your ancestors',
          genes: 'Various trait markers',
          benefits: ['Physical traits', 'Taste preferences', 'Ancestry insights']
        }
      ]
    }
  };

  const procedures = [
    {
      step: 1,
      title: 'Order Your Kit',
      description: 'Select the type of DNA test that matches your goals. The kit will be delivered to your home with all necessary materials.',
      icon: '📦',
      details: ['Choose test type', 'Provide shipping info', 'Receive kit in 3-5 days']
    },
    {
      step: 2,
      title: 'Collect Sample',
      description: 'Follow the simple instructions to collect your DNA sample using the provided saliva collection tube or cheek swab.',
      icon: '🧪',
      details: ['Read instructions', 'Collect saliva/swab', 'Seal sample tube']
    },
    {
      step: 3,
      title: 'Mail Sample',
      description: 'Use the prepaid shipping label to send your sample to the laboratory for analysis. Track your kit online.',
      icon: '📮',
      details: ['Activate kit online', 'Place in return bag', 'Drop at post office']
    },
    {
      step: 4,
      title: 'Lab Analysis',
      description: 'Your DNA is extracted and analyzed using advanced sequencing technology. The process typically takes 3-6 weeks.',
      icon: '🔬',
      details: ['DNA extraction', 'Genetic sequencing', 'Quality control']
    },
    {
      step: 5,
      title: 'Receive Results',
      description: 'Get comprehensive results through a secure online portal with detailed reports and personalized insights.',
      icon: '📊',
      details: ['Online dashboard', 'Detailed reports', 'Expert consultation']
    }
  ];

  const ethicalConsiderations = [
    {
      category: 'Privacy & Data Security',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/005/419/403/small/data-protection-personal-data-security-concept-on-virtual-screen-protected-folder-icon-cyber-security-internet-privacy-and-safety-wireframe-hand-touching-digital-interface-illustration-vector.jpg',
      concerns: [
        'How is your genetic data stored and protected?',
        'Who has access to your DNA information?',
        'Can your data be used for research without consent?',
        'What happens to your sample after testing?'
      ],
      protections: [
        'Encryption and secure servers',
        'Opt-in research participation',
        'Right to delete data',
        'HIPAA compliance for medical tests'
      ]
    },
    {
      category: 'Discrimination Risks',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4WU7Of7-8Gxp94ZMbE-pTLggicl7utAm5Mfi4od-OBNkmOUiXDyScF7wxDxzlg0VNUo54St-7D7G4UIOO8lzXulz_qAeP0jEPADVYjWJTLoO_EAKZHX4Rjo9Up5nlJjNmF7Er4XVsJ-Nj9ORdMXZjkrT9ATze14X7GBqEWF1s6xxf7Au1Qu2Xb2G7W9s/w640-h438/2151998174.jpg',
      concerns: [
        'Can employers access your genetic information?',
        'Will insurance companies use your results?',
        'Could results affect life or disability insurance?',
        'Are there legal protections in place?'
      ],
      protections: [
        'GINA prevents genetic discrimination in employment and health insurance',
        'State laws vary for life insurance',
        'Don\'t share results with insurers unless required',
        'Consult genetic counselor before testing'
      ]
    },
    {
      category: 'Family Implications',
      image: 'https://img.freepik.com/free-photo/family-home_23-2148166850.jpg',
      concerns: [
        'Should you tell family members about genetic risks?',
        'What if you discover unexpected relatives?',
        'How might results affect family relationships?',
        'Are children\'s genetic tests ethical?'
      ],
      protections: [
        'Genetic counseling services available',
        'Consider family impact before testing',
        'Age-appropriate testing guidelines',
        'Support for unexpected findings'
      ]
    },
    {
      category: 'Psychological Impact',
      image: 'https://media.licdn.com/dms/image/v2/C4D12AQFprtBMwSsGDQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1590110680056?e=2147483647&v=beta&t=D0ufNFcbqM6X2JrCGTZoSRbqn_WlSaaUtXNkddhFvvI',
      concerns: [
        'How will you handle unexpected health risks?',
        'Can you cope with uncertain predictions?',
        'What if results cause anxiety or distress?',
        'Are you prepared for life-changing information?'
      ],
      protections: [
        'Pre-test counseling recommended',
        'Mental health support available',
        'Understand limitations of testing',
        'Results don\'t determine destiny'
      ]
    }
  ];

  const impacts = [
    {
      title: 'Improved Healthcare Decisions',
      icon: '🏥',
      description: 'Make proactive choices based on your genetic predispositions',
      benefits: [
        'Early screening and detection',
        'Personalized treatment plans',
        'Preventive lifestyle changes',
        'Informed medication choices',
        'Reduced healthcare costs',
        'Better health outcomes'
      ]
    },
    {
      title: 'Understanding Genetic Lineage',
      icon: '🌳',
      description: 'Connect with your roots and discover your family history',
      benefits: [
        'Ethnic heritage breakdown',
        'Connection with distant relatives',
        'Historical migration patterns',
        'Cultural identity exploration',
        'Family medical history',
        'Genealogical research'
      ]
    },
    {
      title: 'Family Planning Insights',
      icon: '👶',
      description: 'Understand genetic risks for future generations',
      benefits: [
        'Carrier screening for conditions',
        'Reproductive decision support',
        'Prenatal testing guidance',
        'Risk assessment for children',
        'Genetic counseling access',
        'Informed family choices'
      ]
    },
    {
      title: 'Scientific Contribution',
      icon: '🔬',
      description: 'Advance medical research and genetic understanding',
      benefits: [
        'Contribute to disease research',
        'Help develop new treatments',
        'Improve genetic databases',
        'Support rare disease studies',
        'Enable precision medicine',
        'Benefit future generations'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How accurate are DNA tests?',
      answer: 'Medical DNA tests from certified labs have 99%+ accuracy for detecting specific genetic markers. Ancestry tests are generally 90-95% accurate for major ethnic groups, with lower accuracy for more specific regional breakdowns. Accuracy depends on the size of the reference database and the specific test type.'
    },
    {
      question: 'How long does it take to get results?',
      answer: 'Typical turnaround time is 3-6 weeks from when the lab receives your sample. Medical diagnostic tests may take 2-4 weeks, while ancestry tests usually take 4-6 weeks. Expedited options may be available for an additional fee.'
    },
    {
      question: 'Can I delete my DNA data?',
      answer: 'Most reputable companies allow you to request deletion of your DNA data and physical sample. However, policies vary by company. Data shared with third parties or used in published research typically cannot be deleted. Always review the privacy policy before testing.'
    },
    {
      question: 'Will my insurance cover DNA testing?',
      answer: 'Medical DNA tests ordered by a physician may be covered by insurance if deemed medically necessary. Ancestry and direct-to-consumer tests are typically not covered. Check with your insurance provider and get pre-authorization for medical tests.'
    },
    {
      question: 'Should I consult a genetic counselor?',
      answer: 'Yes, genetic counseling is highly recommended before medical DNA testing, especially for cancer or serious disease risk screening. Counselors help you understand results, implications for family members, and next steps. Many testing companies offer counseling services.'
    },
    {
      question: 'What\'s the difference between clinical and consumer tests?',
      answer: 'Clinical tests are ordered by healthcare providers, performed in certified diagnostic labs (CLIA-certified), and used for medical decisions. Consumer tests are direct-to-consumer, provide health insights, but shouldn\'t replace medical diagnosis. Clinical tests are more comprehensive and accurate.'
    }
  ];

  return (
    <div className="dna-testing-page">
      {/* New Navbar - matching Home page design */}
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
              <Link to="/dna" className="dna-nav-link active">DNA Testing</Link>
              <Link to="/about" className="dna-nav-link">About Us</Link>
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
          <Link to="/dna" className="dna-nav-link active" onClick={handleLinkClick}>DNA Testing</Link>
          <Link to="/about" className="dna-nav-link" onClick={handleLinkClick}>About Us</Link>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          
          
        </div>
        <div className="hero-content">
          <div className="hero-badge">Your Genetic Journey Begins</div>
          <h1 className="hero-title">DNA Testing</h1>
          <p className="hero-subtitle">
            Unlock the secrets within your DNA. Discover your health risks, trace your ancestry, 
            and make informed decisions about your future with comprehensive genetic testing.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">20,000+</div>
              <div className="stat-label">Genes Analyzed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Accuracy Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Health Insights</div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of DNA Testing Section */}
      <section className="testing-types-section">
        <div className="section-header">
          <span className="section-label">Explore Options</span>
          <h2>Types of DNA Testing</h2>
          <p className="section-description">
            Choose the type of genetic testing that aligns with your goals and interests
          </p>
        </div>

        <div className="tabs-container">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'medical' ? 'active' : ''}`}
              onClick={() => setActiveTab('medical')}
            >
              <span className="tab-icon">🏥</span>
              <span>Medical Predictions</span>
            </button>
            <button 
              className={`tab ${activeTab === 'genealogical' ? 'active' : ''}`}
              onClick={() => setActiveTab('genealogical')}
            >
              <span className="tab-icon">🌍</span>
              <span>Genealogical Studies</span>
            </button>
          </div>

          <div className="tab-content">
            <div className="content-intro">
              <div className="intro-icon">{testingTypes[activeTab].icon}</div>
              <h3>{testingTypes[activeTab].title}</h3>
              <p>{testingTypes[activeTab].description}</p>
            </div>

            <div className="tests-grid">
              {testingTypes[activeTab].tests.map((test, index) => (
                <div key={index} className="test-card">
                  <div className="test-header">
                    <h4>{test.name}</h4>
                    <div className="gene-badge">{test.genes}</div>
                  </div>
                  <p className="test-details">{test.details}</p>
                  <div className="test-benefits">
                    <div className="benefits-label">Key Benefits:</div>
                    <ul>
                      {test.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Procedures Section */}
      <section className="procedures-section">
        <div className="section-header">
          <span className="section-label">How It Works</span>
          <h2>Step-by-Step Testing Process</h2>
          <p className="section-description">
            A simple, secure process from sample collection to receiving your comprehensive results
          </p>
        </div>

        <div className="procedures-timeline">
          {procedures.map((procedure, index) => (
            <div key={index} className="procedure-step">
              <div className="step-connector">
                {index < procedures.length - 1 && <div className="connector-line"></div>}
              </div>
              <div className="step-content">
                <div className="step-icon-wrapper">
                  <div className="step-number">{procedure.step}</div>
                  <div className="step-icon">{procedure.icon}</div>
                </div>
                <div className="step-details">
                  <h3>{procedure.title}</h3>
                  <p>{procedure.description}</p>
                  <ul className="step-list">
                    {procedure.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ethical Considerations Section */}
      <section className="ethics-section">
        <div className="section-header">
          <span className="section-label">Important Information</span>
          <h2>Ethical Considerations</h2>
          <p className="section-description">
            Understanding the privacy, legal, and personal implications of genetic testing
          </p>
        </div>

        <div className="ethics-grid">
          {ethicalConsiderations.map((item, index) => (
            <div key={index} className="ethics-card">
              <div className="ethics-header">
                <div className="ethics-icon-img">
                  <img src={item.image} alt={item.category} loading="lazy" />
                </div>
                <h3>{item.category}</h3>
              </div>
              
              <div className="ethics-section-block">
                <h4>Key Concerns:</h4>
                <ul className="concerns-list">
                  {item.concerns.map((concern, idx) => (
                    <li key={idx}>{concern}</li>
                  ))}
                </ul>
              </div>

              <div className="ethics-section-block">
                <h4>Protections & Guidelines:</h4>
                <ul className="protections-list">
                  {item.protections.map((protection, idx) => (
                    <li key={idx}>{protection}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impacts Section */}
      <section className="impacts-section">
        <div className="section-header">
          <span className="section-label">Life-Changing Benefits</span>
          <h2>Impact of DNA Testing</h2>
          <p className="section-description">
            Discover how genetic testing can transform your healthcare, identity, and future
          </p>
        </div>

        <div className="impacts-grid">
          {impacts.map((impact, index) => (
            <div key={index} className="impact-card">
              <div className="impact-icon">{impact.icon}</div>
              <h3>{impact.title}</h3>
              <p>{impact.description}</p>
              <div className="impact-benefits">
                {impact.benefits.map((benefit, idx) => (
                  <div key={idx} className="benefit-tag">{benefit}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-header">
          <span className="section-label">Questions & Answers</span>
          <h2>Frequently Asked Questions</h2>
          <p className="section-description">
            Get answers to common questions about DNA testing
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${expandedFaq === index ? 'expanded' : ''}`}
              onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
            >
              <div className="faq-question">
                <h4>{faq.question}</h4>
                <span className="faq-toggle">{expandedFaq === index ? '−' : '+'}</span>
              </div>
              {expandedFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DNA;