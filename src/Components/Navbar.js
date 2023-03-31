import React, { useEffect } from 'react';
import Profile from '../Images/Profile.png';
import Avatar from '../Images/avatar.jpg';
import wave from '../Images/wave-haikei.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [open, setopen] = useState(false);

  useEffect(() => {
    let handler = (e) => {
      if (e.target) {
        setopen(false);
      }
    }
    document.addEventListener("mousedown", handler)
  });
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <div className="logo">CodecScript
          </div>
        </Link>

        <div className="Search-box">
          <input type="text" name="" id="Search-bar" placeholder="Search here...." />
          <button className="Search-btn">Search</button>
        </div>
        <div className="items">
          <Link to="/">
            <li>Home</li>
          </Link>
          <div className="blocky"></div>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <div className="blocky"></div>
          <Link to="/signup">
            <li>Sign Up</li>
          </Link>
          <div className="blocky"></div>
          <li>About Us</li>
          <div className="blocky"></div>
          <a className="dark-icon-link" type="button" onClick={() => { setopen(!open) }} >
            <img id="dark-icon" src={Profile} alt="" />
          </a>
        </div>


        <div id="profile-dropdown" className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
          <div className="part-1">
            <div className="avatar-wrap"><img className="avatar" src={Avatar} alt="" /></div>
            <div className="name">
              <h4>Shivank P</h4>
              <div className="name-info">
                <span>shivankp.7890@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="sep"></div>
          <div className="part-2">
            <div className="manage-account">
              <img className="manage-account-icon-white" src="/Icons/account-icon-white.png" alt="" />
              <a className="acc" >Manage Account</a>
            </div>
            <div className="sep"></div>
            <div className="manage-account">
              <img id="manage-account-icondark" className="manage-account-icon-dark" src="/Icons/Setings-dark.png" alt="" />
              <div className="setting" ><Link to="/setings">Setings</Link></div>
            </div>
            <div className="part-3"></div>
            <div className="part-4">
              <div className="profile-item">
                <h3>Dark-Mode</h3>
                <div className="switch">
                  <input type="checkbox" className="checkbox" onClick={toggleTheme} />
                  <span className="inner" />
                  <span className="switch" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className='top-svg' src={wave} alt="" />
      </div>
    </div>
  )
}

