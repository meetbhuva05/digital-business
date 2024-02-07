"use client";

import { features } from '@/src/utils/data';
import Image from 'next/image';
import React from 'react'
import "./whatWeDo.css";
import { motion } from "framer-motion";
import { containerVariants, tagVariants, titleVariants } from '@/src/utils/animation';

function WhatWeDo() {
  return (
    <>
      <div className="wwd-wrapper">
        <div className="container">
          <div className="wwd-container">
            {/* head of section */}
            <div className="wwd-head">
              <motion.span className='tag'
                initial="offscreen"
                whileInView="onscreen"
                variants={tagVariants}
              >
                What we do
              </motion.span>
              <motion.span className='title'
                initial="offscreen"
                whileInView="onscreen"
                variants={tagVariants}
              >
                Empowering founders with non dilutive capital expertise
              </motion.span>
              <motion.span className='des'
                initial="offscreen"
                whileInView="onscreen"
                variants={tagVariants}
              >
                Here is how we can evaluate
              </motion.span>
            </div>

            {/* blocks */}
            <div className="wwd-blocks">
              <div className="wwd-block">
                <motion.span className='sec-title'
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={titleVariants}
                >
                  Blue Advances
                </motion.span>
                <motion.span className='text'
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={titleVariants}
                >
                  Fund recurring growth expenses e.g. customer acquisition, inventory
                </motion.span>
                <div className="block-features">
                  {
                    features.slice(0, 3)?.map((feature, index) => {
                      return (
                        <motion.div className="block-feature" key={index}
                          initial="offscreen"
                          whileInView="onscreen"
                          variants={containerVariants((index + 1) * 0.1)}
                        >
                          <Image
                            src={feature.icon}
                            alt=""
                            width={60}
                            height={60}
                          />
                          <span>{feature.title}</span>
                        </motion.div>
                      )
                    })
                  }
                </div>
              </div>
              <div className="wwd-block">
                <motion.span className='sec-title'
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={titleVariants}
                >
                  Blue Seed
                </motion.span>
                <motion.span className='text'
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={titleVariants}
                >
                  Fund one-offs to scale e.g. product, hiring
                </motion.span>
                <div className="block-features">
                  {
                    features.slice(3, 6)?.map((feature, index) => {
                      return (
                        <motion.div className="block-feature" key={index}
                          initial="offscreen"
                          whileInView="onscreen"
                          variants={containerVariants((index + 1) * 0.1)}
                        >
                          <Image
                            src={feature.icon}
                            alt=""
                            width={60}
                            height={60}
                          />
                          <span>{feature.title}</span>
                        </motion.div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            {/* support block */}
            <motion.div className="wwd-support"
             initial="offscreen"
             whileInView="onscreen"
             variants={containerVariants(0.3)}
            >
              <div>
                <span className="sec-title">Blue Growth Support</span>
                <span className='des'>
                  Data Insights and full stack expertise to supercharge growth
                </span>
              </div>

              <div>
                <span className="text">
                  Actionable data insights by connecting revenue, marketing and social media platforms
                </span>
                <span className='text'>
                  On demand execution expertise at cost or revenue share across proposition design,
                  engineering, marketing analytics, partnerships, brand, intellectual property,
                  market expansion, talent management
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeDo
