---
locale: fr
translationKey: cross-site-scripting-xss-a-practical-overview
publishDate: 2026-08-20T00:00:00Z
author: "Priya Nair"
title: "Cross-site scripting (XSS) : aperçu pratique"
excerpt: "Le cross-site scripting permet à un attaquant d'exécuter du JavaScript malveillant dans la session de navigateur d'un autre utilisateur, souvent en injectant un script dans du contenu affiché ultérieurement par le site..."
image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersécurité — Menaces et attaques"
category: "Menaces et attaques"
tags:
  - securite-applicative
  - xss
---

Le cross-site scripting permet à un attaquant d'exécuter du JavaScript malveillant dans la session de navigateur d'un autre utilisateur, souvent en injectant un script dans un contenu que le site affichera par la suite.

## Points clés

- Le XSS stocké est généralement plus dangereux que le XSS réfléchi, car le script malveillant persiste et touche chaque utilisateur qui consulte le contenu compromis.
- Les en-têtes de politique de sécurité du contenu (CSP) peuvent considérablement limiter les dégâts causés par une vulnérabilité XSS, même si celle-ci existe.
- Le principal moyen de défense consiste à encoder correctement les sorties en fonction de leur contexte (HTML, JavaScript, URL), et non à se limiter à valider les entrées.

## À retenir

Le XSS reste fréquent parce que l'encodage des sorties est facile à mal appliquer, précisément dans les contextes que les développeurs ne pensent pas à vérifier.
