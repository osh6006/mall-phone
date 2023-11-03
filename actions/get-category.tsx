import { Category } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_BASIC_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  try {
    const res = await fetch(`${URL}/${id}`);
    return res.json();
  } catch (error) {
    console.log("GET_CATEGORY_ERROR", error);
    throw new Error("GET_CATEGORY_ERROR");
  }
};

export default getCategory;
