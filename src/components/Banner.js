import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";
import myResume from "../files/Alireza_Hajizaki_Resume.pdf";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              SHAHRAM<span> HZ</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I'M A</span>
              <TypeAnimation
                sequence={[
                  "React Developer",
                  2000,
                  "Next Developer",
                  2000,
                  // "Youtuber",
                  // 2000,
                ]}
                speed={50}
                wrapper="span"
                className="text-accent"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I Love Learning and I have always enjoyed communication and being
              a part of teamwork. In addition, when a task is assigned to me, I
              work tirelessly in order to fulfill the expectations of the team
              members
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="tel:+989902226331">
                <button className="btn btn-lg">Contact Me</button>
              </Link>
              <Link
                to={myResume}
                download="Alireza_Hajizaki_Resume.pdf"
                target="_blank"
                className="text-gradient btn-link"
              >
                My Resume
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex gap-x-6 max-w-max mx-auto lg:mx-5 home-sci"
            >
              <Link
                to="https://www.linkedin.com/in/alireza-hajizaki-4a0aa8278"
                target="_blank"
              >
                <div>
                  <FaLinkedin />
                </div>
              </Link>

              <Link to="https://github.com/Alireza-hajizaki" target="_blank">
                <div>
                  <FaGithub />
                </div>
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="flex-1 hidden lg:bg-banner lg:bg-contain lg:flex max-w-[320px] lg:max-w-[482px] bg-no-repeat h-[380px] w-[400px] mix-blend-lighten"
          >
            {/* <img src='images/2.jpg' alt="" className="h-[400px] w-[400px] mix-blend-lighten"/> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
