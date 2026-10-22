---
locale: de
translationKey: container-security-whats-different-about-securing-docker-and-kubernetes
publishDate: 2026-06-18T00:00:00Z
author: "Tom Bennett"
title: "Containersicherheit: Was Docker und Kubernetes besonders absichert"
excerpt: "Containerisierte Umgebungen bringen Sicherheitsaspekte mit sich, die sich nicht direkt auf herkömmliche Serversicherheitsmodelle übertragen lassen."
image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersicherheit — Cloud und Infrastruktur"
category: "Cloud und Infrastruktur"
tags:
  - container
  - kubernetes
---

Containerisierte Umgebungen bringen Sicherheitsaspekte mit sich, die sich nicht direkt auf herkömmliche Serversicherheitsmodelle übertragen lassen.

## Wichtigste Punkte

- Container-Images aus öffentlichen Registrys können veraltete Abhängigkeiten oder eingebettete Schwachstellen enthalten. Daher müssen Images vor der Bereitstellung unbedingt gescannt werden.
- Die rollenbasierte Zugriffskontrolle (RBAC) von Kubernetes muss sorgfältig konfiguriert werden — zu weitreichende Standardberechtigungen von Dienstkonten sind ein häufiger Befund bei Sicherheitsaudits.
- Runtime-Sicherheitstools, die das Verhalten von Containern überwachen, können Kompromittierungen erkennen, die ein reiner Image-Scan als punktuelle Prüfung übersehen würde.

## Fazit

Containersicherheit umfasst den gesamten Lebenszyklus — vom Inhalt des Images über die Bereitstellung bis zum Verhalten zur Laufzeit — und nicht nur einen einzelnen Prüfpunkt.
