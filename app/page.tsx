import Navbar from "./components/Navbar";
import EventCard, { type Event } from "./components/EventCard";
import Footer from "./components/Footer";

export default function Home() {
  const events: Event[] = [
    {
      status: "Upcoming",
      series: "RIL Workshop Series",
      title: "Building Smarter: Innovating Responsibly in the Age of AI",
      description:
        "As AI becomes mainstream, how can teams ensure their products are used responsibly?",
      focusAreas:
        "Guardrails, Limiting, Fine-tuning, Prompt Injection Protection",
      dateRange: "Oct. 30th–31st, 2025",
      time: "10:00 AM",
      location:
        "168 Aba George Road, Opposite Father's House, Port Harcourt, Nigeria",
      speakers: "Ayosi Godfrey, Boma Ainsikai, Eric Akpokoro",
      image:
        "/first-series.png",
      primaryCta: { label: "Register Now — It’s Free", href: "/event-detail" },
    },
    {
      status: "Previous",
      series: "RIL Workshop Series",
      title: "Building Smarter: Innovating Responsibly in the Age of AI",
      description:
        "As AI becomes mainstream, how can teams ensure their products are used responsibly?",
      focusAreas:
        "Guardrails, Limiting, Fine-tuning, Prompt Injection Protection",
      dateRange: "Oct. 30th–31st, 2025",
      time: "10:00 AM",
      location:
        "168 Aba George Road, Opposite Father's House, Port Harcourt, Nigeria",
      speakers: "Ayosi Godfrey, Boma Ainsikai, Eric Akpokoro",
      image:
        "/middle-series.jpg",
      primaryCta: { label: "See Previous Event", href: "/previous-event" },
      secondaryCta: { label: "See Event Details", href: "/event-detail" },
    },
    {
      status: "Upcoming",
      series: "RIL Workshop Series",
      title: "Building Smarter: Innovating Responsibly in the Age of AI",
      description:
        "As AI becomes mainstream, how can teams ensure their products are used responsibly?",
      focusAreas:
        "Guardrails, Limiting, Fine-tuning, Prompt Injection Protection",
      dateRange: "Oct. 30th–31st, 2025",
      time: "10:00 AM",
      location:
        "168 Aba George Road, Opposite Father's House, Port Harcourt, Nigeria",
      speakers: "Ayosi Godfrey, Boma Ainsikai, Eric Akpokoro",
      image:
        "/first-series.png",
      primaryCta: { label: "Register Now — It’s Free", href: "/event-detail" },
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 pt-12 justify-center">
        <h1 className="font-hero text-center text-6xl leading-tight">
          <span className="text-blue-600">Shaping</span> and <span className="text-blue-600">Impacting</span> the
          <br />
          Future,
          One <span className="text-blue-600">Event</span> at a Time
        </h1>
        <p className="mt-3 text-center text-black text-xl">
          Experience events that inspire action, spark collaboration, and redefine <br /> what’s possible
        </p>
        <div className="mt-25 text-center font-semibold tracking-wide text-xl">OUR MISSION IS SIMPLE</div>
        <p className="mt-1 text-center text-black font-bold text-lg">
          To ensure everyone can find space instantly to get their best work done.
        </p>
        <div className="mt-20 text-center text-zinc-600">
          See the list of our upcoming and previous events
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <EventCard key={i} e={e} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
