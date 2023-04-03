import React,{UseState} from 'react'

function login() {
    const [user,setuser] = UseState({
        email:"",
        password:"",
    })
    const handleChange = e =>{
        const{name,value} = e.target
        setuser({
            ...user,
            [name]:value
        })
    }
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
                                <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email ID" />
                            </div>
                        </div>
                        <div className="item-1">
                            <h2 className="">Password</h2>
                            <div className="enter">
                                <img className="avatar" src="" alt="" />
                                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your password" />
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
