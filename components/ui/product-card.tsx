"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Product } from "@/type";

import { ExpandIcon, ShoppingCart } from "lucide-react";

import IconButton from "./icon-button";
import Currency from "./currency";

interface ProductCardProps {
  item: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${item?.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt={"Image"}
          src={item?.images[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 translate-y-10 group-hover:opacity-100 group-hover:-translate-y-6 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<ExpandIcon size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* 상품 설명 */}
      <div>
        <p className="font-semibold text-lg">{item.name}</p>
        <p className="text-sm text-gray-500">{item.serise.name}</p>
      </div>
      {/* 가격 */}
      <div className="flex items-center justify-between">
        <Currency value={item?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
