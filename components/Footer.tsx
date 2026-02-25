import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  brand: string;
  description: string;
  columns: FooterColumn[];
  copyright: string;
}

export default function Footer({ brand, description, columns, copyright }: FooterProps) {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold uppercase">{brand}</h3>
            <p className="mt-4 text-sm text-muted-foreground">{description}</p>
          </div>
          {columns.map((column, i) => (
            <div key={i}>
              <h4 className="text-sm font-semibold uppercase tracking-wider">{column.title}</h4>
              <ul className="mt-4 space-y-2">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8" />
        <p className="text-center text-sm text-muted-foreground">{copyright}</p>
      </div>
    </footer>
  );
}
