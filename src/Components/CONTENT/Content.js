import React from 'react';
import { Link } from 'react-router-dom';

export default function Content() {
    return (
        <div>
            <div className="content" id="content">
                <div className="content-head">
                    <div className="blank-1"></div>
                    <div className="info">
                        <div className="blank-2"></div>
                        <p className="info-text">
                            Get going with your new <br />
                            Coding Script Journey <br />
                            <br />
                            Start Learning Now...
                        </p>
                        <div className="info-btns">
                            <Link to="/trynow"><button type="button" className="info-btn" >Try Now</button></Link>
                            <Link to="/signup" className='b'><button className="reg-btn">Register</button></Link>
                        </div>
                    </div>
                    <img src='Images/Background.svg' alt="" />
                </div>
                <div className="divider">
                    <div className="div-1">
                    </div>
                    <div className="div-2"></div>
                </div>
            </div>
        </div>
    )
}
