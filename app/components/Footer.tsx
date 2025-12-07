import Link from 'next/link'
import Image from 'next/image'

function IconX({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className ?? 'h-4 w-4'}>
      <path d="M4 4L20 20" />
      <path d="M20 4L4 20" />
    </svg>
  )
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className ?? 'h-4 w-4'}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8" cy="8" r="1.8" />
      <path d="M8 11.5V18" />
      <path d="M12 18v-3.8c0-1.5 1.2-2.7 2.7-2.7s2.3 1.1 2.3 2.5V18" />
    </svg>
  )
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className ?? 'h-4 w-4'}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1.3" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mt-24 bg-zinc-950 text-zinc-200">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image src="/ril-logo-2.svg" alt="renaissance innovation labs" width={220} height={60} />
            </div>
            <div className="space-y-3 text-sm mt-10">
              <div className="text-zinc-400 text-[14px] mb-2.5 tracking-wide">Contact Us</div>
              <div>Program@renaissance.ng</div>
              <div>(+234) 705 7058 359</div>
              <div>7 Grace Avenue off Kemka Street, Location Isostop, Muogba NTA Road</div>
            </div>
          </div>
          <div>
            <div className="text-zinc-400 text-[14px] tracking-wide">Company</div>
            <div className="mt-3 space-y-6 text-sm flex flex-col">
              <Link href="#" className="hover:text-white">About Us</Link>
              <Link href="#" className="hover:text-white">Build with us</Link>
              <Link href="#" className="hover:text-white">Careers</Link>
            </div>
          </div>
          <div>
            <div className="text-zinc-400 text-sm tracking-wide">Innovations</div>
            <div className="mt-3 space-y-6 text-sm flex flex-col">
              <Link href="#" className="hover:text-white">RIL Drop</Link>
              <Link href="#" className="hover:text-white">Our playground</Link>
            </div>
          </div>
          <div>
            <div className="text-zinc-400 text-[14px] tracking-wide">Social</div>
            <div className="mt-3 flex items-center gap-3">
              <a aria-label="Twitter/X" href="#" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                <IconX className="h-4 w-4 text-white" />
              </a>
              <a aria-label="LinkedIn" href="#" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                <IconLinkedIn className="h-4 w-4 text-white" />
              </a>
              <a aria-label="Instagram" href="#" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                <IconInstagram className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-[12px] text-zinc-400 text-center">© 2024 Renaissance Innovation Labs. All rights reserved.</div>
      </div>
    </footer>
  )
}
