import React from "react";
import heading from "../constants/images/projects/slide4.jpg";
import web1 from "../constants/images/projects/portfolio1.png";
import web2 from "../constants/images/projects/travel1.png";
import snow_web from "../constants/images/projects/snow-agency.png";
import embedded1 from "../constants/images/projects/embedded1.png";

const ProjectPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Header Section */}
      <header className="relative w-full h-[50vh]">
        <img src={heading} alt="header" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest">PROJECTS</h1>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-12 px-6 text-center">
        {/* Centered Title and Paragraph */}
        <h2 className="text-xl lg:text-3xl font-bold mb-4">Our Projects</h2>
        <p className="text-md lg:text-lg text-gray-600 max-w-3xl mx-auto">
          At Sparkware, as a dynamic startup, we take pride in the diverse range of projects we've
          successfully delivered. Each project showcases our dedication to innovation, quality, and client
          satisfaction. Explore some of our recent work to see how we’ve helped businesses like yours achieve
          their goals with tailored IT solutions and exceptional service.
        </p>
      </section>

      {/* New Section with Background Color, Title, and Paragraph */}
      <section className="bg-[#f8f9fa] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl lg:text-3xl font-bold mb-4">Web Development Projects</h2>
          <p className="text-md lg:text-lg text-gray-700 text-justify">
            We’ve crafted dynamic, responsive websites that not only look stunning but also perform
            flawlessly. Our web development projects range from portfolio websites to e-commerce platforms,
            all designed to enhance user experience and drive engagement.
          </p>
        </div>
      </section>

      {/* Boxes Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src={web1} alt="Project 1" className="w-full h-auto object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-600 mb-4">
              Explore a comprehensive showcase of an IT journey, highlighting a blend of formal education,
              technical skills, and hands-on projects.
            </p>
            <a href="https://shammisk.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Read More</button>
            </a>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src={snow_web} alt="Project 1" className="w-full h-auto object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold mb-2">Snow Agency Website</h3>
            <p className="text-gray-600 mb-4">
              Explore portfolio showcasing a range of expertly designed projects, learn more about agency, and
              connect through the contact form. Explore customer reviews to see how they are made an impact.
            </p>
            <a
              href="https://sparkware24.github.io/snow-agency-website/"
              target="_blank"
              rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Read More</button>
            </a>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src={web2} alt="Project 2" className="w-full h-auto object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold mb-2">Travel</h3>
            <p className="text-gray-600 mb-4">
              A responsive travel website offering holiday packages and tours, where customers can explore
              options and make online reservations seamlessly.
            </p>
            <a href="https://shammisk.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Read More</button>
            </a>
          </div>
        </div>
      </section>

      {/* New Section with Background Color, Title, and Paragraph */}
      <section className="bg-[#f8f9fa] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl lg:text-3xl font-bold mb-4"> Embedded System Development Projects</h2>
          <p className="text-md lg:text-lg text-gray-700 text-justify">
            Our expertise in embedded systems is showcased through innovative projects that integrate custom
            hardware and software solutions. Our projects highlight our ability to meet complex technical
            requirements and deliver reliable performance.
          </p>
        </div>
      </section>

      {/* Boxes Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Box 1 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src={embedded1} alt="Project 1" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold mb-2">Temperature & Humidity Controller Unit</h3>
            <p className="text-gray-600 mb-4">
              This unit is designed to maintain temperature and humidity at the desired level by automatically
              turning on and off the water motor. It is specifically designed for mushroom huts.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Read More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
