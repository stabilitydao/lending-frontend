import { Token } from "@/constants";
import Image from "next/image";

const DoubleTokenIcon = ({
  token1,
  token2,
}: {
  token1: Token;
  token2: Token;
}) => (
  <div className="flex flex-row gap-0 items-center ">
    <div className="flex rounded-full bg-background p-1.5 h-10 w-10">
      <Image src={token1.icon} width={28} height={28} alt={token1.symbol} />
    </div>
    <div className="flex rounded-full bg-background p-1.5 h-10 w-10 -ml-4">
      <Image src={token2.icon} width={28} height={28} alt={token2.symbol} />
    </div>
  </div>
);

const SingleTokenIcon = ({ token }: { token: Token }) => (
  <div className="flex flex-row gap-2 items-center ">
    <Image src={token.icon} width={40} height={40} alt={token.symbol} />
  </div>
);

export const TokenIcon = ({ token }: { token: Token }) => (
  <div className={`flex flex-row gap-2 items-center`}>
    {token.pair ? (
      <DoubleTokenIcon token1={token.pair[0]} token2={token.pair[1]} />
    ) : (
      <SingleTokenIcon token={token} />
    )}
    <div>
      <div className="font-medium">{token.name}</div>
      <div className="text-sm">{token.symbol}</div>
    </div>
  </div>
);
