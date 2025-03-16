import React, { useState } from "react";
import "./SeniorGuidance.css";

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
      initial: "S",
      companyName: "Accenture",
      Role: "Associate Software Engineer",
      salary: "4.5 LPA",
      contact: "sakj2966@gmail.com",
      profilePhoto: "./seniors/sakshi.jpg",
      experience:
        "Worked on multiple software projects, leading teams, and ensuring smooth project deliveries. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum obcaecati quidem neque repellat iure, autem culpa eum dignissimos, officia suscipit aspernatur blanditiis laudantium aliquid molestiae praesentium sit nostrum quibusdam! Rerum.",
    },
    {
      name: "Ayushi Pawar",
      initial: "A",
      companyName: "Accenture",
      Role: "Associate Software Engineer",
      salary: "4.5 LPA",
      contact: "ayushipawar@gmail.com",
      profilePhoto: "./seniors/Ayushi.png",
      experience:
        "Specialized in front-end development and successfully delivered client-focused designs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum obcaecati quidem neque repellat iure, autem culpa eum dignissimos, officia suscipit aspernatur blanditiis laudantium aliquid molestiae praesentium sit nostrum quibusdam! Rerum.",
    },
    {
      name: "Manika Dutt",
      initial: "M",
      companyName: "Accenture",
      Role: "Associate Software Engineer",
      salary: "4.5 LPA",
      contact: "",
      profilePhoto: "",
      experience:
        "Experienced in backend APIs and optimizing database queries for high performance. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum obcaecati quidem neque repellat iure, autem culpa eum dignissimos, officia suscipit aspernatur blanditiis laudantium aliquid molestiae praesentium sit nostrum quibusdam! Rerum. ",
    },
    {
      name: "Skandh Jadon",
      initial: "S",
      companyName: "Accenture",
      Role: "Associate Software Engineer",
      salary: "4.5 LPA",
      contact: "",
      profilePhoto: "",
      experience: "",
    },
    {
      name: "Shruti Solanki",
      initial: "S",
      companyName: "Dice",
      Role: "Frontend Devloper",
      salary: "10 LPA",
      contact: "",
      profilePhoto: "",
      experience: "",
    },
    {
      name: "Chanchala Mukati",
      initial: "C",
      companyName: "Safesend",
      Role: "Software Engineer",
      salary: "6 LPA",
      contact: "",
      profilePhoto: "",
      experience: "",
    },
    {
      name: "Rajveer Choudhary",
      initial: "R",
      companyName: "Infosys",
      Role: "Software Engineer",
      salary: "3.6 LPA",
      contact: "",
      profilePhoto: "",
      experience: "",
    },
    {
      name: "Anjali Vishwakarma",
      initial: "A",
      companyName: "Infosys",
      Role: "Software Engineer",
      salary: "3.6 LPA",
      contact: "",
      profilePhoto: "",
      experience: "",
    },
    {
      name: "Rohit Kumar",
      initial: "R",
      companyName: "Infosys",
      Role: "Software Engineer",
      salary: "3.6 LPA",
      contact: "",
      profilePhoto: "",
      experience: "",
    },
    {
      name: "Aryan Sindhe",
      initial: "A",
      companyName: "Infosys",
      Role: "Software Engineer",
      salary: "3.6 LPA",
      contact: "",
      profilePhoto: "",
      experience: "",
    },
    {
      name: "Harsh Soni",
      initial: "H",
      companyName: "Infosys",
      Role: "Software Engineer",
      salary: "3.6 LPA",
      contact: "",
      profilePhoto: "",
      experience: "",
    },
    {
      name: "Saurav Thoke",
      initial: "S",
      companyName: "GammaStack",
      Role: "Solution Engineer",
      salary: "4.15 LPA",
      contact: "",
      profilePhoto: "",
      experience: "",
    },
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
            className={`card ${flippedCards[index] ? "flipped" : ""}`}
          >
            <div className="card-inner">
              {/* Front Side */}
              <div className="card-front text-gray-800 p-7 rounded-xl transform transition-all duration-300">
                <div className="mx-auto h-32 w-32 rounded-full mb-3 shadow-md flex items-center justify-center bg-gray-100 text-blue-200 text-7xl font-semibold">
                  {user.profilePhoto ? (
                    <img
                      className="h-full w-full rounded-full"
                      src={user.profilePhoto}
                      alt={user.initial}
                    />
                  ) : (
                    <span>{user.initial}</span>
                  )}
                </div>
                <h1 className="text-2xl text-center font-bold mb-4">
                  {user.name}
                </h1>
                <h2 className="pl-6">
                  <strong>Placed in:</strong> {user.companyName}
                </h2>
                <h2 className="pl-6">
                  <strong>Role:</strong> {user.Role}
                </h2>
                <h2 className="pl-6">
                  <strong>Salary:</strong> {user.salary}
                </h2>
                <h2 className="pl-6">
                  <strong>Email:</strong> {user.contact || "N/A"}
                </h2>
                <button
                  onClick={() => toggleFlip(index)}
                  className="mt-[1.85rem] w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  View Experience
                </button>
              </div>

              {/* Back Side */}
              <div className="card-back flex flex-col items-center justify-center rounded-xl p-6">
                <p className="px-6 mb-4">
                  {user.experience}
                </p>
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
