import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cadastro")({
  head: () => ({
    meta: [
      { title: "Criar conta | SNKRS" },
      {
        name: "description",
        content: "Crie sua conta SNKRS e receba acesso antecipado aos lançamentos.",
      },
      { property: "og:title", content: "Criar conta | SNKRS" },
      { property: "og:description", content: "Acesso antecipado aos lançamentos SNKRS." },
    ],
  }),
  component: CadastroPage,
});

const field =
  "w-full border-b border-border bg-transparent py-4 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-primary soft";

function CadastroPage() {
  return (
    <div className="container-x flex min-h-screen items-center justify-center py-40">
      <div className="animate-slide-up w-full max-w-sm">
        <span className="eyebrow">Novo por aqui</span>
        <h1 className="display-xl mt-6 text-[clamp(2.25rem,5vw,3.5rem)]">Cadastro</h1>

        <form className="mt-12 space-y-8" onSubmit={(e) => e.preventDefault()}>
          <input className={field} placeholder="Nome completo" aria-label="Nome completo" required />
          <input className={field} type="email" placeholder="E-mail" aria-label="E-mail" required />
          <input className={field} type="tel" placeholder="Telefone" aria-label="Telefone" required />
          <input className={field} type="password" placeholder="Senha" aria-label="Senha" required />
          <input
            className={field}
            type="password"
            placeholder="Confirmar senha"
            aria-label="Confirmar senha"
            required
          />
          <button
            type="submit"
            className="soft w-full bg-primary py-4 font-display text-[0.6875rem] tracking-[0.28em] text-primary-foreground uppercase hover:opacity-90"
          >
            Criar conta
          </button>
        </form>

        <p className="mt-10 text-sm text-muted-foreground">
          Já tem conta?{" "}
          <Link to="/login" className="soft text-primary hover:opacity-80">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
