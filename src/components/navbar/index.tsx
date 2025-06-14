'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import './navbar.scss'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (menuRef.current && !menuRef.current.contains(target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="header">
      <div className="top-bar">
        {/* Burger Button */}
        <div
          className="burger"
          onClick={() => setOpen(!open)}
          role="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setOpen(!open)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Right-side Dropdown Menu */}
      <nav
        className={`menu menu--right ${open ? 'open' : ''}`}
        ref={menuRef}
      >
        <Image
          src="/images/skull-logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="skull"
        />
        <Link href="/" onClick={() => setOpen(false)}>THRALL</Link>
        <Link href="/about" onClick={() => setOpen(false)}>ABOUT</Link>
        <Link href="/play" onClick={() => setOpen(false)}>PLAY</Link>
      </nav>
    </header>
  )
}
