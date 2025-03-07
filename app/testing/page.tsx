"use client";
import { ALL_VAULTS, ALL_DISPLAYED_VAULTS } from "@/constants";
import { useVaultsBreakdown, useVaultsReceiptPrice } from "@/hooks";
import { useWant } from "@/hooks/vaults/useWant";

const AllVaultsLPHaveAddresses = () => {
  const vaults = ALL_VAULTS;
  const vaultsWithoutAddresses = vaults.filter(
    (vault) => vault.lp.address == "0x0"
  );
  const wantAddresses = {} as Record<string, string>;
  for (const vault of vaultsWithoutAddresses) {
    const { want } = useWant(vault);
    if (want) wantAddresses[vault.id] = want;
  }
  if (Object.keys(wantAddresses).length === 0)
    return <h1>No vaults without LP addresses!</h1>;
  return (
    <div>
      <h1>Vaults without LP addresses:</h1>
      <ul>
        {vaultsWithoutAddresses.map((vault) => (
          <li key={vault.id}>
            {vault.id}[{vault.receipt.address}]: LP address is{" "}
            {wantAddresses[vault.id]}
          </li>
        ))}
      </ul>
    </div>
  );
};

const AllVaultsHaveCorrectLPAddresses = () => {
  const vaults = ALL_VAULTS;
  let incorrects = [];
  for (const vault of vaults) {
    const { want, isWantLoading } = useWant(vault);
    if (isWantLoading) continue;
    if (
      vault.lp.address !== "0x0" &&
      vault.lp.address.toLowerCase() !== want?.toLowerCase()
    )
      incorrects.push(
        `Vault ${vault.id} has incorrect LP address: ${vault.lp.address} (should be ${want})`
      );
  }
  if (incorrects.length === 0)
    return <h1>All vaults have correct LP addresses!</h1>;
  return (
    <div>
      {incorrects.map((incorrect) => (
        <li key={incorrect}>{incorrect}</li>
      ))}
    </div>
  );
};

const AllVaultsAreAssignedAMarket = () => {
  const vaults = ALL_DISPLAYED_VAULTS;
  const incorrects = [];
  for (const vault of ALL_VAULTS) {
    if (vaults.includes(vault)) continue;
    incorrects.push(`Vault ${vault.id} is not assigned a market.`);
  }

  if (incorrects.length === 0)
    return <h1>All vaults are assigned a market!</h1>;
  return (
    <div>
      {incorrects.map((incorrect) => (
        <li key={incorrect}>{incorrect}</li>
      ))}
    </div>
  );
};

const AllOrthaeVaultsExist = () => {
  const vaults = ALL_VAULTS;
  const { vaultsBreakdown, isVaultsBreakdownLoading } = useVaultsBreakdown();
  if (isVaultsBreakdownLoading || !vaultsBreakdown) return <h1>Loading...</h1>;
  const incorrects = [];
  for (const key in vaultsBreakdown) {
    if (!vaults.find((vault) => key === vault.id))
      incorrects.push(`Vault ${key} hasn't been created!`);
  }

  if (incorrects.length === 0)
    return <h1>All vaults are assigned a market!</h1>;
  return (
    <div>
      {incorrects.map((incorrect) => (
        <li key={incorrect}>{incorrect}</li>
      ))}
    </div>
  );
};

const AllVaultsFunctionCorrectly = () => {
  const vaults = ALL_DISPLAYED_VAULTS;
  let incorrect = false;
  const { vaultsReceiptPrice, isVaultsReceiptPriceLoading } =
    useVaultsReceiptPrice(ALL_VAULTS);
  if (isVaultsReceiptPriceLoading || !vaultsReceiptPrice)
    return <h1>Loading...</h1>;

  for (const vaultDefinition of vaults) {
    if (!vaultsReceiptPrice[vaultDefinition.id].vaultReceiptPrice) {
      incorrect = true;
      break;
    }
  }
  if (!incorrect) return <h1>All vaults function correctly!</h1>;
  return (
    <div>
      Could not find receive price for vaults, one of the addresses for the
      vaults is likely wrong.
    </div>
  );
};

export default function Page() {
  return (
    <div className="relative">
      <div className="p-4 h-full rounded-lg mx-10 my-[150px] flex flex-col gap-4 bg-card p-4 rounded-lg shadow-xl text-black">
        <AllVaultsLPHaveAddresses />
        <AllVaultsHaveCorrectLPAddresses />
        <AllVaultsAreAssignedAMarket />
        <AllOrthaeVaultsExist />
        <AllVaultsFunctionCorrectly />
      </div>
    </div>
  );
}
