'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const navItems = [['About','#about'],['System','#system'],['Coach','#coach'],['Ethics','#ethics'],['FAQ','#faq'],['Book','#book']];

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 880) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Clarent Coaching home"><span className="brand-name">Clarent Coaching</span><span className="brand-tag">Clear Thinking for Complex Decisions</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
      <a className="header-cta" href="#book">Book a Discovery Session</a>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setOpen(v => !v)}><span /><span /><span /></button>
      {open && <div id="mobile-navigation" className="mobile-nav">{navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="mobile-cta" href="#book" onClick={() => setOpen(false)}>Book a Discovery Session</a></div>}
    </header>
  );
}

function Definition({ title, children }) {
  return <aside className="definition-card"><p className="eyebrow">{title}</p><div>{children}</div></aside>;
}

function Section({ id, eyebrow, title, children, className = '' }) {
  return <section id={id} className={`content-section ${className}`.trim()}><div className="section-inner">{eyebrow && <p className="eyebrow">{eyebrow}</p>}{title && <h2>{title}</h2>}{children}</div></section>;
}

export default function Home() {
  const faqs = [
    ['Was Clarent designed for leaders and executives?', <>No. Clarent is decision coaching—not executive or leadership coaching.<br /><br />It is for any adult facing a difficult decision.<br /><br />Cognitive Formation is not tied to a profession, title, or role. It is not about the kind of decision you need to make. It is about developing the organized thinking needed to form a direction that is workable, makes sense, and can hold even without having all the answers.</>],
    ['Are sessions online or in person?', <>Clarent Coaching is offered online through Zoom.</>],
    ['How can I know if Clarent is right for me?', <>The Free Discovery Session allows you to experience the approach and determine whether it fits your situation.</>],
    ['Why are there no payment plans?', <>Clarent keeps the financial side straightforward. Payment plans can shift attention away from the work and make the relationship feel transactional.</>],
    ['Is there a refund policy?', <>There are no general refunds.<br /><br />If Clarent cannot continue coaching because of a legal or ethical circumstance, a prorated refund is provided for sessions that have been paid for but have not yet begun.</>],
    ['What if I do not find clarity?', <>Clarity is not guaranteed.<br /><br />The Clarent Approach supports the development of organized thinking so you can form a direction that makes sense and is usable, even when your understanding remains incomplete.</>],
    ['Why are there no testimonials?', <>Every engagement is different. Testimonials can create expectations that another person’s experience will be yours.<br /><br />Clarent prefers to let its approach and standards speak for themselves.</>]
  ];

  return (
    <main id="top">
      <Header />
      <section className="hero"><div className="hero-photo" aria-hidden="true"><Image src="/header_desktop.png" alt="" fill priority sizes="100vw" className="hero-photo-desktop" /><Image src="/header_mobile.png" alt="" fill priority sizes="100vw" className="hero-photo-mobile" /></div><div className="hero-grid"><div className="hero-copy"><p className="eyebrow">Professional Decision Coaching</p><h1>Clear Thinking for <span>Complex Decisions.</span></h1><p className="hero-subhead">Because decisions cannot always wait for clarity.</p><div className="hero-actions"><a className="button primary" href="#book">Book a Free Discovery Session</a><a className="text-link" href="#about">Learn more <span>→</span></a></div></div></div></section>
      <section className="orientation-strip" aria-label="Clarent orientation"><div><strong>Organize</strong><span>Reduce mental noise.</span></div><div><strong>Examine</strong><span>Understand what matters.</span></div><div><strong>Evaluate</strong><span>Test what emerges.</span></div><div><strong>Form</strong><span>Develop usable direction.</span></div></section>

      <Section id="about" eyebrow="About Clarent" title="The Practice">
        <div className="prose narrow">
          <p className="lead">Clarent is a professional decision coaching practice for situations where competing realities, significant consequences, or long-range commitments create stalled thinking.</p>
          <p>It is for any adult facing a difficult decision—not a particular profession, title, or role.</p>
          <p>The stakes are high, the options are difficult to process, and the way forward is unclear. Thinking can become diffuse, fatigue can set in, and progress can stagnate. That also leads to increased stress that may repeat the cycle.</p>
          <p>Clarent specializes in <strong>Cognitive Formation</strong>—the development of organized thinking that precedes and supports decision-making.</p>
          <p>This setting allows you to examine your situation, identify what matters, and develop a direction that is usable. Clarent does not make decisions for you or direct you toward a predetermined outcome. Your decisions remain yours.</p>
          <p>Clarent is not therapy, performance coaching, or motivational coaching. It supports the development of organized reasoning as you work through consequential decisions.</p>
        </div>
        <div className="subsection"><p className="eyebrow">Who Clarent Is For</p><p className="prose narrow">Clarent is suited to circumstances such as:</p><div className="situation-grid">{['Major life pivots','Competing responsibilities','Leadership obligations at odds','Values constrained by conditions','Complex relationship decisions','Long-term commitments'].map(item => <div key={item}>{item}</div>)}</div><p className="centered-statement">The focus is not on the person’s role, but on the person with that role.</p></div>
        <Definition title="Cognitive Formation — How Clarent Uses the Term"><p>Cognitive Formation is the development of organized reasoning that allows a decision to take shape, even when the situation remains incomplete.</p></Definition>
        <div className="subsection prose narrow"><p className="eyebrow">The Philosophy</p><p>Clarent does not treat decision-making as a search for a pre-existing answer. Decisions develop through examining the situation, processing what matters, and taking ownership of a direction.</p><p>Clarity may develop through this work, but it is not required at the beginning. You can begin with incomplete understanding and still form a direction that is usable.</p></div>
        <div className="definition-grid single-definition"><Definition title="Clarity — How Clarent Defines It"><p>In Clarent’s practice, clarity is cognitive. Not motivational or inspirational.</p><p>Clarity is the full cognitive understanding of a situation that can produce certainty of decision, even without certainty of outcome.</p></Definition></div>
        <div className="subsection name-block"><p className="eyebrow">Why the Name</p><h3>Clarent <span>(adj.)</span></h3><p>Root: <em>Clarus</em> (Latin) — clear, distinct, bright.</p><p>As in:</p><blockquote>“clear thinking that cuts through mental noise, revealing a viable path for positive movement to occur.”</blockquote></div>
      </Section>

      <Section id="system" eyebrow="Clarent Coaching System™" title="Structured but not rigid; defined but not prescriptive." className="tinted">
        <div className="prose narrow intro-copy"><p>The Clarent System mirrors how people actually work through consequential decisions.</p><p>The System has three parts—Arc, Sequence, and Logic—and each part plays a distinct role in how organized thinking develops.</p></div>
        <article className="system-feature prose"><span className="system-index">01</span><h3>Arc — The 12-Session Journey</h3><p>Arc is the 12-session journey that reflects the natural progression of decision formation. It is not a 12-step program. It is a structured path that mirrors how thinking moves from scattered to usable.</p><p>Arc has three Movements. Each corresponds to a core part of how people work through forming a decision.</p><p>The Movements are not arbitrary. They map directly onto the cognitive progression people go through when they are trying to understand their situation, determine what matters, and form a direction.</p><p>Throughout the Arc, Sequence and Logic provide the consistent structure used to navigate the work. They keep the coach from improvising or drifting and support intentional movement from the first session onward.</p><p>Sequence organizes the conversation. Logic keeps it honest, oriented, and grounded.</p><p>Arc also accounts for decision complexity. Some people reach a workable position sooner; others need the full Arc. The structure supports both without forcing a predetermined timeline.</p><p>Arc is not a curriculum, course, or program. It is a way to maximize the time and efforts of busy people. It has a defined beginning and end, avoids open-ended coaching, and still allows the client freedom to examine and evaluate their situation as they find helpful.</p><p className="pullquote">The structure holds the work without restricting thought.</p><p>The coach creates the thinking space, supports examination without letting the work get lost, and helps the client form direction through the progression.</p><p><strong>The System does the work; the coach guides the movement.</strong></p></article>
        <div className="system-cards two-cards"><article><span className="system-index">02</span><h3>Sequence</h3><p className="card-kicker">The Cognitive Map</p><p>Sequence is the order in which the coaching conversation unfolds.</p><p>It examines the situation, identifies what matters, evaluates what emerges, and develops a direction you can use.</p><p>Sequence keeps the work from becoming circular or diffuse.</p></article><article><span className="system-index">03</span><h3>Logic</h3><p className="card-kicker">The Adaptive Compass</p><p>Logic tracks the conversation to keep it honest, ethical, and oriented.</p><p>It creates reset points to prevent drift, supports coherent understanding, and helps orient the work toward movement.</p><p>Logic keeps the progression grounded and prevents momentum from replacing thought.</p></article></div>
        <div className="subsection"><p className="eyebrow">How They Work Together</p><div className="system-summary"><p><strong>Arc</strong> provides the structure.</p><p><strong>Sequence</strong> organizes the work.</p><p><strong>Logic</strong> keeps it oriented.</p></div><p className="prose narrow">Together, they support the development of organized thinking in real time.</p></div>
      </Section>

      <Section id="coach" eyebrow="Coach" title="About the Coach"><div className="coach-grid"><div className="prose"><p>For nearly two decades as an organizational leader, one of my responsibilities was coaching people through consequential decisions.</p><p>A consistent pattern emerged: when the stakes are high, people often wait for clarity before choosing a direction.</p><p>But life does not pause while we try to find clarity first. Working to form usable understanding for a decision is often more productive than waiting to find it.</p><p>Think of it like a puzzle. If you cannot find the box top, you can keep searching, or you can begin with what you have.</p><div className="puzzle-steps"><span>Set the edges.</span><span>Sort the remaining pieces.</span><span>Test what fits, lock the match in place.</span></div><p>The picture—coherent understanding—forms as we work forward, one piece at a time.</p><p>That observation led to the Clarent Coaching System—a method for developing the thinking that allows a decision to take shape.</p><p>I coach with cognitive empathy because complex decisions affect more than reasoning. They also affect how we see ourselves and the people involved.</p></div><aside className="coach-card"><Image className="founder-portrait" src="/keith-graham-founder.png" alt="Keith Graham, founder of Clarent Coaching" width={1138} height={1382} /><h3>Keith Graham</h3><p>Founder</p><hr /><p>Master of Arts in Organizational Leadership</p><p>Graduate Studies in Coaching &amp; Mentoring</p><p>Regent University</p></aside></div></Section>

      <Section id="ethics" eyebrow="Ethics & Standards" title="Your decisions remain yours." className="tinted"><div className="ethics-grid"><article><h3>Neutrality</h3><p>Your decisions remain yours.</p></article><article><h3>Confidentiality</h3><p>Sessions are private.</p></article><article><h3>Autonomy</h3><p>You retain authority over your decisions and responsibility for their consequences.</p></article></div><div className="prose narrow ethics-copy"><p>Clarent does not replace therapy, legal counsel, financial advising, or crisis intervention.</p></div><div className="privacy-panel"><div><p className="eyebrow">Privacy</p><h3>Minimal-Record Philosophy</h3></div><div className="prose"><p>Clarent does not retain session notes for marketing, research, aggregate data collection, or other secondary uses.</p><p>Sessions are never recorded.</p><p>The only session records retained are written materials sent directly to the client. These records do not include unnecessary personal identifying details.</p><p>Only essential administrative and scheduling information is otherwise retained.</p><h4>AI Usage</h4><p>AI use is limited to organizing and improving the readability of the practitioner’s anonymized working material.</p><p>Personal identifying information is not included when AI tools are used.</p><p>AI does not participate in coaching, make decisions, evaluate clients, or replace professional judgment. Clarent does not use client-session information to build marketing databases, conduct research, or create aggregate client datasets.</p></div></div></Section>

      <Section id="faq" eyebrow="FAQs" title="Questions before you begin"><div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></Section>

      <Section id="book" eyebrow="Investment" title="$900 per Movement" className="book-section"><div className="book-grid"><div><p>Your commitment is one Movement at a time. There is no requirement to complete all.</p><p>No tiers.<br />No upsells.<br />No add-ons.</p></div><div><p className="eyebrow">Book</p><h3>Book a Free Discovery Session</h3><p className="book-closing">Experience Clarent, then decide.</p><p>Begin with a Free Discovery Session. Continue only if Clarent is the right fit.</p><a className="button primary" href="mailto:hello@clarentcoaching.com?subject=Discovery%20Session">Book a Free Discovery Session</a></div></div></Section>

      <footer><div><strong>Clarent Coaching™</strong><span>Professional Decision Coaching.</span></div><div className="footer-right"><span>Online via Zoom • By appointment only</span><span>© 2026 Clarent Coaching. All rights reserved. · <a href="https://www.clarentcoaching.com/terms">Terms</a></span></div></footer>
    </main>
  );
}
