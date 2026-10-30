import { ArrowUpRight, Camera } from 'lucide-react'
import { AdminLogin } from './admin/AdminLogin'
import { AdminProducts } from './admin/AdminProducts'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ProductCatalog } from './components/ProductCatalog'
import { PoliciesSection } from './components/PoliciesSection'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_NUMBER } from './data/products'
import './admin/admin.css'

export default function App() {
  if (window.location.pathname === '/admin' || window.location.pathname === '/admin/login') return <AdminLogin />
  if (window.location.pathname.startsWith('/admin/')) return <AdminProducts />

  const contactMessage = encodeURIComponent('Halo FRWRD, saya ingin bertanya tentang koleksi kemeja.')

  return (
    <>
      <div className="announcement-bar">Free delivery across Java <span>✳</span></div>
      <Navbar />
      <main>
        <Hero />
        <ProductCatalog />
        <PoliciesSection />
        <section className="contact-strip" id="contact">
          <div>
            <p className="eyebrow">Kami siap membantu lewat WhatsApp</p>
            <h2>Punya pertanyaan?<br /><em>Hubungi kami.</em></h2>
          </div>
          <a className="button button-light" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${contactMessage}`} target="_blank" rel="noopener noreferrer" aria-label="Pesan FRWRD langsung melalui WhatsApp">
            Pesan via WhatsApp <ArrowUpRight aria-hidden="true" />
          </a>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand-block">
            <a className="wordmark footer-wordmark" href="#home">FRWRD<span className="wordmark-period">.</span></a>
            <p>Kemeja pria simpel,<br />modern, dan nyaman.</p>
          </div>
          <div className="footer-links">
            <span className="footer-label">EXPLORE</span>
            <a href="#shop">Shop all</a>
            <a href="#collections">Collections</a>
            <a href="#home">Tentang FRWRD</a>
            <a href="#size-chart">Size chart</a>
            <a href="#terms">Syarat &amp; ketentuan</a>
          </div>
          <div className="footer-links">
            <span className="footer-label">SAY HELLO</span>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><Camera aria-hidden="true" /> Instagram <span>{INSTAGRAM_HANDLE}</span></a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${contactMessage}`} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight aria-hidden="true" /></a>
            <a href="mailto:hello@frwrd.id">hello@frwrd.id</a>
          </div>
          <a href="#home" className="back-to-top" aria-label="Kembali ke atas">↑</a>
        </div>
        <div className="footer-bottom">
          <span>© 2025 FRWRD STUDIO. ALL RIGHTS RESERVED.</span>
          <span>MADE WITH INTENTION, IN INDONESIA.</span>
        </div>
      </footer>
    </>
  )
}
