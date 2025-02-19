import { Addresses, isNativeToken, isWrappedNativeToken } from "@/constants";
import { Address } from "viem";
import { useChainId } from "wagmi";

const useWrappedIfNative = (address: Address) => {
  const chainID = useChainId();
  if (isNativeToken(address, chainID)) {
    address = Addresses[chainID].TOKENS.WRAPPED_NATIVE_TOKEN;
  }
  return address;
};

const useNativeIfWrapped = (address: Address) => {
  const chainID = useChainId();
  if (isWrappedNativeToken(address, chainID)) {
    address = Addresses[chainID].TOKENS.NATIVE_TOKEN;
  }
  return address;
};

export { useWrappedIfNative, useNativeIfWrapped };
