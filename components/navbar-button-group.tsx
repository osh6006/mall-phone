"use client";
import { useRouter } from "next/navigation";

import { ShoppingCart } from "lucide-react";

import useMount from "@/hooks/use-mount";

import Button from "./ui/button";
import useCart from "@/hooks/use-cart";

const NavbarButtonGroup = () => {
  const router = useRouter();
  const { isMounted } = useMount();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="relative flex items-center rounded-full bg-transparent p-0"
      >
        <ShoppingCart size={20} color="black" />
        <span className="absolute w-4 h-4 flex items-center justify-center -top-2 -right-3 text-xs bg-main rounded-full p-1">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarButtonGroup;
