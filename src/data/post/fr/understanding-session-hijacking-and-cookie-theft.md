---
locale: fr
translationKey: understanding-session-hijacking-and-cookie-theft
publishDate: 2026-08-14T00:00:00Z
author: "Meera Iyer"
title: "Comprendre le détournement de session et le vol de cookies"
excerpt: "Le détournement de session permet à un attaquant de prendre le contrôle de la session authentifiée d’un utilisateur, souvent sans même avoir besoin de son mot de passe."
image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersécurité — Menaces et attaques"
category: "Menaces et attaques"
tags:
  - securite-des-sessions
  - securite-web
---

Le détournement de session permet à un attaquant de prendre le contrôle de la session authentifiée d’un utilisateur, souvent sans même avoir besoin de son mot de passe.

## Points clés

- Les jetons de session volés par XSS, par un logiciel malveillant ou sur un réseau Wi-Fi non sécurisé peuvent être réutilisés par un attaquant pour usurper l’identité de l’utilisateur connecté.
- Les attributs de cookie `Secure` et `HttpOnly` empêchent l’envoi des cookies de session sur des connexions non chiffrées et leur accès depuis JavaScript.
- Des sessions de courte durée et une nouvelle authentification pour les actions sensibles limitent les dommages qu’un détournement de session peut causer.

## À retenir

Un jeton de session volé peut être aussi dangereux qu’un mot de passe volé et permet souvent de contourner entièrement le MFA, puisque la session est déjà authentifiée.
