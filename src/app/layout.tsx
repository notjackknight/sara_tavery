import type { Metadata, Viewport } from 'next';
import '../index.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export const metadata: Metadata = {
  title: 'Sara Tavery | Philanthropy Communications',
  description: 'Clear, compelling communications that strengthen giving',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
          <BookingModal />
        </div>
      </body>
    </html>
  );
}
