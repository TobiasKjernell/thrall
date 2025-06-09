'use client';
import Image from 'next/image';
import './footer.scss';
 
const Footer = () => {
    return(
        <footer className="footer">
        <button className="team-button">
          <div className="button-image-wrapper">
            <Image
              src="/Images/frame4.png"
              alt="The Team"
              fill
              priority
              className="button-image"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <span className="button-text">THE TEAM</span>
        </button>
      </footer>
    )
}
 
export default Footer
 
