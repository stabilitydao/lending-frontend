"use client";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useSelectedMarket } from "@/hooks";

export const LoopingButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex justify-center">
      <Button
        onClick={onClick}
        variant="default"
        className="bg-primary w-[100px] flex flex-row items-center justify-center"
      >
        <Image
          src={"/icons/infinity.svg"}
          alt="Infinity"
          width={40}
          height={40}
        />
      </Button>
    </div>
  );
};

export const LoopingModal = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  const { marketDefinition } = useSelectedMarket();
  return (
    <Dialog
      open={isVisible}
      onOpenChange={(open: boolean) => {
        if (!open) onClose();
      }}
    >
      <VisuallyHidden>
        <DialogTitle>Perform deposit or withdraw on a vault</DialogTitle>
      </VisuallyHidden>

      <DialogContent
        autoFocus={false}
        className="bg-card text-primary overflow-y-auto select-none"
      >
        <div tabIndex={0} aria-hidden="true" />
        <div className="relative w-full flex items-center justify-center">
          <div className="flex items-center gap-1 transform -translate-x-2">
            <Image
              src={"/icons/infinity.svg"}
              alt="Infinity"
              width={40}
              height={40}
            />
            <div className="text-2xl font-bold text-black">Looping</div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <Image
            src="/logo.svg"
            alt="Background Logo"
            className="opacity-10"
            width={500}
            height={500}
          />
        </div>
        <div className="relative z-10">
          <DialogHeader>
            <div className="text-sm flex flex-col gap-8 pt-10 text-primary">
              ???
            </div>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
};
