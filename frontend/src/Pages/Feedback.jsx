import React, { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, feedback }),
    });
    if (response.ok) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setFeedback("");
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center h-screen space-x-0 bg-slate-900">
      <div className="flex w-full max-w-4xl">
        <div className="w-1/2 p-8 bg-white shadow-2xl rounded-l-3xl transform transition-all duration-300">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Your Feedback Matters!</h2>
          {submitted ? (
            <p className="text-green-600 text-md text-center font-semibold">
              🎉🎉🎉 Thank you for your valuable feedback! 🎉🎉🎉
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Feedback <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                  placeholder="We'd love to hear your thoughts!"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Submit Feedback
              </button>
            </form>
          )}
        </div>

        <div className="relative w-1/2 p-0 bg-slate-800 text-white rounded-r-3xl transform transition-all duration-300">
        <div className=" m-0 p-0
          border-t-[45px] border-t-transparent
          border-l-[60px] border-l-white
          border-b-[45px] border-b-transparent">
        </div>
        <div className="flex flex-wrap h-80 items-center justify-center">
          <h2 className="text-3xl font-semibold text-center mb-6">Let’s Connect</h2>
          <p className="text-lg text-center mb-6">Got a question or want to collaborate ? <br/>Send us an email!</p>
            <div className="flex justify-center">
              <a href="mailto:prepedge2k25@gmail.com">
                <button className="w-auto p-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  📧 Send an Email
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;