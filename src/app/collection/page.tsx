import Image from 'next/image';
import Link from 'next/link';

const finishes = [
  {
    name: 'Delta Flow Blue',
    image: '/images/delta-flow-blue.webp',
    copy: 'A deeper dial expression inspired by water channels, evening light, and the Delta from above.',
  },
  {
    name: 'Delta Flow Silver',
    image: '/images/delta-flow-silver.webp',
    copy: 'A clean, luminous finish for formal wear, travel, and daily refinement.',
  },
];

export const metadata = {
  title: 'Collection | Okavango Signature',
  description: 'Explore the Delta Flow Edition by Okavango Signature.',
};

export default function CollectionPage() {
  return (
    <>
      <section className="subpage-hero">
        <p className="eyebrow">The collection</p>
        <h1>Delta Flow Edition</h1>
        <p>
          A focused first release: 40 mm stainless steel, sapphire crystal,
          Japanese Miyota movement, 50 m water resistance, and dial work
          inspired by the Okavango Delta. The sent pre-order note positions it
          as a unisex timepiece available in blue and silver dials.
        </p>
      </section>

      <section className="content-grid">
        {finishes.map((finish) => (
          <article className="content-card" key={finish.name}>
            <Image
              src={finish.image}
              alt={`${finish.name} watch`}
              width={620}
              height={620}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <h3>{finish.name}</h3>
            <p>{finish.copy}</p>
            <Link href="/contact" className="text-link">Reserve this finish</Link>
          </article>
        ))}
        <article className="content-card">
          <h3>Release details</h3>
          <p>
            The sent pre-order note positions the release in blue and silver
            dial options, with a May first production release.
          </p>
          <Link href="/contact" className="text-link">Ask availability</Link>
        </article>
      </section>
    </>
  );
}
