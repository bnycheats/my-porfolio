import { NavigationMenu } from "./NavigationMenu";
import { nanoId } from "@/utils/nanoId";

export interface NavigationProps {
  isTop: boolean;
}

export const navItemsDesktop = [
  {
    id: nanoId(),
    href: "about",
    label: "About",
  },
  {
    id: nanoId(),
    href: "skills",
    label: "Skills",
  },
  {
    id: nanoId(),
    href: "projects",
    label: "Projects",
  },
  {
    id: nanoId(),
    href: "contact-me",
    label: "Contact Me",
    isButton: true,
  },
];

export function Navigation({ isTop }: NavigationProps) {
  return (
    <div
      className={`
        relative
        z-10
        ${
          isTop
            ? ""
            : `
          backdrop-blur-2xl
          backdrop-filter
          bg-opacity-70
          bg-white
          shadow-sm
        `
        }
      `}
    >
      <div
        className={`
          container
          py-2
          relative
          flex
          justify-between
          items-center
          lg:py-5
        `}
      >
        <div
          className={`
          flex
          justify-between
          flex-grow
          items-center
          space-x-4
          sm:space-x-10
          2xl:space-x-14
        `}
        >
          <div className="mx-auto lg:mx-0">
            <h1 className="font-bold text-neutral-500 text-2xl">GIL</h1>
          </div>
          <ul
            className={`
            hidden
            lg:flex
            lg:flex-wrap
            lg:items-center
            relative
          `}
          >
            <NavigationMenu navItems={navItemsDesktop} />
          </ul>
        </div>
      </div>
    </div>
  );
}
