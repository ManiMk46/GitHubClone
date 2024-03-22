import React from 'react';
import {IoBulbOutline} from "react-icons/io5"
import {MdRssFeed} from "react-icons/md"
import img1 from "../img/img1.jpg";
import {Link} from "react-router-dom";

function MainRight() {
  return (
    <div className='mainRight'>
      <div className="mainRightContainer">
        <div className="mainRightText">
          <h2>Following</h2>
          <h2>For you</h2>
        </div>
        <div className="lineTwo" />
        <div className="box">
          <h2>
            Welcome ... In clone githube ba React o Sass zadamesh Merci
          </h2>
          <p>
            Follow me on <span>Github</span>, <span>X</span> and <span>Instagram</span>
          </p>
          <button className='btn'>
               <Link to="/profile">Github Clone</Link>
          </button>
        </div>
        <div className="boxCenter">
          <div className="boxCenterFirst">
            <IoBulbOutline />
            <p>
              In az khode github am github tare khodayi
            </p>
          </div>
          <div className="boxCenterFirst">
            <MdRssFeed />
            <p>
              tu github mano follow kon lotfan
            </p>
          </div>
        </div>
        {/* Footer */}
        <div className="footer">
          <div className="footerFirst">
            <img src={img1} alt="" />
            <h4>GitHub Clone</h4>
          </div>
          <div className="footerSecond">
            <div className="footerSecondInside">
              <h4>Blog</h4>
              <h4>About</h4>
              <h4>Shop</h4>
              <h4>GitHub Clone</h4>
              <h4>Pricing</h4>
            </div>
            <div className="footerSecondInside">
              <h4>API</h4>
              <h4>Training</h4>
              <h4>Status</h4>
              <h4>Security</h4>
            </div>
            <div className="footerSecondInside">
              <h4>Terms</h4>
              <h4>Privacy</h4>
              <h4>Docs</h4>
            </div>
          </div>
        </div>
        <div className="lineTwo" />
      </div>
    </div>
  )
}

export default MainRight