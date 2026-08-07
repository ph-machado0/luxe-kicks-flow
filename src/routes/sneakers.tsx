import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/shop";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/sneakers")({
  head: () => ({
    meta: [
      { title: "Sneakers — Catálogo completo | SNKRS" },
      {
        name: "description",
        content:
          "Todo o catálogo SNKRS: lifestyle, corrida, basquete, skate e casual. Compra direta pelo WhatsApp.",
      },
      { property: "og:title", content: "Sneakers — Catálogo completo | SNKRS" },
      {
        property: "og:description",
        content: "Todo o catálogo SNKRS: lifestyle, corrida, basquete, skate e casual.",
      },
    ],
  }),
  component: SneakersPage,
});

function SneakersPage() {
  return (
    <div className="container-x pt-40 pb-28">
      <PageHeader
        eyebrow="Catálogo"
        title="Sneakers"
        description="Todas as peças disponíveis nesta temporada."
      />
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <Reveal key={p.slug} delay={i * 70}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
