import getProducts from "@/actions/get-products";
import React from "react";

export const revalidate = 0;

interface CetegoryPageProps {
  params: {
    cetegoryId: string;
  };
  searchParams: {
    colorId: string;
    seriseId: string;
  };
}
const CategoryPage: React.FC<CetegoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.cetegoryId,
    colorId: searchParams.colorId,
    seriseId: searchParams.seriseId,
  });

  return <div>CategoryPage</div>;
};

export default CategoryPage;
