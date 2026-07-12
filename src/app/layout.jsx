import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  title: 'Clarent Coaching — Strategic Clarity with Intention',
  description: 'Clarent Coaching provides structured coaching engagements that help clients organize their thinking, evaluate their direction, and move forward with intention.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
