"use client";

import React from "react";
import { type TabId } from "@/components/layout/Navbar";
import { SIDEBAR_DATA } from "@/data/sidebar";

interface SidebarProps {
  activeTab: TabId;
  activeItems: Record<TabId, string>;
  onItemClick: (tab: TabId, item: string) => void;
}

export default function Sidebar({ activeTab, activeItems, onItemClick }: SidebarProps) {
  const categories = SIDEBAR_DATA[activeTab] || [];
  const activeItem = activeItems[activeTab];

  return (
    /*
      zIndex: 1001 — must be above the overlay wrapper (201) so the panel
      slides out from *behind* the sidebar's leading edge.
      position: sticky keeps the sidebar in view as you scroll within the
      docs section, then scrolls away naturally with the section.
      alignSelf: flex-start is required for sticky to work in a flex container.
    */
    <aside
      style={{
        position: "sticky",
        top: "90px",
        alignSelf: "flex-start",
        width: "260px",
        height: "calc(100vh - 90px)",
        flexShrink: 0,
        zIndex: 1001,
        background: "var(--color-bg)",
        borderRight: "1px solid var(--color-border)",
        padding: "2rem 0",
        overflowY: "auto",
      }}
    >
      {categories.map((cat, i) => (
        <div key={i}>
          <div style={{
            fontSize: "0.6rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            padding: "0 1.5rem 0.5rem",
            color: "rgba(255,255,255,0.35)",
            marginTop: i === 0 ? 0 : "1.5rem",
          }}>
            {cat.category}
          </div>
          {cat.items.map(item => (
            <div
              key={item}
              onClick={() => onItemClick(activeTab, item)}
              style={{
                display: "block",
                padding: activeItem === item
                  ? "0.5rem 1.5rem 0.5rem calc(2.5rem - 2px)"
                  : "0.5rem 1.5rem 0.5rem 2.5rem",
                fontSize: "0.82rem",
                cursor: "pointer",
                color: activeItem === item ? "var(--color-accent)" : "rgba(255,255,255,0.65)",
                borderLeft: activeItem === item
                  ? "2px solid var(--color-accent)"
                  : "2px solid transparent",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </aside>
  );
}
