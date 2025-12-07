"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState } from "react";

const Play = ({ className = "h-[96px] w-[96px]" }: { className?: string }) => (
  <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border-[3px] border-black shadow ${className}`}>
    <svg viewBox="0 0 24 24" className="h-15 w-15 mx-auto my-3 relative top-1 fill-black">
      <path d="M8 5v14l11-7z" />
    </svg>
  </div>
);

export default function PreviousEvent() {
  const [tab, setTab] = useState("photos");
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
                <div className="w-3 h-3 rounded-full bg-blue-600 mt-0"></div>
                Limiting
              </li>
              <li className="flex flex-row items-center justify-center gap-1">
                <div className="w-3 h-3 rounded-full bg-blue-600 mt-0"></div>
                Fine Tuning
              </li>
              <li className="flex flex-row items-center justify-center gap-1">
                <div className="w-3 h-3 rounded-full bg-blue-600 mt-0"></div>
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

      <section className="mx-auto w-[1240px] h-[638px] px-6 mt-20">
        <div className="relative rounded-[50px] bg-zinc-900 text-white p-18">
          <h3 className="font-hero text-[40px] text-blue-600">
            Event Overview
          </h3>
          <p className="mt-6 text-[18px] leading-[40px] max-w-[1300px]">
            The October 2025 edition of the Renaissance Innovation Labs Monthly
            Innovation Workshop Series marked the <br /> first in a new
            initiative to inspire creativity, knowledge sharing, and responsible
            innovation. <br />
            Held on Thursday 30 and Friday 31 October 2025, the workshop themed
            “Building Smarter: Innovating Responsibly <br /> in the Age of AI”
            brought together innovators, founders, policy advocates, tech
            enthusiasts, and industry leaders <br /> for two days of learning
            and collaboration. The sessions explored how artificial intelligence
            is transforming <br />
            industries such as fintech, health, gaming, data policy, and product
            development. Through talks, panel discussions, <br /> an Ask Me
            Anything session, and a hands-on hackathon, participants gained
            insights on ethical, inclusive, and <br /> sustainable innovation.{" "}
            <br /> This edition laid a strong foundation for future workshops
            that will continue to connect builders and thinkers <br /> committed
            to using technology for positive impact.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative bg-white">
            <img src="/arrow.png" alt="decor" className="w-[470px] h-[500px]" />
          </div>
          <div>
            <h3 className="font-hero text-[48px] text-blue-600">
              <span className="text-black pr-2">Event</span> Goals
            </h3>
            <ul className="mt-6 space-y-10 text-[18.8px] leading-7">
              <li>
                <span className="font-bold ">
                  Strengthen Collaboration & Connections
                </span>
                <br />
                Enhance teamwork across technical, design, and strategy
                disciplines <br />
                during the 2-day hackathon while fostering meaningful
                connections among tech professionals and builders.
              </li>
              <li>
                <span className="font-bold">
                  Enhance Problem-Solving Skills
                </span>
                <br />
                Build participants’ ability to frame real-world challenges and
                create <br />
                practical solutions, supported by educational and innovative
                talks <br />
                aligned with the workshop theme
              </li>
              <li>
                <span className="font-bold">Apply Modern Innovation Tools</span>{" "}
                <br />
                Increase confidence in using AI, data modeling, and workflow
                automation through hands-on experience.
              </li>
              <li>
                <span className="font-bold">
                  Generate Impact & Brand Visibility
                </span>{" "}
                <br />
                Develop solutions that tackle real industry challenges while
                enhancing Renaissance Innovation Labs’ visibility through
                partnerships and <br />
                media coverage.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 mt-16">
        <h3 className="font-hero text-[48px] text-blue-600">
          <span className="text-black">Event</span> Objectives
        </h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-7">
          <div className="space-y-9 text-[20px] leading-8">
            <p className="w-[580px]">
              The October Innovation Workshop brought together over 50 
              innovators for a high-energy, hands-on experience in applied
              technology and problem-solving. Participants formed seven
              multidisciplinary teams, combining technical, design, and strategy
              skills to tackle a real-world challenge from Metro General
              Hospital’s Emergency Department, including long wait times, staff
              burnout, and operational inefficiencies.
            </p>
            <p>
              Across two days, teams explored solutions using AI, data
              modeling, workflow automation, and human‑centered design. Ideas
              included bias‑aware triage systems, predictive staffing
              dashboards, multilingual digital intake platforms, and mobile
              pre‑assessment apps.
            </p>
            <p>
              Feedback was overwhelmingly positive. More than 80 percent of
              participants reported improved technical collaboration, stronger
              problem‑framing skills, and practical application of modern
              innovation methods. The workshop reinforced the series’
              reputation as a hub where technology, creativity, and real‑world
              impact converge.
            </p>
          </div>
          <div className="relative">
            <img src="/plane.svg" alt="decor" className="w-[470px] h-[331px]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 mt-16">
        <h3 className="font-hero text-[48px] text-blue-600">Gallery</h3>
        <div className="mt-1 text-[18px] font-semibold">
          <button
            onClick={() => setTab("photos")}
            className={tab === "photos" ? "text-blue-600" : "text-zinc-500"}
          >
            Photos
          </button>
          <button
            onClick={() => setTab("videos")}
            className={tab === "videos" ? "text-blue-600 ml-4" : "text-zinc-500 ml-4"}
          >
            Videos
          </button>
        </div>
        {tab === "photos" ? (
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-[8px]">
              <img src="/event-gallery/gallery-1.jpg" alt="gallery" className="w-[389px] h-[424px] object-cover" />
            </div>
            <div className="overflow-hidden rounded-[8px]">
              <img src="/event-gallery/gallery-2.jpg" alt="gallery" className="w-[389px] h-[424px] object-cover" />
            </div>
            <div className="overflow-hidden rounded-[8px]">
              <img src="/event-gallery/gallery-3.jpg" alt="gallery" className="w-[389px] h-[424px] object-cover" />
            </div>

            <div className="overflow-hidden rounded-[8px]">
              <img src="/event-gallery/gallery-4.jpg" alt="gallery" className="w-[389px] h-[424px] object-cover" />
            </div>
            <div className="overflow-hidden rounded-[8px]">
              <img src="/event-gallery/gallery-5.jpg" alt="gallery" className="w-[389px] h-[424px] object-cover" />
            </div>
            <div className="overflow-hidden rounded-[8px]">
              <img src="/event-gallery/gallery-6.jpg" alt="gallery" className="w-[389px] h-[424px] object-cover" />
            </div>

            <div className="overflow-hidden rounded-[8px]">
              <img src="/event-gallery/gallery-7.jpg" alt="gallery" className="w-[389px] h-[424px] object-cover" />
            </div>
            <div className="overflow-hidden rounded-[8px]">
              <img src="/event-gallery/gallery-8.jpg" alt="gallery" className="w-[389px] h-[424px] object-cover" />
            </div>
            <div className="overflow-hidden rounded-[8px]">
              <img src="/event-gallery/gallery-9.jpg" alt="gallery" className="w-[389px] h-[424px] object-cover" />
            </div>

            <div className="col-span-3 grid md:grid-cols-2 gap-1">
              <div className="overflow-hidden rounded-[8px] md:h-[849px] md:w-[558px]">
                <img src="/event-gallery/gallery-10.jpg" alt="gallery portrait" className="object-cover" />
              </div>
              <div className="grid gap-4 relative right-10">
                <div className="overflow-hidden rounded-[8px] md:h-[412px] md:w-[638px]">
                  <img src="/event-gallery/gallery-11.jpg" alt="gallery audience" className="object-cover" />
                </div>
                <div className="overflow-hidden rounded-[8px] md:h-[412px] md:w-[638px]">
                  <img src="/event-gallery/gallery-12.jpg" alt="gallery group" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-[8px] md:h-[856px] md:w-[546px] md:row-span-2">
              <img src="/event-gallery/vid-1.jpg" alt="video" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/10" />
              {Play({ className: "h-[96px] w-[96px]" })}
            </div>
            <div className="relative overflow-hidden rounded-[8px] md:h-[415px] md:w-[640px] right-14">
              <img src="/event-gallery/vid-2.jpg" alt="video" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/10" />
              {Play({ className: "h-[96px] w-[96px]" })}
            </div>
            <div className="relative overflow-hidden rounded-[8px] md:h-[415px] md:w-[640px] right-14">
              <img src="/event-gallery/vid-3.jpg" alt="video" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/10" />
              {Play({ className: "h-[96px] w-[96px]" })}
            </div>
            <div className="relative overflow-hidden rounded-[8px] md:h-[377.31px] md:w-[593.37px] right-1">
              <img src="/event-gallery/vid-4.jpg" alt="video" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/10" />
              {Play({ className: "h-[96px] w-[96px]" })}
            </div>
            <div className="relative overflow-hidden rounded-[8px] md:h-[377.31px] md:w-[593.37px] right-4">
              <img src="/middle-series.jpg" alt="video" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/10" />
              {Play({ className: "h-[96px] w-[96px]" })}
            </div>
            <div className="relative overflow-hidden rounded-[16px] md:col-span-2 md:h-[778px] md:w-[1209px] right-1">
              <img src="/event-gallery/vid-6.jpg" alt="video" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/10" />
              {Play({ className: "h-[96px] w-[96px]" })}
            </div>
          </div>
        )}
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

      <section className="mx-auto max-w-7xl px-6 mt-16">
        <div className="flex items-start justify-between">
          <h2 className="font-hero text-[42px] text-blue-600">
            Experts<span className="text-black">/</span>Judges
          </h2>
          <p className="hidden md:block text-[20px] max-w-xs">
            Meet the industry leaders <br /> shaping the future of AI.
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

          <div className="rounded-[50px] bg-[#DEDEE0] p-8 py-12 relative">
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

      <Footer />
    </div>
  );
}
