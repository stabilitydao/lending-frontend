import { Question } from "@/components/icons/question";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const StandardTooltip = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <Question className="w-3 h-3 rounded-full" />
      </TooltipTrigger>
      <TooltipContent className="w-full p-4">{children}</TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
