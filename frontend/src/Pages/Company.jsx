import { useState } from "react";

const Company = () => {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "Google",
      logo: "./Company_logos/Google.webp",
      description:
        "A global leader in internet-related services, including search engines, online advertising, and cloud computing.",
      founder: "Larry Page & Sergey Brin",
      ceo: "Sundar Pichai",
      startDate: "September 4, 1998",
      website: "https://about.google/",
      rating: 4.3,
      pros: [
        "1. My teammates were really great people and did a lot to help me get up and running. (in 3620 ratings)",
        "2. Great benefits and I do believe they build some of the best products out there. (in 2903 ratings)",
      ],
      cons: [
        "1. Long hours and lots to learn if you are not a learner it might not be the best place (in 689 ratings)",
        " 2. Bad management and rude to customers (in 599 ratings)",
      ],
    },
    {
      id: 2,
      name: "TCS",
      logo: "./Company_logos/TCS.png",
      description:
        "India's largest IT services firm offering consulting, IT solutions, and business outsourcing services globally.",
      founder: "Tata Sons",
      ceo: "K. Krithivasan",
      startDate: "April 1, 1968",
      website: "https://www.tcs.com/",
      rating: 3.7,
      pros: [
        "1. Work Life balance is good and the stability for the job is high (in 1359 ratings)",
        "2. Good job security and policies (in 862 ratings)",
      ],
      cons: [
        "1. Less salary and hike is also very less (in 995 ratings) ",
        "2. The salary hike is low but overall good (in 280 ratings)",
      ],
    },
    {
      id: 3,
      name: "Infosys",
      logo: "./Company_logos/Infosys.png",
      description:
        "A global leader in consulting, technology, outsourcing, and next-generation services.",
      founder: "Narayana Murthy & team",
      ceo: "Salil Parekh",
      startDate: "July 2, 1981",
      website: "https://www.infosys.com/",
      rating: 3.6,
      pros: [
        "1. Many clubs of any kind of interest..Great campus...Good salary for consultants.. good work life balance(in 8408 ratings) ",
        "2. Work culture and their process is was good where employees will not have any worries. (in 5849 ratings)",
      ],
      cons: [
        "1.Salary is less and you may be put to support job even after you being developer (in 11251 ratings)",
        "2. There is no salary hike in Infosys since 2021 even though the company is making a hige profit. (in 3318 ratings)",
      ],
    },
    {
      id: 4,
      name: "Wipro",
      logo: "./Company_logos/Wipro.svg",
      description:
        "A multinational company specializing in IT, consulting, and business process services.",
      founder: "M.H. Hasham Premji",
      ceo: "Thierry Delaporte",
      startDate: "December 29, 1945",
      website: "https://www.wipro.com/",
      rating: 3.6,
      pros: [
        "1. Here it's good work life balance and also it depends on project u work for (in 4334 ratings)",
        "2. Work culture is good and good to start career as a fresher and worklife balanced. (in 2622 ratings)",
      ],
      cons: [
        "1. Less salary is provided for the work done and provides no bonus for extra working hours (in 4775 ratings)",
        "2.Also the management is poor and doesn't give proper response until you put pressure. (in 2247 ratings) ",
      ],
    },
    {
      id: 5,
      name: "IBM",
      logo: "./Company_logos/IBM.png",
      description:
        "A leading provider of hardware, software, cloud-based services, and cognitive computing.",
      founder: "Charles Ranlett Flint",
      ceo: "Arvind Krishna",
      startDate: "June 16, 1911",
      website: "https://www.ibm.com/",
      rating: 4.0,
      pros: [
        "1. Good work life balance and good to be able to work from home although that’s often at the discretion of your manager(in 9541 ratings)",
        "2. The people are great and the Extreme Blue program was excellent for learning principles of product design. (in 4566 ratings)",
      ],
      cons: [
        "1. Low salary and the increment was less than 2% even top performer unless you got band promotion (in 4967 ratings)",
        "2. Poor Management (in 2809 ratings)",
      ],
    },
    {
      id: 6,
      name: "Cognizant Technology Solutions",
      logo: "./Company_logos/cognizant.jpeg",
      description:
        "A global provider of IT services, consulting, and business process outsourcing.",
      founder: "Kumar Mahadeva",
      ceo: "Ravi Kumar S.",
      startDate: "January 26, 1994",
      website: "https://www.cognizant.com/",
      rating: 3.7,
      pros: [
        "1. work life balance is good and it also depends on the team and project you are working in (in 8084 ratings)",
        "2. Still there a good work culture but it is not as good as it was in 2019 (in 5725 ratings)",
      ],
      cons: [
        "1. Salary is less for people who stay there for long time with more years of experience (in 4592 ratings)",
        "2. The management is poor as it's a big company and has to manage a lot of things (in 3306 ratings)",
      ],
    },
    {
      id: 7,
      name: "Accenture",
      logo: "./Company_logos/Accenture.png",
      description:
        "A global professional services company providing consulting and strategy in digital, technology, and operations.",
      founder: "Arthur Andersen",
      ceo: "Julie Sweet",
      startDate: "1989",
      website: "https://www.accenture.com/",
      rating: 3.8,
      pros: [
        "1. It has been 7 months working in Accenture.....never felt work tirelessly.....trainings are good and good work life balance (in 9381 ratings)",
        "2. Working here is good because the work culture is good and we get to reskill and upskill ourselves. (in 7036 ratings)",
      ],
      cons: [
        "1. Low salary for resources who are loyal and staying with the company for long years. (in 6798 ratings)",
        "2. I was in Accenture Kolkata and here management are very very poor like political leader (leader with zero knowledge). (in 3599 ratings)",
      ],
    },
    {
      id: 8,
      name: "Capgemini",
      logo: "./Company_logos/Capgemini.svg",
      description:
        "A leader in consulting, digital transformation, technology, and engineering services.",
      founder: "Serge Kampf",
      ceo: "Aiman Ezzat",
      startDate: "October 1, 1967",
      website: "https://www.capgemini.com/",
      rating: 3.8,
      pros: [
        "1. If someone want a company with good infrastructure and company with full enjoyment than Capgemini which provide good work life balance (in 7949 ratings)",
        "2. Work culture is good and also it depends on the project that you are working. (in 3615 ratings)",
      ],
      cons: [
        "1. for existing employees salary is less when compared to lateral hires and difference is too high. (in 3750 ratings)",
        "2.Should be awarded with A++ grade in terms of poor management and project allocation. (in 2173 ratings)",
      ],
    },
    {
      id: 9,
      name: "HCLTech",
      logo: "./Company_logos/HCLTech.png",
      description:
        "An IT services company providing software development, infrastructure management, and business outsourcing.",
      founder: "Shiv Nadar",
      ceo: "C Vijayakumar",
      startDate: "August 11, 1976",
      website: "https://www.hcltech.com/",
      rating: 3.5,
      pros: [
        "1. work life balance is good and you prefer this company for long term if you are not expecting hike and promotion (in 4881 ratings)",
        "2. Job security is good and secure (in 2002 ratings)",
      ],
      cons: [
        "1. The salary for the employees is very less although is very normal but obviously you expect more always (in 3364 ratings)",
        "2. Very poor management by managers will ignore if you are on bench and dont care about your security (in 1690 ratings)",
      ],
    },
    {
      id: 10,
      name: "Microsoft",
      logo: "./Company_logos/Microsoft.webp",
      description:
        "A multinational technology company developing software, hardware, and cloud-based services.",
      founder: "Bill Gates & Paul Allen",
      ceo: "Satya Nadella",
      startDate: "April 4, 1975",
      website: "https://www.microsoft.com/",
      rating: 4.2,
      pros: [
        "1. They provide great benefits and you get a lot of exposure if interested in full time corporate role (in 5545 ratings)",
        "2. Work/Life balance is good and entirely up to you make it what you want it to be (in 4411 ratings)",
      ],
      cons: [
        "1. Bad managers abound and there is not much remedy for that except for leaving the job. (in 1308 ratings)",
        "2. life balance in hardware due to frequent unplanned work travel and evening calls; bloated meetings; some poor management (in 997 ratings)",
      ],
    },
    {
      id: 11,
      name: "Oracle",
      logo: "./Company_logos/Oracle.png",
      description:
        "A leading global provider of database software, cloud solutions, and enterprise IT systems.",
      founder: "Larry Ellison, Bob Miner, Ed Oates",
      ceo: "Safra Catz",
      startDate: "June 16, 1977",
      website: "https://www.oracle.com/",
      rating: 3.8,
      pros: [
        "1.Good work life balance given so that you become lazy and settle down for less and compromise (in 7039 ratings)",
        "2. Good benefits and teaches you how to deal with executives and helps you figure out what you want to do later in life. (in 3058 ratings)",
      ],
      cons: [
        "1. I was hired on a low salary and made my way up to being a very useful asset. (in 2080 ratings)",
        "2. management is poor and inefficient (in 1601 ratings)",
      ],
    },
    {
      id: 12,
      name: "Mphasis Limited",
      logo: "./Company_logos/mphasis.png",
      description:
        "Mphasis Limited is an Indian multinational information technology services and consulting company, providing infrastructure technology and applications outsourcing services, as well as architecture guidance, application development and integration, and application management services.",
      founder: "Jerry Rao & Jeroen Tas",
      ceo: "Nitin Rakesh",
      startDate: "June 2000",
      website: "https://www.mphasis.com/",
      rating: 3.4,
      pros: [
        "1. Good work life balance and flexible (in 1134 ratings)",
        "2. Because Mphasis was under EDS and HP for long time the work culture is good. (in 509 ratings)",
      ],
      cons: [
        "1. Less Salary and not satisfied with apprisals (in 722 ratings)",
        "2. Treats freshers poorly and poor management (in 402 ratings)",
      ],
    },
    {
      id: 13,
      name: "Cisco Systems",
      logo: "./Company+logos/cisco.png",
      description:
        "An American multinational technology conglomerate that develops and sells networking hardware, software, telecommunications equipment, and other high-technology services and products.",
      founder: "Leonard Bosack & Sandra Lerner",
      ceo: "Chuck Robbins",
      startDate: "December 1984",
      website: "https://www.cisco.com/",
      rating: 4.1,
      pros: [
        "1. Good work/life balance (for most) with plenty of tools to help get that done. (in 3616 ratings)",
        "2. Worked for Cisco for over 10 years the best I can say Benefits are good. (in 2454 ratings)",
      ],
      cons: [
        "1. Frequent layoffs and yearly hikes were low (in 1663 ratings)",
        "2. Bad management and politics at cisco (in 783 ratings)",
      ],
    },
    {
      id: 14,
      name: "Adobe",
      logo: "./Company_logos/Adobe.png",
      description:
        "A global leader in creative software solutions, specializing in digital media and marketing.",
      founder: "John Warnock, Charles Geschke",
      ceo: "Shantanu Narayen",
      startDate: "December 1982",
      website: "https://www.adobe.com/",
      rating: 4.2,
      pros: [
        "1. Good work/life balance (the lights would always turn off at HQ around 5:30!) (in 1109 ratings)",
        "2. Great benefits and WLB. (in 1073 ratings)",
      ],
      cons: [
        "1. Poor management but its okay (in 251 ratings)",
        "2. Some managers have a tendency to micromanage (but that's the exception) (in 230 ratings)",
      ],
    },
    {
      id: 15,
      name: "FICO",
      logo: "./Company_logos/Fico.png",
      description:
        "An American data analytics company focused on credit scoring services.",
      founder: "Bill Fair & Earl Isaac",
      ceo: "William Lansing",
      startDate: "1956",
      website: "./Company_logos/FICO.svg",
      rating: 4.1,
      pros: [
        "1. Good work/life balance depending on manager and role (in 185 ratings)",
        "2. Most people were great and the company had good intentions. (in 135 ratings)",
      ],
      cons: [
        "1. Management is poor (in 59 ratings)",
        "Low salary and very far (in 50 ratings)",
      ],
    },
    {
      id: 16,
      name: "Salesforce",
      logo: "https://uipath.com/cdn-cgi/image/width=575,format=auto/https:////images.ctfassets.net/5965pury2lcm/3GNvyZ3UUnTGPTdDVSqYJu/f3851b55467b1533937b7191ed2f4da7/Salesforce-Logo-Video-Spotlight.png",
      description:
        "A global leader in customer relationship management (CRM) solutions and enterprise cloud computing.",
      founder: "Marc Benioff, Parker Harris",
      ceo: "Marc Benioff",
      startDate: "February 1999",
      website: "https://www.salesforce.com/",
      rating: 4.1,
      pros: [
        "1. Many might have told about all the great benefits salesforce offers and everything is true : (in 2326 ratings)",
        "2. Salesforce promotes a great culture as a company and that is reflected in the employees' interactions at the company (in 1967 ratings)",
      ],
      cons: [
        "1. Poor management (both middle management and executives) (in 462 ratings)",
        "2. Bad managers thrive creating terrible and deep differences between departments and culture. (in 382 ratings)",
      ],
    },
    {
      id: 17,
      name: "Uber",
      logo: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
      description:
        "A global technology company revolutionizing mobility and logistics through ridesharing and delivery services.",
      founder: "Travis Kalanick, Garrett Camp",
      ceo: "Dara Khosrowshahi",
      startDate: "March 2009",
      website: "https://www.uber.com/",
      rating: 3.9,
      pros: [
        "1. The people are great and the use of data within the company to inform decisions is incredible. (in 1012 ratings)",
        "2. Benefits and work balance is great (in 945 ratings)",
      ],
      cons: [
        "1. The pay is low and you have to repair your own car after you have driven it into oblivion. (in 1233 ratings)",
        "2. Bad management and stocks (in 340 ratings)",
      ],
    },
    {
      id: 18,
      name: "Twitter",
      logo: "https://img.freepik.com/premium-photo/x-twitter-apps-logo-new-twitter-logo-x-twitter-x-logo-x-letter-logo-icon-vector-illustration_570092-1081.jpg?semt=ais_hybrid",
      description:
        "A social media and technology company known for its microblogging and real-time communication platform.",
      founder: "Jack Dorsey, Noah Glass, Biz Stone, Evan Williams",
      ceo: "Linda Yaccarino",
      startDate: "March 21, 2006",
      website: "https://www.twitter.com/",
      rating: 3.1,
      pros: [
        "1. The people are great and the work you do makes an impact (in 252 ratings)",
        "2. Great culture and business porpuse (in 247 ratings)",
      ],
      cons: [
        "1. Poor management and overworked. (in 87 ratings)",
        "2. Poor leadership and lack of direction. (in 83 ratings)",
      ],
    },
    {
      id: 19,
      name: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/2560px-Spotify_logo_with_text.svg.png",
      description:
        "A global leader in music streaming services, offering personalized playlists and innovative audio experiences.",
      founder: "Daniel Ek, Martin Lorentzon",
      ceo: "Daniel Ek",
      startDate: "April 23, 2006",
      website: "https://www.spotify.com/",
      rating: 4.0,
      pros: [
        "1. Working from anywhere is great for people with family and living far from the office. (in 198 ratings)",
        "2. great culture and company values (in 187 ratings)",
      ],
      cons: [
        "1. Management is poor. (in 48 ratings)",
        "2. Layoffs are common these days (in 47 ratings)",
      ],
    },
    {
      id: 20,
      name: "PayPal",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg",
      description:
        "A global technology platform for digital payments, enabling online money transfers and e-commerce.",
      founder:
        "Max Levchin, Peter Thiel, Luke Nosek, Ken Howery, Yu Pan, Elon Musk",
      ceo: "Alex Chriss",
      startDate: "December 1998",
      website: "https://www.paypal.com/",
      rating: 3.7,
      pros: [
        "1. Good work life balance is good (in 853 ratings)",
        "2. The benefits are good and the work atmosphere was wonderful. (in 821 ratings)",
      ],
      cons: [
        "1.poor management: not trained to manage people. (in 314 ratings)",
        "2.All the good things about the company can go for a toss if you are reporting to a bad manager. (in 215 ratings)",
      ],
    },
  ]);

  const getStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <span className="flex items-center">
        {Array.from({ length: fullStars }, (_, index) => (
          <span key={index} className="text-yellow-500 text-2xl">
            &#9733;
          </span>
        ))}
        {halfStar && <span className="text-yellow-500 text-2xl">&#9734;</span>}
        <span className="ml-2 text-gray-600 text-sm">({rating}/5)</span>
      </span>
    );
  };

  function toggleDetails(id) {
    const details = document.getElementById(`details-${id}`);
    details.classList.toggle("hidden");
  }

  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-50 min-h-screen py-8 px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-center mb-8 text-gray-800">
        Top 15 IT Companies
      </h1>
      <div className="flex flex-wrap gap-[2%] mx-2 sm:mx-8">
        {companies.slice(0, 15).map((company, index) => (
          <div
            key={company.id}
            className={`h-auto mb-4 ${
              index === 0 ||
              index === 4 ||
              index === 6 ||
              index === 10 ||
              index === 12
                ? "w-full sm:w-[40%]"
                : index === 1 || index === 7 || index === 13 || index === 11
                ? "w-full sm:w-[30%] sm:basis-[30%]"
                : index === 2 || index === 5 || index === 8 || index === 14
                ? "w-full sm:grow sm:basis-[100px]"
                : "w-full sm:w-1/4"
            } bg-white shadow-xl rounded-lg overflow-hidden transform transition hover:scale-100 hover:shadow-2xl p-4 text-center flex flex-col`}
          >
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="h-16 mt-2 w-48 mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold">{company.name}</h2>
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline hover:text-blue-800"
            >
              Visit Website
            </a>
            <button
              className="mt-2 text-sm text-purple-600 flex items-center justify-center font-bold gap-1"
              onClick={() => toggleDetails(company.id)}
            >
              ☞ Read More
            </button>
            <div
              id={`details-${company.id}`}
              className="hidden absolute top-0 left-0 w-full h-full bg-white p-6 shadow-2xl z-50 rounded-lg overflow-auto"
            >
              <button
                className="absolute top-2 right-2 text-red-500 text-xl"
                onClick={() => toggleDetails(company.id)}
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-4">{company.name}</h2>
              <p className="text-gray-700">{company.description}</p>
              <p className="text-gray-700 mt-2">
                <strong>Founder:</strong> {company.founder}
              </p>
              <p className="text-gray-700">
                <strong>CEO:</strong> {company.ceo}
              </p>
              <p className="text-gray-700">
                <strong>Founded:</strong> {company.startDate}
              </p>
              <p className="font-bold text-gray-700 flex items-center justify-center">
                Rating:&nbsp;{getStarRating(company.rating)}
              </p>
              <h3 className="mt-4 font-semibold">Pros:</h3>
              <ul className="list-disc list-inside">
                {company.pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
              <h3 className="mt-4 font-semibold">Cons:</h3>
              <ul className="list-disc list-inside">
                {company.cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <p className="text-slate-500 text-center">
        <strong>Disclaimer: </strong>The Ratings and Reviews are extracted from
        the Glassdoor.com.
      </p>
    </div>
  );
};

export default Company;
