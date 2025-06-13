"use client";
import "./navbar.scss";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import LanguageDropdown from "../LanguageDropDownMenu";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { navLinks } from "@/data/navbardata";
 


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
      <Logo />
      </div>
      <div className="navbar__container">
        {navLinks.map(({ name, path }) => (
          <Link key={path} href={path} className="navbar__links">
            {name}
          </Link>
        ))}
      </div>
      <LanguageDropdown />
      <div className="navbar__burger">
          {!openMenu ? <List onClick={toggleMenu} size={60} weight="light" /> : <X onClick={toggleMenu} size={60} weight="light" />  }
      
      {openMenu && (
        <div className={`navbar__mobile ${openMenu ? "open" : ""}`}>
          <Logo/>
          {navLinks.map(({name, path}) =>(
            <Link  key={path}
              href={path}
              className="navbar__links"
              onClick={() => setOpenMenu(false)}>
                {name}
              </Link>
          ))}
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
