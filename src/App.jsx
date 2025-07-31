import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import profilePhoto from './assets/Photo-Update.png'
import AIDance from "./assets/AI_Dance.png"
import Asteroids from './assets/Asteroids_Photo.png'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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
              <a href="#home" onClick={closeMobileMenu}>Anusha Ratra - Portfolio</a>
            </div>
            <button 
              className="dark-mode-toggle" 
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
          
          {/* Desktop Menu */}
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

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-menu">
            <li className="mobile-nav-item">
              <a href="#home" className="mobile-nav-link" onClick={closeMobileMenu}>Home</a>
            </li>
            <li className="mobile-nav-item">
              <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>About</a>
            </li>
            <li className="mobile-nav-item">
              <a href="#projects" className="mobile-nav-link" onClick={closeMobileMenu}>Projects</a>
            </li>
            <li className="mobile-nav-item">
              <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>Contact</a>
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
               Computer Engineering major at Rutgers University 
             </h2>
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
            I’m passionate about the intersection of computer vision and AI.
            My recent work includes building a full-stack choreography 
            analysis tool using MediaPipe and OpenCV that grades dance performance by comparing 
            pose and timing against reference videos. I love building things that help me tap into 
            both my creative and problem solving sides, and I'm always eager to grow and learn new skills. 
             
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
            <a
              href="https://github.com/anushar777/Dance-Star"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card project-link"
            >
              <div className="project-image">
                <img src={AIDance} alt="AI Dance Performance Evaluator" className="dance-img" />
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
            </a>
            <a
              href="https://github.com/anushar777/Hand-Tracking-Space-Shooters"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card project-link"
            >
              <div className="project-image">
                <img src={Asteroids} alt="Hand Tracking Asteroids" className="dance-img" />
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
            </a>
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
                  <div className="contact-item">
                    
                      <i className="fas fa-envelope"></i>
                      <span>anusha.ratra@gmail.com</span>
                  

                    <a href="https://www.linkedin.com/in/anusha-ratra-455865305/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                      <span>LinkedIn</span>
                    </a>

                    <a href="https://github.com/anushar777" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                      <span>GitHub</span>
                    </a>

                    
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Princeton, NJ</span>
                   
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
