import React, { useState } from 'react'
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
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
    <Link to="/"><img src={img1} alt="" /></Link>
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
        <img src={img2} alt="" />
        <IoMdArrowDropdown />
       </div>
    </div>
    {showMenu && <Menu />}
    </nav>
  )
}

export default Navbar