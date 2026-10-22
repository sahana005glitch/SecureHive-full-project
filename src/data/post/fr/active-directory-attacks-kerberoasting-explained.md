---
locale: fr
translationKey: active-directory-attacks-kerberoasting-explained
publishDate: 2026-07-09T00:00:00Z
author: "Meera Iyer"
title: "Attaques contre Active Directory : comprendre le Kerberoasting"
excerpt: "Le Kerberoasting exploite la façon dont Windows Active Directory émet les tickets de service : un attaquant peut en demander pour des comptes de service et casser leurs mots de passe hors ligne..."
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersécurité — Identité et accès"
category: "Identité et accès"
tags:
  - active-directory
  - kerberoasting
---

Le Kerberoasting exploite la façon dont Windows Active Directory émet les tickets de service : un attaquant peut demander des tickets pour des comptes de service, puis casser leurs mots de passe hors ligne.

## Points clés

- Comme le cassage a lieu hors ligne, un attaquant peut y consacrer tout le temps nécessaire sans déclencher les stratégies de verrouillage des comptes.
- Les comptes de service associés à des mots de passe faibles ou anciens sont les cibles les plus courantes, car ils sont souvent configurés lors du déploiement initial puis jamais renouvelés.
- L'utilisation de mots de passe longs et générés aléatoirement pour les comptes de service (idéalement gérés par un outil de gestion des accès privilégiés) neutralise largement cette attaque.

## À retenir

Le Kerberoasting illustre bien une attaque qui exploite une fonctionnalité légitime du protocole plutôt qu'un bogue : la solution relève de bonnes pratiques opérationnelles, pas d'un correctif.
