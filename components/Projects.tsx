import Section from './Section';
import s from './Entry.module.css';
import Image from 'next/image';

const data = [
  {
    name: 'tapswitch',
    url: 'https://github.com/Longman-max/tapswitch',
    desc: 'A virtual Ethernet switch over UDP, built from scratch to learn how layer 2 works.',
    stack: ['python', 'networking', 'systems'],
    image: '/images/tapswitch.png',
  },
  {
    name: 'Deap by Donjed Energy',
    url: 'https://deap.donjedenergy.com.ng/',
    desc: 'A campus solar-generator rental platform where students complete KYC, book power units, and pay online.',
    stack: ['nextjs', 'typescript', 'prisma', 'postgresql', 'paystack'],
    image: '/images/deap.png',
  },
  {
    name: 'Hexavia Assistant',
    url: 'https://hexavia.africa/',
    desc: 'An AI chatbot that provides practical business guidance and strategic insights for sustainable growth.',
    stack: ['ai', 'chatbot', 'automation', 'business'],
    image: '/images/hexavia.png',
  },
  {
    name: 'adversarial-ml-detector',
    url: 'https://github.com/Longman-max/adversarial-ml-detector',
    desc: 'Detecting adversarial inputs and data poisoning in ML pipelines powered by AWS.',
    stack: ['cyber security', 'aws', 'python', 'ml'],
    image: '/images/classifier_demo.gif',
  },
  {
    name: 'Rook',
    url: '',
    desc: 'A robotic prototype built to withstand cyberattacks and demonstrate resilient hardware-software systems.',
    stack: ['robotics', 'cybersecurity', 'embedded systems', 'hardware'],
    image: '/images/rook.jpg',
  },
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
