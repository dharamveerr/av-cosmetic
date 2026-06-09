export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: "Skincare" | "Color" | "Fragrance" | "Body" | "Hair";
  retailPrice: number;
  wholesalePrice: number;
  moq: number;
  images: string[];
  shade?: string;
  volume: string;
  notes: string[];
  about: string;
  ingredients: string[];
};

// Unsplash hotlink — beautifully shot beauty/cosmetic imagery
const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;

export const products: Product[] = [
  {
    slug: "obsidian-serum",
    name: "Obsidian Hydrating Serum",
    tagline: "Twelve botanicals. One quiet ritual.",
    category: "Skincare",
    retailPrice: 148,
    wholesalePrice: 64,
    moq: 12,
    volume: "30 ml",
    images: [
      u("1620916566398-39f1143ab7be"),
      u("1556228720-195a672e8a03"),
      u("1571781926291-c477ebfd024b")
    ],
    notes: ["Bakuchiol", "Camellia", "Hyaluronic"],
    about:
      "A weightless, deeply hydrating serum built around cold-pressed camellia and stabilised bakuchiol. Made in small batches in Grasse.",
    ingredients: ["Aqua", "Camellia Japonica Seed Oil", "Bakuchiol", "Sodium Hyaluronate", "Niacinamide", "Tocopherol"]
  },
  {
    slug: "petal-noir-lipstick",
    name: "Petal Noir Satin Lipstick",
    tagline: "Mulberry, plum, the colour of long evenings.",
    category: "Color",
    shade: "No. 04 — Bordeaux",
    retailPrice: 58,
    wholesalePrice: 22,
    moq: 24,
    volume: "3.8 g",
    images: [
      u("1586495777744-4413f21062fa"),
      u("1631214540242-3cd8d3b39b4f"),
      u("1599733589046-3cce4b8a6c1f")
    ],
    notes: ["Satin", "Buildable", "8h wear"],
    about:
      "A cushioned satin formula in a hand-finished brass case. Eight buildable hours of colour and unprecedented comfort.",
    ingredients: ["Hydrogenated Polyisobutene", "Candelilla Cera", "Cera Alba", "Mica", "CI 77491"]
  },
  {
    slug: "linen-eau-de-parfum",
    name: "Linen — Eau de Parfum",
    tagline: "Sun-warmed cotton, neroli, and a whisper of iris.",
    category: "Fragrance",
    retailPrice: 220,
    wholesalePrice: 96,
    moq: 8,
    volume: "50 ml",
    images: [
      u("1541643600914-78b084683601"),
      u("1592945403244-b3fbafd7f539"),
      u("1547887537-6158d64c35b3")
    ],
    notes: ["Neroli", "Iris", "Musk"],
    about:
      "A clean, almost weightless eau de parfum. Composed by Maître Parfumeur Théo Lavigne over fourteen months.",
    ingredients: ["Alcohol Denat.", "Parfum", "Aqua", "Limonene", "Linalool"]
  },
  {
    slug: "amber-cleansing-balm",
    name: "Amber Cleansing Balm",
    tagline: "A balm-to-oil-to-milk ritual. Honest to the skin.",
    category: "Skincare",
    retailPrice: 72,
    wholesalePrice: 30,
    moq: 18,
    volume: "100 ml",
    images: [
      u("1570194065650-d99fb4bedf0a"),
      u("1556228578-8c89e6adf883"),
      u("1556228720-195a672e8a03")
    ],
    notes: ["Beeswax", "Amber", "Squalane"],
    about:
      "A buttery balm that melts on contact and rinses to a silk milk. Removes long-wear makeup without stripping.",
    ingredients: ["Caprylic/Capric Triglyceride", "Cera Alba", "Squalane", "Rosa Damascena Flower Oil"]
  },
  {
    slug: "porcelain-cushion",
    name: "Porcelain Air Cushion",
    tagline: "A second skin. Quietly luminous.",
    category: "Color",
    shade: "Range of 16 shades",
    retailPrice: 84,
    wholesalePrice: 34,
    moq: 24,
    volume: "15 g",
    images: [
      u("1631214524020-5ad0cdb29d86"),
      u("1612817288484-6f916006741a"),
      u("1599733589046-3cce4b8a6c1f")
    ],
    notes: ["SPF 30", "Buildable", "Dewy"],
    about:
      "Sixteen shades of breathable, biome-friendly coverage. Refillable porcelain compact, made in Seto.",
    ingredients: ["Aqua", "Cyclopentasiloxane", "Titanium Dioxide", "Niacinamide", "Glycerin"]
  },
  {
    slug: "vetiver-body-oil",
    name: "Vetiver Dry Body Oil",
    tagline: "A dry oil that finishes like cashmere.",
    category: "Body",
    retailPrice: 92,
    wholesalePrice: 38,
    moq: 12,
    volume: "100 ml",
    images: [
      u("1608571423902-eed4a5ad8108"),
      u("1556228453-efd6c1ff04f6"),
      u("1571781926291-c477ebfd024b")
    ],
    notes: ["Vetiver", "Sweet almond", "Plum kernel"],
    about:
      "A featherweight oil that absorbs in seconds and leaves a faint, smoky vetiver trail.",
    ingredients: ["Prunus Amygdalus Dulcis Oil", "Vetiveria Zizanoides Root Oil", "Tocopherol"]
  },
  {
    slug: "silk-hair-elixir",
    name: "Silk Hair Elixir",
    tagline: "Five oils, one ribbon of light.",
    category: "Hair",
    retailPrice: 64,
    wholesalePrice: 26,
    moq: 18,
    volume: "50 ml",
    images: [
      u("1522338242992-e1a54906a8da"),
      u("1556228720-195a672e8a03"),
      u("1556228578-8c89e6adf883")
    ],
    notes: ["Argan", "Marula", "Camellia"],
    about:
      "A lightweight elixir that disappears into mid-lengths and ends. No silicones, no compromise.",
    ingredients: ["Argania Spinosa Kernel Oil", "Sclerocarya Birrea Seed Oil", "Camellia Oleifera Seed Oil"]
  },
  {
    slug: "kohl-eye-pencil",
    name: "Atelier Kohl Eye Pencil",
    tagline: "Egyptian kohl, modernised. Smudges then sets.",
    category: "Color",
    shade: "No. 01 — Noir Profond",
    retailPrice: 36,
    wholesalePrice: 14,
    moq: 36,
    volume: "1.2 g",
    images: [
      u("1631214540242-3cd8d3b39b4f"),
      u("1612817288484-6f916006741a"),
      u("1586495777744-4413f21062fa")
    ],
    notes: ["Waterproof", "Smudgeable", "16h"],
    about:
      "A deep, buttery kohl that smokes out instantly and then sets to a budge-proof line.",
    ingredients: ["Hydrogenated Polyisobutene", "Cera Microcristallina", "CI 77499", "Tocopherol"]
  }
];

export const categories = ["Skincare", "Color", "Fragrance", "Body", "Hair"] as const;

export const featured = ["obsidian-serum", "petal-noir-lipstick", "linen-eau-de-parfum", "porcelain-cushion"];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
