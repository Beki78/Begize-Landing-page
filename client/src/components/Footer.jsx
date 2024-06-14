import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#111B47] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <small className="w-full sm:w-auto text-center mb-2 sm:mb-0">
              &copy; {new Date().getFullYear()} Bereket Getachew. All rights
              reserved.
            </small>
            <div className="w-full sm:w-auto text-center text-sm">
              <nav className="flex flex-wrap justify-center md:justify-end space-x-4 ">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  href="/"
                  className="hover:text-[#6F7CB2]"
                >
                  Home
                </Link>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  href="/about"
                  className="hover:text-[#6F7CB2]"
                >
                  About
                </Link>
                <Link
                  to="features"
                  spy={true}
                  smooth={true}
                  duration={500}
                  href="/features"
                  className="hover:text-[#6F7CB2]"
                >
                  Features
                </Link>
                <Link
                  to="howitworks"
                  spy={true}
                  smooth={true}
                  duration={500}
                  href="/howitworks"
                  className="hover:text-[#6F7CB2]"
                >
                  How it works
                </Link>
                <Link
                  to="pricing"
                  spy={true}
                  smooth={true}
                  duration={500}
                  href="/pricing"
                  className="hover:text-[#6F7CB2]"
                >
                  Pricing
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  href="/contact"
                  className="hover:text-[#6F7CB2]"
                >
                  Contact
                </Link>
                <a href="/privacypolicy" className="hover:text-[#6F7CB2]">
                  Privacy Policy
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
