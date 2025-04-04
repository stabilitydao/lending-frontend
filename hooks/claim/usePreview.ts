"use client";
import { getTokenByAddress, preview } from "@/constants";
import { bnToStr, strToBn } from "@/helpers";
import { Address } from "viem";
import { useAccount } from "wagmi";

const usePreview = () => {
  let { address } = useAccount();
  address = address?.toLowerCase() as Address;
  if (!address) {
    return {
      prices: preview.prices,
      preview: undefined,
    };
  }
  const userPreview = preview.preview[address];

  if (!userPreview) {
    return {
      prices: preview.prices,
      preview: {
        positions: [],
        claims: [],
      },
    };
  }

  const positions = userPreview.positions.map((position) => {
    const token = getTokenByAddress(position.address)!;
    return {
      token,
      collateral: bnToStr(strToBn(position.collateral, 0), token.decimals),
      debt: bnToStr(strToBn(position.debt, 0), token.decimals),
    };
  });
  const claims = userPreview.claim.map((claim) => {
    const token = getTokenByAddress(claim.address)!;
    return {
      token,
      amount: bnToStr(strToBn(claim.amount, 0), token.decimals),
    };
  });
  return {
    prices: preview.prices,
    preview: {
      positions,
      claims,
    },
  };
};

export { usePreview };
