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

export default function Industries() {
  return (
    <>
      <h1 style={h1Style}>Built for Complex Documentation Environments</h1>
      <p style={pStyle}>
        We focus on industries where documentation accuracy directly impacts
        operations, safety, and compliance.
      </p>

      <h3 style={h3Style}>Industrial &amp; Manufacturing</h3>
      <p style={pStyle}>
        Equipment manuals, process documentation, and OSHA-adjacent safety
        procedures that must remain accurate, versioned, and accessible to
        technicians in the field.
      </p>

      <h3 style={h3Style}>Test &amp; Measurement</h3>
      <p style={pStyle}>
        Instrument guides, calibration procedures, and compliance documentation
        for labs and QA environments where precision is non-negotiable.
      </p>

      <h3 style={h3Style}>Building Automation / HVAC</h3>
      <p style={pStyle}>
        System commissioning guides, controller references, and BMS operation
        manuals built for the technicians who install, maintain, and troubleshoot
        complex building systems.
      </p>

      <h3 style={h3Style}>Legacy Enterprise Software</h3>
      <p style={pStyle}>
        End-of-life platform migrations and internal knowledge base modernization
        for organizations running on decade-old documentation infrastructure.
      </p>

      <div style={calloutStyle}>
        Not sure if we&apos;re a fit?{" "}
        <a href="mailto:kyle@palimrev.com" style={{ color: "var(--color-accent)" }}>
          Email us directly →
        </a>
      </div>
    </>
  );
}
