'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'Is Clarent a course or curriculum?',
    a: 'No.\nClarent provides structure, but it does not follow a predetermined curriculum or teach a prescribed set of lessons.\n\nThe structure remains consistent. The content is shaped by the situation you bring.',
  },
  {
    q: 'Are the Clarent Cognitive Sequence™ and Adaptive Logic™ a formula?',
    a: 'No.\nThey provide structure for the coaching conversation, but they do not prescribe conclusions or outcomes.\nThe framework remains consistent while the work adapts to the person and situation.',
  },
  {
    q: 'Why does the Clarent Coaching Arc™ consist of three Movements?',
    a: 'People arrive at understanding and direction at different rates.\n\nAt the end of each Movement, you decide whether to conclude the work or continue the conversation.',
  },
  {
    q: 'What if I have the answers I need before a Movement is complete?',
    a: 'The remaining sessions can be used to strengthen, examine, and support the direction that has emerged.',
  },
  {
    q: 'What happens if I do not have the answers I need after a Movement is complete?',
    a: 'Some decisions require more time than others.\nAt the end of each Movement, you decide whether continuing the conversation serves your needs.',
  },
  {
    q: 'Is there a payment plan?',
    a: 'Each Movement is paid in full before the first session begins.',
  },
  {
    q: 'What if I cannot meet weekly or bi‑weekly?',
    a: 'Sessions can be arranged in a way that reasonably fits your circumstances.',
  },
  {
    q: 'What is the refund policy?',
    a: 'Payments are generally non‑refundable once a Movement has been purchased. Additional details are provided in the Coaching Agreement.',
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
