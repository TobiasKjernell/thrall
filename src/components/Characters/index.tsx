'use client';
import React from 'react';
import './characters.scss';

const imageSources = [
  '/assets/umbran.png',
  '/assets/tauran.png',
  '/assets/oswen.png',
  '/assets/fangz.png',
];

const Characters = () => {
  return (
    <section className="characters-section">
        <h2 className="characters-title">Meet the Characters</h2>
        <div className="characters-grid">
        {imageSources.map((src, index) => (
        <div key={index} className="character-card">
          <img src={src} alt={`Character ${index + 1}`} />
        </div>
      ))}
      </div>
    </section>
  );
};

export default Characters;