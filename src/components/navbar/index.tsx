'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import './navbar.scss'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [language, setLanguage] = useState<'en' | 'sv'>('en')

  const langRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleLangSelect = (lang: 'en' | 'sv') => {
    setLanguage(lang)
    setLangOpen(false)
  }

  const handleClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as Node
    if (langRef.current && !langRef.current.contains(target)) {
      setLangOpen(false)
    }
    if (menuRef.current && !menuRef.current.contains(target)) {
      setOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [handleClickOutside])

  return (
    <header className="header">
      <div className="top-bar">
        {/* Language Selector */}
        <div className="language-switcher" ref={langRef}>
          <button
            className="flag-button"
            onClick={() => setLangOpen(!langOpen)}
            aria-haspopup="true"
            aria-expanded={langOpen}
            aria-label="Select language"
          >
            <Image
              src={language === 'en' ? '/images/flag-uk.png' : '/images/flag-se.png'}
              alt={language}
              width={32}
              height={32}
              priority
            />
          </button>

          {langOpen && (
            <div className="language-dropdown">
              <button onClick={() => handleLangSelect('en')}>
                <Image src="/images/flag-uk.png" alt="EN" width={24} height={24} />
                <span>ENGLISH</span>
              </button>
              <button onClick={() => handleLangSelect('sv')}>
                <Image src="/images/flag-se.png" alt="SV" width={24} height={24} />
                <span>SWEDISH</span>
              </button>
            </div>
          )}
        </div>

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

      {/* Dropdown Menu */}
      {open && (
        <nav className="menu" ref={menuRef}>
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
      )}
    </header>
  )
}
