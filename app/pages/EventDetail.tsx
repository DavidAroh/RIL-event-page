"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function Block({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-blue-600 text-white w-40 h-28">
      <div className="text-4xl font-bold tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs mt-1">{label}</div>
    </div>
  );
}

function Countdown({ target }: { target: Date }) {
  const [now, setNow] = useState<Date>(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return (
    <div className="flex items-center justify-center gap-4">
      <Block value={days} label="DAYS" />
      <Block value={hours} label="HOURS" />
      <Block value={minutes} label="MINUTES" />
      <Block value={seconds} label="SECONDS" />
    </div>
  );
}

function LargeCountdown({ target }: { target: Date }) {
  const [now, setNow] = useState<Date>(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const DD = String(days).padStart(2, "0");
  const HH = String(hours).padStart(2, "0");
  const MM = String(minutes).padStart(2, "0");
  return (
    <div className="w-full">
      <div className="flex mt-10 mx-auto gap-2.5 text-white">
        <div className="tabular-nums font-semibold leading-none text-[112px] md:text-[200px]">
          {DD}
        </div>
        <div className="font-extrabold leading-none text-[112px] md:text-[180px]">
          :
        </div>
        <div className="tabular-nums font-semibold leading-none text-[112px] md:text-[200px]">
          {HH}
        </div>
        <div className="font-extrabold leading-none text-[112px] md:text-[180px]">
          :
        </div>
        <div className="tabular-nums font-semibold leading-none text-[112px] md:text-[200px]">
          {MM}
        </div>
      </div>
      <div className="mt-6 flex mx-auto gap-50 text-white/90 text-[24px] font-bold tracking-wide absolute left-35">
        <div>DAYS</div>
        <div>HOURS</div>
        <div>MINUTES</div>
      </div>
    </div>
  );
}

export default function EventDetail() {
  const eventStart = new Date("2025-10-30T10:00:00Z");
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 pt-12">
        <h1 className="font-hero text-[64px] leading-tight text-center">
          Building Smarter:{" "}
          <span className="text-blue-600">
            Innovating <br />{" "}
          </span>{" "}
          Responsibly in the Age of <span className="text-blue-600">AI</span>
        </h1>
        <p className="mt-1 text-center text-[23.5px]">
          As AI becomes mainstream, how can teams ensure their products are used
          responsibly?
        </p>
        <div className="mt-3 flex items-center justify-center gap-8 text-[23.5px]">
          <div>
            <ul className="flex flex-row items-center justify-center gap-8">
              <li className="flex flex-row items-center justify-center gap-1">
                <div className="w-3 h-3 rounded-full bg-blue-600 mt-0"></div>
                Guardrails
              </li>
              <li className="flex flex-row items-center justify-center gap-1">
                <div className="w-3 h-3 rounded-full bg-blue-600 mt-1"></div>
                Limiting
              </li>
              <li className="flex flex-row items-center justify-center gap-1">
                <div className="w-3 h-3 rounded-full bg-blue-600 mt-1"></div>
                Fine Tuning
              </li>
              <li className="flex flex-row items-center justify-center gap-1">
                <div className="w-3 h-3 rounded-full bg-blue-600 mt-1"></div>
                Injection Protection
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-center gap-3">
          <h2 className="font-hero text-[48px]">
            Our <span className="text-blue-600">Partners</span>
          </h2>
          <div className="flex items-center gap-13">
            <img src="/scaleloft.svg" alt="Scaleloft" />
            <img src="/gdg.svg" alt="gdg" />
            <img src="/speedlink.svg" alt="speedlink" />
            <img src="/figma.svg" alt="figma" />
            <img src="/asyncpay.svg" alt="AsyncPay" />
            <img src="/fign.svg" alt="FIGN" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 mt-30">
        <div className="mb-6">
          <div className="font-hero text-[48px]">
            {" "}
            <span className="text-blue-600">Event</span> Schedules
          </div>
          <p className="text-[21px] font-semibold leading-7">
            To ensure everyone can find space instantly to get their best work
            done.
          </p>
        </div>
        <div className="relative rounded-4xl bg-zinc-900 text-white p-25 shadow w-[1240px] h-[1150px]">
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-15 gap-y-26">
            <div>
              <div className="text-[30px] font-bold leading-7">Day 1</div>
              <div className="mt-7 text-[33px] font-bold">
                10:00am – 02:00pm
              </div>
            </div>
            <div>
              <div className="text-[34px] font-semibold">
                AI Innovations & Trends
              </div>
              <p className="mt-2 text-[15px] leading-6">
                The summit kicks off with a keynote, expert panels, and <br />{" "}
                discussions on AI’s impact, ethics, and automation. Hands-on{" "}
                <br /> workshops and a networking event wrap up the day.
              </p>
            </div>

            <div>
              <div className="text-[30px] font-bold leading-7">Day 2</div>
              <div className="mt-7 text-[33px] font-bold">
                10:00am – 02:00pm
              </div>
            </div>
            <div>
              <div className="text-[30px] font-semibold">
                AI Technologies & Applications
              </div>
              <p className="mt-2 text-[15px] leading-6">
                Explore the latest in generative AI, robotics, and NLP, with{" "}
                <br /> industry-led discussions and tech demos. A startup
                showcase <br /> and investor insights highlight AI’s business
                potential.
              </p>
            </div>

            <div>
              <div className="text-[30px] font-bold leading-7">Day 3</div>
              <div className="mt-7 text-[33px] font-bold">
                10:00am – 02:00pm
              </div>
            </div>
            <div>
              <div className="text-[30px] font-semibold">Dinner Night</div>
              <p className="mt-2 text-[15px] leading-6">
                Dive into AI’s long-term impact, attend expert-led workshops,{" "}
                <br /> and watch the startup pitch competition. The event closes{" "}
                <br /> with a visionary keynote and final networking sessions.
              </p>
            </div>

            <div>
              <Link
                href="#"
                className="inline-flex w-[379px] h-[68px] items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-medium"
              >
                Register Now
                <span className="ml-2 text-white/70">— it’s Free</span>
              </Link>
            </div>
            <div className="hidden md:block" />
          </div>

          <div className="pointer-events-none absolute -bottom-[-0.1rem] -right-[-0.1rem] hidden md:block">
            <img src="/schedule-logo.svg" alt="schedule" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-full px-6 mt-30 bg-black h-[615px] overflow-hidden">
        <div className="relative text-white p-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr_1fr] items-center gap-10">
            <div className="relative top-9">
              <div className="rounded-b-full border-[6px] border-blue-600/80 relative bottom-23 bg-blue-600/80 w-[350px] h-[485px] z-10">
                <img
                  src="/joseph.jpg"
                  alt="Joseph Akintolayo"
                  className="h-[470px] w-[500px] bg-zinc-700 relative left-2.5 rounded-b-full "
                />
              </div>
              <img
                src="/spiral.svg"
                className="absolute -bottom-[-2rem] left-7 "
              />
            </div>

            <div className="z-10">
              <p className="text-white font-hero text-[46px] leading-tight">
                Our Keynote <br />{" "}
                <span className="text-blue-600">Speakers</span>
              </p>
              <p className="mt-3 text-[14.3px] text-[#DBDADB] leading-7">
                Be inspired by visionaries shaping the future of business <br />
                and technology. Our keynote speakers share bold ideas and <br />
                insights that spark innovation and drive transformation.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-11">
                <div>
                  <div className="text-blue-400 font-semibold text-[20px]">
                    Joseph Akintolayo
                  </div>
                  <div className="mt-4 text-[16px] leading-6 w-50">
                    Founder & CEO, <br />
                    Renaissance Innovation Labs, Philanthrolab
                  </div>
                </div>
                <div
                  aria-hidden
                  className="hidden md:block w-px h-[92px] bg-white/30 relative top-4 right-2"
                />
                <div>
                  <div className="text-blue-400 font-semibold text-[20px]">
                    Shammah Nei
                  </div>
                  <div className="mt-4 text-[16px] leading-6 w-50">
                    Managing Director,<br />
                    Renaissance Innovation Labs, Philanthrolab
                  </div>
                </div>
              </div>
            </div>

            <div className="relative right-10 top-9">
              <div className="rounded-t-full border-[6px] border-blue-600/80 relative top-20 bg-blue-600/80 w-[350px] h-[490px] z-10">
                <img
                  src="/shammah.jpg"
                  alt="Shammah Nei"
                  className="h-[470px] w-[500px] bg-zinc-700 relative left-3 rounded-t-full "
                />
              </div>
              <img src="/star.svg" className="absolute -top-[-1rem] right-20" />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <div className="absolute left-[18%] top-[4%] w-[265px] h-[260px] rounded-full opacity-10 bg-blue-800" />
            <div className="absolute right-[-2%] top-[-26%] w-[450px] h-[700px] rounded-full opacity-30 blur-3xl bg-[radial-gradient(circle_at_60%_60%,theme(colors.blue.400),transparent_65%)]" />
            <div className="absolute right-[19.3%] top-[48%] w-[257px] h-[257px] rounded-full opacity-10 bg-blue-800" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 mt-30">
        <div className="flex items-start justify-between">
          <h2 className="font-hero text-[42px] text-blue-600">
            Experts<span className="text-black">/</span>Judges
          </h2>
          <p className="hidden md:block text-[20px] max-w-xs">
            Meet the industry leaders <br/> shaping the future of AI.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded-[50px] bg-[#DEDEE0] p-9 py-12 relative">
            <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#DEDEE0] rotate-45" />
            <div className="text-[30px] font-semibold">
              Ayaosi <br /> Godfrey
            </div>
            <div className="text-[20px] leading-[30px]">
              Co-Organizer GDG, PH
            </div>
            <p className="font-inter mt-4 text-[12.6px] leading-[20px] tracking-[1px]">
              Ayaosi Godfrey is an experienced product manager with over 8 years
              building and scaling digital products across Africa. He leads
              Helbgade Technologies Limited, a digital product agency helping
              organizations create modern, scalable, and impactful experiences.
            </p>
          </div>

          <div className="rounded-[50px] overflow-hidden relative">
            <img
              src="/godfrey.jpg"
              alt="godfrey"
              className="h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-[#00000040]" />
          </div>

          <div className="rounded-[50px] bg-[#DEDEE0] p-9 py-12 relative">
            <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#DEDEE0] rotate-45" />
            <div className="text-[30px] font-semibold">
              Sophia <br /> Nei
            </div>
            <div className="text-[19.5px] leading-[30px]">
              Founder, Females in <br /> Gaming Network
            </div>
            <p className="font-inter mt-4 text-[12.6px] leading-[20px] tracking-[1px]">
              Sophia Nei is a community leader and advocate for inclusive
              innovation in African gaming. She is the founder of Females in
              Gaming Network (FIGN), empowering women and girls across Africa
              through game development, esports, and creative technology.
            </p>
          </div>

          <div className="rounded-[50px] overflow-hidden relative">
            <img
              src="/sophia.png"
              alt="Guest Judge"
              className="h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-[#00000040]" />
          </div>

          <div className="rounded-[50px] overflow-hidden relative">
            <img
              src="/boma.jpg"
              alt="Boma Amakiri"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-[#00000040]" />
          </div>

          <div className="rounded-[50px] bg-[#DEDEE0] p-9 py-12 relative">
            <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#DEDEE0] rotate-45" />
            <div className="text-[30px] font-semibold">
              Boma <br /> Amakiri
            </div>
            <div className="mt-1 text-[19.5px]">
              Founder &amp; CEO of <br /> Scaleoff and Squegy
            </div>
            <p className="font-inter mt-4 text-[13px] leading-[20px] tracking-[1px]">
              Boma Amakiri is the Founder &amp; CEO of Scaleoff and Squegy,
              leading innovative teams that build scalable solutions across tech
              and on‑demand services. He’s passionate about technology, and
              creating products that make a real impact.
            </p>
          </div>

          <div className="rounded-[50px] overflow-hidden relative">
            <img
              src="/eric.png"
              alt="eric"
              className="h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-[#00000040]" />
          </div>

          <div className="rounded-[50px] bg-[#DEDEE0] p-9 py-12 relative">
            <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#DEDEE0] rotate-45" />
            <div className="text-[30px] font-semibold">
              Eric <br /> Aprioku
            </div>
            <div className="mt-1 text-[19.5px]">
              Founder and CEO of Asyncpay
            </div>
            <p className="font-inter mt-4 text-[12.6px] leading-[20px] tracking-[1px]">
              Eric Aprioku is the Founder and CEO of Asyncpay, and is also a
              highly skilled full stack software engineer skilled in building
              frontend and backend web applications using Laravel, Vue, React
              and Node. He is always learning, upgrading and mentoring those
              around him to skyrocket themselves in the tech ecosystem.
            </p>
          </div>

          <div className="rounded-[50px] overflow-hidden relative col-start-2">
            <img
              src="/edward.jpg"
              alt="Edward Essien Ndiyo"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-[#00000040]" />
          </div>

          <div className="rounded-[50px] bg-[#DEDEE0] p-8 py-12 relative w-[295px] h-[452px]">
            <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#DEDEE0] rotate-45" />
            <div className="text-[30px] font-semibold">Edward Essien Ndiyo</div>
            <div className="mt-1 text-[20px]">
              Lead, Innovations, Speedlink HI‑Tech Solutions Ltd
            </div>
            <p className="font-inter mt-4 text-[13px] leading-[16px] tracking-[1px]">
              Edward Ndiyo is a Software Engineer and the Head of Innovations at
              Speedlink HI‑Tech Solutions Ltd, where he leads teams in building
              intelligent, high‑impact software systems across multiple domains.
              With over three years of experience in software development and a
              growing focus on DevOps engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full py-1 px-10 mt-30 bg-[#DEDEE0]">
        <div className=" p-8 md:p-10">
          <div className="flex items-start justify-between">
            <h2 className="font-hero text-[42px] relative right-7">
              <span className="text-blue-600">Why</span> Attend?
            </h2>
            <p className="hidden md:block max-w-sm text-[19px] text-[#7E7E7E]">
              Discover why Next‑Gen AI <br/> Summit is the must‑attend event <br/> for AI
              professionals, innovators, <br/> and industry leaders.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-25 gap-y-10 relative right-8">
            <div className="relative rounded-[50px] bg-zinc-900 text-white p-13 overflow-hidden w-[610px] h-[289px]">
              <div className="flex flex-col ">
                <div className="text-[20px] font-semibold tracking-wide">
                  CUTTING‑EDGE INSIGHTS
                </div>
                <div
                  aria-hidden
                  className="font-syne absolute -bottom-0 left-8 text-[200px] md:text-[300px] font-medium leading-[160px] bg-gradient-to-b from-[#2DA0FF] bg-clip-text text-transparent pointer-events-none"
                >
                  01
                </div>
              </div>
              <p className="mt-3 text-[18px] leading-8 max-w-xs absolute right-10 bottom-12 font-syne">
                Gain firsthand knowledge <br /> from top AI experts and <br /> pioneers
                shaping the <br/> industry.
              </p>
            </div>
            <div className="relative rounded-[50px] bg-zinc-900 text-white p-13 overflow-hidden w-[610px] h-[289px]">
             <div className="flex flex-col">
                <div className="text-[20px] font-semibold tracking-wide">
                  HANDS‑ON LEARNING
                </div>
                <div
                  aria-hidden
                  className="font-syne absolute bottom-[2px] left-6 text-[200px] md:text-[300px] font-medium leading-[160px] bg-gradient-to-b from-[#2DA0FF] bg-clip-text text-transparent pointer-events-none"
                >
                  02
                </div>
              </div>
              <p className="mt-3 text-[18px] leading-8 max-w-xs absolute right-8 bottom-12 font-syne">
                Participate in interactive <br /> workshops, live demos, <br/> and deep‑dive
                sessions to <br/> sharpen your skills.
              </p>
            </div>
            <div className="relative rounded-[50px] bg-zinc-900 text-white p-13 overflow-hidden w-[610px] h-[289px]">
              <div className="text-[20px] font-semibold tracking-wide">
                EXCLUSIVE NETWORKING
              </div>
              <p className="mt-9 text-[18px] leading-8 max-w-xs font-syne">
                Connect with AI leaders, <br/> investors, startups, and <br/> fellow
                professionals at <br/> curated networking events.
              </p>
              <div
                aria-hidden
                className="font-syne absolute -bottom-[1px] right-2 text-[200px] md:text-[300px] font-medium leading-[160px] bg-gradient-to-b from-[#2DA0FF] bg-clip-text text-transparent pointer-events-none"
              >
                03
              </div>
            </div>
            <div className="relative rounded-[50px] bg-zinc-900 text-white p-13 overflow-hidden w-[610px] h-[289px]">
              <div className="text-[20px] font-semibold tracking-wide">
                HACKATHON
              </div>
              <p className="mt-9 text-[18px] leading-8 max-w-xs font-syne">
                Explore groundbreaking AI <br/> solutions, from emerging <br/> startups to
                tech giants <br/> redefining the future.
              </p>
              <div
                aria-hidden
                className="font-syne absolute -bottom-[-10px] right-2 text-[200px] md:text-[300px] font-medium leading-[160px] bg-gradient-to-b from-[#2DA0FF] bg-clip-text text-transparent pointer-events-none"
              >
                04
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 mt-30">
        <div className="flex items-start justify-between">
          <h2 className="font-hero text-[48px]">
            <span className="text-blue-600">Register</span>
            <br />
            Now
          </h2>
          <p className="hidden md:block max-w-xs text-[20px]">
            Secure your spot at the RIL <br/> Innovation Workshop Series <br/> 2025 and join
            the future of AI <br/> innovation.
          </p>
        </div>
        <div className="relative mt-6 rounded-[50px] bg-[#1E7BF6] px-10 py-10 md:px-16 md:py-14 w-[1240px] h-[442px] overflow-hidden">
          <LargeCountdown target={eventStart} />
          <img
            src="/star-time.svg"
            alt=""
            className="pointer-events-none absolute right-[-1%] bottom-[-1%] w-[280px] h-[280px]"
          />
        </div>
        <div className="mt-6 flex items-center justify-center">
          <Link
            href="#"
            className="inline-flex w-[379px] h-[68px] items-center justify-center rounded-xl border border-blue-600 px-7 text-[16px] font-medium text-blue-600 hover:bg-blue-50"
          >
            Register Now<span className="ml-2 text-blue-600/70">— it’s free</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
