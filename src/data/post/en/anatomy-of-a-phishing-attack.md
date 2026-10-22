---
locale: en
translationKey: anatomy-of-a-phishing-attack
publishDate: 2026-09-10T00:00:00Z
author: "Meera Iyer"
title: "Anatomy of a Phishing Attack: What a Real Campaign Looks Like"
excerpt: "A step-by-step breakdown of how a modern phishing campaign actually unfolds, from the first reconnaissance email to credential theft."
image: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
imageAlt: "Cybersecurity — Threats & Attacks"
category: "Threats & Attacks"
tags:
  - phishing
  - social-engineering
  - email-security
---

Phishing hasn't gone away — it's gotten quieter. The obvious "Nigerian prince" emails of a decade ago have been replaced by campaigns that mimic your actual vendors, your actual coworkers, and your actual login pages. Here's what a real campaign looks like, stage by stage.

## Stage 1: Reconnaissance

Attackers don't guess who to target. They scrape LinkedIn for your org chart, check company press releases for recent hires (new employees click more), and monitor your public DNS records for the SaaS tools you use — because a fake Okta login page only works if the target actually uses Okta.

<img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&amp;q=80" alt="A phishing email inbox showing a spoofed vendor notification" loading="lazy" />

## Stage 2: The pretext

The best-performing phishing emails today aren't urgent-sounding "your account will be suspended" messages — those get flagged by spam filters and trained users alike. The pretexts that work are mundane: a shared document notification, a calendar invite, an invoice from a vendor you actually work with. Boring is what gets clicked.

## Stage 3: The payload

Modern phishing rarely delivers malware directly in the first email — that's what gets caught by mail gateways. Instead, the email links to a legitimate-looking page (often hosted on a compromised but reputable domain, or a throwaway subdomain) that either harvests credentials directly or redirects through several hops before landing on the fake login form.

Watch this short overview of cybersecurity fundamentals:

<iframe
  width="100%"
  height="400"
  src="https://www.youtube-nocookie.com/embed/inWWhr5tnEA"
  title="Cybersecurity overview"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>

## Stage 4: Credential use

This is the part organizations underestimate. Stolen credentials are rarely used immediately by the same attacker — they're often sold or traded, and the actual account compromise happens days or weeks later, from a different IP, at a different time of day, specifically to avoid triggering "impossible travel" alerts.

## What actually reduces click-through rates

- **Phishing simulations** run monthly, not annually — muscle memory fades fast
- **MFA that resists phishing** specifically — SMS and push notifications can be relayed in real time by attacker-in-the-middle kits; FIDO2/security keys can't be
- **Reporting made easy** — a one-click "report phishing" button gets used far more than an email forward to IT

If you want to understand how MFA methods differ in resistance to these attacks, see our piece on [multi-factor authentication bypass techniques](/blog/mfa-bypass-methods). For a deeper look at where phishing fits into a broader identity risk picture, our [privileged access management product overview](/products/privileged-account-manager) covers how to limit the blast radius even after credentials are stolen.

**A note on the sensitive nature of this topic:** understanding attacker techniques is standard practice in defensive security (this is why red teams and phishing simulations exist) — the goal here is recognition, not replication.
