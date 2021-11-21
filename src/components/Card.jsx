import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaSkype,
  FaWordpress,
} from "react-icons/fa";
import profile from "../img/supermanshuvo.png";
export default function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-sm mx-auto bg-white shadow-xl rounded-xl p-5">
        <div>
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={profile}
            alt="Profile face"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-gray-900">Superman Shuvo</p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            Programming Lover & Motivator
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/supermanshuvo"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          >
            <FaGithub />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/supermanshuvo/"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          >
            <FaFacebook />
            <span className="sr-only">FaceBook</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/supermanshuvo/"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          >
            <FaInstagram />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/supermanshuvo/"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          >
            <FaLinkedinIn />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/supermanshuvo/"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          >
            <FaTwitter />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://join.skype.com/invite/XLR1m9jsmFYB"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          >
            <FaSkype />
            <span className="sr-only">Skype</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://supermanshuvo.wordpress.com/"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          >
            <FaWordpress />
            <span className="sr-only">Wordpress</span>
          </a>
        </div>
      </div>
    </div>
  );
}
