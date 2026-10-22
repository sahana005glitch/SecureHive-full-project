---
locale: de
translationKey: anatomy-of-a-phishing-attack
publishDate: 2026-09-10T00:00:00Z
author: "Meera Iyer"
title: "Anatomie eines Phishing-Angriffs: So sieht eine echte Kampagne aus"
excerpt: "Eine schrittweise Analyse des Ablaufs einer modernen Phishing-Kampagne – von der ersten Aufklärungs-E-Mail bis zum Diebstahl von Zugangsdaten."
image: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
imageAlt: "Cybersicherheit — Bedrohungen und Angriffe"
category: "Bedrohungen und Angriffe"
tags:
  - phishing
  - social-engineering
  - e-mail-sicherheit
---

Phishing ist nicht verschwunden — es ist unauffälliger geworden. Die offensichtlichen E-Mails vom „nigerianischen Prinzen“ von vor zehn Jahren wurden durch Kampagnen ersetzt, die Ihre tatsächlichen Anbieter, Kolleginnen und Kollegen sowie Anmeldeseiten nachahmen. So sieht eine echte Kampagne Schritt für Schritt aus.

## Phase 1: Aufklärung

Angreifer raten nicht, wen sie ins Visier nehmen. Sie sammeln Ihr Organigramm auf LinkedIn, prüfen Unternehmensmitteilungen auf Neueinstellungen (neue Beschäftigte klicken häufiger) und überwachen Ihre öffentlichen DNS-Einträge, um herauszufinden, welche SaaS-Tools Sie nutzen — denn eine gefälschte Okta-Anmeldeseite funktioniert nur, wenn das Ziel tatsächlich Okta verwendet.

<img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&amp;q=80" alt="E-Mail-Posteingang mit einer Phishing-Nachricht, die eine Benachrichtigung eines Anbieters vortäuscht" loading="lazy" />

## Phase 2: Der Vorwand

Die erfolgreichsten Phishing-E-Mails sind heute keine alarmierenden Nachrichten wie „Ihr Konto wird gesperrt“ — solche Meldungen erkennen sowohl Spamfilter als auch geschulte Nutzerinnen und Nutzer. Wirksam sind alltägliche Vorwände: eine Benachrichtigung über ein freigegebenes Dokument, eine Kalendereinladung oder eine Rechnung eines Anbieters, mit dem Sie tatsächlich zusammenarbeiten. Gerade die Banalität verleitet zum Klicken.

## Phase 3: Die Nutzlast

Modernes Phishing verbreitet nur selten bereits in der ersten E-Mail direkt Schadsoftware — das würden E-Mail-Gateways erkennen. Stattdessen führt der Link zu einer legitim wirkenden Seite (oft auf einer kompromittierten, aber vertrauenswürdigen Domain oder einer Wegwerf-Subdomain). Dort werden entweder direkt Zugangsdaten abgegriffen oder mehrere Weiterleitungen durchlaufen, bevor das gefälschte Anmeldeformular erscheint.

Sehen Sie sich diesen kurzen Überblick über die Grundlagen der Cybersicherheit an:

<iframe
  width="100%"
  height="400"
  src="https://www.youtube-nocookie.com/embed/inWWhr5tnEA"
  title="Überblick über Cybersicherheit"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>

## Phase 4: Verwendung der Zugangsdaten

Diesen Teil unterschätzen Unternehmen. Gestohlene Zugangsdaten werden selten sofort vom selben Angreifer verwendet — oft werden sie verkauft oder weitergegeben. Die tatsächliche Kontoübernahme erfolgt dann Tage oder Wochen später, von einer anderen IP-Adresse und zu einer anderen Tageszeit, gezielt um Warnmeldungen zu „unmöglichen Reisen“ zu vermeiden.

## Was die Klickrate tatsächlich senkt

- **Phishing-Simulationen** monatlich statt jährlich — Gewohnheiten verblassen schnell
- **Phishing-resistente MFA**: SMS und Push-Benachrichtigungen können mit Man-in-the-Middle-Kits in Echtzeit weitergeleitet werden; FIDO2-/Sicherheitsschlüssel nicht
- **Einfache Meldemöglichkeit**: Eine Ein-Klick-Schaltfläche „Phishing melden“ wird viel häufiger genutzt als das Weiterleiten einer E-Mail an die IT

Wenn Sie verstehen möchten, wie widerstandsfähig die verschiedenen MFA-Methoden gegen solche Angriffe sind, lesen Sie unseren Beitrag zu [Methoden zum Umgehen der Multi-Faktor-Authentifizierung](/de/blog/mfa-bypass-methods). Wie Phishing in das umfassendere Identitätsrisiko einzuordnen ist, erläutert unsere [Übersicht zum Produkt für privilegierte Zugriffsverwaltung](/products/privileged-account-manager); sie zeigt, wie sich der Schadensradius selbst nach dem Diebstahl von Zugangsdaten begrenzen lässt.

**Hinweis zur Sensibilität des Themas:** Das Verständnis von Angriffstechniken gehört zur defensiven Sicherheitsarbeit (deshalb gibt es Red Teams und Phishing-Simulationen) — Ziel ist das Erkennen, nicht das Nachahmen.
