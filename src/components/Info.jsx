import React from 'react';
import photo from './profile-photo.jpg';
import email from './main-icon.png';
import linkedin from './linkedin-icon.png';

export default function Info() {

  const handleLinkedInClick = () => {
    // Replace 'YOUR_LINKEDIN_PROFILE_URL' with your actual LinkedIn profile URL
    const linkedinProfileUrl = 'https://www.linkedin.com/in/jonnel-dosado-783169190/';
    window.open(linkedinProfileUrl, '_blank');
  };

  return (
    <>
      <img src={photo} alt="Profile Photo" className='profile_photo' />
      <div className='container'>
        <h2 className='full_name'>Jonnel Dosado</h2>
        <h4 className='job_title'>Fullstack Developer</h4>
        <p className='email'>jonneldosado.code@gmail.com</p>
        <div className='contact_button'>
          <button className='button_email'>
            <img src={email} alt='Email Icon' className='email_icon' />
            Email
          </button>
          <button className='button_linkedin' onClick={handleLinkedInClick}>
            <img src={linkedin} alt='Linkedin Icon' className='linkedin_icon' />
            Linkedin
          </button>
        </div>
      </div>
    </>
  );
}
