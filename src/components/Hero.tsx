import { ArrowUpRight } from 'lucide-react'

const shirtColors = [
  { name: 'Coklat', hex: '#593a27' },
  { name: 'Hitam', hex: '#171715' },
  { name: 'Cream', hex: '#e8e0cc' },
  { name: 'Army', hex: '#343b24' },
  { name: 'Navy', hex: '#14213a' },
]

export function Hero() {
  return (
    <section className="hero hero-intro" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">Kemeja pria · FRWRD</p>
        <h1 id="hero-title">FRWRD<span className="wordmark-period">.</span></h1>
        <p className="hero-description">
          FRWRD adalah brand kemeja pria yang mengutamakan desain simpel, modern, dan nyaman digunakan. Cocok untuk berbagai aktivitas, mulai dari kegiatan sehari-hari hingga acara formal maupun kasual. Dengan desain yang minimalis dan mudah dipadukan, FRWRD hadir untuk menunjang penampilan pria agar tetap rapi dan stylish.
        </p>
        <a className="button button-dark hero-button" href="#shop">
          Jelajahi koleksi <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <aside className="hero-colorways" aria-label="Lima pilihan warna kemeja FRWRD">
        <div className="hero-colorways-header">
          <span>FRWRD / ESSENTIAL SHIRT</span>
          <span>01 — 05</span>
        </div>
        <div className="hero-colorways-message">
          <p className="hero-colorways-kicker">Satu kemeja, banyak cara.</p>
          <h2>Warna yang<br /><em>pas untukmu.</em></h2>
        </div>
        <ul className="hero-swatches" aria-label="Pilihan warna">
          {shirtColors.map((color) => (
            <li key={color.name}>
              <span className="hero-swatch" style={{ backgroundColor: color.hex }} aria-hidden="true" />
              <span>{color.name}</span>
            </li>
          ))}
        </ul>
        <div className="hero-colorways-footer">
          <span>SIMPLE BY DESIGN</span>
          <span>MADE FOR EVERY DAY</span>
        </div>
      </aside>
    </section>
  )
}
