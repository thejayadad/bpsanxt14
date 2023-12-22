'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const titleVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const descriptionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const imageVariant = {
    hover: { scale: 1.05 },
  };

  return (
    <section className='px-4 py-8'>
      <div className='mx-auto max-w-screen-xl flex h-[500px] sm:flex-col md:flex-row gap-6 bg-white p-6'>
        <div className='bg-orange-300 h-full w-full'>
        <motion.img
            src='https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            className='h-full'
            alt='Sports Image'
            whileHover='hover'
            variants={imageVariant}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className='h-full w-full flex flex-col justify-center items-center'>
          <motion.h1
            className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 cursor-pointer'
            initial='hidden'
            animate='visible'
            variants={titleVariant}
          >
            Unleash your sports passion, vent freely with FanFury
          </motion.h1>
          <motion.p
            className='mb-8 leading-relaxed cursor-pointer'
            initial='hidden'
            animate='visible'
            variants={descriptionVariant}
          >
            Welcome to FanFury – the ultimate sports fan venting blog. Dive into the passionate world of sports, express your thoughts, and connect with like-minded fans. Let the games and emotions unfold.
          </motion.p>
          <div className='flex space-x-4'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className='py-6 px-4 bg-liteYellow w-48 text-white rounded-md hover:bg-amber-950'
            >
              Sign Up
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className='py-6 px-4 bg-liteBlue w-48 text-white rounded-md hover:bg-indigo-300'
            >
              Explore
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
