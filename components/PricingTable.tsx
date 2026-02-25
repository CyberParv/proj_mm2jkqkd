import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

interface PricingTableProps {
  headline: string;
  subheadline?: string;
  tiers: PricingTier[];
}

const defaultTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$49",
    period: "month",
    description: "Perfect for new members building momentum.",
    features: ["Unlimited gym access", "2 group classes weekly", "Fitness assessment", "Locker room access"],
    ctaLabel: "Start Starter",
    ctaHref: "#contact",
  },
  {
    name: "Athlete",
    price: "$89",
    period: "month",
    description: "Most popular for transformation goals.",
    features: ["Unlimited classes", "Strength program", "Nutrition check-ins", "Priority booking"],
    ctaLabel: "Join Athlete",
    ctaHref: "#contact",
    highlighted: true,
  },
  {
    name: "Elite",
    price: "$149",
    period: "month",
    description: "Full coaching and premium recovery.",
    features: ["Personal training 4x/mo", "Recovery lounge", "Weekly nutrition plan", "VIP events"],
    ctaLabel: "Go Elite",
    ctaHref: "#contact",
  },
];

export default function PricingTable({
  headline = "Memberships That Move You",
  subheadline = "Choose the plan that matches your pace and goals.",
  tiers = defaultTiers,
}: Partial<PricingTableProps>) {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {tiers.map(function (tier, i) {
            return (
              <Card key={i} className={"relative flex flex-col rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 " + (tier.highlighted ? "border-primary ring-2 ring-primary scale-105" : "")}>
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge>Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground">/{tier.period}</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map(function (feature, j) {
                      return (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <span className="mt-0.5 text-primary">&#10003;</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={tier.highlighted ? "default" : "outline"} asChild>
                    <a href={tier.ctaHref}>{tier.ctaLabel}</a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
