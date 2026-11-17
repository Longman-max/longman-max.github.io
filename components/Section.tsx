import s from './Section.module.css';

interface SectionProps {
  id: string;
  label: string;
  children: React.ReactNode;
}

export default function Section({ id, label, children }: SectionProps) {
  return (
    <section className={s.section} id={id} aria-label={label}>
      <h2 className={s.heading}>{label}</h2>
      <div className={s.body}>{children}</div>
    </section>
  );
}
