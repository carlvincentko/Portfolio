import React from 'react'
import avp from "../assets/elements/elc/avp.png";
import cny from "../assets/elements/elc/cny.png";
import mm from "../assets/elements/elc/mm.png";

export default function ActivitiesELC() {
  return (
    <main className="specialize-section">
      <div className="specialize-container">

        <div className="activities-item">
          <div className="specialize-text">
            <h2>Assistant Vice President</h2>
            <p>Finance</p>
          </div>
          <div className="org-image">
            <img src={avp} alt="AVP Finance" />
          </div>
        </div>

        <div className="activities-item reverse">
          <div className="specialize-text">
            <h2>Assistant Team Head for Operations and Logistics</h2>
            <p>Chinese New Year: Precious Scales of Fortune</p>
          </div>
          <div className="org-image">
            <img src={cny} alt="Operations and Logistics" />
          </div>
        </div>

        <div className="activities-item">
          <div className="specialize-text">
            <h2>Assistant Team Head for Public Relations</h2>
            <p>Medical Mission: Through Passion with Purpose</p>
          </div>
          <div className="org-image">
            <img src={mm} alt="Public Relations" />
          </div>
        </div>

      </div>
    </main>
  )
}
