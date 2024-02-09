import { whoWeInvest } from '@/src/utils/data'
import React from 'react'
import "./whoWeInvest.css"
import { motion } from "framer-motion";
import { containerVariants, tagVariants, titleVariants } from '@/src/utils/animation';

function WhoWeInvest() {
  return (
    <>
      <div className="wwi-wrapper">
        <div className="container">
          <div className="wwi-container">
            {/* left side */}
            <div className="wwi-left">
              <div className="head">
                <motion.span className='tag'
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={tagVariants}
                >
                  Who we invest in
                </motion.span>
                <motion.span className='title'
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={titleVariants}
                >
                  Digital buisnesses
                  <br /> with early traction
                </motion.span>
              </div>
              {/* features */}
              <div className="wwi-features">
                {
                  whoWeInvest?.map((feature, index) => {
                    return (
                      <motion.div className='wwi-feature' key={index}
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={containerVariants(index * 0.05 + 1)}
                      >
                        <span className='des'>{feature.title}</span>
                        <span className='text'>{feature.des}</span>
                      </motion.div>
                    )
                  })
                }
              </div>
            </div>

            {/* right side */}
            <div className="wwi-right">
              <motion.img
                src="persons.png"
                alt=""
                initial="offscreen"
                whileInView="onscreen"
                variants={containerVariants(0.5)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhoWeInvest
