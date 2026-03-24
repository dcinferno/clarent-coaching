import PageLayout from '@/components/PageLayout';
import styles from '../inner.module.css';

export const metadata = { title: 'The Matrix — Clarent Coaching' };

const items = [
  { num: '1', title: 'Context', desc: 'What is happening — the facts, circumstances, and current state.' },
  { num: '2', title: 'Perspective', desc: 'How it is being seen — the lens, assumptions, and interpretation.' },
  { num: '3', title: 'Choices', desc: 'What options exist — the real alternatives available.' },
  { num: '4', title: 'Alignment', desc: 'What fits best — evaluated against values, direction, and priorities.' },
  { num: '5', title: 'Ownership', desc: 'What is chosen — the decision made with intention and clarity.' },
];

export default function MatrixPage() {
  return (
    <PageLayout eyebrow="The Matrix" title="A Client-Facing Framework">
      <div className={styles.prose}>
        <p className={styles.lead}>
          The Clarent Matrix is the client-facing framework used to organize thinking throughout the engagement.
        </p>
        <p className={styles.pullQuote}>
          The Matrix is simple by design. Its purpose is not complexity, but clarity.
        </p>
      </div>

      <div className={styles.matrixItems}>
        {items.map(item => (
          <div key={item.num} className={styles.matrixItem}>
            <span className={styles.matrixNum}>{item.num}</span>
            <div className={styles.matrixContent}>
              <p className={styles.matrixTitle}>{item.title}</p>
              <p className={styles.matrixDesc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
