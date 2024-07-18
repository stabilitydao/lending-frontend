import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";
import { Button } from "./button";

export const InfoTooltip = ({ children }: { children: React.ReactNode }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <InfoIcon className="w-4 h-4 bg-primary text-foreground rounded-full" />
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">{children}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
