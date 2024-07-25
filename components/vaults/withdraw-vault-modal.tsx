"use client";

import { useAccount } from "wagmi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VaultData } from "@/types/vault";
import { ExternalLinkIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { InfoTooltip } from "@/components/ui/info-tooltip";
import { PercentageBar } from "@/components/ui/percentage-bar";
import { DoubleAvatar } from "@/components/ui/double-avatar";

export const WithdrawVaultModal = ({ vault }: { vault: VaultData }) => {
  const { isDisconnected } = useAccount();
  return (
    <Dialog>
      <DialogTrigger>
        <Button disabled={isDisconnected}>Withdraw</Button>
      </DialogTrigger>
      <DialogContent className="bg-card text-primary">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-6 pb-10">
            <DoubleAvatar
              firstSrc={vault?.imageSrc1!}
              secondSrc={vault?.imageSrc2!}
              firstAlt={vault?.vaultName!}
              secondAlt={vault?.vaultName!}
            />{" "}
            Withdraw from {vault?.vaultName} Vault
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <span>Withdraw</span>
              <span className="flex items-center gap-2">
                Break Liquidity{" "}
                <ExternalLinkIcon className="w-4 h-4 text-primary" />
              </span>
            </div>
            <div className="flex flex-col gap-2 pt-8">
              <span>Available: 0</span>
              <div className="relative flex items-center">
                <Button
                  size={"sm"}
                  className="absolute left-2 h-6 z-10 bg-purple-300 text-primary"
                >
                  MAX
                </Button>
                <Input
                  className="bg-primary text-right text-accent rounded-2xl pl-16 pr-32"
                  placeholder="$0.00"
                />
                <div className="absolute right-2 flex items-center">
                  <Badge variant="accent" className="rounded-lg">
                    {vault.vaultName}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <PercentageBar
                onChange={(percentage) => console.log(percentage)}
              />
            </div>
            <div className="flex flex-col gap-2 border border-background text-xs rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  Deposit Fee{" "}
                  <InfoTooltip>
                    The fee is deducted from the deposit amount and added to the
                    vault.
                  </InfoTooltip>{" "}
                </span>
                <span>0%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  Withdrawal Fee
                  <InfoTooltip>
                    The fee is deducted from the withdrawal amount and added to
                    the vault.
                  </InfoTooltip>
                </span>
                <span>0%</span>
              </div>
              <p className="text-xs">
                The displayed APY accounts for performance fee{" "}
                <InfoTooltip>
                  The fee is deducted from the withdrawal amount and added to
                  the vault.
                </InfoTooltip>{" "}
                that is deducted from the generated yield only.
              </p>
            </div>
            <Button>Withdraw</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
