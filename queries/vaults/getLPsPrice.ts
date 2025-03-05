import axios from "axios";

export const getLPsPrice = async () => {
  try {
    const response = await axios.get<Record<string, number>>(
      "https://vicuna.orthae.xyz/lps"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching LP Prices:", error);
    return {};
  }
};
