import { useState } from 'react'
import OldDashboard from './assets/Old_WAHINV_Dashboard.png'
import NewDashboard from './assets/New_WAHINV_Dashboard.png'
import SkillPill from './components/SkillPill'

function WAHInv() {
  const [compare, setCompare] = useState(50)

  return (
    <main className="portfolio-shell wahinv-shell">
      <section className="section-card wahinv-page">
        <div>
          <p className="eyebrow">Intership Project</p>
          <h1>Wireless Access for Health Inventory System</h1>
          
        <div className="wahinv-tech">
          <h3>Technologies used</h3>
          <div className="wahinv-tech__list">
                {['Blade', 'CSS3', 'PHP', 'JavaScript'].map((t, i) => {
              const name = t === 'JS' ? 'JavaScript' : t
              return <SkillPill key={`${name}-${i}`} name={name} />
            })}
          </div>
        </div>
            <br></br>
          <p>
            Compare the old dashboard and the redesigned version below. Drag the handle to see what changed in the system.
          </p>
        </div>

        <div className="wahinv-compare" aria-label="WAHInv before and after comparison">
          <div className="wahinv-compare__labels" aria-hidden="true">
            <span>Before</span>
            <span>After</span>
          </div>

          <div className="wahinv-compare__stage">
            <img className="wahinv-compare__image wahinv-compare__image--base" src={NewDashboard} alt="New WAHInv dashboard" />

            <div className="wahinv-compare__overlay" style={{ width: `${compare}%` }} aria-hidden="true">
              <img className="wahinv-compare__image wahinv-compare__image--new" src={OldDashboard} alt="Old WAHInv dashboard" />
            </div>

            <div className="wahinv-compare__divider" style={{ left: `calc(${compare}% - 1px)` }} aria-hidden="true">
              <span className="wahinv-compare__handle">↔</span>
            </div>

            <input
              className="wahinv-compare__input"
              type="range"
              min="0"
              max="100"
              value={compare}
              onChange={(event) => setCompare(Number(event.target.value))}
              aria-label="Adjust the before and after comparison"
            />
          </div>
        </div>

        <div>
            <h3>Project Summary</h3>
            <p>To streamline the workflow, I engineered practical, human-centered features 
                focused on automation and clarity. Instead of forcing staff to manually apply 
                complex filters just to check low-stock products, I designed an intuitive 'Card View' 
                dashboard component that flags low inventory instantly. Clicking a card opens a modal 
                that lets users review items, trigger a restock action, and export massive blocks of 
                asset data directly to Excel spreadsheets without ever leaving the page view.
            </p>
            <p>
                <br></br>
                To bridge the gap between the software and physical warehouse operations, we implemented 
                full barcode scanner support. Staff can now instantly scan physical items using standard 
                hardware or mobile devices, completely automating data entry, reducing human error, and making daily inventory 
                management smooth sailing.
            </p>
            <br></br>
            <p>You can visit the site here: <a href="https://wahinv.wah.ph" target="_blank" rel="noopener noreferrer">WAH Inventory System</a></p>
        </div>

        <div>
            <h3>My Role & Collaborators</h3>
            <p>
                <strong>My Role:</strong> Front-end & Backend Contributor
            </p>
            <p>
                <strong>Collaborators</strong>
                <br></br>
                <strong>Aries T. Canlas</strong> : Backend Developer
                <br></br>
                <strong>Ron Ivhan S. Lobo</strong> : Front-end Contributor
            </p>
            <p>
                <strong>Timeline:</strong> February 2026 - March 2026
            </p>
        </div>

        <div className="wahinv-actions">
          <a className="primary-action" href="/">
            Back to portfolio
          </a>
        </div>
      </section>
    </main>
  )
}

export default WAHInv
