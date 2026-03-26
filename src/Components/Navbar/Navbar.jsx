import React, { useState } from 'react'
import { useRef } from 'react';
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu =()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu =()=>{
    console.log("closing");
    menuRef.current.style.right="-70%";
  }

  return (
    <div className='navbar'>
       <h1 className="logo text-xl font-bold">Amudha Priya</h1>
       <img src={menu_open} onClick={openMenu} className='nav-mob-open' alt=""/>
        <ul ref={menuRef} className='nav-menu'>
          <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
            <li><a className='anchor-link'  href='#home'><p onClick={()=>{ setMenu("home"); closeMenu(); }}>Home</p></a>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
            <li><a className='anchor-link' offset={50} href='#about'><p onClick={()=>{ setMenu("about"); closeMenu();}}>About Me</p></a>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
            {/* <li><a className='anchor-link'  offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></a>{menu==="services"?<img src={underline} alt=''/>:<></>}</li> */}
            <li><a className='anchor-link' offset={50} href='#work'><p onClick={()=>{ setMenu("work"); closeMenu();}}>Portfolio</p></a>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
            <li><a className='anchor-link' offset={50} href='#contact'><p onClick={()=>{ setMenu("contact"); closeMenu();}}>Contact</p></a>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
        </ul>
        <div className='nav-connect'><a className='anchor-link' offset={50} href='#contact'>Connect With Me</a>

        </div>

    </div>
  )
}

export default Navbar