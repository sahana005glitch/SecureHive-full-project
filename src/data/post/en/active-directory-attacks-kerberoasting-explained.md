---
locale: en
translationKey: active-directory-attacks-kerberoasting-explained
publishDate: 2026-07-09T00:00:00Z
author: "Meera Iyer"
title: "Active Directory Attacks: Kerberoasting Explained"
excerpt: "Kerberoasting exploits how Windows Active Directory issues service tickets, letting an attacker request tickets for service accounts and crack their passwo..."
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersecurity — Identity & Access"
category: "Identity & Access"
tags:
  - active-directory
  - kerberoasting
---

Kerberoasting exploits how Windows Active Directory issues service tickets, letting an attacker request tickets for service accounts and crack their passwords offline.

## Key points

- Because the cracking happens offline, an attacker can take as long as needed without triggering account lockout policies.
- Service accounts with weak or old passwords are the most common targets, since they're often set once during initial deployment and never rotated.
- Using long, randomly generated passwords for service accounts (ideally managed by a privileged access tool) largely neutralizes this attack.

## The takeaway

Kerberoasting is a good example of an attack that exploits a legitimate protocol feature rather than a bug — the fix is operational hygiene, not a patch.
