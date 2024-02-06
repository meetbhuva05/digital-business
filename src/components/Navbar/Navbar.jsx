"use client";

import React, { useState } from 'react'
import "./navbar.css"
import { BiMenuAltRight } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='nav-wrapper'>
      {/* desktop version */}
      <div className="container">
        <div className="nav-container">
          {/* left side */}
          <div className="nav-logo">
            <span>DivineQuests</span>
          </div>
          {/* right side */}
          <div className="nav-right">
            <div className="nav-menu">
              <span>What we do</span>
              <span>How it works</span>
              <span>Who we invest in </span>
              <span>Testimonials</span>
            </div>
            <div className='fund-button'>Get Funded</div>
          </div>
        </div>
      </div>

      {/* mobile/tab version */}
      <dib className="nav-mobile-container">
        <span>DivineQuests</span>
        {
          menuOpen ? (
            <RxCross2 size={30} onClick={() => setMenuOpen(false)} />
          ) : (
            <BiMenuAltRight size={30} onClick={() => setMenuOpen(true)} />
          )}

        {/* mobile menu */}
        <div className="nav-mobile-menu"
          style={{ transform: menuOpen && "translate(0%)" }}
        >
          <span>What we do</span>
          <span>How it works</span>
          <span>Who we invest in </span>
          <span>Testimonials</span>
          <div className="mobile-funded-button">Get Funded</div>
        </div>
      </dib>

    </div>
  )
}

export default Navbar
