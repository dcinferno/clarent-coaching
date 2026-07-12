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
            <p className={styles.subhead}>
              <em>Because life doesn&apos;t pause while you wait to decide.</em>
            </p>
            <p>
              Important decisions are often consequential. They carry weight, create pressure, and demand
              clarity that doesn&apos;t always arrive on its own. Clarent Coaching was created for these
              moments—when uncertainty is real, responsibilities are competing, and you need a structured
              way to work through what&apos;s in front of you.
            </p>
            <p>
              Consequential decisions can feel heavy. Responsibilities compete.<br />
              Uncertainty builds. Thinking gets overloaded.
            </p>
            <p>
              Clarent helps you build coherent understanding and establish direction that supports
              decision formation—even before everything is fully understood. Sometimes you just need
              enough cognitive space for the situation to come into focus.
            </p>
            <p className={styles.closingNote}>
              This is decision coaching: a disciplined way to create direction that you can act on
              with confidence in your own reasoning.
            </p>
            <p><strong>Investment: $900 per Movement</strong></p>
            <Link href="/contact" className={styles.button}>Begin the Conversation</Link>
          </div>
        </div>
        <ClarityArc />
      </section>

      {/* 2 — What Clarent Does */}
      <section id="about" className={`${styles.section} ${styles.bgTaupeLight}`}>
        <div className={styles.container}>
          <div className="stack">
            <h2>About Clarent Coaching</h2>
            <p>A Structured Approach to Important Decisions</p>
            <p>
              Clarent Coaching exists to help you work through important decisions when uncertainty,
              complexity, or competing responsibilities make movement difficult.
            </p>
            <p>
              Clarent works with anyone facing difficult, complex, and consequential uncertainty—a significant
              life pivot, a leadership decision, or an organizational obligation—because the concern is not
              the position, but the person.
            </p>
            <p className={styles.closingNote}>
              This is not motivational coaching.<br />
              This is not advice.
            </p>
            <p>
              This is structured decision coaching — a disciplined way to build coherent understanding
              and establish direction that supports decision formation—so cognitive clarity becomes
              the process outcome.
            </p>
            <Link href="#system" className={styles.button}>Explore the System</Link>
          </div>
        </div>
      </section>

      {/* 3 — Why Clarent Exists */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className="stack">
            <h2>Why Clarent Exists</h2>
            <p>
              When decisions carry weight, understanding doesn&apos;t always arrive on its own. You need a way
              to work through the situation without adding more noise or pressure.
            </p>
            <p>
              Many decisions involve competing priorities, incomplete information, and meaningful consequences.
              More information isn&apos;t always the answer. Often, what&apos;s needed is coherent understanding
              that can produce direction for the decision you&apos;re trying to form.
            </p>
            <p>Clarent creates an intentional space where you can:</p>
            <ul className={styles.bulletList}>
              <li>Examine your situation.</li>
              <li>Explore possibilities.</li>
              <li>Evaluate what holds up.</li>
              <li>Develop ownership of your reasoning.</li>
              <li>Form direction that supports decision formation.</li>
            </ul>
            <p className={styles.closingNote}>
              Cognitive clarity follows coherent understanding.<br />
              That clarity enables direction.<br />
              And direction supports movement.
            </p>
          </div>
        </div>
      </section>

      <ClarityArc />

      {/* 4 — System preview */}
      <section id="system" className={`${styles.section} ${styles.bgTaupeLight}`}>
        <div className={styles.container}>
          <div className="stack">
            <h2>The Clarent Coaching System™</h2>
            <p>
              A unified, structured method used in every Clarent Coaching engagement—combining a defined
              coaching journey with a cognitive framework for decision formation.
            </p>
            <div className={styles.principlesGrid}>
              <div>
                <h3>The Clarent Coaching Arc™</h3>
                <p>The journey structure: Orientation → Formation → Intention.</p>
              </div>
              <div>
                <h3>The Clarent Coaching Matrix™</h3>
                <p>The cognitive structure inside every session: the Cognitive Sequence™ and the Adaptive Logic™.</p>
              </div>
            </div>
            <p>
              Together, they create a systems‑based method for coherent understanding, directional
              decision formation, and intentional movement.
            </p>

            <div className={styles.systemComponent}>
              <h3>The Clarent Coaching Arc™</h3>
              <p>
                A three‑Movement coaching journey. Each Movement has four sessions that complete a stage
                in the process. You can stop or continue based on what you need.
              </p>
              <div className={styles.movementList}>
                <div className={styles.movementItem}>
                  <span className={styles.movementLabel}>Orientation</span>
                  <p>Build coherent understanding of what&apos;s happening, why it matters, and what needs to be worked through.</p>
                </div>
                <div className={styles.movementItem}>
                  <span className={styles.movementLabel}>Formation</span>
                  <p>Develop and test possibilities. Structure helps decision formation take shape.</p>
                </div>
                <div className={styles.movementItem}>
                  <span className={styles.movementLabel}>Intention</span>
                  <p>Establish direction. Disciplined thinking helps decisions fit your needs and responsibilities—producing cognitive clarity as the work completes.</p>
                </div>
              </div>
              <p>These three stages complete the Arc. Continuing simply deepens the work as decision formation becomes more solid.</p>
            </div>

            <div className={styles.systemComponent}>
              <h3>The Clarent Coaching Matrix™</h3>
              <p>The cognitive structure used inside every session. It consists of:</p>
              <ul className={styles.bulletList}>
                <li>The Cognitive Sequence™</li>
                <li>The Adaptive Logic™</li>
              </ul>
              <div className={styles.movementList}>
                <div className={styles.movementItem}>
                  <span className={styles.movementLabel}>The Cognitive Sequence™</span>
                  <p>A cognitive formation map that guides the conversation and keeps the work coherent.</p>
                </div>
                <div className={styles.movementItem}>
                  <span className={styles.movementLabel}>The Adaptive Logic™</span>
                  <p>An adaptive approach that processes the conversation in real time, protects the process, and maintains ethical boundaries.</p>
                </div>
              </div>
            </div>

            <div className={styles.systemComponent}>
              <h3>How the Arc and Matrix Work Together</h3>
              <ul className={styles.bulletList}>
                <li>The Arc structures the journey.</li>
                <li>The Sequence organizes the thinking.</li>
                <li>The Logic protects the process.</li>
              </ul>
              <p className={styles.closingNote}>
                Together, they create the Clarent Coaching System™ — a unified method for coherent
                understanding, directional decision formation, and intentional movement.
              </p>
            </div>

            <Link href="#founder" className={styles.button}>Meet Keith Graham</Link>
          </div>
        </div>
      </section>

      {/* 5 — About Keith Graham */}
      <section id="founder" className={styles.section}>
        <div className={styles.containerWide}>
          <div className={styles.founderGrid}>
            <div className="stack">
              <p className={styles.eyebrow}>About Keith Graham</p>
              <h2>Founder, Clarent Coaching</h2>
              <p>
                I founded Clarent Coaching after more than thirteen years of helping people navigate
                consequential decisions as a leader, coach, and mentor.
              </p>
              <p>
                Over time, I noticed a pattern: people often wait for complete clarity before moving
                forward. But movement doesn&apos;t require certainty. It begins when coherent understanding
                forms into direction that supports decision formation—producing cognitive clarity as
                the process unfolds.
              </p>
              <p>
                My graduate studies in Organizational Leadership, with a concentration in Coaching &amp;
                Mentoring at Regent University, shaped the method behind this work.
              </p>
              <p>
                Clarent grew out of that focus — a structured way to build coherent understanding,
                establish direction for decision formation, and move forward without waiting for
                perfect clarity.
              </p>
              <p className={styles.founderByline}>
                Keith Graham<br />
                Founder, Clarent Coaching<br />
                Master of Arts in Organizational Leadership<br />
                Coaching &amp; Mentoring Concentration<br />
                Regent University
              </p>
            </div>
            <div className={styles.founderImageSlot} />
          </div>
        </div>
      </section>

      {/* 6 — FAQ */}
      <section id="faq" className={styles.section}>
        <div className={styles.container}>
          <div className="stack">
            <h2>FAQ</h2>
            <p>Common Questions</p>
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* 7 — Ethics */}
      <section id="ethics" className={`${styles.section} ${styles.bgTaupeLight}`}>
        <div className={styles.container}>
          <div className="stack">
            <h2>Ethics</h2>
            <p>Professional Standards</p>
            <p>
              Clarent operates within a professional coaching framework grounded in neutrality,
              confidentiality, and autonomy.
            </p>
            <ul className={styles.bulletList}>
              <li><strong>Neutrality:</strong> Your decisions remain yours.</li>
              <li><strong>Confidentiality:</strong> Sessions are private.</li>
              <li><strong>Autonomy:</strong> You retain responsibility for decisions, actions, and results.</li>
            </ul>
            <p>
              Clarent supports responsible decision development. It does not replace therapy, legal
              counsel, financial advising, or crisis intervention.
            </p>
          </div>
        </div>
      </section>

      {/* 8 — Privacy + AI Use */}
      <section id="privacy" className={styles.section}>
        <div className={styles.container}>
          <div className="stack">
            <h2>Privacy + AI Use</h2>
            <p>Minimal‑Record Philosophy</p>
            <p>
              Clarent maintains a minimal‑record philosophy. Sessions are not recorded, and only
              essential scheduling information is retained.
            </p>
            <p>
              Limited AI tools may be used after sessions to organize anonymized coaching reflections
              into clearer written prompts or summaries. AI is not used to coach, make decisions, or
              replace professional judgment.
            </p>
            <p>Your identity, decisions, and session content are not stored in AI systems.</p>
          </div>
        </div>
      </section>

      <ClarityArc />

      {/* 9 — Final CTA */}
      <section id="begin" className={`${styles.section} ${styles.bgSlate}`}>
        <div className={styles.container}>
          <div className="stack">
            <h2 className={styles.whiteText}>Begin with a Conversation</h2>
            <h3 className={styles.whiteText}>Schedule a Fee-Free, No-Obligation Discovery Session</h3>
            <p className={styles.dimText}>
              A conversation to determine whether the Clarent Approach is appropriate for the work being navigated.
            </p>
            <p className={styles.dimText}>There is no pressure to continue.</p>
            <Link href="/contact" className={styles.buttonLight}>Schedule a Discovery Session</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
