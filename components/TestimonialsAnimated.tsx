"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

const defaultTestimonials: TestimonialItem[] = [
  {
    quote: "I lost 18 pounds in 10 weeks and feel stronger than ever. The coaches push you exactly where you need it.",
    name: "Alyssa Morgan",
    designation: "Member, HIIT Program",
    src: "/images/hero.jpg",
  },
  {
    quote: "The strength classes and recovery sessions completely changed my training. I’m hitting new PRs monthly.",
    name: "Darius Cole",
    designation: "Member, Strength Track",
    src: "/images/about.jpg",
  },
  {
    quote: "Energy is unreal. It feels like a team sport every day, and the results show.",
    name: "Lena Ortiz",
    designation: "Member, Boxing & Conditioning",
    src: "/images/gallery-1.jpg",
  },
];

export default function TestimonialsAnimated({
  headline = "Success Stories",
  subheadline = "Real transformations from our athletes and everyday members.",
  testimonials = defaultTestimonials,
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={autoplay} />
      </div>
    </section>
  );
}
