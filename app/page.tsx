import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-col items-center h-screen">
      <div className="relative pt-4">
        <Image src="/hero.png" alt="hero" width={1500} height={1000} />
        <div className="absolute top-28 right-20 bg-background/60 text-black px-12 py-6 rounded">
          Network TVL: $1,234,567
        </div>
      </div>
      <div className="flex flex-col mx-10 py-24">
        <Card className="max-w-3xl py-10">
          <CardHeader>
            <CardTitle className="text-md">Vicuna Finance offers:</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <ul className="space-y-4">
                <li>
                  Yield farm while you sleep with Vicuna Finance’s
                  high-performance, set-and-forget auto compounders
                </li>
                <li>
                  Amplify your rewards with leveraged yield farms and accelerate
                  asset growth-Stake $VIFI to earn fees + protocol revenue and
                  govern Vicuna Finance
                </li>
                <li>Borrowing and lending off crypto assets at high APR</li>
              </ul>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col mx-10 py-4">
        <h2 className="text-6xl text-primary">Partners</h2>
      </div>
    </main>
  );
}
