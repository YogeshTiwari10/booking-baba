import React, {useState} from 'react'
import './Navbar.scss'

import {NavLink, Link} from 'react-router-dom'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import logo from '../../assets/logo.png'

const Navbar = () => {
  const [toggle, setToggle ] = useState(false)
  return (
    <div className="navbar">
        <div className="logo"> <Link to="/home" ><img src={logo} alt="logo" /></Link></div>
        <ul className='navbar-menu'>
        {[ 'home','Movies', 'About Us', 'Contact Us'].map((items) =>
        <li className='navbar-menu-link' key={`link-${items}`}>
          <NavLink activeclassname="active" to={`/${items}`} style={{textDecoration: 'none', color:'black'}}> {items} </NavLink>
        </li>
        )}
      </ul>
      <div className='navbar-menu-mobile'>
         <HiMenuAlt4 onClick={()=>setToggle(true)} />
         {toggle &&(
          <motion.div 
          whileInView={{x: [300,0]}}
          transition={{duration: 1, ease:'easeOut'}}
          >
            <HiX onClick={()=>setToggle(false)} />
            <ul>
            <Link to="/" ><img src={logo} alt="logo" style={{width: '200px'}} onClick={()=>setToggle(false)} /></Link>
            {[ 'home','Movies', 'About Us', 'Contact Us'].map((items) =>
          <li key={items}>
            <NavLink to={`/${items}`} onClick={()=>setToggle(false)}  > {items} </NavLink>
          </li>
          )}
          </ul>
          </motion.div>
          )}
          </div>
    </div>
  )
}

export default Navbar