import GalleryMasonry from '@/components/GalleryMasonry';
import CTABanner from '@/components/CTABanner';

export default function GalleryPage() {
  return (
    <main>
      <section className="relative min-h-[50vh] bg-black text-white">
        <div className="absolute inset-0 bg-[url('/images/gallery-1.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-24">
          <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl">STEP INSIDE THE FORGE</h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg">
            25,000 square feet of world-class training space.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <GalleryMasonry
            headline="OUR FACILITY"
            subheadline="Weight floor, studios, recovery, and community."
            images={[
              { url: '/images/gallery-1.jpg', alt: 'Weight floor and platforms', caption: 'Weight Floor' },
              { url: '/images/about.jpg', alt: 'Recovery suite', caption: 'Amenities' },
              { url: '/images/team.jpg', alt: 'Trainer-led session', caption: 'Training' },
              { url: '/images/hero.jpg', alt: 'High-energy class', caption: 'Studios' },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <CTABanner
            headline="SEE IT FOR YOURSELF"
            description="Schedule a free in-person tour with one of our team members."
            ctaLabel="Book a Tour"
            ctaHref="/contact?tour=true"
          />
        </div>
      </section>
    </main>
  );
}
