import React from "react";
import Discord from "../Images/Footer-icons/Discord.png";
import Facebook from "../Images/Footer-icons/Facebook.png";
import Twitter from "../Images/Footer-icons/Twitter.png";
import Instagram from "../Images/Footer-icons/Instagram.png";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div className="Footer">
      <div className="f-top"></div>
      <div className="main-footer">
        <div className="footer-container">
            <div className="footer-left">
                <ul className="ul-1">
                    <div className="ul">
                     <li>Resources</li>
                     <div className="r-ul">
                        <ul>
                            <Link><li>Articles</li></Link>
                            <Link><li>Blog</li></Link>
                            <Link><li>Docs</li></Link>
                            <Link><li>Projects</li></Link>
                        </ul>
                     </div>
                    </div>
                    <div className="f-logo">Code Script</div>
                </ul>
                <ul className="ul-1">
                    <div className="ul">
                     <li>Community</li>
                     <div className="r-ul">
                        <ul>
                            <Link><li>About</li></Link>
                            <Link><li>About</li></Link>
                            <Link><li>About</li></Link>
                            <Link><li>About</li></Link>
                        </ul>
                     </div>
                    </div>
                </ul>
                <ul className="ul-1">
                    <div className="ul">
                     <li>Help</li>
                     <div className="r-ul">
                        <ul>
                            <Link><li>Support</li></Link>
                            <Link><li>Email</li></Link>
                            <Link><li>About</li></Link>
                            <Link><li>About</li></Link>
                        </ul>
                     </div>
                    </div>
                </ul>
            </div>
            <div className="f-sep"></div>
            <div className="footer-right">
            <ul className="ul-1">
                    <div className="ul">
                     <li>Subjects</li>
                     <div className="r-ul">
                        <ul>
                            <Link><li>AI</li></Link>
                            <Link><li>Java</li></Link>
                            <Link><li>C++</li></Link>
                            <Link><li>Python</li></Link>
                            <Link><li>Masdf</li></Link>
                        </ul>
                     </div>
                    </div>
                </ul>
                <ul className="ul-1">
                    <div className="ul">
                     <li>Community</li>
                     <div className="r-ul">
                        <ul>
                            <Link><li>About</li></Link>
                            <Link><li>About</li></Link>
                            <Link><li>About</li></Link>
                            <Link><li>About</li></Link>
                        </ul>
                     </div>
                    </div>
                </ul>
                <ul className="ul-1">
                    <div className="ul">
                     <li>Help</li>
                     <div className="r-ul">
                        <ul>
                            <Link><li>Support</li></Link>
                            <Link><li>Email</li></Link>
                            <Link><li>About</li></Link>
                            <Link><li>About</li></Link>
                        </ul>
                     </div>
                    </div>
                </ul>
            </div>
        </div>
        <div className="f-top"></div>
        <div className="bottom-end">
            <div className="info-1">Privacy Policy | Terms | Copyright</div>
            <div className="info-2">By Code Scripters | © 2023 CodeScript </div>
        </div>
      </div>
    </div>
  );
}
