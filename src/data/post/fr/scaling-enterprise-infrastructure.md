---
locale: fr
translationKey: scaling-enterprise-infrastructure
publishDate: 2026-08-12T00:00:00Z
author: "Priya Nair"
title: "5 enseignements tirés du passage de notre infrastructure à 10 millions de requêtes par jour"
excerpt: "Ce qui a cédé, ce qui a tenu et ce que nous ferions autrement : retour pratique sur la montée en charge d’une infrastructure d’entreprise sans sacrifier sa fiabilité."
image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersécurité — Ingénierie"
category: "Ingénierie"
tags:
  - infrastructure
  - montée-en-charge
  - fiabilité
---

Dépasser quelques millions de requêtes par jour révèle des problèmes qui n’apparaissent jamais dans l’environnement de préproduction. Voici les enseignements que nous avons tirés à nos dépens et la manière dont nous y avons remédié.

## 1. La mise en cache nous a sauvés, mais seulement après mesure

Nous pensions que notre couche Redis faisait son travail. Ce n’était pas le cas : le taux de succès du cache plafonnait à 61 %, bien en deçà de ce qu’exige un système à notre échelle. Après avoir correctement instrumenté le système, nous avons découvert que quelques clés très sollicitées étaient invalidées bien trop agressivement.

<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&amp;q=80" alt="Tableau de bord montrant l’amélioration du taux de succès du cache, de 61 % à 94 % en deux semaines" loading="lazy" />

## 2. Le regroupement des connexions à la base de données nécessitait de vraies limites

Pour en savoir plus sur la stratégie de regroupement des connexions, consultez la [documentation officielle de PostgreSQL](https://www.postgresql.org/docs/current/runtime-config-connection.html) : c’est la ressource qui nous a le plus aidés à régler la taille de nos pools.

## 3. Concevoir les pratiques d’astreinte en fonction de la capacité à intervenir

Le [chapitre du Google SRE Workbook consacré aux astreintes](https://sre.google/workbook/on-call/) fournit des conseils pratiques pour structurer les responsabilités d’astreinte et la réponse aux incidents.

## 4. Les alertes doivent être moins nombreuses et plus pertinentes

Nous avons réduit de 70 % le volume d’alertes PagerDuty en regroupant les alertes fondées sur les symptômes en un petit nombre d’alertes basées sur les objectifs de niveau de service (SLO). Moins de pages, une réponse plus rapide.

## 5. Rien de tout cela ne fonctionne sans une culture de rétrospective sans recherche de coupable

Les correctifs techniques ne tiennent que si l’équipe sait qu’elle peut signaler une erreur sans être punie. Voilà la véritable infrastructure.

---

**Pour aller plus loin :** consultez notre [solution informatique pour les entreprises](/solutions/enterprise-it) pour découvrir des fonctionnalités connexes de contrôle des accès, ou [contactez notre équipe](/contact) si vous êtes confronté à un défi de montée en charge similaire.
