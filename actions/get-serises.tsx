import { Serise } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_BASIC_URL}/serises`;

const getSerises = async (): Promise<Serise[]> => {
  try {
    const res = await fetch(URL);
    return res.json();
  } catch (error) {
    console.log("GET_SERISES_ERROR", error);
    throw new Error("GET_SERISES_ERROR");
  }
};

export default getSerises;
