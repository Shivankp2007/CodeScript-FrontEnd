import React, { UseState } from 'react'


export default function signup() {
    const [user,setuser] = UseState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:"",
    })
    const handleChange = e =>{
        const{name,value} = e.target
        setuser({
            ...user,
            [name]:value
        })
    }
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
                                <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" value={user.email} placeholder="Your Email" onChange={handleChange} />
                            </div>
                            <div className="form-group">

                                <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Repeat your password" onChange={handleChange} />
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup"  className="form-submit" value="Register" />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <img className="imgs" src="Images/undraw_signup.svg" alt="" />
                        <a href="" className="last"> Already have an account? Click here</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
