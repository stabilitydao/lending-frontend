"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DisclaimerModalProps {
  onContinue: () => void;
}

export const DisclaimerModal = ({ onContinue }: DisclaimerModalProps) => {
  return (
    <Dialog open={true}>
      <DialogContent className="bg-card text-primary">
        <DialogHeader>
          <DialogTitle className="text-center py-10 text-white">
            Disclaimer Notice
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="text-[#A3A4A6] text-[18px] leading-6 font-medium flex flex-col gap-4">
            <p>
              Please read this disclaimer carefully before interacting with the
              protocol. <br />
              <br />
              By accessing or using this decentralized finance (DeFi) and yield
              farming protocol ("Stability DAO"), you acknowledge and agree to
              the following terms:
            </p>
            <p className="flex flex-col gap-2">
              <span className="text-white text-[18px] leading-6 font-semibold">
                No Financial Advice
              </span>
              <span>
                Stability DAO does not provide financial, legal, or tax advice.
                All information and materials provided are for general
                informational purposes only. You should conduct your own
                research and consult with professional advisors before making
                any financial decisions.
              </span>
            </p>
            <p className="flex flex-col gap-2">
              <span className="text-white text-[18px] leading-6 font-semibold">
                User Responsibility
              </span>
              <span>
                You are solely responsible for evaluating and bearing the risks
                associated with the use of Stability DAO. This includes but is
                not limited to risks of loss of funds, impermanent loss, smart
                contract vulnerabilities, liquidation, market volatility, and
                other technical or economic risks inherent to DeFi ecosystems.
              </span>
            </p>
            <p className="flex flex-col gap-2">
              <span className="text-white text-[18px] leading-6 font-semibold">
                No Guarantees or Warranties
              </span>
              <span>
                Stability DAO is provided "as is" and "as available" without
                warranties of any kind, either expressed or implied. We do not
                guarantee the security, reliability, performance, or accuracy of
                Stability DAO. Interacting with smart contracts carries risk,
                and you assume full responsibility for any outcomes.
              </span>
            </p>
            <p className="flex flex-col gap-2">
              <span className="text-white text-[18px] leading-6 font-semibold">
                Smart Contract Risk
              </span>
              <span>
                Stability DAO relies on smart contracts deployed on public
                blockchains. These contracts are subject to potential bugs,
                exploits, or vulnerabilities. Even if contracts have been
                audited, there is no guarantee that they are completely free of
                defects. Use at your own risk.
              </span>
            </p>
            <p className="flex flex-col gap-2">
              <span className="text-white text-[18px] leading-6 font-semibold">
                Regulatory Uncertainty
              </span>
              <span>
                The regulatory status of DeFi protocols and tokens remains
                uncertain in many jurisdictions. It is your responsibility to
                ensure that your use of Stability DAO is compliant with the laws
                and regulations applicable to you.
              </span>
            </p>
            <p className="flex flex-col gap-2">
              <span className="text-white text-[18px] leading-6 font-semibold">
                Limitation of Liability
              </span>
              <span>
                To the maximum extent permitted by law, the creators,
                developers, contributors, and affiliates of Stability DAO shall
                not be held liable for any direct, indirect, incidental,
                special, consequential, or exemplary damages—including loss of
                funds, data, or profits—arising out of or in connection with
                your use of or inability to use Stability DAO.
              </span>
            </p>
            <p className="flex flex-col gap-2">
              <span className="text-white text-[18px] leading-6 font-semibold">
                Use at Your Own Risk
              </span>
              <span>
                Use at Your Own Risk By using Stability DAO, you acknowledge
                that you fully understand the risks involved and agree to assume
                full responsibility for any and all consequences, including
                potential loss of funds. You use this Protocol entirely at your
                own risk.
              </span>
            </p>
            <p>
              If you do not agree with any part of this disclaimer, do not use
              Stability DAO.
            </p>
          </div>
        </DialogDescription>
        <DialogFooter className="py-4">
          <Button className="w-full" onClick={onContinue}>
            Got It
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
