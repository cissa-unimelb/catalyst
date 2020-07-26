import React from 'react';
import cissa from '../assets/img/CISSA_logo.svg';
import amc from '../assets/img/AMC_svg_logo.svg';
import see from '../assets/img/SEE.svg';
import codec from '../assets/img/CODEC.jpg';

export default function PageFooter() {
  return (
    <div className="container">
      <p>
        <a href="https://cissa.org.au" target="_onblank"><img class='image_footer' src={cissa} height='75'></img></a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://facebook.com/codec.unimelb/" target="_onblank"><img class='image_footer' src={codec} height="75"></img></a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://amc.moe" target="_onblank"><img class='image_footer' src={amc} height="75"></img></a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://facebook.com/groups/seegamers/" target="_onblank"><img class='image_footer' src={see} height="75"></img></a>
      </p>
      <p>
        <ul className="copyright">
          <li>CISSA X AMC X SEE X CODEC</li>
          <li>2020</li>
          <li>
            Design: <a className="text" href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </p>
    </div>
  );
}
