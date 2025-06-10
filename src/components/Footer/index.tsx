'use client';
import Image from 'next/image';
import './footer.scss';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  return (
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
        <span className="button-text"></span>
      </button>
    </footer>
  );
};

export default Footer;
