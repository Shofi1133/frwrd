import { ArrowUpRight, Camera } from 'lucide-react'
import { AboutSection } from './components/AboutSection'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ProductCatalog } from './components/ProductCatalog'
import { WHATSAPP_NUMBER } from './data/products'

export default function App() {
  const contactMessage = encodeURIComponent('Halo FRWRD, saya ingin bertanya tentang koleksi kemeja.')

  return (
    <>
      <div className="announcement-bar">Free delivery in Java for orders over Rp750.000 <span>✳</span></div>
      <Navbar />
      <main>
        <Hero />
        <div className="brand-promise" aria-label="FRWRD values">
          <span>Better basics, by design</span><i />
          <span>Designed in Indonesia</span><i />
          <span>Made to be worn on repeat</span>
        </div>
        <ProductCatalog />
        <section className="quote-section" aria-label="FRWRD philosophy">
          <span className="quote-mark">“</span>
          <p>Dress like you mean <em>what&apos;s next.</em></p>
          <span className="quote-caption">FRWRD, ALWAYS FORWARD.</span>
        </section>
        <AboutSection />
        <section className="contact-strip" id="contact">
          <div>
            <p className="eyebrow">We&apos;re just a message away</p>
            <h2>Have a question?<br /><em>Let&apos;s talk.</em></h2>
          </div>
          <a className="button button-light" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${contactMessage}`} target="_blank" rel="noreferrer">
            Chat with us <ArrowUpRight aria-hidden="true" />
          </a>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand-block">
            <a className="wordmark footer-wordmark" href="#home">FRWRD<span className="wordmark-period">.</span></a>
            <p>Shirts for the life<br />you&apos;re moving toward.</p>
          </div>
          <div className="footer-links">
            <span className="footer-label">EXPLORE</span>
            <a href="#shop">Shop all</a>
            <a href="#collections">Collections</a>
            <a href="#about">Our story</a>
          </div>
          <div className="footer-links">
            <span className="footer-label">SAY HELLO</span>
            <a href="https://instagram.com/frwrd" target="_blank" rel="noreferrer"><Camera aria-hidden="true" /> Instagram</a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${contactMessage}`} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight aria-hidden="true" /></a>
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
