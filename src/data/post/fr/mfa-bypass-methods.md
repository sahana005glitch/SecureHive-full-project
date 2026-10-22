---
locale: fr
translationKey: mfa-bypass-methods
publishDate: 2026-09-15T00:00:00Z
author: "Priya Nair"
title: "État de l’authentification multifacteur : quelles méthodes restent contournables ?"
excerpt: "Les méthodes MFA ne résistent pas toutes aussi bien aux attaques. Voici un aperçu de celles qui tiennent bon et de celles que les attaquants contournent régulièrement."
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
imageAlt: "Cybersécurité — Identité et accès"
category: "Identité et accès"
tags:
  - mfa
  - authentification
  - résistance-au-hameçonnage
---

« Nous avons activé la MFA » est souvent considéré comme une case définitivement cochée. Ce ne devrait pas être le cas : les méthodes MFA n’offrent pas toutes le même niveau de protection et les attaquants ont précisément adapté leurs techniques pour cibler les méthodes les plus faibles.

<img src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=1200&amp;q=80" alt="Téléphone affichant une notification push d’authentification multifacteur" loading="lazy" />

## La hiérarchie des méthodes MFA, de la plus faible à la plus forte

**Codes SMS** — mieux que rien, mais vulnérables à l’échange de carte SIM (un attaquant convainc un opérateur de transférer votre numéro sur son appareil) et aux kits de hameçonnage en temps réel qui relaient le code dès qu’il est saisi.

**Codes d’application d’authentification (TOTP)** — plus sûrs que les SMS, car ils ne font pas intervenir d’opérateur, mais restent vulnérables au hameçonnage en temps réel : si un utilisateur saisit le code sur une fausse page de connexion, l’attaquant qui relaie cette page peut l’utiliser pendant sa période de validité d’environ 30 secondes.

**Notifications push** — pratiques, mais directement exposées aux attaques par « fatigue MFA » : l’attaquant multiplie les demandes d’approbation jusqu’à ce qu’un utilisateur agacé appuie sur « approuver » pour y mettre fin. Cette technique a été employée lors de plusieurs violations très médiatisées.

**FIDO2 / clés de sécurité (clés d’accès)** — liées cryptographiquement au site Web précis auquel l’utilisateur se connecte. Une fausse page de connexion ne peut donc tout simplement pas terminer l’authentification, même si l’utilisateur se laisse entièrement tromper par la page de hameçonnage. Il s’agit actuellement de la norme largement disponible la plus robuste.

## Regarder : explication des attaques par fatigue MFA

La vidéo YouTube originale de cette section n’est plus disponible. Consultez cette [vidéo de NinjaOne sur les attaques par fatigue MFA](https://www.ninjaone.com/videos/security/mfa-fatigue-attacks/) pour un aperçu connexe.

## Écouter : brève discussion sur les attaques par fatigue MFA observées sur le terrain

<audio controls style="width: 100%; margin: 1.5rem 0;">
  <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" type="audio/mpeg" />
  Votre navigateur ne prend pas en charge l’élément audio.
</audio>

*(Exemple d’intégration audio à titre de démonstration — à remplacer par un véritable contenu audio avant publication.)*

## Conséquences pratiques

Si la politique MFA de votre organisation considère toutes les méthodes comme interchangeables, elle ne tient pas réellement compte des risques. Une politique raisonnable ressemblerait plutôt à ceci :

1. **Clés de sécurité ou clés d’accès obligatoires** pour les comptes d’administration, les systèmes financiers et tout compte disposant d’un accès privilégié permanent
2. **Applications d’authentification comme minimum requis** pour les comptes des employés en général — les SMS doivent constituer une solution de repli, et non la méthode par défaut
3. **Correspondance de numéro activée** pour les notifications push (l’utilisateur doit saisir un code affiché sur l’écran de connexion, et non simplement appuyer sur « approuver ») afin de réduire l’efficacité des attaques par fatigue MFA
4. **Limitation du débit et alertes** pour les demandes push répétées, afin qu’une attaque par fatigue en cours soit signalée au lieu de finir par réussir

## Articles connexes

Deux autres articles sont directement liés à ce sujet : notre analyse de [l’anatomie d’une campagne de hameçonnage](/fr/blog/anatomy-of-a-phishing-attack), car le relais MFA en temps réel n’est qu’une attaque de hameçonnage avec une étape supplémentaire, et notre article sur [l’architecture zéro confiance](/fr/blog/zero-trust-architecture-explained), car une MFA robuste constitue l’un des signaux fondamentaux qu’un système zéro confiance évalue en permanence, et pas seulement à la connexion. Pour savoir comment ces principes s’appliquent aux comptes privilégiés, consultez notre [aperçu produit](/products/privileged-account-manager).
