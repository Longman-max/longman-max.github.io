'use client';

import Image from 'next/image';
import s from './Hero.module.css';

export default function Hero() {
    const handleDoubleClick = async () => {
        try {
            await navigator.clipboard.writeText('🥚 - -.-- .--. . / -- .-.. --- .--. ...');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <section className={s.hero} id="hero" aria-label="Introduction">
            <div className={s.content}>

                <h1 className={s.headline}>
                    Obasi Agbai
                </h1>
                <div className={s.about}>
                    <p>
                        I like building things that genuinely help people. Outside of code, I&apos;m into cars, rockets, and cool, useful tech.
                    </p>
                </div>
            </div>
            <div className={s.imageWrap} onDoubleClick={handleDoubleClick}>
                <Image
                    className={s.image}
                    src="/images/longman.jpg"
                    alt="Obasi Agbai"
                    width={220}
                    height={293}
                    priority
                />
            </div>
        </section>
    );
}
