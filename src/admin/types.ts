export type AdminColor = { nama: string; hex: string }

export type AdminProduct = {
  id: string
  nama: string
  slug: string
  seri: string
  deskripsi: string
  bahan: string
  model: string
  kategori: string
  harga: number
  stok: number
  ukuran: string[]
  warna: AdminColor[]
  gambar: string[]
  aktif: boolean
  created_at: string
}

export const PRODUCT_CATEGORIES = ['Kemeja Lengan Pendek', 'Kemeja Lengan Panjang'] as const
export const PRODUCT_SIZES = ['S', 'M', 'L', 'XL', 'XXL'] as const
