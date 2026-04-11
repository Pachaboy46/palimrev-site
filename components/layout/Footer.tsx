export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "2rem",
        textAlign: "center",
        fontFamily: "var(--font-body)",
        fontSize: "0.75rem",
        color: "rgba(255,255,255,0.3)",
        letterSpacing: "0.05em",
        background: "rgba(17,17,17,0.45)",
      }}
    >
      © {new Date().getFullYear()} PalimRev. All rights reserved.
    </footer>
  );
}
