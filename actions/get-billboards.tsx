import { Billboard } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_BASIC_URL}/billboards`;

const getBillboards = async (): Promise<Billboard[]> => {
  try {
    const res = await fetch(URL);
    return res.json();
  } catch (error) {
    console.log("GET_BILLBOARDS_ERROR", error);
    throw new Error("GET_BILLBOARDS_ERROR");
  }
};

export default getBillboards;
