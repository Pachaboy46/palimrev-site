"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Navbar, { type TabId } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DocsDemo from "@/components/sections/DocsDemo";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId | null>(null);

  // ── Mouse tracking ───────────────────────────────────────────
  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);

  // Springs: low stiffness = slow, floaty hologram feel
  const springX = useSpring(rawX, { stiffness: 35, damping: 22 });
  const springY = useSpring(rawY, { stiffness: 35, damping: 22 });

  // Parallax translation — image moves opposite to cursor
  const bgX = useTransform(springX, [0, 1], [20, -20]);
  const bgY = useTransform(springY, [0, 1], [15, -15]);

  // 3D tilt — subtle rotation follows cursor
  const rotateX = useTransform(springY, [0, 1], [3, -3]);
  const rotateY = useTransform(springX, [0, 1], [-4, 4]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX / window.innerWidth);
      rawY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [rawX, rawY]);

  // ── Tab navigation ───────────────────────────────────────────
  const handleTabClick = (tab: TabId) => {
    setActiveTab(tab);
    const el = document.getElementById("docs-demo");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── Fixed parallax background ────────────────────────── */}
      <motion.div
        style={{
          position: "fixed",
          inset: "-40px",
          zIndex: -1,
          x: bgX,
          y: bgY,
          rotateX,
          rotateY,
          transformPerspective: 1200,
        }}
      >
        {/* Dark base */}
        <div style={{ position: "absolute", inset: 0, background: "#111111" }} />

        {/* Isometric grid — two axis lines at 30° and -30° = true rhombus mesh */}
        <svg
          style={{ position: "absolute", inset: "-20%", width: "140%", height: "140%" }}
          aria-hidden="true"
        >
          <defs>
            {/* Lines running at +30° */}
            <pattern
              id="iso-a"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(30)"
            >
              <line x1="0" y1="0" x2="0" y2="60" stroke="rgba(255,255,255,0.13)" strokeWidth="0.75" />
            </pattern>
            {/* Lines running at -30° */}
            <pattern
              id="iso-b"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(-30)"
            >
              <line x1="0" y1="0" x2="0" y2="60" stroke="rgba(255,255,255,0.13)" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#iso-a)" />
          <rect width="100%" height="100%" fill="url(#iso-b)" />
        </svg>

        {/* Accent blue glow — upper right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 90% 5%, rgba(164,221,242,0.22) 0%, rgba(164,221,242,0.06) 45%, transparent 70%)",
          }}
        />

        {/* Edge vignette — darkens corners so content reads clearly */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 110% 90% at 50% 50%, transparent 35%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </motion.div>

      <Navbar activeTab={activeTab} onTabClick={handleTabClick} />
      <main style={{ paddingTop: "var(--navbar-h)" }}>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "flex-start",
            paddingTop: "170px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(24,24,24,0.10)",
              zIndex: 0,
            }}
          />
          <div style={{ position: "relative", zIndex: 1, padding: "0 4rem" }}>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.1rem, 5.35vw, 4.97rem)",
                fontWeight: 800,
                textTransform: "uppercase",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
                maxWidth: "520px",
              }}
            >
              Your Docs Are Overdue for an Upgrade.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.7)",
                maxWidth: "440px",
                marginBottom: "2.5rem",
                lineHeight: 1.6,
              }}
            >
              We migrate and modernize legacy documentation into searchable,
              web-hosted formats your team and customers will actually use.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.46 }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <a
                href="#contact"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-bg)",
                  background: "var(--color-accent)",
                  padding: "0.9rem 2rem",
                }}
              >
                Get a Free Estimate
              </a>
              <a
                href="#docs-demo"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-text)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  padding: "0.9rem 2rem",
                }}
              >
                See How It Works
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── DocsDemo ─────────────────────────────────────────── */}
        <DocsDemo activeTab={activeTab} />

        {/* ── Contact ──────────────────────────────────────────── */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
