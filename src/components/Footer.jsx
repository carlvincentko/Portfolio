import React from 'react'
import fb from "../assets/elements/footer/fb.png"
import ig from "../assets/elements/footer/ig.png"
import linkedIn from "../assets/elements/footer/linkedin.png"
import x from "../assets/elements/footer/x.png"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        <div className="footer-column">
          <h2 className="footer-title">Socials</h2>
          <div className="socials">
            <a href="https://www.facebook.com/carlvincent.ko" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/carl_ng_lahat/" target="_blank" rel="noopener noreferrer">
              <img src={ig} alt="Instagram" />
            </a>
            <a href="https://x.com/BillySchmidht" target="_blank" rel="noopener noreferrer">
              <img src={x} alt="X" />
            </a>
            <a href="https://www.linkedin.com/in/carlvincentko/" target="_blank" rel="noopener noreferrer">
              <img src={linkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h2 className="footer-title">Contact</h2>
          <p>carlvincentko@gmail.com<br/>+63 969 149 5270</p>
        </div>
      </div>
    </footer>
  )
}
