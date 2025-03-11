import { Token } from "@/constants";
import { useToast } from "@/hooks";

export type LoopToastProps = {
  amount: string;
  token: Token;
};
export const useLoopToast = (props: LoopToastProps) => {
  const { amount, token } = props;

  const { pending, success, error } = useToast({
    action: "Leverage",
    descriptions: {
      pending: `Leveraging your ${amount} ${token.name}, please wait.`,
      success: `Leveraged your ${amount} ${token.name}!`,
      error: `The ${token.name} leveraring failed`,
    },
  });

  return {
    pendingLoopToast: pending,
    successLoopToast: success,
    errorLoopToast: error,
  };
};
