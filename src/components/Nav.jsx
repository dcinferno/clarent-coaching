'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#system', label: 'System' },
  { href: '/#ethics', label: 'Ethics' },
  { href: '/#faq', label: 'FAQ' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClass = `${styles.header} ${scrolled ? styles.headerScrolled : styles.headerTop}`;

  return (
    <header className={headerClass}>
      <div className={styles.inner}>
        <Link href="/" className={styles.wordmark} onClick={() => setOpen(false)}>
          CLARENT COACHING™
        </Link>

        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className={styles.bar} style={{ transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }} />
          <span className={styles.bar} style={{ opacity: open ? 0 : 1 }} />
          <span className={styles.bar} style={{ transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
        </button>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className={styles.link} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
