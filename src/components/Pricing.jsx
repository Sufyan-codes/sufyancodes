import React from "react";
import { motion } from "framer-motion";
import { PLANS_CONTENT } from "../constants";
import space from "../assets/space-exploration.png";
import chalatix from "../assets/lensly.png";
import photo from "../assets/photostudio.png";

export default function Pricing() {
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  return (
    <section id="projects">
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <motion.div
          className="text-center mb-12 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="text-3xl lg:text-5xl mt-20 tracking-tighter
              bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600
              bg-clip-text text-transparent"
          >
            {PLANS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4">{PLANS_CONTENT.sectionDescription}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                straggerChildren: 0.5,
              },
            },
          }}
          className="grid grid-cols-1  gap-8"
        >
          <motion.div
            variants={childVariants}
            className={`p-8 rounded-xl shadow-lg grid lg:grid-cols-2 grid-cols-1 gap-8 bg-neutral-950 border border-purple-900/80 border border-neutral-800"
                          }`}
          >
            <div>
              <h3 className="text-lg lg:text-xl mb-4 tracking-tighter uppercase">
                Lensly Digital
              </h3>
              <p className="text-neutral-400 mb-6">
                A modern and user friendly multipage photography and video
                              portfolio for photography company, it offers luxury looking design and detailed information
                              about the brand and the experiences it captures
              </p>
              <img className="rounded" src={chalatix} alt="" />
            </div>

            <div className="">
              <h1 className="lg:text-2xl text-xl lg:mb-10">Key Features</h1>
              <ul className="mb-8 mt-4 space-y-4  text-neutral-400">
                <li className="flex items-center">
                  <span className="inline-block w-8 h-1 mr-2 bg-purple-600 rounded-md"></span>
                  5 pages built with react tailwind and react router 6 
                              </li>
                              <li className="flex items-center">
                  <span className="inline-block w-8 h-1 mr-2 bg-purple-600 rounded-md"></span>
                  Reduced the initial loading time by 40% through image optimization and lazy loading.
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-8 h-1 mr-2 bg-purple-600 rounded-md"></span>
                  Ensured 99% design consistency accross 5 different viewports sizes.
                              </li>
                              <li className="flex items-center">
                  <span className="inline-block w-8 h-1 mr-2 bg-purple-600 rounded-md"></span>
                  Implemented query functionalities for projects and galleries.
                </li>
              </ul>
              <ul className="grid grid-cols-4 text-purple-600">
                <li>
                  <span className=" ">React</span>
                </li>
                <li>
                  <span className="  ">React Router</span>{" "}
                </li>
                <li>
                  {" "}
                  <span className="  ">Tailwind</span>
                </li>
                <li>
                  {" "}
                  <span className=" ">FramerMotion</span>
                </li>
              </ul>
              <a href="https://lensly.netlify.app/">
                <button className="text-purple-600 hover:text-purple-500 mt-8 border-b border-purple-600">
                  View Live Demo
                </button>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={childVariants}
            className={`p-8 rounded-xl shadow-lg grid lg:grid-cols-2 grid-cols-1 gap-8 bg-neutral-950 border border-purple-900/80 border border-neutral-800"
                          }`}
          >
            <div>
              <h3 className="text-lg lg:text-xl mb-4 tracking-tighter uppercase">
                Space-Exploration
              </h3>
              <p className="text-neutral-400 mb-6">
                              A sleek and user friendly multiple page space-exploration agency that allows users
                              to be able book a space travel destination.
              </p>
              <img className="rounded" src={space} alt="" />
            </div>
            <div>
              <h1 className="lg:text-2xl text-xl lg:mb-10">Key Features</h1>

              <ul className="mb-8 mt-4 space-y-4 text-neutral-400">
                <li className="flex items-center">
                  <span className="inline-block w-8 h-1 mr-2 bg-purple-600 rounded-md"></span>
                  10+ pages Built with React router 6
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-8 h-1 mr-2 bg-purple-600 rounded-md"></span>
                  Reduced initial loading speed by 50% using loaders, image optimization and lazy loading
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-8 h-1 mr-2 bg-purple-600 rounded-md"></span>
                  Implemented protected routes and login/sign up functionalities
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-8 h-1 mr-2 bg-purple-600 rounded-md"></span>
                  Utilized miragejs to fetch and query data, currently working on using firebase for backend
                </li>
              </ul>
              <ul className="grid grid-cols-4 text-purple-600">
                <li>
                  <span className=" ">React</span>
                </li>
                <li>
                  <span className="  ">React Router</span>{" "}
                </li>
                <li>
                  {" "}
                  <span className="  ">Tailwind</span>
                </li>
                <li>
                  {" "}
                  <span className=" ">FramerMotion</span>
                </li>
              </ul>
              <a href="https://space-booking-app.netlify.app">
                <button className="text-purple-600 hover:text-purple-500 mt-8 border-b border-purple-600">
                  View Live Demo
                </button>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={childVariants}
            className={`p-8 rounded-xl shadow-lg grid lg:grid-cols-2 grid-cols-1 gap-8 bg-neutral-950 border border-purple-900/80 border border-neutral-800"
                          }`}
          >
            <div>
              <h3 className="text-lg lg:text-xl mb-4 tracking-tighter uppercase">
                photostudio
              </h3>
              <p className="text-neutral-400 mb-6">
                A Beautiful and user friendly single page photostudio agency
                landing page 
              </p>
              <img className="rounded" src={photo} alt="" />
            </div>
                      <div>
                      <h1 className="lg:text-2xl text-xl lg:mb-10">Key Features</h1>
              <ul className="mb-8 mt-4 space-y-2 text-neutral-400">
                <li className="flex items-center">
                  <span className="inline-block w-8 h-1 mr-2 bg-purple-600 rounded-md"></span>
                  A HTML, CSS and tailwind landing page
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-8 h-1 mr-2 bg-purple-600 rounded-md"></span>
                  Sleek Design and animations with framer motion
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-8 h-1 mr-2 bg-purple-600 rounded-md"></span>
                  Fully responsive on all devices
                </li>

                <li className="flex items-center">
                  <span className="inline-block w-8 h-1 mr-2 bg-purple-600 rounded-md"></span>
                  Modern Design
                </li>
                          </ul>
                          <ul className="grid grid-cols-4 text-purple-600">
                <li>
                  <span className=" ">HTML</span>
                </li>
                <li>
                  <span className="  ">Tailwind</span>{" "}
                </li>
                <li>
                  {" "}
                  <span className="  ">Javascript</span>
                </li>
                <li>
                  {" "}
                  <span className=" ">FramerMotion</span>
                </li>
              </ul>
              <a href="https://photolanding.netlify.app/">
                <button className="text-purple-600 hover:text-purple-500 mt-8 border-b border-purple-600">
                  View Live Demo
                </button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
