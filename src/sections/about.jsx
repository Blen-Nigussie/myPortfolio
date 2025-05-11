import React from 'react';
import { motion } from 'framer-motion'; // Use `motion` not `Motion`
import { services } from '../constants';
import ServiceCard from './ServiceCard';
import TitleHeader from "../components/TitleHeader";

import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <TitleHeader
          title="Overview"
          sub="💁‍♀️ INTRODUCTION "
        />
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1.8)}
        className='mt-4 text-[17px] max-w-3xl leading-[30px]'
        style={{ color: '#aaa6c3' }}
      >
        Full-stack engineer crafting fast, scalable web applications using React, TypeScript, and Node.js.
        Turning complex ideas into sleek, dynamic applications is my passion. With a strong foundation in modern web technologies, I bring creativity and code together.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
