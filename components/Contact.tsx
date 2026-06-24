import Section from './Section';
import s from './Contact.module.css';

const socials = [
  { label: 'github', url: 'https://github.com/longman-max' },
  { label: 'linkedin', url: 'https://linkedin.com/in/obasiagbai' },
  { label: 'x', url: 'https://x.com/obasiagbai' },
  { label: 'medium', url: 'https://medium.com/@obasiagbai94' },
  { label: 'substack', url: 'https://substack.com/@obasiagbai' },
  { label: 'hashnode', url: 'https://hashnode.com/@obasiagbai1' },
];

export default function Contact() {
  return (
    <Section id="contact" label="Contact" count="05">
      <a className={s.email} href="mailto:obasiagbai94@gmail.com">
        obasiagbai94@gmail.com
      </a>
      <div className={s.socials}>
        {socials.map((link, i) => (
          <span key={link.label}>
            <a
              className={s.socialLink}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
            {i < socials.length - 1 && <span className={s.separator}>·</span>}
          </span>
        ))}
      </div>
    </Section>
  );
}
