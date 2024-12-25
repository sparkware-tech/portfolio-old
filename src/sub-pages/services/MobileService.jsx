import React from "react";
import header from "../../constants/images/services/mob.jpg";
import service from "../../constants/images/services/mob2.jpg";
import service1 from "../../constants/images/services/mob3.jpg";
import icon1 from "../../constants/images/services/mimg1.png";
import icon2 from "../../constants/images/services/mimg2.png";
import icon3 from "../../constants/images/services/mimg3.png";
import icon4 from "../../constants/images/services/mimg4.png";
import icon5 from "../../constants/images/services/simg3.png";
import icon6 from "../../constants/images/services/mimg6.png";
import icon7 from "../../constants/images/services/simg6.png";

const Mobile = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img src={header} className="object-cover w-full h-full" alt="Mobile Development" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            Mobile Development
          </h1>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <h1 className="text-2xl lg:text-4xl font-bold text-center">
          Transform Your Business with Innovative Mobile Development
        </h1>
      </div>

      {/* Card with Image and Paragraph */}
      <div className="flex justify-center mt-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xl mb-8">
          <img src={service} alt="Web Development Overview" className="object-cover w-full" />
          <div className="p-6">
            <p className="text-lg text-gray-700">
              At Sparkware, we create exceptional mobile applications that are both visually appealing and
              highly functional. Our team combines cutting-edge technology with innovative design to develop
              apps that stand out, whether it's for business, e-commerce, or custom needs. Let us bring your
              mobile vision to life with precision and creativity.
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
          <h2 className="text-lg font-bold text-center">Custom App Development</h2>
          <p className="text-md text-center">
            We build custom mobile applications tailored to your business requirements, ensuring a seamless
            user experience on both iOS and Android platforms.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon2} alt="Service 2 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Cross-Platform Solution</h2>
          <p className="text-md text-center">
            Maximize your reach with cross-platform app development, allowing your app to run smoothly on
            multiple devices and operating systems.
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
          <img src={icon4} alt="Service 4 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">App Integration</h2>
          <p className="text-md text-center">
            We integrate your mobile app with existing systems, APIs, and third-party services, ensuring
            smooth operation and connectivity across all platforms.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon5} alt="Service 5 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Performance Optimization</h2>
          <p className="text-md text-center">
            We focus on optimizing app performance to ensure fast load times, smooth navigation, and minimal
            resource consumption.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon6} alt="Service 6 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Security and Compliance</h2>
          <p className="text-md text-center">
            Protect your users and data with our robust security measures. We adhere to industry standards and
            best practices to ensure your app is secure and compliant.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon7} alt="Service 7 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center"> Ongoing Maintenance and Support</h2>
          <p className="text-md text-center">
            Our commitment to your app doesn’t end at launch. We provide ongoing maintenance and support to
            keep your app updated, secure, and running smoothly.
          </p>
        </div>
      </div>

      {/* Left Image and Right Content Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-16 px-4 lg:px-20 mb-10">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img src={service1} alt="Why Choose Us" className="object-cover w-full h-auto" />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">Why Choose Us for Mobile App Development?</h1>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg text-gray-700">
              <strong>Expertise in Latest Technologies:</strong> We stay ahead of the curve by leveraging the
              latest mobile technologies and trends to deliver innovative solutions.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Collaborative Approach:</strong> We work closely with you throughout the development
              process, ensuring that your vision is brought to life exactly as you imagined.
            </li>
            <li className="text-lg text-gray-700">
              <strong>User-Centric Design:</strong> Our focus on user experience ensures that your app is not
              only functional but also enjoyable to use, driving higher engagement and satisfaction.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
