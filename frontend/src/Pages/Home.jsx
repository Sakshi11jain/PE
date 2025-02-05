import React from 'react';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTop';
import NavBar from './NavBar';
// import FloatingCards from './FloatingCards';

function Home() {
  return (
    <>
      <NavBar />
      <div className="flex flex-wrap items-center justify-between px-10 py-20 bg-gradient-to-r from-blue-50 to-white">
        {/* Left Side */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-blue-600">
            Welcome to PrepEdge!
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            PrepEdge is an innovative platform designed to help individuals excel in their career journey by offering tailored interview preparation resources, expert guidance, and essential tips for success. From mastering interview etiquettes to gaining insights from industry professionals, PrepEdge equips users with the edge they need to confidently navigate their professional growth.
          </p>
          <p className="text-lg text-gray-600">Click to get started:</p>
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
            Start Interview Prep
          </button>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center">
          Floating Cards
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default Home;
