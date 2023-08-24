import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaBehance,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";

const FooterSocial = () => {
  return (
    <ul className="footer-social-container flex mt-5 space-x-2 ">
        <li className="bg-green-200 rounded-md p-2"><FaFacebook className="text-2xl text-green-700" /></li>
        <li className="bg-green-200 rounded-md p-2"><FaLinkedin className="text-2xl  text-green-700" /></li>
        <li className="bg-green-200 rounded-md p-2"><FaBehance className="text-2xl  text-green-700" /></li>
        <li className="bg-green-200 rounded-md p-2"><FaInstagram className="text-2xl  text-green-700" /></li>
        <li className="bg-green-200 rounded-md p-2"><FaDribbble className="text-2xl  text-green-700" /></li>
    </ul>
  );
};

export default FooterSocial;
