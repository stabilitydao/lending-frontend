"use client";

import { useCallback } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";
import { useState } from "react";
import Image from "next/image";
import { Deposit } from "@/components/icons/deposit";
import { Withdraw } from "@/components/icons/withdraw";
import { ExternalLinkIcon, RefreshCw } from "lucide-react";
import { MarketInfo, QueryValue } from "@/types";
import {
  useBorrow,
  useMarket,
  useQueryParams,
  useRepay,
  useSearch,
  useSelectedMarket,
  useSupply,
  useWithdraw,
} from "@/hooks";
import { minBn } from "@/helpers";
import { BaseActionForm } from "@/components";
import Link from "next/link";
import {
  DEFAULT_MARKET_ID,
  getTokenByAddress,
  MARKET_DEFINITIONS,
  Token,
} from "@/constants";
import { DoubleAvatar } from "@/components/ui/double-avatar";

export interface MarketModalProps {
  token: Token;
  setSelectedToken: (token: Token) => void;
  defaultIsBorrow?: boolean;
  isVisible: boolean;
  onClose?: () => void;
}

interface FormProps {
  token: Token;
  market: MarketInfo;
  marketID: string;
}

const SupplyForm = ({ token, market, marketID }: FormProps) => {
  const {
    amount,
    setAmount,
    balance,
    supplyCap,
    hasEnoughAllowance,
    supply,
    approve,
    isPending,
    isApprovePending,
    isConfirming,
    isApproveConfirming,
    displayData,
  } = useSupply(marketID, token);

  return (
    <BaseActionForm
      token={token}
      market={market}
      title="Supply"
      amount={amount}
      onChangeAmount={setAmount}
      balance={minBn(balance, supplyCap)}
      hasEnoughAllowance={hasEnoughAllowance}
      onAction={supply}
      onApprove={approve}
      isActionPending={isPending || isConfirming}
      isApproving={isApprovePending || isApproveConfirming}
      actionIcon={Deposit}
      displayData={displayData}
      healthBarDefinition={MARKET_DEFINITIONS[marketID].healthBar}
    />
  );
};

const WithdrawForm = ({ token, market, marketID }: FormProps) => {
  const {
    amount,
    setAmount,
    balance,
    withdraw,
    isPending,
    isConfirming,
    displayData,
  } = useWithdraw(marketID, token);

  return (
    <BaseActionForm
      token={token}
      market={market}
      title="Withdraw"
      amount={amount}
      onChangeAmount={setAmount}
      balance={balance}
      hasEnoughAllowance={true}
      onAction={withdraw}
      isActionPending={isPending || isConfirming}
      isApproving={false}
      actionIcon={Withdraw}
      onApprove={() => 0}
      displayData={displayData}
      healthBarDefinition={MARKET_DEFINITIONS[marketID].healthBar}
    />
  );
};

const BorrowForm = ({ token, market, marketID }: FormProps) => {
  const {
    amount,
    setAmount,
    maxBorrow,
    borrow,
    isPending,
    isConfirming,
    displayData,
  } = useBorrow(marketID, token);

  return (
    <BaseActionForm
      token={token}
      market={market}
      title="Borrow"
      amount={amount}
      onChangeAmount={setAmount}
      balance={maxBorrow}
      hasEnoughAllowance={true}
      onAction={borrow}
      isActionPending={isPending || isConfirming}
      isApproving={false}
      actionIcon={Withdraw}
      onApprove={() => 0}
      displayData={displayData}
      healthBarDefinition={MARKET_DEFINITIONS[marketID].healthBar}
    />
  );
};

const RepayForm = ({ token, market, marketID }: FormProps) => {
  const {
    amount,
    setAmount,
    balance,
    maxDebt,
    hasEnoughAllowance,
    repay,
    approve,
    isPending,
    isApprovePending,
    isConfirming,
    isApproveConfirming,
    displayData,
  } = useRepay(marketID, token);

  return (
    <BaseActionForm
      token={token}
      market={market}
      title="Repay"
      amount={amount}
      onChangeAmount={setAmount}
      balance={minBn(balance, maxDebt)}
      hasEnoughAllowance={hasEnoughAllowance}
      onAction={repay}
      onApprove={approve}
      isActionPending={isPending}
      isApproving={false}
      actionIcon={Deposit}
      displayData={displayData}
      healthBarDefinition={MARKET_DEFINITIONS[marketID].healthBar}
    />
  );
};

const StyledTrigger = ({ value }: { value: string }) => (
  <TabsTrigger
    value={value}
    className="w-full text-lg data-[state=active]:bg-background data-[state=active]:text-primary bg-transparent h-12 shadow-none rounded-none border-b-0 border-l-0 border-r-0 border-t-2 border-t-transparent data-[state=inactive]:border-t-background"
  >
    {value.charAt(0).toUpperCase() + value.slice(1)}
  </TabsTrigger>
);

