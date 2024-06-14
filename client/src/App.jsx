import React from 'react'
import NavBar from './components/NavBar'
import Hero from "./components/Hero"
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Features from "./components/Features"
import Footer from './components/Footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="font-[Roboto] ">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <HowItWorks />

      <Pricing />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App
