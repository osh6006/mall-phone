import { Storage } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_BASIC_URL}/storages`;

const getStorages = async (): Promise<Storage[]> => {
  try {
    const res = await fetch(URL);
    return res.json();
  } catch (error) {
    console.log("GET_STORAGES_ERROR", error);
    throw new Error("GET_STORAGES_ERROR");
  }
};

export default getStorages;
