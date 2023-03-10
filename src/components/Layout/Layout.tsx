import { ReactNode } from "react";

import { Header } from "../Header";

export interface ShellLayoutProps {
  children: ReactNode;
}

export function Layout({ children }: ShellLayoutProps) {
  return (
    <main className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <Header />
      {children}
    </main>
  );
}
