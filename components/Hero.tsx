import Image from 'next/image';
import s from './Hero.module.css';

export default function Hero() {
  return (
    <section className={s.hero} id="hero" aria-label="Introduction">
      <div className={s.content}>
        <p className={s.label}>Obasi Agbai — AI Engineer</p>
        <h1 className={s.headline}>
          Building systems
          <br />
          that think.
        </h1>
        <p className={s.bio}>
          CS student at FUTO. Researcher and builder across ML, NLP, and systems
          infrastructure. Currently: MLOps pipelines, autonomous security, edge
          inference.
        </p>
      </div>
      <div className={s.imageWrap}>
        <Image
          className={s.image}
          src="/images/picture-1.jpeg"
          alt="Obasi Agbai"
          width={220}
          height={293}
          priority
        />
      </div>
      <hr className={s.divider} />
    </section>
  );
}
