"use client";
import { navLinks } from "@/data/navbardata";
import { useState } from "react";
import Logo from "../Logo";
import Link from "next/link";
import LanguageDropdown from "../LanguageDropdown";
import { List } from "@phosphor-icons/react";
import "./navbar.scss";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu((prev) => !prev);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
          <Link href="/" onClick={() => setOpenMenu(false)}>
            <Logo />
          </Link>
      </div>
      <div className="navbar__container">
        {navLinks.map(({ name, path }) => (
          <Link key={path} href={path} className="navbar__links">
            {name}
          </Link>
        ))}
      </div>
      <div className="navbar__flexContent">
        <LanguageDropdown />
        <div className="navbar__burger">
          <button onClick={toggleMenu}>
            <List size={60} weight="light" />
          </button>
        </div>
      </div>
      {openMenu && (
        <div className={`navbar__mobile ${openMenu ? "open" : ""}`}>
          <Link href="/" onClick={() => setOpenMenu(false)}>
            <Logo />
          </Link>
          {navLinks.map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className="navbar__links"
              onClick={() => setOpenMenu(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
export default Navbar;
