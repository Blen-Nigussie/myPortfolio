import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Stars from "../components/stars";

const Tech = () => {
  return (
    <div className="relative w-full h-full mt-10 ">
      <Stars />
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-20 mb-20 '>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");