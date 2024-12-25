import React from "react";
import heading from "../../constants/images/services/gra1.jpg";
import service from "../../constants/images/services/gra2.jpg";
import service1 from "../../constants/images/services/graa3.jpg";
import icon1 from "../../constants/images/services/gimg1.png";
import icon2 from "../../constants/images/services/gimg2.png";
import icon3 from "../../constants/images/services/gimg3.png";
import icon4 from "../../constants/images/services/gimg4.png";
import icon5 from "../../constants/images/services/gimg5.png";
import icon6 from "../../constants/images/services/gimg6.png";

const Graphic = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img src={heading} className="object-cover w-full h-full" alt="Graphic Design" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            Graphic Design
          </h1>
        </div>
      </div>

      {/* Centered H1 Header */}
      <div className="flex justify-center mt-8">
        <h1 className="text-2xl lg:text-4xl font-bold text-center">Creating Visuals That Speak Volumes</h1>
      </div>

      {/* Card with Image and Paragraph */}
      <div className="flex justify-center mt-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xl mb-8">
          <img src={service} alt="Web Development Overview" className="object-cover w-full" />
          <div className="p-6">
            <p className="text-lg text-gray-700">
              At Sparkware, we understand the power of compelling visuals in communicating your brand’s
              message. Our graphic design services are tailored to help your business stand out with
              eye-catching designs that capture attention and leave a lasting impression.
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
          <h2 className="text-lg font-bold text-center">Brand Identity Design</h2>
          <p className="text-md text-center">
            We create complete brand identities, including logos, color schemes, typography, and branding
            guidelines that reflect your business’s values and vision.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon2} alt="Service 2 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Marketing Materials</h2>
          <p className="text-md text-center">
            From brochures and flyers to banners and posters, we design marketing materials that effectively
            communicate your message and resonate with your target audience.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon3} alt="Service 3 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Digital Graphics</h2>
          <p className="text-md text-center">
            Enhance your online presence with custom-designed graphics for websites, social media, and digital
            ads that engage users and drive interaction.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon4} alt="Service 4 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Packaging Design</h2>
          <p className="text-md text-center">
            We design product packaging that not only looks great on the shelf but also reinforces your
            brand’s identity and appeals to consumers.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon5} alt="Service 5 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Infographics</h2>
          <p className="text-md text-center">
            Simplify complex information with visually appealing infographics that make data and concepts
            easier to understand and more engaging.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon6} alt="Service 6 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Illustrations</h2>
          <p className="text-md text-center">
            Our custom illustrations add a unique and creative touch to your projects, making your content
            more memorable and impactful.
          </p>
        </div>
      </div>

      {/* Left Image and Right Content Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-16 px-4 lg:px-20 mb-10">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img src={service1} alt="Why Choose Us" className="object-cover w-full h-auto" />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">Why Choose Us for Graphic Design?</h1>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg text-gray-700">
              <strong>Creative Excellence: </strong> Our team of talented designers brings creativity and
              innovation to every project, ensuring your designs are fresh, unique, and aligned with your
              brand.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Tailored Solutions:</strong> We take a personalized approach to design, working closely
              with you to understand your vision and deliver designs that meet your specific needs.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Attention to Detail:</strong> We pride ourselves on our meticulous attention to detail,
              ensuring that every element of your design is perfectly executed.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Consistency Across Platforms:</strong> We ensure that your brand’s visual identity is
              consistent across all platforms, from print to digital, helping you maintain a cohesive and
              professional image.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Timely Delivery:</strong> We understand the importance of meeting deadlines. Our
              efficient design process ensures that your projects are completed on time, without compromising
              on quality.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Graphic;
