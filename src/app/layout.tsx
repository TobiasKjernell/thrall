import type { Metadata } from 'next';
import Footer from '../components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Thrall',
  description: 'Welcome to Thrall',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="page-wrapper">
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
