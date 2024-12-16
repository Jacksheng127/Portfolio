import React from 'react';
import { shortTermGoals, longTermGoals } from '../constants';
import { IoRocketSharp } from "react-icons/io5";
import { PiNotePencil } from "react-icons/pi";

import { motion } from 'framer-motion';

const Goal = () => {
  return (
    <section id="goal">
      <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className='my-20 text-center text-4xl'>
          Goals
        </motion.h2>
        <div className='flex flex-wrap justify-center gap-8'>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='w-full lg:w-1/2'>
            <h3 className='mb-4 text-2xl font-semibold text-center'>Short Term Goals</h3>
            <ul className='list-disc list-inside'>
              {shortTermGoals.map((goal, index) => (
                <li key={index} className='mb-2 text-neutral-400 flex items-center pl-14'>
                <PiNotePencil className='mr-2' /> {goal}
              </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='w-full lg:w-1/2'>
            <h3 className='mb-4 text-2xl font-semibold text-center'>Long Term Goals</h3>
            <ul className='list-disc list-inside'>
              {longTermGoals.map((goal, index) => (
                <li key={index} className='mb-2 text-neutral-400 flex items-center pl-14'>
                <IoRocketSharp className='mr-2' /> {goal}
              </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className='mt-20'>
          <h3 className='mb-4 text-2xl font-semibold text-center'>Career Vision</h3>
          <p className='text-neutral-400 text-center'>
            My career vision is to leverage my expertise in software development to create innovative solutions that drive business growth and deliver exceptional user experiences. <br />
            I aspire to become senior software developer within 3 years and lead a team of developers to build cutting-edge software applications within 5 years of my career.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Goal;