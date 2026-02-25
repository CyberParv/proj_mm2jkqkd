import './globals.css';
import { Inter, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Iron Forge Fitness | Denver\'s Premier Strength & Conditioning Gym',
  description: 'Founded by Olympic athlete Marcus Steel in 2010, Iron Forge Fitness offers world-class training with HIIT, CrossFit, Yoga, Spin, and Boxing classes. Located at 1500 Steel Avenue, Denver, Colorado.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} dark`}>
      <body className={`${inter.className} bg-background text-foreground`}>
        <Navbar
          logo="Iron Forge Fitness"
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Classes', href: '/classes' },
            { label: 'Trainers', href: '/trainers' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Contact', href: '/contact' },
          ]}
          ctaLabel="Join Now"
          ctaHref="/signup"
        />
        {children}
        <Footer
          brand="Iron Forge Fitness"
          description="Denver's premier strength and conditioning facility founded by Olympic athlete Marcus Steel. Forge your strongest self with world-class training."
          columns={[
            {
              title: 'Quick Links',
              links: [
                { label: 'About', href: '/about' },
                { label: 'Classes', href: '/classes' },
                { label: 'Trainers', href: '/trainers' },
                { label: 'Gallery', href: '/gallery' },
              ],
            },
            {
              title: 'Programs',
              links: [
                { label: 'HIIT', href: '/classes' },
                { label: 'CrossFit', href: '/classes' },
                { label: 'Yoga', href: '/classes' },
                { label: 'Spin', href: '/classes' },
              ],
            },
            {
              title: 'Contact',
              links: [
                { label: '1500 Steel Avenue, Denver, CO', href: '/contact' },
                { label: '(303) 555-4766', href: 'tel:+13035554766' },
                { label: 'info@ironforgefitness.com', href: 'mailto:info@ironforgefitness.com' },
              ],
            },
          ]}
          copyright="© 2024 Iron Forge Fitness. All rights reserved."
        />
      </body>
    </html>
  );
}
