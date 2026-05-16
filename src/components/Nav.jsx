'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

const navLinks = [
  { href: '/#approach', label: 'Approach' },
  { href: '/#system', label: 'System' },
  { href: '/#founder', label: 'Founder' },
  { href: '/ethics', label: 'Ethics' },
  { href: '/faq', label: 'FAQ' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.wordmark} onClick={() => setOpen(false)}>
          CLARENT COACHING
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
          <Link href="/contact" className={styles.begin} onClick={() => setOpen(false)}>
            Begin
          </Link>
        </nav>
      </div>
    </header>
  );
}
