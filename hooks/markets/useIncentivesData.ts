"use client";
import { bnToNumber } from "@/helpers";
import { useIncentivesDataRaw } from "@/hooks";
import { Address } from "viem";

type SubIncentiveData = {
  rewardTokenAddress: Address;
  emissionPerSecond: bigint;
  rewardTokenDecimals: number;
  rewardPriceFeed: bigint;
};

type IncentiveData = {
  underlyingAsset: `0x${string}`;
  aIncentiveData: {
    rewardsTokenInformation: readonly SubIncentiveData[];
  };
  vIncentiveData: {
    rewardsTokenInformation: readonly SubIncentiveData[];
  };
};

const processIncentiveData = (incentiveData: readonly SubIncentiveData[]) => {
  const tokenRewards: { tokenAddress: Address; rewardsPerSecond: number }[] =
    [];

  incentiveData.forEach((reward) => {
    const tokenRewardPerSecond = bnToNumber(
      reward.emissionPerSecond,
      reward.rewardTokenDecimals
    );

    const priceFeed = bnToNumber(reward.rewardPriceFeed, 8);

    const adjustedRewardPerSecond = tokenRewardPerSecond * priceFeed;
    tokenRewards.push({
      tokenAddress: reward.rewardTokenAddress,
      rewardsPerSecond: adjustedRewardPerSecond,
    });
  });

  return {
    rewardsPerSecond: tokenRewards.reduce(
      (sum, reward) => sum + reward.rewardsPerSecond,
      0
    ),
    tokenRewards,
  };
};

const processIncentivesData = (
  data: readonly IncentiveData[],
  filter: (data: IncentiveData) => readonly SubIncentiveData[]
) => {
  const incentives: Record<Address, { rewardsPerSecond: number }> = {};

  data.forEach((market) => {
    const incentivesData = processIncentiveData(filter(market));
    incentives[market.underlyingAsset.toLowerCase() as Address] =
      incentivesData;
  });

  return incentives;
};

const useIncentivesData = () => {
  const {
    incentivesData,
    isIncentivesDataLoading,
    invalidateIncentivesDataRawQuery,
  } = useIncentivesDataRaw();

  return {
    invalidateIncentivesDataQuery: invalidateIncentivesDataRawQuery,
    supplyIncentives: incentivesData
      ? processIncentivesData(
          incentivesData,
          (data) => data.aIncentiveData.rewardsTokenInformation
        )
      : undefined,
    borrowIncentives: incentivesData
      ? processIncentivesData(
          incentivesData,
          (data) => data.vIncentiveData.rewardsTokenInformation
        )
      : undefined,
    isIncentivesDataLoading,
  };
};

const useIncentiveData = (tokenAddress: Address) => {
  const {
    supplyIncentives,
    borrowIncentives,
    invalidateIncentivesDataQuery,
    isIncentivesDataLoading,
  } = useIncentivesData();

  return {
    supplyIncentive: supplyIncentives?.[tokenAddress],
    borrowIncentive: borrowIncentives?.[tokenAddress],
    invalidateIncentiveDataQuery: invalidateIncentivesDataQuery,
    isIncentiveDataLoading: isIncentivesDataLoading,
  };
};

export { useIncentivesData, useIncentiveData };
