import React from 'react'

const About = () => {
  return (
    <>
      <div className="relative -z-10 isolate px-6 pt-24 lg:px-8 " id="about">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffc4dd] to-[#bab5ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <h1 className="text-start text-4xl font-semibold text-[#091133] pl-20">
          About Begize
        </h1>
        <p className="text-start text-sm pt-10 text-[#6F7CB2] pl-2 md:pl-20 md:pr-28  leading-6">
          <span className="block mb-2">
            Welcome to Ethiopian Electric Utilities Queue Management System!
          </span>
          <span className="block mb-2">
            At Ethiopian Electric Utilities, we understand that your time is
            valuable. Our mission is to provide our customers with a seamless
            and efficient service experience by minimizing wait times and
            improving service accessibility at all ELPA branches.
          </span>
          <span className="block mb-2">
            Our Vision: To revolutionize the way customers interact with
            Ethiopian Electric Utilities by offering an innovative queue
            management system that ensures a fast, easy, and efficient service
            experience.
          </span>
          <span className="block mb-2">
            Our Mission: To enhance customer satisfaction by providing a
            user-friendly platform that allows customers to view real-time queue
            statuses, predict their wait times accurately, and access service
            availability instantly. We aim to make every visit to our branches
            as smooth and convenient as possible.
          </span>
          <span className="block mb-2">Why Choose Us?</span>
          <ul className="list-disc pl-7 md:pl-24">
            <li>
              Real-Time Queue Monitoring: Get up-to-the-minute updates on queue
              statuses at all ELPA branches. Know exactly how many people are
              ahead of you and plan your visit accordingly.
            </li>
            <li>
              Accurate Wait Time Predictions: Our advanced algorithms provide
              precise wait time predictions, so you can manage your schedule
              better and avoid long waits.
            </li>
            <li>
              Service Availability Check: Instantly check the availability of
              services at your preferred branch to ensure you can get the
              assistance you need when you need it.
            </li>
            <li>
              Remote Queue Joining: Join queues remotely from the comfort of
              your home or office. No need to wait in line physically—our system
              will notify you when it's your turn.
            </li>
            <li>
              Timely Notifications: Receive timely alerts and updates about your
              queue status, reducing the need to constantly check and wait.
            </li>
          </ul>
        </p>
      </div>
    </>
  );
}

export default About
