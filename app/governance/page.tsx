import { LPStaking } from "@/components/governance/lp-staking";
// import { SingleStake } from "@/components/governance/single-stake";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative">
      <div className="bg-card p-4 h-full rounded-lg my-[150px] flex flex-col gap-6 shadow-2xl w-full max-w-4xl mx-auto blur-md">
        <div className="flex flex-col lg:flex-row justify-evenly gap-4">
          <LPStaking />
          {/* <SingleStake /> */}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-50">
        <div className="relative w-[750px] h-[250px] rounded-[50px] shadow-2xl">
          <Image src={"/work-in-progress.png"} alt={""} fill />
        </div>
      </div>
    </div>
  );
}
