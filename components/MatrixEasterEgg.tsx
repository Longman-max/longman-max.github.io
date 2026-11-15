'use client';

import { useEffect, useState } from 'react';

const SECRET_CODE = 'mlops';

export default function MatrixEasterEgg() {
  const [showToast, setShowToast] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let keyBuffer = '';
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if the user is typing inside an input field
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      // Add the pressed key to the buffer
      keyBuffer += e.key.toLowerCase();

      // Keep the buffer strictly the length of the secret code
      if (keyBuffer.length > SECRET_CODE.length) {
        keyBuffer = keyBuffer.slice(-SECRET_CODE.length);
      }

      // Check if the sequence matches!
      if (keyBuffer === SECRET_CODE) {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');

        if (currentTheme === 'matrix') {
          // Turn Matrix mode OFF (restore previous theme)
          const savedTheme = localStorage.getItem('theme');
          if (savedTheme === 'dark' || savedTheme === 'light') {
            html.setAttribute('data-theme', savedTheme);
          } else {
            // Fallback to media query if no local storage preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            html.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
          }
        } else {
          // Turn Matrix mode ON
          html.setAttribute('data-theme', 'matrix');
          
          // Show the toast only on desktop
          if (!isMobile) {
            setShowToast(true);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setShowToast(false), 3500);
          }
        }

        // Reset the buffer after triggering
        keyBuffer = '';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timeoutId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        backgroundColor: '#00FF41',
        color: '#000000',
        padding: '12px 24px',
        borderRadius: '8px',
        fontFamily: 'var(--font-mono)',
        fontSize: '14px',
        fontWeight: 'bold',
        boxShadow: '0 8px 24px rgba(0, 255, 65, 0.25)',
        transform: showToast ? 'translateY(0)' : 'translateY(100px)',
        opacity: showToast ? 1 : 0,
        pointerEvents: 'none',
        transition: 'transform 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 300ms ease',
        zIndex: 9999,
      }}
    >
      🥚 You found my easter egg!
    </div>
  );
}
