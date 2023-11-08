"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import toast from "react-hot-toast";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const session = useSession();
  const user = session.data?.user;

  const router = useRouter();

  const totalPrice = items.reduce((prev, curr) => (prev += +curr.price), 0);

  const onCheckOut = () => {
    if (user) {
      toast.success("구매 프로세스 시작");
    } else {
      router.push("/login");
      toast.error("로그인을 해주세요");
    }
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">합계</h2>
      <div className="mt-6 space-y-4 ">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">총 가격</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onCheckOut} className="w-full my-6">
        주문하기
      </Button>
    </div>
  );
};

export default Summary;
