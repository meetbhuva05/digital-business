"use client";

import { HeroData } from '@/src/utils/data'
import React from 'react'
import EmailBox from '../EmailBox/EmailBox'
import "./hero.css"
import { motion } from "framer-motion";

function Hero() {

  const variants = (delay) => ({
    intial: {
      y: "18rem"
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay
      }
    }
  })

  const imgVariants = {
    intial: {
      y: "18rem"
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        stiffness: 30,
        duration: 2,
      }
    }
  }
  return (
    <div className='hero-wrapper'>
      <div className="container">

      <img src="hero/hero-arrow.png" alt="arrow" className='hero-arrow' />

        <div className="hero-container">
          <div className="hero-left">
            <div className="image-row">
              {
                HeroData.slice(0, 3)?.map((person, index) => {
                  return (
                    <div className='person-pill' key={index}>
                      <motion.div className="person-pill-bg"
                        initial="intial"
                        animate="animate"
                        variants={variants(person.delay)}
                        style={{ backgroundColor: person.bg }}
                      >
                        <motion.img
                          initial="intial"
                          animate="animate"
                          variants={imgVariants}
                          src={person.src} alt="" />
                      </motion.div>
                    </div>
                  )
                })
              }
            </div>

            <div className="image-row">
              {
                HeroData.slice(3, 6)?.map((person, index) => {
                  return (
                    <div className='person-pill' key={index}>
                      <motion.div className="person-pill-bg"
                        initial="intial"
                        animate="animate"
                        variants={variants(person.delay)}
                        style={{ backgroundColor: person.bg }}
                      >
                        <motion.img
                          initial="intial"
                          animate="animate"
                          variants={imgVariants}
                          src={person.src} alt=""
                        />
                      </motion.div>
                    </div>
                  )
                })
              }
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-title">
              <span>Redefine How</span>
              <span>You Grow your</span>
              <span>Digital Business</span>
            </div>

            <div className="hero-des">
              Revanue based funding and execution support designed for stage founders
            </div>

            <EmailBox />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
