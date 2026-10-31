import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowUpRight, Search, X } from 'lucide-react'
import { SizeChartTable } from './PoliciesSection'
import { type Product, WHATSAPP_NUMBER } from '../data/products'
import { getPublicProducts } from '../lib/produk'

const fallbackSizes = ['S', 'M', 'L', 'XL']
const formatPrice = (price?: number) => price == null ? '' : new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price)

function ProductCard({ product, onSelect, index }: { product: Product; onSelect: (product: Product) => void; index: number }) {
  return (
    <article className="product-card" style={{ animationDelay: `${index * 70}ms` }}>
      <button
        className="product-image-button"
        type="button"
        onClick={() => onSelect(product)}
        aria-label={`Lihat detail ${product.name}`}
      >
        <span className="product-tag">{(product.colors ?? [product.color])[0].name}</span>
        <img src={product.images[0]} alt={`${product.name}, foto kemeja tampak depan`} loading="lazy" />
        <span className="product-quick-view">Lihat detail <ArrowUpRight aria-hidden="true" /></span>
      </button>
      <div className="product-info">
        <div>
          <p className="product-category">{product.category}</p>
          <h3>{product.name}</h3>{product.price != null && <span className="product-price">{formatPrice(product.price)}</span>}
        </div>
        <span className="product-color-indicator" aria-label={`Warna ${(product.colors ?? [product.color]).map((color) => color.name).join(', ')}`}>
          {(product.colors ?? [product.color]).map((color) => <i key={color.name} style={{ backgroundColor: color.hex }} />)}{(product.colors ?? [product.color]).map((color) => color.name).join(', ')}
        </span>
      </div>
    </article>
  )
}

