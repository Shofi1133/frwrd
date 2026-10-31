import { supabase } from './supabase'
import { products as staticProducts, type Product, type ShirtColor } from '../data/products'

type DatabaseProduct = {
  id: string
  nama: string
  slug: string
  seri: string
  deskripsi: string | null
  bahan: string | null
  model: string | null
  kategori: string
  stok: number
  ukuran: string[] | null
  warna: Array<{ nama?: string; hex?: string }> | null
  gambar: string[] | null
  aktif: boolean
  created_at: string
}

const toPublicProduct = (row: DatabaseProduct): Product => {
  const colors: ShirtColor[] = (row.warna ?? []).filter((color) => color.nama && color.hex).map((color) => ({ name: color.nama!, hex: color.hex! }))
  const fallbackColor = colors[0] ?? { name: 'Pilihan warna', hex: '#171715' }
  return {
    id: row.id,
    slug: row.slug,
    name: row.nama,
    category: row.seri || row.kategori,
    tag: row.kategori,
    color: fallbackColor,
    colors,
    images: row.gambar ?? [],
    description: row.deskripsi ?? '',
    material: [row.bahan, row.model].filter(Boolean).join(' · '),
    sizes: row.ukuran ?? [],
  }
}

export async function getPublicProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from('frwrd_products').select('id,nama,slug,seri,deskripsi,bahan,model,kategori,stok,ukuran,warna,gambar,aktif,created_at').eq('aktif', true).order('created_at', { ascending: false })
  if (error) {
    console.error('[v0] Gagal memuat produk publik dari Supabase:', error)
    return staticProducts
  }
  const databaseProducts = (data as DatabaseProduct[]).map(toPublicProduct)
  const databaseSlugs = new Set(databaseProducts.map((product) => product.slug ?? product.id))
  // Data statis ini dipertahankan sementara sebagai fallback sampai semua produk dipindahkan ke admin.
  return [...databaseProducts, ...staticProducts.filter((product) => !databaseSlugs.has(product.slug ?? product.id))]
}
