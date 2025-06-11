'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import './AboutTheGame.scss';

export default function AboutTheGame() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="aboutGame">
      <div className="overlay">
        <div className="content">
          <h1>ABOUT THE GAME</h1>

          <p>
            YOU ARE THE FORGOTTEN GHOST OF A TYRANT KING,
            <br />
            <br />
            YOU POSSESS THE LIVING
            <br />
            {isMobile ? (
              <>TO RECLAIM FRAGMENTS OF YOUR FORMER SELF</>
            ) : (
              <>TO RECLAIM FRAGMENTS OF YOUR FORMER SELF<br />WHETHER FLESH OR WITH YOUR CURSED ARMOR</>
            )}
          </p>

          <div className="characterImage">
            <Image
              src="/images/image 85.png"
              alt="Characters"
              width={400}
              height={400}
              priority
            />
          </div>

          <div className="playButtonWrapper">
            {isMobile ? (
              <Link key="About" href="/about">
                <button className="playButton mobileButton">
                  PLAY THE STORY
                </button>
              </Link>
            ) : (
              <>
              <Link key="About" href="/about">
                <span className="playButtonText">PLAY THE STORY</span>
                  <button className="playButton">
                    <Image
                      src="/images/drop down button.png"
                      alt="Play"
                      width={30}
                      height={30}
                      priority
                    />
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
