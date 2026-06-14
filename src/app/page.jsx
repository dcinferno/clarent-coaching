import Link from 'next/link';
import ClarityArc from '@/components/ClarityArc';
import FAQAccordion from '@/components/FAQAccordion';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>

      {/* 1 — Hero */}
      <section className={`${styles.section} ${styles.hero}`}>
        <div className={styles.heroInner}>
          <div className="stack">
            <h1>Clear Thinking for Complex Decisions</h1>
            <p>
              Some decisions carry tremendous weight.<br />
              The stakes are higher.<br />
              Uncertainty lingers.
            </p>
            <p>
              Responsibilities compete for attention.<br />
              Thinking becomes overloaded.<br />
              Important decisions begin to stall.
            </p>
            <p>
              You may feel pulled between responsibilities, possibilities, and expectations.
              You know something needs to change, even if the next step isn't obvious.
            </p>
            <p>
              Clarent provides a structured way to make sense of what is in front of you so direction can begin
              to form—even before you have all the answers.
            </p>
            <p className={styles.closingNote}>
              This is Decision Coaching: a disciplined way to untangle complexity, clarify priorities,
              and move forward with confidence in your own reasoning.
            </p>
            <p>
              This is not about receiving advice or being told what to do. It is a professional coaching practice
              designed to help you think with greater structure, ownership, and purpose.
            </p>
            <Link href="/contact" className={styles.button}>Begin the Conversation</Link>
          </div>
        </div>
        <ClarityArc />
      </section>

      {/* 2 — Begin CTA */}
      <section className={`${styles.section} ${styles.bgTaupeLight}`}>
        <div className={styles.container}>
          <div className="stack">
            <h2>Begin the Conversation</h2>
            <h3>Schedule a Fee-Free, No-Obligation Discovery Session</h3>
            <p>
              A conversation to determine whether the Clarent Approach is appropriate for the work being navigated.
            </p>
            <Link href="/contact" className={styles.button}>Start a Clarity Consultation</Link>
          </div>
        </div>
      </section>

      {/* 3 — Core Problem */}
      <section id="approach" className={styles.section}>
        <div className={styles.container}>
          <div className="stack">
            <h2>The Core Problem</h2>
            <p>Modern decision environments generate continuous cognitive pressure.</p>
            <p>Over time, three recognizable conditions often emerge:</p>
            <div className={styles.problemBlocks}>
              <div>
                <h3>Decision Fog</h3>
                <p>When priorities lose shape and the situation becomes difficult to interpret.</p>
              </div>
              <div>
                <h3>Decision Fatigue</h3>
                <p>When the weight of choices grows heavier and progress slows.</p>
              </div>
              <div>
                <h3>Decision Stall</h3>
                <p>When forward movement becomes difficult because clarity has not yet formed.</p>
              </div>
            </div>
            <p className={styles.closingNote}>
              These conditions are not failures of intelligence or capability.<br />
              They are predictable responses to prolonged complexity and uncertainty.
            </p>
            <p>
              Clarent exists to restore structure where thinking has become fragmented, overloaded, or stalled.
            </p>
          </div>
        </div>
      </section>

      <ClarityArc />

      {/* 4 — What Clarent Is */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className="stack">
            <h2>What Clarent Is</h2>
            <p>
              Clarent Coaching supports people navigating important decisions under uncertainty, complexity, or change.
            </p>
            <p>
              Many decisions involve competing priorities, incomplete information, and meaningful consequences.
              In those moments, more information is not always the solution. Often, what is needed is a structured
              way to think.
            </p>
            <p>Clarent provides an intentional space to process your thinking.</p>
            <p>Together, we:</p>
            <ul className={styles.bulletList}>
              <li>Examine your situation deeply.</li>
              <li>Explore possibilities without pressure.</li>
              <li>Evaluate what holds up under reflection.</li>
              <li>Develop ownership of your understanding.</li>
              <li>Form direction with confidence in your own reasoning.</li>
            </ul>
            <p className={styles.closingNote}>
              The goal is to create clear thinking — clear enough to move you forward — even without having all the answers.
            </p>
          </div>
        </div>
      </section>

      <ClarityArc />

      {/* 5 — The Clarent Difference */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className="stack">
            <h2>The Clarent Difference</h2>
            <p>When we face difficult and complex decisions, we naturally search for clarity.</p>
            <p>It feels like the thing we need before we can move forward.</p>
            <p>But what if clarity is not the beginning?</p>
            <p>What if clear thinking comes first?</p>
            <p>
              What if movement begins when our thinking becomes more coherent, and clarity develops
              as direction starts to take shape?
            </p>
            <p className={styles.closingNote}>That is the Clarent way.</p>
          </div>
        </div>
      </section>

      <ClarityArc />

      {/* 6 — Who Clarent Serves */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className="stack">
            <h2>How Clarent Serves You</h2>
            <p>
              <strong>Clarent is for anyone navigating significant, complex, or difficult decisions</strong>—life transitions,
              career changes, high‑stakes choices, or moments when the next step is unclear.
            </p>
            <p>
              It is not limited to a profession, role, or life stage.<br />
              It is for people who value structure, thoughtful examination, intentional exploration, and purposeful movement.
            </p>
          </div>
        </div>
      </section>

      <ClarityArc />

      {/* 6 — Operating Principles */}
      <section className={`${styles.section} ${styles.bgTaupeLight}`}>
        <div className={styles.containerWide}>
          <div className="stack">
            <p className={styles.principlesIntro}>Clarent is grounded in three commitments:</p>
            <div className={styles.principlesGrid}>
              <div>
                <h3>Structure over pressure</h3>
                <p>Direction emerges from organized thinking, not urgency.</p>
              </div>
              <div>
                <h3>Progress over certainty</h3>
                <p>Movement can begin before clarity fully forms.</p>
              </div>
              <div>
                <h3>Ownership over prescription</h3>
                <p>Responsibility remains with the decision-maker.</p>
              </div>
            </div>
            <p className={styles.principlesClose}>These principles shape the entire system.</p>
          </div>
        </div>
      </section>

      {/* 7 — How Clarent Works */}
      <section id="system" className={styles.section}>
        <div className={styles.container}>
          <div className="stack">
            <h2>How Clarent Works</h2>
            <p>
              Clarent combines a defined coaching journey with a decision‑formation process that can support
              how you naturally think, decide, and move through complexity with direction.
            </p>

            <div className={styles.systemComponent}>
              <h3>The Clarent Coaching Arc™</h3>
              <p>The Arc provides the overall journey:</p>
              <div className={styles.movementList}>
                <div className={styles.movementItem}>
                  <span className={styles.movementLabel}>Orientation</span>
                  <p>Builds understanding of your situation.</p>
                </div>
                <div className={styles.movementItem}>
                  <span className={styles.movementLabel}>Formation</span>
                  <p>Develops possibilities, evaluates considerations, and strengthens ownership.</p>
                </div>
                <div className={styles.movementItem}>
                  <span className={styles.movementLabel}>Intention</span>
                  <p>Supports direction and the movement that follows.</p>
                </div>
              </div>
              <p>Each stage builds on the last, creating a structured path toward purposeful movement.</p>
              <p className={styles.sequenceFlow}>Orientation → Formation → Intention</p>
            </div>

            <div className={styles.systemComponent}>
              <h3>The Clarent Cognitive Sequence™</h3>
              <p>The Cognitive Sequence is your thinking map that guides our conversation:</p>
              <p className={styles.sequenceFlow}>Situation → Exploration → Evaluation → Ownership → Direction</p>
              <ul className={styles.bulletList}>
                <li><strong>Situation</strong> clarifies what is happening and why it matters.</li>
                <li><strong>Exploration</strong> examines possibilities, perspectives, and alternatives.</li>
                <li><strong>Evaluation</strong> identifies what holds up under reflection.</li>
                <li><strong>Ownership</strong> strengthens commitment to your understanding.</li>
                <li><strong>Direction</strong> identifies the path you are prepared to pursue.</li>
              </ul>
              <p>
                The Sequence does not require certainty.<br />
                It provides structure so direction can emerge before the full picture is available.
              </p>
            </div>

            <div className={styles.systemComponent}>
              <h3>The Clarent Adaptive Logic™</h3>
              <p>The Adaptive Logic is how Clarent supports the conversation and guards the integrity of the process.</p>
              <p className={styles.closingNote}>
                The Sequence is your map.<br />
                The Logic is Clarent&apos;s.
              </p>
              <p>
                It organizes complex considerations so understanding becomes more coherent and aligned
                over time, even when the situation feels circular.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 — Mid CTA */}
      <section className={`${styles.section} ${styles.bgTaupe}`}>
        <div className={styles.container}>
          <div className="stack">
            <h2>The Structure Becomes Clearer in Conversation</h2>
            <p>
              The Clarent System is designed to support organized reasoning in environments where complexity
              has disrupted directional movement.
            </p>
            <p>
              The Discovery Session introduces the structure of the engagement and helps determine whether the
              work is appropriate for the situation being navigated.
            </p>
            <Link href="/contact" className={styles.button}>Begin the Conversation</Link>
          </div>
        </div>
      </section>

      {/* 8 — What Clarent Does */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className="stack">
            <h2>What Clarent Does</h2>
            <p>
              Clarent reduces cognitive overload, organizes competing considerations, and supports the development
              of direction that can withstand pressure and uncertainty.
            </p>
            <p>The work supports:</p>
            <ul className={styles.list}>
              <li>Greater cognitive organization</li>
              <li>Reduced mental noise</li>
              <li>Directional coherence</li>
              <li>Increased confidence in forward movement</li>
              <li>Clearer understanding of what matters</li>
              <li>Decisions that remain coherent under real conditions</li>
            </ul>
            <p className={styles.closingNote}>
              Clarent does not remove uncertainty.<br />
              It builds the structure required to move through it.
            </p>
          </div>
        </div>
      </section>

      {/* 9 — What Clarent Is Not */}
      <section className={`${styles.section} ${styles.bgTaupeLight}`}>
        <div className={styles.container}>
          <div className="stack">
            <h2>What Clarent Is Not</h2>
            <p>
              Clarent is not therapy, crisis intervention, legal counsel, financial advising, or motivational coaching.
            </p>
            <p>The work does not prescribe decisions or guarantee outcomes.</p>
            <p>
              It supports a disciplined process that enables thinking to become clearer, steadier, and more
              coherent over time.
            </p>
          </div>
        </div>
      </section>

      {/* 10 — Who Benefits */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className="stack">
            <h2>Who Benefits Most</h2>
            <p>
              Clarent is designed for individuals navigating prolonged uncertainty, repeated decision loops,
              competing obligations, or mental exhaustion that disrupts directional movement.
            </p>
            <p>
              The approach is particularly suited for environments where clarity is incomplete, stakes are
              meaningful, and forward movement is necessary.
            </p>
          </div>
        </div>
      </section>

      {/* 11 — Engagement Structure */}
      <section className={`${styles.section} ${styles.bgTaupeLight}`}>
        <div className={styles.container}>
          <div className="stack">
            <h2>Your Investment</h2>
            <h3>$900 per Movement</h3>
            <p>Four sessions. No hidden fees. No upsells. No long-term commitment.</p>
            <p>Sessions are typically weekly or bi-weekly and last about 60 minutes.</p>
            <p>Each Movement stands alone; additional Movements deepen the work.</p>
          </div>
        </div>
      </section>

      {/* 13 — Ethics */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className="stack">
            <h2>Ethics and Professional Standards</h2>
            <p>
              Clarent operates within a professional coaching framework grounded in neutrality,
              confidentiality, and autonomy.
            </p>
            <p>
              The work supports responsible decision development without imposing beliefs or agendas.
            </p>
            <p>
              Responsibility for decisions, actions, and outcomes remains with the decision-maker.
            </p>
            <Link href="/ethics" className={styles.textLink}>Read the full Ethics statement →</Link>
          </div>
        </div>
      </section>

      {/* 13 — Privacy */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className="stack">
            <h2>Privacy and AI Use</h2>
            <p>
              Clarent maintains a minimal-record philosophy designed to protect privacy and reduce unnecessary
              data retention.
            </p>
            <p>Sessions are not recorded.</p>
            <p>
              Limited AI tools may be used after sessions to help organize anonymized coaching reflections into
              clearer written prompts or summaries. AI is not used to make decisions, conduct coaching independently,
              or replace professional judgment.
            </p>
          </div>
        </div>
      </section>

      {/* 14 — Founder */}
      <section id="founder" className={styles.section}>
        <div className={styles.containerWide}>
          <div className={styles.founderGrid}>
            <div className="stack">
              <p className={styles.eyebrow}>Founder</p>
              <h2>Keith Graham</h2>
              <p>
                After years of working with, and coaching people in organizational settings, I noticed a pattern:
                the more important the decision, the longer people waited for complete clarity.
              </p>
              <p>Over time, I came to a different understanding.</p>
              <p className={styles.closingNote}>
                Movement doesn&apos;t require certainty.<br />
                It requires thinking clearly enough for direction to begin to form—even when the full picture isn&apos;t available.
              </p>
              <p>That realization became the starting point for Clarent.</p>
              <p>
                My approach is shaped by leadership experience and graduate studies in Organizational Leadership
                with a concentration in Coaching &amp; Mentoring.
              </p>
              <p>
                I became increasingly focused on how people navigate important decisions when uncertainty remains
                and complexity cannot be removed.
              </p>
              <p>
                Clarent grew out of that focus—a structured way to think more clearly, form decisions with intention,
                and move forward without waiting for perfect certainty.
              </p>
              <p className={styles.founderByline}>
                Keith Graham<br />
                Founder, Clarent Coaching<br />
                Master of Arts in Organizational Leadership<br />
                Coaching &amp; Mentoring Concentration<br />
                Regent University
              </p>
            </div>
            {/* Drop /public/founder.jpg to populate this slot */}
            <div className={styles.founderImageSlot} />
          </div>
        </div>
      </section>

      {/* 15 — FAQ */}
      <section id="faq" className={styles.section}>
        <div className={styles.container}>
          <div className="stack">
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* 16 — Final CTA */}
      <section id="begin" className={`${styles.section} ${styles.bgSlate}`}>
        <div className={styles.container}>
          <div className="stack">
            <h2 className={styles.whiteText}>Begin with a Conversation</h2>
            <h3 className={styles.whiteText}>Schedule a Fee-Free, No-Obligation Discovery Session</h3>
            <p className={styles.dimText}>
              A conversation to determine whether the Clarent Approach is appropriate for the work being navigated.
            </p>
            <p className={styles.dimText}>There is no pressure to continue.</p>
            <p className={styles.dimText}>
              The purpose of the conversation is simply to determine whether the work is aligned with the
              situation at hand.
            </p>
            <Link href="/contact" className={styles.buttonLight}>Schedule a Discovery Session</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
