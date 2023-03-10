import { NavigationItem } from "./NavigationItem";

interface NavItem {
  href: string;
  id: string;
  label: string;
}

interface NavigationMenuProps {
  navItems: NavItem[];
}

export function NavigationMenu({ navItems = [] }: NavigationMenuProps) {
  return (
    <>
      {navItems?.map((item) => (
        <NavigationItem href={item.href} key={item.id} label={item.label} />
      ))}
    </>
  );
}
