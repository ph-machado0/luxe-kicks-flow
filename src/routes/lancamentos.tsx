import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { products } from "@/lib/shop";

export const Route = createFileRoute("/lancamentos")({
  head: () => ({
    meta: [
      { title: "Lançamentos | SNKRS" },
      {
        name: "description",
        content: "Os drops mais recentes da SNKRS: séries curtas, numeradas e por tempo limitado.",
      },
      { property: "og:title", content: "Lançamentos | SNKRS" },
      {
        property: "og:description",
        content: "Os drops mais recentes da SNKRS: séries curtas e por tempo limitado.",
      },
    ],
  }),
  component: LancamentosPage,
});

function LancamentosPage() {
  const items = products.filter((p) => p.isNew);
  return (
    <div className="container-x pt-40 pb-28">
      <PageHeader
        eyebrow="Novidades"
        title="Lançamentos"
        description="Séries curtas, produzidas em quantidade limitada."
      />
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <Reveal key={p.slug} delay={i * 70}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
