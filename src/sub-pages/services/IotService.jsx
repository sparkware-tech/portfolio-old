import React from "react";
import heading from "../../constants/images/services/emb1.jpg";
import service from "../../constants/images/services/iot.png";
import service1 from "../../constants/images/services/iot.jpg";
import icon1 from "../../constants/images/services/eimg1.png";
import icon2 from "../../constants/images/services/eimg2.png";
import icon3 from "../../constants/images/services/eimg3.png";
import icon4 from "../../constants/images/services/eimg4.png";
import icon5 from "../../constants/images/services/eimg5.png";
import icon6 from "../../constants/images/services/eimg6.png";
import icon7 from "../../constants/images/services/eimg7.png";

const IotService = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img src={heading} className="object-cover w-full h-full" alt="Graphic Design" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            Internet of Things
          </h1>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <h1 className="text-2xl lg:text-4xl font-bold text-center">Smart Connectivity for a Smarter World</h1>
      </div>

      {/* Card with Image and Paragraph */}
      <div className="flex justify-center mt-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xl mb-8">
          <img src={service} alt="Web Development Overview" className="object-cover w-full" />
          <div className="p-6">
            <p className="text-lg text-gray-700">
              At Sparkware, we specialize in developing cutting-edge IoT solutions that seamlessly connect
              devices and systems to deliver reliable, high-performance results. Our expertise in IoT
              technology allows us to design and implement custom solutions tailored to the specific needs of
              your business and industry.
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
          <h2 className="text-lg font-bold text-center">Custom IoT Solutions</h2>
          <p className="text-md text-center">
            We design and develop IoT solutions tailored to your specific needs, from simple sensor networks
            to complex multi-device systems, ensuring seamless connectivity and functionality.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon2} alt="Service 2 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">IoT Firmware Development</h2>
          <p className="text-md text-center">
            Our team crafts efficient and optimized firmware for IoT devices, ensuring smooth operation and
            reliable performance in diverse environments.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon3} alt="Service 3 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Device Integration</h2>
          <p className="text-md text-center">
            We ensure seamless integration of IoT devices with existing systems, optimizing data flow and
            enhancing interoperability across various platforms.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon4} alt="Service 4 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">IoT Connectivity Solutions</h2>
          <p className="text-md text-center">
            Enhance your IoT infrastructure with our connectivity solutions, designed to improve communication
            and data exchange between devices and systems.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon5} alt="Service 5 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Prototyping and Testing</h2>
          <p className="text-md text-center">
            We offer rapid prototyping and rigorous testing of IoT solutions to ensure functionality and
            reliability before full-scale deployment.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon6} alt="Service 6 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Performance Optimization</h2>
          <p className="text-md text-center">
            We focus on optimizing the performance of your IoT systems, ensuring efficient operation and
            minimal resource consumption.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon7} alt="Service 7 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Maintenance and Support</h2>
          <p className="text-md text-center">
            Our services include ongoing maintenance and support to ensure your IoT solutions remain effective
            and reliable over time.
          </p>
        </div>
      </div>

      {/* Left Image and Right Content Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-16 px-4 lg:px-20 mb-10">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img src={service1} alt="Why Choose Us" className="object-cover w-2/3 h-auto mx-auto" />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">Why Choose Us for IoT Development?</h1>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg text-gray-700">
              <strong>Expertise in Diverse Industries:</strong> We have experience developing embedded systems
              for various industries, including automotive, healthcare, consumer electronics, and industrial
              automation.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Cutting-Edge Technology: </strong>
              We utilize the latest tools and technologies to create innovative embedded solutions that keep
              you ahead of the competition.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Customized Solutions:</strong> We understand that every project is unique. Our solutions
              are fully customized to meet your specific needs, ensuring optimal performance and
              functionality.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Reliable and Scalable:</strong> Our embedded systems are designed to be both reliable
              and scalable, allowing your business to grow and adapt to changing market demands.
            </li>
            <li className="text-lg text-gray-700">
              <strong>End-to-End Service:</strong> From initial concept to final deployment and beyond, we
              offer a complete end-to-end service to ensure your embedded systems are delivered on time and
              within budget.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IotService;
