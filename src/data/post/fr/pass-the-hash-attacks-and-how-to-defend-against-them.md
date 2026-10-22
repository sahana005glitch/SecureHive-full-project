---
locale: fr
translationKey: pass-the-hash-attacks-and-how-to-defend-against-them
publishDate: 2026-07-06T00:00:00Z
author: "Tom Bennett"
title: "Attaques par pass-the-hash : comment s’en défendre"
excerpt: "Une attaque par pass-the-hash permet à un attaquant de s’authentifier directement à l’aide d’un hachage de mot de passe volé, sans connaître ni déchiffrer le mot de passe en clair."
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersécurité — Identité et accès"
category: "Identité et accès"
tags:
  - pass-the-hash
  - déplacement-latéral
---

Une attaque par pass-the-hash permet à un attaquant de s’authentifier directement à l’aide d’un hachage de mot de passe volé, sans connaître ni déchiffrer le mot de passe en clair.

## Points clés

- Cette attaque est particulièrement dangereuse dans les environnements Windows où le même hachage de mot de passe d’administrateur local est réutilisé sur de nombreuses machines.
- La solution Local Administrator Password Solution (LAPS) de Microsoft attribue des mots de passe d’administrateur local aléatoires propres à chaque machine afin de réduire l’efficacité de cette attaque.
- Limiter les machines auxquelles les comptes privilégiés peuvent se connecter (en évitant les machines moins fiables) réduit dès le départ le nombre de hachages qu’un attaquant peut voler.

## À retenir

Les attaques par pass-the-hash montrent pourquoi l’hygiène des identifiants doit aussi couvrir les hachages et les identifiants mis en cache, et pas seulement les mots de passe en clair.
