import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.arc}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 Q600,0 1200,60" stroke="#6E7B8C" strokeWidth="1" fill="none" opacity="0.15" />
        </svg>
      </div>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.name}>Clarent Coaching</span>
          <span className={styles.tagline}>Strategic Clarity with Intention</span>
        </div>
        <div className={styles.links}>
          <Link href="/contact" className={styles.link}>Contact</Link>
          <span className={styles.divider}>|</span>
          <Link href="/ethics" className={styles.link}>Ethics</Link>
          <span className={styles.divider}>|</span>
          <Link href="#" className={styles.link}>Privacy</Link>
          <span className={styles.divider}>|</span>
          <Link href="#" className={styles.link}>Terms</Link>
        </div>
        <p className={styles.copy}>© 2026 Clarent Coaching LLC</p>
      </div>
    </footer>
  );
}
