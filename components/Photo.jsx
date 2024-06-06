"use client";

import Image from "next/image";
import { easeInOut, motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      {/* image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </div>
      </motion.div>
      {/* circle */}
      <motion.div
        className="w-[300px] xl:w-[506px] h-[300px] xl:h[506px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      ></motion.div>
    </div>
  );
};

export default Photo;
