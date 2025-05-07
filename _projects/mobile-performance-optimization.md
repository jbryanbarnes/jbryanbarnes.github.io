---
title: Mobile Performance Optimization
date: 2025-04-24
tags:
  - umbc
  - performance
  - lighthouse
excerpt: Reduced mobile LCP from 11.2s to 3.8s by reprioritizing intro copy, deferring scripts, and streamlining CSS.
featured: false
---

- Moved the LCP paragraph out of main JS bundle and inlined critical text  
- Deferred non-essential JavaScript and lazy-loaded images  
- Purged unused Tailwind utilities via updated `content` globs  
- Achieved 90+ desktop and 75+ mobile Lighthouse scores  