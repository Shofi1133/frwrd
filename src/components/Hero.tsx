import { ArrowUpRight } from 'lucide-react'

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
    </section>
  )
}
