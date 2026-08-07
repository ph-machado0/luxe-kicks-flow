import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useState } from "react";
import { Placeholder } from "@/components/Placeholder";
import { formatPrice, getProduct, whatsappLink } from "@/lib/shop";

export const Route = createFileRoute("/produto/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Produto indisponível | SNKRS" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} | SNKRS` },
        { name: "description", content: product.description.slice(0, 155) },
        { property: "og:title", content: `${product.name} | SNKRS` },
        { property: "og:description", content: product.description.slice(0, 155) },
      ],
    };
  },
  component: ProdutoPage,
});

function ProdutoPage() {
  const { product } = Route.useLoaderData();
  const [size, setSize] = useState<number | undefined>(undefined);
  const [qty, setQty] = useState(1);
  const [fav, setFav] = useState(false);

  return (
    <div className="container-x pt-36 pb-28">
      <Link
        to="/sneakers"
        className="soft font-display text-[0.625rem] tracking-[0.28em] text-muted-foreground uppercase hover:text-primary"
      >
        ← Voltar ao catálogo
      </Link>

      <div className="mt-10 grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <Placeholder label={product.name} ratio="1 / 1" className="w-full" />
          <div className="mt-4 grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <Placeholder key={n} ratio="1 / 1" />
            ))}
          </div>
        </div>

        <div className="lg:pt-6">
          <span className="eyebrow">{product.subtitle}</span>
          <h1 className="display-xl mt-6 text-[clamp(2rem,4vw,3.25rem)]">{product.name}</h1>
          <p className="mt-6 text-lg tracking-wide text-muted-foreground">
            {formatPrice(product.price)}
          </p>
          <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-12">
            <span className="eyebrow">Numeração</span>
            <div className="mt-5 flex flex-wrap gap-3">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  aria-pressed={size === s}
                  className={`soft h-12 w-14 border font-display text-sm ${
                    size === s
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-foreground/80 hover:border-primary hover:text-primary"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <span className="eyebrow">Quantidade</span>
            <div className="mt-5 inline-flex items-center border border-border">
              <button
                type="button"
                aria-label="Diminuir quantidade"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="soft h-12 w-12 hover:text-primary"
              >
                −
              </button>
              <span className="w-12 text-center font-display text-sm">{qty}</span>
              <button
                type="button"
                aria-label="Aumentar quantidade"
                onClick={() => setQty((q) => q + 1)}
                className="soft h-12 w-12 hover:text-primary"
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink(product, size, qty)}
              target="_blank"
              rel="noreferrer"
              className="soft flex-1 bg-primary px-9 py-4 text-center font-display text-[0.6875rem] tracking-[0.28em] text-primary-foreground uppercase hover:opacity-90"
            >
              Comprar pelo WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setFav((v) => !v)}
              aria-pressed={fav}
              className="soft inline-flex items-center justify-center gap-3 border border-border px-9 py-4 font-display text-[0.6875rem] tracking-[0.28em] uppercase hover:border-primary hover:text-primary"
            >
              <Heart className={`h-4 w-4 ${fav ? "fill-primary text-primary" : ""}`} strokeWidth={1.5} />
              {fav ? "Nos favoritos" : "Favoritar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
