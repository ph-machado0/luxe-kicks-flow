import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/shop";
import logoAsset from "@/assets/logo.png.asset.json";


export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-x grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-4 lg:py-28">
        <div>
          <span className="font-display text-lg font-extrabold tracking-[0.32em] uppercase">
            SNKRS
          </span>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Curadoria de tênis de alto padrão. Poucas peças, escolhidas com precisão.
          </p>
        </div>

        <div>
          <h4 className="eyebrow">Institucional</h4>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/sobre" className="soft hover:text-primary">
                Sobre a marca
              </Link>
            </li>
            <li>
              <Link to="/colecoes" className="soft hover:text-primary">
                Coleções
              </Link>
            </li>
            <li>
              <Link to="/lancamentos" className="soft hover:text-primary">
                Lançamentos
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow">Ajuda &amp; Contato</h4>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/contato" className="soft hover:text-primary">
                Fale conosco
              </Link>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="soft hover:text-primary"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="soft hover:text-primary"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="soft hover:text-primary"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow">Newsletter</h4>
          <p className="mt-6 text-sm text-muted-foreground">
            Acesso antecipado aos lançamentos.
          </p>
          <form
            className="mt-6 flex items-center border-b border-border focus-within:border-primary"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Seu e-mail"
              aria-label="Seu e-mail"
              className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground/70"
            />
            <button
              type="submit"
              aria-label="Assinar newsletter"
              className="soft p-2 text-primary hover:translate-x-1"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </form>
        </div>
      </div>

      <div className="container-x flex flex-col gap-3 border-t border-border py-8 text-[0.6875rem] tracking-[0.2em] text-muted-foreground/70 uppercase sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} SNKRS</span>
        <span>Feito com precisão</span>
      </div>
    </footer>
  );
}
