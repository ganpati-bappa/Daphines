import React, { useState } from "react";

import './Navbar.scss'

import {FaTimes , FaBars} from 'react-icons/fa';
import {TbUserCircle} from 'react-icons/tb'

import Calpol from './Calpol500.jpg'

export const Navbar = () => {

    const [click, setClick] = useState(true);

    const handleClick = () => {
        setClick(!click)
    }
    
    return (
        <div className = "Header">
            <div className = "Header_logo">
                <div></div>
                <span> Medical Darpan </span>
            </div>
            
            <div className = "Navbar_links">
                <ul className = {click ? "Navbar_link" : "Navbar_link active"}>
                    <li className = "Link">  Home</li>
                    <li className = "Link">  Products</li>
                    <li className = "Link">  Distributors</li>
                    <li className = "Link">  Manufacturers</li>
                    <li className = "Link">  About Us</li>
                    <li className = "Link">  Blog</li>
                </ul>
            </div>


            <div className = "Navbar_menu_right">

                <div className = "Navbar_user">
                    <span>Login</span>
                    <span> <TbUserCircle/></span>
                </div>

                <div className = "Navbar_menu_icons" onClick = {handleClick}>
                    {click ? <FaBars/> : <FaTimes/>}
                </div>


            </div>

        </div>
    )
}

export default Navbar;
