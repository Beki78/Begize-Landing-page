import React from 'react'
const stats = [
  { id: 1, name: "Less than 500 ETB Per Transaction", value: "15 ETB" },
  { id: 2, name: "500 - 1000 ETB Per Transaction", value: "25 ETB" },
  { id: 3, name: "Greater than 1000 ETB Per Transaction", value: "35 ETB" },
];

const Pricing = () => {
  return (
    <>
      <h1 className="text-center text-4xl pt-24 font-semibold text-[#091133]" id='pricing'>
        A Price To Suit Everyone
      </h1>
      <p className="text-center text-sm pt-10 xl:px-96 md:px-40 sm:px-20 px-7 text-[#6F7CB2]">
        Our pricing model is based on the number of transactions, ensuring you
        only pay for the services you use. No hidden fees, no complex
        contracts—just clear, transaction-based pricing designed to meet your
        needs.
      </p>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col  hover:bg-[#f3f2f2] p-14 rounded-md duration-300 ease-in-out"
              >
                <dt className="text-base leading-7 text-[#37447E]">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-[#222F65] sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}

export default Pricing
