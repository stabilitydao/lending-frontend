import { MarketProvider, SearchProvider, VaultsProvider } from "@/components";
import { DisclaimerProvider } from "@/components/providers/disclaimer-provider";
import { Web3Provider } from "@/components/providers/web3-provider";

export const ProvidersWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Web3Provider>
      <DisclaimerProvider>
        <MarketProvider>
          <VaultsProvider>
            <SearchProvider>{children}</SearchProvider>
          </VaultsProvider>
        </MarketProvider>
      </DisclaimerProvider>
    </Web3Provider>
  );
};
