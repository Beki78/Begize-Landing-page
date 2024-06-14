import React from "react";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link as ScrollLink } from "react-scroll";
import heroIMG from "../assets/Screenshot 2024-06-14 182919.png"
import { Link } from "react-scroll";


const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "How it woks", href: "#howitworks" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex  fixed w-full z-50 bg-[#fafafa] items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <h1 className="text-2xl font-semibold text-[#505F98] pl-20">
                  BEGIZE
                </h1>
                {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                /> */}
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#505F98]"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.href.slice(1)} // Remove "#" from href
                  activeClass="active" // Optional class for active link
                  spy={true} // Enables smooth scrolling
                  smooth={true} // Smooth scrolling behavior
                  className="text-sm font-semibold leading-6 text-[#505F98] cursor-pointer  "
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe0vgkEuzGSLkvl2Q7tl_ffKs0cdnPEQvJIc5zFkas0G00DfA/viewform?usp=sf_link"
                className="text-sm font-semibold leading-6  duration-150 ease-in-out px-2 rounded-sm py-1 bg-[#111B47] text-white hover:bg-[#324186]"
              >
                Sign Up for Beta
              </a>
            </div>
          </nav>
          <Dialog
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel
              open={mobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <h1 className="text-2xl font-semibold flex sm:hidden text-[#505F98] ">
                    BEGIZE
                  </h1>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#505F98] hover:bg-gray-50"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSe0vgkEuzGSLkvl2Q7tl_ffKs0cdnPEQvJIc5zFkas0G00DfA/viewform?usp=sf_link"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#505F98] bg-gray-100 hover:bg-gray-200"
                      onClick={closeMobileMenu}
                    >
                      Sign Up for Beta
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
        <div className="bg-white z-40" id="home">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                aria-hidden="true"
              >
                <circle
                  cx={512}
                  cy={512}
                  r={512}
                  fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Boost your productivity.
                  <br />
                  Streamline Your Experience with Begize
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Empowering Ethiopian Electric Utility Customers to Monitor
                  Queues, Predict Wait Times, and Access Services Effortlessly.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe0vgkEuzGSLkvl2Q7tl_ffKs0cdnPEQvJIc5zFkas0G00DfA/viewform?usp=sf_link"
                    className="rounded-sm bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Get started
                  </a>
                  <Link
                    to="howitworks"
                    spy={true}
                    smooth={true}
                    duration={500}
                    href="/howitworks"
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    How it works <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <img
                  className="absolute  left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                  src={heroIMG}
                  alt="App screenshot"
                  width={1824}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
