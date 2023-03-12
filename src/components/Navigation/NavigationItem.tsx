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

  const styles = isButton
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
  `;

  return (
    <li className="menu-item">
      <a
        href={`#${href}`}
        className={`${styles}${
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
