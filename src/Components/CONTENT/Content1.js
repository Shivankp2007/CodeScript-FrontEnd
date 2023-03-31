import React from "react";

const Content1 = () => {
  return (
    <div className="content1">
        <div className="main-content1">
            <div className="title">Start with Programing In..</div>
            <div className="title-2">What You Can Learn?</div>
            <info>
            <infocontent>
                <img className="img-2" src="Images/checkmark_white.png" alt="" />
                <infotext>Build Programs</infotext>
             </infocontent>
            <infocontent>
                <img className="img-2" src="Images/checkmark_white.png" alt="" />
                <infotext>Build Programs</infotext>
            </infocontent>
            <infocontent>
                <img className="img-2" src="Images/checkmark_white.png" alt="" />
                <infotext>Build Programs</infotext>
            </infocontent>
            </info>
        </div>
        <div className="right-content1">
            <div className="icons">
                <div className="da">
                <img className="img-3" src="Images/python.png" alt="" />
                <div className="img-info">Python</div>
                </div>
                <div className="da">
                <img className="img-4" src="Images/java.png" alt="" />
                <div className="img-info">Python</div>
                </div>
                <div className="da">
                <img className="img-3" src="Images/javascript.png" alt="" />
                <div className="img-info">Python</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Content1;
