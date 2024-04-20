import React ,{ useEffect, useRef, useState } from "react";
import {Link} from "react-router-dom";
import { FiBell , FiPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import Menu from "./Menu"
import {getUser} from "../api/user";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [val , setval] = useState("");
    const inputRef = useRef(null);
    
    useEffect(() =>{
      // @ts-ignore
      inputRef.current.focus(); 
    },[]);
  return (
    <nav className="navbar">
    {/* Left */}
<div className="navLeft">
    <Link to="/"><img src="img/img1.jpg"/></Link>
    <div>
        <input type="text" placeholder='search or jump to' 
         value={val }
         ref={inputRef} 
         onChange={(e) =>{
            const text=e.target.value;
            setval(text);
        }}/>
        <button onClick={() =>{
          getUser(val).then(console.log);
        }}>Search</button>
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
};
