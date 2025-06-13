'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './footer.scss';

const Footer = () => {
  const router = useRouter();

  return (
    <div className="footer-wrapper">
      <div className="footer-spacer" />
      <footer className="footer">
        <button
          className="team-button"
          onClick={() => router.push('/team')}
          aria-label="Meet the Team"
        >
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
        </button>
      </footer>
    </div>
  );
};

export default Footer;

