---
publishDate: 2026-08-12T00:00:00Z
author: "Priya Nair"
title: "5 Lessons From Scaling Our Infrastructure to 10M Requests a Day"
excerpt: "What broke, what held, and what we'd do differently — a practical look at scaling enterprise infrastructure without losing reliability."
image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersecurity — Engineering"
category: "Engineering"
tags:
  - infrastructure
  - scaling
  - reliability
---

Scaling past a few million requests a day exposes problems that never show up in staging. Here's what we learned the hard way, and how we fixed it.

## 1. Caching saved us, but only after we measured it

We assumed our Redis layer was doing its job. It wasn't — cache hit rate was sitting at 61%, well below what a system at our scale needs. Once we instrumented it properly, we found a handful of hot keys were being invalidated far too aggressively.

<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&amp;q=80" alt="Dashboard showing cache hit rate improving from 61% to 94% over two weeks" loading="lazy" />

## 2. Database connection pooling needed real limits

Read more about connection pooling strategy in the [official PostgreSQL documentation](https://www.postgresql.org/docs/current/runtime-config-connection.html) — this is the resource we leaned on most when tuning our pool sizes.

## 3. Design on-call practices around response health

The [Google SRE Workbook chapter on on-call](https://sre.google/workbook/on-call/) provides practical guidance for structuring on-call responsibilities and incident response.

## 4. Alerting needs fewer, better signals

We cut our PagerDuty alert volume by 70% by consolidating symptom-based alerts into a small number of SLO-based ones. Fewer pages, faster response.

## 5. None of this works without a blameless retro culture

Technical fixes only stick if the team trusts that surfacing a mistake won't be punished. That's the real infrastructure.

---

**Related reading:** see our [Enterprise IT solution](/solutions/enterprise-it) for related access-control capabilities, or [talk to our team](/contact) if you're navigating a similar scaling challenge.
