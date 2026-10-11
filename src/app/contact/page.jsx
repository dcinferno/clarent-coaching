import PageLayout from '@/components/PageLayout';
import { BOOKING_URL } from '@/lib/booking';
import styles from '../inner.module.css';

export default function ContactPage() {
  return (
    <PageLayout eyebrow="Contact" title="Begin the Conversation">
      <div className={styles.prose} style={{ marginBottom: '48px' }}>
        <p className={styles.lead}>Clarity begins with a conversation.</p>
        <p>
          Reach out by email, or schedule a fee-free Discovery Session directly to find a time
          that works for you.
        </p>
        <p>
          <a href="mailto:ClarentCoaching1@clarentcoaching.com">ClarentCoaching1@clarentcoaching.com</a>
        </p>
      </div>

      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.submitBtn}
      >
        Schedule a Discovery Session
      </a>
    </PageLayout>
  );
}
