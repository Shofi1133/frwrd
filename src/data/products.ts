export type ShirtColor = {
  name: string
  hex: string
}

export type Product = {
  id: string
  name: string
  category: string
  tag: string
  color: ShirtColor
  images: string[]
  description: string
  material: string
}

export const products: Product[] = [
  {
    id: 'kemeja-frwrd-coklat',
    name: 'Kemeja FRWRD — Coklat',
    category: 'Kemeja Essential',
    tag: 'FIVE COLORWAYS',
    color: { name: 'Coklat', hex: '#593a27' },
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coklat-iDoPOAQYOOR7U9wcxHZWQewPzkGnOP.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coklat%202-60VWtiUN0daI3XOm0GPER6to2uQ9kR.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coklat%203-2SZyrEa6UTI5vCRLral9Egvqsd3HNE.png',
    ],
    description: 'Kemeja lengan pendek dengan siluet santai dan detail saku depan. Pilihan warna coklat yang hangat untuk dipakai sehari-hari.',
    material: 'Cotton · Kemeja lengan pendek',
  },
  {
    id: 'kemeja-frwrd-hitam',
    name: 'Kemeja FRWRD — Hitam',
    category: 'Kemeja Essential',
    tag: 'FIVE COLORWAYS',
    color: { name: 'Hitam', hex: '#171715' },
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hitam-vPgg2rWpv7p2inmkvy36Mfqi2nCVof.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hitam%202-EUTNuDh7BejIork2qOygeTiYUJ2S89.png',
    ],
    description: 'Kemeja lengan pendek dengan siluet santai dan detail saku depan. Warna hitam serbaguna dengan identitas FRWRD.',
    material: 'Cotton · Kemeja lengan pendek',
  },
  {
    id: 'kemeja-frwrd-cream',
    name: 'Kemeja FRWRD — Cream',
    category: 'Kemeja Essential',
    tag: 'FIVE COLORWAYS',
    color: { name: 'Cream', hex: '#e8e0cc' },
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cream-8FLHZUBv3skOpwGKAWisxlMsglEkyl.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cream%202-kGxSwOR5KEl8cPlLiSHDGKHvABDaDO.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cream%203-eOYltMjWMiL4a60EVdVAgDYY4gYFvO.png',
    ],
    description: 'Kemeja lengan pendek dengan siluet santai dan detail saku depan. Warna cream yang mudah dipadukan untuk berbagai suasana.',
    material: 'Cotton · Kemeja lengan pendek',
  },
  {
    id: 'kemeja-frwrd-hijau-army',
    name: 'Kemeja FRWRD — Hijau Army',
    category: 'Kemeja Essential',
    tag: 'FIVE COLORWAYS',
    color: { name: 'Hijau Army', hex: '#343b24' },
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hijau%20army-sOx1eMMHcSGPu4HQo1pVs8QTr5FxAa.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hijau%20army%202-4Kj1ricaMKNsR9JZGLuzjxjRXBNCtO.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hijau%20army%203-jci28NwD0hCH3dngurgfbWrkfHoZXn.png',
    ],
    description: 'Kemeja lengan pendek dengan siluet santai dan detail saku depan. Hijau army memberi aksen warna yang tetap mudah dikenakan.',
    material: 'Cotton · Kemeja lengan pendek',
  },
  {
    id: 'kemeja-frwrd-navy',
    name: 'Kemeja FRWRD — Navy',
    category: 'Kemeja Essential',
    tag: 'FIVE COLORWAYS',
    color: { name: 'Navy', hex: '#14213a' },
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Navy-WAfFUNiJsRXCXelL65QINK8mI9Z5ib.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Navy%202-LLU2mB2YNb1ImQ5zN5UY132jhLediO.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Navy%203-0VlWFWo7RNKefD3ZuV24YDxCzVgpE9.png',
    ],
    description: 'Kemeja lengan pendek dengan siluet santai dan detail saku depan. Warna navy yang rapi, klasik, dan siap dipakai berulang.',
    material: 'Cotton · Kemeja lengan pendek',
  },
]

export const sizeChart = [
  { size: 'S', length: 50, width: 44, sleeve: 60 },
  { size: 'M', length: 53, width: 46, sleeve: 61 },
  { size: 'L', length: 56, width: 48, sleeve: 63 },
  { size: 'XL', length: 59, width: 50, sleeve: 65 },
]

export const WHATSAPP_NUMBER = '6281234567890'
export const INSTAGRAM_HANDLE = '@frwrd'
export const INSTAGRAM_URL = 'https://instagram.com/frwrd'

export const SIZE_CHART_IMAGE = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/size%20chart-sExmyXhxhl1c3JGkEJB9ATrYgai96r.png'
export const TERMS_IMAGE = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s%26k-AhoUZ7qUGyov3YdOQO9rG0MnTQcU2M.png'
