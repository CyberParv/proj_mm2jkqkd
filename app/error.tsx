'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ErrorPage() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-secondary text-secondary-foreground">
      <div className="text-center">
        <p className="text-sm uppercase tracking-widest text-primary">Something went wrong</p>
        <h1 className="mt-2 text-3xl font-black uppercase">We&apos;ll get you back on track</h1>
        <Button asChild className="mt-6 uppercase">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </main>
  );
}
