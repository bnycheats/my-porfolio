import { SocialsShare } from "../SocialsShare";
import { ButtonPrimary } from "../ButtonPrimary";

export function SectionHero() {
  return (
    <section
      className="
      flex 
      flex-col 
      relative 
      pt-10"
    >
      <div
        className="
        flex 
        flex-col 
        text-center 
        md:text-left 
        md:flex-row 
        items-center 
        justify-between"
      >
        <SocialsShare
          className="
          order-3 
          md:order-1"
        />
        <div
          className={`
          order-2
          md:order-2
          flex-shrink-0
          md:w-1/2
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
            Hi, I&apos;m <span className="text-primary-500">Gil</span>
          </h2>
          <span
            className={`
            text-base
            md:text-lg
            text-neutral-500
        `}
          >
            I&apos;m specialized in front-end development, which focuses on
            designing and building the user-facing portion of a website.
          </span>
          <ButtonPrimary className="!mt-6 w-auto">Projects</ButtonPrimary>
        </div>
        <div className="order-1 md:order-3">
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
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M23.2,-28.6C29.8,-22.2,34.7,-14.6,37,-5.9C39.3,2.8,39,12.6,34.7,20C30.4,27.5,22,32.5,12.7,36.6C3.4,40.7,-6.8,43.8,-13.6,40.1C-20.3,36.4,-23.6,26,-28.8,16.7C-34,7.5,-41.2,-0.5,-42,-9.3C-42.7,-18.1,-36.9,-27.6,-28.8,-33.7C-20.8,-39.8,-10.4,-42.5,-1,-41.3C8.3,-40.1,16.7,-34.9,23.2,-28.6Z"
                transform="translate(50 50)"
              />
              <image xlinkHref="/images/png/profile.png" y="9" width={100} />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
