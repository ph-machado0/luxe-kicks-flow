import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Placeholder } from "@/components/Placeholder";
import { ProductCard } from "@/components/ProductCard";
import { CollectionCta } from "@/components/CollectionCta";
import { Reveal } from "@/components/Reveal";
import { bestSellers, categories, newArrivals } from "@/lib/shop";
import essenceSneaker from "@/assets/essence-sneaker.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SNKRS — Sneakers de alto padrão" },
      {
        name: "description",
        content:
          "Curadoria premium de tênis lifestyle, corrida, basquete e skate. Peças selecionadas, edições limitadas e atendimento direto pelo WhatsApp.",
      },
      { property: "og:title", content: "SNKRS — Sneakers de alto padrão" },
      {
        property: "og:description",
        content: "Curadoria premium de tênis. Poucas peças, escolhidas com precisão.",
      },
    ],
  }),
  component: Index,
});

function SectionTitle({ children }: { children: string }) {
  return <h2 className="display-xl text-[clamp(2rem,4.5vw,3.75rem)]">{children}</h2>;
}

function Index() {
  return (
    <>
      <Hero />

      {/* Categorias */}
      <section className="container-x py-24 lg:py-32">
        <Reveal>
          <span className="eyebrow">Categorias</span>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={i * 60}>
              <Link to="/sneakers" className="group flex flex-col items-center gap-5">
                <span className="soft block w-full overflow-hidden rounded-full group-hover:scale-[1.03]">
                  <Placeholder ratio="1 / 1" className="rounded-full" />
                </span>
                <span className="soft font-display text-[0.6875rem] tracking-[0.24em] uppercase group-hover:text-primary">
                  {cat.name}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mais vendidos */}
      <section className="container-x py-24 lg:py-32">
        <Reveal>
          <SectionTitle>Mais Vendidos</SectionTitle>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr_0.62fr]">
          {bestSellers.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <ProductCard product={p} large />
            </Reveal>
          ))}
          <Reveal delay={200}>
            <CollectionCta
              caption="Catálogo"
              to="/sneakers"
              lines={["Confira", "toda a", "coleção"]}
            />
          </Reveal>
        </div>
      </section>

      {/* Nossa essência */}
      <section className="container-x py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <span className="eyebrow">Nossa Essência</span>
            <h2 className="display-xl mt-8 text-[clamp(2rem,4vw,3.25rem)]">
              Menos peças.
              <br />
              Mais critério.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Trabalhamos com um catálogo intencionalmente pequeno. Cada modelo passa por avaliação
              de materiais, construção e durabilidade antes de entrar na loja — porque exclusividade
              é consequência de escolha, não de volume.
            </p>
            <Link
              to="/sobre"
              className="soft mt-12 inline-flex border border-primary/60 px-8 py-4 font-display text-[0.6875rem] tracking-[0.28em] text-primary uppercase hover:bg-primary hover:text-primary-foreground"
            >
              Sobre a marca
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="soft overflow-hidden">
              <img
                src={essenceSneaker.url}
                alt="Tênis Nike Dunk em destaque sobre fundo laranja"
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ aspectRatio: "3 / 4" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lançamentos */}
      <section className="container-x py-24 lg:py-32">
        <Reveal>
          <SectionTitle>Lançamentos</SectionTitle>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr_0.62fr]">
          {newArrivals.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <ProductCard product={p} large />
            </Reveal>
          ))}
          <Reveal delay={200}>
            <CollectionCta
              caption="Novidades"
              to="/lancamentos"
              lines={["Descubra", "todos os", "lançamentos"]}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
