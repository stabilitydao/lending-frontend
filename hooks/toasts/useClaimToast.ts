import { useToast } from "@/hooks";

export const useClaimToast = () => {
  const { pending, success, error } = useToast({
    action: "Claim",
    descriptions: {
      pending: `Claiming, please wait.`,
      success: `Successfully claimed!`,
      error: `The claim failed`,
    },
  });

  return {
    pendingClaimToast: pending,
    successClaimToast: success,
    errorClaimToast: error,
  };
};
