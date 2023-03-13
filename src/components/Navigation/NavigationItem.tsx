import { useRouter } from "next/router";

export interface NavigationItemProps {
  as?: string;
  href: string;
  label: string;
  isButton?: boolean;
}

export function NavigationItem({
  as,
  href,
  label,
  isButton,
}: NavigationItemProps) {
  const { asPath } = useRouter();
  const isActive = asPath === href || asPath === as;

  const a = isButton
    ? `
    bg-transparent
    font-semibold 
    py-2 
    px-4 
    border 
    text-primary-500
    transition-colors
    border-primary-500 
    hover:text-primary-700
    hover:border-primary-700
    rounded
  `
    : `
    xl:text-base
    font-semibold 
    text-neutral-700
    hover:text-primary-500
    transition-colors
    duration-300
  `;

  const li = isButton
    ? ""
    : `
      after:transition-all
      after:duration-300
      after:block
      after:content-['']
      after:bg-primary-500
      after:w-0
      after:h-0.5
      hover:after:w-full
     `;

  if (isButton) {
    return (
      <li className="">
        <a
          href={`#${href}`}
          className={`
          bg-transparent
          font-semibold 
          py-2 
          px-4 
          border 
          text-primary-500
          transition-colors
          border-primary-500 
          hover:text-primary-700
          hover:border-primary-700
          rounded
          ${
            !isActive
              ? ""
              : `
              !font-semibold
              !text-neutral-900
              bg-neutral-100
            `
          }
          `}
        >
          {label}
        </a>
      </li>
    );
  }

  return (
    <li
      className="
      menu-item 
      after:transition-all
      after:duration-300
      after:block
      after:content-['']
      after:bg-primary-500
      after:w-0
      after:h-0.5
      hover:after:w-full
    "
    >
      <a
        href={`#${href}`}
        className={`
        xl:text-base
        text-neutral-700
        hover:text-primary-500
        transition-colors
        duration-300
        ${
          !isActive
            ? ""
            : `
                !font-semibold
                !text-neutral-900
                bg-neutral-100
              `
        }
            `}
      >
        {label}
      </a>
    </li>
  );
}
