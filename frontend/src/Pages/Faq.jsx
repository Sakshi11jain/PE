import React, { useEffect, useState } from 'react';

export default function FaqPage() {
  const [faqData, setFaqData] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  useEffect(() => {
    fetch('http://localhost:3000/api/faqs')
      .then(response => response.json())
      .then(data => setFaqData(data));
  }, []);

  const categories = Object.keys(faqData);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl font-bold font-serif text-center mb-8 text-gray-800">Interview FAQ</h1>
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories?.map(category => (
            <button
              key={category}
              className={`px-6 py-2 rounded-lg shadow-md font-medium ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-800 hover:bg-purple-100'
              } transition-all duration-300`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          {/* Scrollable container for FAQs */}
          <div className="max-h-[500px] overflow-y-auto">
            {faqData[selectedCategory]?.map((faq, index) => (
              <div
                key={index}
                className="mb-6 border-b pb-4 last:border-b-0 last:pb-0"
              >
                <h2 className="font-semibold text-lg text-gray-900">{faq.question}</h2>
                <p className="text-gray-700 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
