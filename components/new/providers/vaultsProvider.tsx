"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { DEFAULT_VAULTS_ID, VAULT_GROUPS, VaultDefinition } from "@/constants";

interface VaultsContextType {
  vaultsID: string;
  vaultDefinitions: VaultDefinition[];
  availableVaults: string[];
  setVaultsID: (id: string) => void;
}

const SelectedVaultsContext = createContext<VaultsContextType | undefined>(
  undefined
);

export const VaultsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [vaultsID, setVaultsID] = useState<string>(() => {
    let vaultsID = localStorage.getItem("vaultsID");
    return !vaultsID || !VAULT_GROUPS[vaultsID] ? DEFAULT_VAULTS_ID : vaultsID;
  });

  useEffect(() => {
    localStorage.setItem("vaultsID", vaultsID);
  }, [vaultsID]);

  const availableVaults = Object.keys(VAULT_GROUPS);
  const vaultDefinitions = VAULT_GROUPS[vaultsID];

  return (
    <SelectedVaultsContext.Provider
      value={{ vaultsID, vaultDefinitions, availableVaults, setVaultsID }}
    >
      {children}
    </SelectedVaultsContext.Provider>
  );
};

export const contextUseSelectedVaults = (): VaultsContextType => {
  const context = useContext(SelectedVaultsContext);
  if (!context) {
    throw new Error("useVaults must be used within a VaultsProvider");
  }
  return context;
};
