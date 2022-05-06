import axios from "axios";

export const requestData = async (query: { query: string }) => {
  try {
    const baseUrl = "http://localhost:4000/";
    let config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const res = await axios.post(baseUrl, query, config);

    return res.data;
  } catch (error: unknown) {
    console.log(error);
    console.log("error");
  }
};
