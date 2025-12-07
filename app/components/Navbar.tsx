"use client"
import Link from 'next/link'
import NavDropdown from './NavDropdown'

export default function Navbar() {
    return (
        <header className="sticky top-0 z-30 bg-white">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-20 items-center gap-20 ">
                    <div className="flex items-center">
                        <img src="/ril-logo.svg" alt="renaissance innovation labs" className='w-40 h-40' />
                    </div>
                    <div className="flex justify-end gap-5 w-full text-base">
                        <Link href="#" className="hover:text-blue-600">About us</Link>
                        <NavDropdown label="Our Services" items={[
                            { href: '#', label: 'Consulting' },
                            { href: '#', label: 'Training' },
                            { href: '#', label: 'Workshops' },
                        ]} />
                        <NavDropdown label="Innovation Labs (Drop)" items={[
                            { href: '#', label: 'RIL Drop' },
                            { href: '#', label: 'Our playground' },
                        ]} />
                        <Link href="#" className="hover:text-blue-600">RIL Playground</Link>
                        <Link href="#" className="hover:text-blue-600">Contact us</Link>
                    </div>
                </div>
                <hr className="border-zinc-200 mt-3.5" />
            </div>
        </header>
    )
}

