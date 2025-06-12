'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import './languageMenu.scss'

type Language = {
  code: string;
  label: string;
  flag: string;
};

const english: Language = { code: 'en', label: 'EN', flag: '/english-logo.png' };
const swedish: Language = { code: 'sw', label: 'SW', flag: '/swedish-lg-logo.png' };

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Language>(english);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

const toggleDropdown = () => {
  setOpen(!open);
};

  const selectSwedish = () => {
    setSelected(swedish);
    setOpen(false);
  };

  return (
    <div className="dropdownmenu" ref={dropdownRef} onClick={toggleDropdown}>
    <div className="dropdownmenu__english">
      <Image
        src={selected.flag}
        alt={selected.label}
        width={56}
        height={56}
        className="dropdownmenu__englishLogo"
        priority
      />
      <span className="dropdownmenu__label">{selected.label}</span>
    </div>

    {open && (
      <div className="dropdownmenu__swedishcontainer">
        {selected.code !== 'en' && (
          <div
            className="dropdownmenu__english"
            onClick={() => {
              setSelected(english);
              setOpen(false);
            }}
          >
            <Image
              src={english.flag}
              alt={english.label}
              width={56}
              height={56}
              className="dropdownmenu__englishLogo"
              priority
            />
            <span className="dropdownmenu__label">{english.label}</span>
          </div>
        )}

        {selected.code !== 'sw' && (
          <div
            className="dropdownmenu__swedish"
            onClick={() => {
              setSelected(swedish);
              setOpen(false);
            }}
          >
            <Image
              src={swedish.flag}
              alt={swedish.label}
              width={64}
              height={60}
              className="dropdownmenu__swedishLogo"
              priority
            />
            <span className="dropdownmenu__label">{swedish.label}</span>
          </div>
        )}
      </div>
    )}
  </div>
  );
};

export default LanguageDropdown;