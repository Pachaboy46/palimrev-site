import React from "react";

const Callout = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    borderLeft: "3px solid var(--color-accent)",
    padding: "1.5rem 2rem",
    background: "rgba(164,221,242,0.06)",
    margin: "2rem 0",
    fontSize: "0.9rem",
    color: "rgba(255,255,255,0.8)",
  }}>{children}</div>
);

const SectionH3 = ({ children }: { children: React.ReactNode }) => (
  <h3 style={{
    fontFamily: "var(--font-display)",
    fontSize: "1rem",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginTop: "2.5rem",
    marginBottom: "1rem",
    color: "#fff",
  }}>{children}</h3>
);

const steps = [
  {
    label: "Outdated Formats",
    body: "Static PDFs and Word docs aren't searchable, linkable, or mobile-friendly. We convert them to modern web formats.",
  },
  {
    label: "Tribal Knowledge Trapped",
    body: "Critical procedures buried in formats nobody knows how to maintain. We liberate your technical knowledge into structured, editable content.",
  },
  {
    label: "Bandwidth Bottlenecks",
    body: "Your team knows migration needs to happen but can't find the time. We handle 100% of the heavy lifting.",
  },
];

export default function Services() {
  return (
    <>
      <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginBottom: "1.5rem" }}>
        Documentation Migration Services
      </h1>
      <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem" }}>
        We specialize in one thing: taking legacy documentation and transforming it into modern,
        web-hosted, searchable systems your team and customers actually use.
      </p>

      <SectionH3>What We Solve</SectionH3>
      <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem" }}>
        Most organizations accumulate years of documentation debt — PDFs nobody can find, Word docs
        that are three versions out of date, SharePoint wikis nobody maintains. We fix all of it.
      </p>

      <ol style={{ listStyle: "none", padding: 0, margin: "2rem 0" }}>
        {steps.map((s, i) => (
          <li key={i} style={{
            padding: "1.5rem 1.5rem 1.5rem 4rem",
            position: "relative",
            borderLeft: "1px solid var(--color-border)",
            marginLeft: "1.5rem",
            marginBottom: "1rem",
          }}>
            <span style={{
              position: "absolute",
              left: "-1.5rem",
              top: "1.5rem",
              width: "3rem",
              height: "3rem",
              background: "var(--color-accent)",
              color: "#040606",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "0.8rem",
            }}>{i + 1}</span>
            <strong>{s.label}</strong>
            <p style={{ margin: "0.5rem 0 0", fontSize: "0.95rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}>{s.body}</p>
          </li>
        ))}
      </ol>

      <Callout>
        Every engagement starts with a free discovery call.{" "}
        <a href="#contact" style={{ color: "var(--color-accent)", fontWeight: 600 }}>Get a free estimate →</a>
      </Callout>
    </>
  );
}
