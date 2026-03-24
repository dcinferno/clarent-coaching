'use client';
import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import styles from '../inner.module.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageLayout eyebrow="Contact" title="Begin the Conversation">
      <div className={styles.prose} style={{ marginBottom: '48px' }}>
        <p className={styles.lead}>Clarity begins with a conversation.</p>
        <p>Use the form below to schedule a consultation or ask a question. All inquiries are responded to within one business day.</p>
      </div>

      {submitted ? (
        <div style={{ padding: '48px 0', borderTop: '1px solid var(--divider)' }}>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: 'var(--text-primary)', marginBottom: '12px' }}>
            Thank you.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '17px', fontWeight: 300 }}>
            Your message has been received. You will hear back within one business day.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="name">Name</label>
            <input className={styles.formInput} id="name" type="text" placeholder="Your full name" required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="email">Email</label>
            <input className={styles.formInput} id="email" type="email" placeholder="your@email.com" required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="message">Brief Description</label>
            <textarea
              className={styles.formTextarea}
              id="message"
              rows={5}
              placeholder="Describe what you are navigating and what you are hoping to explore."
              required
            />
          </div>
          <button type="submit" className={styles.submitBtn}>Schedule a Consultation</button>
        </form>
      )}
    </PageLayout>
  );
}
