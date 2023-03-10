import { useEffect, useState } from "react";

import { Navigation } from "../Navigation";

export function Header() {
  const [isTop, setisTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const $head = document.getElementById("lrHeader");
      if (!$head) return;
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        !!isTop && setisTop(false);
      } else {
        setisTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTop]);

  return (
    <div
      className="lg:sticky lg:top-0 w-full lg:left-0 lg:right-0 z-40"
      id="lrHeader"
    >
      <Navigation isTop={isTop} />
    </div>
  );
}
