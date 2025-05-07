---
title: Program Directory Overhaul
date: 2025-04-17
tags:
  - umbc
  - filter-ui
  - javascript
excerpt: Refactored UMBC’s program directory search & filter UI, fixing deduplication, relevance sorting, and child-checkbox toggles.
featured: true
---

Led a full rewrite of the SearchProcessor, FilterManager and UIRenderer:

- Fixed infinite-loop and overfiltering issues when unchecking child degree types  
- Implemented programKey deduplication to surface distinct titles with multiple degree levels  
- Tuned relevance tie-breaking and added clear-all/reset behavior  
- Improved performance by lazy-loading filter logic and throttling DOM updates  