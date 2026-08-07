import { createFileRoute, Link } from "@tanstack/react-router";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { categories } from "@/lib/shop";

export const Route = createFileRoute("/colecoes")({
  head: () => ({
    meta: [
      { title: "Coleções | SNKRS" },
      {
        name: "description",
        content:
          "Coleções SNKRS organizadas por uso: lifestyle, corrida, basquete, skate, casual e lançamentos.",
      },
      { property: "og:title", content: "Coleções | SNKRS" },
      {
        property: "og:description",
        content: "Coleções organizadas por uso, do lifestyle à alta performance.",
      },
    ],
  }),
  component: ColecoesPage,
});

function ColecoesPage() {
  return (
    <div className="container-x pt-40 pb-28">
      <PageHeader
        eyebrow="Curadoria"
        title="Coleções"
        description="Cada coleção reúne modelos com propósito e construção semelhantes."
      />
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <Reveal key={cat.slug} delay={i * 70}>
            <Link
              to="/sneakers"
              className="group soft block border border-border bg-card/30 hover:border-primary/40"
            >
              <div className="zoom-soft">
                <Placeholder label={cat.name} ratio="4 / 3" className="border-0" />
              </div>
              <div className="flex items-center justify-between p-7">
                <h2 className="display-xl text-xl">{cat.name}</h2>
                <span className="soft font-display text-[0.625rem] tracking-[0.28em] text-primary uppercase group-hover:translate-x-1">
                  Ver
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
