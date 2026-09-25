"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * "Aberto agora" calculado no fuso de Campos (America/Sao_Paulo), a partir do
 * horário do Google. Só aparece depois de montar no navegador: no HTML do
 * servidor não há como saber a hora de quem visita, e um valor errado em
 * cache seria pior do que nenhum.
 */

// 0 = domingo … 6 = sábado. [abre, fecha] em minutos desde 0h.
const GRADE: Record<number, [number, number] | null> = {
  0: null,
  1: [480, 1200],
  2: [480, 1200],
  3: [480, 1200],
  4: [480, 1200],
  5: [480, 1200],
  6: [480, 780],
};

const DIAS = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

function agoraEmCampos() {
  const partes = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const valor = (tipo: string) => partes.find((p) => p.type === tipo)?.value ?? "0";
  const dia = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(valor("weekday"));
  return { dia, minutos: Number(valor("hour")) * 60 + Number(valor("minute")) };
}

const hora = (min: number) => `${Math.floor(min / 60)}h${min % 60 ? String(min % 60).padStart(2, "0") : ""}`;

function calcular() {
  const { dia, minutos } = agoraEmCampos();
  const hoje = GRADE[dia];
  if (hoje && minutos >= hoje[0] && minutos < hoje[1]) {
    return { aberto: true, texto: `Aberto agora · fecha às ${hora(hoje[1])}` };
  }
  if (hoje && minutos < hoje[0]) {
    return { aberto: false, texto: `Fechado · abre hoje às ${hora(hoje[0])}` };
  }
  for (let i = 1; i <= 7; i++) {
    const d = (dia + i) % 7;
    const grade = GRADE[d];
    if (grade) {
      const quando = i === 1 ? "amanhã" : DIAS[d];
      return { aberto: false, texto: `Fechado · abre ${quando} às ${hora(grade[0])}` };
    }
  }
  return null;
}

export function StatusAgora({ className }: { className?: string }) {
  const [status, setStatus] = useState<ReturnType<typeof calcular>>(null);

  useEffect(() => {
    const atualizar = () => setStatus(calcular());
    atualizar();
    const id = window.setInterval(atualizar, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!status) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold",
        status.aberto ? "bg-folha/15 text-folha-texto" : "bg-grafite/8 text-grafite-2",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-2 rounded-full",
          status.aberto ? "bg-folha motion-safe:animate-pulse" : "bg-cinza",
        )}
      />
      {status.texto}
    </span>
  );
}
