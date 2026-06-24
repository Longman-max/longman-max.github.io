'use client';

import { useCallback } from 'react';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const experience = [
  {
    name: 'Foodhut',
    url: 'https://foodhut.co/',
    tags: 'ml · python',
    desc: 'Built recommendation systems and chatbots to personalise meal discovery at scale.',
  },
  {
    name: 'Hexavia',
    url: 'https://hexavia.africa/',
    tags: 'consulting',
    desc: 'Contributed to strategic technical projects at a pan-African management consulting firm.',
  },
  {
    name: 'Donjed Energy',
    url: 'https://donjedenergy.com.ng/',
    tags: 'energy tech',
    desc: 'Supported technical operations at a Nigerian solar energy retail company.',
  },
];

const projects = [
  {
    name: 'Adaptive Captioning System',
    url: 'https://github.com/Longman-max/Adaptive-Captioning-System',
    desc: 'Captioning system that adapts detail and tone dynamically based on user profile and feedback.',
    stack: 'python · computer-vision · ml',
  },
  {
    name: 'RL Visualization Experiment',
    url: 'https://q-vision-3d.vercel.app/',
    desc: 'Interactive Q-learning visualization built to internalize RL fundamentals.',
    stack: 'typescript · reinforcement-learning',
  },
  {
    name: 'RAG — 1999 Nigerian Constitution',
    url: 'https://github.com/longman-max',
    desc: 'Local-first retrieval-augmented generation system for the Nigerian Constitution.',
    stack: 'python · rag · nlp',
  },
];

const writing = [
  {
    year: '2025',
    title: 'Semantic Encoding',
    url: 'https://medium.com/@obasiagbai94/semantic-encodings-539bea87351a',
    desc: 'An exploration of how meaning is compressed and reconstructed in language models.',
  },
  {
    year: '2026',
    title: 'Secure Autonomy: The New Mandate',
    url: 'https://substack.com/@obasiagbai/p-194510329',
    desc: 'On the convergence of security and autonomous AI systems infrastructure.',
  },
];

const socials = [
  { label: 'github', url: 'https://github.com/longman-max' },
  { label: 'linkedin', url: 'https://linkedin.com/in/obasiagbai' },
  { label: 'x', url: 'https://x.com/obasiagbai' },
  { label: 'medium', url: 'https://medium.com/@obasiagbai94' },
  { label: 'substack', url: 'https://substack.com/@obasiagbai' },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
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
    <>
      {/* --- Nav --- */}
      <nav className="nav" aria-label="Primary navigation">
        <span className="nav-name">obasi agbai</span>
        <ul className="nav-links">
          <li>
            <a
              className="nav-link"
              href="https://github.com/longman-max"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="https://linkedin.com/in/obasiagbai"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="https://x.com/obasiagbai"
              target="_blank"
              rel="noopener noreferrer"
            >
              x
            </a>
          </li>
          <li>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              type="button"
            >
              /
            </button>
          </li>
        </ul>
      </nav>

      {/* --- Content --- */}
      <main className="page-wrapper">
        {/* Hero */}
        <section className="hero" id="hero">
          <h1 className="hero-headline">
            AI engineer.
            <br />
            Systems builder.
          </h1>
          <p className="hero-bio">
            CS student at FUTO. I build and research across ML, NLP, and
            systems&nbsp;— currently deep in MLOps infrastructure, edge
            inference, and reinforcement learning. When I&apos;m not building,
            I&apos;m reading papers or reverse-engineering how things work.
          </p>
        </section>

        <hr className="section-rule" />

        {/* Experience */}
        <section className="section" id="experience">
          <p className="section-marker">{'// experience'}</p>
          <ul className="entry-list">
            {experience.map((item) => (
              <li className="entry" key={item.name}>
                <div className="entry-header">
                  <a
                    className="entry-name"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                  <span className="entry-tags">{item.tags}</span>
                </div>
                <p className="entry-desc">{item.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <hr className="section-rule" />

        {/* Projects */}
        <section className="section" id="projects">
          <p className="section-marker">{'// projects'}</p>
          <ul className="entry-list">
            {projects.map((item) => (
              <li className="entry" key={item.name}>
                <div className="entry-header">
                  <a
                    className="entry-name"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                    <span className="entry-arrow">&thinsp;↗</span>
                  </a>
                  <span className="entry-tags">{item.stack}</span>
                </div>
                <p className="entry-desc">{item.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <hr className="section-rule" />

        {/* Writing */}
        <section className="section" id="writing">
          <p className="section-marker">{'// writing'}</p>
          <ul className="writing-list">
            {writing.map((item) => (
              <li className="writing-item" key={item.title}>
                <div>
                  <span className="writing-year">[{item.year}]</span>
                  <a
                    className="writing-title"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                </div>
                <p className="writing-desc">{item.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <hr className="section-rule" />

        {/* Now */}
        <section className="section" id="now">
          <p className="section-marker">{'// now'}</p>
          <p className="now-text">
            Building production MLOps infrastructure. Researching autonomous
            security systems for cloud and edge. Learning C++ for
            high-performance systems work. Slowly working through Karpathy&apos;s
            nanoGPT.
          </p>
        </section>

        <hr className="section-rule" />

        {/* Contact */}
        <section className="section" id="contact">
          <p className="section-marker">{'// contact'}</p>
          <a className="contact-email" href="mailto:obasiagbai94@gmail.com">
            obasiagbai94@gmail.com
          </a>
          <ul className="contact-links">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  className="contact-link"
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="footer-spacer" />
      </main>
    </>
  );
}
