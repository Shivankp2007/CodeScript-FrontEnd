import React from 'react'

function login() {
    return (
        <>
            <div className="up-box"></div>
            <div className="box">
                <div className="up-box"></div>
                <div className="mainbox">
                    <div className="login">Log In</div>
                    <div className="form">
                        <div>
                            <h2 className="">Email-ID</h2>
                            <div className="enter">
                                <img className="avatar" src="" alt="" />
                                <input type="text" name="username" placeholder="Enter your Email ID" />
                            </div>
                        </div>
                        <div className="item-1">
                            <h2 className="">Password</h2>
                            <div className="enter">
                                <img className="avatar" src="" alt="" />
                                <input type="password" name="username" placeholder="Enter your password" />
                            </div>
                        </div>
                        <div className="blank"></div>
                        <div className="last">
                            Don't have an account create here..
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default login
