import { NextRequest, NextResponse } from "next/server";
import { scheduleQuerySchema } from "@/lib/validators";

const schedule = [
  {
    day: "Monday",
    classes: [
      {
        time: "5:30 AM",
        name: "HIIT Inferno",
        instructor: "Sarah Chen",
        duration: "45 min",
        category: "HIIT",
      },
      {
        time: "6:30 AM",
        name: "CrossFit WOD",
        instructor: "Diego Martinez",
        duration: "60 min",
        category: "CrossFit",
      },
      {
        time: "9:00 AM",
        name: "Power Yoga",
        instructor: "Emma Walsh",
        duration: "60 min",
        category: "Yoga",
      },
      {
        time: "12:00 PM",
        name: "Lunch Burn HIIT",
        instructor: "Sarah Chen",
        duration: "30 min",
        category: "HIIT",
      },
      {
        time: "5:30 PM",
        name: "Spin Surge",
        instructor: "Tyler Brooks",
        duration: "45 min",
        category: "Spin",
      },
      {
        time: "6:30 PM",
        name: "Boxing Fundamentals",
        instructor: "Mike Tyson Jr.",
        duration: "60 min",
        category: "Boxing",
      },
      {
        time: "7:30 PM",
        name: "Evening CrossFit",
        instructor: "Diego Martinez",
        duration: "60 min",
        category: "CrossFit",
      },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      {
        time: "5:30 AM",
        name: "Spin & Sculpt",
        instructor: "Tyler Brooks",
        duration: "45 min",
        category: "Spin",
      },
      {
        time: "6:30 AM",
        name: "Olympic Lifting",
        instructor: "Marcus Steel",
        duration: "75 min",
        category: "CrossFit",
      },
      {
        time: "9:00 AM",
        name: "Gentle Flow Yoga",
        instructor: "Emma Walsh",
        duration: "60 min",
        category: "Yoga",
      },
      {
        time: "12:00 PM",
        name: "Express Boxing",
        instructor: "Mike Tyson Jr.",
        duration: "30 min",
        category: "Boxing",
      },
      {
        time: "5:30 PM",
        name: "HIIT & Lift",
        instructor: "Sarah Chen",
        duration: "50 min",
        category: "HIIT",
      },
      {
        time: "6:30 PM",
        name: "CrossFit Competition",
        instructor: "Diego Martinez",
        duration: "90 min",
        category: "CrossFit",
      },
      {
        time: "8:00 PM",
        name: "Restorative Yoga",
        instructor: "Emma Walsh",
        duration: "60 min",
        category: "Yoga",
      },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      {
        time: "5:30 AM",
        name: "HIIT Inferno",
        instructor: "Sarah Chen",
        duration: "45 min",
        category: "HIIT",
      },
      {
        time: "6:30 AM",
        name: "CrossFit WOD",
        instructor: "Diego Martinez",
        duration: "60 min",
        category: "CrossFit",
      },
      {
        time: "9:00 AM",
        name: "Vinyasa Flow",
        instructor: "Emma Walsh",
        duration: "60 min",
        category: "Yoga",
      },
      {
        time: "12:00 PM",
        name: "Spin Express",
        instructor: "Tyler Brooks",
        duration: "30 min",
        category: "Spin",
      },
      {
        time: "5:30 PM",
        name: "Boxing Conditioning",
        instructor: "Mike Tyson Jr.",
        duration: "60 min",
        category: "Boxing",
      },
      {
        time: "6:30 PM",
        name: "Tabata Torture",
        instructor: "Sarah Chen",
        duration: "45 min",
        category: "HIIT",
      },
      {
        time: "7:30 PM",
        name: "CrossFit Endurance",
        instructor: "Diego Martinez",
        duration: "60 min",
        category: "CrossFit",
      },
    ],
  },
  {
    day: "Thursday",
    classes: [
      {
        time: "5:30 AM",
        name: "Spin Surge",
        instructor: "Tyler Brooks",
        duration: "45 min",
        category: "Spin",
      },
      {
        time: "6:30 AM",
        name: "Strength & Skill",
        instructor: "Marcus Steel",
        duration: "75 min",
        category: "CrossFit",
      },
      {
        time: "9:00 AM",
        name: "Power Yoga",
        instructor: "Emma Walsh",
        duration: "60 min",
        category: "Yoga",
      },
      {
        time: "12:00 PM",
        name: "Lunch Burn HIIT",
        instructor: "Sarah Chen",
        duration: "30 min",
        category: "HIIT",
      },
      {
        time: "5:30 PM",
        name: "Boxing Sparring",
        instructor: "Mike Tyson Jr.",
        duration: "60 min",
        category: "Boxing",
      },
      {
        time: "6:30 PM",
        name: "CrossFit WOD",
        instructor: "Diego Martinez",
        duration: "60 min",
        category: "CrossFit",
      },
      {
        time: "7:30 PM",
        name: "HIIT & Core",
        instructor: "Sarah Chen",
        duration: "45 min",
        category: "HIIT",
      },
    ],
  },
  {
    day: "Friday",
    classes: [
      {
        time: "5:30 AM",
        name: "HIIT Inferno",
        instructor: "Sarah Chen",
        duration: "45 min",
        category: "HIIT",
      },
      {
        time: "6:30 AM",
        name: "CrossFit WOD",
        instructor: "Diego Martinez",
        duration: "60 min",
        category: "CrossFit",
      },
      {
        time: "9:00 AM",
        name: "Yin Yoga",
        instructor: "Emma Walsh",
        duration: "75 min",
        category: "Yoga",
      },
      {
        time: "12:00 PM",
        name: "Friday Burn",
        instructor: "Sarah Chen",
        duration: "45 min",
        category: "HIIT",
      },
      {
        time: "5:00 PM",
        name: "Happy Hour Spin",
        instructor: "Tyler Brooks",
        duration: "45 min",
        category: "Spin",
      },
      {
        time: "6:00 PM",
        name: "Friday Night Fights",
        instructor: "Mike Tyson Jr.",
        duration: "60 min",
        category: "Boxing",
      },
    ],
  },
  {
    day: "Saturday",
    classes: [
      {
        time: "7:00 AM",
        name: "Saturday Sweat HIIT",
        instructor: "Sarah Chen",
        duration: "60 min",
        category: "HIIT",
      },
      {
        time: "8:00 AM",
        name: "CrossFit Team WOD",
        instructor: "Diego Martinez",
        duration: "90 min",
        category: "CrossFit",
      },
      {
        time: "9:30 AM",
        name: "Weekend Warrior Spin",
        instructor: "Tyler Brooks",
        duration: "60 min",
        category: "Spin",
      },
      {
        time: "10:30 AM",
        name: "Community Yoga",
        instructor: "Emma Walsh",
        duration: "75 min",
        category: "Yoga",
      },
      {
        time: "12:00 PM",
        name: "Boxing Bootcamp",
        instructor: "Mike Tyson Jr.",
        duration: "60 min",
        category: "Boxing",
      },
    ],
  },
  {
    day: "Sunday",
    classes: [
      {
        time: "8:00 AM",
        name: "Sunday Spin",
        instructor: "Tyler Brooks",
        duration: "45 min",
        category: "Spin",
      },
      {
        time: "9:00 AM",
        name: "CrossFit Open Gym",
        instructor: "Diego Martinez",
        duration: "120 min",
        category: "CrossFit",
      },
      {
        time: "10:00 AM",
        name: "Restorative Yoga",
        instructor: "Emma Walsh",
        duration: "75 min",
        category: "Yoga",
      },
      {
        time: "4:00 PM",
        name: "Sunday Reset HIIT",
        instructor: "Sarah Chen",
        duration: "45 min",
        category: "HIIT",
      },
    ],
  },
];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const parsed = scheduleQuerySchema.safeParse({
      day: searchParams.get("day"),
      category: searchParams.get("category"),
      instructor: searchParams.get("instructor"),
    });

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid query", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { day, category, instructor } = parsed.data;

    const normalizedDay = day?.toLowerCase();
    const normalizedCategory = category?.toLowerCase();
    const normalizedInstructor = instructor?.toLowerCase();

    const filtered = schedule
      .filter((entry) =>
        normalizedDay ? entry.day.toLowerCase() === normalizedDay : true
      )
      .map((entry) => ({
        ...entry,
        classes: entry.classes.filter((item) => {
          const matchesCategory = normalizedCategory
            ? item.category.toLowerCase() === normalizedCategory
            : true;
          const matchesInstructor = normalizedInstructor
            ? item.instructor.toLowerCase().includes(normalizedInstructor)
            : true;
          return matchesCategory && matchesInstructor;
        }),
      }))
      .filter((entry) => entry.classes.length > 0);

    return NextResponse.json({ schedule: filtered });
  } catch (error) {
    console.error("Schedule error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
