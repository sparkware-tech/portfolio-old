import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SlideShow from "../components/SlideShow";
import ImageCarousel from "../components/ImageCarousel";
import CounterExp from "../components/CounterExp";
import left from "../constants/images/home/left.jpg";
import right from "../constants/images/home/right.jpg";
import icon1 from "../constants/images/home/web.png";
import icon2 from "../constants/images/home/mobile.png";
import icon3 from "../constants/images/home/graphic.png";
import icon4 from "../constants/images/home/maintain.png";
import icon5 from "../constants/images/home/embeded.png";
import icon6 from "../constants/images/home/iot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import LeatestProjects from "../components/LeatestProjects";
import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <div>
      <div className="h-[60vh] sm:h-[90vh]">
        <SlideShow />
      </div>

      <div className="flex flex-col lg:flex-row md:pb-5 xl:pb-20">
        <div className="w-full lg:w-1/2  flex justify-center items-center p-4 relative">
          <img
            src={left}
            alt="Description"
            className="max-w-full max-h-full h-auto p-4"
          />
        </div>
        <div className="w-full lg:w-1/2  flex flex-col justify-center items-center p-4">
          <div className="cursor-defalt">
            <h1 className="mb-4 lg:mb-10 font-bold">
              <span className="text-blue-400 text-2xl lg:text-4xl xl:text-5xl transform transition-transform duration-300 hover:translate-x-2">
                Innovating Ideas with<br></br>
              </span>
              <span className="text-blue-950 text-3xl lg:text-5xl xl:text-6xl">
                Cutting-Edge Technology
              </span>
              <br />
            </h1>
            <p className="text-black text-lg lg:text-xl">
              At Sparkware, a dynamic startup company, we provide smart
              solutions using cutting-edge technologies designed to meet your
              unique needs with precision and excellence. Our comprehensive
              range of services, including web development, mobile development,
              graphic design, software maintenance, embedded systems, and the
              Internet of Things, ensures that we offer the most effective and
              innovative solutions available in the industry.
            </p>
            <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row md:gap-x-10 lg:gap-x-0 xl:gap-x-4 mt-5">
              <div className=""></div>
              <div className=""></div>
            </div>
            <div className="flex justify-center sm:justify-start mt-8">
              <a
                href="/about"
                className="border-2 border-blue-950 bg-blue-950 text-white py-2 px-6 text-base rounded hover:bg-white hover:text-blue-700 transition duration-500 flex items-center"
              >
                <span className="mr-2">Read Our Story</span>
                <i className="fa fa-angle-double-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="text-center py-4">
          <h1 className="font-bold text-2xl lg:text-3xl pb-1 sm:pb-2 lg:pb-3 font-serif text-blue-950 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-500 after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2">
            OUR SERVICES
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto px-2 cursor-default">
          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] transform transition-colors duration-300 hover:bg-blue-200 hover:border-blue-700 border border-transparent text-center">
            <img
              src={icon1}
              alt="Web Application Development"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">Web Application Development</h2>
            <p className="text-lg">
              Sparkware craft high-performance, secure, and scalable web
              applications tailored to your business, ensuring a seamless and
              engaging online experience for your users.
            </p>
            <a
              href="/service/web" // Replace with the actual URL
              className="inline-block mt-4 px-6 py-3 text-white bg-blue-950 rounded hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-opacity-50"
            >
              Explore in Detail
            </a>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] transform transition-colors duration-300 hover:bg-blue-200 hover:border-blue-700 border border-transparent text-center">
            <img
              src={icon2}
              alt="Mobile App Development"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">Mobile App Development</h2>
            <p className="text-lg">
              Sparkware excels in mobile app development, delivering
              high-performance, robust solutions that enhance user engagement
              and leverage the latest technology for a seamless experience.
            </p>
            <a
              href="/service/mobile" // Replace with the actual URL
              className="inline-block mt-4 px-6 py-3 text-white bg-blue-950 rounded hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-opacity-50"
            >
              Explore in Detail
            </a>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] transform transition-colors duration-300 hover:bg-blue-200 hover:border-blue-700 border border-transparent text-center">
            <img
              src={icon3}
              alt="Graphic Design"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">Graphic Design</h2>
            <p className="text-lg">
              Sparkware creates impactful graphic designs that elevate your
              brand's visual identity. Our designs captivate your audience and
              convey your message effectively, using the latest trends and
              techniques.
            </p>
            <a
              href="/service/graphic" // Replace with the actual URL
              className="inline-block mt-4 px-6 py-3 text-white bg-blue-950 rounded hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-opacity-50"
            >
              Explore in Detail
            </a>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] transform transition-colors duration-300 hover:bg-blue-200 hover:border-blue-700 border border-transparent text-center">
            <img
              src={icon4}
              alt="Software Maintenance and Support"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">Software Maintenance and Support</h2>
            <p className="text-lg">
              Sparkware provides comprehensive software maintenance and support,
              including proactive monitoring, timely updates, and rapid issue
              resolution. We keep your systems efficient, secure, and up-to-date
              to ensure ongoing reliability and performance.
            </p>
            <a
              href="/service/software" // Replace with the actual URL
              className="inline-block mt-4 px-6 py-3 text-white bg-blue-950 rounded hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-opacity-50"
            >
              Explore in Detail
            </a>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] transform transition-colors duration-300 hover:bg-blue-200 hover:border-blue-700 border border-transparent text-center">
            <img
              src={icon5}
              alt="Embedded System Development"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">Embedded System Development</h2>
            <p className="text-lg">
              Sparkware specializes in embedded system development, crafting
              custom solutions that enhance your products with cutting-edge
              technology. Our tailored systems ensure seamless integration and
              optimal performance across various industries.<br></br>
              <br></br>
            </p>
            <a
              href="/service/embedded" // Replace with the actual URL
              className="inline-block mt-4 px-6 py-3 text-white bg-blue-950 rounded hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-opacity-50"
            >
              Explore in Detail
            </a>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] transform transition-colors duration-300 hover:bg-blue-200 hover:border-blue-700 border border-transparent text-center">
            <img
              src={icon6}
              alt="Embedded System Development"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">Internet of Things</h2>
            <p className="text-lg">
              Sparkware specializes in IoT development, designing custom
              solutions that embed advanced technology into your products. Our
              innovative systems ensure seamless integration and optimal
              performance across a wide range of industries.<br></br>
              <br></br>
            </p>
            <a
              href="/service/iot" // Replace with the actual URL
              className="inline-block mt-4 px-6 py-3 text-white bg-blue-950 rounded hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-opacity-50"
            >
              Explore in Detail
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col py-5">
        <div className="text-center py-4">
          <h1 className="font-bold text-2xl lg:text-3xl pb-1 sm:pb-2 lg:pb-3 font-serif text-blue-950 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-500 after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2">
            OUR PROJECTS
          </h1>
          <p className="text-lg pt-4 px-4 sm:px-20 lg:px-40 xl:px-60">
            We deliver bespoke solutions tailored to your business needs. Our
            expertise includes web development, mobile app development, graphic
            design, embedded systems, and IoT ensuring innovative and effective
            results.
          </p>
        </div>

        <div className="p-4 sm:px-10 lg:px-20 xl:Px-32">
          <LeatestProjects />
        </div>
        <div className="flex justify-center">
          <Link
            to="/project"
            className="border-2 border-blue-950 bg-blue-950 text-white py-4 px-8 text-base rounded hover:bg-white hover:text-blue-700 transition duration-500 mb-16"
          >
            Explore more projects
          </Link>
        </div>
      </div>
      <div className="py-4 px-2 sm:px-4">
        <ImageCarousel />
      </div>

      <section className="flex flex-col lg:flex-row items-start mt-16 mb-16">
        {/* Left Column with Title, Text, and Bullet Points */}
        <div className="w-full lg:w-1/2 p-4 lg:pl-10">
          <h2 className="text-3xl font-bold mb-4 text-blue-950">
            Why Choose Sparkware?
          </h2>
          <h3 className="text-xl font-bold mb-2 text-blue-400">
            Your Trusted Smart Solution Partner
          </h3>
          <p className="text-md mb-8">
            We offer unparalleled smart technology solutions tailored to your
            needs. Our expert team delivers innovative and high-quality services
            across web development, mobile apps, graphic design, and more. With
            a commitment to excellence, customer satisfaction, and ongoing
            support, we ensure that your technology investments drive real
            results and support your business growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    className="text-blue-500 mr-2 mt-1"
                  />
                  Exceptional IT Solutions
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    className="text-blue-500 mr-2 mt-1"
                  />
                  We Understand Your Challenges
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    className="text-blue-500 mr-2 mt-1"
                  />
                  We Deliver Top-Quality Services
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    className="text-blue-500 mr-2 mt-1"
                  />
                  We Provide Ongoing Support
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    className="text-blue-500 mr-2 mt-1"
                  />
                  Collaborative Partnership
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    className="text-blue-500 mr-2 mt-1"
                  />
                  We Gather Your Requirements
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    className="text-blue-500 mr-2 mt-1"
                  />
                  We Create Tailored Solutions
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    className="text-blue-500 mr-2 mt-1"
                  />
                  We Ensure Your Satisfaction
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    className="text-blue-500 mr-2 mt-1"
                  />
                  Timely Delivery
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    className="text-blue-500 mr-2 mt-1"
                  />
                  Commitment to Success
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column with Image */}
        <div className="w-full lg:w-1/2 p-4">
          <img
            src={right} // Update with the path to your image
            alt="Descriptive Alt Text"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>

      <div className="px-2 sm:px-4 lg:px-10 py-4 ">
        <CounterExp />
      </div>

      <ContactForm />
    </div>
  );
}

export default Home;
