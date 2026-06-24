import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <span className={s.text}>Lagos, Nigeria</span>
      <span className={s.text}>2026</span>
    </footer>
  );
}
