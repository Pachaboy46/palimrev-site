"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OVERLAYS } from "@/data/overlays";

interface SidebarOverlayProps {
  item: string | null;   // which item's content to show
  isOpen: boolean;       // whether the panel is visible
  onClose: () => void;
}

const NAVBAR_H = 90;
const SIDEBAR_W = 260;

export default function SidebarOverlay({ item, isOpen, onClose }: SidebarOverlayProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const content = item ? OVERLAYS[item] : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="full-panel"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 32 }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "fixed",
            top: NAVBAR_H,
            left: SIDEBAR_W,
            right: 0,
            bottom: 0,
            zIndex: 500,
            background: "rgba(20, 20, 20, 0.5)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderLeft: "1px solid var(--color-border)",
            overflowY: "auto",
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: "sticky",
              top: "1.5rem",
              float: "right",
              marginRight: "2rem",
              marginBottom: "-3rem",
              zIndex: 1,
              background: "none",
              border: "1px solid var(--color-border)",
              color: "rgba(255,255,255,0.5)",
              padding: "0.4rem 0.75rem",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            ✕ Close
          </button>

          {/* Content area */}
          <AnimatePresence mode="wait">
            {content && (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.12 }}
                style={{
                  padding: "4rem 6rem",
                  maxWidth: "960px",
                }}
              >
                <h2 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.5rem",
                  paddingRight: "6rem",
                }}>
                  {content.title}
                </h2>

                {content.subtitle && (
                  <p style={{
                    color: "var(--color-accent)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "2.5rem",
                  }}>
                    {content.subtitle}
                  </p>
                )}

                <div style={{ height: "1px", background: "var(--color-border)", marginBottom: "2.5rem" }} />

                {content.body.split("\n\n").map((para, i) => (
                  <p key={i} style={{
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "1.5rem",
                    maxWidth: "680px",
                  }}>
                    {para}
                  </p>
                ))}

                {content.bullets && (
                  <ul style={{ listStyle: "none", padding: 0, margin: "2rem 0" }}>
                    {content.bullets.map((b, i) => (
                      <li key={i} style={{
                        display: "flex",
                        gap: "0.75rem",
                        alignItems: "flex-start",
                        marginBottom: "0.9rem",
                        fontSize: "0.95rem",
                        color: "rgba(255,255,255,0.7)",
                      }}>
                        <span style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "0.15rem" }}>→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {content.codeExample && (
                  <pre style={{
                    background: "#0d0d0d",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "2rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                    overflowX: "auto",
                    margin: "2rem 0",
                    color: "#dcdcdc",
                  }}>
                    <code>{content.codeExample.code}</code>
                  </pre>
                )}

                {content.callout && (
                  <div style={{
                    borderLeft: "3px solid var(--color-accent)",
                    padding: "1.5rem 2rem",
                    background: "rgba(164,221,242,0.06)",
                    margin: "2rem 0",
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.8)",
                    maxWidth: "680px",
                  }}>
                    {content.callout}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
