import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import ScrollingPartners from "@/components/home/scrolling-partners";
import { ProtocolTVL } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Card className="max-w-4xl py-10 mt-[120px]">
        <CardHeader className="py-10">
          <CardTitle className="text-6xl font-semibold text-center text-white">
            Stability offers
          </CardTitle>
        </CardHeader>
        {/* <ProtocolTVL /> */}
        <CardContent>
          <CardDescription>
            <ul className="space-y-8 text-white">
              <li className="flex items-center gap-4">
                Yield farm while you sleep with Stability high-performance,
                set-and-forget auto compounders
              </li>
              <li className="flex items-center gap-4">
                Amplify your rewards with leveraged yield farms and accelerate
                asset growth-Stake xSTBL to earn fees + protocol revenue and
                govern Stability
              </li>
              <li className="flex items-center gap-4">
                Borrowing and lending off crypto assets at high APR
              </li>
            </ul>
          </CardDescription>
        </CardContent>
      </Card>
      <div className="w-full flex flex-col pb-16 space-y-12 items-center relative overflow-hidden mt-10">
        <h2 className="text-6xl text-white">Partners</h2>
        <ScrollingPartners />
        {/* <div className="flex flex-col md:flex-row gap-24 items-start md:items-center">
        <div className="flex flex-row gap-4 items-center">
          <Image
            src="/icons/layer-zero.png"
            alt="LayerZero icon"
            width={24}
            height={24}
          />
          <p className="text-xl text-black font-bold">LayerZero.</p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Image
            src="/icons/debank.png"
            alt="Llama icon"
            width={32}
            height={32}
          />
          <p className="text-xl text-white">Debank</p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Image
            src="/icons/dune.png"
            alt="Llama icon"
            width={32}
            height={32}
          />
          <p className="text-xl text-white">Dune</p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Image
            src="/icons/uiux.png"
            alt="Llama icon"
            width={32}
            height={32}
          />
          <p className="text-xl text-black">Web3 UI/UX</p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Image
            src="/icons/sonic-labs.svg"
            alt="Llama icon"
            width={120}
            height={32}
          />
          {/* <p className="text-xl text-black">Sonic Labs</p> 
        </div>
      </div> */}
      </div>
    </main>
  );
}
