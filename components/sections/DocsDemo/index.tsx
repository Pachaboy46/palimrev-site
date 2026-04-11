"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import SidebarOverlay from "./SidebarOverlay";
import { type TabId } from "@/components/layout/Navbar";
import { SIDEBAR_DATA } from "@/data/sidebar";

interface DocsDemoProps {
  activeTab: TabId | null;
}

const TAB_NAMES: Record<TabId, string> = {
  services: "Services",
  process: "Process",
  industries: "Industries",
  documentation: "Documentation",
  developers: "Developers",
  about: "About",
};

export default function DocsDemo({ activeTab: propActiveTab }: DocsDemoProps) {
  const activeTab: TabId = propActiveTab || "documentation";

  const [activeItems, setActiveItems] = useState<Record<TabId, string>>({
    services: "Outdated Formats",
    process: "Audit",
    industries: "Industrial & Manufacturing",
    documentation: "Overview",
    developers: "Authentication",
    about: "Our Story",
  });

  const [overlayOpen, setOverlayOpen] = useState(false);
  const [overlayItem, setOverlayItem] = useState<string | null>(null);
  const [breadcrumb, setBreadcrumb] = useState("Documentation / Getting Started / Overview");

  // Close panel when the user switches tabs
  useEffect(() => {
    setOverlayOpen(false);
  }, [activeTab]);

  useEffect(() => {
    const tabName = TAB_NAMES[activeTab];
    const itemLabel = activeItems[activeTab];

    const categories = SIDEBAR_DATA[activeTab] || [];
    const category = categories.find(cat => cat.items.includes(itemLabel));
    const categoryName = category ? category.category.replace(/^\S+\s/, "") : "";

    setBreadcrumb(`${tabName} / ${categoryName} / ${itemLabel}`);
  }, [activeTab, activeItems]);

  const handleItemClick = (tab: TabId, item: string) => {
    setActiveItems(prev => ({ ...prev, [tab]: item }));
    setOverlayItem(item);
    setOverlayOpen(true);
  };

  return (
    <motion.section
      id="docs-demo"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "transparent",
        borderTop: "1px solid var(--color-border)",
        minHeight: "100vh",
      }}
    >
      {/* Breadcrumb bar */}
      <div style={{
        padding: "1.5rem 2rem",
        borderBottom: "1px solid var(--color-border)",
        fontSize: "0.7rem",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: "rgba(255,255,255,0.35)",
        background: "linear-gradient(to right, rgba(24,24,24,0.10) 0%, rgba(24,24,24,0.10) 32%, transparent 100%)",
      }}>
        {breadcrumb}
      </div>

      {/* Body */}
      <div style={{
        display: "flex",
        flex: 1,
        background: "linear-gradient(to right, rgba(24,24,24,0.10) 0%, rgba(24,24,24,0.10) 32%, transparent 100%)",
      }}>
        <Sidebar
          activeTab={activeTab}
          activeItems={activeItems}
          onItemClick={handleItemClick}
        />

        {/* Right area — empty state when no panel is open */}
        {!overlayOpen && (
          <div style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.12)",
            }}>
              Select a topic from the sidebar
            </p>
          </div>
        )}
      </div>

      <SidebarOverlay
        item={overlayItem}
        isOpen={overlayOpen}
        onClose={() => setOverlayOpen(false)}
      />
    </motion.section>
  );
}
