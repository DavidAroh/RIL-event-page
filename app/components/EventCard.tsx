import React from 'react'

export type Event = {
  status: 'Upcoming' | 'Previous'
  series: string
  title: string
  description: string
  focusAreas: string
  dateRange: string
  time: string
  location: string
  speakers: string
  image: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export const IconCalendar = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className ?? 'h-4 w-4'}>
    <rect x="3" y="5" width="18" height="16" rx="2"/>
    <path d="M16 3v4M8 3v4"/>
    <path d="M3 9h18"/>
  </svg>
)

export const IconPin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className ?? 'h-4 w-4'}>
    <path d="M12 21c4.5-6 6-8.4 6-11a6 6 0 10-12 0c0 2.6 1.5 5 6 11z"/>
    <circle cx="12" cy="10" r="2.5"/>
  </svg>
)

export const IconUser = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className ?? 'h-4 w-4'}>
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20a8 8 0 0116 0"/>
  </svg>
)

export default function EventCard({ e }: { e: Event }) {
  const badgeColor = e.status === 'Upcoming' ? 'bg-[#F2F2F2] text-blue-700 font-medium' : 'bg-[#F2F2F2] text-red-700 font-medium'
  return (
    <div className="rounded-2xl shadow-lg border border-zinc-100 overflow-hidden bg-white p-4">
      <div className="relative">
        <img src={e.image} alt={e.title} className="w-full h-56 object-cover rounded-lg" />
        <span className={`absolute top-3 right-3 text-xs px-3 py-2 rounded-xl ${badgeColor}`}>{e.status}</span>
      </div>
      <div className="gap-3">
        <div className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium bg-[#73797F] mt-2.5 mb-5 text-white">{e.series}</div>
        <h3 className="mt-1 text-[17px] font-bold leading-snug">{e.title}</h3>
        <p className="mt-2 text-sm text-zinc-600">{e.description}</p>
        <div className="mt-3 text-sm">
          <div className="font-bold">Focus Areas:<span className="text-zinc-700 font-medium"> {e.focusAreas}</span>
          </div>
        </div>
        <div className="mt-4 space-y-3 text-[13.5px] text-[#73797F]">
          <div className="flex items-center gap-2">
            <IconCalendar className="h-5 w-5 text-[#73797F]" />
            <span>{e.dateRange}</span>
          </div>
          <div className="flex items-center gap-2">
            <IconCalendar className="h-5 w-5 text-[#73797F]" />
            <span>{e.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <IconPin className="h-5 w-5 text-[#73797F]" />
            <span>{e.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <IconUser className="h-5 w-5 text-[#73797F]" />
            <span>{e.speakers}</span>
          </div>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <a
            href={e.primaryCta.href}
            className={`inline-flex items-center justify-center rounded-xl px-4 text-sm font-medium w-[378px] h-[56px] ${
              e.status === 'Previous'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {e.primaryCta.label}
          </a>
        </div>
      </div>
    </div>
  )
}
