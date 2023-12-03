import React from 'react'
import '../App.css';
import { SocialIcon } from 'react-social-icons'
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
const Footer = () => {
  return (
    <>
        <div className='footer-wrapper'>
            <div className='footer-about'>
                <div className='footer-about-logo'>
                    <img src="./img/indilabs-white.png" alt="indilabs.ai" className="indilabs-white"/>
                    {/* <p>Indilabs.ai</p> */}
                </div>
                <p className='footer-about-caption'>To add next and previous functionality to your Keen Slider in a React component,</p>
                <p className='footer-about-mail'>info@indilabs.ai</p>
            </div>
            <div className='footer-nav-about'>
                <p className='footer-nav-heading'>About us</p>
                <ul className='footer-nav-content'>
                    <li>Company</li>
                    <li>Portfolio</li>
                    <li>Careers</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className='footer-nav-about'>
                <p className='footer-nav-heading'>Contact us</p>
                <ul className='footer-nav-content'>
                    <li>To add next and previous functionality to your Keen Slider in a React component,</li>
                    <li style={{paddingTop: '15px'}}>+9000 0000 000</li>
                </ul>
            </div>
            <div className='footer-nav-social'>
                <div className='social-media'>
                    <div className='social-icon'><Facebook /></div>
                    <div className='social-icon'><Instagram /></div>
                    <div className='social-icon'><Twitter /></div>
                    <div className='social-icon'><Linkedin /></div>
                </div>
            </div>
        </div>
        <div className='footer-copywrite'>Copyright 2023 Company All rights Reserved</div>
    </>
  )
}

export default Footer