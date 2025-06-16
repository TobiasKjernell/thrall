import './footerV2.scss'
import Logo from "../Logo"

const FooterV2 = () => {
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
                <h3 className="footer__description--title">© 2024 Copyright. Thrall. All rights reserved.</h3>
                <div className="footer__description--items">
                    <a href="">Terms and conditions</a>
                    <span>|</span>
                    <a href="">Privacy policy</a>
                </div>
            </div>
        </footer>
    )
}

export default FooterV2