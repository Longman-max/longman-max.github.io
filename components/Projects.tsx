'use client';

import Section from './Section';
import s from './Entry.module.css';

const data = [
  {
    name: 'Stator',
    url: 'https://usestator.vercel.app/',
    desc: 'An MVP finance platform for managing accounts, spending, and subscriptions in one place',
    stack: ['supabase', 'system design', 'fintech', 'mono'],
  },
  {
    name: 'tapswitch',
    url: 'https://github.com/Longman-max/tapswitch',
    desc: 'A virtual Ethernet switch over UDP, built from scratch to learn how layer 2 works.',
    stack: ['python', 'networking', 'systems'],
  },
  {
    name: 'Deap by Donjed Energy',
    url: 'https://deap.donjedenergy.com.ng/',
    desc: 'A campus solar-generator rental platform where students complete KYC, book power units, and pay online.',
    stack: ['nextjs', 'typescript', 'prisma', 'postgresql', 'paystack'],
  },
  {
    name: 'Hexavia Assistant',
    url: 'https://hexavia.africa/',
    desc: 'An AI chatbot that provides practical business guidance and strategic insights for sustainable growth.',
    stack: ['ai', 'chatbot', 'automation', 'business'],
  },
  {
    name: 'adversarial-ml-detector',
    url: 'https://github.com/Longman-max/adversarial-ml-detector',
    desc: 'Detecting adversarial inputs and data poisoning in ML pipelines powered by AWS.',
    stack: ['cyber security', 'aws', 'python', 'ml'],
  },
  {
    name: 'Rook',
    url: '',
    desc: 'A robotic prototype built to withstand cyberattacks and demonstrate resilient hardware-software systems.',
    stack: ['robotics', 'cybersecurity', 'embedded systems', 'hardware'],
  },
  {
    name: 'Adaptive Captioning System',
    url: 'https://github.com/Longman-max/Adaptive-Captioning-System',
    desc: 'Captioning system that adapts detail and tone dynamically based on user context and feedback.',
    stack: ['python', 'computer-vision', 'ml'],
  },
  {
    name: 'RL Visualization',
    url: 'https://q-vision-3d.vercel.app/',
    desc: 'Interactive Q-learning visualization built to internalize RL fundamentals hands-on.',
    stack: ['typescript', 'reinforcement-learning'],
  },
  {
    name: 'RAG — Nigerian Constitution',
    url: 'https://github.com/longman-max',
    desc: 'Local-first retrieval-augmented generation system for the 1999 Nigerian Constitution.',
    stack: ['python', 'rag', 'nlp'],
  },
];

export default function Projects() {
  return (
    <Section id="projects" label="Projects">
      <ul className={s.list}>
        {data.map((item) => (
          <li className={s.projectItem} key={item.name}>
            <div className={s.projectContent}>
              <div className={s.header}>
                {item.url ? (
                  <a
                    className={s.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                    <span className={s.arrow}>↗</span>
                  </a>
                ) : (
                  <span className={s.name}>{item.name}</span>
                )}
              </div>
              <p className={s.desc}>{item.desc}</p>
              <div className={s.stackTags}>
                {item.stack.map((t) => (
                  <span className={s.stackTag} key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
