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
const swedish: Language = { code: 'sw', label: 'SW', flag: '/swedish-logo.png' };

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
    if (selected.code === 'en') {
      setOpen(!open);
    }
  };

  const selectSwedish = () => {
    setSelected(swedish);
    setOpen(false);
  };

  return (
    <div
      className="dropdownmenu"
      ref={dropdownRef}
      onClick={toggleDropdown}
    >
      <div className="dropdownmenu__english">
        <Image
          src={selected.flag}
          alt={selected.label}
          width={56}
          height={56}
          className="dropdownmenu__englishLogo"
        />
        <span className='dropdownmenu__label'>{selected.label}</span>
      </div>
      {open && selected.code === 'en' && (
        <div className="dropdownmenu__swedishcontainer">
          <div
            className="dropdownmenu__swedish"
            onClick={selectSwedish}
          >
            <Image
              src={swedish.flag}
              alt={swedish.label}
              width={56}
              height={56}
              className='dropdownmenu__swedishLogo'
            
            />
            <span className='dropdownmenu__label'>{swedish.label}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;