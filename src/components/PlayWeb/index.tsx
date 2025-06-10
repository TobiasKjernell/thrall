'use client';
import React from 'react';
import './playWeb.scss'

const Play = () => {
  return (
    <div className="play">
      <p className="studio">ONE HELL OF A STUDIO</p>

      <img src="/wizard.png" alt="Wizard Trio" className="wizard-img" />

      <h1 className="title">
        ENTER THE WORLD OF <br />
        THRALL <br />
        AND BEFORE IT’S MASTER
      </h1>

      <img src="/game.png" alt="Gameplay" className="game-img" />

      <button className="play-btn">PLAY THE GAME</button>
    </div>
  );
};

export default Play;