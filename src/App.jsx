import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import profilePhoto from './assets/Photo Edited.jpg'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: '',
    message: ''
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements that should animate
    const elementsToObserve = document.querySelectorAll('.animate-on-scroll');
    elementsToObserve.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email content
    const subject = `Portfolio Contact: ${formData.inquiry || 'General Inquiry'}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Inquiry Type: ${formData.inquiry || 'General Inquiry'}

Message:
${formData.message}
    `;
    
    // Open email client with pre-filled content
    const mailtoLink = `mailto:anusha.ratra@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      inquiry: '',
      message: ''
    });
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <div className="nav-logo">
              <a href="#home">Anusha Ratra - Portfolio</a>
            </div>
            <button 
              className="dark-mode-toggle" 
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title animate-on-scroll" id="hero-title">
              <span className="highlight">Anusha Ratra</span>
            </h1>
            <h2 className="hero-subtitle animate-on-scroll" id="hero-subtitle">
               Computer Engineering Student at Rutgers University
             </h2>
             <p className="hero-description animate-on-scroll" id="hero-description">
               I'm a Computer Engineering major at Rutgers University with a passion for 
               Artificial Intelligence and Machine Learning. I love exploring the intersection 
                of hardware and software to create innovative solutions that push the boundaries 
                of what's possible with technology.
              </p>
          </div>
          <div className="profile-photo animate-on-scroll" id="profile-photo">
            <img src={profilePhoto} alt="Anusha Ratra" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title animate-on-scroll" id="about-title">About Me</h2>
          <div className="about-text animate-on-scroll" id="about-text">
            <p>
              As a Computer Engineering student at Rutgers University, I'm deeply interested 
              in the rapidly evolving field of AI/ML. My academic journey has equipped me 
              with a strong foundation in both hardware and software engineering, allowing 
              me to approach problems from multiple perspectives.
            </p>
            <p>
              I'm particularly fascinated by machine learning algorithms, neural networks, 
              and their applications in real-world scenarios. Whether it's developing 
              intelligent systems or optimizing hardware for AI workloads, I'm always 
              eager to learn and contribute to cutting-edge technology.
            </p>
          </div>
          <div className="skills animate-on-scroll" id="skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Languages</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">C++</span>
                  <span className="skill-tag">C#</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">MATLAB</span>
                  <span className="skill-tag">HTML/CSS</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Frameworks/Libraries</h4>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">OpenCV</span>
                  <span className="skill-tag">MediaPipe</span>
                  <span className="skill-tag">Flutter</span>
                  <span className="skill-tag">jQuery</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Tools/Platforms/Methodologies</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Unity</span>
                  <span className="skill-tag">Firebase</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Arduino</span>
                  <span className="skill-tag">Unreal Engine</span>
                  <span className="skill-tag">VS Code</span>
                  <span className="skill-tag">LTSpice</span>
                  <span className="skill-tag">Onshape</span>
                  <span className="skill-tag">Agile</span>
                  <span className="skill-tag">Scrum</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Certifications</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Data Analysis with Python (IBM)</span>
                  <span className="skill-tag">Accenture Software Eng. Simulation</span>
                  <span className="skill-tag">CPD Level 5 –App Dev (Ongoing)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title animate-on-scroll" id="projects-title">Projects</h2>
          <div className="projects-grid animate-on-scroll" id="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-icon dance-icon">
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="30" r="8" fill="white"/>
                    <circle cx="35" cy="45" r="6" fill="white"/>
                    <circle cx="65" cy="45" r="6" fill="white"/>
                    <path d="M 30 60 Q 50 80 70 60" stroke="white" strokeWidth="3" fill="none"/>
                    <path d="M 25 40 Q 50 60 75 40" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M 20 50 Q 50 70 80 50" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3>AI Dance Performance Evaluator</h3>
                <p>Building a full-stack AI tool that scores user dance against reference choreography using 33+ facial/body keypoints per frame</p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">Python</span>
                  <span className="project-tag">OpenCV</span>
                  <span className="project-tag">Mediapipe</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-icon game-icon">
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <rect x="20" y="20" width="60" height="60" rx="5" fill="white" opacity="0.9"/>
                    <circle cx="35" cy="35" r="3" fill="#3498db"/>
                    <circle cx="65" cy="35" r="3" fill="#3498db"/>
                    <circle cx="35" cy="65" r="3" fill="#3498db"/>
                    <circle cx="65" cy="65" r="3" fill="#3498db"/>
                    <path d="M 45 50 L 55 50 M 50 45 L 50 55" stroke="#3498db" strokeWidth="2"/>
                    <path d="M 15 30 L 25 30 M 15 40 L 25 40 M 15 50 L 25 50" stroke="white" strokeWidth="2"/>
                    <path d="M 75 30 L 85 30 M 75 40 L 85 40 M 75 50 L 85 50" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3>Gesture-Controlled Space Shooter Game</h3>
                <p>Developing Asteroids-style game navigated via real-time hand tracking</p>
                <div className="project-tags">
                  <span className="project-tag">Unity</span>
                  <span className="project-tag">Python</span>
                  <span className="project-tag">C#</span>
                  <span className="project-tag">Mediapipe</span>
                  <span className="project-tag">OpenCV</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title animate-on-scroll" id="contact-title">Get In Touch</h2>
          <div className="contact-content animate-on-scroll" id="contact-content">
            <div className="contact-info">
              <h3>Let's Connect!</h3>
              <p>
                I'm always interested in new opportunities, collaborations, or just 
                having a conversation. Feel free to reach out!
              </p>
              <div className="contact-layout">
                <div className="contact-info-details">
                  <div className ="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>anusha.ratra@gmail.com</span>
                  
                  
                    <i className="fab fa-linkedin"></i>
                    <span>LinkedIn</span>
               
                  
                    <i className="fab fa-github"></i>
                    <span>GitHub</span>
                 
                 
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Rutgers University, NJ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Anusha Ratra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
