import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import hero1 from "@/assets/hero-1.png.asset.json";
import hero2 from "@/assets/hero-2.png.asset.json";
import hero3 from "@/assets/hero-3.png.asset.json";

const slides = [
  {
    eyebrow: "Coleção 2026",
    title: ["Pise", "diferente"],
    cta: "Ver Sneakers",
    image: hero1.url,
    alt: "Sneakers coloridos em veludo cotelê suspensos no ar",
  },
  {
    eyebrow: "Edição limitada",
    title: ["Domine", "o estilo"],
    cta: "Ver Lançamentos",
    image: hero2.url,
    alt: "Sneakers brancos e pretos clássicos sobre fundo claro",
  },
  {
    eyebrow: "Performance",
    title: ["Vá", "além"],
    cta: "Ver Coleções",
    image: hero3.url,
    alt: "Sneaker verde e off-white em fundo escuro",
  },
];

const links = ["/sneakers", "/lancamentos", "/colecoes"] as const;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index]!;

  return (
    <section className="relative min-h-[92vh] pt-32 pb-16 lg:pt-40">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div key={index} className="animate-slide-up max-w-xl">
          <span className="eyebrow">{slide.eyebrow}</span>
          <h1 className="display-xl mt-6 text-[clamp(3.25rem,8.5vw,7rem)]">
            {slide.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <Link
            to={links[index]!}
            className="soft mt-10 inline-flex items-center gap-3 bg-primary px-9 py-4 font-display text-[0.6875rem] tracking-[0.28em] text-primary-foreground uppercase hover:opacity-90"
          >
            {slide.cta}
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>

        <div>
          <Placeholder
            key={`ph-${index}`}
            label={`Banner ${index + 1}`}
            ratio="4 / 5"
            className="animate-fade-in w-full"
          />

          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {slides.map((s, i) => (
                <button
                  key={s.eyebrow}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ir para o slide ${i + 1}`}
                  aria-current={i === index}
                  className={`soft h-[2px] ${
                    i === index ? "w-12 bg-primary" : "w-6 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Slide anterior"
                onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
                className="soft flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/60 hover:border-primary hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="Próximo slide"
                onClick={() => setIndex((i) => (i + 1) % slides.length)}
                className="soft flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/60 hover:border-primary hover:text-primary"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
