"use client";
import { VAULTS } from "@/constants";
import { useWant } from "@/hooks/vaults/useWant";

const AllVaultsLPHaveAddresses = () => {
  const vaults = VAULTS;
  const vaultsWithoutAddresses = vaults.filter(
    (vault) => vault.lp.address == "0x0"
  );
  const wantAddresses = {} as Record<string, string>;
  for (const vault of vaultsWithoutAddresses) {
    const { want } = useWant(vault);
    if (want) wantAddresses[vault.id] = want;
  }
  if (Object.keys(wantAddresses).length === 0)
    return <h1>No vaults without LP addresses</h1>;
  return (
    <div>
      <h1>Vaults without LP addresses:</h1>
      <ul>
        {vaultsWithoutAddresses.map((vault) => (
          <li key={vault.id}>
            {vault.id}[{vault.receipt.address}]: want is{" "}
            {wantAddresses[vault.id]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Page() {
  return (
    <div className="relative">
      <div className="p-4 h-full rounded-lg mx-10 my-[150px] flex flex-col gap-4 bg-card p-4 rounded-lg shadow-xl text-black">
        <AllVaultsLPHaveAddresses />
      </div>{" "}
    </div>
  );
}
