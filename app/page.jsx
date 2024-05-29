import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* text */}
          <div className="text-center xl:text-left">
            <span>Web Developer</span>
            <h1 className="h1 ">
              Hello I&apos;m <br />
              <span className="text-accent">Iqbal Revianda</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Have a high interest in learning UI/UX design and Web Development.
              My hobbies is photography and design!
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button className="uppercase gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 borer border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>
            <Photo  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
