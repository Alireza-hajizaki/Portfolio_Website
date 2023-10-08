import React, {useRef} from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from '@emailjs/browser';

export default function Contact(){
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm("service_3pqp1p7","template_8ewkmls",form.current,"KF3mU73_IQhIugd3s")
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      });
  }

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br />
                together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            ref={form}
            onSubmit={sendEmail}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                name="name"
                placeholder="Your name"
              />
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="email"
                name="email"
                placeholder="Your email"
              />
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <textarea
                className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                type="text"
                name='message'
                placeholder="Your message"
              ></textarea>
              <input type="submit" value='send message' className="btn btn-info p-3"></input>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
