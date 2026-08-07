export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  category: string;
  description: string;
  sizes: number[];
  isNew?: boolean;
  bestSeller?: boolean;
};

export const WHATSAPP_NUMBER = "5511999999999";

export function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function whatsappLink(product?: Product, size?: number, qty = 1) {
  const message = product
    ? `Olá! Tenho interesse no ${product.name}${size ? ` — tamanho ${size}` : ""}${
        qty > 1 ? ` (${qty} unidades)` : ""
      }. Poderia me ajudar?`
    : "Olá! Gostaria de falar sobre os tênis da SNKRS.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const categories = [
  { slug: "lifestyle", name: "Lifestyle" },
  { slug: "corrida", name: "Corrida" },
  { slug: "basquete", name: "Basquete" },
  { slug: "skate", name: "Skate" },
  { slug: "casual", name: "Casual" },
  { slug: "lancamentos", name: "Lançamentos" },
];

export const products: Product[] = [
  {
    slug: "phantom-low-onyx",
    name: "Phantom Low Onyx",
    subtitle: "Lifestyle",
    price: 1290,
    category: "lifestyle",
    description:
      "Silhueta baixa construída em couro integral com costura invisível. Entressola em espuma de alta densidade e forro técnico respirável para uso prolongado.",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    bestSeller: true,
  },
  {
    slug: "vector-run-01",
    name: "Vector Run 01",
    subtitle: "Corrida",
    price: 1490,
    category: "corrida",
    description:
      "Desenvolvido para longas distâncias. Placa de carbono, cabedal em malha monofilamento e amortecimento com retorno de energia progressivo.",
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    bestSeller: true,
  },
  {
    slug: "arc-court-mid",
    name: "Arc Court Mid",
    subtitle: "Basquete",
    price: 1690,
    category: "basquete",
    description:
      "Cano médio com suporte reforçado no tornozelo. Solado em borracha translúcida com padrão de tração multidirecional.",
    sizes: [39, 40, 41, 42, 43, 44, 45],
    isNew: true,
  },
  {
    slug: "grind-deck-pro",
    name: "Grind Deck Pro",
    subtitle: "Skate",
    price: 990,
    category: "skate",
    description:
      "Camurça encorpada com reforço duplo nas áreas de atrito. Palmilha anatômica e construção vulcanizada para máxima sensibilidade.",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    isNew: true,
  },
  {
    slug: "atelier-white-edition",
    name: "Atelier White Edition",
    subtitle: "Casual",
    price: 1390,
    category: "casual",
    description:
      "Edição limitada em couro italiano de curtimento vegetal. Acabamento manual e numeração individual na entressola.",
    sizes: [38, 39, 40, 41, 42, 43],
  },
  {
    slug: "trail-form-gtx",
    name: "Trail Form GTX",
    subtitle: "Trail",
    price: 1790,
    category: "corrida",
    description:
      "Proteção impermeável com membrana técnica. Tração agressiva para terrenos irregulares sem abrir mão do design urbano.",
    sizes: [39, 40, 41, 42, 43, 44, 45],
  },
];

export const bestSellers = products.filter((p) => p.bestSeller).slice(0, 2);
export const newArrivals = products.filter((p) => p.isNew).slice(0, 2);

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
