import ContactForm from '@/components/ContactForm';
import { Badge } from '@/components/ui/badge';

export default function ContactPage() {
  return (
    <main>
      <section className="relative min-h-[50vh] bg-black text-white">
        <div className="absolute inset-0 bg-[url('/images/about.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-24">
          <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl">GET IN TOUCH</h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg">We&apos;re here to help you start your fitness journey.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary">Visit the Forge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase">Iron Forge Fitness</h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              1500 Steel Avenue, Denver, Colorado 80202
            </p>
            <div className="mt-6 grid gap-3">
              <Badge variant="outline">Phone: (303) 555-4766</Badge>
              <Badge variant="outline">Email: info@ironforgefitness.com</Badge>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold">Hours</h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                <li>Monday - Friday: 5:00 AM - 10:00 PM</li>
                <li>Saturday: 6:00 AM - 8:00 PM</li>
                <li>Sunday: 7:00 AM - 6:00 PM</li>
                <li>Holidays: 8:00 AM - 2:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <iframe
              title="Iron Forge Fitness Map"
              src="https://maps.google.com/maps?q=1500%20Steel%20Avenue%20Denver%20CO&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-[360px] w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <ContactForm
            headline="SEND US A MESSAGE"
            subheadline="We respond within 24 hours."
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
