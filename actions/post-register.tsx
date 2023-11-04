interface Response {
  ok: boolean;
  msg: string;
}

const URL = `${process.env.NEXT_PUBLIC_URL}register`;

const postRegister = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<Response> => {
  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    return res.json();
  } catch (error) {
    console.log("POST_REGISTER_ERROR", error);
    throw new Error("POST_REGISTER_ERROR");
  }
};

export default postRegister;
