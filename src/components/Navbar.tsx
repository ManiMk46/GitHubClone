import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { FiBell , FiPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import Menu from "./Menu"

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
    {/* Left */}
<div className="navLeft">
    <Link to="/"><img src="img/img1.jpg"/></Link>
    <div>
        <input type="text" placeholder='search or jump to'/>
    </div>
</div>

    {/* Center */}
<div className="navCenter">
    <h2>Pulls</h2>
    <h2>Issues</h2>
    <h2>MarketPlace</h2>
    <h2>Explore</h2>
</div>
    {/* Right */}
    <div className="navRight">
       <FiBell />
       <div className="navRightIcons">
        <FiPlus />
        <IoMdArrowDropdown />
       </div>
       <div className="navRightProf" onClick={() => setShowMenu(!showMenu)}>
       <img src="img/img2.jpg"/>
        <IoMdArrowDropdown />
       </div>
    </div>
    {showMenu && <Menu />}
    </nav>
  )
}

export default Navbar