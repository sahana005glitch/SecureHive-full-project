---
publishDate: 2026-06-30T00:00:00Z
author: "Carlos Medina"
title: "Privilege Escalation: Vertical vs. Horizontal"
excerpt: "Privilege escalation describes gaining higher levels of access than originally granted — vertically (from user to admin) or horizontally (accessing another..."
image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersecurity — Threats & Attacks"
category: "Threats & Attacks"
tags:
  - privilege-escalation
  - access-control
---

Privilege escalation describes gaining higher levels of access than originally granted — vertically (from user to admin) or horizontally (accessing another user's equivalent-level resources).

## Key points

- Vertical privilege escalation often exploits software vulnerabilities or misconfigurations that let a standard user execute admin-level actions.
- Horizontal privilege escalation frequently exploits broken access control — an application that fails to verify a user only accesses their own data.
- Regular patching directly addresses many vertical escalation vulnerabilities, while proper authorization checks in application code address horizontal ones.

## The takeaway

Privilege escalation is almost always the second step in a broader attack — the initial foothold is rarely where an attacker wants to stay.
