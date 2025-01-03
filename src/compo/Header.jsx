import React from 'react'
import react from "../assets/react.svg"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <header className="bg-black text-white  shadow-white shadow-sm flex justify-between fixed w-full p-4  z-10 ">
        <div>
            <img src={react} alt="" srcset="" />
        </div>
        <nav className="nav">
            <ul className="nav-list flex gap-8  ">
                <li className="nav-item hover:text-orange-500 active"><Link to="/"className="nav-link">Home</Link></li>
                <li className="nav-item  hover:text-orange-500 active"><Link to="/about"className="nav-link  ">about</Link></li>
                <li className="nav-item  hover:text-orange-500 active"><Link to="/contact"className="nav-link">Contact</Link></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header