import TeamGrid from '@/components/TeamGrid';
import CTABanner from '@/components/CTABanner';

export default function TrainersPage() {
  return (
    <main>
      <section className="relative min-h-[50vh] bg-black text-white">
        <div className="absolute inset-0 bg-[url('/images/team.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-24">
          <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl">MEET YOUR COACHES</h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg">
            15 certified professionals dedicated to your success.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <TeamGrid
            headline="THE IRON FORGE TEAM"
            subheadline="Elite coaches and specialists"
            members={[
              {
                name: 'Marcus Steel',
                title: 'Founder & Head Coach',
                imageUrl: '/images/team.jpg',
                bio: '20+ years of elite athletic experience. Olympic bronze medalist and Team USA coach.',
              },
              {
                name: 'Sarah Chen',
                title: 'Lead HIIT Instructor',
                imageUrl: '/images/about.jpg',
                bio: 'High-energy conditioning coach known for fat-loss transformations.',
              },
              {
                name: 'Diego Martinez',
                title: 'CrossFit Head Coach',
                imageUrl: '/images/gallery-1.jpg',
                bio: 'Competition prep and performance programming specialist.',
              },
              {
                name: 'Emma Walsh',
                title: 'Yoga Director',
                imageUrl: '/images/hero.jpg',
                bio: 'Mobility, recovery, and flexibility expert.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <CTABanner
            headline="TRAIN WITH THE BEST"
            description="Elite members receive 4 personal training sessions monthly."
            ctaLabel="Go Elite"
            ctaHref="/signup?plan=elite"
          />
        </div>
      </section>
    </main>
  );
}
