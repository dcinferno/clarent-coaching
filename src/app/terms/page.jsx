import PageLayout from '@/components/PageLayout';
import styles from '../inner.module.css';

export default function TermsPage() {
  return (
    <PageLayout eyebrow="Legal" title="Terms of Use">
      <div className={styles.prose}>

        <p className={styles.lead}>
          By using this website, you agree to the following terms. Please read them carefully.
        </p>

        <h3>1. Acceptance of Terms</h3>
        <p>
          By using this website, visitors agree to these terms. Continued use of the site constitutes
          acceptance of any updates posted here.
        </p>

        <h3>2. Informational Purpose</h3>
        <p>
          This website provides general information about Clarent Coaching and its services. Information
          on this site is not individualized coaching unless a coaching engagement has been formally
          established between Clarent and the visitor.
        </p>

        <h3>3. No Professional Advice</h3>
        <p>
          Clarent Coaching is not legal, financial, medical, mental health, or other licensed professional
          advice. Visitors remain solely responsible for their own decisions and the outcomes that follow.
        </p>
        <p>
          Reading about the Clarent Coaching System or the coaching process does not establish a
          coach–client relationship. That relationship begins only after you and Clarent have agreed to
          work together.
        </p>

        <h3>4. Intellectual Property</h3>
        <p>
          The Clarent name, coaching system descriptions, original content, and all materials on this
          site are the intellectual property of Clarent Coaching. They may not be copied, reproduced,
          or redistributed without prior written permission.
        </p>

        <h3>5. Acceptable Use</h3>
        <p>
          Users agree not to misuse this website, interfere with its operation, or attempt unauthorized
          access to any part of the site or its underlying systems.
        </p>

        <h3>6. Links to Third Parties</h3>
        <p>
          This site may link to external platforms such as scheduling tools, Zoom, or LinkedIn. Clarent
          is not responsible for the content, privacy practices, or policies of those third-party sites.
        </p>

        <h3>7. Limitation of Liability</h3>
        <p>
          Clarent is not liable for damages arising from use of this website or reliance on its
          informational content, to the extent permitted by applicable law.
        </p>

        <h3>8. Changes to These Terms</h3>
        <p>
          These Terms of Use may be updated from time to time. Changes become effective when posted
          to this page.
        </p>

        <h3>9. Contact</h3>
        <p>
          Questions about these terms may be directed to Clarent Coaching via the{' '}
          <a href="/contact">contact page</a>.
        </p>

      </div>
    </PageLayout>
  );
}
