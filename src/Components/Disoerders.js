import React, { useState, useEffect } from 'react';
import './Disorders.css';

const Disorders = () => {
  const [activeDisorder, setActiveDisorder] = useState(null);
  const [symptomStep, setSymptomStep] = useState(0);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const disorderCategories = [
    {
      id: 'single-gene',
      title: 'Single-Gene Disorders',
      image: 'https://static.vecteezy.com/system/resources/previews/002/486/950/non_2x/single-gene-disorders-red-gradient-concept-icon-vector.jpg',
      description: 'Caused by mutations in a single gene. Examples include Cystic Fibrosis, Sickle Cell Anemia, and Huntington\'s Disease.',
      details: [
        'Inheritance patterns: Autosomal dominant, autosomal recessive, or X-linked',
        'Affects approximately 1 in 200 births globally',
        'Can often be detected through genetic testing',
        'Treatment varies based on specific condition'
      ],
      examples: ['Cystic Fibrosis', 'Sickle Cell Anemia', 'Huntington\'s Disease', 'Hemophilia']
    },
    {
      id: 'chromosomal',
      title: 'Chromosomal Disorders',
      image: 'https://cdn.slidesharecdn.com/ss_thumbnails/chromosomaldisorders-190809210147-thumbnail.jpg?width=640&height=640&fit=bounds',
      description: 'Result from abnormalities in chromosome number or structure. Examples include Down Syndrome, Turner Syndrome, and Klinefelter Syndrome.',
      details: [
        'Caused by errors during cell division',
        'Can affect physical and intellectual development',
        'Often detected through prenatal screening',
        'Multidisciplinary care approach recommended'
      ],
      examples: ['Down Syndrome', 'Turner Syndrome', 'Klinefelter Syndrome', 'Cri-du-chat Syndrome']
    },
    {
      id: 'multifactorial',
      title: 'Multifactorial Disorders',
      image: 'https://imgv2-2-f.scribdassets.com/img/document/424682034/original/935a1cad9a/1689165554?v=1',
      description: 'Caused by a combination of genetic and environmental factors. Examples include Heart Disease, Diabetes, and certain Cancers.',
      details: [
        'Result from interaction of multiple genes and environment',
        'Lifestyle factors play a significant role',
        'Family history increases risk',
        'Prevention through healthy lifestyle choices'
      ],
      examples: ['Heart Disease', 'Type 2 Diabetes', 'Alzheimer\'s Disease', 'Certain Cancers']
    }
  ];

  const symptomQuestions = [
    {
      question: 'Are you experiencing any of the following physical symptoms?',
      options: ['Unusual fatigue', 'Unexplained pain', 'Changes in appearance', 'Mobility issues', 'None of these']
    },
    {
      question: 'Have you noticed any cognitive or developmental concerns?',
      options: ['Memory difficulties', 'Learning challenges', 'Delayed milestones', 'Speech difficulties', 'None of these']
    },
    {
      question: 'Is there a family history of genetic conditions?',
      options: ['Yes, in immediate family', 'Yes, in extended family', 'Not sure', 'No known history']
    }
  ];

  const preventionTips = [
    {
      icon: '🧬',
      title: 'Genetic Counseling',
      description: 'Consult with genetic counselors to understand your family history and potential risks.'
    },
    {
      icon: '🏥',
      title: 'Regular Screening',
      description: 'Participate in recommended health screenings and prenatal testing when appropriate.'
    },
    {
      icon: '💚',
      title: 'Healthy Lifestyle',
      description: 'Maintain a balanced diet, exercise regularly, and avoid harmful substances.'
    },
    {
      icon: '📚',
      title: 'Education',
      description: 'Stay informed about genetic conditions and advances in medical research.'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Planning',
      description: 'Discuss genetic risks with healthcare providers when planning a family.'
    },
    {
      icon: '🔬',
      title: 'Early Detection',
      description: 'Utilize genetic testing when recommended to identify risks early.'
    }
  ];

  const handleSymptomSelect = (option) => {
    setSelectedSymptoms([...selectedSymptoms, { step: symptomStep, answer: option }]);
    if (symptomStep < symptomQuestions.length - 1) {
      setSymptomStep(symptomStep + 1);
    } else {
      // Show results
      setTimeout(() => {
        alert('This tool is for educational purposes only. Please consult with a healthcare professional for proper diagnosis and treatment.');
        setSymptomStep(0);
        setSelectedSymptoms([]);
      }, 500);
    }
  };

  const resetSymptomChecker = () => {
    setSymptomStep(0);
    setSelectedSymptoms([]);
  };

  return (
    <div className="disorders-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <h1 className={`hero-title ${isVisible ? 'visible' : ''}`}>
          GENETIC DISORDERS
        </h1>
        <p className="hero-subtitle">Understanding, Awareness, and Prevention</p>
      </section>

      {/* Disorder Classification Section */}
      <section className="disorders-classification">
        <h2 className="section-title">Types of Genetic Disorders</h2>
        <p className="section-description">
          Explore the three main categories of genetic disorders to better understand their causes and characteristics.
        </p>
        
        <div className="disorder-grid">
          {disorderCategories.map((disorder, index) => (
            <div 
              key={disorder.id}
              className={`disorder-orb ${activeDisorder === disorder.id ? 'active' : ''}`}
              onClick={() => setActiveDisorder(activeDisorder === disorder.id ? null : disorder.id)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveDisorder(activeDisorder === disorder.id ? null : disorder.id);
                }
              }}
              tabIndex={0}
              role="button"
              aria-expanded={activeDisorder === disorder.id}
              aria-label={`${disorder.title} - Click to learn more`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="orb-inner">
                <div className="orb-image-container">
                  <img 
                    src={disorder.image} 
                    alt={disorder.title}
                    className="orb-image"
                    loading="lazy"
                  />
                </div>
                <h3 className="orb-title">{disorder.title}</h3>
                <p className="orb-description">{disorder.description}</p>
                
                {activeDisorder === disorder.id && (
                  <div className="orb-details">
                    <h4>Key Information:</h4>
                    <ul>
                      {disorder.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                    <h4>Common Examples:</h4>
                    <div className="examples-tags">
                      {disorder.examples.map((example, idx) => (
                        <span key={idx} className="example-tag">{example}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Symptom Checker Section */}
      <section className="symptom-checker-section">
        <h2 className="section-title">Educational Symptom Awareness Tool</h2>
        <p className="section-description">
          This interactive tool helps you understand common symptoms associated with genetic disorders. 
          <strong> This is not a diagnostic tool</strong> - always consult healthcare professionals.
        </p>

        <div className="symptom-checker-panel">
          <div className="symptom-background"></div>
          <div className="symptom-content">
            <div className="progress-indicator">
              <span>Question {symptomStep + 1} of {symptomQuestions.length}</span>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${((symptomStep + 1) / symptomQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h3 className="symptom-question">{symptomQuestions[symptomStep].question}</h3>
            
            <div className="symptom-options">
              {symptomQuestions[symptomStep].options.map((option, index) => (
                <button
                  key={index}
                  className="symptom-option"
                  onClick={() => handleSymptomSelect(option)}
                  aria-label={option}
                >
                  {option}
                </button>
              ))}
            </div>

            {symptomStep > 0 && (
              <button 
                className="reset-button"
                onClick={resetSymptomChecker}
                aria-label="Start over"
              >
                Start Over
              </button>
            )}

            <div className="disclaimer">
              <p>⚕️ This tool is for educational purposes only and does not replace professional medical advice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips Section */}
      <section className="prevention-section">
        <h2 className="section-title">Prevention & Awareness Tips</h2>
        <p className="section-description">
          Proactive steps you can take to understand and manage genetic health risks.
        </p>

        <div className="prevention-grid">
          {preventionTips.map((tip, index) => (
            <div 
              key={index}
              className="prevention-diamond"
              style={{ animationDelay: `${index * 0.1}s` }}
              tabIndex={0}
              role="article"
              aria-label={tip.title}
            >
              <div className="diamond-content">
                <div className="diamond-icon" aria-hidden="true">{tip.icon}</div>
                <h3 className="diamond-title">{tip.title}</h3>
                <p className="diamond-description">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Need Professional Guidance?</h2>
          <p>Speak with a genetic counselor or healthcare provider to discuss your specific situation and concerns.</p>
          <button className="cta-button" aria-label="Find resources for professional help">
            Find Resources
          </button>
        </div>
      </section>
    </div>
  );
};

export default Disorders;
