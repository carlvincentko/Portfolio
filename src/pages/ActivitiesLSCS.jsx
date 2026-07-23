import React from 'react'
import avp from "../assets/elements/lscs/avp.jpg";
import encrypted from "../assets/elements/lscs/encrypted.png";
import git from "../assets/elements/lscs/git.png";

export default function ActivitiesLSCS() {
  return (
    <main className="specialize-section">
      <div className="specialize-container">

        <div className="activities-item reverse">
          <div className="specialize-text">
            <h2>Associate Vice President</h2>
            <p>Training and Development</p>
          </div>
          <div className="org-image">
            <img src={avp} alt="AVP for TND" />
          </div>
        </div>

        <div className="activities-item">
          <div className="specialize-text">
            <h2>Project Head</h2>
            <p>Encrypted: Mastering the Fight Against Data Breaches</p>
          </div>
          <div className="org-image">
            <img src={encrypted} alt="Encrypted Event" />
          </div>
        </div>

        <div className="activities-item reverse">
          <div className="specialize-text">
            <h2>Project Head</h2>
            <p>GitHired: From Repos to Resumes</p>
          </div>
          <div className="org-image">
            <img src={git} alt="GitHired Event" />
          </div>
        </div>

      </div>
    </main>
  )
}
