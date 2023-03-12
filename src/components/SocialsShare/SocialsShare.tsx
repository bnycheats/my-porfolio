interface SocialsShare {
  className?: string;
}

export interface SocialType {
  icon: string;
  href: string;
}

const socials: SocialType[] = [
  { icon: "lab la-facebook-f", href: "#" },
  { icon: "lab la-twitter", href: "#" },
  { icon: "lab la-instagram", href: "#" },
];

export function SocialsShare({ className }: SocialsShare) {
  return (
    <div
      className={`space-x-2 mt-5 md:m-0 md:space-y-3 md:space-x-0 ${className}`}
    >
      {socials.map((item: SocialType, index: number) => (
        <a
          className={`
          md:flex
          text-3xl
          text-neutral-500
          hover:text-primary-500
          hover:scale-[1.2]
          leading-none
          space-x-2
          group
          transition-all
          ease-in-out
          duration-200
        `}
          href={item.href}
          key={index}
        >
          <i className={item.icon}></i>
        </a>
      ))}
    </div>
  );
}
