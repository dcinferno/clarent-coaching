import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.tagline}>Clarent Coaching™ — Strategic Clarity with Intention</p>
        <nav className={styles.links}>
          <Link href="/ethics" className={styles.link}>Ethics</Link>
          <Link href="/faq" className={styles.link}>FAQ</Link>
          <Link href="#" className={styles.link}>Privacy</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
