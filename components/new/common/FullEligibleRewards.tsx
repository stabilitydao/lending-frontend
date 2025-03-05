import Image from "next/image";

export const FullEligibleRewards = () => (
  <div className="flex flex-col border w-[100px]">
    <div className="flex justify-between items-center gap-1 px-[6px] font-semibold border-b text-xs">
      Gems{" "}
      <div className="relative w-3 h-3">
        <Image src={"/icons/incentives/gems-05.png"} alt={""} fill />
      </div>
    </div>
    <div className="flex justify-between items-center gap-1 px-[6px] font-semibold border-b text-xs">
      Points{" "}
      <div className="relative w-3 h-3">
        <Image src={"/icons/incentives/Sonic_Black.svg"} alt={""} fill />
      </div>
    </div>
    <div className="flex justify-between items-center gap-1 px-[6px] font-semibold text-xs">
      Airdrop{" "}
      <div className="relative w-3 h-3">
        <Image src={"/icons/incentives/Parachuting-08.png"} alt={""} fill />
      </div>
    </div>
  </div>
);
