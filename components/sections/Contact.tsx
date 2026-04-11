"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" style={{
      borderTop: "1px solid var(--color-border)",
      padding: "6rem 2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "transparent"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "8rem"
      }} className="contact-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div style={{
            fontSize: "0.65rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem"
          }}>
            <span style={{ color: "var(--color-accent)" }}>1.0</span> Contact
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.2rem, 5.5vw, 2.5rem)",
            fontWeight: 800,
            textTransform: "uppercase",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem"
          }}>
            Ready to Modernize Your Documentation?
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.25rem",
            color: "rgba(255,255,255,0.55)",
            maxWidth: "400px",
            lineHeight: 1.5,
            marginBottom: "3rem"
          }}>
            Tell us what you&apos;re working with — whether it&apos;s 500 legacy PDFs or an aging Wiki. We&apos;ll scope it, price it, and get it done.
          </p>
          <p style={{
            fontSize: "0.65rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "0.75rem"
          }}>
            Direct Contact
          </p>
          <a href="mailto:kyle@palimrev.com" style={{ color: "var(--color-accent)", fontWeight: 600, fontSize: "1rem" }}>
            kyle@palimrev.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            action="/thank-you.html"
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.45)" }}>
                Name
              </label>
              <input 
                type="text" 
                name="name" 
                required 
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--color-border)",
                  padding: "1rem",
                  color: "white",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  borderRadius: 0
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.45)" }}>
                Company Name
              </label>
              <input 
                type="text" 
                name="company-name" 
                required 
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--color-border)",
                  padding: "1rem",
                  color: "white",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  borderRadius: 0
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.45)" }}>
                Email
              </label>
              <input 
                type="email" 
                name="email" 
                required 
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--color-border)",
                  padding: "1rem",
                  color: "white",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  borderRadius: 0
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.45)" }}>
                Message
              </label>
              <textarea 
                name="message" 
                required 
                rows={4}
                placeholder="Tell us about your current documentation and where you want to go..."
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--color-border)",
                  padding: "1rem",
                  color: "white",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  borderRadius: 0,
                  resize: "none",
                  height: "180px"
                }}
              ></textarea>
            </div>

            <button 
              type="submit"
              style={{
                background: "var(--color-accent)",
                color: "var(--color-bg)",
                border: "none",
                padding: "1.25rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                cursor: "pointer",
                borderRadius: 0,
                marginTop: "1rem",
                transition: "opacity 0.2s"
              }}
            >
              Submit Inquiry
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
