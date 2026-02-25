import { Badge } from '@/components/ui/badge';
import { Dumbbell, Flame, Bike, Flower2, Shield } from 'lucide-react';

const categories = [
  {
    name: 'HIIT',
    description: 'High-intensity interval training designed to maximize calorie burn and explosive power.',
    icon: Flame,
    classCount: 12,
  },
  {
    name: 'Yoga',
    description: 'Power vinyasa, restorative flows, and mobility work for balance and recovery.',
    icon: Flower2,
    classCount: 10,
  },
  {
    name: 'CrossFit',
    description: 'Functional movements performed at high intensity to build strength and endurance.',
    icon: Dumbbell,
    classCount: 14,
  },
  {
    name: 'Spin',
    description: 'Indoor cycling with immersive lighting, curated playlists, and motivating instructors.',
    icon: Bike,
    classCount: 8,
  },
  {
    name: 'Boxing',
    description: 'Full-body conditioning and technique drills for all skill levels.',
    icon: Shield,
    classCount: 6,
  },
];

const schedule = [
  {
    day: 'Monday',
    classes: [
      { time: '5:30 AM', name: 'HIIT Inferno', instructor: 'Sarah Chen' },
      { time: '6:30 AM', name: 'CrossFit WOD', instructor: 'Diego Martinez' },
      { time: '9:00 AM', name: 'Power Yoga', instructor: 'Emma Walsh' },
      { time: '5:30 PM', name: 'Spin Surge', instructor: 'Tyler Brooks' },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '5:30 AM', name: 'Spin & Sculpt', instructor: 'Tyler Brooks' },
      { time: '6:30 AM', name: 'Olympic Lifting', instructor: 'Marcus Steel' },
      { time: '12:00 PM', name: 'Express Boxing', instructor: 'Mike Thompson' },
      { time: '6:30 PM', name: 'CrossFit Competition', instructor: 'Diego Martinez' },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '5:30 AM', name: 'HIIT Inferno', instructor: 'Sarah Chen' },
      { time: '9:00 AM', name: 'Vinyasa Flow', instructor: 'Emma Walsh' },
      { time: '5:30 PM', name: 'Boxing Conditioning', instructor: 'Mike Thompson' },
      { time: '7:30 PM', name: 'CrossFit Endurance', instructor: 'Diego Martinez' },
    ],
  },
  {
    day: 'Thursday',
    classes: [
      { time: '5:30 AM', name: 'Spin Surge', instructor: 'Tyler Brooks' },
      { time: '6:30 AM', name: 'Strength & Skill', instructor: 'Marcus Steel' },
      { time: '12:00 PM', name: 'Lunch Burn HIIT', instructor: 'Sarah Chen' },
      { time: '6:30 PM', name: 'CrossFit WOD', instructor: 'Diego Martinez' },
    ],
  },
  {
    day: 'Friday',
    classes: [
      { time: '5:30 AM', name: 'HIIT Inferno', instructor: 'Sarah Chen' },
      { time: '9:00 AM', name: 'Yin Yoga', instructor: 'Emma Walsh' },
      { time: '5:00 PM', name: 'Happy Hour Spin', instructor: 'Tyler Brooks' },
      { time: '6:00 PM', name: 'Friday Night Fights', instructor: 'Mike Thompson' },
    ],
  },
];

export default function ClassesPage() {
  return (
    <main>
      <section className="relative min-h-[50vh] bg-black text-white">
        <div className="absolute inset-0 bg-[url('/images/gallery-1.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-24">
          <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl">CLASS SCHEDULE</h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg">50+ classes weekly across 5 disciplines.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm uppercase tracking-widest text-primary">Find Your Fire</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase">Class Categories</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div key={category.name} className="rounded-lg border border-border bg-card p-6">
                <category.icon className="h-8 w-8 text-primary" />
                <div className="mt-4 flex items-center gap-2">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                  <Badge variant="outline">{category.classCount} Classes</Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm uppercase tracking-widest text-primary">Weekly Schedule</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase">Plan Your Week</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {schedule.map((day) => (
              <div key={day.day} className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-bold">{day.day}</h3>
                <div className="mt-4 grid gap-3">
                  {day.classes.map((classItem) => (
                    <div key={`${day.day}-${classItem.time}`} className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{classItem.name}</p>
                        <p className="text-sm text-muted-foreground">{classItem.instructor}</p>
                      </div>
                      <Badge className="bg-primary text-primary-foreground">{classItem.time}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
