---
locale: de
translationKey: active-directory-attacks-kerberoasting-explained
publishDate: 2026-07-09T00:00:00Z
author: "Meera Iyer"
title: "Angriffe auf Active Directory: Kerberoasting erklärt"
excerpt: "Kerberoasting nutzt aus, wie Windows Active Directory Service-Tickets ausstellt: Angreifer können Tickets für Dienstkonten anfordern und deren Passwörter offline knacken..."
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersicherheit — Identität und Zugriff"
category: "Identität und Zugriff"
tags:
  - active-directory
  - kerberoasting
---

Kerberoasting nutzt aus, wie Windows Active Directory Service-Tickets ausstellt: Ein Angreifer kann Tickets für Dienstkonten anfordern und anschließend deren Passwörter offline knacken.

## Wichtigste Punkte

- Da das Knacken offline stattfindet, kann sich ein Angreifer beliebig viel Zeit lassen, ohne Kontosperrungsrichtlinien auszulösen.
- Dienstkonten mit schwachen oder veralteten Passwörtern sind die häufigsten Ziele, da sie oft bei der Erstbereitstellung eingerichtet und danach nie geändert werden.
- Lange, zufällig generierte Passwörter für Dienstkonten (idealerweise verwaltet mit einem Privileged-Access-Management-Tool) machen diesen Angriff weitgehend wirkungslos.

## Fazit

Kerberoasting ist ein gutes Beispiel für einen Angriff, der eine legitime Protokollfunktion statt eines Fehlers ausnutzt. Abhilfe schafft betriebliche Sorgfalt, kein Software-Patch.
