"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * Sheet do shadcn/ui (Radix Dialog), reduzido ao que o menu mobile usa.
 * O Radix cuida do foco preso, do Esc, do scroll travado e do aria-modal.
 */
export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;
export const SheetTitle = Dialog.Title;
export const SheetDescription = Dialog.Description;

export function SheetContent({
  className,
  children,
  ...props
}: ComponentProps<typeof Dialog.Content>) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-grafite/40 backdrop-blur-[2px] data-[state=closed]:animate-[sheet-fade-out_200ms_ease-in] data-[state=open]:animate-[sheet-fade-in_300ms_ease-out]" />
      <Dialog.Content
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-papel shadow-2 outline-none",
          "data-[state=closed]:animate-[sheet-out_240ms_var(--ease-suave)] data-[state=open]:animate-[sheet-in_420ms_var(--ease-saida)]",
          className,
        )}
        {...props}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
