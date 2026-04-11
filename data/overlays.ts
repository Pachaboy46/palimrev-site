export interface OverlayContent {
  title: string;
  subtitle?: string;
  body: string;           // plain text paragraphs (split on \n\n)
  bullets?: string[];     // optional bullet points
  callout?: string;       // optional callout box text
  codeExample?: {
    language: string;
    code: string;
  };
}

export const OVERLAYS: Record<string, OverlayContent> = {
  // Services
  "Outdated Formats": {
    title: "Outdated Formats",
    subtitle: "Modernizing Legacy Documentation",
    body: "Static PDFs and scanned documents represent a significant bottleneck for modern engineering teams. These formats are difficult to search, impossible to link, and painful to update. When critical information is trapped in 'dead' documents, decision-making slows down and error rates climb.\n\nPalimRev specializes in extracting high-value intelligence from these legacy containers. We don't just 'OCR' your files; we re-structure the content into semantic, web-ready formats that live where your team actually works.",
    bullets: [
      "Deconstruction of complex PDF layouts",
      "Table and diagram extraction to vector/HTML",
      "Semantic tagging for advanced searchability",
      "Automatic cross-reference restoration"
    ],
    callout: "Static documents are where knowledge goes to die. We bring it back to life."
  },
  "Tribal Knowledge": {
    title: "Tribal Knowledge",
    subtitle: "Institutional Memory Preservation",
    body: "Much of your organization's most valuable operational logic exists only in the minds of senior engineers or in unwritten 'shadow procedures.' This tribal knowledge creates extreme single-point-of-failure risks and makes scaling operations nearly impossible.\n\nOur methodology involves structured interviewing and observation to capture these nuances. We transform implicit expertise into explicit, documented procedures that can be trained, audited, and improved upon.",
    bullets: [
      "Subject Matter Expert (SME) extraction sessions",
      "Standardization of non-documented workflows",
      "Visual process mapping and documentation",
      "Knowledge redundancy planning"
    ]
  },
  "Bandwidth Gaps": {
    title: "Bandwidth Gaps",
    subtitle: "Augmenting Your Engineering Team",
    body: "Internal documentation projects often fail because your best engineers are too busy solving core technical problems to write manuals. Documentation becomes the 'infinite backlog' item that never gets addressed.\n\nPalimRev acts as a specialized extension of your team. We handle the heavy lifting of migration, structuring, and writing, allowing your SMEs to focus on verification rather than creation. We fill the gap between 'knowing how it works' and 'having it documented.'",
    bullets: [
      "Zero-drag on core engineering cycles",
      "Specialized technical writing resources",
      "Scalable migration throughput",
      "Project management for documentation lifecycles"
    ]
  },
  "PDF Libraries": {
    title: "PDF Libraries",
    subtitle: "Bulk Document Conversion",
    body: "Managing a library of thousands of legacy PDFs is a maintenance nightmare. Searching across them is inconsistent, and maintaining version control is nearly impossible.\n\nWe provide bulk conversion services that transform entire PDF repositories into a unified, searchable web portal. Every diagram, table, and specification is extracted and normalized into a consistent digital format.",
    bullets: [
      "Massive throughput extraction",
      "Automated metadata tagging",
      "Duplicate and version conflict detection",
      "Centralized web-portal delivery"
    ]
  },
  "Word / DOCX Files": {
    title: "Word / DOCX Files",
    subtitle: "From Word-to-Web",
    body: "Microsoft Word is a great word processor but a poor platform for technical documentation. Versioning is manual, styling is inconsistent, and it doesn't scale to complex inter-linked systems.\n\nPalimRev converts your DOCX libraries into clean, structured Markdown or MDX. We strip out the 'Word-bloat' and replace it with a clean design system that ensures every document looks professional and stays consistent.",
    codeExample: {
      language: "markdown",
      code: "# Technical Specification\n\n## Component A\n- Precision: +/- 0.001mm\n- Material: Grade 5 Titanium\n\n> Note: All measurements in SI units."
    }
  },
  "Legacy Help Systems": {
    title: "Legacy Help Systems",
    subtitle: "RoboHelp, MadCap, WinHelp Migration",
    body: "Old help systems like RoboHelp or legacy CHM files are increasingly incompatible with modern browsers and security standards. They often rely on outdated navigation paradigms that frustrate users.\n\nWe migrate these legacy systems into modern, responsive documentation sites. We preserve your existing content while upgrading the user experience with modern search, deep linking, and mobile-responsive layouts.",
    bullets: [
      "Preservation of existing TOC structures",
      "Migration of conditional text and variables",
      "Link integrity verification",
      "Modern search engine integration"
    ]
  },
  "Wikis & Intranets": {
    title: "Wikis & Intranets",
    subtitle: "Confluence & SharePoint Migration",
    body: "Internal wikis often become 'document dumps' where information is hard to find and maintenance is non-existent. Over time, the signal-to-noise ratio drops until the system is abandoned.\n\nWe specialize in cleaning and migrating wiki content into structured, high-performance documentation hubs. We audit the content, remove the rot, and re-organize everything for maximum discoverability.",
    bullets: [
      "Content rot auditing and removal",
      "Information architecture redesign",
      "Automated migration from Confluence/SharePoint",
      "Cross-departmental knowledge mapping"
    ]
  },
  "Web-Hosted Docs Site": {
    title: "Web-Hosted Docs Site",
    subtitle: "Modern Deliverables",
    body: "The ultimate goal of our migration is a high-performance, web-hosted documentation site. This isn't just a collection of files; it's a living platform that serves your users and engineers exactly what they need.\n\nOur hosted sites are optimized for speed, SEO (internal or external), and ease of use. They feature instant search, version switching, and seamless navigation across thousands of pages.",
    bullets: [
      "Sub-second page transitions",
      "Algolia or local search integration",
      "Dark/Light mode support",
      "Automatic PDF generation from web content"
    ]
  },
  "Searchable Knowledge Base": {
    title: "Searchable Knowledge Base",
    subtitle: "Instant Information Retrieval",
    body: "Information is only valuable if it can be found. Most internal systems rely on basic keyword matching that fails to understand context or technical synonyms.\n\nWe implement advanced search architectures that index your content semantically. This means your team can find 'calibration procedures' even if the document is titled 'Instrument Adjustment Guide.'",
    callout: "Search should be a conversation, not a guessing game."
  },
  "Structured Content (MDX)": {
    title: "Structured Content (MDX)",
    subtitle: "Documentation as Code",
    body: "MDX allows you to embed interactive React components directly into your documentation. This transforms static manuals into interactive tools where users can calculate values, view 3D models, or trigger API calls.\n\nPalimRev builds your documentation on an MDX foundation, future-proofing your content and enabling a level of interactivity that traditional formats can't match.",
    codeExample: {
      language: "tsx",
      code: "import { CalibrationTool } from './components';\n\n# Instrument Calibration\n\nUse the tool below to calculate your offset:\n\n<CalibrationTool baseValue={10.5} />"
    }
  },
  "Style Guide & Training": {
    title: "Style Guide & Training",
    subtitle: "Sustaining Documentation Excellence",
    body: "A migration is only successful if your team can maintain it. We don't just hand over the keys; we provide the roadmap for future growth.\n\nWe deliver a custom style guide and provide hands-on training for your team. This ensures that new documentation created after our engagement matches the high standards we've established together.",
    bullets: [
      "Custom voice and tone guidelines",
      "Technical writing workshops",
      "Git-based workflow training",
      "Template libraries for new content"
    ]
  },

  // Process
  "Audit": {
    title: "Audit",
    subtitle: "Phase 1: Discovery",
    body: "The audit phase is where we map the 'as-is' state of your documentation landscape. We look beyond the files to understand the workflows, the bottlenecks, and the hidden risks.\n\nOur team conducts a comprehensive review of your existing assets, identifying format fragmentation, content obsolescence, and critical gaps in institutional knowledge.",
    bullets: [
      "Format and compatibility assessment",
      "Content freshness and accuracy check",
      "Redundancy identification",
      "Stakeholder interviews"
    ]
  },
  "Asset Inventory": {
    title: "Asset Inventory",
    subtitle: "Cataloging Your Knowledge",
    body: "Before we can migrate, we must know exactly what exists. We create a master inventory of every document, manual, guide, and wiki page in your organization.\n\nThis inventory serves as the source of truth for the entire project, ensuring that no critical piece of information is left behind in the move.",
    callout: "You can't manage what you haven't measured. Our inventory is the blueprint for your migration."
  },
  "Gap Analysis": {
    title: "Gap Analysis",
    subtitle: "Identifying What's Missing",
    body: "An audit shows us what you have; a gap analysis shows us what you're missing. We compare your existing documentation against operational requirements and safety standards.\n\nWe identify missing procedures, incomplete manuals, and undocumented safety protocols that could represent a liability or operational risk.",
    bullets: [
      "Requirement-to-Content mapping",
      "Compliance coverage review",
      "Safety procedure verification",
      "Workflow 'blind spot' detection"
    ]
  },
  "Scope Definition": {
    title: "Scope Definition",
    subtitle: "Phase 2: Planning",
    body: "Success starts with clear boundaries. In this phase, we define exactly what is in-scope and out-of-scope for the migration project.\n\nWe prioritize assets based on business value and risk, ensuring that the most critical documentation is addressed first and with the highest level of care.",
    bullets: [
      "Prioritized asset list",
      "Deliverable specifications",
      "Integration requirements",
      "Boundary definitions"
    ]
  },
  "Fixed-Price Proposal": {
    title: "Fixed-Price Proposal",
    subtitle: "Budget Certainty",
    body: "We believe documentation projects shouldn't be 'black holes' of time and money. Based on our audit and scope, we provide a transparent, fixed-price proposal.\n\nNo hourly billing surprises. You know exactly what you're getting and exactly what it will cost before we write a single line of code.",
    callout: "Predictability is a feature. Our fixed-price model ensures project alignment from day one."
  },
  "Timeline": {
    title: "Timeline",
    subtitle: "Milestones and Deadlines",
    body: "Documentation migrations are complex, but they shouldn't be endless. We provide a detailed timeline with clear milestones and a firm completion date.\n\nTypical projects range from 4 to 12 weeks, depending on the volume and complexity of the assets being migrated.",
    bullets: [
      "Phased delivery schedules",
      "Bi-weekly progress reviews",
      "Hard deadlines for handoff",
      "Resource allocation plan"
    ]
  },
  "Migration Execution": {
    title: "Migration Execution",
    subtitle: "Phase 3: Implementation",
    body: "This is where the transformation happens. Our engineers and technical writers execute the heavy lifting of extraction, normalization, and re-structuring.\n\nWe use a combination of proprietary automation tools and manual refinement to ensure that every document is accurately converted and beautifully presented in the new system.",
    bullets: [
      "Automated content extraction",
      "Manual layout refinement",
      "Cross-reference reconstruction",
      "Media and asset optimization"
    ]
  },
  "QA & Review": {
    title: "QA & Review",
    subtitle: "Ensuring Precision",
    body: "Technical documentation must be accurate. Our QA process involves multiple layers of review, checking for both technical correctness and adherence to the design system.\n\nWe coordinate with your SMEs to verify complex procedures and ensure that the migrated content meets the practical needs of your team.",
    bullets: [
      "Technical accuracy verification",
      "Design and layout audit",
      "Link and navigation testing",
      "Mobile and cross-browser QA"
    ]
  },
  "Staging Deploy": {
    title: "Staging Deploy",
    subtitle: "Client Preview",
    body: "Before going live, we deploy your new documentation site to a private staging environment. This allows your team to experience the final product in a real-world setting.\n\nYou can browse the content, test the search, and provide feedback on the user experience before the final handoff.",
    callout: "See it, test it, love it—before it goes to production."
  },
  "Production Handoff": {
    title: "Production Handoff",
    subtitle: "Phase 4: Completion",
    body: "The final phase is the formal transition of the project to your team. We provide a complete handoff package including all source files, build scripts, and deployment documentation.\n\nWe ensure your internal IT or DevOps team is fully equipped to host and manage the platform moving forward.",
    bullets: [
      "Full source code access",
      "Deployment documentation",
      "Asset library handoff",
      "Admin credentials and access"
    ]
  },
  "Team Training": {
    title: "Team Training",
    subtitle: "Empowering Your Team",
    body: "We don't leave you with a system you don't understand. We conduct hands-on training sessions to ensure your team is comfortable maintaining and expanding the new documentation.\n\nWe cover everything from basic content editing to complex MDX component usage and deployment workflows.",
    bullets: [
      "Content editor training",
      "Developer workflow sessions",
      "Admin and maintenance training",
      "Best practices workshop"
    ]
  },
  "Maintenance Plan": {
    title: "Maintenance Plan",
    subtitle: "Ongoing Support",
    body: "While our hosted sites are designed for low maintenance, we offer optional ongoing support plans for organizations that want peace of mind.\n\nThis can include regular security updates, feature additions, and continued technical writing support as your products and procedures evolve.",
    callout: "Optional. Scalable. Expert. We stay as involved as you need us to be."
  },

  // Industries
  "Industrial & Manufacturing": {
    title: "Industrial & Manufacturing",
    subtitle: "Precision Documentation",
    body: "Manufacturing documentation is often the most fragmented and legacy-burdened in the industry. Thousands of pages of machinery specs, safety protocols, and assembly guides are often trapped in paper binders or static PDFs.\n\nPalimRev specializes in digitizing these critical assets, making them accessible on the factory floor via tablets and mobile devices while ensuring they meet rigorous safety and compliance standards.",
    bullets: [
      "Assembly line procedure digitization",
      "Machine specification normalization",
      "Safety and HAZMAT documentation",
      "Mobile-first factory floor delivery"
    ]
  },
  "Equipment Manuals": {
    title: "Equipment Manuals",
    subtitle: "Interactive Repair and Operation",
    body: "Traditional equipment manuals are difficult to navigate and easy to lose. When a machine is down, every minute spent searching for a repair procedure is lost revenue.\n\nWe transform static manuals into interactive guides with clickable diagrams, instant search, and step-by-step interactive troubleshooting.",
    bullets: [
      "Exploded view diagram interactivity",
      "Searchable parts catalogs",
      "Troubleshooting logic trees",
      "Video and media integration"
    ]
  },
  "Safety Procedures": {
    title: "Safety Procedures",
    subtitle: "OSHA and Safety Compliance",
    body: "Safety documentation isn't just about information; it's about liability and lives. We ensure your safety procedures are accessible, current, and impossible to ignore.\n\nWe structure safety docs to be 'glanceable'—using clear visual hierarchies and standardized formatting to ensure critical warnings are seen and understood.",
    callout: "Safety information should be accessible in 3 clicks or less. We make that a reality."
  },
  "Instrument Guides": {
    title: "Instrument Guides",
    subtitle: "Lab and Field Documentation",
    body: "Precision instruments require precision documentation. We handle the complex tables, calibration curves, and technical specs common in lab and field instrument guides.\n\nOur migration process ensures that mathematical formulas and technical data remain accurate and perfectly formatted across all devices.",
    bullets: [
      "LaTeX math support",
      "High-resolution technical drawing extraction",
      "Calibration table normalization",
      "Unit conversion tools integration"
    ]
  },
  "Calibration Docs": {
    title: "Calibration Docs",
    subtitle: "Standardizing Accuracy",
    body: "Calibration procedures are often the most strictly audited documents in an engineering firm. We ensure these procedures are perfectly structured for both compliance and practical use.\n\nWe can integrate interactive calculators and verification checklists directly into the documentation to ensure procedures are followed exactly as written.",
    codeExample: {
      language: "typescript",
      code: "interface CalibrationPoint {\n  input: number;\n  tolerance: number;\n  expected: number;\n}\n\nconst point1: CalibrationPoint = { input: 10.0, tolerance: 0.01, expected: 10.0 };"
    }
  },
  "Compliance Records": {
    title: "Compliance Records",
    subtitle: "Audit-Ready Documentation",
    body: "Compliance documentation is often a scattered mess of records and certifications. We unify these into a structured, audit-ready system that makes proving compliance a breeze.\n\nWe implement versioning and change-tracking at a granular level, providing a clear paper trail for auditors and internal stakeholders.",
    bullets: [
      "Granular version history",
      "Audit trail logging",
      "Certification tracking",
      "Regulatory cross-mapping"
    ]
  },
  "HVAC Documentation": {
    title: "HVAC Documentation",
    subtitle: "Building Systems Knowledge",
    body: "HVAC and Building Automation Systems (BAS) involve complex inter-linked documentation across multiple vendors and decades of equipment life. Information is often lost during handoffs between contractors and facilities teams.\n\nWe consolidate these disparate documents into a unified facilities knowledge base, making it easy for maintenance teams to troubleshoot and maintain building systems.",
    bullets: [
      "Multi-vendor manual consolidation",
      "BAS logic documentation",
      "Maintenance schedule integration",
      "P&ID diagram digitization"
    ]
  },
  "BMS Operation Manuals": {
    title: "BMS Operation Manuals",
    subtitle: "Building Management Mastery",
    body: "Building Management Systems (BMS) are the brains of modern infrastructure. Documenting their operation requires a deep understanding of both software and physical systems.\n\nWe specialize in creating clear, operational guides for BMS software, ensuring that facilities managers can effectively monitor and control their environments.",
    bullets: [
      "Software interface walkthroughs",
      "Alarm response protocols",
      "Energy management procedures",
      "System override documentation"
    ]
  },
  "Commissioning Guides": {
    title: "Commissioning Guides",
    subtitle: "From Startup to Steady State",
    body: "Commissioning is a critical but often poorly documented phase of a project's lifecycle. We transform commissioning checklists and startup procedures into interactive digital workflows.\n\nThis ensures that every step of the commissioning process is tracked, verified, and documented for the final project handoff.",
    callout: "The bridge between construction and operation. We document the transition."
  },
  "Legacy Platform Migrations": {
    title: "Legacy Platform Migrations",
    subtitle: "Enterprise Software Rescue",
    body: "When enterprise software reaches end-of-life, the documentation often disappears with it. We rescue this critical knowledge from dying platforms and migrate it to modern, accessible web formats.\n\nThis ensures that your team can continue to maintain and use legacy systems even after the original vendors have moved on.",
    bullets: [
      "Platform-agnostic content extraction",
      "Database-to-Markdown migration",
      "Screenshots and media preservation",
      "Legacy API documentation rescue"
    ]
  },
  "Internal Knowledge Bases": {
    title: "Internal Knowledge Bases",
    subtitle: "Engineering Team Wikis",
    body: "Engineering wikis are where institutional knowledge often goes to hide. We transform these disorganized dumps into high-performance, structured knowledge hubs.\n\nWe focus on information architecture and findability, ensuring that your engineers spend less time searching and more time building.",
    bullets: [
      "Semantic tagging and categorization",
      "Cross-linking between systems",
      "Search optimization",
      "Contributor workflow design"
    ]
  },
  "End-of-Life Systems": {
    title: "End-of-Life Systems",
    subtitle: "Preserving Sunset Technologies",
    body: "Sunset platforms are an inevitable part of the enterprise lifecycle. The challenge is preserving the knowledge required to maintain them during the sunset period.\n\nPalimRev provides specialized archival and migration services for EOL systems, ensuring that documentation remains available as long as the systems are in operation.",
    callout: "The technology may be sunsetting, but the knowledge shouldn't fade away."
  },

  // Documentation
  "Overview": {
    title: "Overview",
    subtitle: "Documentation Excellence",
    body: "PalimRev is built on the belief that documentation is not an afterthought—it is a core engineering asset. We provide end-to-end migration and modernization services that transform legacy information into high-performance digital platforms.\n\nWhether you're dealing with 10,000 PDFs or a fragmented internal wiki, we have the tools and expertise to bring your documentation into the modern era.",
    bullets: [
      "Strategy and planning",
      "Bulk content migration",
      "Platform development",
      "Team enablement and training"
    ]
  },
  "Quick Start Guide": {
    title: "Quick Start Guide",
    subtitle: "Starting Your Migration Journey",
    body: "Getting started with PalimRev is designed to be low-friction. We begin with a simple discovery call to understand your documentation landscape and business goals.\n\nFrom there, we move into a rapid audit phase where we provide a clear roadmap and fixed-price proposal for your migration.",
    bullets: [
      "Initial discovery call",
      "Asset landscape review",
      "Phased implementation roadmap",
      "Zero-risk pilot projects"
    ]
  },
  "User Manuals": {
    title: "User Manuals",
    subtitle: "Customer-Facing Documentation",
    body: "User manuals are often the first point of contact for your customers. If they are difficult to use, it reflects poorly on your product. We create web-based user manuals that are beautiful, searchable, and always up-to-date.\n\nWe focus on clarity, accessibility, and modern UI patterns to ensure your customers get the help they need without the frustration of traditional formats.",
    bullets: [
      "Mobile-responsive layout",
      "Instant search functionality",
      "Interactive 3D models and video",
      "Multi-language support (i18n)"
    ]
  },
  "Service Manuals": {
    title: "Service Manuals",
    subtitle: "Empowering Field Service",
    body: "Field service technicians need information fast. We build service manuals optimized for tablet and mobile use in the field. This includes offline access, high-resolution wiring diagrams, and step-by-step repair guides.\n\nWe transform dense service bulletins and repair manuals into an interactive troubleshooting platform that reduces time-to-repair and minimizes errors.",
    bullets: [
      "Offline-first field access",
      "Interactive wiring diagrams",
      "Step-by-step troubleshooting",
      "Replacement part deep-linking"
    ]
  },
  "Parts Manuals": {
    title: "Parts Manuals",
    subtitle: "Interactive Catalogs",
    body: "Searching for parts in a 500-page PDF is a frustrating experience. We build interactive parts catalogs where users can click on an exploded view diagram to find the exact part number and specifications they need.\n\nWe can integrate these catalogs with your existing e-commerce or ERP systems to enable one-click ordering and real-time inventory checks.",
    bullets: [
      "SVG-based interactive diagrams",
      "Real-time ERP integration",
      "Smart part number searching",
      "Legacy catalog normalization"
    ]
  },
  "Installation Manuals": {
    title: "Installation Manuals",
    subtitle: "Ensuring Correct Setup",
    body: "Correct installation is critical for product performance and warranty compliance. We build installation guides that use clear visual cues and interactive checklists to guide installers through the process.\n\nBy digitizing installation manuals, you can track completion rates and ensure that every installer is using the most current revision of the guide.",
    bullets: [
      "Visual-first instructions",
      "Interactive completion checklists",
      "Environment-specific requirements",
      "Verification photo uploads"
    ]
  },
  "Hardware Installation": {
    title: "Hardware Installation",
    subtitle: "Physical System Setup",
    body: "Hardware installation requires a mix of physical procedures and technical specs. We document these with a focus on 'glove-friendly' interfaces and clear, high-contrast diagrams suitable for workshop environments.\n\nWe focus on the critical path to success, highlighting potential pitfalls and safety requirements at every step of the installation.",
    bullets: [
      "Torque and spec verification",
      "High-contrast wiring schematics",
      "Physical layout guides",
      "Tools and material checklists"
    ]
  },
  "Software Setup": {
    title: "Software Setup",
    subtitle: "Configuration and Deployment",
    body: "Software setup documentation should be as modern as the software itself. We build setup guides that include copy-pasteable code snippets, interactive configuration generators, and clear environment prerequisites.\n\nWe focus on reducing 'time-to-first-success' by providing clear, linear paths through complex software configurations.",
    codeExample: {
      language: "bash",
      code: "# Install the PalimRev CLI\ncurl -sSL https://api.palimrev.com/install | sh\n\n# Configure your environment\npalimrev init --apiKey YOUR_KEY"
    }
  },
  "Integration Guides": {
    title: "Integration Guides",
    subtitle: "Connecting Systems",
    body: "Integration guides are the bridge between your product and the rest of the enterprise stack. We build guides that clearly define API contracts, authentication flows, and data mapping requirements.\n\nWe include interactive 'Try It Now' buttons and live API explorers to help developers integrate with your systems faster and with fewer errors.",
    bullets: [
      "Interactive API explorers",
      "Sequence diagrams for auth flows",
      "Data mapping templates",
      "Webhooks and event documentation"
    ]
  },
  "Pre-Installation Checklist": {
    title: "Pre-Installation Checklist",
    subtitle: "Preventing On-Site Delays",
    body: "The most expensive installation is the one that can't be completed because the site wasn't ready. We transform static pre-install checklists into interactive digital forms that must be completed before an installer is dispatched.\n\nThis ensures that all prerequisites—power, connectivity, physical space—are verified in advance, saving time and money for everyone.",
    callout: "Measure twice, install once. Our checklists ensure you're ready from day one."
  },
  "Technical Specifications": {
    title: "Technical Specifications",
    subtitle: "Data-Driven Docs",
    body: "Technical specifications shouldn't be trapped in static tables. We build spec sheets that are searchable, sortable, and exportable. We can even link them directly to your engineering database to ensure they are always accurate.\n\nWe handle complex units, tolerances, and material properties with precision and clear visual presentation.",
    bullets: [
      "Searchable data tables",
      "Unit conversion toggle",
      "CAD model integration",
      "Material property cross-reference"
    ]
  },
  "Compliance & Certifications": {
    title: "Compliance & Certifications",
    subtitle: "Proving Quality",
    body: "We organize your compliance and certification documentation into a structured, easy-to-navigate library. This is critical for highly regulated industries like aerospace, medical, and manufacturing.\n\nWe ensure that the right certifications are always associated with the right product versions and regions, simplifying the audit process.",
    bullets: [
      "Certification library",
      "Regional compliance mapping",
      "Expiration tracking",
      "Audit trail export"
    ]
  },
  "Product Summaries": {
    title: "Product Summaries",
    subtitle: "Concise Technical Overviews",
    body: "Sometimes your users just need the 'highlights.' We create high-level product summaries that provide the essential technical information without the density of a full manual.\n\nThese summaries are perfect for sales engineering, executive reviews, and quick reference in the field.",
    bullets: [
      "Glanceable spec summaries",
      "Key feature highlights",
      "Use-case documentation",
      "Compatibility matrices"
    ]
  },
  "Revision History": {
    title: "Revision History",
    subtitle: "Tracking Evolution",
    body: "Documentation is a living thing. We implement robust revision tracking that shows exactly what changed, when it changed, and why.\n\nWe provide 'diff' views that allow users to compare different versions of a procedure or specification, ensuring they are always aware of the latest updates.",
    callout: "Knowing what changed is just as important as knowing what is current."
  },
  "Wiki Migration": {
    title: "Wiki Migration",
    subtitle: "Modernizing Internal Knowledge",
    body: "Wiki migrations are about more than just moving text. They are about re-imposing structure on chaos. We audit your existing wiki, identify the high-value content, and migrate it into a professional documentation platform.\n\nWe focus on preserving the 'collaborative spirit' of the wiki while adding the structure, search, and performance of a modern web app.",
    bullets: [
      "Content rot auditing",
      "Automated cleanup scripts",
      "Information architecture redesign",
      "Redirect management"
    ]
  },
  "Internal Portals": {
    title: "Internal Portals",
    subtitle: "Enterprise Knowledge Hubs",
    body: "Internal portals are the central nervous system of an engineering organization. We build high-performance portals that consolidate documentation, tools, and resources into a single, secure location.\n\nOur portals feature SSO integration, role-based access control, and advanced search across all internal assets.",
    bullets: [
      "SSO/Okta integration",
      "Role-based content access",
      "Unified internal search",
      "Department-specific dashboards"
    ]
  },
  "Help Centers": {
    title: "Help Centers",
    subtitle: "Scalable Customer Support",
    body: "A great help center reduces support tickets by empowering users to find answers themselves. We build help centers that combine structured documentation with intelligent FAQ systems and community resources.\n\nWe focus on search intent and user journey, ensuring that users find the right answer in the minimum amount of time.",
    bullets: [
      "Intent-based search",
      "Top-article highlights",
      "Support ticket integration",
      "User feedback loops"
    ]
  },
  "FAQ Systems": {
    title: "FAQ Systems",
    subtitle: "Answers at the Speed of Thought",
    body: "Most FAQ systems are just long lists of text that are hard to search. We build structured FAQ systems that are categorized, searchable, and semantically linked to your main documentation.\n\nWe use modern UI patterns like accordions and 'instant-filter' search to make finding answers fast and intuitive.",
    bullets: [
      "Instant-filter search",
      "Semantic linking to manuals",
      "User-driven popularity ranking",
      "Admin analytics for gap detection"
    ]
  },

  // Developers
  "Authentication": {
    title: "Authentication",
    subtitle: "Secure API Access",
    body: "The PalimRev API uses Bearer token authentication. Every request to our API must include a valid 'Authorization' header containing your API key.\n\nAPI keys can be generated and managed within your developer dashboard. Treat your API key as a password—never share it or commit it to your version control system.",
    codeExample: {
      language: "http",
      code: "GET /v1/documents HTTP/1.1\nHost: api.palimrev.com\nAuthorization: Bearer YOUR_API_KEY"
    },
    callout: "Keep your keys secret. Use environment variables for all API interactions."
  },
  "Endpoints": {
    title: "Endpoints",
    subtitle: "Available API Resources",
    body: "Our REST API is organized around resources such as Documents, Assets, and Jobs. Each endpoint supports standard HTTP verbs (GET, POST, PUT, DELETE) and returns JSON-formatted responses.\n\nWe maintain strict versioning on our API to ensure that your integrations don't break as we add new features and improvements.",
    bullets: [
      "/v1/documents - List and manage content",
      "/v1/assets - Media and file management",
      "/v1/jobs - Track migration progress",
      "/v1/search - Semantic search execution"
    ]
  },
  "Request / Response": {
    title: "Request / Response",
    subtitle: "Data Exchange Format",
    body: "All PalimRev API requests should include 'Content-Type: application/json'. Responses are returned in standard JSON format, including metadata for pagination and error handling.\n\nWe use standard HTTP status codes to indicate the success or failure of an API request. Detailed error messages are included in the response body to help you debug quickly.",
    codeExample: {
      language: "json",
      code: "{\n  \"status\": \"success\",\n  \"data\": {\n    \"id\": \"doc_123\",\n    \"title\": \"Calibration Guide\"\n  }\n}"
    }
  },
  "Webhooks": {
    title: "Webhooks",
    subtitle: "Event-Driven Documentation",
    body: "Webhooks allow your system to receive real-time notifications about events in PalimRev. For example, you can trigger a deployment in your own CI/CD pipeline as soon as a migration job is completed.\n\nWe support signed webhook payloads to ensure that the data you receive is authentically from PalimRev.",
    bullets: [
      "document.updated - Content change event",
      "job.completed - Migration finished",
      "asset.created - New media added",
      "security.alert - Access warnings"
    ]
  },
  "Rate Limits": {
    title: "Rate Limits",
    subtitle: "API Performance Quotas",
    body: "To ensure consistent performance for all users, we implement rate limiting on our API endpoints. Standard limits are 100 requests per minute for standard accounts and 1000 for enterprise accounts.\n\nIf you exceed these limits, our API will return a 429 'Too Many Requests' status code. We include headers in every response indicating your current limit and remaining quota.",
    callout: "Building a heavy integration? Contact us for custom rate limit profiles."
  },
  "JavaScript / Node.js": {
    title: "JavaScript / Node.js",
    subtitle: "Official JS SDK",
    body: "Our JavaScript SDK is the fastest way to integrate PalimRev into your web application or Node.js backend. It features full TypeScript support, built-in retry logic, and an intuitive promise-based API.\n\nInstall it via npm or yarn and be up and running in minutes.",
    codeExample: {
      language: "javascript",
      code: "import PalimRev from '@palimrev/sdk';\n\nconst client = new PalimRev('YOUR_KEY');\nconst docs = await client.documents.list();"
    }
  },
  "Python": {
    title: "Python",
    subtitle: "Official Python SDK",
    body: "For data science and backend engineering teams, our Python SDK provides a clean, Pythonic interface to the PalimRev API. It is compatible with Python 3.8+ and integrates perfectly with common libraries like Pandas for data analysis.\n\nInstall via pip and start automating your documentation workflows.",
    codeExample: {
      language: "python",
      code: "import palimrev\n\nclient = palimrev.Client(api_key=\"YOUR_KEY\")\nresult = client.documents.search(\"calibration\")"
    }
  },
  "REST API": {
    title: "REST API",
    subtitle: "Language-Agnostic Access",
    body: "Our REST API follows standard RESTful principles, allowing you to interact with PalimRev using any language or tool that supports HTTP. This is ideal for custom integrations or languages where an official SDK isn't yet available.\n\nWe provide a full OpenAPI (Swagger) specification for our API, allowing you to generate your own client libraries in seconds.",
    bullets: [
      "Standard HTTP verbs",
      "JSON payloads",
      "Stateless authentication",
      "OpenAPI 3.0 specification"
    ]
  },
  "cURL Examples": {
    title: "cURL Examples",
    subtitle: "Quick CLI Testing",
    body: "Testing the PalimRev API from your terminal is simple using cURL. These examples provide a quick way to verify your API key and test basic endpoint functionality without writing any code.\n\nAlways remember to replace 'YOUR_API_KEY' with your actual key from the dashboard.",
    codeExample: {
      language: "bash",
      code: "curl -X GET \"https://api.palimrev.com/v1/documents\" \\\n     -H \"Authorization: Bearer YOUR_API_KEY\""
    }
  },
  "Content Management Systems": {
    title: "Content Management Systems",
    subtitle: "CMS Integrations",
    body: "PalimRev isn't meant to live in a silo. We provide native integrations for popular CMS platforms like Contentful, Strapi, and WordPress. This allows you to manage your technical documentation alongside your marketing content.\n\nOur CMS connectors handle the mapping between structured documentation formats and your CMS's data model automatically.",
    bullets: [
      "Contentful App integration",
      "Strapi provider for MDX",
      "WordPress sync plugin",
      "Headless CMS webhooks"
    ]
  },
  "Version Control (Git)": {
    title: "Version Control (Git)",
    subtitle: "Documentation as Code",
    body: "We believe documentation should follow the same best practices as software. Our platform integrates directly with GitHub, GitLab, and Bitbucket, allowing you to manage your docs using the same branch, PR, and review workflows you use for code.\n\nWhen you push a change to your documentation repository, PalimRev automatically triggers a build and deploy process.",
    bullets: [
      "GitHub App integration",
      "Branch-based previews",
      "Pull request reviews for docs",
      "Git-hash version tracking"
    ]
  },
  "CI/CD Pipelines": {
    title: "CI/CD Pipelines",
    subtitle: "Automated Documentation Builds",
    body: "Automating your documentation build process is key to maintaining a fast development cycle. Our CLI and API can be easily integrated into Jenkins, CircleCI, or GitHub Actions.\n\nThis ensures that your documentation is always in sync with your codebase and that every release is accompanied by accurate, up-to-date manuals.",
    codeExample: {
      language: "yaml",
      code: "steps:\n  - uses: actions/checkout@v2\n  - name: Build Docs\n    run: palimrev build --env production"
    }
  },
  "Search Indexing": {
    title: "Search Indexing",
    subtitle: "Global Search Integration",
    body: "Don't force your users to search in multiple places. We provide search indexing hooks that allow you to feed your documentation content into global enterprise search platforms like Algolia, ElasticSearch, or Coveo.\n\nThis makes your technical manuals discoverable alongside your marketing site, support portal, and internal intranet.",
    bullets: [
      "Algolia crawler support",
      "ElasticSearch bulk indexing",
      "Semantic metadata export",
      "Instant-search UI components"
    ]
  },
  "Markdown / MDX": {
    title: "Markdown / MDX",
    subtitle: "The Developer's Choice",
    body: "Markdown is the industry standard for developer-facing documentation. We take it a step further with MDX, allowing you to embed interactive React components directly into your docs.\n\nThis provides the perfect balance of ease-of-writing and powerful interactivity. Our platform handles the complex compilation and rendering of MDX so you don't have to.",
    codeExample: {
      language: "markdown",
      code: "# Hello World\n\nThis is **Markdown**.\n\n<InteractiveComponent name=\"PalimRev\" />"
    }
  },
  "DITA / XML": {
    title: "DITA / XML",
    subtitle: "Enterprise Standard Support",
    body: "For organizations that rely on DITA or other XML-based documentation standards, PalimRev provides robust ingestion and normalization tools.\n\nWe preserve the semantic structure and conditional logic of your DITA maps while transforming the output into a modern, high-performance web experience.",
    bullets: [
      "DITA Map ingestion",
      "Conditional text processing",
      "XML-to-Markdown normalization",
      "Content reuse preservation"
    ]
  },
  "HTML Output": {
    title: "HTML Output",
    subtitle: "High-Performance Delivery",
    body: "Our platform generates clean, accessible, and high-performance HTML. We use modern static-site generation techniques to ensure that your documentation loads instantly and performs perfectly on any device.\n\nWe focus on semantic HTML and accessibility (A11y) to ensure that your documentation is usable by everyone.",
    bullets: [
      "W3C valid HTML5",
      "WCAG 2.1 compliance",
      "SEO optimized structure",
      "Zero-JS fallback support"
    ]
  },
  "PDF Export": {
    title: "PDF Export",
    subtitle: "Web-to-Print Precision",
    body: "While the web is our primary platform, we understand that sometimes you just need a PDF. Our platform includes high-fidelity PDF generation that creates professional, print-ready documents from your web content.\n\nWe use CSS Paged Media standards to ensure that your PDFs have correct page numbering, table of contents, and high-resolution diagrams.",
    callout: "One source, multiple outputs. Perfect web docs, perfect PDFs."
  },

  // About
  "Our Story": {
    title: "Our Story",
    subtitle: "From Chaos to Order",
    body: "PalimRev was founded by a team of engineers who were tired of seeing brilliant technical projects fail due to poor documentation. We saw millions of dollars wasted as teams struggled with legacy formats, tribal knowledge, and bandwidth gaps.\n\nWe set out to build the tools and the team necessary to fix this problem at scale. Today, we help some of the world's most complex engineering organizations modernize their knowledge bases and accelerate their operations.",
    callout: "The documentation revolution started here."
  },
  "Mission": {
    title: "Mission",
    subtitle: "Accelerating Human Expertise",
    body: "Our mission is to ensure that the world's technical knowledge is accessible, structured, and actionable. We believe that when information is free from the friction of legacy formats, engineering teams can build faster, safer, and more innovatively.\n\nWe are dedicated to building the bridge between institutional memory and modern operational excellence, one migration at a time.",
    bullets: [
      "Eliminate documentation friction",
      "Preserve institutional expertise",
      "Empower engineering teams",
      "Standardize technical knowledge"
    ]
  },
  "The Team": {
    title: "The Team",
    subtitle: "Engineers and Writers",
    body: "The PalimRev team is a unique blend of software engineers, technical writers, and information architects. We don't just 'write manuals'; we build the systems that power them.\n\nOur diverse background allows us to speak the language of your SMEs while understanding the technical constraints of your IT and development teams.",
    bullets: [
      "Senior Technical Writers",
      "Information Architects",
      "Full-stack Documentation Engineers",
      "Project Management Experts"
    ]
  },
  "Methodology": {
    title: "Methodology",
    subtitle: "The PalimRev Way",
    body: "Our methodology is built on three pillars: Audit, Automate, and Augment. We begin by understanding the landscape, use automation to handle the bulk migration, and then augment the results with expert technical refinement.\n\nThis approach allows us to achieve higher quality and faster turnaround times than traditional manual migration methods.",
    bullets: [
      "Data-driven auditing",
      "Proprietary extraction tools",
      "Human-in-the-loop refinement",
      "Continuous feedback cycles"
    ]
  },
  "Quality Standards": {
    title: "Quality Standards",
    subtitle: "Uncompromising Precision",
    body: "At PalimRev, 'good enough' is never an option for technical documentation. We adhere to the highest standards of accuracy, clarity, and design consistency.\n\nEvery project goes through a multi-stage QA process, including technical verification by subject matter experts and rigorous design audits.",
    bullets: [
      "Technical accuracy checks",
      "Stylistic consistency audit",
      "Accessibility (A11y) verification",
      "Cross-device performance testing"
    ]
  },
  "Tools We Use": {
    title: "Tools We Use",
    subtitle: "Our Tech Stack",
    body: "We use a combination of industry-standard tools and proprietary technology to execute our migrations. This includes advanced OCR and extraction engines, custom Markdown compilers, and high-performance hosting platforms.\n\nOur tech stack is designed for maximum flexibility, allowing us to handle everything from ancient paper scans to modern DITA XML.",
    bullets: [
      "Next.js and MDX for delivery",
      "Algolia for advanced search",
      "Custom Python-based extraction scripts",
      "Pandoc for format normalization"
    ]
  },
  "Turnaround Times": {
    title: "Turnaround Times",
    subtitle: "Speed Without Sacrifice",
    body: "We understand that documentation needs are often urgent. Our automated extraction pipeline allows us to deliver high-quality migrations in a fraction of the time required for manual work.\n\nTypical turnaround times range from 4 weeks for small projects to 12 weeks for massive enterprise-wide migrations.",
    callout: "Accelerate your documentation timeline by 3-5x compared to manual migration."
  },
  "Get a Quote": {
    title: "Get a Quote",
    subtitle: "Starting the Conversation",
    body: "Ready to modernize your documentation? Getting a quote is simple. We'll start with a 15-minute discovery call to understand your needs and then provide a detailed, fixed-price proposal within 48 hours.\n\nNo commitment, no pressure—just a clear roadmap for your documentation success.",
    bullets: [
      "15-minute discovery call",
      "Asset volume estimation",
      "Fixed-price proposal",
      "Implementation roadmap"
    ]
  },
  "Support": {
    title: "Support",
    subtitle: "We're Here to Help",
    body: "PalimRev provides comprehensive support for all our migration projects. Whether you have a technical question during the build or need help with a complex MDX component, our team is just a message away.\n\nWe offer both project-based support and ongoing maintenance plans to fit your organization's needs.",
    bullets: [
      "24/7 technical support",
      "Priority bug fixes",
      "Maintenance and updates",
      "Feature request pipeline"
    ]
  },
  "Careers": {
    title: "Careers",
    subtitle: "Join the Revolution",
    body: "We are always looking for talented technical writers, developers, and information architects who are passionate about making the world's technical knowledge accessible.\n\nAt PalimRev, you'll work on some of the most complex documentation challenges in the industry, helping world-class engineering teams achieve operational excellence.",
    callout: "Build the future of documentation with us."
  }
};
