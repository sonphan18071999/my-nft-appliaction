import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="flex justify-between flex-wrap max-md:flex-col items-center">
      <div className="md:w-2/5 flex flex-col gap-5 items-start justify-center max-md:text-center max-md:items-center mb-5">
        <h2 className="text-5xl text-white" data-aos="fade-right">
          How it Works
        </h2>
        <p className="text-white" data-aos="fade-right" data-aos-delay="120">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit amet. Lorem
          ipsum dolor sit amet, consecte adipiscing elit ipsum.
        </p>
        <button
          className="px-7 py-2 rounded-sm bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-80 text-white"
          data-aos="fade-right"
          data-aos-delay="180"
        >
          Learn More
        </button>
      </div>
      <div className="md:w-3/5 flex flex-col gap-5" data-aos="fade-left">
        {[1, 2].map((row) => (
          <div key={row} className="flex gap-5 max-md:flex-col items-center">
            {[1, 2].map((col) => (
              <div
                key={col}
                className="rounded-sm p-px bg-gradient-to-r from-indigo-500 via-pink-500"
              >
                <div className="bg-[#110229] rounded-[calc(0.125rem-1px)] p-5 hover:bg-opacity-80 flex flex-col gap-5">
                  <span className="rounded grid place-items-center p-4 bg-white/10 w-16">
                    <Image
                      src={`/assets/icons/icon${(row - 1) * 2 + col}.png`}
                      alt={`icon${(row - 1) * 2 + col}`}
                      width={200}
                      height={200}
                      quality={100}
                    />
                  </span>
                  <h3 className="text-2xl text-white">
                    {
                      [
                        "Set up Your Wallet",
                        "Buy Your Collection",
                        "Sell Your NFTs",
                        "Add Your NFTs",
                      ][(row - 1) * 2 + (col - 1)]
                    }
                  </h3>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur at adipiscing elit
                    amet.
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
