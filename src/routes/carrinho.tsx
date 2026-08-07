import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { whatsappLink } from "@/lib/shop";

export const Route = createFileRoute("/carrinho")({
  head: () => ({
    meta: [
      { title: "Carrinho | SNKRS" },
      {
        name: "description",
        content: "Na SNKRS a compra é finalizada por WhatsApp, com atendimento direto.",
      },
      { property: "og:title", content: "Carrinho | SNKRS" },
      { property: "og:description", content: "Compra finalizada por WhatsApp." },
    ],
  }),
  component: CarrinhoPage,
});

function CarrinhoPage() {
  return (
    <div className="container-x pt-40 pb-28">
      <PageHeader
        eyebrow="Finalização"
        title="Carrinho"
        description="Toda compra é concluída em uma conversa direta pelo WhatsApp — sem checkout, sem formulários longos."
      />
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        className="soft mt-12 inline-flex bg-primary px-9 py-4 font-display text-[0.6875rem] tracking-[0.28em] text-primary-foreground uppercase hover:opacity-90"
      >
        Falar no WhatsApp
      </a>
    </div>
  );
}
