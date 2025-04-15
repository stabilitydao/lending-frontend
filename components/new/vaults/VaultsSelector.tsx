"use client";

import { useSelectedVaults } from "@/hooks";

export const VaultsSelector = () => {
  const { vaultsID, availableVaults, setVaultsID } = useSelectedVaults();

  if (availableVaults.length <= 1) return null;

  return (
    <div className="flex items-center justify-center bg-accent-900 text-accent-400 rounded-[var(--radius)] p-1 space-x-2">
      {availableVaults.map((id) => (
        <button
          key={id}
          onClick={() => setVaultsID(id)}
          className={`px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
            vaultsID === id ? "bg-accent-500 text-white" : "text-accent-400"
          }`}
        >
          {id}
        </button>
      ))}
    </div>
  );
};
