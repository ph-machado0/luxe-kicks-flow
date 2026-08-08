import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/logo.png.asset.json";


const nav = [
  { to: "/", label: "Home" },
  { to: "/sneakers", label: "Sneakers" },
  { to: "/lancamentos", label: "Lançamentos" },
  { to: "/colecoes", label: "Coleções" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`soft fixed inset-x-0 top-0 z-50 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x grid h-20 grid-cols-[auto_1fr_auto] items-center gap-6">
        <Link to="/" className="font-display text-lg font-extrabold tracking-[0.32em] uppercase">
          SNKRS
        </Link>

        <nav className="hidden justify-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-foreground/70 hover:text-foreground" }}
              className="soft font-display text-[0.6875rem] tracking-[0.24em] uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 justify-self-end sm:gap-2">
          <button
            type="button"
            aria-label="Pesquisar"
            className="soft flex h-10 w-10 items-center justify-center text-foreground/70 hover:text-primary"
          >
            <Search className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.5} />
          </button>
          <Link
            to="/favoritos"
            aria-label="Favoritos"
            className="soft hidden h-10 w-10 items-center justify-center text-foreground/70 hover:text-primary sm:flex"
          >
            <Heart className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.5} />
          </Link>
          <Link
            to="/carrinho"
            aria-label="Carrinho"
            className="soft flex h-10 w-10 items-center justify-center text-foreground/70 hover:text-primary"
          >
            <ShoppingBag className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.5} />
          </Link>
          <Link
            to="/login"
            aria-label="Login"
            className="soft flex h-10 w-10 items-center justify-center text-foreground/70 hover:text-primary xl:hidden"
          >
            <User className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.5} />
          </Link>

          <div className="ml-3 hidden items-center gap-3 xl:flex">
            <Link
              to="/login"
              className="soft font-display text-[0.6875rem] tracking-[0.24em] text-foreground/70 uppercase hover:text-foreground"
            >
              Login
            </Link>
            <Link
              to="/cadastro"
              className="soft border border-primary/60 px-5 py-2.5 font-display text-[0.6875rem] tracking-[0.24em] text-primary uppercase hover:bg-primary hover:text-primary-foreground"
            >
              Cadastro
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="soft flex h-10 w-10 items-center justify-center text-foreground/70 hover:text-primary lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div className="animate-fade-in border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="container-x flex flex-col py-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="soft py-4 font-display text-2xl tracking-tight uppercase"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/favoritos"
              onClick={() => setOpen(false)}
              className="soft py-4 font-display text-2xl tracking-tight text-foreground/70 uppercase"
            >
              Favoritos
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
