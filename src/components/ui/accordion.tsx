"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * Accordion do shadcn/ui (Radix), com a pele da Skin Shape.
 * O conteúdo usa forceMount: as respostas ficam no HTML mesmo fechadas
 * (escondidas por CSS), então buscadores leem o FAQ inteiro. Com forceMount
 * o Radix não esconde nada sozinho, por isso o data-[state=closed]:hidden.
 */
export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({
  className,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn("border-b border-grafite/12", className)}
      {...props}
    />
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header asChild>
      <h3>
        <AccordionPrimitive.Trigger
          className={cn(
            "group flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg font-semibold tracking-[-0.015em] transition-colors hover:text-petroleo sm:text-xl",
            className,
          )}
          {...props}
        >
          {children}
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-grafite/15 transition-[transform,background-color,color,border-color] duration-500 ease-saida group-hover:border-petroleo group-data-[state=open]:rotate-45 group-data-[state=open]:border-petroleo group-data-[state=open]:bg-petroleo group-data-[state=open]:text-branco">
            <Plus className="size-4" aria-hidden="true" />
          </span>
        </AccordionPrimitive.Trigger>
      </h3>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      forceMount
      className="overflow-hidden data-[state=closed]:hidden data-[state=open]:animate-[acordeao-abre_420ms_var(--ease-saida)]"
      {...props}
    >
      <div className={cn("max-w-2xl pb-7 leading-relaxed text-grafite-2", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}
