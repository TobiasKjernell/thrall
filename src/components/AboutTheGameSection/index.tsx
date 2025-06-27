'use client';

import Image from 'next/image';
import Link from 'next/link';
import './AboutTheGame.scss';

export default function AboutTheGame() {
  return (
    <section id="about" className="aboutGame">
      <div  className="overlay">
        <div className="content">
          <h2>ABOUT THE GAME</h2>
          <div className="gameContent">
            <div className="gameText">
              <p>
                YOU ARE THE FORGOTTEN GHOST OF A FALLEN TYRANT.
                AWAKENED BY A FAILED RITUAL BENEATH ANCIENT RUINS.
                TO RECLAIM YOUR POWER AND UNCOVER THE TRUTH OF YOUR DOWNFALL.<br />
                YOU MUST POSSESS THE LIVING AND PIECE TOGETHER YOUR PAST THROUGH STOLEN MEMORIES.<br />
                EACH HOST CHANGES YOUR PLAYSTYLE AND COMBAT APPROACH.<br />
                TURN EVERY ENCOUNTER INTO A STRATEGIC PUZZLE. IT'S A GAME OF CREATIVE COMBAT,<br />
                EVOLVING STRATEGY,<br />
                AND MEANINGFUL CHOICES IN A WORLD SHAPED BY YOUR ACTIONS.
              </p>
            </div>

            <div className="characterImage">
              <Image
                src="/images/image 85.png"
                alt="Characters"
                width={600}
                height={800}
                priority
                layout="responsive" 
              />
            </div>
          </div>

          <div className="playBox">
          <iframe
                className='playBox__trailer'
                src="https://www.youtube.com/embed/cQyiZSHRfBM"
                frameBorder="0"
                title="Trailer"
                aria-hidden="true"
          />
          </div>
        </div>
      </div>
    </section>
  );
}
