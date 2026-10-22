---
locale: en
translationKey: cross-site-scripting-xss-a-practical-overview
publishDate: 2026-08-20T00:00:00Z
author: "Priya Nair"
title: "Cross-Site Scripting (XSS): A Practical Overview"
excerpt: "Cross-site scripting lets an attacker run malicious JavaScript in another user's browser session, often by injecting a script into content the site later d..."
image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersecurity — Threats & Attacks"
category: "Threats & Attacks"
tags:
  - appsec
  - xss
---

Cross-site scripting lets an attacker run malicious JavaScript in another user's browser session, often by injecting a script into content the site later displays.

## Key points

- Stored XSS is generally more dangerous than reflected XSS, since the malicious script persists and affects every user who views the compromised content.
- Content Security Policy (CSP) headers can significantly limit the damage XSS can do even if a vulnerability exists.
- Proper output encoding, based on the context (HTML, JavaScript, URL), is the core defense — not just input validation alone.

## The takeaway

XSS remains common because output encoding is easy to get wrong in exactly the contexts developers don't think to check.
