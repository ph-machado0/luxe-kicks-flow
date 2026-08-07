import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/favoritos")({
  head: () => ({
    meta: [
      { title: "Favoritos | SNKRS" },
      { name: "description", content: "Os sneakers que você salvou para decidir com calma." },
      { property: "og:title", content: "Favoritos | SNKRS" },
      { property: "og:description", content: "Os sneakers que você salvou." },
    ],
  }),
  component: FavoritosPage,
});

function FavoritosPage() {
  return (
    <div className="container-x pt-40 pb-28">
      <PageHeader
        eyebrow="Sua seleção"
        title="Favoritos"
        description="Você ainda não salvou nenhum modelo."
      />
      <Link
        to="/sneakers"
        className="soft mt-12 inline-flex border border-primary/60 px-8 py-4 font-display text-[0.6875rem] tracking-[0.28em] text-primary uppercase hover:bg-primary hover:text-primary-foreground"
      >
        Explorar sneakers
      </Link>
    </div>
  );
}
