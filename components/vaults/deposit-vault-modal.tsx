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

export const DepositVaultModal = ({ vault }: { vault: VaultData }) => {
  const { isDisconnected } = useAccount();
  return (
    <Dialog>
      <DialogTrigger>
        <Button disabled={isDisconnected}>Deposit</Button>
      </DialogTrigger>
      <DialogContent className="bg-card text-primary">
        <DialogHeader>
          <DialogTitle className="justify-start text-left pb-8">
            Deposit to {vault?.vaultName} Vault
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <span>Deposit</span>
              <span className="flex items-center gap-2">
                Add Liquidity{" "}
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
            <Button>Deposit</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
