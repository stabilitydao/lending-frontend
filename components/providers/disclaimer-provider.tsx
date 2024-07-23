"use client";

import { useState, useEffect } from "react";
import { DisclaimerModal } from "@/components/disclaimer-modal";

export const DisclaimerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [messageAccepted, setMessageAccepted] = useState(false);

  useEffect(() => {
    const cookiesStatus = localStorage.getItem("vicuna-cookies");
    const messageStatus = localStorage.getItem("vicuna-message");

    if (cookiesStatus === "accepted" && messageStatus === "accepted") {
      setShowDisclaimer(false);
    }
  }, []);

  const handleCookiesChange = (checked: boolean) => {
    setCookiesAccepted(checked);
  };

  const handleMessageChange = (checked: boolean) => {
    setMessageAccepted(checked);
  };

  const handleContinue = () => {
    if (cookiesAccepted && messageAccepted) {
      localStorage.setItem("vicuna-cookies", "accepted");
      localStorage.setItem("vicuna-message", "accepted");
      setShowDisclaimer(false);
    }
  };

  if (showDisclaimer) {
    return (
      <DisclaimerModal
        cookiesAccepted={cookiesAccepted}
        messageAccepted={messageAccepted}
        onCookiesChange={handleCookiesChange}
        onMessageChange={handleMessageChange}
        onContinue={handleContinue}
      />
    );
  }

  return <>{children}</>;
};
