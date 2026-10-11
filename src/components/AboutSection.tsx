import { ArrowUpRight } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-visual">
        <div className="about-photo">
          <img src="/images/frwrd-hero.png" alt="Detail kemeja linen yang menjadi inspirasi koleksi FRWRD" loading="lazy" />
        </div>
        <span className="about-visual-caption">A little less, a little better.</span>
        <span className="about-stamp" aria-hidden="true">F<br /><span>—</span><br />W</span>
      </div>
      <div className="about-copy">
        <p className="eyebrow">A note from FRWRD</p>
        <h2 id="about-title">Good clothes.<br /><em>Clear intention.</em></h2>
        <p>
          FRWRD berangkat dari satu ide sederhana: kemeja yang terasa nyaman, terlihat rapi, dan tetap jadi diri sendiri. Tanpa berlebihan—hanya potongan yang tepat dan detail yang dipikirkan.
        </p>
        <p>
          Dirancang untuk hidup yang terus bergerak, setiap piece dibuat agar mudah dipakai hari ini, besok, dan seterusnya.
        </p>
        <a className="about-link" href="#contact">Get to know us <ArrowUpRight aria-hidden="true" /></a>
        <span className="about-signature">Move with intention.</span>
      </div>
    </section>
  )
}
