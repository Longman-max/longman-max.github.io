import Section from './Section';
import s from './Writing.module.css';

const data = [
  {
    year: '2025',
    title: 'Before ChatGPT, There Was ELIZA: The Machine That Fooled Humans',
    url: 'https://medium.com/@obasiagbai94/before-chatgpt-there-was-eliza-the-machine-that-fooled-humans-a0a693cc6b21',
    desc: 'The original chatbot that convinced people it understood them.',
  },
  {
    year: '2025',
    title: 'Semantic Encoding',
    url: 'https://medium.com/@obasiagbai94/semantic-encodings-539bea87351a',
    desc: 'How meaning is compressed and reconstructed inside language models.',
  },
  {
    year: '2025',
    title: 'Agents',
    url: 'https://medium.com/@obasiagbai94/agents-25c9a49eb109',
    desc: 'An exploration of autonomous AI agents and their capabilities.',
  },
  {
    year: '2026',
    title: 'Secure Autonomy: The New Mandate',
    url: 'https://substack.com/@obasiagbai/p-194510329',
    desc: 'On the convergence of security requirements and autonomous AI systems infrastructure.',
  },
];

export default function Writing() {
  return (
    <Section id="writing" label="Writing">
      <ul className={s.list}>
        {data.map((item) => (
          <li className={s.item} key={item.title}>
            <span className={s.year}>{item.year}</span>
            <div className={s.content}>
              <a
                className={s.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </a>
              <p className={s.desc}>{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
