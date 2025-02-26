import { useUserDataRaw } from "@/hooks";
import { Token } from "@/constants";

const useUserData = (token: Token) => {
  token = token.isNative ? token.wrapperToken! : token;
  const { isUserDataLoading, userData, invalidateUserDataRawQuery } =
    useUserDataRaw();
  return {
    isUserDataLoading,
    userData: userData?.find(
      (data) => data.underlyingAsset.toLowerCase() === token.address
    ),
    invalidateUserDataQuery: invalidateUserDataRawQuery,
  };
};

export { useUserData };
