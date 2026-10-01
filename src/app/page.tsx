import Image from 'next/image';
import Link from 'next/link';

const specs = [
  ['Case', '40 mm 316L stainless steel'],
  ['Crystal', 'Sapphire front glass'],
  ['Movement', 'Japanese Miyota movement'],
  ['Water', '50 m resistance'],
  ['Fit', 'Unisex case profile'],
  ['Reserve', '50% deposit'],
];

const journal = [
  {
    title: 'The map dial',
    copy: 'A winding dial language inspired by the waterways of the Okavango Delta.',
  },
  {
    title: 'The mokoro caseback',
    copy: 'A quiet engraving that honors the poler, the journey, and the living heritage of the Delta.',
  },
  {
    title: 'Built with purpose',
    copy: 'A portion of each sale is positioned around conservation support for the landscape that inspires the brand.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero-section" id="top">
        <div className="hero-media" aria-hidden="true">
          <Image
            src="/images/delta-flow-hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          <p className="eyebrow">Botswana luxury timepieces</p>
          <h1>Okavango Signature</h1>
          <p className="hero-copy">
            Where heritage meets modern elegance. The Delta Flow Edition carries
            the rhythm of the Okavango Delta into a refined everyday timepiece.
          </p>
          <div className="hero-actions">
            <Link href="/collection" className="button primary">View Collection</Link>
            <Link href="/story" className="button secondary">Read The Story</Link>
          </div>
        </div>
      </section>

      <section className="ticker-band" aria-label="Brand pillars">
        <span>Delta Flow Edition</span>
        <span>Gaborone, Botswana</span>
        <span>316L steel</span>
        <span>Blue and silver dials</span>
        <span>Conservation-minded luxury</span>
      </section>

      <section className="split-section" id="collection">
        <div className="section-copy">
          <p className="eyebrow">First production release</p>
          <h2>Delta Flow, shaped by water and memory.</h2>
          <p>
            The first Okavango Signature watch release draws from the Delta:
            flowing dial lines, a polished 40 mm profile, and a caseback tribute
            to mokoro heritage. It is designed as a Botswana-born luxury object
            with a global wrist presence.
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
        <article>
          <Image
            src="/images/delta-flow-silver.webp"
            alt="Okavango Signature Delta Flow silver dial watch"
            width={620}
            height={620}
            sizes="(max-width: 900px) 100vw, 40vw"
          />
        </article>
        <div>
          <p className="eyebrow">Available finishes</p>
          <h2>Silver restraint. Blue depth.</h2>
          <p>
            The launch language is intentionally focused: two dial moods, one
            story. Silver leans formal and luminous; blue carries the depth of
            water, sky, and evening light over the Delta.
          </p>
          <Link href="/contact" className="text-link">Reserve a watch</Link>
        </div>
      </section>

      <section className="story-section" id="story">
        <div>
          <p className="eyebrow">African luxury, rooted</p>
          <h2>Not only telling time. Telling origin.</h2>
        </div>
        <p>
          Okavango Signature is a Botswana-based luxury brand founded in 2024,
          blending watches, leather goods, jewelry, and fashion with cultural
          storytelling. Its public brand position centers heritage, craft,
          sustainability, and the responsibility of carrying the Delta beyond
          borders.
        </p>
      </section>

      <section className="journal-grid" id="journal">
        {journal.map((item, index) => (
          <article className="journal-card" key={item.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </section>

      <section className="reserve-section" id="reserve">
        <p className="eyebrow">Pre-order direction</p>
        <h2>P5,200 / $395 USD public launch pricing.</h2>
        <p>
          Public brand posts list a 50% deposit model, blue and silver dial
          options, and direct reservations through email, WhatsApp, or call.
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
