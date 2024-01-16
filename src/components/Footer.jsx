import React from 'react';
import twitter from './twitter-icon.png';
import facebook from './facebook-icon.png';
import instagram from './instagram-icon.png';
import github from './github-icon.png';

export default function Footer() {
  return (
    <>
      <div className='container_icon'>
        <img src={twitter} alt="Twitter Icon" className='twitter_icon' />
        <img src={facebook} alt='Facebook Icon' className='facebook_icon' />
        <img src={instagram} alt="Instagram Icon" className='instagram_icon' />
        <img src={github} alt="GitHub Icon" className='github_icon' />
      </div>
    </>
  );
}
