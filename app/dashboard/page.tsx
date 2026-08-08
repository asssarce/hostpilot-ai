export default function DashboardPage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 24px" }}>
      <p style={{ fontWeight: 700 }}>HOSTPILOT AI / DASHBOARD</p>
      <h1>Hospitality intelligence</h1>
      <p style={{ color: "#666", maxWidth: 700 }}>The dashboard will become the operational surface for property data, guest conversations, pricing signals, and local recommendations.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 32 }}>
        {[
          ["Occupancy", "Connect property inventory and availability."],
          ["Guest questions", "Connect knowledge sources and conversation history."],
          ["Pricing", "Add demand signals and pricing rules."],
          ["Local recommendations", "Connect places, events, and activity data."],
        ].map(([title, text]) => (
          <section key={title} style={{ padding: 24, border: "1px solid #e5e5e5", borderRadius: 16, background: "white" }}>
            <h2 style={{ marginTop: 0 }}>{title}</h2><p style={{ color: "#666" }}>{text}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
