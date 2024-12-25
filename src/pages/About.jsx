import React from "react";
import CounterExp from "../components/CounterExp";
import heading from "../constants/images/about/slide2.jpg";
import left from "../constants/images/home/left.jpg";
import cardImage from "../constants/images/about/vision-mission.jpg";

const CompanyPage = () => {
  return (
    <div className="min-h-screen relative">
      <header className="relative w-full h-[50vh]">
        <img src={heading} alt="header" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest">About Us</h1>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row md:pb-5 xl:pb-10">
        <div className="w-full lg:w-1/2 flex justify-center items-center p-4 relative">
          <img src={left} alt="Description" className="max-w-full max-h-full h-auto p-4" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4">
          <div className="cursor-default">
            <h1 className="mb-4 lg:mb-10 font-bold">
              <span className="text-blue-400 text-2xl lg:text-4xl xl:text-5xl transform transition-transform duration-300 hover:translate-x-2">
                Innovating Ideas with
                <br />
              </span>
              <span className="text-blue-950 text-3xl lg:text-5xl xl:text-6xl">Cutting-Edge Technology</span>
              <br />
            </h1>
            <p className="text-black text-lg lg:text-xl">
              At Sparkware, a dynamic startup company, we provide smart solutions using cutting-edge
              technologies designed to meet your unique needs with precision and excellence. Our comprehensive
              range of services, including web development, mobile development, graphic design, software
              maintenance, embedded systems, and the Internet of Things, ensures that we offer the most
              effective and innovative solutions available in the industry.
            </p>
          </div>
        </div>
      </div>

      {/* Centered Card with Vision and Mission */}
      <div className="flex justify-center items-center my-16">
        <div className="w-full lg:w-3/4 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex justify-center items-center bg-white">
            <img
              src={cardImage}
              alt="Card"
              className="h-64 object-contain" 
            />
          </div>
          <div className="p-8 lg:flex lg:space-x-8 bg-gray-100">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-xl font-bold mb-4 text-blue-950">Our Vision</h2>
              <p className="text-blue-950 text-base font-bold">
                To be the leading provider of innovative and transformative smart solutions, empowering
                businesses to achieve their fullest potential through technology.
              </p>{" "}
              <br />{" "}
              <p className="text-gray-700 text-base">
                At Sparkware, we envision a future where technology seamlessly integrates with business
                processes to drive growth and success. We aim to set the standard for excellence in smart
                solutions by continuously pushing the boundaries of innovation and delivering exceptional
                value to our clients.
              </p>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-xl font-bold mb-4 text-blue-950">Our Mission</h2>
              <p className=" text-base text-blue-950 font-bold">
                To deliver high-quality, customized smart solutions that address the unique needs of our
                clients, while fostering long-term partnerships through exceptional service and support.
              </p>
              <br />
              <p className="text-gray-700 text-base">
                Our mission is to provide comprehensive web development, mobile development, graphic design,
                software maintenance, embedded system, and internet of things services that are tailored to
                each client's requirements. We are dedicated to understanding our clients' challenges,
                crafting effective solutions, and ensuring their satisfaction through ongoing support and
                collaboration. We strive to be a trusted partner in their journey towards technological
                advancement and business success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 sm:px-4 lg:px-10 pt-4 pb-10">
        <CounterExp />
      </div>

      {/* Blue Section - Who We Are */}
      <div className="bg-cyan-950 text-white py-16 flex flex-col justify-center items-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Who We Are</h2>
        <p className="max-w-3xl text-center text-lg lg:text-xl px-4">
          Sparkware is a dedicated team of professionals passionate about technology and its ability to
          transform businesses. Our expertise spans various domains, allowing us to provide innovative
          solutions that are customized to meet the specific needs of our clients. We are committed to
          excellence, innovation, and the success of those we serve.
        </p>
      </div>

      {/* What We Do Section */}
      <div className="py-16 px-4 bg-gray-100 flex flex-col justify-center items-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
          {/* Box 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-950">Web Development</h3>
            <p className="text-gray-700">
              Crafting custom websites that are not only visually stunning but also highly functional and
              user-friendly.
            </p>
          </div>
          {/* Box 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-950">Mobile Development</h3>
            <p className="text-gray-700">
              Designing and developing mobile applications that offer seamless experiences on both iOS and
              Android platforms.
            </p>
          </div>
          {/* Box 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-950">Graphic Design</h3>
            <p className="text-gray-700">
              Creating compelling visuals and branding materials that capture attention and convey your
              message effectively.
            </p>
          </div>
          {/* Box 4 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-950">Software Maintenance</h3>
            <p className="text-gray-700">
              Providing ongoing support and updates to ensure your software remains reliable and secure.
            </p>
          </div>
          {/* Box 5 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-950">Embedded Systems</h3>
            <p className="text-gray-700">
              Developing innovative embedded solutions tailored to meet your technical requirements.
            </p>
          </div>
          {/* Box 6 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-950">Internet of Things</h3>
            <p className="text-gray-700">
              creating custom IoT solutions that integrate advanced technology for seamless performance across
              various industries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
