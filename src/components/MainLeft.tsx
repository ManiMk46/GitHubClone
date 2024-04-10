import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import lists from "../lists.json"

import {Link} from "react-router-dom";

function MainLeft() {
  return (
    <div className="mainLeftContainer">
      <div className="mainLeft">
        <div className="mainLeftName">
        <img src="img/img2.jpg"/>
            <h2>ManiiiMk</h2>
            <IoMdArrowDropdown />
        </div>
        {/* Line */}
        <div className="line" />
         <div className="recentRepo">
            <div className="recentRepos">
                <h2>Recent Repositories</h2>
                <button>New</button>
            </div>
            <div className="inputbox">
                <input type="text" placeholder="Find a repositories..."/>
            </div>
         </div>
         <div className="mainLeftLists">
            {lists.map((item, idx) => (
                <div className="item" key={idx}>
                    <img src="img/img2.jpg"/>
                    <div>
                        <h2>{`${item.name}/${item.repo}`}</h2>
                    </div>
                </div>
            ))}
            <Link to="/Profile">Show more</Link>
            <div className="line" />
            <div className="recentRepo">
              <div className="recentRepos">
                <h2>Recent Activities</h2>
              </div>
              <p>Hich kare khasi anjam nadady</p>
            </div>
            <div className="line" />
            <div className="recentRepo">
              <div className="recentRepos">
                <h2>Your teams</h2>
              </div>
                <div className="inputBoxTwo">
                  <input type="text" placeholder="Find a team..."/>
                </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default MainLeft