import s from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <span className={s.text}>Lagos, Nigeria</span>
      <span className={s.text}>{year}</span>
    </footer>
  );
}
