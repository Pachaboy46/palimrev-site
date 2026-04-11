import React from "react";

const pStyle: React.CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.7,
  color: "rgba(255,255,255,0.7)",
  marginBottom: "1.5rem",
};

export default function About() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "calc(100vh - 90px)" }}>
      <div style={{ padding: "4rem" }}>
        <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginBottom: "1.5rem" }}>
          We Do One Thing. We Do It Well.
        </h1>
        <p style={pStyle}>
          PalimRev was founded with a singular focus: solving the &ldquo;stale docs&rdquo; problem
          for technical organizations. Over the last 10+ years, we&apos;ve seen how legacy
          documentation slows down innovation and frustrates customers.
        </p>
        <p style={pStyle}>
          We serve industrial, manufacturing, test &amp; measurement, HVAC, and enterprise
          software teams who require high-precision migration without data loss.
        </p>
        <p style={{ ...pStyle, marginTop: "2rem" }}>
          <strong>Core Values</strong>
        </p>
        <p style={pStyle}>Clarity · Precision · Ownership · Reliability</p>
      </div>
      <div style={{
        background: "var(--color-surface)",
        borderLeft: "1px solid var(--color-border)",
        minHeight: "100%",
      }} />
    </div>
  );
}
