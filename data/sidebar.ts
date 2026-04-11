import { type TabId } from "@/components/layout/Navbar";

export const SIDEBAR_DATA: Record<TabId, { category: string; items: string[] }[]> = {
  services: [
    { category: "⚠️ Problems We Solve", items: ["Outdated Formats", "Tribal Knowledge", "Bandwidth Gaps"] },
    { category: "📄 What We Migrate", items: ["PDF Libraries", "Word / DOCX Files", "Legacy Help Systems", "Wikis & Intranets"] },
    { category: "📦 Deliverables", items: ["Web-Hosted Docs Site", "Searchable Knowledge Base", "Structured Content (MDX)", "Style Guide & Training"] },
  ],
  process: [
    { category: "🔍 Phase 1", items: ["Audit", "Asset Inventory", "Gap Analysis"] },
    { category: "📋 Phase 2", items: ["Scope Definition", "Fixed-Price Proposal", "Timeline"] },
    { category: "⚙️ Phase 3", items: ["Migration Execution", "QA & Review", "Staging Deploy"] },
    { category: "✅ Phase 4", items: ["Production Handoff", "Team Training", "Maintenance Plan"] },
  ],
  industries: [
    { category: "🏭 Manufacturing", items: ["Industrial & Manufacturing", "Equipment Manuals", "Safety Procedures"] },
    { category: "🔬 Test & Measurement", items: ["Instrument Guides", "Calibration Docs", "Compliance Records"] },
    { category: "🏢 Building Systems", items: ["HVAC Documentation", "BMS Operation Manuals", "Commissioning Guides"] },
    { category: "💻 Enterprise Software", items: ["Legacy Platform Migrations", "Internal Knowledge Bases", "End-of-Life Systems"] },
  ],
  documentation: [
    { category: "📋 Getting Started", items: ["Overview", "Quick Start Guide"] },
    { category: "📖 Manuals", items: ["User Manuals", "Service Manuals", "Parts Manuals", "Installation Manuals"] },
    { category: "📁 Install Guides", items: ["Hardware Installation", "Software Setup", "Integration Guides", "Pre-Installation Checklist"] },
    { category: "📄 Datasheets", items: ["Technical Specifications", "Compliance & Certifications", "Product Summaries", "Revision History"] },
    { category: "🗂 Knowledge Bases", items: ["Wiki Migration", "Internal Portals", "Help Centers", "FAQ Systems"] },
  ],
  developers: [
    { category: "🔌 API Reference", items: ["Authentication", "Endpoints", "Request / Response", "Webhooks", "Rate Limits"] },
    { category: "📦 SDKs", items: ["JavaScript / Node.js", "Python", "REST API", "cURL Examples"] },
    { category: "⚙️ Integration", items: ["Content Management Systems", "Version Control (Git)", "CI/CD Pipelines", "Search Indexing"] },
    { category: "📝 Formats", items: ["Markdown / MDX", "DITA / XML", "HTML Output", "PDF Export"] },
  ],
  about: [
    { category: "🏢 Company", items: ["Our Story", "Mission", "The Team"] },
    { category: "🎯 Approach", items: ["Methodology", "Quality Standards", "Tools We Use", "Turnaround Times"] },
    { category: "📞 Contact", items: ["Get a Quote", "Support", "Careers"] },
  ],
};
