import axios from "axios";
import { useEffect, useState } from "react";

type TVLData = {
  [chainId: string]: {
    [vaultId: string]: number;
  };
};

export const fetchTVL = async (): Promise<TVLData | undefined> => {
  return undefined;
  // try {
  //   const response = await axios.get("https://vicuna.orthae.xyz/tvl");
  //   const tvlData = response.data;
  //   return tvlData;
  // } catch (error) {
  //   console.error("Error fetching TVL:", error);
  // }
};

export const useTvl = () => {
  const [tvl, setTvl] = useState<TVLData | undefined>();

  useEffect(() => {
    fetchTVL().then((data) => {
      setTvl(data);
    });
  }, []);

  return { tvl };
};
