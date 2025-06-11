'use client'
import Navbar from "../Navbar";
import { usePathname } from 'next/navigation';
import './header.scss'
 
const Header = () => {
   const pathname = usePathname();
  const homePage = pathname === '/';

    return(
      <header className={`header ${homePage ? 'home' : ''}`} >
        {homePage && (
      <div className="header__container">
        <h1 className="header__title">THRALL</h1>
        <h2 className="header__subtitle">THE POSSESSION</h2>
      </div>
        )}
        <Navbar/>
      </header>
    )
}
export default Header