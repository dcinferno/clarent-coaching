import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.tagline}>© 2026 Clarent Coaching™</p>
        <nav className={styles.links}>
          <Link href="/#about" className={styles.link}>About</Link>
          <Link href="/#system" className={styles.link}>System</Link>
          <Link href="/#founder" className={styles.link}>Keith Graham</Link>
          <Link href="/#faq" className={styles.link}>FAQ</Link>
          <Link href="/#ethics" className={styles.link}>Ethics</Link>
          <Link href="/#privacy" className={styles.link}>Privacy</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
