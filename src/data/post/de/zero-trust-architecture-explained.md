---
locale: de
translationKey: zero-trust-architecture-explained
publishDate: 2026-08-28T00:00:00Z
author: "Aisha Rahman"
title: "Zero-Trust-Architektur erklärt: Eine praktische Einführung"
excerpt: "Zero Trust ist kein Produkt, das man kauft, sondern ein Architekturprinzip. Hier erfahren Sie, was es tatsächlich bedeutet und wie Sie mit der Umsetzung beginnen."
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersicherheit — Identität und Zugriff"
category: "Identität und Zugriff"
tags:
  - zero-trust
  - netzwerksicherheit
  - architektur
---

„Zero Trust“ gehört zu den am häufigsten überstrapazierten Begriffen im Sicherheitsmarketing — schade, denn die zugrunde liegende Idee ist wirklich nützlich und wird oft missverstanden.

## Das alte Modell: dem Netzwerk vertrauen

Die herkömmliche Sicherheitsarchitektur zog eine klare Grenze um das Unternehmensnetzwerk. Innerhalb der Firewall vertrauten Systeme einander standardmäßig. Außerhalb galt alles als verdächtig. VPNs ermöglichten es externen Benutzern, diese Grenze zu überqueren und wieder „im Inneren“ zu sein.

Das Problem: Sobald ein Angreifer den Perimeter überwunden hat — über gestohlene Zugangsdaten, ein verwundbares VPN-Gerät oder einen kompromittierten Laptop — kann er sich oft frei bewegen, denn interne Systeme wurden nie dafür ausgelegt, Datenverkehr infrage zu stellen, der bereits ins Netzwerk gelangt ist.

<img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&amp;q=80" alt="Netzwerkdiagramm zum Vergleich herkömmlicher Perimetersicherheit und Zero-Trust-Segmentierung" loading="lazy" />

## Das Zero-Trust-Modell: standardmäßig nichts vertrauen

Zero Trust kehrt diese Annahme um: Kein Benutzer, Gerät und Dienst wird standardmäßig als vertrauenswürdig eingestuft — unabhängig davon, ob sich dieser „innerhalb“ oder „außerhalb“ des Netzwerks befindet. Jede Anfrage wird anhand der Identität, des Gerätezustands und des Kontexts geprüft — jedes Mal, nicht nur bei der ersten Anmeldung.

In diesem kurzen Erklärvideo erfahren Sie, wie das in der Praxis aussieht:

<iframe
  width="100%"
  height="400"
  src="https://www.youtube-nocookie.com/embed/yn6CPQ9RioA"
  title="Zero-Trust-Architektur erklärt"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>

## Die zentralen Säulen

1. **Explizit verifizieren** — Authentifizierung und Autorisierung anhand aller verfügbaren Signale vornehmen: Benutzeridentität, Gerätezustand, Standort und Verhalten — nicht nur anhand eines Passworts.
2. **Zugriff nach dem Prinzip der geringsten Rechte vergeben** — nur den für die jeweilige Aufgabe erforderlichen Zugriff gewähren, möglichst zeitlich begrenzt und automatisch widerrufen.
3. **Von einem Sicherheitsvorfall ausgehen** — Systeme so gestalten, als befinde sich ein Angreifer bereits im Netzwerk, und seine Bewegungsfreiheit begrenzen (deshalb ist Netzwerksegmentierung ebenso wichtig wie Authentifizierung).

## Wo Organisationen tatsächlich anfangen

Niemand baut sein gesamtes Netzwerk über Nacht neu auf. In der Praxis beginnen die meisten Organisationen mit Folgendem:

- **Starker, phishingresistenter MFA** für jedes Konto, insbesondere privilegierte Konten
- **Prüfung des Gerätezustands** vor dem Zugriff auf sensible Systeme (Ist das Gerät gepatcht, verschlüsselt und verwaltet?)
- **Mikrosegmentierung** des Netzwerks, damit ein kompromittierter Marketing-Laptop nicht auf die Produktionsdatenbank zugreifen kann
- **Just-in-Time-Zugriff für privilegierte Konten** statt dauerhaft geltender Administratorrechte — in unserem Beitrag zu [Privileged Access Management](/products/privileged-account-manager) erfahren Sie, was das speziell für Administratorkonten bedeutet

## Ein häufiges Missverständnis

Zero Trust bedeutet nicht „niemals vertrauen“, sondern dass Vertrauen fortlaufend überprüft und nicht ein für alle Mal gewährt wird. Selbst wenn sich ein Benutzer um 9 Uhr erfolgreich von seinem üblichen Laptop in seiner üblichen Stadt anmeldet, muss der Zugriff erneut bewertet werden, wenn er um 3 Uhr morgens plötzlich von einem unbekannten Gerät auf ein sensibles System zugreifen möchte.

Wie das konkret mit Identitäten zusammenhängt, erfahren Sie in unserem Beitrag darüber, [warum die Wiederverwendung von Passwörtern weiterhin die meisten Sicherheitsverletzungen verursacht](/de/blog/password-hygiene-2026) — die Zero-Trust-Architektur ist zu einem großen Teil eine Reaktion darauf, dass Passwörter allein nie ein ausreichend starkes Vertrauenssignal waren.
