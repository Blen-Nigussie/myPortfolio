import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion} from 'framer-motion';
import { fadeIn } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    options={{ max: 25, scale: 1, speed: 400 }}
    className="w-[200px] mx-auto"
  >
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 2.5)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

export default ServiceCard;
