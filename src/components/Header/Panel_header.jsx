import React from "react";
import { BiImageAdd } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { HiDocumentText } from "react-icons/hi";
import { IoOptionsSharp } from "react-icons/io5";
import { BsFillCloudDownloadFill, BsImages } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import lg from "../assets/images/lg2.png";
import "../assets/css/panelHeader.css";
function Panel_header({ children }) {
  return (
    <div>
      <div className="">{/* <New_Nav /> */}</div>
      <div className="relative  min-h-screen md:flex" data-dev-hint="container">
        <input type="checkbox" id="menu-open" className="hidden " />
        <label
          htmlFor="menu-open"
          className="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden"
          data-dev-hint="floating action button"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <header
          className="bg-gray-600 mt-12   text-gray-100 flex justify-between md:hidden"
          data-dev-hint="mobile menu bar"
        >
          <Link
            to="/"
            className="block  p-4 text-white font-bold whitespace-nowrap truncate"
          >
            <img src={lg} alt="" className="w-[50%]" />
          </Link>
          <label
            htmlFor="menu-open"
            id="mobile-menu-button"
            className="m-2 p-2 focus:outline-none hover:text-white hover:bg-[#853ab4] rounded-md"
          >
            <svg
              id="menu-open-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              id="menu-close-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
        </header>
        <aside
          id="sidebar"
          className="bg-gray-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
          data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
        >
          <div
            className="flex flex-col space-y-6"
            data-dev-hint="optional div for having an extra footer navigation"
          >
            <Link
              to="/"
              className="text-white flex items-center space-x-2 px-4 py-12  "
              title="Your App is cool"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span className="text-2xl font-extrabold whitespace-nowrap truncate">
                <img src={lg} alt="" className="w-[70%] " />
              </span>
            </Link>
            <nav data-dev-hint="main navigation">
              <NavLink
                exact
                activeClassName="active"
                to="/dashboard"
                className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-[#853ab4] hover:text-white"
              >
                <BiImageAdd />
                <span>Upload File</span>
              </NavLink>
            </nav>
            <nav data-dev-hint="main navigation">
              <NavLink
                activeClassName="active"
                to="/parameter"
                className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-[#853ab4] hover:text-white"
              >
                <IoOptionsSharp />
                <span>Select Parameter</span>
              </NavLink>
            </nav>
            <nav data-dev-hint="main navigation">
              <NavLink
                activeClassName="active"
                to="/summary"
                className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-[#853ab4]   hover:text-white"
              >
                <HiDocumentText />
                <span>Summary</span>
              </NavLink>
            </nav>
            <nav data-dev-hint="main navigation">
              <NavLink
                activeClassName="active"
                to="/download"
                className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-[#853ab4] hover:text-white"
              >
                <FiDownload />
                <span>Download</span>
              </NavLink>
            </nav>
          </div>
        </aside>
        <>{children}</>
      </div>
    </div>
  );
}

export default Panel_header;
