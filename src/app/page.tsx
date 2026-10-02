import Image from 'next/image';
import Link from 'next/link';
import DeltaWaterCanvas from '@/components/DeltaWaterCanvas';

const labels = {
  silver: ['Silver dial', 'Roman bezel', 'Delta pattern'],
  blue: ['Blue dial', 'Steel case', 'Delta pattern'],
};

export default function Home() {
  return (
    <>
      <DeltaWaterCanvas />
      <div className="campaign-page">
        <section className="hero-section" id="top">
          <div className="hero-shell">
            <div className="hero-word" aria-hidden="true">Delta Flow</div>
            <div className="hero-copy">
              <p className="hero-kicker">Okavango Signature</p>
              <h1>Delta Flow<br />Edition</h1>
              <span className="hero-rule" aria-hidden="true" />
              <p>Inspired by the channels and islands of the Okavango Delta.</p>
              <Link href="#origin" className="hero-cta">
                Explore Delta Flow
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
            <div className="hero-watch-stage">
              <Image
                src="/images/okavango-watch-hero.png"
                alt="Okavango Signature Delta Flow silver watch"
                width={1086}
                height={1448}
                priority
                sizes="(max-width: 760px) 86vw, 39vw"
                className="hero-watch"
              />
            </div>
          </div>
        </section>

        <section className="origin-section journey-section" id="origin">
          <div className="origin-media section-media">
            <Image
              src="/images/delta-aerial-braided.png"
              alt="Aerial channels and islands of the Okavango Delta"
              width={1680}
              height={945}
              sizes="100vw"
            />
          </div>
          <div className="story-copy origin-copy">
            <p className="section-kicker">Origin</p>
            <h2>Born From The Delta</h2>
            <p>The dial takes its form from the channels and islands of the Okavango Delta.</p>
          </div>
        </section>

        <section className="silver-section journey-section">
          <div className="section-copy story-copy">
            <p className="section-kicker">Silver</p>
            <h2>Delta Flow<br />Silver</h2>
            <p>A silver expression shaped by the Delta's branching waterways.</p>
            <div className="feature-labels">
              {labels.silver.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>
          <div className="watch-figure watch-figure-large">
            <Image
              src="/images/watch-silver-front.png"
              alt="Silver Delta Flow watch"
              width={1148}
              height={1530}
              sizes="(max-width: 900px) 88vw, 44vw"
            />
          </div>
        </section>

        <section className="macro-section journey-section">
          <div className="macro-image section-media">
            <Image
              src="/images/watch-silver-macro.png"
              alt="Close detail of the silver Delta Flow dial"
              width={1200}
              height={1200}
              sizes="(max-width: 900px) 120vw, 66vw"
            />
          </div>
          <div className="story-copy macro-copy">
            <p className="section-kicker">Detail</p>
            <h2>The Delta, Up Close</h2>
            <p>The dial pattern follows the branching character of the Okavango waterways.</p>
          </div>
        </section>

        <section className="water-transition-section journey-section" aria-label="Water transition">
          <Image
            src="/images/water-splash-ribbon.png"
            alt=""
            width={1680}
            height={945}
            sizes="100vw"
            className="water-ribbon"
          />
          <div className="water-words" aria-hidden="true">
            <span>Water</span>
            <span>Land</span>
            <span>Movement</span>
          </div>
        </section>

        <section className="blue-section journey-section">
          <div className="watch-figure blue-watch">
            <Image
              src="/images/watch-blue-map.png"
              alt="Blue Delta Flow watch"
              width={1148}
              height={1530}
              sizes="(max-width: 900px) 86vw, 38vw"
            />
          </div>
          <div className="section-copy story-copy">
            <p className="section-kicker">Blue</p>
            <h2>Delta Flow<br />Blue</h2>
            <p>The same Delta pattern, expressed through a deeper blue dial.</p>
            <div className="feature-labels">
              {labels.blue.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="blue-macro-section journey-section">
          <div className="blue-macro section-media">
            <Image
              src="/images/watch-blue-delta.png"
              alt="Close view of the blue Delta Flow dial"
              width={1250}
              height={1250}
              sizes="(max-width: 900px) 112vw, 62vw"
            />
          </div>
          <div className="story-copy blue-macro-copy">
            <p className="section-kicker">Contrast</p>
            <h2>A Closer Look</h2>
            <p>A deeper dial brings greater contrast to the Delta pattern.</p>
          </div>
        </section>

        <section className="caseback-section journey-section">
          <div className="section-copy story-copy">
            <p className="section-kicker">Reverse</p>
            <h2>The Reverse</h2>
            <p>The caseback carries the Okavango Signature identity.</p>
          </div>
          <div className="caseback-image section-media">
            <Image
              src="/images/watch-caseback.png"
              alt="Okavango Signature watch caseback engraving"
              width={1148}
              height={1530}
              sizes="(max-width: 900px) 90vw, 48vw"
            />
          </div>
        </section>

        <section className="lifestyle-section journey-section">
          <div className="lifestyle-backdrop section-media">
            <Image
              src="/images/delta-aerial-golden.png"
              alt="Golden hour waterways in the Okavango Delta"
              width={1680}
              height={945}
              sizes="100vw"
            />
          </div>
          <div className="lifestyle-watch watch-figure">
            <Image
              src="/images/watch-silver-studio.png"
              alt="Silver Delta Flow watch front view"
              width={1024}
              height={1536}
              sizes="(max-width: 900px) 72vw, 28vw"
            />
          </div>
          <div className="story-copy lifestyle-copy">
            <p className="section-kicker">Wear</p>
            <h2>Made To Be Worn</h2>
            <p>A steel sports-watch silhouette designed for everyday presence.</p>
          </div>
        </section>

        <section className="brand-statement-section journey-section" aria-label="Brand statement">
          <div className="statement-lines">
            <span className="statement-line">Inspired By Home.</span>
            <span className="statement-line">Shaped By The Delta.</span>
            <span className="statement-line brand-line">Okavango Signature</span>
          </div>
        </section>

        <section className="finale-section journey-section" id="reserve">
          <div className="finale-word" aria-hidden="true">Delta Flow</div>
          <div className="finale-watch watch-figure">
            <Image
              src="/images/watch-silver-front.png"
              alt="Okavango Signature Delta Flow watch final reveal"
              width={1148}
              height={1530}
              sizes="(max-width: 900px) 84vw, 34vw"
            />
          </div>
          <div className="story-copy finale-copy">
            <p className="section-kicker">Okavango Signature</p>
            <h2>Delta Flow</h2>
            <Link href="/contact" className="finale-link">Reserve Enquiry</Link>
          </div>
        </section>
      </div>
    </>
  );
}
