import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import StatsCounter from '@/components/StatsCounter';
import CTABanner from '@/components/CTABanner';
import { Dumbbell, Users, Beaker, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <main>
      <section className="relative min-h-[50vh] bg-black text-white">
        <div className="absolute inset-0 bg-[url('/images/about.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-24">
          <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl">OUR STORY</h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg">
            From Olympic podium to Denver&apos;s premier training facility.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary">Built by an Olympian</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase">Marcus Steel&apos;s Mission</h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              After winning bronze in weightlifting at the 2004 Athens Olympics, Marcus Steel spent six years coaching
              elite athletes with Team USA. In 2010, he opened Iron Forge Fitness to bring world-class training to
              everyday people. Today, Iron Forge spans 25,000 square feet with 50+ weekly classes and a community of
              2,500 active members.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge className="bg-primary text-primary-foreground">Olympic Bronze Medalist</Badge>
              <Badge variant="secondary">USA Weightlifting Level 5</Badge>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <Image src="/images/about.jpg" alt="Founder Marcus Steel at Iron Forge" width={800} height={600} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm uppercase tracking-widest text-primary">The Iron Forge Way</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase">Values We Train By</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border bg-card p-6">
              <Dumbbell className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Strength Through Struggle</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We grow outside our comfort zone—every rep builds resilience.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Community Over Competition</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your fellow members are your support system and motivation.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <Beaker className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Science-Backed Methods</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                No fads—just proven programming and nutrition strategies.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <Heart className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Coaches Who Care</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every member has a story and goals we&apos;re committed to.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <StatsCounter
            stats={[
              { value: '25,000', label: 'Square Feet' },
              { value: '15', label: 'Certified Trainers' },
              { value: '50+', label: 'Weekly Classes' },
              { value: '2,500+', label: 'Active Members' },
              { value: '14', label: 'Years Strong' },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <CTABanner
            headline="READY TO JOIN THE FORGE?"
            description="Experience the Iron Forge difference with a free 7-day trial."
            ctaLabel="Start Free Trial"
            ctaHref="/signup"
          />
        </div>
      </section>
    </main>
  );
}
