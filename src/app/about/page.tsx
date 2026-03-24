import PageLayout from '@/components/PageLayout';
import styles from '../inner.module.css';

export const metadata = { title: 'About — Clarent Coaching' };

export default function AboutPage() {
  return (
    <PageLayout eyebrow="About Clarent" title="A Specific Purpose" ctaText="Schedule a Consultation" ctaHref="/contact">
      <div className={styles.prose}>
        <p className={styles.lead}>
          Clarent Coaching exists to address a specific challenge: the inability to move forward when decisions become complex.
        </p>
        <p>
          Modern professionals operate in environments of constant input, competing perspectives, and increasing pressure. Over time, this creates a form of cognitive overload that disrupts clear decision-making.
        </p>
        <p>
          Clarent provides a structured space where thinking can be organized, examined, and aligned.
        </p>
        <p className={styles.pullQuote}>
          The result is not a prescribed answer, but a clear, intentional direction.
        </p>
      </div>
    </PageLayout>
  );
}
