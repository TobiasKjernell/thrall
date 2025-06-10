'use client';
import React from 'react';
import './playWeb.scss'

const imageSources:string[] = [
  '/assets/play1.png',
  '/assets/play2.png',
];

const PlayWeb = () => {
  return (
    <section className="play-section">
        <h2 className="play-title">ONE HELL OF A STUDIO</h2>
        <div className="play-grid">
        {imageSources.map((src, index) => (
          <React.Fragment key={index}>  
        <div className="play-card">
          <img src={src} alt={`play ${index + 1}`} />   
        </div>
        {index === 0 && (
            <div className="play-text">
                <p>ENTER THE WORLD OF THRALL AND BECOME IT'S MASTER </p>
            </div>
        )}

         {index === 1 && (
              <div className="play-text">
                <p>PLAY</p>
              </div>
            )}

        </React.Fragment> 

        
      ))}
      </div>
    </section>
  );
};

export default PlayWeb;


