export const metadata = {
  title: 'Reserve | Okavango Signature',
  description: 'Contact Okavango Signature to reserve the Delta Flow Edition.',
};

export default function ContactPage() {
  return (
    <>
      <section className="subpage-hero">
        <p className="eyebrow">Reserve</p>
        <h1>Begin with the Delta Flow.</h1>
        <p>
          For current availability, reservations, and launch questions, contact
          Okavango Signature directly through the public brand channels below.
        </p>
      </section>

      <section className="content-grid">
        <article className="content-card">
          <h3>Email</h3>
          <p>Send a reservation request with your preferred dial finish.</p>
          <a href="mailto:ofannase@gmail.com" className="text-link">
            ofannase@gmail.com
          </a>
        </article>
        <article className="content-card">
          <h3>WhatsApp</h3>
          <p>Message the team for deposit, pickup, and delivery information.</p>
          <a href="https://wa.me/26775568583" className="text-link">
            +267 7556 8583
          </a>
        </article>
        <article className="content-card">
          <h3>Call</h3>
          <p>Speak with the brand directly from Gaborone, Botswana.</p>
          <a href="tel:+26778600041" className="text-link">
            +267 7860 0041
          </a>
        </article>
      </section>
    </>
  );
}
