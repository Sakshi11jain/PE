import React, { useState } from 'react';
import './SeniorGuidance.css';

const SeniorGuidance = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const users = [
    {
      name: "Sakshi Jain",
      companyName: "Accenture",
      Role: "Associate Software Engineer",
      salary: "4.5 LPA",
      contact: "sakj2966@gmail.com",
      profilePhoto: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      experience: "Worked on multiple software projects, leading teams, and ensuring smooth project deliveries. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum obcaecati quidem neque repellat iure, autem culpa eum dignissimos, officia suscipit aspernatur blanditiis laudantium aliquid molestiae praesentium sit nostrum quibusdam! Rerum.",
    },
    {
      name: "Ayushi Pawar",
      companyName: "Accenture",
      Role: "Associate Software Engineer",
      salary: "4.5 LPA",
      contact: "",
      profilePhoto: "",
      experience: "Specialized in front-end development and successfully delivered client-focused designs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum obcaecati quidem neque repellat iure, autem culpa eum dignissimos, officia suscipit aspernatur blanditiis laudantium aliquid molestiae praesentium sit nostrum quibusdam! Rerum.",
    },
    {
      name: "Manika Dutt",
      companyName: "Accenture",
      Role: "Associate Software Engineer",
      salary: "4.5 LPA",
      contact: "",
      profilePhoto: "",
      experience: "Experienced in backend APIs and optimizing database queries for high performance. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum obcaecati quidem neque repellat iure, autem culpa eum dignissimos, officia suscipit aspernatur blanditiis laudantium aliquid molestiae praesentium sit nostrum quibusdam! Rerum. ",
    },
    {
      name: "Skandh Jadon",
      companyName: "Accenture",
      Role: "Associate Software Engineer",
      salary: "4.5 LPA",
      contact: "",
      profilePhoto: "",
      experience: ""
    },
    {
      name: "Shruti Solanki",
      companyName: "Dice",
      salary: "10 LPA",
      contact: "",
      profilePhoto: "",
      experience: ""
    },
    {
      name: "Chanchala Mukati",
      companyName: "Safesend",
      Role: "Software Engineer",
      salary: "6 LPA",
      contact: "",
      profilePhoto: "",
      experience: ""
    },
    {
      name: "Rajveer Choudhary",
      companyName: "Infosys",
      Role: "Software Engineer",
      salary: "3.6 LPA",
      contact: "",
      profilePhoto: "",
      experience: ""
    },
    {
      name: "Anjali Vishwakarma",
      companyName: "Infosys",
      Role: "Software Engineer",
      salary: "3.6 LPA",
      contact: "",
      profilePhoto: "",
      experience: ""
    },
    {
      name: "Rohit Kumar",
      companyName: "Infosys",
      Role: "Software Engineer",
      salary: "3.6 LPA",
      contact: "",
      profilePhoto: "",
      experience: ""
    },
    {
      name: "Aryan Sindhe",
      companyName: "Infosys",
      Role: "Software Engineer",
      salary: "3.6 LPA",
      contact: "",
      profilePhoto: "",
      experience: ""
    },
    {
      name: "Harsh Soni",
      companyName: "Infosys",
      Role: "Software Engineer",
      salary: "3.6 LPA",
      contact: "",
      profilePhoto: "",
      experience: ""
    },
    {
      name: "Saurav Thoke",
      companyName: "GammaStack",
      Role: "Solution Engineer",
      salary: "4.15 LPA",
      contact: "",
      profilePhoto: "",
      experience: ""
    }
  ];



  return (
    <div className="p-10 bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen">
      <h1 className="text-6xl font-bold font-serif text-center mb-8 text-gray-800">
        Senior Guidance
      </h1>
      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {users.map((user, index) => (
          <div
            key={index}
            className={`card ${flippedCards[index] ? 'flipped' : ''}`}
          >
            <div className="card-inner">
              {/* Front Side */}
              <div className="card-front bg-white text-gray-800 p-7 rounded-xl shadow-lg transform transition-all duration-300">
                <img
                  className="mx-auto h-32 w-32 rounded-full mb-3 shadow-md"
                  src={user.profilePhoto || "https://via.placeholder.com/150"}
                  alt={user.name}
                />
                <h1 className="text-2xl text-center font-bold mb-4">{user.name}</h1>
                <h2 className="pl-6"><strong>Placed in:</strong> {user.companyName}</h2>
                <h2 className="pl-6"><strong>Role:</strong> {user.Role}</h2>
                <h2 className="pl-6"><strong>Salary:</strong> {user.salary}</h2>
                <h2 className="pl-6"><strong>Email:</strong> {user.contact || "N/A"}</h2>
                <button
                  onClick={() => toggleFlip(index)}
                  className="mt-4 w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  View Experience
                </button>
              </div>

              {/* Back Side */}
              <div className="card-back bg-gray-100 flex flex-col items-center justify-center rounded-xl shadow-lg p-6">
                <p className="text-base font-medium px-6 text-gray-800 mb-4">{user.experience}</p>
                <button
                  onClick={() => toggleFlip(index)}
                  className="w-full bg-gradient-to-r from-purple-800 to-purple-900 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Back to Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeniorGuidance;
