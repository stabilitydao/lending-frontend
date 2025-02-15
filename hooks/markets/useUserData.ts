import { Address } from "viem";
import { useUserDataRaw, useWrappedIfNative } from "@/hooks";

const useUserData = (tokenAddress: Address) => {
  tokenAddress = useWrappedIfNative(tokenAddress);
  if (!tokenAddress) {
    return { isUserDataLoading: false, userData: undefined };
  }
  const { isUserDataLoading, userData, invalidateUserDataRawQuery } =
    useUserDataRaw();
  return {
    isUserDataLoading,
    userData: userData?.find(
      (data) =>
        data.underlyingAsset.toLowerCase() === tokenAddress.toLowerCase()
    ),
    invalidateUserDataQuery: invalidateUserDataRawQuery,
  };
};

export { useUserData };
