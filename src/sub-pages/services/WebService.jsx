import React from "react";
import header from "../../constants/images/services/web1.png";
import service from "../../constants/images/services/web2.jpg";
import service1 from "../../constants/images/services/web3.jpg";
import icon1 from "../../constants/images/services/coding.png";
import icon2 from "../../constants/images/services/api.png";
import icon3 from "../../constants/images/services/cms.png";
import icon4 from "../../constants/images/services/responsive.png";
import icon5 from "../../constants/images/services/simg3.png";
import icon6 from "../../constants/images/services/simg4.png";
import icon7 from "../../constants/images/services/custom.png";

const Web = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img src={header} className="object-cover w-full h-full" alt="Mobile Development" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            Web Development
          </h1>
        </div>
      </div>
      {/* Centered H1 Header */}
      <div className="flex justify-center mt-8">
        <h1 className="text-2xl lg:text-4xl font-bold text-center">
          Building Robust, Scalable, and User-Centric Web Applications
        </h1>
      </div>

      {/* Card with Image and Paragraph */}
      <div className="flex justify-center mt-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xl mb-8">
          <img src={service} alt="Web Development Overview" className="object-cover w-full" />
          <div className="p-6">
            <p className="text-lg text-gray-700">
              At Sparkware, we specialize in developing high-performance web applications that are tailored to
              meet the unique needs of your business. Our web applications are designed to be secure,
              scalable, and user-friendly, providing your users with a seamless and engaging online
              experience.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <h1 className="text-2xl lg:text-4xl font-bold text-center">Explore Our Services</h1>
      </div>

      {/* 3x3 Grid of Boxes with Icons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 px-4 lg:px-20 mb-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon7} alt="Service 1 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Custom Web Development</h2>
          <p className="text-md text-center">
            We create custom website and web applications that align perfectly with your business objectives,
            offering tailored features and functionality to enhance your operations.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon1} alt="Service 2 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Full-Stack Development</h2>
          <p className="text-md text-center">
            Our expertise spans both frontend and backend development, ensuring that your web application is
            not only visually appealing but also highly functional and efficient.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon3} alt="Service 3 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">UI/UX Design</h2>
          <p className="text-md text-center">
            Our team of designers crafts intuitive and visually appealing interfaces that enhance user
            engagement and satisfaction.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon4} alt="Service 3 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Responsive Design</h2>
          <p className="text-md text-center">
            We design web applications that look and perform beautifully on any device, whether it’s a
            desktop, tablet, or smartphone, providing a consistent user experience across all platforms.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon2} alt="Service 4 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">API Integration</h2>
          <p className="text-md text-center">
            We integrate your web application with third-party services and APIs to extend its capabilities
            and ensure seamless communication between different systems.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon5} alt="Service 7 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center"> Performance Optimization</h2>
          <p className="text-md text-center">
            We focus on optimizing the speed and efficiency of your web application, ensuring fast load times,
            smooth navigation, and a superior user experience.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon6} alt="Service 7 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center"> Security and Compliance</h2>
          <p className="text-md text-center">
            We implement robust security measures to protect your web application from threats, ensuring that
            your data and user information are safe and compliant with industry standards.
          </p>
        </div>
      </div>

      {/* Left Image and Right Content Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-16 px-4 lg:px-20 mb-10">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img src={service1} alt="Why Choose Us" className="object-cover w-full h-auto" />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">
            Why Choose Us for Web Application Development?
          </h1>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg text-gray-700">
              <strong>Experienced Team:</strong> Our team of skilled developers has extensive experience in
              building web applications across various industries, ensuring that your project is in expert
              hands.
            </li>
            <li className="text-lg text-gray-700">
              <strong>User-Centric Approach:</strong> We prioritize the end-user experience, designing
              intuitive interfaces and smooth interactions that keep users engaged and satisfied.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Agile Development Process: </strong>
              We use agile methodologies to deliver your web application on time and within budget, allowing
              for flexibility and collaboration throughout the project.
            </li>
            <li className="text-lg text-gray-700">
              <strong> Continuous Support: </strong>
              Our relationship doesn’t end at launch. We provide ongoing support and maintenance to keep your
              web application running smoothly and up-to-date with the latest technologies.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Scalable Solutions: </strong>
              As your business grows, your web application needs to scale with it. We build scalable solutions
              that can evolve and expand alongside your business.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Web;
