import { Category } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_BASIC_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL);
    return res.json();
  } catch (error) {
    console.log("GET_CATEGORIES_ERROR", error);
    throw new Error("GET_CATEGORIES_ERROR");
  }
};

export default getCategories;
