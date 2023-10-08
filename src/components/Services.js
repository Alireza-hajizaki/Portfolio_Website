import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";

const services = [
  {
    name: "REACT JS",
    description:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.",
    url: "https://react.dev/",
  },
  {
    name: "NEXT JS",
    description:
      "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.",
    url: "https://nextjs.org/",
  },
  {
    name: "TYPESCRIPT",
    description:
      "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "REDUX",
    description:
      "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.",
    url: "https://redux.js.org/",
  },
  
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Hi👋  I'm ready to build E-commerce and Social media - Blog - Business - Personal web page - Portfolio - School website - Travel website - News and magazine website &  ...
            </h3>
            <Link to="https://github.com/Alireza-hajizaki/Full-Stack-E-commerce_Next13-Store" target="_blank">
              <button className="btn btn-sm">See my work</button>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, url } = service;
                return (
                  <div
                    key={index}
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font font-semibold mb-4">
                        {name}
                      </h4>
                      <p className="font-semibold leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <Link
                        to={url}
                        target="_blank"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </Link>
                      <Link to={url} className="text-gradient text-sm">
                        Learn more
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
