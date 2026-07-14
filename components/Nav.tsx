'use client';

import { useCallback } from 'react';
import s from './Nav.module.css';

const navLinks = [
  { label: 'github', url: 'https://github.com/Longman-max' },
  { label: 'linkedin', url: 'https://www.linkedin.com/in/obasi-agbai/' },
  { label: 'x', url: 'https://x.com/obasi_agbai' },
];

export default function Nav() {
  const toggleTheme = useCallback(() => {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  return (
    <nav className={s.nav} aria-label="Primary navigation">
      <div className={s.inner}>
        <span className={s.name}>obasi agbai</span>
        <ul className={s.links}>
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                className={s.link}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              className={s.toggle}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              type="button"
            >
              <svg
                className={s.toggleIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="var(--text)"
                  strokeWidth="2"
                />
                <path
                  d="M12 2 A10 10 0 0 0 12 22 Z"
                  fill="var(--text)"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
