'use client';

import Image from 'next/image';
import './AboutTheGame.scss';

export default function AboutTheGame() {
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
            TO RECLAIM FRAGMENTS OF YOUR FORMER SELF
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

          <button className="playButton">
            PLAY THE STORY
          </button>
        </div>
      </div>
    </section>
  );
}
