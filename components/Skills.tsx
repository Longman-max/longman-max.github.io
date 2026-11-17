'use client';

import Section from './Section';
import s from './Entry.module.css';

const data = [
  {
    category: 'Web Development',
    desc: 'Full-stack web apps with Next.js, React, TypeScript, FastAPI, and PostgreSQL/Supabase. I focus on fast, simple architectures without unnecessary bloat.',
  },
  {
    category: 'Systems & AI Engineering',
    desc: 'Writing custom parsers, compilers, and UDP networking tools from scratch, alongside building RAG pipelines, recommender models, and multi-agent workflows.',
  },
  {
    category: 'Programming Languages',
    desc: 'Python, TypeScript, JavaScript, and C++ for most of my daily work; currently learning Rust.',
  },
  {
    category: 'Product & Execution',
    desc: 'Scoping MVPs, talking directly to users, and taking software from a rough idea to production deployment.',
  },
  {
    category: 'Tools & Environment',
    desc: 'Daily driver is Ubuntu Linux with Neovim, tmux, and bash. See my ',
    linkText: 'dotfiles',
    linkUrl: 'https://github.com/Longman-max/dotfiles',
  },
];

export default function Skills() {
  return (
    <Section id="skills" label="Skills">
      <ul className={s.list}>
        {data.map((item) => (
          <li className={s.skillItem} key={item.category}>
            <span className={s.skillCategory}>{item.category}</span>
            <div className={s.skillContent}>
              <p className={s.skillDesc}>
                {item.desc}
                {item.linkText && (
                  <a
                    className={s.projectLink}
                    href={item.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.linkText}
                  </a>
                )}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
