import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.arcBg}>
          <svg viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100,300 Q400,80 900,300 Q1100,400 1500,200" stroke="#6E7B8C" strokeWidth="1.5" fill="none" opacity="0.12" />
            <path d="M-100,400 Q500,150 1000,380 Q1200,460 1500,320" stroke="#6E7B8C" strokeWidth="1" fill="none" opacity="0.08" />
            <path d="M200,500 Q600,250 1100,450 Q1300,520 1500,400" stroke="#6E7B8C" strokeWidth="1" fill="none" opacity="0.06" />
          </svg>
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>Clarent Coaching</p>
            <h1>Strategic Clarity<br />with Intention</h1>
            <p className={styles.heroLead}>
              The Clarent Approach addresses the thinking patterns that often lead to decision fatigue and stalled forward movement.
            </p>
            <p className={styles.heroSecondary}>
              Clarent guides the process and provides the space where clarity can form through the client&apos;s own reasoning and reflection.
            </p>
            <Link href="/contact" className={styles.cta}>Schedule a Consultation</Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className={styles.section}>
        <div className={`container content-width`}>
          <div className={styles.centered}>
            <p className={styles.sectionLabel}>The Challenge</p>
            <p className={styles.largeCopy}>
              High-stakes decisions rarely fail because of a lack of intelligence or effort.<br />
              They stall when thinking becomes fragmented, overloaded, or misaligned.
            </p>
            <div className={styles.stanzas}>
              <p>Information expands.<br />Perspectives multiply.<br />Clarity becomes harder to reach.</p>
              <p>What follows is not inaction, but hesitation—<br />a cycle of overthinking, second-guessing, and delayed movement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider arc */}
      <div className={styles.arcDivider}>
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,20 Q600,0 1200,20" stroke="#6E7B8C" strokeWidth="1" fill="none" opacity="0.15" />
        </svg>
      </div>

      {/* Transition */}
      <section className={`${styles.section} ${styles.altBg}`}>
        <div className="container content-width">
          <div className={styles.centered}>
            <p className={styles.transitionCopy}>
              Clarity is not found through pressure or speed.<br />
              It forms when thinking becomes structured, aligned, and intentional.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className={styles.section}>
        <div className="container content-width">
          <p className={styles.sectionLabel}>The Approach</p>
          <h2 className={styles.sectionH2}>A Disciplined Process<br />for Complex Decisions</h2>
          <div className={styles.approachCopy}>
            <p>Clarent Coaching is built on a structured method that helps clients organize their thinking, evaluate their direction, and move forward with intention.</p>
            <div className={styles.notList}>
              <p>It is not advice.</p>
              <p>It is not consulting.</p>
              <p>It is not therapy.</p>
            </div>
            <p>It is a disciplined process that restores clarity through the client&apos;s own reasoning.</p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <p className={styles.sectionLabelCenter}>The System</p>
          <h2 className={styles.sectionH2Center}>Three Components</h2>
          <div className={styles.pillars}>
            <div className={styles.pillar}>
              <Link href="/arc" className={styles.pillarLink}>
                <span className={styles.pillarNumber}>01</span>
                <h3>The Arc</h3>
                <p>A structured 12-session engagement that guides progression from exploration to decision.</p>
                <span className={styles.pillarArrow}>→</span>
              </Link>
            </div>
            <div className={styles.pillar}>
              <Link href="/matrix" className={styles.pillarLink}>
                <span className={styles.pillarNumber}>02</span>
                <h3>The Matrix</h3>
                <p>A clear, client-facing framework that organizes thinking into practical steps.</p>
                <span className={styles.pillarArrow}>→</span>
              </Link>
            </div>
            <div className={styles.pillar}>
              <Link href="/method" className={styles.pillarLink}>
                <span className={styles.pillarNumber}>03</span>
                <h3>The Approach</h3>
                <p>A proprietary reasoning method guiding how clarity forms.</p>
                <span className={styles.pillarArrow}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className={styles.closingCta}>
        <div className={styles.arcBgSubtle}>
          <svg viewBox="0 0 1400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,150 Q700,50 1400,150" stroke="#6E7B8C" strokeWidth="1" fill="none" opacity="0.1" />
          </svg>
        </div>
        <div className="container content-width">
          <div className={styles.centered}>
            <p className={styles.closingCopy}>
              Clarity becomes possible when thinking is structured.<br />
              Forward movement becomes possible when clarity forms.
            </p>
            <Link href="/contact" className={styles.cta}>Begin the Conversation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
