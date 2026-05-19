import './Landing.css'
import LogoTransparent from '../assets/Logo-Transparent.png'
import { Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import SkillPill from '../components/SkillPill'
import { useEffect } from 'react'

const frontend = [
  'React',
  'JavaScript',
  'CSS3',
  'HTML5'
]

const backend = [
  'PHP',
  'Laravel'
]

const templatingTools = [
  'Blade'
]

const projects = [
  {
    title: 'Wireless Access for Health Inventory System',
    summary:
      'An analytics experience with reusable charts, clean information hierarchy, and fast filters for product teams.',
    tags: ['Blade', 'CSS', 'PHP', 'Java Script']
  }
]

function LandingPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-on-scroll')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main className="portfolio-shell">
      <section className="hero-panel reveal-on-scroll">
        <div className="hero-copy">
          <p className="eyebrow">HI THERE, I'M CLYDE</p>
          <h1>I build clean web interfaces that make the internet a bit easier to navigate.</h1>
          <p className="lede">
            I’m a front-end developer focused on ensuring users have a seamless, smooth-sailing
            experience from the moment they land on a page. While I specialize in crafting
            interactive front-ends, my college background gave me a solid foundation in
            core programming logic and databases, helping me write smart, clean code.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="https://mail.google.com/mail/?view=cm&fs=1&to=johnclydewylie@gmail.com&su=Hello&body=Hi%20Clyde" target="_blank" rel="noreferrer">
              Let’s work together
            </a>
            <a className="secondary-action" href="#projects">
              Projects
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="profile-card">
            <div className="profile-card__top">
              <span className="status-dot" />
              Available for freelance and full-time roles
            </div>
            <div className="profile-card__body">
              <div className="code-block">
                <span>const craft =</span>
                <span>{'{'} design, build, refine {'}'}</span>
              </div>
              <div className="signal-grid">
                <div>
                  <strong>UI</strong>
                  <span>Design systems</span>
                </div>
                <div>
                  <strong>Motion</strong>
                  <span>Meaningful transitions</span>
                </div>
                <div>
                  <strong>Code</strong>
                  <span>React & CSS</span>
                </div>
                <div>
                  <strong>Quality</strong>
                  <span>Accessible, responsive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card reveal-on-scroll" id="about">
        <div className="about-layout">
          <div>
            <div className="section-heading">
              <p className="eyebrow">About me</p>
            </div>
            <p className="section-copy">
              Hello! I am John Clyde Wylie Taruc, a graduating student at STI College Tarlac.
               One of my greatest strengths is my problem-solving mindset: when I encounter a 
               coding issue, I remain dedicated and focused until I find a solution. I am also 
               highly collaborative and enjoy working within a team. While my dedication can sometimes 
               lead me to over-fixate on a single problem, I actively manage this by setting regular 
               checkpoints to step back and review the broader picture — ensuring I meet deadlines 
               without compromising on quality.
            </p>
            <br></br>
            <h3>Technologies I have used</h3>
          </div>
        </div>
        <div className="skill-pills" aria-label="Core skills">
          <div>
          </div>
            <div className="skill-category">
              <div className="cat-title">
                <strong>Frontend</strong>
              </div>
              <div className="cat-pills">
                {frontend.map((item) => (
                    <SkillPill key={`fe-${item}`} name={item} />
                  ))}
              </div>
            </div>
            <br></br>
            <div className="skill-category">
              <div className="cat-title">
                <strong>Backend</strong>
              </div>
              <div className="cat-pills">
                {backend.map((item) => (
                  <SkillPill key={`be-${item}`} name={item} />
                ))}
              </div>
            </div>
            <br></br>
            <div className="skill-category">
              <div className="cat-title">
                <strong>Templating</strong>
              </div>
              <div className="cat-pills">
                {templatingTools.map((item) => (
                  <SkillPill key={`tpl-${item}`} name={item} />
                ))}
              </div>
            </div>
        </div>
      </section>

      <section className="section-card" id="projects">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">A look at what I’ve been building lately.</p>
            <h2>Driven by continuous learning in an ever-changing tech landscape.</h2>
          </div>
          <p className="section-copy section-copy--compact">
            This is a curated selection of my work, ranging from hands-on frontend design to building 
            out the backend logic that powers it. Whether collaborating on a full system or exploring modern 
            web tools, each project represents a real-world challenge tackled and a solution engineered from the inside out.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => {
            const baseClass = index === 0 ? 'project-card project-card--feature' : 'project-card'
            return (
              <article className={`${baseClass} reveal-on-scroll`} key={project.title}>
              <div className="project-card__header">
                <span className="project-index">0{index + 1}</span>
                <span className="project-dot" />
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="project-tags">
                {project.tags.map((tag) => {
                  const normalize = (t) => {
                    const s = t.trim()
                    if (/^css$/i.test(s)) return 'CSS3'
                    if (/java\s*script/i.test(s)) return 'JavaScript'
                    return s
                  }
                  const name = normalize(tag)
                  return <SkillPill key={tag} name={name} />
                })}
              </div>
              {index === 0 ? (
                <Link className="project-more" to="/wahinv">
                  Know more <span aria-hidden="true">→</span>
                </Link>
              ) : null}
            </article>
            )})}
        </div>
      </section>

      <section className="section-card section-card--contact reveal-on-scroll" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Open to front end roles, freelance projects, and collaborations.</h2>
        </div>
        <p className="section-copy">
          If you want a portfolio that feels tailored to your own name, skills, and
          projects, I can help you refine the content and make it more personal.
        </p>
        <svg width="0" height="0" aria-hidden="true" className="squircle-clip">
          <defs>
            <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
              <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
            </clipPath>
          </defs>
        </svg>

        <div className="contact-squircles">
          <div className="contact-squircles__backdrop" />

          <div className="contact-squircles__row">
            <div className="contact-squircle-wrap">
              <a
                className="icon-squircle icon-squircle--github"
                href="https://github.com/Zekuchi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{ background: '#1a1f2c', color: '#ffffff' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <span className="icon-tooltip icon-tooltip--github">GitHub</span>
            </div>

            <div className="contact-squircle-wrap">
              <a
                className="icon-squircle icon-squircle--gmail"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=johnclydewylie@gmail.com&su=Hello&body=Hi%20Clyde" target="_blank" rel="noreferrer"
                aria-label="Gmail"
                style={{ background: '#ea4335', color: '#ffffff' }}
              >
                <Mail size={24} strokeWidth={2.1} aria-hidden="true" />
              </a>
              <span className="icon-tooltip icon-tooltip--gmail">Gmail</span>
            </div>

            <div className="contact-squircle-wrap">
              <a
                className="icon-squircle icon-squircle--instagram"
                href="https://www.instagram.com/zekuchiii/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ background: 'linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)', color: '#ffffff' }}
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <defs>
                    <linearGradient id="igGrad" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#f58529" />
                      <stop offset="40%" stopColor="#dd2a7b" />
                      <stop offset="100%" stopColor="#515bd4" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="24" height="24" rx="6" fill="url(#igGrad)" />
                  <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4" fill="none" stroke="#fff" strokeWidth="1.6" />
                  <circle cx="12" cy="11.8" r="3.4" fill="#fff" />
                  <circle cx="17" cy="6.6" r="0.9" fill="#fff" />
                </svg>
              </a>
              <span className="icon-tooltip icon-tooltip--instagram">Instagram</span>
            </div>
          </div>
        </div>
      </section>
        <footer className="site-footer">
          <img src={LogoTransparent} alt="Logo" className="footer-logo" />
          <span>© 2026 Clyde. All rights reserved.</span>
        </footer>
    </main>
  )
}

export default LandingPage
