import React, { FC } from "react";

interface SectionHeroProps {}

export const SectionHero: FC<SectionHeroProps> = () => (
  <div className="flex flex-col relative pt-10 lg:pt-20">
    <div className="flex flex-col lg:flex-row lg:items-center">
      <div
        className={`
        flex-shrink-0
        lg:w-1/2
        flex
        flex-col
        items-start
        space-y-8
        sm:space-y-10
        pb-14
        lg:pb-48
        xl:pr-14
        lg:mr-10
        xl:mr-0
      `}
      >
        <h2
          className={`
          font-medium
          text-4xl
          md:text-5xl
          xl:text-7xl
          !leading-[114%]
        `}
        >
          Buy, Sell or Rent in a Jiffi
        </h2>
        <span
          className={`
          text-base
          md:text-lg
          text-neutral-500
          dark:text-neutral-400
        `}
        >
          Tired of playing phone tag with busy Estate Agents? Get in direct
          contact with the the seller/renter and make the process fast and easy.
        </span>
      </div>
    </div>
  </div>
);
