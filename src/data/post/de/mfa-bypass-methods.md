---
locale: de
translationKey: mfa-bypass-methods
publishDate: 2026-09-15T00:00:00Z
author: "Priya Nair"
title: "Der Stand der Multi-Faktor-Authentifizierung: Welche Methoden lassen sich noch umgehen?"
excerpt: "Nicht jede MFA-Methode ist gleich widerstandsfähig gegen Angriffe. Hier erfahren Sie, welche Verfahren sich bewähren und welche Angreifer regelmäßig umgehen."
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersicherheit — Identität und Zugriff"
category: "Identität und Zugriff"
tags:
  - mfa
  - authentifizierung
  - phishing-resistent
---

„Wir haben MFA aktiviert“ gilt oft als endgültig abgehakter Punkt. Das sollte es nicht sein: Nicht alle MFA-Methoden bieten denselben Schutz, und Angreifer haben ihre Methoden gezielt an die schwächeren Verfahren angepasst.

<img src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=1200&amp;q=80" alt="Ein Mobiltelefon zeigt eine Push-Benachrichtigung zur Multi-Faktor-Authentifizierung an" loading="lazy" />

## MFA-Verfahren vom schwächsten bis zum stärksten

**SMS-Codes** – besser als nichts, aber anfällig für SIM-Swapping (ein Angreifer bringt einen Mobilfunkanbieter dazu, Ihre Rufnummer auf sein Gerät zu übertragen) und für Echtzeit-Phishing-Kits, die den Code unmittelbar nach der Eingabe weiterleiten.

**Codes aus Authenticator-Apps (TOTP)** – sicherer als SMS, da kein Mobilfunkanbieter beteiligt ist, aber weiterhin in Echtzeit abfangbar: Wird ein Nutzer dazu gebracht, den Code auf einer gefälschten Anmeldeseite einzugeben, kann ein Angreifer ihn über die Seite innerhalb des etwa 30-sekündigen Gültigkeitsfensters verwenden.

**Push-Benachrichtigungen** – bequem, aber direkt anfällig für „MFA-Fatigue“-Angriffe: Ein Angreifer verschickt so lange Push-Anfragen, bis ein genervter Nutzer auf „Genehmigen“ tippt, damit die Meldungen aufhören. Diese Technik kam bei mehreren viel beachteten Sicherheitsverletzungen zum Einsatz.

**FIDO2 / Sicherheitsschlüssel (Passkeys)** – kryptografisch an die konkrete Website gebunden, bei der man sich anmeldet. Eine gefälschte Anmeldeseite kann die Authentifizierung daher schlicht nicht abschließen, selbst wenn der Nutzer vollständig auf sie hereinfällt. Dies ist derzeit der stärkste breit verfügbare Standard.

## Ansehen: Erklärung von MFA-Fatigue-Angriffen

Das ursprüngliche YouTube-Video für diesen Abschnitt ist nicht mehr verfügbar. Eine verwandte Einführung bietet dieses [Video von NinjaOne zu MFA-Fatigue-Angriffen](https://www.ninjaone.com/videos/security/mfa-fatigue-attacks/).

## Anhören: Kurze Diskussion über MFA-Fatigue-Angriffe in der Praxis

<audio controls style="width: 100%; margin: 1.5rem 0;">
  <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" type="audio/mpeg" />
  Ihr Browser unterstützt das Audioelement nicht.
</audio>

*(Beispielhafte Audioeinbindung – vor der Veröffentlichung durch echte Audioinhalte ersetzen.)*

## Praktische Konsequenzen

Wenn die MFA-Richtlinie Ihres Unternehmens alle Methoden als austauschbar behandelt, ist sie nicht wirklich risikobasiert. Eine angemessene Richtlinie sieht eher so aus:

1. **Sicherheitsschlüssel oder Passkeys verpflichtend** für Administratorkonten, Finanzsysteme und alle Konten mit dauerhaften privilegierten Zugriffsrechten
2. **Authenticator-Apps als Mindeststandard** für allgemeine Mitarbeiterkonten – SMS sollte eine Ausweichmöglichkeit sein, nicht die Standardeinstellung
3. **Zahlenabgleich für Push-Benachrichtigungen aktivieren** (der Nutzer muss einen auf dem Anmeldebildschirm angezeigten Code eingeben, statt nur auf „Genehmigen“ zu tippen), um MFA-Fatigue-Angriffe abzuschwächen
4. **Ratenbegrenzung und Warnmeldungen** bei wiederholten Push-Anfragen, damit ein laufender Fatigue-Angriff erkannt wird, statt irgendwann erfolgreich zu sein

## Weiterführende Beiträge

Das Thema hängt direkt mit zwei weiteren Beiträgen zusammen: unserer Analyse des [Ablaufs einer Phishing-Kampagne](/de/blog/anatomy-of-a-phishing-attack), denn ein MFA-Relay in Echtzeit ist Phishing mit einem zusätzlichen Schritt, und unserem Beitrag zur [Zero-Trust-Architektur](/de/blog/zero-trust-architecture-explained), denn starke MFA ist eines der grundlegenden Signale, die ein Zero-Trust-System fortlaufend auswertet – nicht nur bei der Anmeldung. Wie dies für privilegierte Konten gilt, erfahren Sie in unserer [Produktübersicht](/products/privileged-account-manager).
