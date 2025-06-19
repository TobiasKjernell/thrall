import './footerV3.scss';
import Logo from "../Logo";

const FooterV3 = () => {
    return(
        <footer className="footer">
            <h4 className='footer__title'>Created by:</h4>
            <div className="footer__wrapper">
                <div className="footer__wrapper--logo">
                    <Logo/>
                </div>
                <div className="footer__wrapper--introduction">
                    <p>Genres: Combat · Light Strategy · Narrative</p>
                    <p>Target Experience</p>
                    <ul>
                        <li>Emergent gameplay</li>
                        <li>Creative player-facing tools/mechanics</li>
                    </ul>
                </div>
                <div className="footer__wrapper--icons">
                    <p>16+</p>
                </div>
            </div>
            <p className='footer__copyright'>© 2024 Copyright. Thrall. All rights reserved.</p>
        </footer>
    )
}

export default FooterV3