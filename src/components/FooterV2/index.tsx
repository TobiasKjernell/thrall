import React from 'react'
import './footerV2.scss'
import Logo from "../Logo"

const FooterV2 = () => {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer">
            <div className="footer__logo">
                <Logo/>
            </div>
            <div className="footer__description">
                <div className='footer__description--about'>
                    <p><strong>Genres:</strong> Combat · Light Strategy · Narrative</p>
                    <p><strong>Target Experience:</strong> Emergent gameplay and creative player-facing tools/mechanics</p>
                </div>
                <h3 className="footer__description--title">© {currentYear} Copyright. Thrall. All rights reserved.</h3>
                <div className="footer__description--items">
                    <a href="https://itch.io/docs/legal/terms">Terms and conditions</a>
                    <span>|</span>
                    <a href="https://itch.io/docs/legal/privacy-policy">Privacy policy</a>
                </div>
            </div>
        </footer>
    )
}

export default FooterV2