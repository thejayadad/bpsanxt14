'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const titleVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const descriptionVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <section className='px-4 py-8'>
      <div className='mx-auto max-w-screen-xl flex h-[500px] sm:flex-col md:flex-row gap-6 bg-white p-6 shadow-sm shadow-liteBrown cursor-pointer'>
        <div className='h-full w-full'>
          <img
            src='https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            className='h-full'
            alt='Sports Background'
          />
        </div>
        <div className='h-full w-full flex flex-col justify-center items-center'>
          <motion.h1
            className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'
            initial='hidden'
            animate='visible'
            variants={titleVariant}
          >
            Sporty Moments
          </motion.h1>
          <motion.p
            className='mb-8 leading-relaxed'
            initial='hidden'
            animate='visible'
            variants={descriptionVariant}
          >
            Your go-to place for thrilling sports news, exciting updates, and unforgettable moments in the world of sports.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
