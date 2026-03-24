import PageLayout from '@/components/PageLayout';
import styles from '../inner.module.css';

export const metadata = { title: 'The Method — Clarent Coaching' };

const steps = [
  { label: '01', title: 'Understanding', desc: 'Establishing what is happening — the facts, context, and current state of the decision environment.' },
  { label: '02', title: 'Interpreting', desc: 'Examining how the situation is being viewed — the assumptions, filters, and framing at work.' },
  { label: '03', title: 'Identifying', desc: 'Surfacing the real choices available — separating genuine options from perceived constraints.' },
  { label: '04', title: 'Evaluating', desc: 'Assessing alignment — what fits, what conflicts, and what is truly at stake.' },
  { label: '05', title: 'Integrating', desc: 'Bringing insight together — synthesizing what has been discovered into coherent understanding.' },
  { label: '06', title: 'Deciding', desc: 'Moving toward decision and ownership — supporting the client in acting with intention.' },
];

export default function MethodPage() {
  return (
    <PageLayout eyebrow="The Method" title="The Clarent Approach" ctaText="Explore the Arc" ctaHref="/arc">
      <div className={styles.prose}>
        <p className={styles.lead}>
          The Clarent Approach is a structured reasoning method designed to restore clarity in complex decision environments.
        </p>
        <p>
          It operates through a disciplined progression of thinking. This progression is not always linear, but it provides a consistent structure that prevents cognitive looping and premature conclusions.
        </p>
        <p className={styles.pullQuote}>
          Clarity forms through this process. It is not delivered.
        </p>
      </div>
      <div className={styles.steps}>
        {steps.map(s => (
          <div key={s.label} className={styles.step}>
            <span className={styles.stepNum}>{s.label}</span>
            <div className={styles.stepContent}>
              <p className={styles.stepTitle}>{s.title}</p>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
