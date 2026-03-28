import React from "react";
import Button from "./Button";
import { socialMedia, aboutMe } from "../constants";
import { profilePic } from "../assets";
import { layout } from "../style";
import { callToAction, resumeLink } from "../constants";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => (
  <footer id="contactMe" className="section-divider bg-gray-900 sm:px-16 px-6 pt-6 md:pt-7">
    <div
      className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto items-center gap-y-8 md:gap-x-14`}
    >
      <div className={`${layout.sectionInfo} max-w-[720px]`}>
        <h2 className="text-xl font-bold text-gray-800 font-poppins dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
          {aboutMe.name}
        </h2>
        <p
          className={`mt-4 max-w-[680px] font-poppins text-[16px] font-semibold leading-[29px] text-white`}
        >
          {aboutMe.tagLinePrimary}
        </p>
        <p
          className={`max-w-[680px] font-poppins text-[15px] font-normal leading-[27px] text-dimWhite`}
        >
          {aboutMe.tagLineSecondary}
        </p>
        <div className="flex flex-row mt-5">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={social.id}
              index={index}
              className="text-white mr-5 text-[25px] hover:text-teal-200"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
        </div>

        <div className="mt-6 grid max-w-[360px] grid-cols-2 gap-3">
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            <Button
              styles="inline-flex items-center justify-center"
              text="Resume"
            />
          </a>
          <a href={callToAction} target="_blank" rel="noopener noreferrer">
            <Button
              styles="inline-flex items-center justify-center"
              text="LinkedIn"
              icon={AiFillLinkedin}
            />
          </a>
        </div>
      </div>

      <div className="md:ml-auto mt-2 md:mt-0">
        <div className="footer-portrait-frame relative">
          <div className="footer-portrait-glow" />
          <img
            src={profilePic}
            alt="Venkatraman Sundararajan"
            className="footer-portrait relative z-[2] h-[210px] w-[210px] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
