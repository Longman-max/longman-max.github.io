import s from './Section.module.css';

interface SectionProps {
  id: string;
  label: string;
  count?: string;
  children: React.ReactNode;
}

export default function Section({ id, label, count, children }: SectionProps) {
  return (
    <section className={s.section} id={id} aria-label={label}>
      <div className={s.marker}>
        <span className={s.markerLabel}>{label}</span>
        {count && <span className={s.markerCount}>{count}</span>}
      </div>
      <hr className={s.markerRule} />
      <div className={s.body}>{children}</div>
    </section>
  );
}
