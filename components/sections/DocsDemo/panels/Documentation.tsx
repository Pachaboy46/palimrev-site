import React from "react";

const h1Style: React.CSSProperties = {
  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
  marginBottom: "1.5rem",
};

const h3Style: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "1rem",
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  marginTop: "2.5rem",
  marginBottom: "1rem",
  color: "#fff",
};

const pStyle: React.CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.7,
  color: "rgba(255,255,255,0.7)",
  marginBottom: "1.5rem",
};

const calloutStyle: React.CSSProperties = {
  borderLeft: "3px solid var(--color-accent)",
  padding: "1.5rem 2rem",
  background: "rgba(164,221,242,0.06)",
  margin: "2rem 0",
  fontSize: "0.9rem",
};

const stepListStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: "2rem 0",
};

const stepItemStyle: React.CSSProperties = {
  padding: "1.5rem 1.5rem 1.5rem 4rem",
  position: "relative",
  borderLeft: "1px solid var(--color-border)",
  marginLeft: "1.5rem",
  marginBottom: "1rem",
};

const stepNumberStyle: React.CSSProperties = {
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
};

const strongStyle: React.CSSProperties = {
  display: "block",
  fontWeight: 700,
  marginBottom: "0.5rem",
  color: "#fff",
};

const stepPStyle: React.CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.7,
  color: "rgba(255,255,255,0.7)",
  margin: 0,
};

export default function Documentation() {
  return (
    <>
      <h1 style={h1Style}>Getting Started with PalimRev</h1>
      <p style={pStyle}>
        This guide walks you through what to expect when you engage PalimRev for
        a documentation migration or modernization project.
      </p>

      <h3 style={h3Style}>Prerequisites</h3>
      <p style={pStyle}>
        Before we begin, ensure your team has access to existing legacy source
        files, any internal style guides, and a point of contact who can answer
        domain-specific questions during the migration.
      </p>

      <ol style={stepListStyle}>
        <li style={stepItemStyle}>
          <span style={stepNumberStyle}>1</span>
          <strong style={strongStyle}>Discovery</strong>
          <p style={stepPStyle}>
            We map out every legacy asset — PDFs, Word docs, wikis, printed
            binders — and classify by type, format, and priority.
          </p>
        </li>
        <li style={stepItemStyle}>
          <span style={stepNumberStyle}>2</span>
          <strong style={strongStyle}>Scope</strong>
          <p style={stepPStyle}>
            Detailed project plan including technical stack selection, timeline,
            and per-document transformation rules.
          </p>
        </li>
        <li style={stepItemStyle}>
          <span style={stepNumberStyle}>3</span>
          <strong style={strongStyle}>Migrate</strong>
          <p style={stepPStyle}>
            Automated and manual transformation of content into your target
            format — Markdown, MDX, Confluence, or custom CMS.
          </p>
        </li>
        <li style={stepItemStyle}>
          <span style={stepNumberStyle}>4</span>
          <strong style={strongStyle}>Handoff</strong>
          <p style={stepPStyle}>
            Final verification, training, and deployment. You own the output
            entirely — no lock-in.
          </p>
        </li>
      </ol>

      <div style={calloutStyle}>
        Need something custom? Reach out at{" "}
        <a href="mailto:kyle@palimrev.com" style={{ color: "var(--color-accent)" }}>
          kyle@palimrev.com
        </a>
      </div>
    </>
  );
}
