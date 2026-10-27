import { CtaFinal } from "@/components/secoes/cta-final";
import { Diferenciais } from "@/components/secoes/diferenciais";
import { Experiencia } from "@/components/secoes/experiencia";
import { Header } from "@/components/secoes/header";
import { Hero } from "@/components/secoes/hero";
import { Instagram } from "@/components/secoes/instagram";
import { Localizacao } from "@/components/secoes/localizacao";
import { Perguntas } from "@/components/secoes/perguntas";
import { Produtos } from "@/components/secoes/produtos";
import { ResumoMarca } from "@/components/secoes/resumo-marca";
import { Rodape } from "@/components/secoes/rodape";
import { Sobre } from "@/components/secoes/sobre";
import { WhatsAppFlutuante } from "@/components/secoes/whatsapp-flutuante";

export default function Inicio() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <ResumoMarca />
        <Sobre />
        <Produtos />
        <Diferenciais />
        <Experiencia />
        <Instagram />
        <Localizacao />
        <Perguntas />
        <CtaFinal />
      </main>
      <Rodape />
      <WhatsAppFlutuante />
    </>
  );
}
