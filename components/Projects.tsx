'use client';

import Section from './Section';
import s from './Entry.module.css';

const data = [
  {
    name: 'Stator',
    url: 'https://usestator.vercel.app/',
    desc: 'Personal finance web app for tracking bank accounts, spending, and recurring subscriptions in one dashboard (built with Supabase and Mono).',
  },
  {
    name: 'Deap by Donjed Energy',
    url: 'https://deap.donjedenergy.com.ng/',
    desc: 'Campus solar-generator rental platform where students verify their ID, book power units, and pay online. Built with Next.js, Prisma, and PostgreSQL.',
  },
  {
    name: 'Hexavia Assistant',
    url: 'https://hexavia.africa/',
    desc: 'Business advisory chatbot trained on Hexavia\'s frameworks to answer founder and strategy questions.',
  },
  {
    name: 'Rook',
    url: '',
    desc: 'Autonomous rover prototype built to test cyber-physical intrusion detection and telemetry under simulated attacks.',
  },
  {
    name: 'RL Visualization',
    url: 'https://q-vision-3d.vercel.app/',
    desc: 'Interactive browser visualizer for Q-learning agents to watch policies and reward tables update in real time.',
  },
];

export default function Projects() {
  return (
    <Section id="featured-projects" label="Featured Projects">
      <ul className={s.list}>
        {data.map((item) => (
          <li className={s.projectItem} key={item.name}>
            <div className={s.projectNameCol}>
              {item.url ? (
                <a
                  className={s.projectLink}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              ) : (
                <span className={s.projectName}>{item.name}</span>
              )}
            </div>
            <div className={s.projectDescCol}>
              <p className={s.projectDesc}>{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
