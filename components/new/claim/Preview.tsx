"use client";
import { usePreview } from "@/hooks/claim/usePreview";
import { TokenIcon } from "../common";
import { getTokenByAddress, Token } from "@/constants";
import { bnToNumber, formatSuffix, strToBn } from "@/helpers";
import { Card } from "../portfolio";
import Link from "next/link";

const PositionFragment = ({
  value,
  label,
  tokenAmount,
}: {
  value: string;
  tokenAmount: string;
  label: string;
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="text-xl font-semibold">{label}</div>
      <div className="flex flex-row gap-2">
        <div>Value at exploit time:</div>
        <div>{value}</div>
      </div>
      <div className="flex flex-row gap-2">
        <div>Token amount:</div>
        <div className="text-grey">{tokenAmount}</div>
      </div>
    </div>
  );
};

const Position = ({
  position,
  price,
}: {
  position: {
    token: Token;
    collateral: string;
    debt: string;
  };
  price: number;
}) => {
  const token = position.token;
  const collateral = position.collateral;
  const debt = position.debt;
  if (Number(collateral) * price < 0.01 && Number(debt) * price < 0.01) {
    return null;
  }
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <TokenIcon token={token} />
        <PositionFragment
          label="Collateral"
          value={"$" + formatSuffix(Number(collateral) * price, "money")}
          tokenAmount={collateral}
        />
        <PositionFragment
          label="Debt"
          value={"$" + formatSuffix(Number(debt) * price, "money")}
          tokenAmount={debt}
        />
        <PositionFragment
          label="Net"
          value={
            "$" +
            formatSuffix((Number(collateral) - Number(debt)) * price, "money")
          }
          tokenAmount={String(Number(collateral) - Number(debt))}
        />
      </div>
    </Card>
  );
};

const Positions = ({
  positions,
  prices,
  total,
}: {
  positions: { token: Token; collateral: string; debt: string }[];
  prices: { [key: string]: number };
  total: number;
}) => {
  if (!positions) {
    return null;
  }
  return (
    <div className="flex flex-col gap-5 text-sm text-gray-500">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-primary text-lg font-semibold">
            Your positions at lock time
          </h1>
        </div>
        <div className="text-primary text-sm font-light">
          All USD values are based on the price of tokens at the time of the
          exploit. "Net" refers to the value of your collateral minus the value
          of your debt.
        </div>
      </div>
      <div className="flex sm:flex-row flex-col flex-wrap gap-2">
        {positions.map((position) => (
          <Position
            key={position.token.address}
            position={position}
            price={prices[position.token.address]}
          />
        ))}
      </div>
      <div className="text-primary text-lg">
        Positions net value at exploit time:{" "}
        {"$" + formatSuffix(total, "money")}
      </div>
    </div>
  );
};

const ClaimPreview = ({
  claims,
  prices,
  total,
}: {
  claims: { token: Token; amount: string }[];
  prices: { [key: string]: number };
  total: number;
}) => {
  return (
    <div className="flex flex-col gap-5 text-sm text-gray-500">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-primary text-lg font-semibold">
            Preview of your reimbursement
          </h1>
        </div>
        <div className="text-primary text-sm font-light">
          All USD values are, again, based on the price of tokens at the time of
          the exploit.
        </div>
      </div>
      <div className="flex sm:flex-row flex-col flex-wrap gap-2">
        {claims.map((claim) => {
          return (
            Number(claim.amount) * prices[claim.token.address] > 0.01 && (
              <Card key={claim.token.address}>
                <div className="flex flex-col gap-2">
                  <TokenIcon token={claim.token} />
                  <PositionFragment
                    label="Received"
                    value={
                      "$" +
                      formatSuffix(
                        Number(claim.amount) * prices[claim.token.address],
                        "money"
                      )
                    }
                    tokenAmount={claim.amount}
                  />
                </div>
              </Card>
            )
          );
        })}
      </div>
      <div className="text-primary text-lg">
        Reimbursement value at exploit time:{" "}
        {"$" + formatSuffix(total, "money")}
      </div>
    </div>
  );
};

const Disclaimer = () => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <h1 className="text-primary text-lg font-semibold">Preview</h1>
    </div>
    <div className="text-primary text-sm font-light">
      This page shows a preview of your potential reimbursement based on the
      positions you have at the time of the exploit. If you think there is a
      mistake with your preview, please open a ticket on our
      <Link href="https://discord.com/invite/vicuna">
        <span className="text-primary underline cursor-pointer ml-1">
          Discord
        </span>
      </Link>
      . This preview phase will last for 24 to 48 hours.
    </div>
  </div>
);

const NothingToClaim = () => (
  <div className="flex flex-col gap-[30px]">
    <Disclaimer />
    <div className="flex flex-col gap-2">
      <div className="text-primary text-lg font-semibold">
        No positions at exploit time
      </div>
      <div className="text-primary text-sm font-light">
        You had no positions at the time of the exploit.
      </div>
    </div>
  </div>
);

export const Preview = () => {
  const { prices, preview } = usePreview();

  if (!preview) {
    return <NothingToClaim />;
  }

  const netTotal = preview.positions.reduce(
    (acc, position) =>
      acc +
      (Number(position.collateral) - Number(position.debt)) *
        prices[position.token.address],
    0
  );

  const claimTotal = preview.claims.reduce(
    (acc, claim) => acc + Number(claim.amount) * prices[claim.token.address],
    0
  );

  if (!netTotal || netTotal < 0.01) {
    return <NothingToClaim />;
  }

  return (
    <div className="flex flex-col gap-[30px]">
      <Disclaimer />
      <Positions
        positions={preview.positions}
        prices={prices}
        total={netTotal}
      />
      <ClaimPreview
        claims={preview.claims}
        prices={prices}
        total={claimTotal}
      />
      <div className="text-primary text-[30px]">
        Final recovery percentage:{" "}
        {((claimTotal / netTotal) * 100).toFixed(2) + "%"}
      </div>
      {(claimTotal / netTotal) * 100 < 60 && (
        <div className="text-primary text-[25px]">
          Note: Your percentage is below 60%. This likely means you have managed
          to extract some of the funds between the time of the exploit and the
          time of the lock. As a result, whatever you have managed to withdraw
          has been deduced from your total claim.
        </div>
      )}
    </div>
  );
};
