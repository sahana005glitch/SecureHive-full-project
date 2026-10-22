---
locale: en
translationKey: pass-the-hash-attacks-and-how-to-defend-against-them
publishDate: 2026-07-06T00:00:00Z
author: "Tom Bennett"
title: "Pass-the-Hash Attacks and How to Defend Against Them"
excerpt: "Pass-the-hash lets an attacker authenticate using a stolen password hash directly, without ever needing to know or crack the actual plaintext password."
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersecurity — Identity & Access"
category: "Identity & Access"
tags:
  - pass-the-hash
  - lateral-movement
---

Pass-the-hash lets an attacker authenticate using a stolen password hash directly, without ever needing to know or crack the actual plaintext password.

## Key points

- This attack is particularly dangerous in Windows environments where the same local administrator password hash is reused across many machines.
- Microsoft's Local Administrator Password Solution (LAPS) randomizes local admin passwords per machine specifically to blunt this attack.
- Restricting where privileged accounts can log in (avoiding logging into lower-trust machines) limits the hashes available for an attacker to steal in the first place.

## The takeaway

Pass-the-hash attacks show why credential hygiene has to extend to hashes and cached credentials, not just plaintext passwords.
