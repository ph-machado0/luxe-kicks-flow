import { createFileRoute, Link } from "@tanstack/react-router";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a marca | SNKRS" },
      {
        name: "description",
        content:
          "A SNKRS nasceu para provar que um catálogo pequeno, bem escolhido, vale mais que uma vitrine cheia.",
      },
      { property: "og:title", content: "Sobre a marca | SNKRS" },
      {
        property: "og:description",
        content: "Menos peças, mais critério. Conheça a essência da SNKRS.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="container-x pt-40 pb-28">
      <PageHeader eyebrow="Nossa Essência" title="Sobre" />

      <div className="mt-20 grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Somos uma marca dedicada exclusivamente a tênis. Nenhuma outra categoria, nenhuma
            dispersão. Isso nos permite conhecer profundamente cada construção, cada material e cada
            detalhe de acabamento que colocamos à venda.
          </p>
          <p className="mt-8 leading-relaxed text-muted-foreground">
            Trabalhamos com séries curtas e atendimento próximo. Cada pedido passa por uma conversa
            real — sem carrinho abandonado, sem ruído.
          </p>
          <Link
            to="/contato"
            className="soft mt-12 inline-flex bg-primary px-9 py-4 font-display text-[0.6875rem] tracking-[0.28em] text-primary-foreground uppercase hover:opacity-90"
          >
            Falar com a equipe
          </Link>
        </Reveal>
        <Reveal delay={120}>
          <Placeholder label="Atelier" ratio="16 / 11" className="w-full" />
        </Reveal>
      </div>
    </div>
  );
}
