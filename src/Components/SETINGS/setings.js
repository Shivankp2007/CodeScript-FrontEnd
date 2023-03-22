import React from 'react'

function setings() {
    return (
        <div>
            <div id="set" className="setings-page">
                <div id="sidebar" className="setings_part-2">
                    <div className="sidebar" >
                        <div className="setings-manage-account">
                            <img id="close-btn-white" className="previous" src="/Icons/Back-white.png" onclick="Close_Back()" alt="" />
                        </div>
                        <div className="sidebar-starter">
                            <div className="side-start">
                                <img id="manage-account-icondark-1" className="manage-account-icon-dark" src="/Icons/Setings-dark.png" alt="" />
                                <div className="setings-text">Setings</div>
                            </div>
                            <div className="sep-1"></div>
                            <div className="account-text">ACCOUNT</div>
                            <div className="side-bar-items">
                                <div className="side-bar-item" onclick="Click_Tab_YourAccount()">
                                    <img id="side-bar-icon-light" className="side-bar-icon-light" src="/Icons/Acc-setings-light.png" alt="" />
                                    <div className="side-bar-items-text">Your Account</div>
                                </div>
                            </div>
                            <div className="side-bar-items">
                                <div className="side-bar-item" onclick="Click_Tab_YourAccount()">
                                    <img id="side-bar-icon-light" className="side-bar-icon-light" src="/Icons/Acc-setings-light.png" alt="" />
                                    <div className="side-bar-items-text">P e r s o n l i z</div>
                                </div>
                            </div>
                            <div className="side-bar-items">
                                <div className="side-bar-item" onclick="Click_Tab_YourAccount()">
                                    <img id="side-bar-icon-light" className="side-bar-icon-light" src="/Icons/Acc-setings-light.png" alt="" />
                                    <div className="side-bar-items-text">Your Account</div>
                                </div>
                            </div>
                            <div className="side-bar-end">
                                <div className="setings-logout-icon"><img src="/Icons//Icons8-logout-rounded-100.png" alt="" /></div>
                                <div className="setings-logout-text">Logout</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="set-1" className="setings_part-1">
                    <div className="Section">
                        <div className="User-setings">User Information</div>
                        <div className="User-block">
                            <div className="row-1">
                                <div className="user-avatar">
                                    <img className="user-avatar-1" src="/Icons/avatar.jpg" alt="" />
                                </div>
                                <div className="email-name">
                                    <div className="user-name">
                                        User Name
                                        <div className="user-name-1">Shivank P</div>
                                    </div>
                                    <div className="user-email">
                                        Email ID
                                        <div className="user-email-1">shivankp.7890@gmail.com
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="user-profile-edit"><button className="Edit_Profile">Edit Profile</button></div>

                        </div>
                        <div className="Password">Password Setings</div>
                        <div className="Password-button"><button>Change Password</button></div>
                        <div className="Account-setings">Delete Account</div>
                        <div className="Account-setings-disable">Disable or Delete your Account</div>
                        <div className="Account-setings-button">
                            <button className="Disable-acc-btn"></button>
                            <button className="Delete-acc-btn"></button>
                        </div>
                        <div className="Section"></div>
                        <div className="Section"></div>
                        <div className="Section"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default setings
