import React from "react";
import { motion } from "framer-motion";

const About = () => {

  return (
    <section className="bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen flex items-center justify-center py-12 w-full">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Section - Image */}
        <motion.div 
          className="md:w-1/2 flex justify-center mt-6"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <img
            src="/about.jpg"
            alt="About PrepEdge"
            className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-lg h-auto object-cover transition-transform duration-300 hover:scale-105"
          />
        </motion.div>

        {/* Right Section - Content */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left mt-8"
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight font-sans">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-black">PrepEdge</span>
          </h2>

          <p className="text-gray-700 text-lg mt-6 leading-relaxed font-light">
            <span className="font-bold text-black">PrepEdge</span> is a 
            <span className="font-semibold text-gray-900"> Placement Preparation</span> platform designed to help students excel in their careers. 
            We provide <span className="text-gray-800 font-medium">coding practice, aptitude tests, mock interviews,</span> and 
            <span className="text-gray-800 font-medium"> resume-building tools.</span> 
            Our mission is to <span className="text-gray-900 font-semibold">bridge the gap between academia and industry,</span> ensuring students are job-ready.
          </p>

          {/* Mission & Vision Section */}
          <div className="space-y-6 mt-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 font-serif">Our Mission</h3>
              <p className="text-gray-700 text-lg mt-2 leading-relaxed font-light">
                We provide students with <span className="font-semibold text-gray-900">high-quality resources</span>, real-world coding challenges, 
                and structured roadmaps to ace technical interviews and secure their dream jobs.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 font-serif">Our Vision</h3>
              <p className="text-gray-700 text-lg mt-2 leading-relaxed font-light">
                Empowering students, irrespective of background, by offering <span className="text-gray-900 font-medium">expert guidance</span>, 
                industry insights, and premium preparation materials.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
