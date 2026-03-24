import Link from 'next/link';
import styles from './PageLayout.module.css';

interface PageLayoutProps {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
}

export default function PageLayout({ eyebrow, title, children, ctaText, ctaHref }: PageLayoutProps) {
  return (
    <div className={styles.page}>
      <div className={styles.arcBg}>
        <svg viewBox="0 0 1400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,200 Q500,50 1100,200 Q1250,250 1500,180" stroke="#6E7B8C" strokeWidth="1.5" fill="none" opacity="0.1" />
        </svg>
      </div>
      <div className={styles.header}>
        <div className="container content-width">
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h1>{title}</h1>
        </div>
      </div>
      <div className={styles.body}>
        <div className="container content-width">
          {children}
          {ctaText && ctaHref && (
            <div className={styles.cta}>
              <Link href={ctaHref} className={styles.ctaBtn}>{ctaText}</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
