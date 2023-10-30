import { Product } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_BASIC_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  try {
    const res = await fetch(`${URL}/${id}`);
    return res.json();
  } catch (error) {
    console.log("GET_PRODUCT_ERROR", error);
    throw new Error("GET_PRODUCT_ERROR");
  }
};

export default getProduct;
