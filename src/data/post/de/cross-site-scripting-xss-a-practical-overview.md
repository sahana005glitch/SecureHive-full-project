---
locale: de
translationKey: cross-site-scripting-xss-a-practical-overview
publishDate: 2026-08-20T00:00:00Z
author: "Priya Nair"
title: "Cross-Site-Scripting (XSS): Ein praxisnaher Überblick"
excerpt: "Cross-Site-Scripting ermöglicht Angreifern, bösartiges JavaScript in der Browsersitzung eines anderen Nutzers auszuführen — häufig durch eingeschleuste Skripte in später angezeigten Inhalten..."
image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersicherheit — Bedrohungen und Angriffe"
category: "Bedrohungen und Angriffe"
tags:
  - appsec
  - xss
---

Cross-Site-Scripting ermöglicht Angreifern, bösartiges JavaScript in der Browsersitzung eines anderen Nutzers auszuführen — häufig, indem sie ein Skript in Inhalte einschleusen, die die Website später anzeigt.

## Wichtigste Punkte

- Persistentes XSS ist in der Regel gefährlicher als reflektiertes XSS, da das bösartige Skript gespeichert bleibt und alle Nutzer betrifft, die den kompromittierten Inhalt aufrufen.
- Content-Security-Policy-Header (CSP) können den durch XSS möglichen Schaden erheblich begrenzen, selbst wenn eine Schwachstelle vorhanden ist.
- Der zentrale Schutz ist eine korrekte, kontextabhängige Ausgabekodierung (HTML, JavaScript, URL) — nicht allein die Validierung von Eingaben.

## Fazit

XSS ist nach wie vor verbreitet, weil die Ausgabekodierung gerade in den Kontexten leicht falsch umgesetzt wird, deren Prüfung Entwickler oft übersehen.
