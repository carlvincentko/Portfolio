import React from 'react'

export default function WorksSofteng() {
  return (
    <main className="specialize-section">
      <div className="specialize-container">

        <a className="specialize-item reverse" href="https://github.com/S4dallys/CCAPDEV-MCO-NgoLimKo" target="_blank" rel="noopener noreferrer">
          <div className="specialize-text">
            <h2>Frontend and Backend Website Development</h2>
            <p>
              Created a restaurant review website using JavaScript, HTML, and CSS.
              The system includes a dynamic database for users, restaurants, and reviews.
            </p>
          </div>
          <div className="specialize-image">
            <img src="/elements/softeng/resto.png" alt="Restaurant Web App" />
          </div>
        </a>

        <a className="specialize-item" href="https://github.com/briSalvador/Named-Networking-NIS3" target="_blank" rel="noopener noreferrer">
          <div className="specialize-text">
            <h2>Development of a Named Network Protocol</h2>
            <p>
              Built a Python-based network protocol inspired by NDNS (a DNS-like Name Service for NDN). Proposed as an alternative protocol to DNS-IP.
            </p>
          </div>
          <div className="specialize-image">
            <img src="/elements/softeng/named.png" alt="Named Network Protocol" />
          </div>
        </a>

        <a className="specialize-item reverse" href="https://github.com/CarlKo-DLSU/CarlKo_ADPRG_MCO" target="_blank" rel="noopener noreferrer">
          <div className="specialize-text">
            <h2>Weekly Payroll Calculator</h2>
            <p>
              Developed a Go program that automatically computes weekly salaries.
              Includes configurable parameters and handles special-case computations.
            </p>
          </div>
          <div className="specialize-image">
            <img src="/elements/softeng/payment.png" alt="Payroll Calculator" />
          </div>
        </a>

        <a className="specialize-item" href="https://github.com/jstn-u/OPESY7.git" target="_blank" rel="noopener noreferrer">
          <div className="specialize-text">
            <h2>Multithreaded OS with Schedulers</h2>
            <p>
              Developed a command-line operating system capable of executing tasks
              using scheduling algorithms such as FCFS and Round Robin.
            </p>
          </div>
          <div className="specialize-image">
            <img src="/elements/softeng/scheduler.png" alt="OS Scheduler" />
          </div>
        </a>

      </div>
    </main>
  )
}
