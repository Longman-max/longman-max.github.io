import Section from './Section';
import s from './Entry.module.css';

const data = [
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
    <Section id="projects" label="Projects" count="02">
      <ul className={s.list}>
        {data.map((item) => (
          <li className={s.projectItem} key={item.name}>
            <div className={s.projectContent}>
              <div className={s.header}>
                <a
                  className={s.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                  <span className={s.arrow}>↗</span>
                </a>
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
            <div className={s.projectImageWrap}>
              {/* You can place <img /> or next/image here later */}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
