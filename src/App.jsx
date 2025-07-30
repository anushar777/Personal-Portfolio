import React, { useState } from 'react'
import './App.css'
import profilePhoto from './assets/Photo Edited.jpg'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <div className="nav-logo">
              <a href="#home">Portfolio</a>
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
            <h1 className="hero-title">
              <span className="highlight">Anusha Ratra</span>
            </h1>
            <h2 className="hero-subtitle">
               Computer Engineering Student
             </h2>
             <p className="hero-description">
               I'm a Computer Engineering major at Rutgers University with a passion for 
               Artificial Intelligence and Machine Learning. I love exploring the intersection 
                of hardware and software to create innovative solutions that push the boundaries 
                of what's possible with technology.
              </p>
          </div>
          <div className="profile-photo">
            <img src={profilePhoto} alt="Anusha Ratra" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
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
            <div className="skills">
              <h3>Skills & Technologies</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Programming</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">C++</span>
                    <span className="skill-tag">Java</span>
                    <span className="skill-tag">JavaScript</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>AI/ML</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">TensorFlow</span>
                    <span className="skill-tag">PyTorch</span>
                    <span className="skill-tag">Scikit-learn</span>
                    <span className="skill-tag">OpenCV</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Tools</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">Docker</span>
                    <span className="skill-tag">Linux</span>
                    <span className="skill-tag">Arduino</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
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
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect!</h3>
              <p>
                I'm always interested in new opportunities, collaborations, or just 
                having a conversation about technology and AI/ML. Feel free to reach out!
              </p>
              <div className="contact-links">
                <a href="mailto:your.email@example.com" className="contact-link">
                  📧 your.email@example.com
                </a>
                <a href="https://linkedin.com/in/yourprofile" className="contact-link">
                  💼 LinkedIn
                </a>
                <a href="https://github.com/yourusername" className="contact-link">
                  🐙 GitHub
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
