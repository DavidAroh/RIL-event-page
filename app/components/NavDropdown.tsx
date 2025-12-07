'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

type Item = { href: string; label: string }

export default function NavDropdown({ label, items }: { label: string; items: Item[] }) {
  const [open, setOpen] = useState(false)
  const btnRef = useRef<HTMLButtonElement | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!open) return
      const t = e.target as Node
      if (panelRef.current && !panelRef.current.contains(t) && btnRef.current && !btnRef.current.contains(t)) {
        setOpen(false)
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="relative">
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-1 hover:text-blue-600"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <span className="ml-1">▾</span>
      </button>
      {open && (
        <div
          ref={panelRef}
          role="menu"
          className="absolute left-0 mt-2 bg-white border border-zinc-200 rounded-md shadow-md min-w-56"
        >
          <div className="flex flex-col py-2 text-sm">
            {items.map((it) => (
              <Link key={it.label} href={it.href} role="menuitem" className="px-3 py-2 hover:bg-zinc-50">
                {it.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

