import React from "react";
import { Link } from "react-router-dom";

import mainLogo from "../../assets/main_logo.webp";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";
import Newsletter from "./Newsletter";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4 ">
              <img
                src={mainLogo}
                alt="logo"
                className="w-50 h-20 object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Empowering communities through education, social development, and sustainable initiatives. <br /><br />
              License No. – 120163<br />CIN – U85300DL2020NPL368668<br />12A,80G, NITI Aayog & CSR-1 certificates are available.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/noblecitizenfoundation/"
                target="_blank"
                className="text-blue-600 hover:text-primary-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/Noblecitizenf?s=09"
                target="_blank"
                className="text-blue-400 hover:text-primary-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/noblecitizenfoundation/"
                target="_blank"
                className="text-pink-400 hover:text-primary-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/noble-citizen-foundation/"
                className="text-blue-300 hover:text-primary-500 transition-colors"
                target="_blank"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.youtube.com/@noblecitizenfoundation"
                className="text-red-400 hover:text-primary-500 transition-colors"
                target="_blank"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/get-involved"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="text-primary-500 mr-2 mt-1 flex-shrink-0"
                />
                <span className="text-gray-400">
                  364, Prakash Mohalla, East of Kailash,
                  <br /> New Delhi, India - 110065
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={20}
                  className="text-primary-500 mr-2 flex-shrink-0"
                />
                <span className="text-gray-400">+91 9990821680</span>
              </li>
              <li className="flex items-center">
                <Mail
                  size={20}
                  className="text-primary-500 mr-2 flex-shrink-0"
                />
                <span className="text-gray-400">
                  admin@noblecitizenfoundation.org
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium text-lg mb-4">
              Stay Updated
            </h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest news and updates.
            </p>
            <Newsletter />
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              Noble Citizen Foundation is a Non profit organization registered Section 8 company under the Companies Act, 2013. <br /> &copy;{new Date().getFullYear()} Noble Citizen Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy-policy"
                className="text-gray-500 hover:text-primary-500 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/refund-policy"
                className="text-gray-500 hover:text-primary-500 text-sm transition-colors"
              >
                Refund Policy
              </Link>
              <Link
                to="/terms-of-use"
                className="text-gray-500 hover:text-primary-500 text-sm transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
