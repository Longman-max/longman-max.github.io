import Section from './Section';
import s from './Entry.module.css';

interface ExperienceItem {
  name: string;
  url?: string;
  tag: string;
  date: string;
  desc: string;
}

const data: ExperienceItem[] = [
  {
    name: 'Plasmid Technologies',
    url: 'http://plasmid.vercel.app/',
    tag: 'Founder & Lead AI Engineer',
    date: '2026 - Present',
    desc: 'Building biomedical research tools and custom LLM workflows for literature discovery, genomics, and medical imaging.',
  },
  {
    name: 'Lenor Software Agency',
    url: 'https://lenorsoft.vercel.app/',
    tag: 'Founder & Technical Lead',
    date: '2026 - Present',
    desc: 'Custom web apps, mobile software, and workflow automation for businesses. I handle system architecture, client scoping, and shipping the code.',
  },
  {
    name: 'Donjed Energy',
    url: 'https://donjedenergy.com.ng/',
    tag: 'Lead Software Engineer',
    date: '2025 - Present',
    desc: 'Built the company\'s e-commerce and inventory management system, plus the Deap solar-generator rental platform and a WhatsApp bot for automated solar quotes.',
  },
  {
    name: 'Hexavia',
    url: 'https://hexavia.africa/',
    tag: 'AI Engineer',
    date: '2025 - Present',
    desc: 'Built an automated customer support system and WhatsApp/web assistant that answers client inquiries and handles routine support tickets.',
  },
  {
    name: 'Foodhut',
    url: 'https://foodhut.co/',
    tag: 'AI Engineer',
    date: '2024 - 2026',
    desc: 'Built a meal recommendation engine and conversational ordering assistant ("Lucy") to help customers discover food and reorder faster.',
  },
];

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ul className={s.list}>
        {data.map((item) => (
          <li className={s.experienceItem} key={item.name}>
            <time className={s.experienceDate}>{item.date}</time>
            <div className={s.experienceContent}>
              <div className={s.experienceHeader}>
                {item.url ? (
                  <a
                    className={s.experienceName}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                ) : (
                  <span className={s.experienceName}>{item.name}</span>
                )}
                <span className={s.experienceRole}>{item.tag}</span>
              </div>
              <p className={s.experienceDesc}>{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
