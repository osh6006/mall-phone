import qs from "query-string";

import { Billboard } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_BASIC_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard[]> => {
  try {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        billboardId: id,
      },
    });

    const res = await fetch(`${url}/${id}`);

    return res.json();
  } catch (error) {
    console.log("GET_BILLBOARD_ERROR", error);
    throw new Error("GET_BILLBOARD_ERROR");
  }
};

export default getBillboard;
