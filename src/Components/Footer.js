import React from 'react';
import Discord from "../Images/Footer-icons/Discord.png";
import Facebook from "../Images/Footer-icons/Facebook.png";
import Twitter from "../Images/Footer-icons/Twitter.png";
import Instagram from "../Images/Footer-icons/Instagram.png";

export default function Footer() {
  return (
    <div>
        <div className="Footer">
            <div className='footer-1'>
            <div className="Footer-logo">
                <span>Code Script</span>
                <span>Copyright © 2023 CodeScript,Inc.All rights reserved.</span>
            </div>
            <div className="social-media">
                <div className="medi-item">
                <img className='social-media-img'  src={Twitter} alt="" /><media-name>Twitter</media-name>
                </div>
                <div className="medi-item">
                <img className='social-media-img'  src={Discord} alt="" /><media-name>Discord</media-name>
                </div>
                <div className="medi-item">
                <img className='social-media-img'  src={Instagram} alt="" /><media-name>Instagram</media-name>
                </div>
                <div className="medi-item">
                <img className='social-media-img'  src={Facebook} alt="" /><media-name>Facebook</media-name>
                </div>
                
            </div>
            </div>
            <div className="footer-content">
                <div className="footer-content-item">
                    <div className="footer-name">Sources</div>
                    <div className="footer-items">
                        <a href=""><li>About</li></a>
                        <a href=""><li>About</li></a>
                        <a href=""><li>About</li></a>
                    </div>
                </div>
                <div className="footer-content-item">
                    <div className="footer-name">Links</div>
                    <div className="footer-items">
                        <a href=""><li>About</li></a>
                        <a href=""><li>About</li></a>
                        <a href=""><li>About</li></a>
                    </div>
                </div>
                <div className="footer-content-item">
                    <div className="footer-name">Sources</div>
                    <div className="footer-items">
                        <a href=""><li>About</li></a>
                        <a href=""><li>About</li></a>
                        <a href=""><li>About</li></a>
                    </div>
                </div>
                <div className="footer-content-right"></div>
            </div>
        </div>
    </div>
  )
}
