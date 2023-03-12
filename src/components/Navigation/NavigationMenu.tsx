import { NavigationItem } from "./NavigationItem";

interface NavItem {
  href: string;
  id: string;
  label: string;
  isButton?: boolean;
}

interface NavigationMenuProps {
  navItems: NavItem[];
}

export function NavigationMenu({ navItems = [] }: NavigationMenuProps) {
  return (
    <>
      {navItems?.map((item) => (
        <NavigationItem
          href={item.href}
          key={item.id}
          label={item.label}
          isButton={item.isButton}
        />
      ))}
    </>
  );
}
