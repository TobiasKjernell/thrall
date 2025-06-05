import Link from "next/link";

const navLinks = [
    {name: "Home", path: "/"},
    {name: "Thrall", path: "/thrall"},
    {name: "About", path: "/about"},
    {name: "Play", path: "/play"}

    
]

const languages = [
  { code: 'en', label: 'EN', flag: '/flags/us.svg' },
  { code: 'fr', label: 'FR', flag: '/flags/fr.svg' },
];
const Header = () => {
    return(
        <header>
            <nav>


            </nav>
        
        </header>
    )
}

export default Header