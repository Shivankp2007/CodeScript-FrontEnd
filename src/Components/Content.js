import React from 'react';
import Background from '../Images/Background.svg'
import { Link } from 'react-router-dom';

export default function Content() {
    return (
        <>
        <div className="content" id="content">
            <div className="blank">
            </div>
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
                        <button type="button" className="info-btn">Try Now</button>
                        <Link to="/signup" className='b'><button className="info-btn">Register</button></Link>
                    </div>
                </div>
                <img src={Background} alt="" />
            </div>
            <div className="divider">
                <div className="div-1">
                </div>
                <div className="div-2"></div>
            </div>
        </div>
        </>
    )
}
