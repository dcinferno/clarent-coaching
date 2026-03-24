'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/founder', label: 'Founder' },
  { href: '/method', label: 'The Method' },
  { href: '/arc', label: 'The Arc' },
  { href: '/matrix', label: 'The Matrix' },
  { href: '/ethics', label: 'Ethics' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoName}>Clarent Coaching</span>
          <span className={styles.logoSub}>Strategic Clarity with Intention</span>
        </Link>
        <button className={styles.hamburger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={open ? styles.barOpen : styles.bar} />
          <span className={open ? styles.barOpenMid : styles.bar} />
          <span className={open ? styles.barOpen : styles.bar} />
        </button>
        <ul className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {links.map(link => (
            <li key={link.href}>
              <Link href={link.href} className={styles.link} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button className={styles.themeBtn} onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀' : '☾'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
