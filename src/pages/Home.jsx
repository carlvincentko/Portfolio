import React from 'react'
import { Link } from 'react-router-dom'
import introMe from "../assets/elements/body/intro_me.jpg";
import ahead from "../assets/elements/body/ahead.png";
import cyberSection from "../assets/elements/body/cybersec_section.png";
import cyberCv from "../assets/files/Carl_Ko_Resume_Cybersecurity.pdf";
import softengSection from "../assets/elements/body/softeng_section.jpg";
import softengCv from "../assets/files/Carl_Ko_Resume_SoftwareEngineer.pdf";
import cv from "../assets/files/Carl_Ko_Resume.pdf"
import elc from "../assets/elements/body/elc.jpg";
import lscs from "../assets/elements/body/lscs.jpg";

export default function Home() {
  return (
    <div>
      <main className="main-content">
        <div className="about-container">
          <div className="about-left">
            <img src={introMe} alt="Carl Ko" />
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

      <section className="work-content">
        <div className="work-header">
          <h1>Work Experience</h1>
        </div>

        <div className="work-container">
          <h2>IT and Web Maintenance</h2>
          <h3>AHEAD Tutorial and Review</h3>

          <img src={ahead} alt="AHEAD Tutorial and Review" />

          <p>
            Designed and implemented a CRM platform that centralized student inquiry
            management, enrollment processing, payments, communications, and feedback
            collection. Created end-to-end UI/UX designs in Figma and translated them
            into a production-ready application. Developed secure role-based access
            controls, automated communication workflows, webhook integrations, and
            internal collaboration tools while contributing to database architecture
            and security planning. Leveraged Next.js, TypeScript, Supabase, and
            Drizzle ORM to build scalable staff-facing operations software.
          </p>
        </div>
      </section>

      <section className="projects-section">
        <div className="projects-container">
          <div className="projects-header">
            <h2>My Projects</h2>
          </div>
          <div className="projects-grid">

            <div className="project-item">
              <Link to="/projects/cybersec" className="project-card">
                <img src={cyberSection} alt="Cybersecurity Projects" />
                <div className="project-label">Cybersecurity</div>
              </Link>
            </div>

            <div className="project-item">
              <Link to="/projects/softeng" className="project-card">
                <img src={softengSection} alt="Software Engineering Projects" />
                <div className="project-label">Software Engineering</div>
              </Link>
            </div>
          </div>
          
          <div className="cv-container">
            <a href={cv} target="_blank" download className="cv-link">
              Download CV
            </a>
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
              <img src={elc} alt="ENGLICOM" />
              <div className="activity-label">ENGLICOM</div>
            </Link>

            <Link to="/activities/lscs" className="activity-card">
              <img src={lscs} alt="La Salle Computer Society" />
              <div className="activity-label">La Salle Computer Society</div>
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}
