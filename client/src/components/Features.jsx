import React from "react";
import { LuMonitorCheck } from "react-icons/lu";
import { BsAlarmFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { FaCircleCheck } from "react-icons/fa6";

const features = [
  {
    icon: <LuMonitorCheck />,
    title: "Real-time Queue Monitoring",
    disc: "Enables customers to choose the least crowded branch, saving time and reducing frustration.",
  },
  {
    icon: <BsFillClockFill />,
    title: "Accurate Wait Time Predictions",
    disc: "Customers can plan their visit more effectively, minimizing wait times and improving satisfaction.",
  },
  {
    icon: <FaCircleCheck />,
    title: "System Availability Checker",
    disc: "Ensures customers are informed about service availability before making the trip, reducing unnecessary visits.",
  },
  {
    icon: <BsAlarmFill />,
    title: "Notifications and Alerts",
    disc: "Keeps customers informed, minimizing the need to wait in the immediate vicinity, enhancing convenience.",
  },
];

const Features = () => {
  return (
    <>
      <h1 className="text-start  text-4xl font-semibold text-[#091133] pl-20 pt-24" id="features">
        Fast, Easy & Efficient
      </h1>
      <p className="text-start text-sm pt-10 text-[#6F7CB2] px-7 md:pl-20 xl:pr-[50em] lg:pr-[20em] md:pr-[10em] pr-5 leading-6">
        Reduce wait times, manage your schedule, and enjoy a hassle-free
        experience with our real-time queue monitoring and accurate wait time
        predictions. Access service availability instantly, join queues
        remotely, and receive timely notifications to make your visit as smooth
        as possible. Optimize your day with the convenience and efficiency of
        our advanced queue management system.
      </p>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 px-7 md:px-20 my-12">
        {features.map((data, index) => (
          <div key={index}>
            <div className="text-3xl text-[#091133] py-2">{data.icon}</div>
            <h1 className="text-xl text-[#091133] font-semibold py-2">
              {data.title}
            </h1>
            <p className="text-sm text-[#5D6970] py-21">{data.disc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
