import Section from './Section';
import s from './Entry.module.css';

interface ExperienceItem {
  name: string;
  url?: string;
  tag: string;
  desc: string;
}

const data: ExperienceItem[] = [
  {
    name: 'Hexavia',
    url: 'https://hexavia.africa/',
    tag: 'AUTOMATION',
    desc: 'Developed an automated customer service system that handled customer inquiries and reduced the team\'s manual support workload.',
  },
  {
    name: 'Foodhut',
    url: 'https://foodhut.co/',
    tag: 'ML · PYTHON',
    desc: 'Built a recommendation engine and AI chatbot that personalised meal discovery, improving user engagement and repeat orders.',
  },
  {
    name: 'Donjed Energy',
    url: 'https://donjedenergy.com.ng/',
    tag: 'ENERGY TECH',
    desc: 'Built a full-stack e-commerce and inventory system that streamlined operations and gave the team real-time visibility into stock levels.',
  },
  {
    name: 'Lenor Software Agency',
    tag: 'TECHNICAL LEAD',
    desc: 'Led technical direction and engineering delivery across client software projects, from architecture to launch.',
  },
];

export default function Experience({ count }: { count: string }) {
  return (
    <Section id="experience" label="Experience" count={count}>
      <ul className={s.list}>
        {data.map((item) => (
          <li className={s.item} key={item.name}>
            <div className={s.header}>
              {item.url ? (
                <a
                  className={s.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              ) : (
                <span className={s.name}>{item.name}</span>
              )}
              <span className={s.tag}>{item.tag}</span>
            </div>
            <p className={s.desc}>{item.desc}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
