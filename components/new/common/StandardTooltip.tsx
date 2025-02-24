import * as React from "react";
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
}) => {
  const [open, setOpen] = React.useState(false);

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();
    setOpen((prev) => !prev);
  }

  return (
    <TooltipProvider>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          {/* asChild lets us wrap your icon in a button (to handle click events) */}
          <button onClick={handleClick}>
            <Question className="w-3 h-3 rounded-full" />
          </button>
        </TooltipTrigger>
        <TooltipContent className="w-full p-4">{children}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
