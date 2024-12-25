import React, { useState } from "react";
import { LINKS } from "../constants/Links";
import { useLocation, Link } from "react-router-dom";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Logo from "../constants/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
   const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getLinkClass = (path) => {
    return `flex flex-row items-center gap-1 px-3 py-2 rounded ${
      location.pathname === path ? "underline underline-offset-8" : ""
    } hover:underline underline-offset-8`;
  };

  return (
    <nav className="bg-indigo-950 text-white py-4 px-10 fixed left-0 top-0 right-0 z-[1000]">
      <div className="flex justify-between items-center">
        <Link to="/sparkware" onClick={scrollToTop}>
          <div className="flex items-center">
            <img src={Logo} alt="Company Logo" className="h-8 lg:h-10 mr-4" />
            <span className="text-xl lg:text-2xl font-bold tracking-widest font-serif">Sparkware</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden xl:flex space-x-1 ml-auto">
          {LINKS?.map((link, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => toggleDropdown(index)}
              onMouseLeave={() => toggleDropdown(null)}>
              <Link to={link.path} className={getLinkClass(link.path)} onClick={scrollToTop}>
                <span className="tracking-wide font-semibold font-mono uppercase text-md">{link.name}</span>
                {link.subpages && (
                  <div className="flex items-center h-full">
                    <ChevronDownIcon className="w-5 h-5 text-white" />
                  </div>
                )}
              </Link>

              {link.subpages && link.subpages.length < 7 && dropdownOpen === index && (
                <div className="absolute left-0 z-[999] w-48 bg-blue-950 border border-blue-400 rounded shadow-lg group-hover:block">
                  {link.subpages.map((subpage, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subpage.path}
                      className={`block px-4 py-2 ${
                        location.pathname === subpage.path ? "underline underline-offset-8" : ""
                      } hover:underline underline-offset-8`}
                      onClick={() => {
                        scrollToTop();
                        toggleNavbar();
                      }}>
                      <span className="tracking-wide font-semibold hover:underline underline-offset-8 font-mono text-md">
                        {subpage.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}

              {link.subpages && link.subpages.length > 7 && dropdownOpen === index && (
                <div className="flex flex-row absolute left-0 z-[999] w-96 bg-blue-950 border border-blue-400 rounded shadow-lg">
                  <div className="w-48 group-hover:block border-r border-blue-400">
                    {link.subpages.slice(0, 9).map((subpage, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subpage.path}
                        className={`block px-4 py-2 hover:bg-blue-400 ${
                          location.pathname === subpage.path ? "underline underline-offset-8" : ""
                        }`}
                        onClick={() => {
                          scrollToTop();
                          toggleNavbar();
                        }}>
                        <span className="tracking-wide font-semibold hover:underline underline-offset-8 font-mono  text-md">
                          {subpage.name}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="w-48 group-hover:block">
                    {link.subpages.slice(9).map((subpage, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subpage.path}
                        className={`block px-4 py-2 hover:bg-blue-400 ${
                          location.pathname === subpage.path ? "underline underline-offset-8" : ""
                        }`}
                        onClick={() => {
                          scrollToTop();
                          toggleNavbar();
                        }}>
                        <span className="tracking-wide font-semibold hover:underline underline-offset-8 font-mono  text-md">
                          {subpage.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* WhatsApp Button for Large Screens Only */}
        <Link
          to="#"
          onClick={() => window.open("https://wa.me/94786542882", "_blank")}
          className="ml-4 hidden xl:block">
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center">
            <PhoneIcon className="w-5 h-5 text-white mr-2" />
            +9478 654 2882
          </button>
        </Link>

        {/* Hamburger Icon for Mobile Devices */}
        <div className="xl:hidden">
          <button onClick={toggleNavbar}>
            <Bars3Icon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Side Bar for Mobile Devices */}
      <div
        className={`fixed top-0 right-0 h-full overflow-y-auto bg-white text-blue-950  transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden w-60 sm:w-96 p-4 z-[1000]`}>
        <div className="flex justify-between items-center mb-4">
          <button onClick={toggleNavbar}>
            <XMarkIcon className="w-6 h-6 text-blue-950 " />
          </button>
        </div>
        {LINKS.map((link, index) => (
          <div key={index} className="relative mb-2">
            <div className="flex flex-row justify-between items-center cursor-pointer px-4 py-2 ">
              <Link
                to={link.path}
                className={`block px-4 py-2 ${
                  location.pathname === link.path ? "underline underline-offset-8" : ""
                } hover:underline underline-offset-8`}
                onClick={() => {
                  scrollToTop();
                  toggleNavbar();
                }}>
                <span className="tracking-wide font-semibold hover:underline underline-offset-8 font-mono  text-md">
                  {link.name}
                </span>
              </Link>

              {link.subpages && (
                <ChevronDownIcon
                  onClick={() => toggleMobileDropdown(index)}
                  className="w-5 h-5 text-blue-950 "
                />
              )}
            </div>

            {link.subpages && mobileDropdownOpen === index && (
              <div className="pl-10">
                {link.subpages.map((subpage, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subpage.path}
                    className={`block px-4 py-2 ${
                      location.pathname === subpage.path ? "underline underline-offset-8" : ""
                    } hover:underline underline-offset-8`}
                    onClick={() => {
                      scrollToTop();
                      toggleNavbar();
                    }}>
                    <span className="tracking-wide font-semibold hover:underline underline-offset-8 font-mono text-md">
                      {subpage.name}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* WhatsApp Button in Sidebar for Mobile Devices */}
        <Link
          to="#"
          onClick={() => window.open("https://wa.me/94786542882", "_blank")}
          className="block mt-4 ">
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center">
            <PhoneIcon className="w-5 h-5 text-white mr-2" />
            +9478 654 2882
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
