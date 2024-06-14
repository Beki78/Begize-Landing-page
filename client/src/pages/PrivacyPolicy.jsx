import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className=" p-6 bg-gray-100 md:mx-40 mx-14 overflow-y-auto h-screen">
      <h1 className="text-4xl font-semibold text-[#091133] mt-8">
        Privacy Policy
      </h1>
      <p className="mt-4">
        Your privacy is important to us. This privacy policy document outlines
        the types of personal information that is received and collected by
        Begize and how it is used.
      </p>
      <h2 className="text-2xl font-semibold text-[#091133] mt-6">
        Information We Collect
      </h2>
      <p className="mt-2">We collect the following types of information:</p>
      <ul className="list-disc list-inside mt-2">
        <li>
          <b>Personal Identification Information:</b> Name, email address, phone
          number, and other contact details.
        </li>
        <li>
          <b>Queue Information:</b> Information related to your queue status,
          appointment times, and service details.
        </li>
        <li>
          <b>Usage Data:</b> Information on how you access and use our services.
        </li>
        <li>
          <b>Cookies and Tracking Technologies:</b> To improve user experience
          and gather analytics.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold text-[#091133] mt-6">
        How We Use Your Information
      </h2>
      <p className="mt-2">
        We use the collected information for various purposes:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>To provide and maintain our services</li>
        <li>To notify you about changes to our services</li>
        <li>
          To allow you to participate in interactive features of our service
        </li>
        <li>To provide customer support</li>
        <li>
          To gather analysis or valuable information so that we can improve our
          services
        </li>
        <li>To monitor the usage of our services</li>
        <li>To detect, prevent, and address technical issues</li>
      </ul>
      <h2 className="text-2xl font-semibold text-[#091133] mt-6">
        Data Sharing and Disclosure
      </h2>
      <p className="mt-2">
        We do not sell, trade, or otherwise transfer your personal information
        to outside parties. However, we may share information with:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>
          <b>Service Providers:</b> Who assist us in operating our services.
        </li>
        <li>
          <b>Law Enforcement:</b> If required by law.
        </li>
        <li>
          <b>Business Transfers:</b> In the event of a merger, acquisition, or
          sale.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold text-[#091133] mt-6">
        Security of Your Data
      </h2>
      <p className="mt-2">
        The security of your data is important to us. We implement a variety of
        security measures to maintain the safety of your personal information.
        However, no method of transmission over the Internet or method of
        electronic storage is 100% secure.
      </p>
      <h2 className="text-2xl font-semibold text-[#091133] mt-6">
        Your Data Protection Rights
      </h2>
      <p className="mt-2">
        Depending on your location, you may have the following rights regarding
        your personal data:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>
          The right to access – You have the right to request copies of your
          personal data.
        </li>
        <li>
          The right to rectification – You have the right to request that we
          correct any information you believe is inaccurate.
        </li>
        <li>
          The right to erasure – You have the right to request that we erase
          your personal data, under certain conditions.
        </li>
        <li>
          The right to restrict processing – You have the right to request that
          we restrict the processing of your personal data, under certain
          conditions.
        </li>
        <li>
          The right to object to processing – You have the right to object to
          our processing of your personal data, under certain conditions.
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
