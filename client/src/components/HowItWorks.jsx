import React from 'react'
import video from "../assets/Character Adventures Toolkit_free.mp4"

const HowItWorks = () => {
  return (
    <div>
      <h1
        className="text-center text-4xl font-semibold text-[#091133]  pt-24"
        id="howitworks"
      >
        How it works
      </h1>
      <video
        src={video}
        controls
        autoPlay
        muted
        loop
        className="w-full max-w-2xl mx-auto mt-8 px-2 shadow-2xl shadow-[#6F7CB2]"
      ></video>
    </div>
  );
}

export default HowItWorks
