import React from 'react';
import { useNavigate } from 'react-router-dom';

const DSA = () => {
  const navigate = useNavigate();

  const resources = [
    { title: 'GeeksforGeeks DSA', link: 'https://www.geeksforgeeks.org/data-structures/' },
    { title: 'LeetCode', link: 'https://leetcode.com/' },
    { title: 'Take U Forward DSA', link: 'https://takeuforward.org/' },
    { title: 'CodeChef', link: 'https://www.codechef.com/' },
    { title: 'HackerRank', link: 'https://www.hackerrank.com/domains/tutorials/10-days-of-algorithms' },
    { title: 'TopCoder', link: 'https://www.topcoder.com/' },
    { title: 'InterviewBit', link: 'https://www.interviewbit.com/' },
  ];

  const youtubeResources = [
    { title: 'DSA Full Course', link: 'https://www.youtube.com/watch?v=8hly31xKli0' },
    { title: 'Love Babbar 450 DSA', link: 'https://www.youtube.com/playlist?list=PLlGpFGXC9XnYOMturcfblGyym6wPGGvKF' },
    { title: 'Striver’s A2Z DSA Course', link: 'https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz' },
    { title: 'Sorting Algorithms', link: 'https://www.youtube.com/watch?v=Z8svOqamag8' },
    { title: 'Graph Algorithms', link: 'https://www.youtube.com/watch?v=tWVWeAqZ0WU' },
    { title: 'Dynamic Programming', link: 'https://www.youtube.com/watch?v=oBt53YbR9Kk' },
  ];

  const downloadAllImages = () => {
    const imageLinks = ['/images/DSA1.jpeg', '/images/DSA2.jpeg', '/images/DSA3.jpeg'];
    imageLinks.forEach((link) => {
      const a = document.createElement('a');
      a.href = link;
      a.download = link.substring(link.lastIndexOf('/') + 1);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-200 to-blue-50 min-h-screen flex flex-col items-center text-black p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-6 w-full px-4">
        <img src="/roadmap_images/DSA1.png" alt="DSA 1" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        <img src="/roadmap_images/DSA2.png" alt="DSA 2" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        <img src="/roadmap_images/DSA3.png" alt="DSA 3" className="w-full h-auto object-cover rounded-lg shadow-lg" />
      </div>
      
<div className="w-full max-w-xl flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-semibold text-black mb-2">Recommended Resources:</h3>
          <ul className="list-disc list-inside text-left text-black">
            {resources.map((resource, index) => (
              <li key={index} className="mb-2">
                <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-semibold text-black mb-2">YouTube Tutorials:</h3>
          <ul className="list-disc list-inside text-left text-black">
            {youtubeResources.map((yt, index) => (
              <li key={index} className="mb-2">
                <a href={yt.link} target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                  {yt.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
     
      <div className="flex flex-col items-center space-y-4 mt-6 w-full max-w-xs">
        <button
          onClick={downloadAllImages}
         className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition text-center w-3/4"
        >
          Download All Images
        </button>

        <button
          onClick={() => navigate('/roadmap')}
          className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition text-center w-3/4"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default DSA;