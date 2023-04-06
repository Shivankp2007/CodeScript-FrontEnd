import axios from "axios";
import React from "react";
import { useState } from "react";

const login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  async function submit(e){
    e.preventDefault();

    try{
        await axios.post("http://localhost:8000/",{
            email,password
        })
    }
    catch(e){
        console.log(e);
    }
  }

  return (
    <>
      <div className="up-box"></div>
      <div className="box">
        <div className="up-box"></div>
        <div className="mainbox">
          <div className="login">Log In</div>
          <form className="form" action="POST">
            <div>
              <h2 className="">Email-ID</h2>
              <div className="enter">
                <img className="avatar" src="" alt="" />
                <input
                  type="text"
                  name="email"
                  onChange={(e)=>{setEmail(e.target.value)}}
                  placeholder="Enter your Email ID"
                />
              </div>
            </div>
            <div className="item-1">
              <h2 className="">Password</h2>
              <div className="enter">
                <img className="avatar" src="" alt="" />
                <input
                  type="password"
                  name="password"
                  onChange={(e)=>{setPassword(e.target.value)}}
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <input type="submit" onClick={submit} />
          </form>
          <div className="blank"></div>
          <div className="last">Don't have an account create here..</div>
        </div>
      </div>
    </>
  );
};

export default login;
