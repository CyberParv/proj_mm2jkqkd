import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function SignupPage() {
  return (
    <main>
      <section className="relative min-h-[50vh] bg-black text-white">
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-24">
          <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl">JOIN THE FORGE</h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg">Start your transformation today.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-5xl font-black uppercase">Membership Registration</h2>
          <p className="mt-3 text-base md:text-lg text-muted-foreground">
            Choose your plan, add your details, and we'll take care of the rest.
          </p>
          <form className="mt-10 grid gap-6 rounded-lg border border-border bg-card p-6">
            <div className="grid gap-2">
              <Label htmlFor="plan">Choose Your Plan</Label>
              <select
                id="plan"
                name="plan"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="basic">Basic — $49/month</option>
                <option value="premium">Premium — $99/month</option>
                <option value="elite">Elite — $199/month</option>
              </select>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" name="firstName" placeholder="Marcus" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" placeholder="Steel" required />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="(303) 555-0000" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="goals">Fitness Goals</Label>
              <Textarea id="goals" name="goals" placeholder="Tell us about your goals and experience." rows={4} />
            </div>
            <Button type="submit" className="uppercase">Complete Registration</Button>
          </form>
        </div>
      </section>
    </main>
  );
}
