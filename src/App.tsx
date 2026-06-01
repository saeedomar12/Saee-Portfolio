import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [copied, setCopied] = useState(false)
  const [chartTriggered, setChartTriggered] = useState(false)

  // Interactive mouse tracking glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            if (entry.target.id === 'capstone-project') {
              setChartTriggered(true)
            }
          }
        });
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))
    
    return () => observer.disconnect()
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('saeedomar.razuman@smcic.edu.ph')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <>
      {/* Background elements */}
      <div className="ambient-glow ambient-emerald"></div>
      <div className="ambient-glow ambient-violet"></div>
      <div className="grid-overlay"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#" className="nav-logo">
            <span className="nav-logo-dot"></span>
            <span>RAZUMAN</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content reveal">
            <div className="hero-status">
              <span className="badge badge-emerald">
                <span className="badge-dot"></span>
                Available for OJT & Research Collaboration
              </span>
            </div>
            <h1 className="hero-title">
              Engineering the Future of <span>Agricultural Intelligence</span>
            </h1>
            <p className="hero-description">
              Hi, I'm Saeedomar Razuman. I develop computer vision models and machine learning pipelines that address real-world challenges, with a primary focus on smart agriculture and bioscience diagnostics.
            </p>
            <div className="hero-ctas">
              <a href="#projects" className="btn btn-primary">
                View Capstone Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="#contact" className="btn btn-secondary">Get in Touch</a>
            </div>
          </div>
          
          <div className="hero-visual reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="visual-canvas">
              <div className="visual-circle-glow"></div>
              <div className="visual-profile-card">
                <div className="visual-profile-pic-container">
                  <img src="./profile.jpg" alt="Saeedomar Razuman" className="visual-profile-pic" />
                </div>
                <div className="visual-profile-name">Saeedomar Razuman</div>
                <div className="visual-profile-title">AI & Deep Learning Practitioner</div>
                <div className="visual-stats">
                  <div className="visual-stat-item">
                    <div className="visual-stat-val">3+</div>
                    <div className="visual-stat-label">Awards</div>
                  </div>
                  <div className="visual-stat-item">
                    <div className="visual-stat-val">96%</div>
                    <div className="visual-stat-label">ML Acc.</div>
                  </div>
                  <div className="visual-stat-item">
                    <div className="visual-stat-val">100%</div>
                    <div className="visual-stat-label">Dedicated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Background</span>
            <h2 className="section-headline">Academic Foundation & Training</h2>
          </div>
          
          <div className="about-grid">
            <div className="about-text">
              <p>
                My journey into engineering began with a curiosity about how intelligence can be automated and applied to solve existential challenges, such as food security and agricultural diagnostics.
              </p>
              <p>
                Through my academic background at St Michael's College and intensive industry-level OJT training at Mindanao Business & IT Solutions, I've developed deep technical competencies in machine learning pipelines, full-stack application development, and interactive design.
              </p>
            </div>
            
            <div className="about-cards-container">
              <div className="glass-card about-info-card">
                <div className="badge badge-emerald" style={{ marginBottom: '12px' }}>
                  <span className="badge-dot"></span>
                  Education
                </div>
                <h3 className="about-card-title">St Michael's College of Iligan City Inc.</h3>
                <p className="about-card-subtitle">Bachelor of Science in Information Technology</p>
                <p className="about-card-desc">Fostering deep technical foundation in data modeling, systems analysis, and artificial intelligence design.</p>
              </div>

              <div className="glass-card about-info-card">
                <div className="badge badge-violet" style={{ marginBottom: '12px' }}>
                  <span className="badge-dot"></span>
                  Professional OJT
                </div>
                <h3 className="about-card-title">Mindanao Business & IT Solutions</h3>
                <p className="about-card-subtitle">On-the-Job Training & Engineering Intern</p>
                <p className="about-card-desc">Designed production interfaces and integrated backend processes to support local business digitization initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Research Case Study</span>
            <h2 className="section-headline">Featured Works</h2>
          </div>

          <div id="capstone-project" className="project-case-study glass-card" style={{ padding: '40px', borderRadius: '24px' }}>
            <div className="project-details">
              <span className="project-tag">Award-Winning Research</span>
              <h3 className="project-headline">
                Machine Learning-Based Detection and Classification of Diseases in Musa X Paradisiaca Linn (Banana)
              </h3>
              <p className="project-description">
                Banana crops are highly susceptible to leaf diseases that can devastate yields. This research project implements automated computer vision classifiers using convolutional neural architectures. Farmers can upload crop imagery to obtain instantaneous diagnostic tags.
              </p>
              
              <div className="project-metrics">
                <div className="metric-card">
                  <div className="metric-number">96.8%</div>
                  <div className="metric-label">Disease Classification Accuracy</div>
                </div>
                <div className="metric-card">
                  <div className="metric-number">Real-Time</div>
                  <div className="metric-label">Mobile Diagnostic Output</div>
                </div>
              </div>

              <div className="project-tech">
                <span className="project-tech-tag">Python</span>
                <span className="project-tech-tag">TensorFlow</span>
                <span className="project-tech-tag">Computer Vision</span>
                <span className="project-tech-tag">Deep Learning</span>
              </div>
            </div>

            <div className="project-visual">
              <div className="project-visual-bg"></div>
              <div className="project-visual-content">
                <div className="ml-confidence-chart">
                  <div className="chart-title">Confidence Classifier Output</div>
                  
                  <div className="chart-row">
                    <div className="chart-row-label">
                      <span>Sigatoka Disease</span>
                      <span>{chartTriggered ? '96.8%' : '0%'}</span>
                    </div>
                    <div className="chart-bar-bg">
                      <div className="chart-bar-fill" style={{ width: chartTriggered ? '96.8%' : '0%' }}></div>
                    </div>
                  </div>

                  <div className="chart-row">
                    <div className="chart-row-label">
                      <span>Panama Wilt</span>
                      <span>{chartTriggered ? '2.1%' : '0%'}</span>
                    </div>
                    <div className="chart-bar-bg">
                      <div className="chart-bar-fill" style={{ width: chartTriggered ? '2.1%' : '0%' }}></div>
                    </div>
                  </div>

                  <div className="chart-row">
                    <div className="chart-row-label">
                      <span>Healthy Control</span>
                      <span>{chartTriggered ? '1.1%' : '0%'}</span>
                    </div>
                    <div className="chart-bar-bg">
                      <div className="chart-bar-fill" style={{ width: chartTriggered ? '1.1%' : '0%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Capabilities</span>
            <h2 className="section-headline">Technical Toolkit</h2>
          </div>

          <div className="skills-grid">
            <div className="glass-card skill-category-card">
              <div className="skill-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <h3 className="skill-category-title">AI & Machine Learning</h3>
              <div className="skill-list">
                <span className="skill-item-badge">Python</span>
                <span className="skill-item-badge">TensorFlow</span>
                <span className="skill-item-badge">Keras</span>
                <span className="skill-item-badge">Computer Vision</span>
                <span className="skill-item-badge">Data Analysis</span>
              </div>
            </div>

            <div className="glass-card skill-category-card">
              <div className="skill-icon skill-icon-violet">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
              <h3 className="skill-category-title">Frontend Engineering</h3>
              <div className="skill-list">
                <span className="skill-item-badge">React</span>
                <span className="skill-item-badge">TypeScript</span>
                <span className="skill-item-badge">JavaScript</span>
                <span className="skill-item-badge">Vite</span>
                <span className="skill-item-badge">Modern CSS</span>
              </div>
            </div>

            <div className="glass-card skill-category-card">
              <div className="skill-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>
              </div>
              <h3 className="skill-category-title">Systems & Tools</h3>
              <div className="skill-list">
                <span className="skill-item-badge">Git & GitHub</span>
                <span className="skill-item-badge">SQL</span>
                <span className="skill-item-badge">Adobe Illustrator</span>
                <span className="skill-item-badge">UX Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Timeline Section */}
      <section id="experience" className="reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Timeline</span>
            <h2 className="section-headline">Milestones & Achievements</h2>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="glass-card timeline-card">
                <div className="timeline-date">May 5, 2026</div>
                <h3 className="timeline-role">Best Research Paper & Presentation Awards</h3>
                <p className="timeline-company">6th International Research Congress, St Michael's College</p>
                <p className="timeline-desc">
                  Received triple recognition: "Best Research Paper", "Best Paper Presentation (Track 2)", and "Best Oral Presentation" under the Zero Hunger, Health, and Well-Being category.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker timeline-marker-violet"></div>
              <div className="glass-card timeline-card">
                <div className="timeline-date">2023 - Present</div>
                <h3 className="timeline-role">On-the-Job Training & Intern</h3>
                <p className="timeline-company">Mindanao Business & IT Solutions</p>
                <p className="timeline-desc">
                  Working closely with developers to deliver digital solutions, gaining hands-on software development lifecycle exposure and UI development experience.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="glass-card timeline-card">
                <div className="timeline-date">September 23, 2023</div>
                <h3 className="timeline-role">Certification: Adobe Illustrator Essentials</h3>
                <p className="timeline-company">St Michael's College of Iligan City</p>
                <p className="timeline-desc">
                  Mastered design principles, vector layouts, and vector illustration techniques to support user interface design processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Endorsements</span>
            <h2 className="section-headline">Institutional Feedback</h2>
          </div>

          <div className="testimonials-grid">
            <div className="glass-card testimonial-card">
              <p className="testimonial-text">
                "Saeedomar's research on automated Musa disease identification demonstrates outstanding innovation in agricultural technology. The triple award recognition at the Research Congress was thoroughly deserved for its contribution to solving local farming challenges."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-author-avatar">RC</div>
                <div className="testimonial-author-info">
                  <h4>Research Congress Panel</h4>
                  <p>St Michael's College of Iligan City</p>
                </div>
              </div>
            </div>

            <div className="glass-card testimonial-card">
              <p className="testimonial-text">
                "An exceptionally driven engineer who easily grasps advanced concepts. Saeedomar brings a combination of deep analytical thinking for data tasks and creative design sensitivity that makes him an invaluable asset during his OJT training."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-author-avatar">MB</div>
                <div className="testimonial-author-info">
                  <h4>OJT Advisor</h4>
                  <p>Mindanao Business & IT Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="reveal">
        <div className="container">
          <div className="glass-card contact-card">
            <h2 className="contact-headline">Let's build something impactful</h2>
            <p className="contact-sub">
              Open to research collaborations, OJT internships, and deep learning engineering opportunities.
            </p>
            
            <div className="contact-action-box">
              <span className="contact-email">saeedomar.razuman@smcic.edu.ph</span>
              <button className="btn btn-primary btn-copy" onClick={copyEmail}>
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
            </div>

            <div className="social-links">
              <a href="https://github.com" target="_blank" className="social-icon-btn" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" className="social-icon-btn" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Saeedomar Razuman. Designed for modern web engineering standards.</p>
        </div>
      </footer>
    </>
  )
}

export default App
