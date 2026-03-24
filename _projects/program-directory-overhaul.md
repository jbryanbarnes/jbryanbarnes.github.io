---
title: UMBC Academic Programs Directory
date: 2025-06-01
tags:
  - umbc
  - filter-ui
  - javascript
  - wordpress
  - seo
excerpt: Built a 400+ page searchable academic programs directory from scratch — nominated for a CASE Circle of Excellence Award.
featured: true
---

Built the [UMBC Academic Programs Directory](https://umbc.edu/programs) from the ground up — a purpose-built microsite that consolidates more than 400 individual program pages spanning undergraduate majors, graduate degrees, certificates, concentrations, and pre-professional tracks into a single searchable destination.

Nominated for a **2026 CASE Circle of Excellence Award** in Marketing > Microsites.

## The Problem

Previously, program information lived in a single 12,000-pixel-long table at UMBC.edu, with links scattered across departmental pages — no unified search, inconsistent presentation, and no ability to filter by degree level, type, area of study, or campus location.

## What I Built

- Designed and developed the entire program directory (architecture, design, development) and finalized content for 385+ program pages
- Created a faceted search and filtering system spanning degree level, degree type, area of study, and campus location
- Built custom WordPress information architecture and field management to support the full range of degree types under a unified taxonomy
- Led all internal stakeholder management: presented to university leadership, designed a departmental review form, and incorporated feedback from academic units across the institution

## Results (First 9 Months)

- **87,000+ users** generating **446,500+ page views** across 150,400+ sessions
- Traffic grew from 347 users at launch to **20,386 in January 2026** — a 59x increase
- **87% engagement rate** site-wide; **11.6% bounce rate** on the main directory
- **12,277 apply button clicks** and **2,407 completed RFI forms** (22.5% completion rate)
- Organic search drove **68% of all traffic**; Google alone delivered 56,955 users
- **ChatGPT became the 6th-largest traffic source** with 1,147 users — a channel that didn’t exist before launch
- Internal search logs revealed unmet demand for nursing (~1,367 searches) and business (~934), providing new market intelligence for academic leadership

## Technical Highlights

- Rewrote the SearchProcessor, FilterManager, and UIRenderer to fix infinite-loop and overfiltering bugs
- Implemented programKey deduplication to surface distinct titles with multiple degree levels
- Tuned relevance tie-breaking and added clear-all/reset behavior
- Improved performance by lazy-loading filter logic and throttling DOM updates
- SEO treated as a foundational requirement — structured content and metadata designed for both search engines and AI retrieval systems