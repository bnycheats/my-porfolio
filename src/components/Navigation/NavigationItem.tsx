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

  return (
    <li className="menu-item">
      {isButton ? (
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
          `}
        >
          {label}
        </a>
      ) : (
        <a
          href={`#${href}`}
          className={`
              inline-flex
              items-center
              text-sm
              xl:text-base
              font-normal
              text-neutral-700
              py-2
              px-4
              xl:px-5
              hover:text-primary-500
              transition-colors
              ease-in-out
              duration-200
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
      )}
    </li>
  );
}
