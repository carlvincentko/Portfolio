import React from 'react'
import distributed from "../assets/elements/softeng/distributed.png";
import resto from "../assets/elements/softeng/resto.png";
import named from "../assets/elements/softeng/named.png";
import payment from "../assets/elements/softeng/payment.png";
import scheduler from "../assets/elements/softeng/scheduler.png";

export default function ProjectsSofteng() {
  return (
    <main className="specialize-section">
      <div className="specialize-container">

        <a className="specialize-item" href="https://github.com/carlvincentko/Distributed_Log_Ecosystem" target="_blank" rel="noopener noreferrer">
          <div className="specialize-text">
            <h2>Development of a Distributed Log Ecosystem</h2>
            <p>
              Developed a scalable decentralized log analytics system with distributed syslog processing and fault tolerance.
            </p>
          </div>
          <div className="specialize-image">
            <img src={distributed} alt="Distributed Log Ecosystem" />
          </div>
        </a>

        <a className="specialize-item reverse" href="https://github.com/carlvincentko/Restaurant_App" target="_blank" rel="noopener noreferrer">
          <div className="specialize-text">
            <h2>Frontend and Backend Website Development</h2>
            <p>
              Created a restaurant review website using JavaScript, HTML, and CSS. The system includes a dynamic database for users, restaurants, and reviews.
            </p>
          </div>
          <div className="specialize-image">
            <img src={resto} alt="Restaurant Web App" />
          </div>
        </a>

        <a className="specialize-item" href="https://github.com/carlvincentko/Named_Networking_Protocol" target="_blank" rel="noopener noreferrer">
          <div className="specialize-text">
            <h2>Development of a Named Network Protocol</h2>
            <p>
              Built a Python-based network protocol inspired by NDNS (a DNS-like Name Service for NDN). Proposed as an alternative protocol to DNS-IP.
            </p>
          </div>
          <div className="specialize-image">
            <img src={named} alt="Named Network Protocol" />
          </div>
        </a>

        <a className="specialize-item reverse" href="https://github.com/carlvincentko/OS_Emulator_With_Scheduler" target="_blank" rel="noopener noreferrer">
          <div className="specialize-text">
            <h2>Multithreaded OS with Schedulers</h2>
            <p>
              Developed a command-line operating system capable of executing tasks
              using scheduling algorithms such as FCFS and Round Robin.
            </p>
          </div>
          <div className="specialize-image">
            <img src={scheduler} alt="OS Scheduler" />
          </div>
        </a>

      </div>
    </main>
  )
}
