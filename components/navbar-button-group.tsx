"use client";
import { useRouter } from "next/navigation";

import { ShoppingCart } from "lucide-react";

import useMount from "@/hooks/use-mount";

import Button from "./ui/button";
import useCart from "@/hooks/use-cart";

import { signOut, useSession } from "next-auth/react";

const NavbarButtonGroup = () => {
  const router = useRouter();
  const { isMounted } = useMount();
  const cart = useCart();

  const session = useSession();
  const user = session.data?.user;

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-4">
      {user ? (
        <>
          <Button
            onClick={() => signOut({ callbackUrl: "/", redirect: false })}
            className="relative flex items-center rounded-md px-2 py-1.5"
          >
            로그아웃
          </Button>
        </>
      ) : (
        <>
          <Button
            onClick={() => router.push("/login")}
            className="relative flex items-center rounded-md px-2 py-1.5"
          >
            로그인
          </Button>
          <Button
            onClick={() => router.push("/cart")}
            className="relative flex items-center rounded-full bg-transparent p-0"
          >
            <ShoppingCart size={20} color="black" />
            <span className="absolute w-4 h-4 flex items-center justify-center -top-2 -right-3 text-xs bg-main rounded-full p-1">
              {cart.items.length}
            </span>
          </Button>
        </>
      )}
    </div>
  );
};

export default NavbarButtonGroup;