function ProductDetail({ product, onClose, onSelectColor }: { product: Product; onClose: () => void; onSelectColor: (product: Product) => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const availableSizes = product.sizes?.length ? product.sizes : fallbackSizes
  const availableColors = product.colors?.length ? product.colors : [product.color]
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] ?? 'M')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    dialog?.showModal()
    return () => {
      if (dialog?.open) dialog.close()
    }
  }, [])

  const message = [
    'Halo FRWRD, saya ingin memesan:',
    `Produk: ${product.name}`,
    `Ukuran: ${selectedSize}`,
    `Warna: ${(product.colors ?? [product.color])[0].name}`,
    `Jumlah: ${quantity}`,
  ].join('\n')
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <dialog ref={dialogRef} className="product-dialog" aria-labelledby="detail-title" onCancel={(event) => {
      event.preventDefault()
      onClose()
    }} onClick={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <div className="detail-panel">
        <button className="dialog-close" type="button" aria-label="Tutup detail produk" onClick={onClose}>
          <X aria-hidden="true" />
        </button>
        <div className="detail-gallery">
          <div className="detail-image-wrap">
            <img src={product.images[selectedImage]} alt={`${product.name}, foto ${selectedImage === 0 ? 'tampak depan' : `detail ${selectedImage}`}`} />
            <span className="product-tag">{(product.colors ?? [product.color])[0].name}</span>
          </div>
          {product.images.length > 1 && (
            <div className="detail-thumbnails" role="group" aria-label="Foto produk">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  className={`detail-thumbnail ${selectedImage === index ? 'is-selected' : ''}`}
                  type="button"
                  aria-label={`Tampilkan foto ${index + 1} ${product.name}`}
                  aria-pressed={selectedImage === index}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{product.category} · FRWRD</p>
          <h2 id="detail-title">{product.name}</h2>
          <p className="detail-description">{product.description}</p>
          <p className="detail-material">{product.material}</p>

          <fieldset className="option-group">
            <legend>Ukuran <span>— {selectedSize}</span></legend>
            <div className="size-options">
              {availableSizes.map((size) => (
                <button
                  className={`size-option ${selectedSize === size ? 'is-selected' : ''}`}
                  key={size}
                  type="button"
                  aria-pressed={selectedSize === size}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
              <button className="size-chart-link" type="button" onClick={() => setIsSizeChartOpen((open) => !open)} aria-expanded={isSizeChartOpen}>
                {isSizeChartOpen ? 'Tutup size chart' : 'Lihat size chart'}
              </button>
            </div>
          </fieldset>

          {isSizeChartOpen && <div className="inline-size-chart"><SizeChartTable /></div>}

          <fieldset className="option-group color-group">
            <legend>Warna <span>— {(product.colors ?? [product.color])[0].name}</span></legend>
            <div className="color-options">
              {availableColors.map((variant) => (
                <button
                  className={`color-option ${product.color.hex === variant.hex ? 'is-selected' : ''}`}
                  key={variant.name}
                  type="button"
                  aria-label={`Pilih warna ${variant.name}`}
                  aria-pressed={product.color.hex === variant.hex}
                  onClick={() => onSelectColor({ ...product, color: variant })}
                >
                  <span style={{ backgroundColor: variant.hex }} />
                </button>
              ))}
            </div>
          </fieldset>

          <div className="quantity-row">
            <span>Jumlah</span>
            <div className="quantity-control" aria-label="Jumlah pesanan">
              <button type="button" aria-label="Kurangi jumlah" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button>
              <output aria-live="polite">{quantity}</output>
              <button type="button" aria-label="Tambah jumlah" onClick={() => setQuantity((value) => value + 1)}>+</button>
            </div>
          </div>

          <a className="button button-dark whatsapp-order" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Pesan via WhatsApp <ArrowUpRight aria-hidden="true" />
          </a>
          <p className="detail-footnote">Pesanan dikonfirmasi langsung melalui WhatsApp.</p>
        </div>
      </div>
    </dialog>
  )
}

export function ProductCatalog() {
  const [catalogProducts, setCatalogProducts] = useState<Product[]>([])
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('Semua warna')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    let active = true
    getPublicProducts().then((loadedProducts) => { if (active) setCatalogProducts(loadedProducts) })
    return () => { active = false }
  }, [])

  const categories = useMemo(() => ['Semua warna', ...Array.from(new Set(catalogProducts.flatMap((product) => (product.colors ?? [product.color]).map((color) => color.name))))], [catalogProducts])

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return catalogProducts.filter((product) => {
      const productColors = product.colors ?? [product.color]
      const matchesCategory = activeCategory === 'Semua warna' || productColors.some((color) => color.name === activeCategory)
      const matchesQuery = !normalizedQuery || `${product.name} ${product.category} ${product.description} ${productColors.map((color) => color.name).join(' ')}`.toLowerCase().includes(normalizedQuery)
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, catalogProducts, query])

  return (
    <section className="catalog-section" id="shop" aria-labelledby="catalog-title">
      <div className="section-kicker" id="collections"><span>KOLEKSI FRWRD</span><span>5 WARNA · SATU SILUET</span></div>
      <div className="catalog-heading-row">
        <div>
          <p className="eyebrow">Kemeja essential FRWRD</p>
          <h2 className="section-title" id="catalog-title">Pilih warna<span>.</span></h2>
        </div>
        <p className="catalog-intro">Satu kemeja, lima pilihan warna.<br />Temukan warna favoritmu.</p>
      </div>

      <div className="catalog-toolbar">
        <div className="category-filters" role="group" aria-label="Filter produk berdasarkan warna">
          {categories.map((category) => (
            <button
              className={`filter-button ${activeCategory === category ? 'is-active' : ''}`}
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <label className="search-box">
          <Search aria-hidden="true" />
          <span className="sr-only">Cari kemeja atau warna</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari kemeja atau warna" />
          {query && <button type="button" aria-label="Hapus pencarian" onClick={() => setQuery('')}><X aria-hidden="true" /></button>}
        </label>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} onSelect={setSelectedProduct} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>Warna belum ditemukan.</p>
          <span>Coba kata kunci lain atau lihat semua warna.</span>
          <button className="text-button" type="button" onClick={() => { setQuery(''); setActiveCategory('Semua warna') }}>Hapus filter <ArrowUpRight aria-hidden="true" /></button>
        </div>
      )}

      <div className="catalog-bottom-note">
        <span>{filteredProducts.length} dari {catalogProducts.length} produk</span>
        <a href="#size-chart">Lihat size chart <ArrowUpRight aria-hidden="true" /></a>
      </div>
      {selectedProduct && <ProductDetail key={selectedProduct.id} product={selectedProduct} onClose={() => setSelectedProduct(null)} onSelectColor={setSelectedProduct} />}
    </section>
  )
}
