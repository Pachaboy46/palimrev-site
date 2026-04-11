"use client";

import { useState } from "react";

const TABS = [
  { id: "services",      label: "Services" },
  { id: "process",       label: "Process" },
  { id: "industries",    label: "Industries" },
  { id: "documentation", label: "Documentation" },
  { id: "developers",    label: "Developers" },
  { id: "about",         label: "About" },
] as const;

export type TabId = (typeof TABS)[number]["id"];

interface NavbarProps {
  activeTab: TabId | null;
  onTabClick: (tab: TabId) => void;
}

export default function Navbar({ activeTab, onTabClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "var(--navbar-h)",
        zIndex: 1000,
        background: "rgba(17, 17, 17, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--color-border)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* Wordmark */}
        <a href="/" style={{ display: "flex", flexDirection: "column", gap: "0.1rem", textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1.35rem",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "var(--color-text)",
              lineHeight: 1,
            }}
          >
            PalimRev.
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.58rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1,
            }}
          >
            Documentation Migration Specialists
          </span>
        </a>

        {/* Tab buttons — desktop */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            listStyle: "none",
            flex: 1,
            justifyContent: "center",
          }}
          className="hidden-mobile"
        >
          {TABS.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => onTabClick(tab.id)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: activeTab === tab.id ? "var(--color-text)" : "rgba(255,255,255,0.55)",
                  padding: "0.5rem 0.85rem",
                  transition: "color 0.2s",
                  borderBottom: activeTab === tab.id ? "2px solid var(--color-accent)" : "2px solid transparent",
                }}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Contact CTA */}
        <a
          href="#contact"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-bg)",
            background: "var(--color-accent)",
            padding: "0.6rem 1.4rem",
            whiteSpace: "nowrap",
            transition: "background 0.2s",
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
