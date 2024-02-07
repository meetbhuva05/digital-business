import { ourDiffFeatures } from '@/src/utils/data';
import Image from 'next/image';
import React from 'react';
import "./ourDiff.css";
import { motion } from "framer-motion";
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation';

function OurDiff() {
  return (
    <>
      <div className="od-wrapper">
        <div className="container">
          <div className="od-container">
            <div className="od-header">
              <motion.span className='tag'
                variants={tagVariants}
                initial="offscreen"
                whileInView="onscreen"
              >
                Our Difference
              </motion.span>
              <motion.span className='title'
                variants={titleVariants}
                initial="offscreen"
                whileInView="onscreen"
              >
                Fair Capital, Hassle Free
              </motion.span>
              <motion.span className="text"
                variants={desVariants}
                initial="offscreen"
                whileInView="onscreen"
              >
                Our mission is to level the playing field for early stage growth capital.
                <br />
                We provide capital that is unbiased, flexible and non dilutive with the
                execution support to accelerate value creation.
              </motion.span>
            </div>

            {/* feature */}
            <div className="od-features">
              {
                ourDiffFeatures?.map((feature, index) => {
                  return (
                    <motion.div key={index} className="od-feature"
                    variants={containerVariants((index + 1) * 0.1)}
                    initial="offscreen"
                    whileInView="onscreen"
                    >
                      <Image src={feature?.icon} width={128} height={128} />
                      <span className='sec-title'>{feature?.title}</span>
                      <span className='text'>{feature?.des}</span>
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

export default OurDiff
