'use client';

import Section from './Section';
import s from './Entry.module.css';

const data = [
  {
    name: 'tapswitch',
    url: 'https://github.com/Longman-max/tapswitch',
    desc: 'A virtual Ethernet switch over UDP, written from scratch in Python to understand Layer 2 switching and MAC learning.',
  },
  {
    name: 'adversarial-ml-detector',
    url: 'https://github.com/Longman-max/adversarial-ml-detector',
    desc: 'Pipeline for catching adversarial inputs and poisoned training data in ML workflows on AWS.',
  },
  {
    name: 'Adaptive Captioning System',
    url: 'https://github.com/Longman-max/Adaptive-Captioning-System',
    desc: 'Image captioning model that adjusts description length and tone based on user feedback.',
  },
  {
    name: 'RAG — Nigerian Constitution',
    url: 'https://github.com/longman-max',
    desc: 'Local-first search and Q&A engine over the 1999 Nigerian Constitution with section-level citations.',
  },
];

export default function FeaturedProjects() {
  return (
    <Section id="open-source-projects" label="Open Source Projects">
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
