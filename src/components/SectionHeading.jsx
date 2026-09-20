export default function SectionHeading({ number, label, title, accent, children }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number}</span> / {label}</p><h2>{title} <em>{accent}</em></h2></div>{children && <p className="section-intro">{children}</p>}</div>;
}
