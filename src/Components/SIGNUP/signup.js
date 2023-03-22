import React from 'react'

export default function signup() {
    return (
        <div>
            <div className="up-box"></div>
            <div className="box">
                <div className="up-box"></div>
                <div className="mainbox-s">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <input type="text" name="name" id="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" id="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">

                                <input type="password" name="pass" id="pass" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <img className="imgs" src="Icons/undraw_secure_login_pdn4.svg" alt="" />
                        <a href="" className="last"> Already have an account?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
