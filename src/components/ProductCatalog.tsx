import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowUpRight, Search, X } from 'lucide-react'
import { formatPrice, products, type Product, type ShirtColor, WHATSAPP_NUMBER } from '../data/products'

const categories = ['All pieces', 'Everyday', 'Linen edit', 'New arrivals']
const sizes = ['S', 'M', 'L', 'XL']

function ProductCard({ product, onSelect, index }: { product: Product; onSelect: (product: Product) => void; index: number }) {
  return (
    <article className="product-card" style={{ animationDelay: `${index * 70}ms` }}>
      <button
        className="product-image-button"
        type="button"
        onClick={() => onSelect(product)}
        aria-label={`Lihat detail ${product.name}`}
      >
        <span className="product-tag">{product.tag}</span>
        <img src={product.image} alt={`${product.name}, kemeja FRWRD`} loading="lazy" />
        <span className="product-quick-view">Quick view <ArrowUpRight aria-hidden="true" /></span>
      </button>
      <div className="product-info">
        <div>
          <p className="product-category">{product.category}</p>
          <h3>{product.name}</h3>
        </div>
        <p className="product-price">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}

function ProductDetail({ product, onClose }: { product: Product; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState<ShirtColor>(product.colors[0])
  const [quantity, setQuantity] = useState(1)

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
    `Warna: ${selectedColor.name}`,
    `Jumlah: ${quantity}`,
    `Harga: ${formatPrice(product.price)}`,
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
        <div className="detail-image-wrap">
          <img src={product.image} alt={`${product.name} dalam koleksi FRWRD`} />
          <span className="product-tag">{product.tag}</span>
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{product.category} · FRWRD</p>
          <h2 id="detail-title">{product.name}</h2>
          <p className="detail-price">{formatPrice(product.price)}</p>
          <p className="detail-description">{product.description}</p>
          <p className="detail-material">{product.material}</p>

          <fieldset className="option-group">
            <legend>Size <span>— {selectedSize}</span></legend>
            <div className="size-options">
              {sizes.map((size) => (
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
            </div>
          </fieldset>

          <fieldset className="option-group color-group">
            <legend>Color <span>— {selectedColor.name}</span></legend>
            <div className="color-options">
              {product.colors.map((color) => (
                <button
                  className={`color-option ${selectedColor.name === color.name ? 'is-selected' : ''}`}
                  key={color.name}
                  type="button"
                  aria-label={color.name}
                  aria-pressed={selectedColor.name === color.name}
                  onClick={() => setSelectedColor(color)}
                >
                  <span style={{ backgroundColor: color.hex }} />
                </button>
              ))}
            </div>
          </fieldset>

          <div className="quantity-row">
            <span>Quantity</span>
            <div className="quantity-control" aria-label="Jumlah pesanan">
              <button type="button" aria-label="Kurangi jumlah" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button>
              <output aria-live="polite">{quantity}</output>
              <button type="button" aria-label="Tambah jumlah" onClick={() => setQuantity((value) => value + 1)}>+</button>
            </div>
          </div>

          <a className="button button-dark whatsapp-order" href={whatsappUrl} target="_blank" rel="noreferrer">
            Order via WhatsApp <ArrowUpRight aria-hidden="true" />
          </a>
          <p className="detail-footnote">No checkout, no payment online. We&apos;ll confirm your order in chat.</p>
        </div>
      </div>
    </dialog>
  )
}

export function ProductCatalog() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All pieces')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'All pieces' || product.category === activeCategory
      const matchesQuery = !normalizedQuery || `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(normalizedQuery)
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  return (
    <section className="catalog-section" id="shop" aria-labelledby="catalog-title">
      <div className="section-kicker" id="collections"><span>THE COLLECTION</span><span>NO. 01 — 2025</span></div>
      <div className="catalog-heading-row">
        <div>
          <p className="eyebrow">Considered essentials</p>
          <h2 className="section-title" id="catalog-title">The shirt edit<span>.</span></h2>
        </div>
        <p className="catalog-intro">Easy to wear. Hard to leave behind.<br />A better kind of everyday.</p>
      </div>

      <div className="catalog-toolbar">
        <div className="category-filters" role="group" aria-label="Filter produk berdasarkan kategori">
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
          <span className="sr-only">Cari kemeja</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find your fit" />
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
          <p>No shirts found.</p>
          <span>Try another search or explore all pieces.</span>
          <button className="text-button" type="button" onClick={() => { setQuery(''); setActiveCategory('All pieces') }}>Reset filters <ArrowUpRight aria-hidden="true" /></button>
        </div>
      )}

      <div className="catalog-bottom-note"><span>{filteredProducts.length.toString().padStart(2, '0')} pieces</span><span>Made for what&apos;s next.</span></div>
      {selectedProduct && <ProductDetail key={selectedProduct.id} product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </section>
  )
}
