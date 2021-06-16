import React from 'react';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
const AboutUs = () => {
  return (
    <div className='about container-fluid'>
      <div className='container'>
        <h2>About Us</h2>
        <hr />
        <p>
          Shree Jagdamba Textiles Pvt Ltd is based in Ahmedabad, Gujarat.
          Established in 1991, we have been continuously progressing & expanding
          in textile processing. From simplicity in dyeing to handling any
          complex dyeing & rotary printing process, we have made an inspiring
          leap. As our company continues to move in the right direction, we have
          stamped our arrival in Hosiery/Knits as well. Our company has its
          integrated productions of any blends of Woven & Hosiery Fabric.
        </p>
        <ul>
          <li>
            <img src={facebook} alt='facebook' className='icon' />
          </li>
          <li>
            <img src={instagram} alt='instagram' className='icon' />
          </li>
          <li>
            <img src={twitter} alt='twitter' className='icon' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
