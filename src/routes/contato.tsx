import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { whatsappLink } from "@/lib/shop";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | SNKRS" },
      {
        name: "description",
        content: "Fale com a equipe SNKRS por e-mail ou WhatsApp. Atendimento direto e sem ruído.",
      },
      { property: "og:title", content: "Contato | SNKRS" },
      { property: "og:description", content: "Fale com a equipe SNKRS por e-mail ou WhatsApp." },
    ],
  }),
  component: ContatoPage,
});

const field =
  "w-full border-b border-border bg-transparent py-4 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-primary soft";

function ContatoPage() {
  return (
    <div className="container-x pt-40 pb-28">
      <PageHeader
        eyebrow="Atendimento"
        title="Contato"
        description="Respondemos em até um dia útil."
      />

      <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <input className={field} placeholder="Nome" aria-label="Nome" required />
            <input
              className={field}
              type="email"
              placeholder="E-mail"
              aria-label="E-mail"
              required
            />
            <textarea className={`${field} resize-none`} rows={4} placeholder="Mensagem" aria-label="Mensagem" />
            <button
              type="submit"
              className="soft bg-primary px-9 py-4 font-display text-[0.6875rem] tracking-[0.28em] text-primary-foreground uppercase hover:opacity-90"
            >
              Enviar
            </button>
          </form>
        </Reveal>

        <Reveal delay={120} className="space-y-10">
          <div>
            <span className="eyebrow">WhatsApp</span>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="soft mt-4 block font-display text-2xl hover:text-primary"
            >
              Iniciar conversa
            </a>
          </div>
          <div>
            <span className="eyebrow">E-mail</span>
            <p className="mt-4 font-display text-2xl">contato@snkrs.com</p>
          </div>
          <div>
            <span className="eyebrow">Showroom</span>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              São Paulo — visitas com agendamento prévio.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
