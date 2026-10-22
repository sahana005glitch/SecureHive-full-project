---
locale: de
translationKey: understanding-session-hijacking-and-cookie-theft
publishDate: 2026-08-14T00:00:00Z
author: "Meera Iyer"
title: "Session-Hijacking und Cookie-Diebstahl verstehen"
excerpt: "Beim Session-Hijacking übernimmt ein Angreifer eine authentifizierte Benutzersitzung — oft ganz ohne das Passwort zu benötigen."
image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersicherheit — Bedrohungen und Angriffe"
category: "Bedrohungen und Angriffe"
tags:
  - sitzungssicherheit
  - web-sicherheit
---

Beim Session-Hijacking übernimmt ein Angreifer eine authentifizierte Benutzersitzung — oft ganz ohne das Passwort zu benötigen.

## Wichtige Punkte

- Sitzungstoken, die über XSS, Malware oder ungesicherte WLANs gestohlen wurden, kann ein Angreifer wiederverwenden, um sich als angemeldeter Benutzer auszugeben.
- Die Cookie-Attribute `Secure` und `HttpOnly` verhindern, dass Sitzungscookies über unverschlüsselte Verbindungen übertragen oder von JavaScript ausgelesen werden.
- Kurze Sitzungsdauern und eine erneute Authentifizierung für sensible Aktionen begrenzen den möglichen Schaden einer entführten Sitzung.

## Fazit

Ein gestohlenes Sitzungstoken kann genauso gefährlich sein wie ein gestohlenes Passwort und umgeht häufig MFA vollständig, da die Sitzung bereits authentifiziert ist.
