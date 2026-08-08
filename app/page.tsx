import Link from "next/link";

const capabilities = [
  ["Guest AI", "Answer common guest questions using property knowledge and policies."],
  ["Dynamic Pricing", "Prepare a pricing engine around demand, occupancy, events, and lead time."],
  ["Local Intelligence", "Recommend places, events, nightlife, and experiences around the property."],
];

export default function Home() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px" }}>
      <p style={{ fontWeight: 700, letterSpacing: 1.5 }}>HOSTPILOT AI</p>
      <h1 style={{ fontSize: "clamp(42px, 7vw, 76px)", lineHeight: 0.98, maxWidth: 850, margin: "24px 0" }}>
        AI infrastructure for modern hospitality.
      </h1>
      <p style={{ fontSize: 20, lineHeight: 1.6, maxWidth: 720, color: "#555" }}>
        A foundation for guest assistance, revenue intelligence, and context-aware local recommendations for hotels and hostels.
      </p>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 56 }}>
        {capabilities.map(([title, description]) => (
          <article key={title} style={{ background: "white", border: "1px solid #e5e5e5", borderRadius: 16, padding: 24 }}>
            <h2 style={{ marginTop: 0 }}>{title}</h2>
            <p style={{ color: "#666", lineHeight: 1.55 }}>{description}</p>
          </article>
        ))}
      </section>
      <p style={{ marginTop: 48 }}><Link href="/dashboard">Open dashboard →</Link></p>
    </main>
  );
}
