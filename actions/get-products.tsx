import qs from "query-string";

import { Product } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_BASIC_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  seriseId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  try {
    const url = qs.stringify({
      URL,
      query: {
        colorId: query.colorId,
        seriseId: query.categoryId,
        categoryId: query.categoryId,
        isFeatured: query.isFeatured,
      },
    });
    const res = await fetch(URL);
    return res.json();
  } catch (error) {
    console.log("GET_CATEGORIES_ERROR", error);
    throw new Error("GET_CATEGORIES_ERROR");
  }
};

export default getProducts;