const ActiveTabSelector = ({
  options,
  mode,
  setMode,
}: {
  options: string[];
  mode: string;
  setMode: (mode: QueryValue) => void;
}) => {
  return (
    <Tabs className="w-full h-12 bg-card" value={mode} onValueChange={setMode}>
      <TabsList
        className="grid w-full p-0 gap-0"
        style={{
          gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))`,
        }}
      >
        {options.map((option) => (
          <StyledTrigger key={option} value={option} />
        ))}
      </TabsList>
    </Tabs>
  );
};

export const MarketModal = () => {
  const { params, updateParams } = useQueryParams();
  const { modal, token, mode, market } = params;
  const pathname = usePathname();

  if (modal !== "market" || !token) return null;
  // if (market == "stables" || market == "sonic") return null;

  const selectedToken = getTokenByAddress(token);
  if (!selectedToken) return null;
  return (
    <InnerMarketModal
      token={selectedToken}
      mode={mode || "supply"}
      updateParams={updateParams}
      fullReplace={pathname != "/markets"}
    />
  );
};

export const InnerMarketModal = ({
  token,
  mode,
  updateParams,
  fullReplace,
}: {
  token: Token;
  mode: string;
  updateParams: (params: Record<string, QueryValue>) => void;
  fullReplace?: boolean;
}) => {
  const { marketID } = useSelectedMarket();

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () =>
    updateParams({
      modal: null,
      token: null,
      mode: null,
      ...(fullReplace ? { market: null } : {}),
    });

  const toggleWrappedNativeToken = useCallback(() => {
    if (token.wrapperToken?.wrappedToken?.isNative) {
      updateParams({ token: token.wrapperToken.address });
    } else if (token.wrappedToken?.isNative) {
      updateParams({ token: token.wrappedToken.address });
    }
  }, [token]);

  const { market, isMarketLoading } = useMarket(marketID, token);
  const { setSearchQuery } = useSearch("vaults");

  if (isMarketLoading || !market) return null;

  const isVault = !!token.pair;
  const shouldDisplaySwitch = token.isNative || token.wrappedToken?.isNative;

  return (
    <Dialog onOpenChange={(open: boolean) => !open && handleClose()} open>
      <VisuallyHidden>
        <DialogDescription>
          Perform supply, borrow, and repay actions
        </DialogDescription>
      </VisuallyHidden>
      <DialogContent
        autoFocus={false}
        className="bg-card text-primary overflow-y-auto pt-12 select-none"
      >
        <div tabIndex={0} aria-hidden="true" />
        {isVault && (
          <div className="absolute left-5 top-5">
            <Image src={token.icon} alt="Vault Icon" width={30} height={30} />
          </div>
        )}
        {!isVault && !shouldDisplaySwitch && (
          <div className="absolute left-5 top-5">
            <Image
              src="/logo.svg"
              alt="Vicuna Finance"
              width={30}
              height={30}
            />
          </div>
        )}
        {shouldDisplaySwitch && (
          <Button
            className="w-[160px] z-[999] absolute left-6 top-4 items-center justify-center gap-2"
            onClick={toggleWrappedNativeToken}
          >
            <RefreshCw className="w-5 h-5" />
            {token.isNative ? "Use Wrapped" : "Use Native"}
          </Button>
        )}
        <div className="absolute right-5 top-6">
          {token.pair ? (
            <>
              <button
                onClick={() => setIsOpen(true)}
                className="absolute right-0 mr-4 flex items-center gap-2 text-primary"
              >
                Get
                <ExternalLinkIcon className="w-4 h-4" />
              </button>
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="w-[400px]">
                  <DialogHeader>
                    <DialogTitle>Supplying a vault-backed Market</DialogTitle>
                  </DialogHeader>
                  <DialogDescription>
                    <ol className="list-decimal list-inside mt-2 text-white">
                      <li>
                        Go to{" "}
                        <Link
                          href={token.buyLink}
                          target="_blank"
                          className="text-blue-500 underline"
                        >
                          this link
                        </Link>{" "}
                        and create some LP{" "}
                        <span className="font-bold underline text-red-500">
                          (be sure to check "do not stake LP" if you are using
                          SwapX)
                        </span>
                        <br />
                        Note that on ICHI you must deposit{" "}
                        {token.pair![0].symbol} to receive the proper LP.
                      </li>
                      <li>
                        Deposit the LP in the corresponding{" "}
                        <Link
                          href="/vaults"
                          target="_blank"
                          className="text-blue-500 underline"
                          onClick={() => {
                            setSearchQuery(token.name);
                          }}
                        >
                          vault
                        </Link>
                        .
                      </li>
                      <li>
                        You can now use your vault shares to supply this market.
                      </li>
                    </ol>
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </>
          ) : (
            <Link
              href={token.buyLink}
              target="_blank"
              className="absolute right-0 mr-4 flex items-center gap-2"
            >
              Get
              <ExternalLinkIcon className="w-4 h-4 text-primary" />
            </Link>
          )}
        </div>

        <div className="relative w-full flex items-center justify-center mt-6">
          <div className={`flex items-center ${isVault ? "gap-8" : "gap-4"}`}>
            {isVault ? (
              <DoubleAvatar
                firstSrc={token.pair![0].icon}
                secondSrc={token.pair![1].icon}
                firstAlt={token.pair![0].symbol}
                secondAlt={token.pair![1].symbol}
              />
            ) : (
              <Image src={token.icon} alt="logo" width={35} height={35} />
            )}
            <div className="flex flex-col items-start gap-2">
              <span className="text-sm font-semibold">{token.name}</span>
              <span className="text-xs font-light">{token.symbol}</span>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <DialogHeader>
            <DialogTitle className="flex">
              <ActiveTabSelector
                options={["supply", "withdraw", "borrow", "repay"]}
                mode={mode}
                setMode={(mode) => updateParams({ mode })}
              />
            </DialogTitle>
            <div className="text-sm flex flex-col gap-8 pt-10 text-primary">
              {mode == "supply" && (
                <SupplyForm token={token} market={market} marketID={marketID} />
              )}
              {mode == "withdraw" && (
                <WithdrawForm
                  token={token}
                  market={market}
                  marketID={marketID}
                />
              )}
              {mode == "borrow" && (
                <BorrowForm token={token} market={market} marketID={marketID} />
              )}
              {mode == "repay" && (
                <RepayForm token={token} market={market} marketID={marketID} />
              )}
            </div>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
};
