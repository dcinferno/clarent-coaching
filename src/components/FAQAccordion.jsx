'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'What kind of client does Clarent serve?',
    a: 'Clarent is for anyone wrestling with, or bogged in, a complex, difficult, or overwhelming decision. That includes those in leadership, and those who aren\'t. Decision difficulty is universal. Clarent works from that understanding.',
  },
  {
    q: 'How are sessions conducted?',
    a: 'Coaching sessions are currently offered through video call only.',
  },
  {
    q: 'Why is there no payment plan?',
    a: 'Clarent keeps the focus on the work. Payment plans can shift attention away from the coaching itself, so Clarent chooses not to use them.',
  },
  {
    q: 'Is there a refund?',
    a: 'Clarent does not offer refunds, except when service cannot continue for legal or operational reasons. In those cases, a refund can be issued for paid sessions not yet started.',
  },
  {
    q: 'What if I have a decision that needs quick resolution?',
    a: 'Clarent\'s work is iterative and intentionally thorough. There are no quick fixes for complex decisions. The work starts with building coherent understanding so direction can support decision formation—and cognitive clarity can follow from that process.',
  },
  {
    q: 'How long is a session, and how rigid is the conversation?',
    a: 'Sessions are approximately an hour long. The structure is flexible enough to account for your cognitive load while still keeping the work focused.',
  },
  {
    q: 'How will I know if I got what I paid for?',
    a: 'Clarent makes no guarantees about results. What you\'re paying for is a structured environment where coherent understanding can form and direction can support decision formation—so cognitive clarity becomes the outcome of disciplined work. The reasoning you develop isn\'t just "yours" — it\'s reasoning that fits your needs, holds up under pressure, and gives you something you can genuinely work with.',
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ borderTop: '1px solid #E5E2DD' }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: '1px solid #E5E2DD' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            style={{
              width: '100%',
              textAlign: 'left',
              background: 'none',
              border: 'none',
              padding: '24px 0',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              fontFamily: 'inherit',
            }}
          >
            <span style={{ fontSize: '1.0625rem', fontWeight: 500, color: '#1F2933', lineHeight: 1.35 }}>
              {faq.q}
            </span>
            <span style={{ color: '#3F5368', fontSize: '20px', lineHeight: 1, flexShrink: 0, fontWeight: 300 }}>
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <div style={{ margin: '0 0 24px', color: '#6F6A64', fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {faq.a.split('\n\n').map((block, bi) => (
                <p key={bi} style={{ margin: bi > 0 ? '12px 0 0' : '0', whiteSpace: 'pre-line' }}>
                  {block}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
