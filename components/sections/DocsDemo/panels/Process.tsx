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

const steps = [
  {
    label: "Audit",
    body: "We inventory your existing documentation — every PDF, Word doc, Wiki page, and help article. We identify structural gaps, broken links, and outdated content so nothing gets lost in the migration.",
  },
  {
    label: "Scope",
    body: "A fixed-price proposal with exact deliverables and a realistic timeline. You know the full cost before any work begins — no hourly billing, no scope creep.",
  },
  {
    label: "Migrate",
    body: "We restructure, rewrite where needed, and publish your content to a modern, responsive platform. Full QA and client review before any staging deploy.",
  },
  {
    label: "Handoff",
    body: "You receive full ownership of your new system, a team training session, and an optional ongoing maintenance plan. The content is yours — no lock-in.",
  },
];

export default function Process() {
  return (
    <>
      <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginBottom: "1.5rem" }}>
        A Clear Process. No Surprises.
      </h1>
      <p>
        Every PalimRev engagement follows the same four-phase methodology. Fixed price,
        defined scope, no scope creep.
      </p>

      <ol style={{ counterReset: "step", listStyle: "none", padding: 0, margin: "2rem 0" }}>
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
        Typical project timeline: <strong>4–12 weeks</strong> depending on documentation volume.{" "}
        <a href="#contact" style={{ color: "var(--color-accent)", fontWeight: 600 }}>Get scoped →</a>
      </Callout>
    </>
  );
}
