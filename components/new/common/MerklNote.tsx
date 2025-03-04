"use client";

import { useAccount } from "wagmi";

export const MerklNote = () => {
  const { address } = useAccount();
  const mekleLink = address
    ? "https://app.merkl.xyz/user/" + address
    : "https://app.merkl.xyz";
  return (
    <div className="w-[300px]" onClick={(e) => e.stopPropagation()}>
      <a
        href={mekleLink}
        target="_blank"
        rel="noreferrer"
        className="text-[#00FFFF] underline"
      >
        Merkl’s rewards
      </a>{" "}
      (APRs) are calculated based on the amount of{" "}
      <a
        href="https://docs.soniclabs.com/funding/sonic-airdrop/sonic-gems"
        target="_blank"
        rel="noreferrer"
        className="text-[#00FFFF] underline"
      >
        Gems
      </a>{" "}
      emitted as supply/borrowing rewards, as well as the current price of Gems,
      which is tracked and displayed in{" "}
      <a
        href="https://dexscreener.com/sonic/0x579638b5a13068caad302b39e64253056cb83ade"
        target="_blank"
        rel="noreferrer"
        className="text-[#00FFFF] underline"
      >
        this
      </a>{" "}
      liquidity pool.
    </div>
  );
};
