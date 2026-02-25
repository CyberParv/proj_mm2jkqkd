import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-secondary text-secondary-foreground">
      <div className="text-center">
        <p className="text-sm uppercase tracking-widest text-primary">404</p>
        <h1 className="mt-2 text-3xl font-black uppercase">Page Not Found</h1>
        <Button asChild className="mt-6 uppercase">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </main>
  );
}
