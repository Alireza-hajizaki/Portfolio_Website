import React from "react";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandReact } from "react-icons/tb";
import { BiLogoRedux} from "react-icons/bi";
import { BsDatabaseFillLock} from "react-icons/bs";
import { SiTypescript , SiHtml5,SiGoogleforms,SiZod , SiNextdotjs , SiVite } from "react-icons/si";
import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import VerticalElem from "./VerticalElem";

const skills = [
    {
        title: 'React Js , Next Js',
        icon: <TbBrandReact />,
    },
    {
        title: 'Html & Css',
        icon: <SiHtml5 />,
    },
    {
        title: 'TypeScript , JavaScript',
        icon: <SiTypescript />,
    },
    {
        title: 'Next Js: Routing, SSR, NextAuth, NextJs API, Building APIs, ...',
        icon: <SiNextdotjs />,
    },
    {
        title: 'Tailwind Css/Ui, Daisy Ui, Bootstrap, Flowbite, Shad Cn, Sass, Material Ui, Redix Ui , Framer Motion',
        icon: <FaCss3Alt />,
    },
    {
        title: 'Redux , Redux toolkit , Redux tank , Zustand',
        icon: <BiLogoRedux />,
    },
    {
        title: 'React Hook Form, Formik',
        icon: <SiGoogleforms />,
    },
    {
        title: 'Yup , Zod',
        icon: <SiZod />,
    },
    {
        title: 'Webpack , Vite , Prisma',
        icon: <SiVite />,
    },
    {
        title: 'Database Integration with Prisma , Mysql ,Datagrip , Mongodb',
        icon: <BsDatabaseFillLock />,
    },
   
];

const Skills = () => {
  return (
    <section className="my-48" id="skills">
      <VerticalTimeline>
        {skills.map((skill , index) => (
            <VerticalElem key={index} title={skill.title} icon={skill.icon} />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Skills;
