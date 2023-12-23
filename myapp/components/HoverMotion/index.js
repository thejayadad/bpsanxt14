'use client'
import React from 'react';
import { motion } from 'framer-motion';


const HoverMotion = ({ children }) => {
    const motionVariant = {
        hover: { scale: 1.1 },
      };
  return (
    <motion.div whileHover="hover" variants={motionVariant}>
    {children}
  </motion.div>
  )
}

export default HoverMotion