import React,{useState} from 'react'
import './Navbar.css'
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [Mobile,setMobile] = useState(false)
  return (
    <nav>
        <div className='content'>
            <div className="logo">
                <h1>Manoj</h1>
            </div>
            <div className={Mobile ?'items_mobile':'items_desktop'} onClick={() =>setMobile(false)}>
                <li><a href="#home">Home</a></li>
                <li><a href='#About'>About as</a></li>
                <li><a href="#Skills">Skills</a></li>
                {/* <li><a href="##">Project</a></li> */}
                <li><a href="#Contact">Contact</a></li>
            </div>
            <div className='menu_icon' onClick={()=>setMobile(!Mobile)}>
                {Mobile?<IoCloseSharp/>:<FaBars />}
            </div>
        </div>
    </nav>
  )
}

export default Navbar