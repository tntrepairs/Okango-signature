export const metadata = {
  title: 'Story | Okavango Signature',
  description: 'The story and heritage behind Okavango Signature.',
};

export default function StoryPage() {
  return (
    <>
      <section className="subpage-hero">
        <p className="eyebrow">Brand story</p>
        <h1>Born from the Delta.</h1>
        <p>
          Okavango Signature is a Botswana-based luxury brand shaped by the
          timeless beauty and cultural richness of the Okavango Delta.
        </p>
      </section>

      <section className="content-grid">
        <article className="content-card">
          <h3>Heritage</h3>
          <p>
            The brand language centers origin, identity, and the idea that a
            luxury object can carry a place with it.
          </p>
        </article>
        <article className="content-card">
          <h3>Craft</h3>
          <p>
            Delta Flow uses material restraint and symbolic detail: map-like dial
            flow, stainless steel, sapphire crystal, and a mokoro caseback.
          </p>
        </article>
        <article className="content-card">
          <h3>Purpose</h3>
          <p>
            The public brand position includes conservation support for the
            Okavango Delta and a wider ambition to elevate African luxury.
          </p>
        </article>
      </section>
    </>
  );
}
