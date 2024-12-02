"use client";
import { useState, useEffect } from "react";
import { PresaleBonus } from "@/lib/constants";

export const usePresaleBonus = (selectedMode: number, selectedLockTime: number) => {
    const [bonusPercent, setBonusPercent] = useState<number>(0);

    useEffect(() => {
        if (selectedMode == 1) {
            setBonusPercent(0);
        } else {
            switch (selectedLockTime) {
                case 7:
                    setBonusPercent(PresaleBonus["7"]);
                    return;
                case 12:
                    setBonusPercent(PresaleBonus["12"]);
                    return;
                case 18:
                    setBonusPercent(PresaleBonus["18"]);
                    return;
                case 24:
                    setBonusPercent(PresaleBonus["24"]);
                    return;
                default:
                    setBonusPercent(0);
                    return;
            }
        }
    }, [selectedMode, selectedLockTime])

    return bonusPercent;
};
