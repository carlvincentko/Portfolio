import React from 'react'
import restoSec from "../assets/elements/cybersec/resto_sec.png";
import scraper from "../assets/elements/cybersec/scraper.png";
import fileAnalysis from "../assets/elements/cybersec/file_analysis.png";
import malware from "../assets/elements/cybersec/malware.png";
import cert from "../assets/elements/cybersec/cert.webp";

export default function ProjectsCybersec() {
  return (
    <main className="specialize-section">
      <div className="specialize-container">

        <a className="specialize-item" href="https://github.com/carlvincentko/Secure_Restaurant_App" target="_blank" rel="noopener noreferrer">
          <div className="specialize-text">
            <h2>Web App Vulnerability Patching</h2>
            <p>Applied security principles on a previous web application project to patch the numerous attack vectors found within it.</p>
          </div>
          <div className="specialize-image">
            <img src={restoSec} alt="RestoSec" />
          </div>
        </a>

        <a className="specialize-item reverse" href="https://github.com/carlvincentko/Footprint_Scraper" target="_blank" rel="noopener noreferrer">
          <div className="specialize-text">
            <h2>LinkedIn Webtool Information Scraper</h2>
            <p>A tool has been developed to obtain public information from LinkedIn users using Python and various libraries.</p>
          </div>
          <div className="specialize-image">
            <img src={scraper} alt="Scraper" />
          </div>
        </a>

        <a className="specialize-item" href="https://github.com/carlvincentko/File_Forensics_Analysis" target="_blank" rel="noopener noreferrer">
          <div className="specialize-text">
            <h2>File Recovery and Analyzer Tool</h2>
            <p>Recovered extension-less files were analyzed and reconstructed using Python and Hexadecimal Editors.</p>
          </div>
          <div className="specialize-image">
            <img src={fileAnalysis} alt="File Analysis" />
          </div>
        </a>

        <a className="specialize-item reverse" href="https://github.com/carlvincentko/Malware_Hash_Analysis" target="_blank" rel="noopener noreferrer">
          <div className="specialize-text">
            <h2>Malware Analysis of Hashes Using IOC Lookup Platforms</h2>
            <p>Determined the original file of a hash if it was a malware or not by automating analysis in IOC lookup platforms using Python.</p>
          </div>
          <div className="specialize-image">
            <img src={malware} alt="Malware Analysis" />
          </div>
        </a>

        <div className="specialize-item" id="cybersec-cert">
          <div className="specialize-text">
            <h2>ISC2 CC Certification</h2>
            <p>I was awarded with the ISC2 Certified in Cybersecurity after I completed the course and passed the exam on 2024. This certificate is valid starting 2025 until the end of 2027.</p>
          </div>
          <div className="specialize-image">
            <img src={cert} alt="Certificate" />
          </div>
        </div>

      </div>
    </main>
  )
}
