export type ShirtColor = {
  name: string
  hex: string
}

export type Product = {
  id: string
  name: string
  price: number
  category: string
  tag: string
  image: string
  description: string
  material: string
  colors: ShirtColor[]
}

export const products: Product[] = [
  {
    id: 'the-form-shirt',
    name: 'The Form Shirt',
    price: 489000,
    category: 'Everyday',
    tag: 'BESTSELLER',
    image: '/images/frwrd-product-slate.png',
    description: 'Kemeja poplin berpotongan rileks yang mengikuti ritme hari Anda—ringan, bersih, dan terasa tepat dari pagi hingga malam.',
    material: 'Cotton poplin · 100% cotton',
    colors: [
      { name: 'Slate', hex: '#64727a' },
      { name: 'Onyx', hex: '#292b29' },
      { name: 'Ivory', hex: '#e8e3d8' },
    ],
  },
  {
    id: 'the-linen-shirt',
    name: 'The Linen Shirt',
    price: 559000,
    category: 'Linen edit',
    tag: 'NEW ARRIVAL',
    image: '/images/frwrd-product-ivory.png',
    description: 'Dibuat untuk hari yang bergerak pelan. Linen lembut, siluet santai, dan kerah terbuka untuk kesan effortless.',
    material: 'Cotton-linen blend · 55% linen',
    colors: [
      { name: 'Natural', hex: '#e5decf' },
      { name: 'Stone', hex: '#a7a095' },
      { name: 'Black', hex: '#343331' },
    ],
  },
  {
    id: 'the-daily-overshirt',
    name: 'The Daily Overshirt',
    price: 529000,
    category: 'Everyday',
    tag: 'CORE PIECE',
    image: '/images/frwrd-product-olive.png',
    description: 'Lapisan ringan dengan karakter yang tenang. Mudah dipadukan, tetap nyaman saat dipakai sendiri.',
    material: 'Brushed cotton · 100% cotton',
    colors: [
      { name: 'Olive', hex: '#73725d' },
      { name: 'Sand', hex: '#d3c3a8' },
      { name: 'Ink', hex: '#353a38' },
    ],
  },
  {
    id: 'the-line-shirt',
    name: 'The Line Shirt',
    price: 499000,
    category: 'New arrivals',
    tag: 'LIMITED',
    image: '/images/frwrd-product-stripe.png',
    description: 'Garis halus memberi sentuhan baru pada bentuk klasik. Rapi tanpa terasa formal, untuk setiap rencana.',
    material: 'Lightweight cotton · 100% cotton',
    colors: [
      { name: 'Chalk stripe', hex: '#e9e2d8' },
      { name: 'Blue stripe', hex: '#82919a' },
    ],
  },
]

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(price)

// Replace this with the FRWRD WhatsApp number, including country code and no + or spaces.
export const WHATSAPP_NUMBER = '6281234567890'
export const INSTAGRAM_HANDLE = '@frwrd'
export const INSTAGRAM_URL = 'https://instagram.com/frwrd'
