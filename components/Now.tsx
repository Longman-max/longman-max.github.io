import Section from './Section';
import s from './Now.module.css';

const lines = [
  'Building production MLOps infrastructure for the UNSW-NB15 threat detection pipeline.',
  'Researching autonomous security systems for cloud and edge under Kern Systems.',
  "Learning C++ for high-performance systems. Working through Karpathy's nanoGPT.",
];

export default function Now() {
  return (
    <Section id="now" label="Now">
      <div className={s.panel}>
        <span className={s.sideLabel}>Now</span>
        <div className={s.lines}>
          {lines.map((line, i) => (
            <p className={s.line} key={i}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
