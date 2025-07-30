import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import profilePhoto from './assets/Photo Edited.jpg'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [animatedElements, setAnimatedElements] = useState(new Set());

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
                <div className="project-placeholder">🤖</div>
              </div>
              <div className="project-content">
                <h3>AI/ML Project</h3>
                <p>Description of your AI/ML project will go here.</p>
                <div className="project-tags">
                  <span className="project-tag">Python</span>
                  <span className="project-tag">TensorFlow</span>
                  <span className="project-tag">Machine Learning</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">💻</div>
              </div>
              <div className="project-content">
                <h3>Hardware Project</h3>
                <p>Description of your hardware/embedded project will go here.</p>
                <div className="project-tags">
                  <span className="project-tag">C++</span>
                  <span className="project-tag">Arduino</span>
                  <span className="project-tag">Embedded Systems</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">🌐</div>
              </div>
              <div className="project-content">
                <h3>Web Application</h3>
                <p>Description of your web development project will go here.</p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">Node.js</span>
                  <span className="project-tag">JavaScript</span>
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
                having a conversation about technology and AI/ML. Feel free to reach out!
              </p>
              <div className="contact-links">
                <a href="mailto:your.email@example.com" className="contact-link">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="https://linkedin.com/in/yourprofile" className="contact-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/yourusername" className="contact-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="/path-to-your-resume.pdf" className="contact-link" download>
                  <i className="fas fa-file-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
