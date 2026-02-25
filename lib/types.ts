export interface NavigationItem {
  label: string;
  href: string;
}

export interface NavigationCTA {
  label: string;
  href: string;
}

export interface NavigationConfig {
  items: NavigationItem[];
  cta: NavigationCTA;
}

export interface StatsItem {
  value: string;
  label: string;
  suffix?: string;
}

export interface MembershipTier {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  cta: string;
}

export interface TrainerProfile {
  name: string;
  title: string;
  image: string;
  specialty: string;
  certifications: string[];
  bio?: string;
  funFact?: string;
  instagram?: string;
  availability?: string;
}

export interface ClassCategory {
  name: string;
  description: string;
  icon: string;
  color: string;
  classCount: number;
}

export interface ScheduleClass {
  time: string;
  name: string;
  instructor: string;
  duration: string;
  category: string;
}

export interface ScheduleDay {
  day: string;
  classes: ScheduleClass[];
}

export interface Testimonial {
  name: string;
  age: number;
  occupation: string;
  beforeImage: string;
  afterImage: string;
  weightLost?: string;
  muscleGained?: string;
  timeframe: string;
  quote: string;
  program: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface BusinessHours {
  days: string;
  hours: string;
}
