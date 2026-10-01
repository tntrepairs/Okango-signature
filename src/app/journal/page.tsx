const entries = [
  ['Design note', 'The dial reads like channels of water rather than decoration.'],
  ['Material note', '316L steel and sapphire crystal keep the first release practical and polished.'],
  ['Cultural note', 'The mokoro caseback gives the watch a quiet narrative moment on the wrist.'],
];

export const metadata = {
  title: 'Journal | Okavango Signature',
  description: 'Design notes and brand journal from Okavango Signature.',
};

export default function JournalPage() {
  return (
    <>
      <section className="subpage-hero">
        <p className="eyebrow">Journal</p>
        <h1>Signals from the Delta.</h1>
        <p>
          Short notes on the design language, launch story, and luxury direction
          behind Okavango Signature.
        </p>
      </section>

      <section className="journal-grid">
        {entries.map(([label, copy], index) => (
          <article className="journal-card" key={label}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{label}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>
    </>
  );
}
