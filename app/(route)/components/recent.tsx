import ProductList from "@/components/product-list";
import Heading from "@/components/ui/heading";
import { Product } from "@/type";
import React from "react";

interface RecentProps {
  products: Product[];
}

const Recent: React.FC<RecentProps> = ({ products }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <Heading
        title="최신 기기들"
        desc="가장 최근에 추가된 기기들을 확인하세요"
      />

      <div className="w-full flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 mt-5">
        <ProductList items={products} />
      </div>
    </div>
  );
};

export default Recent;
