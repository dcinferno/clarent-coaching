import PageLayout from '@/components/PageLayout';
import styles from '../inner.module.css';

export const metadata = { title: 'FAQ — Clarent Coaching' };

const faqs = [
  {
    q: 'Do you guarantee clarity?',
    a: 'No. Clarity cannot be guaranteed. Clarent provides a structured environment where clarity can form through the client\'s own reasoning and engagement.',
  },
  {
    q: 'How is this different from therapy?',
    a: 'Clarent Coaching is focused on decision-making and forward movement, not emotional healing or clinical care. It is a coaching engagement, not a therapeutic one.',
  },
  {
    q: 'What if I reach clarity early?',
    a: 'Early clarity is explored and tested for stability before acting on it. Premature conclusions are a recognized pattern — the process is designed to ensure clarity is genuine.',
  },
  {
    q: 'What if I don\'t reach clarity in 12 sessions?',
    a: 'The process supports clarity formation, but timing varies. Some decisions require extended reflection. This is discussed openly during the engagement.',
  },
  {
    q: 'Is this coaching or consulting?',
    a: 'It is coaching. Clarent does not provide advice, recommendations, or prescribed answers. The work is done by the client — Clarent provides the structure.',
  },
];

export default function FAQPage() {
  return (
    <PageLayout eyebrow="FAQ" title="Frequently Asked Questions" ctaText="Schedule a Consultation" ctaHref="/contact">
      <div>
        {faqs.map(faq => (
          <div key={faq.q} className={styles.faqItem}>
            <p className={styles.faqQ}>{faq.q}</p>
            <p className={styles.faqA}>{faq.a}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
