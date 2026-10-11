import { ArrowDown, ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow"><span /> The modern shirt, redefined</p>
        <h1 id="hero-title">DRESS FOR<br />WHAT&apos;S <em>NEXT.</em></h1>
        <p className="hero-description">
          Built for the everyday. Made for wherever you&apos;re headed.
        </p>
        <a className="button button-dark hero-button" href="#shop">
          Shop Now <ArrowUpRight aria-hidden="true" />
        </a>
        <a className="hero-scroll" href="#collections">
          <span>Scroll to explore</span><ArrowDown aria-hidden="true" />
        </a>
        <span className="hero-index" aria-hidden="true">01 / 04</span>
      </div>
      <div className="hero-image-wrap">
        <img
          className="hero-image"
          src="/images/frwrd-hero.png"
          alt="Model mengenakan kemeja linen FRWRD dalam suasana cahaya hangat"
          fetchPriority="high"
        />
        <div className="hero-image-caption">
          <span>THE EVERYDAY EDIT</span>
          <span>JAKARTA · EST. 2024</span>
        </div>
        <div className="hero-image-note" aria-hidden="true">Made to move with you.</div>
      </div>
    </section>
  )
}
