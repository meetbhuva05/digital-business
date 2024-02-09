"use client";

import React, { useState } from 'react'
import "./navbar.css"
import { BiMenuAltRight } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { Link, animateScroll } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  })

  // useEffect(() => {
  //   // Scroll to the top when the component mounts or when the page is reloaded
  //   animateScroll.scrollToTop();
  // }, []);
  return (
    <div className={`nav-wrapper ${navStyle}`}>
      {/* desktop version */}
      <div className="container">
        <div className="nav-container">
          {/* left side */}
          <div className="nav-logo">
            <Link to="hero-wrapper" spy={true} smooth={true}>
              <span>DivineQuests</span>
            </Link>
          </div>
          {/* right side */}
          <div className="nav-right">
            <div className="nav-menu">
              <Link to="wwd-wrapper" spy={true} smooth={true}>
                <span>What we do</span>
              </Link>
              <Link to="hiw-wrapper" spy smooth offset={100}>
                <span>How it works</span>
              </Link>
              <Link to="wwi-wrapper" spy smooth>
                <span>Who we invest in </span>
              </Link>
              <Link to="t-wrapper" spy smooth offset={100}>
                <span>Testimonials</span>
              </Link>
            </div>
            <div className='fund-button'>Get Funded</div>
          </div>
        </div>
      </div>

      {/* mobile/tab version */}
      <dib className="nav-mobile-container">
        <Link to="hero-wrapper" spy={true} smooth={true}>
          <span>DivineQuests</span>
        </Link>
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
          <Link to="wwd-wrapper" spy={true} smooth={true} onClick={() => setMenuOpen(false)} >
            <span>What we do</span>
          </Link>
          <Link to="hiw-wrapper" spy smooth offset={100} onClick={() => setMenuOpen(false)} >
            <span>How it works</span>
          </Link>
          <Link to="wwi-wrapper" spy smooth onClick={() => setMenuOpen(false)} >
            <span>Who we invest in </span>
          </Link>
          <Link to="t-wrapper" spy smooth offset={100} onClick={() => setMenuOpen(false)} >
            <span>Testimonials</span>
          </Link>
          <div className="mobile-funded-button">Get Funded</div>
        </div>
      </dib>

    </div>
  )
}

export default Navbar
