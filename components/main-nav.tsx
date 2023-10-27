"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/libs/utils";
import { Category } from "@/type";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathName = usePathname();
  const routes = data?.map((route) => {
    console.log(route);

    return {
      href: `category/${route.id}`,
      label: route.name,
      active: pathName === `category/${route.id}`,
    };
  });

  return (
    <nav className="flex items-center justify-center border-t py-2 gap-x-4">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-main",
            route.active ? "text-main font-bold" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
