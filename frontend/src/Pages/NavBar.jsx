import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState("User");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
          setLoggedInUser(localStorage.getItem('loggedInUser') || 'User');
      }, []);
  
      const handleLogout = () => {
          localStorage.removeItem('token');
          localStorage.removeItem('loggedInUser');
          handleSuccess('User Logged out');
          setTimeout(() => {
              navigate('/');
          }, 1000);
      };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
      {/* Logo */}
      <img
        src="/prepEdge-logo.png"
        alt="PrepEdge Logo"
        className="w-32 h-auto"
      />

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-blue-500">
          Interview Etiquettes
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500">
          Senior Guidance
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500">
          Resume Builder
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500">
          Companies Info
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500">
          RoadMap
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500">
          Job
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500">
          About us
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500">
          Contact us
        </a>
      </div>

      {/* Profile Section */}
      <div className="relative" ref={menuRef}>
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <img
            src="/profile-photo.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-gray-700 font-medium">{loggedInUser}</span>
        </div>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md">
            <button
              className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
      <ToastContainer />
    </nav>
  );
};

export default Navbar;
