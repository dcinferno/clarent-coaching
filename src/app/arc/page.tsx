import PageLayout from '@/components/PageLayout';
import styles from '../inner.module.css';

export const metadata = { title: 'The Arc — Clarent Coaching' };

export default function ArcPage() {
  return (
    <PageLayout eyebrow="The Arc" title="A 12-Session Engagement" ctaText="Begin the Conversation" ctaHref="/contact">
      <div className={styles.prose}>
        <p className={styles.lead}>
          The Clarent Arc is a structured 12-session coaching engagement designed to guide progression from exploration to decision.
        </p>
        <p>
          Each phase builds on the previous one. The purpose is not speed, but stability of clarity.
        </p>
      </div>

      <div className={styles.phases}>
        <div className={styles.phase}>
          <span className={styles.phaseTag}>Phase One · Sessions 1–4</span>
          <p className={styles.phaseTitle}>Discovery</p>
          <p className={styles.phaseDesc}>
            Establishes context and reveals how the situation is being interpreted. This phase surfaces the assumptions and framing that shape the client&apos;s current thinking.
          </p>
        </div>
        <div className={styles.phase}>
          <span className={styles.phaseTag}>Phase Two · Sessions 5–8</span>
          <p className={styles.phaseTitle}>Alignment</p>
          <p className={styles.phaseDesc}>
            Explores options and evaluates what fits. Real choices are identified and examined against the client&apos;s values, priorities, and direction.
          </p>
        </div>
        <div className={styles.phase}>
          <span className={styles.phaseTag}>Phase Three · Sessions 9–12</span>
          <p className={styles.phaseTitle}>Intention</p>
          <p className={styles.phaseDesc}>
            Integrates insight and supports clear decision-making. The client moves from understanding to ownership — choosing a direction with stability and confidence.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
