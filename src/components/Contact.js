import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    emailjs
      .sendForm(
        "service_3pqp1p7",
        "template_8ewkmls",
        form.current,
        "KF3mU73_IQhIugd3s"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email Sent", {
            duration: 4000,
            position: "top-center",
          });
          reset();
        },
        (error) => {
          console.log(error.text);
          toast.success("ooops! try again");
        }
      );
  };

  const form = useRef();

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
            // onSubmit={sendEmail}
            onSubmit={handleSubmit(onSubmit)}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="name"
              placeholder="Your name"
              {...register("name", { required: true, maxLength: 20 })}
            />
            {errors.name?.type === "required" && (
              <p role="alert">First name is required</p>
            )}
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              name="email"
              placeholder="Your email"
              {...register(
                "email",
                { required: "Email Address is required" },
                { pattern: /^\S+@\S+\.\S+$/ }
              )}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p role="alert">{errors.email.message}</p>}
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="subject"
              placeholder="Subject"
              {...register("subject", { required: true, maxLength: 15 })}
            />
            {errors.subject?.type === "required" && (
              <p role="alert">Subject is required</p>
            )}
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              type="text"
              name="message"
              placeholder="Your message"
              {...register("message")}
            ></textarea>
            <input
              type="submit"
              value="send message"
              className="btn btn-info p-3"
            ></input>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
