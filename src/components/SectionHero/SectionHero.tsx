import React, { FC } from "react";
import Image from "next/image";

interface SectionHeroProps {}

export const SectionHero: FC<SectionHeroProps> = () => (
  <div className="flex flex-col relative pt-10">
    <div className="flex flex-col text-center md:flex-row items-center justify-center">
      <div
        className={`
        flex-shrink-0
        w-1/2
        flex
        flex-col
        md:items-start
        space-y-1
      `}
      >
        <h2
          className={`
          font-bold
          text-4xl
          text-neutral-700
          !leading-[114%]
        `}
        >
          Hi, I'm <span className="text-primary-500">Gil</span>
        </h2>
        <span
          className={`
          text-base
          md:text-lg
          text-neutral-500
          dark:text-neutral-400
        `}
        >
          Frontend developer
        </span>
      </div>
      <div>
        <svg
          className="w-full fill-primary-500"
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <mask id="mask0" mask-type="alpha">
            <path
              d="M23.2,-28.6C29.8,-22.2,34.7,-14.6,37,-5.9C39.3,2.8,39,12.6,34.7,20C30.4,27.5,22,32.5,12.7,36.6C3.4,40.7,-6.8,43.8,-13.6,40.1C-20.3,36.4,-23.6,26,-28.8,16.7C-34,7.5,-41.2,-0.5,-42,-9.3C-42.7,-18.1,-36.9,-27.6,-28.8,-33.7C-20.8,-39.8,-10.4,-42.5,-1,-41.3C8.3,-40.1,16.7,-34.9,23.2,-28.6Z"
              transform="translate(50 50)"
            ></path>
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M23.2,-28.6C29.8,-22.2,34.7,-14.6,37,-5.9C39.3,2.8,39,12.6,34.7,20C30.4,27.5,22,32.5,12.7,36.6C3.4,40.7,-6.8,43.8,-13.6,40.1C-20.3,36.4,-23.6,26,-28.8,16.7C-34,7.5,-41.2,-0.5,-42,-9.3C-42.7,-18.1,-36.9,-27.6,-28.8,-33.7C-20.8,-39.8,-10.4,-42.5,-1,-41.3C8.3,-40.1,16.7,-34.9,23.2,-28.6Z"
              transform="translate(50 50)"
            ></path>
            <image xlinkHref="/images/png/profile.png" y="9" width={100} />
          </g>
        </svg>
      </div>
    </div>
  </div>
);
