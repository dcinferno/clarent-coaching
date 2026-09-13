import './globals.css';

export const metadata = {
  title: 'Clarent Coaching | Clear Thinking for Complex Decisions',
  description: 'Professional decision coaching for complex, consequential decisions.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
