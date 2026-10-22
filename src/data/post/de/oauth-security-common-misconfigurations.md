---
locale: de
translationKey: oauth-security-common-misconfigurations
publishDate: 2026-06-06T00:00:00Z
author: "Daniel Osei"
title: "OAuth-Sicherheit: Häufige Fehlkonfigurationen"
excerpt: "OAuth bildet die Grundlage der meisten Anmeldevorgänge wie „Mit Google/Microsoft anmelden“, doch seine Flexibilität eröffnet Spielraum für schwerwiegende Fehlkonfigurationen."
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersicherheit — Identität und Zugriff"
category: "Identität und Zugriff"
tags:
  - oauth
  - api-sicherheit
---

OAuth bildet die Grundlage der meisten Anmeldevorgänge wie „Mit Google/Microsoft anmelden“, doch seine Flexibilität eröffnet Spielraum für schwerwiegende Fehlkonfigurationen.

## Wichtige Punkte

- Werden Weiterleitungs-URIs nicht ordnungsgemäß validiert, kann ein Angreifer Autorisierungscodes abfangen, die für eine legitime Anwendung bestimmt sind.
- Zu weit gefasste Scope-Anfragen – also mehr Berechtigungen, als eine Integration tatsächlich benötigt – vergrößern den potenziellen Schaden bei einer Token-Kompromittierung.
- Token-Ablaufzeiten und die Rotation von Refresh-Tokens begrenzen, wie lange ein gestohlenes Token für einen Angreifer nutzbar bleibt.

## Fazit

Gerade die Flexibilität von OAuth erklärt, warum die Sicherheitsqualität der Implementierungen so unterschiedlich ausfällt: Die Spezifikation einzuhalten ist nicht dasselbe, wie Sicherheits-Best-Practices zu befolgen.
