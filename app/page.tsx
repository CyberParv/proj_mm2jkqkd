import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PricingTable from '@/components/PricingTable';
import CTABanner from '@/components/CTABanner';
import TeamGrid from '@/components/TeamGrid';
import StatsCounter from '@/components/StatsCounter';
import GalleryMasonry from '@/components/GalleryMasonry';
import TestimonialsAnimated from '@/components/TestimonialsAnimated';
import ContactForm from '@/components/ContactForm';
import { Dumbbell, Flame, Bike, Flower2 } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-[80vh] bg-black text-white">
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-center px-6 py-24 md:py-32">
          <Badge className="mb-4 bg-primary text-primary-foreground">Forge Your Strongest Self</Badge>
          <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl lg:text-7xl">
            WELCOME TO EXCELLENCE
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg">
            Denver&apos;s premier strength and conditioning facility. Founded by Olympic athlete Marcus Steel,
            Iron Forge has transformed over 10,000 lives since 2010.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="uppercase">
              <Link href="/signup">Start Free Trial</Link>
            </Button>
            <Button asChild variant="outline" className="uppercase">
              <Link href="/classes">View Classes</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <StatsCounter
            stats={[
              { value: '10,000+', label: 'Members Transformed' },
              { value: '50+', label: 'Weekly Classes' },
              { value: '15', label: 'Elite Trainers' },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase">BUILT BY AN OLYMPIAN</h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              In 2010, former Olympic weightlifter Marcus Steel opened Iron Forge Fitness with a single mission:
              create a gym where everyday people could train like elite athletes. Today, Iron Forge is Denver&apos;s
              most respected training facility with 25,000 sq ft of world-class equipment and a community that
              pushes you beyond your limits.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge className="bg-primary text-primary-foreground">Strength</Badge>
              <Badge variant="secondary">Community</Badge>
              <Badge variant="outline">Results</Badge>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <Image src="/images/about.jpg" alt="Iron Forge Fitness facility" width={800} height={600} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary">50+ Classes Weekly</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase">TRAIN YOUR WAY</h2>
            </div>
            <Button asChild className="uppercase hidden md:inline-flex">
              <Link href="/classes">View Full Schedule</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border bg-card p-6">
              <Flame className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold">HIIT Inferno</h3>
              <p className="mt-2 text-sm text-muted-foreground">45 min • High intensity calorie torch.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <Flower2 className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Power Yoga</h3>
              <p className="mt-2 text-sm text-muted-foreground">60 min • Strength, flexibility, and mindfulness.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <Dumbbell className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold">CrossFit WOD</h3>
              <p className="mt-2 text-sm text-muted-foreground">60 min • Functional strength and conditioning.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <Bike className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Spin Surge</h3>
              <p className="mt-2 text-sm text-muted-foreground">45 min • Heart-pumping indoor cycling.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <PricingTable
            headline="CHOOSE YOUR PATH"
            subheadline="Membership Plans"
            tiers={[
              {
                name: 'Basic',
                price: '$49',
                period: 'month',
                description: 'Perfect for self-motivated individuals',
                features: [
                  'Full gym floor access',
                  'Locker room & showers',
                  'Mobile app access',
                  'Open gym hours: 5AM - 10PM',
                ],
                ctaLabel: 'Get Started',
                ctaHref: '/signup?plan=basic',
              },
              {
                name: 'Premium',
                price: '$99',
                period: 'month',
                description: 'Our most popular membership',
                features: [
                  'Everything in Basic',
                  'Unlimited group classes',
                  '1 personal training session/month',
                  'Nutrition consultation',
                  'Sauna & steam room access',
                ],
                ctaLabel: 'Join Premium',
                ctaHref: '/signup?plan=premium',
                highlighted: true,
              },
              {
                name: 'Elite',
                price: '$199',
                period: 'month',
                description: 'For serious athletes seeking transformation',
                features: [
                  'Everything in Premium',
                  '4 personal training sessions/month',
                  'Custom workout programming',
                  'Priority class booking',
                  'Recovery suite access',
                ],
                ctaLabel: 'Go Elite',
                ctaHref: '/signup?plan=elite',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <TeamGrid
            headline="MEET YOUR COACHES"
            subheadline="Elite Training Team"
            members={[
              {
                name: 'Marcus Steel',
                title: 'Founder & Head Coach',
                imageUrl: '/images/team.jpg',
                bio: '2004 Olympic Bronze Medalist and USA Weightlifting Level 5 Coach.',
              },
              {
                name: 'Sarah Chen',
                title: 'Lead HIIT Instructor',
                imageUrl: '/images/about.jpg',
                bio: 'NASM-CPT focused on fat-loss and metabolic conditioning.',
              },
              {
                name: 'Diego Martinez',
                title: 'CrossFit Head Coach',
                imageUrl: '/images/gallery-1.jpg',
                bio: 'CrossFit L3 coach specializing in performance and competition prep.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <TestimonialsAnimated
            title="REAL RESULTS. REAL PEOPLE."
            subtitle="Transformation Stories"
            autoplay
            testimonials={[
              {
                quote:
                  "I went from barely climbing stairs to completing my first Spartan Race. Iron Forge didn't just change my body—it changed my life.",
                name: 'Jake Morrison',
                designation: 'Software Engineer • 65 lbs lost',
                src: '/images/hero.jpg',
              },
              {
                quote:
                  'The 5AM HIIT classes fit my schedule perfectly, and the community keeps me accountable. Down 45 pounds and stronger than ever!',
                name: 'Maria Santos',
                designation: 'Nurse • 45 lbs lost',
                src: '/images/about.jpg',
              },
              {
                quote:
                  "At 52, I thought my best years were behind me. Now I'm in the best shape of my life thanks to Iron Forge.",
                name: 'Robert Kim',
                designation: 'Business Owner • 20 lbs lean muscle',
                src: '/images/gallery-1.jpg',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <GalleryMasonry
            headline="STEP INSIDE THE FORGE"
            subheadline="Our Facility"
            images={[
              { url: '/images/gallery-1.jpg', alt: 'Weight floor and Olympic platforms', caption: 'Weight Floor' },
              { url: '/images/team.jpg', alt: 'Trainer-led session', caption: 'Training' },
              { url: '/images/about.jpg', alt: 'Recovery and amenities', caption: 'Amenities' },
              { url: '/images/hero.jpg', alt: 'High-energy class', caption: 'Studios' },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <CTABanner
            headline="YOUR TRANSFORMATION STARTS TODAY"
            description="Join over 10,000 members who’ve forged their strongest selves."
            ctaLabel="Claim Your Free Trial"
            ctaHref="/signup"
            secondaryCtaLabel="Schedule a Tour"
            secondaryCtaHref="/contact"
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <ContactForm
            headline="QUESTIONS? LET'S TALK"
            subheadline="Reach our team in Denver or send us a message."
            contactInfo={[
              { icon: 'MapPin', label: 'Address', value: '1500 Steel Avenue, Denver, CO' },
              { icon: 'Phone', label: 'Phone', value: '(303) 555-4766' },
              { icon: 'Mail', label: 'Email', value: 'info@ironforgefitness.com' },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
