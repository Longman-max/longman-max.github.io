import Section from './Section';
import s from './Entry.module.css';

const data = [
  {
    name: 'Foodhut',
    url: 'https://foodhut.co/',
    tag: 'ML · PYTHON',
    desc: 'Built recommendation systems and chatbots to personalise meal discovery at scale.',
  },
  {
    name: 'Hexavia',
    url: 'https://hexavia.africa/',
    tag: 'CONSULTING',
    desc: 'Contributed to strategic technical projects at a pan-African management consulting firm.',
  },
  {
    name: 'Donjed Energy',
    url: 'https://donjedenergy.com.ng/',
    tag: 'ENERGY TECH',
    desc: 'Supported technical operations at a Nigerian solar energy retail company.',
  },
];

export default function Experience() {
  return (
    <Section id="experience" label="Experience" count="01">
      <ul className={s.list}>
        {data.map((item) => (
          <li className={s.item} key={item.name}>
            <div className={s.header}>
              <a
                className={s.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
              <span className={s.tag}>{item.tag}</span>
            </div>
            <p className={s.desc}>{item.desc}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
