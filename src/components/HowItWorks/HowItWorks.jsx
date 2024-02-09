import { hitFeatures } from '@/src/utils/data'
import Image from 'next/image'
import React from 'react'
import "./howItWorks.css"
import { motion } from "framer-motion"
import { tagVariants, titleVariants } from '@/src/utils/animation'

function HowItWorks() {

  const featureVariants = {
    "offscreen": {
      scale: 0.5
    },
    "onscreen": {
      scale: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      }
    }
  }
  return (
    <>
      <div className="hiw-wrapper">
        <div className="container">
          <div className="hiw-container">
            <div className="hiw-head">
              <motion.span className='tag'
                variants={tagVariants}
                initial="offscreen"
                whileInView="onscreen"
              >
                How it works
              </motion.span>
              <motion.span className='title'
                variants={titleVariants}
                initial="offscreen"
                whileInView="onscreen"
              >
                Unlocking potential along the growth journey
              </motion.span>
            </div>

            {/* feature */}
            <div className="hiw-features">
              {
                hitFeatures?.map((feature, index) => {
                  return (
                    <motion.div className='hiw-feature' key={index}
                      variants={featureVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                    >
                      <motion.div className="detail"
                      initial={{opacity:0, x:-100}}
                      whileInView={{
                        opacity:1,
                        x:0,
                        transition:{
                          type:"easeIn",
                          duration:1,
                          delay:0.7
                        }
                      }}
                      >
                        <span className='des'>0{index + 1}</span>
                        <span className='sec-title'>{feature.title}</span>
                        <span className='text'>{feature.des}</span>
                      </motion.div>

                      <div className="icon">
                        <Image
                          src={feature.icon}
                          alt=""
                          height={128}
                          width={128}
                        />
                      </div>
                    </motion.div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowItWorks
