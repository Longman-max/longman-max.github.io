import Section from './Section';
import s from './Entry.module.css';
import Image from 'next/image';

const data = [
  {
    name: 'Adaptive Captioning System',
    url: 'https://github.com/Longman-max/Adaptive-Captioning-System',
    desc: 'Captioning system that adapts detail and tone dynamically based on user context and feedback.',
    stack: ['python', 'computer-vision', 'ml'],
    image: '/images/adaptive-captioning-system.png',
  },
  {
    name: 'RL Visualization',
    url: 'https://q-vision-3d.vercel.app/',
    desc: 'Interactive Q-learning visualization built to internalize RL fundamentals hands-on.',
    stack: ['typescript', 'reinforcement-learning'],
    image: '/images/q-vision-3d.png',
  },
  {
    name: 'RAG — Nigerian Constitution',
    url: 'https://github.com/longman-max',
    desc: 'Local-first retrieval-augmented generation system for the 1999 Nigerian Constitution.',
    stack: ['python', 'rag', 'nlp'],
    image: '/images/rag-project.png',
  },
];

export default function Projects({ count }: { count: string }) {
  return (
    <Section id="projects" label="Projects" count={count}>
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
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100px, 140px"
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
