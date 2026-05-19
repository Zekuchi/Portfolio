import React from 'react'

export default function SkillPill({ name }) {
  const icon = (() => {
    switch (name) {
      case 'React':
        return (
          <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="1.6" fill="currentColor" />
              <ellipse cx="12" cy="12" rx="6.5" ry="2.2" transform="rotate(0 12 12)" />
              <ellipse cx="12" cy="12" rx="6.5" ry="2.2" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="6.5" ry="2.2" transform="rotate(120 12 12)" />
            </g>
          </svg>
        )
      case 'JavaScript':
        return (
          <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="24" height="24" rx="3" fill="#f7df1e" />
            <text x="12" y="16" fontSize="10" fontWeight="700" textAnchor="middle" fill="#000">JS</text>
          </svg>
        )
      case 'CSS3':
        return (
          <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3 2l1.5 16L12 22l7.5-4L21 2H3z" fill="#1572B6" />
            <path d="M12 17l4-2 1-11H12" fill="#33A9DC" opacity="0.2" />
          </svg>
        )
      case 'HTML5':
        return (
          <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3 2l1.5 16L12 22l7.5-4L21 2H3z" fill="#E44D26" />
            <path d="M12 17l4-2 1-11H12" fill="#F16529" opacity="0.2" />
          </svg>
        )
      case 'PHP':
        return (
          <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <ellipse cx="12" cy="12" rx="9" ry="6" fill="#777BB4" />
            <text x="12" y="14" fontSize="8" fontWeight="700" textAnchor="middle" fill="#fff">PHP</text>
          </svg>
        )
      case 'Laravel':
        return (
          <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="3" y="8" width="18" height="2" rx="1" fill="#FF2D20" />
            <rect x="3" y="12" width="10" height="2" rx="1" fill="#FF2D20" />
          </svg>
        )
      case 'Blade':
        return (
          <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 3l8 6v6l-8 6-8-6V9z" fill="#000" opacity="0.08" />
            <path d="M12 3l8 6-8 6-8-6 8-6z" fill="#FF2D20" />
          </svg>
        )
      default:
        return null
    }
  })()

  return (
    <span className="skill-pill" aria-label={name}>
      <span className="skill-icon" aria-hidden="true">{icon}</span>
      <span className="skill-name">{name}</span>
    </span>
  )
}
