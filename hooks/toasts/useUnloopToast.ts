import { Token } from "@/constants";
import { useToast } from "@/hooks";

export type UnloopToastProps = {
  amount: string;
  token: Token;
};
export const useUnloopToast = (props: UnloopToastProps) => {
  const { amount, token } = props;

  const { pending, success, error } = useToast({
    action: "Deleverage",
    descriptions: {
      pending: `Deleveraging your ${amount} ${token.name}, please wait.`,
      success: `Deleveraged your ${amount} ${token.name}!`,
      error: `The ${token.name} deleveraring failed`,
    },
  });

  return {
    pendingUnloopToast: pending,
    successUnloopToast: success,
    errorUnloopToast: error,
  };
};
