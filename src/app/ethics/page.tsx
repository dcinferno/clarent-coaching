import PageLayout from '@/components/PageLayout';
import styles from '../inner.module.css';

export const metadata = { title: 'Ethics — Clarent Coaching' };

const sections = [
  {
    title: 'Professional Boundaries',
    body: 'Clarent Coaching maintains a clear distinction from therapy, consulting, and advisory services. It is a structured coaching engagement focused on decision-making and forward movement.',
  },
  {
    title: 'Client Autonomy',
    body: 'Clients retain full ownership of all decisions. Clarent provides structure and space — not answers. No outcomes are guaranteed.',
  },
  {
    title: 'Confidentiality',
    body: 'Client information is protected and not shared. Conversations remain private to the coaching relationship.',
  },
  {
    title: 'AI Use',
    body: 'AI may be used to support language refinement and structured reflection using anonymized information. It is never used to evaluate or score clients.',
  },
  {
    title: 'No Recording Policy',
    body: 'Sessions are not recorded. This supports open, present, and authentic conversation.',
  },
];

export default function EthicsPage() {
  return (
    <PageLayout eyebrow="Ethics" title="How Clarent Operates">
      <div className={styles.prose}>
        <p className={styles.lead}>
          Clarent Coaching is built on a clear set of professional commitments that govern how every engagement is conducted.
        </p>
      </div>
      <div style={{ marginTop: '48px' }}>
        {sections.map(s => (
          <div key={s.title} className={styles.ethicBlock}>
            <span className={styles.label}>{s.title}</span>
            <p style={{ fontSize: '17px', fontWeight: 300, lineHeight: 1.7, color: 'var(--text-secondary)' }}>{s.body}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
