"use client";

import { useState, useEffect } from "react";
import { DisclaimerModal } from "@/components/disclaimer-modal";
import { useCookies } from "next-client-cookies";

export const DisclaimerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const cookies = useCookies();
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [messageAccepted, setMessageAccepted] = useState(false);
  const THIRTY_DAYS_IN_SECONDS = 30 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    const cookiesStatus = cookies.get("vicuna-cookies");
    const messageStatus = cookies.get("vicuna-message");

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
      cookies.set("vicuna-cookies", "accepted", {
        expires: new Date(Date.now() + THIRTY_DAYS_IN_SECONDS),
      });
      cookies.set("vicuna-message", "accepted", {
        expires: new Date(Date.now() + THIRTY_DAYS_IN_SECONDS),
      });
      setShowDisclaimer(false);
    }
  };

  return (
    <>
      {children}
      {showDisclaimer && (
        <div className="fixed inset-0 backdrop-blur-[2px] flex items-center justify-center z-50">
          <DisclaimerModal
            cookiesAccepted={cookiesAccepted}
            messageAccepted={messageAccepted}
            onCookiesChange={handleCookiesChange}
            onMessageChange={handleMessageChange}
            onContinue={handleContinue}
          />
        </div>
      )}
    </>
  );
};
