import { useRouter } from "next/router";

export interface NavigationItemProps {
  as?: string;
  href: string;
  label: string;
}

export function NavigationItem({ as, href, label }: NavigationItemProps) {
  const { asPath } = useRouter();
  const isActive = asPath === href || asPath === as;

  return (
    <li className="menu-item">
      <a
        href={`#${href}`}
        className={`
              inline-flex
              items-center
              text-sm
              xl:text-base
              font-normal
              text-neutral-700
              dark:text-neutral-300
              py-2
              px-4
              xl:px-5
              rounded-xl
              hover:text-neutral-900
              hover:bg-neutral-100
              dark:hover:bg-neutral-800
              dark:hover:text-neutral-200
              ${
                !isActive
                  ? ""
                  : `
                !font-semibold
                !text-neutral-900
                bg-neutral-100
                dark:bg-neutral-800
                dark:!text-neutral-100
              `
              }
            `}
      >
        {label}
      </a>
    </li>
  );
}
