---
locale: en
translationKey: mfa-bypass-methods
publishDate: 2026-09-15T00:00:00Z
author: "Priya Nair"
title: "The State of Multi-Factor Authentication: Which Methods Still Get Bypassed"
excerpt: "Not all MFA is equally resistant to attack. Here's a breakdown of which methods hold up and which ones attackers routinely bypass."
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersecurity — Identity & Access"
category: "Identity & Access"
tags:
  - mfa
  - authentication
  - phishing-resistant
---

"We have MFA enabled" is often treated as a finished checkbox. It shouldn't be — because not all MFA methods offer the same protection, and attackers have adapted specifically to the weaker ones.

<img src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=1200&amp;q=80" alt="A phone displaying a multi-factor authentication push notification" loading="lazy" />

## The MFA hierarchy, weakest to strongest

**SMS codes** — better than nothing, but vulnerable to SIM-swapping (an attacker convinces a carrier to port your number to their device) and to real-time phishing kits that relay the code the moment it's entered.

**Authenticator app codes (TOTP)** — stronger than SMS since there's no carrier to social-engineer, but still phishable in real time: if a user is tricked into entering the code on a fake login page, an attacker relaying that page can use it within the ~30-second validity window.

**Push notifications** — convenient, but "MFA fatigue" attacks exploit this directly: an attacker spams push requests until an annoyed user taps "approve" just to make it stop. This technique has been used in several high-profile breaches.

**FIDO2 / security keys (passkeys)** — cryptographically bound to the specific website being logged into, which means a fake login page simply *can't* complete the authentication, even if the user is fully fooled by the phishing page itself. This is the current strongest widely-available standard.

## Watch: an MFA fatigue explainer

The original YouTube video for this section is no longer available. See this [MFA fatigue video from NinjaOne](https://www.ninjaone.com/videos/security/mfa-fatigue-attacks/) for a related walkthrough.

## Listen: a short discussion on MFA fatigue attacks in the wild

<audio controls style="width: 100%; margin: 1.5rem 0;">
  <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>

*(Sample audio embed for demonstration purposes — replace with real audio content before publishing.)*

## What this means practically

If your organization's MFA policy treats all methods as interchangeable, it isn't actually risk-based. A reasonable policy looks more like:

1. **Security keys or passkeys required** for admin accounts, finance systems, and anything with standing privileged access
2. **Authenticator apps as the minimum bar** for general employee accounts — SMS should be a fallback, not the default
3. **Number-matching enabled** on push notifications (requiring the user to enter a code shown on the login screen, not just tap "approve") to blunt MFA fatigue attacks
4. **Rate limiting and alerting** on repeated push requests, so a fatigue attack in progress gets flagged rather than eventually succeeding

## Related reading

This connects directly to two other posts: our breakdown of [phishing campaign anatomy](/blog/anatomy-of-a-phishing-attack) — since real-time MFA relay is just phishing with an extra step — and our piece on [zero trust architecture](/blog/zero-trust-architecture-explained), since strong MFA is one of the foundational signals a zero trust system evaluates continuously, not just at login. For how this applies specifically to privileged accounts, see our [product overview](/products/privileged-account-manager).
