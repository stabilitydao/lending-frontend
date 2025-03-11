import { useToast } from "@/hooks";

export const useOdosQuoteToast = () => {
  const { error } = useToast({
    action: "Odos Quote",
    descriptions: {
      pending: ``,
      success: ``,
      error: `Odos Quote failed with error: `,
    },
  });

  return {
    odosQuoteError: error,
  };
};
