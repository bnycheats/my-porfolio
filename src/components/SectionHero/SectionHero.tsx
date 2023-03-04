import React, { FC } from "react";

interface SectionHeroProps {}

export const SectionHero: FC<SectionHeroProps> = () => (
  <div className="flex flex-col relative pt-10">
    <div className="flex flex-col lg:flex-row lg:items-center">
      <div
        className={`
        flex-shrink-0
        w-1/2
        flex
        flex-col
        items-start
        space-y-3
      `}
      >
        <span
          className={`
          text-base
          md:text-lg
          text-neutral-500
          dark:text-neutral-400
        `}
        >
          Hey there!
        </span>
        <h2
          className={`
          font-bold
          text-4xl
          !leading-[114%]
        `}
        >
          Robert Gil Pelayo
        </h2>
        <span
          className={`
          text-base
          md:text-lg
          text-neutral-500
          dark:text-neutral-400
        `}
        >
          Aspiring{" "}
          <span className="font-bold text-primary-500">Web Developer</span> from
          Philippines
        </span>
      </div>
    </div>
  </div>
);
