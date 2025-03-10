import * as React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const WrapIntoTooltip = ({
  children,
  content,
  enable = false,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
  enable?: boolean;
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <TooltipProvider>
      <Tooltip
        open={open}
        onOpenChange={(s: boolean) => (enable ? setOpen(s) : undefined)}
      >
        <TooltipTrigger className="w-full">{children}</TooltipTrigger>
        <TooltipContent className="w-full p-4">{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
