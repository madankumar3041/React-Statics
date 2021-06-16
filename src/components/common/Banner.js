import React from 'react';

const Banner = ({ image, text }) => {
  return (
    <div
      className='banner'
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.4) 59%, rgba(0, 0, 0, 0.85) 100%),url(${image})`,
      }}
    >
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;
