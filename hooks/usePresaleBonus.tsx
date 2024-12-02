"use client";
import { useState, useEffect } from "react";
import { PresaleBonus } from "@/lib/constants";

export const usePresaleBonus = (selectedMode: number, selectedLockTime: number) => {
    const [bonusPercent, setBonusPercent] = useState<number>(0);

    useEffect(() => {
        if (selectedMode == 1) {
            setBonusPercent(PresaleBonus["0"]);
        } else {
            switch (selectedLockTime) {
                case 7:
                    setBonusPercent(selectedMode == 2 ? PresaleBonus["7"][0] : PresaleBonus["7"][1]);
                    return;
                case 12:
                    setBonusPercent(selectedMode == 2 ? PresaleBonus["12"][0] : PresaleBonus["12"][1]);
                    return;
                case 18:
                    setBonusPercent(selectedMode == 2 ? PresaleBonus["18"][0] : PresaleBonus["18"][1]);
                    return;
                case 24:
                    setBonusPercent(selectedMode == 2 ? PresaleBonus["24"][0] : PresaleBonus["24"][1]);
                    return;
                default:
                    setBonusPercent(0);
                    return;
            }
        }
    }, [selectedMode, selectedLockTime])

    return bonusPercent;
};
