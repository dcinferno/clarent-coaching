import PageLayout from '@/components/PageLayout';
import styles from '../inner.module.css';

export const metadata = { title: 'Founder — Clarent Coaching' };

export default function FounderPage() {
  return (
    <PageLayout eyebrow="The Founder" title="Keith Graham">
      <div className={styles.prose}>
        <p className={styles.lead}>
          I built Clarent Coaching from nearly two decades of leadership experience and formal graduate study in coaching and organizational leadership.
        </p>
        <p>
          Throughout my career, I saw a consistent pattern. Capable, thoughtful individuals were not lacking insight. They were navigating too many inputs without a clear structure for decision-making.
        </p>
        <p>
          Over time, I began to formalize a way of helping people organize their thinking, evaluate their direction, and move forward with clarity.
        </p>
        <p>
          That structure became the Clarent Approach.
        </p>
        <p className={styles.pullQuote}>
          Clarent is not built on motivation or quick answers. It is built on the belief that clarity forms when thinking becomes structured, aligned, and intentional.
        </p>
        <p className={styles.founderSignature}>— Keith Graham, Founder, Clarent Coaching</p>
      </div>
    </PageLayout>
  );
}
