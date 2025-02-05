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
    <div className="p-10 bg-slate-800">
      <h1
        className="text-6xl font-bold mb-8 text-white text-center"
        style={{ textShadow: '0 0 3px #fff, 0 0 6px #0077ff' }}
      >
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
              <div className="card-front bg-slate-100 text-black p-7 rounded shadow-md">
                <img
                  className="mx-auto h-32 w-32 rounded-full mb-3"
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
                  className="bg-emerald-700 text-white px-4 py-2 rounded font-medium mt-3"
                >
                  Experience
                </button>
              </div>
              {/* Back Side */}
              <div className="card-back bg-slate-200 flex flex-col items-center justify-center rounded shadow-md">
                <p className="text-base font-medium px-6 mb-4">{user.experience}</p>
                <button
                  onClick={() => toggleFlip(index)}
                  className="bg-emerald-700 text-white px-4 py-2 rounded font-medium"
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