"use client";

import { useSelectedVaults } from "@/hooks";

export const VaultsSelector = () => {
  const { vaultsID, availableVaults, setVaultsID } = useSelectedVaults();

  if (availableVaults.length <= 1) return null;

  return (
    <div className="flex items-center justify-center bg-card text-secondary-foreground rounded-[var(--radius)] p-2 space-x-2">
      {availableVaults.map((id) => (
        <button
          key={id}
          onClick={() => setVaultsID(id)}
          className={`px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
            vaultsID === id
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-transparent text-primary hover:bg-primary/20"
          }`}
        >
          {id}
        </button>
      ))}
    </div>
  );
};
