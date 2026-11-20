export function SectionHeading({
  id, label, title, tabIndex,
}: { id: string; label: string; title: string; tabIndex?: number }) {
  return (
    <div className="section-heading">
      <span className="script-label">{label}</span>
      <h2 id={id} tabIndex={tabIndex}>{title}</h2>
    </div>
  );
}
