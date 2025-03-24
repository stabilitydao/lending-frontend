import {
  QueryParamsProvider,
  SearchProvider,
  VaultsProvider,
} from "@/components";
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
        <VaultsProvider>
          <QueryParamsProvider>
            <SearchProvider>{children}</SearchProvider>
          </QueryParamsProvider>
        </VaultsProvider>
      </DisclaimerProvider>
    </Web3Provider>
  );
};
