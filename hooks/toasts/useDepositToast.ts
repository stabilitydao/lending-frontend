import { Token } from "@/constants";
import { useToast } from "@/hooks";

export type DepositToastProps = {
  amount: string;
  token: Token;
};
export const useDepositToast = (props: DepositToastProps) => {
  const { amount, token } = props;

  const { pending, success, error } = useToast({
    action: "Depositing",
    descriptions: {
      pending: `Depositing ${amount} ${token.name}, please wait.`,
      success: `Successfully deposited ${amount} ${token.name}!`,
      error: `The ${token.name} depositing failed`,
    },
  });

  return {
    pendingDepositToast: pending,
    successDepositToast: success,
    errorDepositToast: error,
  };
};
