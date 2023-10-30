import { Color } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_BASIC_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  try {
    const res = await fetch(URL);
    return res.json();
  } catch (error) {
    console.log("GET_COLOR_ERROR", error);
    throw new Error("GET_COLOR_ERROR");
  }
};

export default getColors;
