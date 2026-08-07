import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Entrar | SNKRS" },
      { name: "description", content: "Acesse sua conta SNKRS para acompanhar favoritos e pedidos." },
      { property: "og:title", content: "Entrar | SNKRS" },
      { property: "og:description", content: "Acesse sua conta SNKRS." },
    ],
  }),
  component: LoginPage,
});

const field =
  "w-full border-b border-border bg-transparent py-4 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-primary soft";

function LoginPage() {
  return (
    <div className="container-x flex min-h-screen items-center justify-center py-40">
      <div className="animate-slide-up w-full max-w-sm">
        <span className="eyebrow">Área do cliente</span>
        <h1 className="display-xl mt-6 text-[clamp(2.25rem,5vw,3.5rem)]">Entrar</h1>

        <form className="mt-12 space-y-8" onSubmit={(e) => e.preventDefault()}>
          <input className={field} type="email" placeholder="E-mail" aria-label="E-mail" required />
          <input
            className={field}
            type="password"
            placeholder="Senha"
            aria-label="Senha"
            required
          />
          <button
            type="submit"
            className="soft w-full bg-primary py-4 font-display text-[0.6875rem] tracking-[0.28em] text-primary-foreground uppercase hover:opacity-90"
          >
            Entrar
          </button>
        </form>

        <button
          type="button"
          className="soft mt-4 w-full border border-border py-4 font-display text-[0.6875rem] tracking-[0.28em] uppercase hover:border-primary hover:text-primary"
        >
          Continuar com Google
        </button>

        <p className="mt-10 text-sm text-muted-foreground">
          Não tem conta?{" "}
          <Link to="/cadastro" className="soft text-primary hover:opacity-80">
            Criar conta
          </Link>
        </p>
      </div>
    </div>
  );
}
