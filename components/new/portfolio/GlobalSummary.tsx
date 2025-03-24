"use client";
import { formatSuffix } from "@/helpers";
import Image from "next/image";
import { useQueryParams, useSuggestions } from "@/hooks";
import { Suggestion, SuggestionsWrapper } from "@/types";
import { Button } from "@/components/ui/button";
import { Token } from "@/constants";
import { TokenIcon, Card, MoneyCard } from "@/components";

const Recap = ({
  netValue,
  yearlyYield,
  apy,
}: {
  netValue: number;
  yearlyYield: number;
  apy: number;
}) => (
  <div className="flex flex-col gap-4">
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <h1 className="text-primary text-lg font-semibold">Your Summary</h1>
        <Image
          src={"/icons/coins/sonic.svg"}
          alt="Chain logo"
          width={20}
          height={20}
        />
      </div>
      <div className="text-primary text-sm font-light">
        Quickly monitor your portfolio's performance.
      </div>
    </div>
    <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 gap-4">
      <MoneyCard title="Net Deposited" amount={netValue} />
      <Card title="APY">
        <div
          className={`text-xl font-semibold ${
            apy >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {apy.toFixed(2)}%
        </div>
      </Card>
      <Card title={`Yearly ${apy >= 0 ? "Earnings" : "Losses"}`}>
        <div
          className={`text-xl font-semibold ${
            apy >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {" "}
          ${formatSuffix(yearlyYield, "money")}
        </div>
      </Card>
    </div>
  </div>
);

const ActionCard = ({
  aprOrApy,
  incentiveType,
  action,
  modalArguments,
}: {
  aprOrApy: number;
  action: string;
  incentiveType: string;
  modalArguments: Record<string, any>;
}) => {
  const { updateParams } = useQueryParams();

  return (
    <div className="flex flex-col gap-2 text-center min-w-[100px]">
      <div className="font-medium text-[25px] text-green-500">
        {aprOrApy.toFixed(2)}% {incentiveType.toUpperCase()}
      </div>

      <Button
        className="w-full"
        onClick={() =>
          updateParams({
            ...modalArguments,
          })
        }
      >
        {action}
      </Button>
    </div>
  );
};

const SuggestionCard = ({
  wrappedSuggestions,
}: {
  wrappedSuggestions: SuggestionsWrapper;
}) => {
  return (
    <Card>
      <div className="flex flex-col gap-4 items-center">
        <TokenIcon token={wrappedSuggestions.token} />
        <div className="text-xl font-semibold">
          ${formatSuffix(wrappedSuggestions.usdValue, "money")} available
        </div>
        <div className="flex flex-col sm:flex-row gap-10">
          {wrappedSuggestions.suggestions.map((suggestion) => (
            <ActionCard key={suggestion.action} {...suggestion} />
          ))}
        </div>
      </div>
    </Card>
  );
};

const Opportunities = ({
  wrappedSuggestionsList,
}: {
  wrappedSuggestionsList: SuggestionsWrapper[];
}) => (
  <div className="flex flex-col gap-4">
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <h1 className="text-primary text-lg font-semibold">Opportunities</h1>
        <Image
          src={"/icons/coins/sonic.svg"}
          alt="Chain logo"
          width={20}
          height={20}
        />
      </div>
      <div className="text-primary text-sm font-light">
        {wrappedSuggestionsList.length > 0
          ? "Suggestions to improve your portfolio."
          : "No suggestions available for your address!"}
      </div>
    </div>
    <div className="flex flex-row flex-wrap gap-4 items-center">
      {wrappedSuggestionsList.map((wrappedSuggestions) => (
        <SuggestionCard
          key={wrappedSuggestions.token.address}
          wrappedSuggestions={wrappedSuggestions}
        />
      ))}
    </div>
  </div>
);

export const GlobalSummary = ({
  summary,
}: {
  summary: {
    netValue: number;
    yearlyYield: number;
    apy: number;
  };
}) => {
  const { netValue, yearlyYield, apy } = summary;
  const wrappedSuggestionsList = useSuggestions();
  return (
    <div className="flex flex-col gap-10">
      <Recap netValue={netValue} yearlyYield={yearlyYield} apy={apy} />
      <Opportunities wrappedSuggestionsList={wrappedSuggestionsList} />
    </div>
  );
};
