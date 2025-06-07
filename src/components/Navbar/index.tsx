"use client";
import "./navbar.scss";
import React from "react";
import Link from "next/link";
import Logo from "../Logo";
import LanguageDropdown from "../LanguageDropDownMenu";
import { NavLink } from "@/types/type";
import { List } from "@phosphor-icons/react/dist/ssr";


const navLinks: NavLink[] = [
  { name: "Thrall", path: "/thrall" },
  { name: "About", path: "/about" },
  { name: "Play", path: "/play" },
];

const Navbar = () => {
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
        <button>
        <List size={60} weight="light" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
