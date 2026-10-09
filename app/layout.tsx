import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wasif Ali | Software Engineer & AI/ML Enthusiast',
  description:
    'Portfolio of Wasif Ali, a Computer Science graduate-in-progress focused on software engineering, AI/ML, and building practical digital solutions.',
  openGraph: {
    title: 'Wasif Ali | Software Engineer & AI/ML Enthusiast',
    description: 'Software engineering, AI/ML, and selected projects.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a1017',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
