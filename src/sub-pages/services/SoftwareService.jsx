import React from "react";
import heading from "../../constants/images/services/main1.jpg";
import service from "../../constants/images/services/main2.jpg";
import service1 from "../../constants/images/services/main3.jpg";
import icon1 from "../../constants/images/services/simg1.png";
import icon2 from "../../constants/images/services/simg2.png";
import icon3 from "../../constants/images/services/simg3.png";
import icon4 from "../../constants/images/services/simg4.png";
import icon5 from "../../constants/images/services/simg5.png";
import icon6 from "../../constants/images/services/simg6.png";
import icon7 from "../../constants/images/services/simg7.png";

const Software = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img src={heading} className="object-cover w-full h-full" alt="Embedded System" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            Software
          </h1>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <h1 className="text-2xl lg:text-4xl font-bold text-center">
          Ensuring Your Software Runs Smoothly and Efficiently
        </h1>
      </div>

      {/* Card with Image and Paragraph */}
      <div className="flex justify-center mt-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xl mb-8">
          <img src={service} alt="Web Development Overview" className="object-cover w-full" />
          <div className="p-6">
            <p className="text-lg text-gray-700">
              At Sparkware, we understand that maintaining and supporting your software is just as crucial as
              its development. Our comprehensive software maintenance and support services are designed to
              keep your systems running at peak performance, ensuring long-term reliability, security, and
              efficiency.
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
          <img src={icon1} alt="Service 1 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Regular Updates and Upgrades</h2>
          <p className="text-md text-center">
            We keep your software up-to-date with the latest features, enhancements, and security patches,
            ensuring it remains compatible with new technologies and industry standards.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon2} alt="Service 2 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Bug Fixing and Troubleshooting</h2>
          <p className="text-md text-center">
            Our team promptly addresses any issues or bugs that arise, minimizing downtime and ensuring your
            software continues to function smoothly.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon3} alt="Service 3 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Performance Optimization</h2>
          <p className="text-md text-center">
            We analyze and optimize your software’s performance to improve speed, efficiency, and resource
            utilization, helping you get the most out of your system.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon4} alt="Service 4 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Security Management</h2>
          <p className="text-md text-center">
            Protect your software from potential threats with our robust security management services. We
            implement and monitor security measures to safeguard your data and ensure compliance with industry
            regulations.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon5} alt="Service 5 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Compatibility Testing</h2>
          <p className="text-md text-center">
            As technology evolves, we ensure that your software remains compatible with new hardware,
            operating systems, and other applications, preventing any disruption to your business operations.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon6} alt="Service 6 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Technical Support</h2>
          <p className="text-md text-center">
            Our dedicated support team is available to assist you with any technical issues, providing prompt
            and effective solutions to keep your software running smoothly.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon7} alt="Service 7 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Legacy System Support</h2>
          <p className="text-md text-center">
            If you’re working with older software, we offer legacy system support to help you maintain and
            extend the life of your existing systems, avoiding costly overhauls.
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
            Why Choose Us for Software Maintenance and Support?
          </h1>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg text-gray-700">
              <strong>Proactive Approach:</strong> We don’t just react to issues; we proactively monitor and
              maintain your software to prevent problems before they occur, ensuring continuous and reliable
              operation.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Tailored Service Plans: </strong>
              Our maintenance and support plans are customized to meet the specific needs of your software and
              business, providing the right level of service at a competitive price.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Expert Team:</strong> Our team of experienced professionals has the expertise to handle
              a wide range of software systems, from complex enterprise applications to custom-built
              solutions.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Long-Term Partnership: </strong>
              We’re committed to building long-term partnerships with our clients. Our focus is on delivering
              consistent, high-quality support that evolves with your business needs.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Fast Response Times:</strong> We understand the importance of timely support. Our team
              is dedicated to resolving issues quickly and efficiently, minimizing any disruption to your
              business.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Software;
