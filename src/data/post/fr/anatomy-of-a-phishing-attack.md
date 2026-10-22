---
locale: fr
translationKey: anatomy-of-a-phishing-attack
publishDate: 2026-09-10T00:00:00Z
author: "Meera Iyer"
title: "Anatomie d'une attaque par hameçonnage : à quoi ressemble une campagne réelle"
excerpt: "Analyse étape par étape du déroulement réel d'une campagne d'hameçonnage moderne, du premier courriel de reconnaissance au vol d'identifiants."
image: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
imageAlt: "Cybersécurité — Menaces et attaques"
category: "Menaces et attaques"
tags:
  - hameconnage
  - ingenierie-sociale
  - securite-des-courriels
---

L'hameçonnage n'a pas disparu : il est devenu plus discret. Les courriels caricaturaux du « prince nigérian » d'il y a dix ans ont laissé place à des campagnes qui imitent vos véritables fournisseurs, vos collègues et vos pages de connexion. Voici à quoi ressemble une campagne réelle, étape par étape.

## Étape 1 : reconnaissance

Les attaquants ne choisissent pas leurs cibles au hasard. Ils récupèrent votre organigramme sur LinkedIn, consultent les communiqués de l'entreprise pour repérer les nouvelles recrues (les nouveaux employés cliquent davantage) et surveillent vos enregistrements DNS publics pour identifier les outils SaaS que vous utilisez — car une fausse page de connexion Okta ne fonctionne que si la cible utilise réellement Okta.

<img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&amp;q=80" alt="Boîte de réception affichant un courriel d'hameçonnage usurpant une notification d'un fournisseur" loading="lazy" />

## Étape 2 : le prétexte

Aujourd'hui, les courriels d'hameçonnage les plus efficaces ne sont pas les messages alarmistes du type « votre compte sera suspendu » : les filtres antipourriel et les utilisateurs sensibilisés les repèrent. Les prétextes qui fonctionnent sont banals : une notification de document partagé, une invitation à une réunion, une facture d'un fournisseur avec lequel vous travaillez réellement. C'est leur banalité qui incite à cliquer.

## Étape 3 : la charge utile

L'hameçonnage moderne diffuse rarement un logiciel malveillant directement dans le premier courriel : les passerelles de messagerie le détecteraient. À la place, le courriel renvoie vers une page d'apparence légitime (souvent hébergée sur un domaine réputé mais compromis, ou sur un sous-domaine temporaire) qui récupère directement les identifiants ou passe par plusieurs redirections avant d'afficher un faux formulaire de connexion.

Regardez ce bref aperçu des fondamentaux de la cybersécurité :

<iframe
  width="100%"
  height="400"
  src="https://www.youtube-nocookie.com/embed/inWWhr5tnEA"
  title="Présentation de la cybersécurité"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>

## Étape 4 : utilisation des identifiants

C'est un aspect que les organisations sous-estiment. Les identifiants volés sont rarement utilisés immédiatement par le même attaquant : ils sont souvent vendus ou échangés, et la compromission effective du compte survient quelques jours ou semaines plus tard, depuis une autre adresse IP et à une autre heure, précisément pour éviter les alertes de « déplacement impossible ».

## Comment réduire réellement les taux de clic

- **Des simulations d'hameçonnage** chaque mois, et non chaque année : les automatismes s'estompent vite
- **Une MFA résistante à l'hameçonnage** : les SMS et notifications push peuvent être relayés en temps réel par des kits d'attaque de type intermédiaire ; les clés FIDO2/de sécurité ne le peuvent pas
- **Un signalement simplifié** : un bouton « Signaler un hameçonnage » en un clic est bien plus utilisé qu'un transfert de courriel au service informatique

Pour comprendre en quoi les méthodes MFA diffèrent dans leur résistance à ces attaques, consultez notre article sur les [techniques de contournement de l'authentification multifacteur](/fr/blog/mfa-bypass-methods). Pour approfondir la place de l'hameçonnage dans le risque global lié aux identités, notre [présentation du produit de gestion des accès privilégiés](/products/privileged-account-manager) explique comment limiter le périmètre des dégâts même après le vol d'identifiants.

**Remarque sur la sensibilité du sujet :** comprendre les techniques des attaquants est une pratique courante en sécurité défensive (d'où l'existence des équipes rouges et des simulations d'hameçonnage) : l'objectif est de savoir reconnaître ces attaques, pas de les reproduire.
