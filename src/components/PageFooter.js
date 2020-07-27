import React from 'react';
import cissa from '../assets/img/CISSA_logo.svg';
import amc from '../assets/img/AMC_svg_logo.svg';
import see from '../assets/img/SEE.svg';
import codec from '../assets/img/CODEC_trans.png';

export default function PageFooter() {
  return (
    <div className="container">
      <p>
        <a href="https://cissa.org.au" target="_onblank"><img class='image' src={cissa} height='90'></img></a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://facebook.com/codec.unimelb/" target="_onblank"><img class='image' src={codec} height="90"></img></a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://amc.moe" target="_onblank"><img class='image' src={amc} height="90"></img></a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://facebook.com/groups/seegamers/" target="_onblank"><img class='image_with_border' src={see} height="90"></img></a>
      </p>
      <p>
        <ul className="copyright">
          <li>&#169;&nbsp;2020</li>
          <li>
            Design: <a className="text" href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </p>
    </div>
  );
}
