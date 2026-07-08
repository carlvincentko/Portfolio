import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <main className="main-content">
        <div className="about-container">
          <div className="about-left">
            <img src="/elements/body/intro_me.jpg" alt="Carl Ko" />
          </div>
          <div className="about-right">
            <h2>Welcome</h2>
            <p>
              I am Carl Vincent Ko, a Senior De La Salle University student taking the course 
              Bachelor of Science in Computer Science Major in Network and Information Security. 
              I am a lifelong learner, always eager and excited to learn more and expand my skillset. 
              I have honed my soft skills through my numerous extracurricular activities and 
              organizations, making me a great asset in team settings and adaptable in dynamic 
              situations. Outside of work, I take the time to keep myself healthy and engage in a 
              variety of exercises and sports.
            </p>
          </div>
        </div>
      </main>

      <section className="works-section">
        <div className="works-container">
          <div className="works-header">
            <h2>Work Experience</h2>
          </div>
        </div>
      </section>

      <section className="works-section">
        <div className="works-container">
          <div className="works-header">
            <h2>My Works</h2>
          </div>
          <div className="works-grid">

            <div className="work-item">
              <Link to="/works/cybersec" className="work-card">
                <img src="/elements/body/cybersec_section.png" alt="Cybersecurity Works" />
                <div className="work-label">Cybersecurity</div>
              </Link>
              <a href="/files/Carl_Ko_Resume_Cybersecurity.pdf" target="_blank" download className="cv-link">Cybersecurity CV</a>
            </div>

            <div className="work-item">
              <Link to="/works/softeng" className="work-card">
                <img src="/elements/body/softeng_section.jpg" alt="Software Engineering Works" />
                <div className="work-label">Software Engineering</div>
              </Link>
              <a href="/files/Carl_Ko_Resume_SoftwareEngineer.pdf" target="_blank" download className="cv-link">Software Engineering CV</a>
            </div>

          </div>
        </div>
      </section>

      <section className="activities-section">
        <div className="activities-container">
          <div className="activities-header">
            <h2>Organizational Activities</h2>
          </div>

          <div className="activities-grid">
            <Link to="/activities/elc" className="activity-card">
              <img src="/elements/body/elc.jpg" alt="ENGLICOM" />
              <div className="activity-label">ENGLICOM</div>
            </Link>

            <Link to="/activities/lscs" className="activity-card">
              <img src="/elements/body/lscs.jpg" alt="La Salle Computer Society" />
              <div className="activity-label">La Salle Computer Society</div>
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}
