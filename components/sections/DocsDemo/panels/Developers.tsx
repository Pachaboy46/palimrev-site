import React from "react";

const CodeBlock = ({ code }: { code: string }) => {
  const handleCopy = () => navigator.clipboard.writeText(code);
  return (
    <div style={{ position: "relative", margin: "1.5rem 0" }}>
      <button
        onClick={handleCopy}
        style={{
          position: "absolute", top: "0.75rem", right: "1rem",
          background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
          color: "rgba(255,255,255,0.5)", fontSize: "0.6rem", padding: "0.25rem 0.5rem",
          cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.1em", zIndex: 1,
        }}
      >
        Copy
      </button>
      <pre style={{
        background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.08)",
        padding: "1.5rem 2rem", fontFamily: "var(--font-mono)", fontSize: "0.82rem",
        lineHeight: "1.7", color: "#dcdcdc", overflowX: "auto",
      }}>
        <code dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    </div>
  );
};

const thStyle: React.CSSProperties = {
  fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em",
  padding: "0.75rem 1rem", borderBottom: "2px solid var(--color-border)",
  color: "rgba(255,255,255,0.5)", textAlign: "left",
};

const tdStyle: React.CSSProperties = {
  padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-border)",
  color: "rgba(255,255,255,0.7)",
};

export default function Developers() {
  const code1 = `<span class="cm"># HTTP header example</span>
Authorization: <span class="str">Bearer YOUR_API_KEY</span>
Content-Type: <span class="str">application/json</span>`;

  const code2 = `<span class="kw">const</span> response = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">'https://api.palimrev.com/v1/projects'</span>, {
  method: <span class="str">'GET'</span>,
  headers: {
    <span class="str">'Authorization'</span>: <span class="str">'Bearer YOUR_API_KEY'</span>,
    <span class="str">'Content-Type'</span>: <span class="str">'application/json'</span>
  }
});
<span class="kw">const</span> data = <span class="kw">await</span> response.<span class="fn">json</span>();`;

  const code3 = `<span class="kw">import</span> requests

headers = {
    <span class="str">"Authorization"</span>: <span class="str">"Bearer YOUR_API_KEY"</span>,
    <span class="str">"Content-Type"</span>: <span class="str">"application/json"</span>
}
response = requests.<span class="fn">get</span>(<span class="str">"https://api.palimrev.com/v1/projects"</span>, headers=headers)`;

  return (
    <>
      <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginBottom: "1.5rem" }}>
        Authentication
      </h1>
      <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem" }}>
        All API requests must be authenticated using a Bearer token in the HTTP header.
      </p>

      <CodeBlock code={code1} />
      <CodeBlock code={code2} />
      <CodeBlock code={code3} />

      <table style={{ width: "100%", borderCollapse: "collapse", margin: "2rem 0", fontSize: "0.85rem" }}>
        <thead>
          <tr>
            <th style={thStyle}>Field</th>
            <th style={thStyle}>Type</th>
            <th style={thStyle}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}><code>id</code></td>
            <td style={tdStyle}>string</td>
            <td style={tdStyle}>The unique identifier for the project</td>
          </tr>
          <tr>
            <td style={tdStyle}><code>status</code></td>
            <td style={tdStyle}>enum</td>
            <td style={tdStyle}>Current state: processing, completed, or failed</td>
          </tr>
          <tr>
            <td style={tdStyle}><code>updated_at</code></td>
            <td style={tdStyle}>iso8601</td>
            <td style={tdStyle}>Last modification timestamp</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
