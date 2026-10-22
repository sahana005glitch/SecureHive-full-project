---
locale: de
translationKey: pass-the-hash-attacks-and-how-to-defend-against-them
publishDate: 2026-07-06T00:00:00Z
author: "Tom Bennett"
title: "Pass-the-Hash-Angriffe und wie man sich dagegen schützt"
excerpt: "Bei Pass-the-Hash authentifiziert sich ein Angreifer direkt mit einem gestohlenen Passwort-Hash, ohne das eigentliche Klartextpasswort kennen oder knacken zu müssen."
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersicherheit — Identität und Zugriff"
category: "Identität und Zugriff"
tags:
  - pass-the-hash
  - laterale-bewegung
---

Bei Pass-the-Hash authentifiziert sich ein Angreifer direkt mit einem gestohlenen Passwort-Hash, ohne das eigentliche Klartextpasswort kennen oder knacken zu müssen.

## Wichtige Punkte

- Besonders gefährlich ist dieser Angriff in Windows-Umgebungen, in denen auf vielen Rechnern derselbe Hash des lokalen Administratorkennworts wiederverwendet wird.
- Microsofts Local Administrator Password Solution (LAPS) vergibt für jeden Rechner ein zufälliges lokales Administratorkennwort, um diesem Angriff entgegenzuwirken.
- Die Anmeldemöglichkeiten privilegierter Konten einzuschränken (und Anmeldungen an Rechnern mit geringerem Vertrauensniveau zu vermeiden) begrenzt von vornherein die Hashes, die ein Angreifer stehlen kann.

## Fazit

Pass-the-Hash-Angriffe zeigen, warum die Hygiene von Zugangsdaten auch Hashes und zwischengespeicherte Anmeldeinformationen umfassen muss – nicht nur Klartextpasswörter.
