"use client";
import { ShoppingCart } from "lucide-react";

import useMount from "@/hooks/use-mount";

import Button from "./ui/button";

const NavbarButtonGroup = () => {
  const { isMounted } = useMount();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-4">
      <Button className="relative flex items-center rounded-full bg-transparent p-0">
        <ShoppingCart size={20} color="black" />
        <span className="absolute w-4 h-4 flex items-center justify-center -top-2 -right-3 text-xs bg-main rounded-full p-1">
          0
        </span>
      </Button>
    </div>
  );
};

export default NavbarButtonGroup;
