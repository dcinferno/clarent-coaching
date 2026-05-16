'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'What is Clarent?',
    a: 'A structured coaching approach for navigating consequential decisions under uncertainty.',
  },
  {
    q: 'What is the actual promise?',
    a: 'Movement toward clear decision-making, not guaranteed clarity.',
  },
  {
    q: 'How can movement occur before clarity?',
    a: 'Organized thinking creates enough stability to act and test direction in real time.',
  },
  {
    q: 'What if clarity does not emerge by the end of a Movement?',
    a: 'Progress still occurs: thinking organizes, direction strengthens, and movement develops.',
  },
  {
    q: 'What if clarity emerges early?',
    a: 'Remaining sessions test and reinforce the direction to ensure it remains coherent under real conditions.',
  },
  {
    q: 'Does Clarent remove uncertainty?',
    a: 'No. It builds structure that enables movement despite uncertainty.',
  },
  {
    q: 'Who benefits most?',
    a: 'Individuals navigating repeated decision loops, competing pressures, cognitive overload, or prolonged directional uncertainty.',
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
            <p style={{ margin: '0 0 24px', color: '#6F6A64', fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
