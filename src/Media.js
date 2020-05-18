import React from 'react';
import ipad from './assets/iPhone 11 Pro and 12.9-inch iPad Pro - horizontal.png';
import iphone from './assets/dribbbleoneplusmockup.png';

export default function Media() {
  return (
    <div className="media">
      <div className="iPad">
        <img src={ipad} alt="iPhone 11 Pro and 12.9-inch ipad Pro" width="100%"/>

      </div>
      <div className="iPhone">
        <img className="phone" src={iphone} alt ="iPhone"  width="55%"/>
      </div>
    </div>

  )
}
