import Image from 'next/image';
import Link from 'next/link';

const specs = [
  ['40 mm', 'unisex case'],
  ['P5,200', 'launch price'],
  ['50%', 'deposit'],
];

export default function Home() {
  return (
    <>
      <section className="hero-section" id="top">
        <div className="hero-shell">
          <div className="hero-backdrop" aria-hidden="true" />
          <p className="hero-kicker">Delta Flow Edition</p>
          <h1 className="hero-word">Okavango</h1>
          <div className="hero-watch-mask">
            <Image
              src="/images/delta-flow-watch-cutout.png"
              alt="Okavango Signature Delta Flow watch"
              width={900}
              height={1125}
              priority
              sizes="(max-width: 760px) 88vw, 42vw"
              className="hero-watch"
            />
          </div>
          <div className="hero-copy">
            <span>Blue & silver dials</span>
            <strong>Pre-order by April 30, 2026</strong>
          </div>
          <Link href="/contact" className="hero-cta">
            Reserve yours
            <span aria-hidden="true">→</span>
          </Link>
          <div className="hero-mini">
            <Image
              src="/images/okavango-delta-aerial.jpg"
              alt="Okavango Delta aerial waterways"
              width={280}
              height={160}
            />
            <span>Inspired by the Delta’s channels.</span>
          </div>
        </div>
      </section>

      <section className="ticker-band" aria-label="Brand pillars">
        <span>Delta Flow Edition</span>
        <span>May production release</span>
        <span>Blue and silver dials</span>
      </section>

      <section className="split-section" id="collection">
        <div className="section-copy">
          <p className="eyebrow">First release</p>
          <h2>Time shaped by water.</h2>
          <p>
            The dial traces the Okavango Delta’s waterways across a polished
            40 mm case. Clean, unisex, and made for everyday ceremony.
          </p>
          <div className="spec-grid">
            {specs.map(([label, value]) => (
              <div className="spec-item" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="product-stage">
          <Image
            src="/images/delta-flow-blue.webp"
            alt="Okavango Signature Delta Flow blue dial watch"
            width={760}
            height={760}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="collection-band">
        <article className="delta-panel">
          <Image
            src="/images/okavango-delta-aerial.jpg"
            alt="Okavango Delta aerial waterways"
            width={900}
            height={520}
            sizes="(max-width: 900px) 100vw, 40vw"
          />
        </article>
        <div>
          <p className="eyebrow">Origin</p>
          <h2>Not decoration. Direction.</h2>
          <p>
            The watch takes its visual language from water channels, islands,
            and the quiet geometry of the Delta from above.
          </p>
          <Link href="/contact" className="text-link">Reserve a watch</Link>
        </div>
      </section>

      <section className="reserve-section" id="reserve">
        <p className="eyebrow">Pre-order</p>
        <h2>P5,200. Secure with a 50% deposit.</h2>
        <p>
          First production release arrives in May. Available in blue and silver.
        </p>
        <div className="reserve-actions">
          <a href="mailto:ofannase@gmail.com" className="button primary">
            Email Sales
          </a>
          <a href="https://wa.me/26775568583" className="button secondary">
            WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
