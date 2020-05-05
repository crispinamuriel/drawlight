import React from 'react'

export default function Info() {
  return (
    <div className="info">
      <div className="text-container">
        <h1>Join Drawlight for</h1>
        <h1 className="line">Beta Testing</h1>
        <div className="tall">
          <p>Make every space your canvas! With 3D art and</p>
          <p className="height">Augmented Reality brushes and textures.</p>
          <p>Enjoy it with friends or by yourself.</p>
        </div>
        <hr className="tall"></hr>
        <a href="https://www.google.com">
          <button>GET ACCESS NOW!</button>
        </a>
      </div>
    </div>
  );
}
