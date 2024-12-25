import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./Styles.css";
import projectw1 from "../constants/images/projects/portfolio1.png";
import projecte1 from "../constants/images/projects/embedded1.png";
import projectw2 from "../constants/images/projects/travel1.png";
import snow_web from "../constants/images/projects/snow-agency.png";

const projects = [
  {
    imageUrl: projectw1,
    name: "Portfolio Website",
    description:
      "Explore a comprehensive showcase of an IT journey, highlighting a blend of formal education, technical skills, and hands-on projects.",
  },
  {
    imageUrl: projecte1,
    name: "Temperature & Humidity Controller Unit",
    description:
      "This unit is designed to maintain temperature and humidity at the desired level by automatically turning on and off the water motor. It is specifically designed for mushroom huts.",
  },
  {
    imageUrl: snow_web,
    name: "Agency Website",
    description:
      "Explore portfolio showcasing a range of expertly designed projects, learn more about agency, and connect through the contact form. Explore customer reviews to see how they are made an impact.",
  },
  {
    imageUrl: projectw2,
    name: "Travel Website",
    description:
      "A responsive travel website offering holiday packages and tours, where customers can explore options and make online reservations seamlessly.",
  },
];

function LeatestProject() {
  return (
    <div className="w-full px-4 py-8">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper">
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "auto",
              maxWidth: "600px",
              height: "100%",
              margin: "20px",
            }}>
            <div className="flex justify-center items-center w-full h-full mb-10">
              <div className="bg-white rounded-lg shadow-lg w-full h-full border border-gray-200 flex flex-col items-center">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-[300px] object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                <p className="text-base text-gray-700 text-center px-2 lg:px-10 mb-5">
                  {project.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LeatestProject;
