import React from 'react'
import "./emailBox.css"
import { LuMail } from "react-icons/lu"
import { motion } from "framer-motion";
import { containerVariants } from '@/src/utils/animation';

function EmailBox() {
  return (
    <motion.div className='emailBox'
      initial={{
        width: "0.5rem",
        borderRadius: "100%"
      }}
      whileInView={{
        width: "70%",
        borderRadius: "50px",
        transition: {
          type: "easeOut",
          duration: 1
        }
      }}
      viewport={{
        once: true
      }}
    >
      <motion.div
        variants={containerVariants(0.6)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once: true
        }}
      >
        <LuMail size={30} color="grey" />
      </motion.div>
      <motion.input
        variants={containerVariants(0.7)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once: true
        }}
        type="text"
        placeholder='Enter Email'
      />
      <motion.div className="getFunded"
        variants={containerVariants(0.9)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once: true
        }}
      >
        Get Founded
      </motion.div>
    </motion.div>
  )
}

export default EmailBox
