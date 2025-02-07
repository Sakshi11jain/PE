import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-6 md:p-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-center space-y-8 md:space-y-0">
        
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="./images/footer_logo.jpg"
            alt="SCSIT logo"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-gray-700"
          />
        </div>
        <div className="w-full md:w-1/3 space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-200 pt-4 pb-2">
            Sakshi Jain & Ayushi Pawar
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Built with ❤️ using MongoDB, Express, Reactjs, and Nodejs
          </p>
          <div className="flex justify-center space-x-8 pt-4">
            <a
              href="https://linkedin.com/in/prepedge2k25/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 md:w-7 md:h-7"
              >
                <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0zm-13.16 20H5.34V9.09h3.73zm-1.87-12.73a2.16 2.16 0 110-4.32 2.16 2.16 0 010 4.32zM20 20h-3.73v-5.57c0-1.33-.03-3.05-1.86-3.05s-2.15 1.45-2.15 2.94V20H8.54V9.09h3.58v1.49h.05a3.92 3.92 0 013.54-1.94c3.78 0 4.48 2.48 4.48 5.7z" />
              </svg>
            </a>
            <a
              href="https://github.com/prepedge2k25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 md:w-9 md:h-7"
              >
                <path d="M12 0a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58V20.9c-3.34.73-4.04-1.44-4.04-1.44-.55-1.41-1.33-1.79-1.33-1.79-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.24 1.83 1.24 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.63-2.66-.3-5.46-1.34-5.46-5.96a4.67 4.67 0 011.24-3.24 4.34 4.34 0 01.12-3.2s1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.73 1.82.28 3.17.14 3.5a4.67 4.67 0 011.24 3.24c0 4.62-2.8 5.66-5.46 5.96.42.36.8 1.08.8 2.18v3.24c0 .32.21.7.82.58A12 12 0 0012 0z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/prep_edge2k25/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 0c3.3 0 3.7 0 5.03.07 1.26.07 2.14.29 2.94.63a5.92 5.92 0 012.12 1.36 5.93 5.93 0 011.36 2.12c.34.8.56 1.68.63 2.94.07 1.33.07 1.73.07 5.03s0 3.7-.07 5.03c-.07 1.26-.29 2.14-.63 2.94a5.92 5.92 0 01-1.36 2.12 5.93 5.93 0 01-2.12 1.36c-.8.34-1.68.56-2.94.63-1.33.07-1.73.07-5.03.07s-3.7 0-5.03-.07c-1.26-.07-2.14-.29-2.94-.63a5.92 5.92 0 01-2.12-1.36A5.93 5.93 0 01.7 19.97c-.34-.8-.56-1.68-.63-2.94C.07 15.7.07 15.3.07 12s0-3.7.07-5.03c.07-1.26.29-2.14.63-2.94A5.92 5.92 0 012.16 1.7 5.93 5.93 0 014.28.34c.8-.34 1.68-.56 2.94-.63C8.3.07 8.7.07 12 .07zm0 2.2c-3.2 0-3.58 0-4.84.06-1.13.06-1.74.24-2.15.4a3.86 3.86 0 00-1.44.9 3.86 3.86 0 00-.9 1.44c-.16.4-.34 1.02-.4 2.15C2.2 8.42 2.2 8.8 2.2 12s0 3.58.06 4.84c.06 1.13.24 1.74.4 2.15.22.54.53.98.9 1.44.46.37.9.68 1.44.9.4.16 1.02.34 2.15.4 1.26.06 1.64.06 4.84.06s3.58 0 4.84-.06c1.13-.06 1.74-.24 2.15-.4a3.86 3.86 0 001.44-.9 3.86 3.86 0 00.9-1.44c.16-.4.34-1.02.4-2.15.06-1.26.06-1.64.06-4.84s0-3.58-.06-4.84c-.06-1.13-.24-1.74-.4-2.15a3.86 3.86 0 00-.9-1.44 3.86 3.86 0 00-1.44-.9c-.4-.16-1.02-.34-2.15-.4C15.58 2.2 15.2 2.2 12 2.2zm0 4.4a5.4 5.4 0 11-.01 10.81A5.4 5.4 0 0112 6.6zm0 2.2a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zm6.4-.9a1.08 1.08 0 100 2.15 1.08 1.08 0 000-2.15z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="./images/SCSIT logo.png"
            alt="SCSIT logo"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-gray-700"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
