import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useState } from "react";
import { Placeholder } from "./Placeholder";
import { formatPrice, type Product } from "@/lib/shop";

export function ProductCard({ product, large = false }: { product: Product; large?: boolean }) {
  const [fav, setFav] = useState(false);

  return (
    <article className="group soft flex flex-col border border-border bg-card/30 hover:border-primary/40">
      <div className="relative overflow-hidden">
        <div className="zoom-soft">
          <Placeholder label={product.name} ratio={large ? "4 / 3" : "1 / 1"} className="border-0" />
        </div>
        <button
          type="button"
          onClick={() => setFav((v) => !v)}
          aria-pressed={fav}
          aria-label={fav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          className="soft absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 backdrop-blur hover:border-primary hover:text-primary"
        >
          <Heart className={`h-4 w-4 ${fav ? "fill-primary text-primary" : ""}`} strokeWidth={1.5} />
        </button>
      </div>

      <div className={`flex flex-1 flex-col gap-6 ${large ? "p-8" : "p-6"}`}>
        <div>
          <span className="eyebrow">{product.subtitle}</span>
          <h3
            className={`display-xl mt-3 ${large ? "text-[clamp(1.5rem,2.2vw,2.25rem)]" : "text-xl"}`}
          >
            {product.name}
          </h3>
          <p className="mt-3 text-sm tracking-wide text-muted-foreground">
            {formatPrice(product.price)}
          </p>
        </div>

        <Link
          to="/produto/$slug"
          params={{ slug: product.slug }}
          className="soft mt-auto inline-flex w-fit items-center border border-primary/60 px-7 py-3 font-display text-[0.6875rem] tracking-[0.28em] text-primary uppercase hover:bg-primary hover:text-primary-foreground"
        >
          Ver Produto
        </Link>
      </div>
    </article>
  );
}
