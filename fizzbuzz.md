# Kata FizzBuzz

## Description

FizzBuzz est un exercice de programmation classique, souvent utilisé lors d'entretiens techniques pour évaluer les compétences de base en programmation.

## Objectif

Écrire un programme qui affiche les nombres de 1 à 100, en respectant les règles suivantes :

- Pour les multiples de **3**, afficher **"Fizz"** au lieu du nombre
- Pour les multiples de **5**, afficher **"Buzz"** au lieu du nombre
- Pour les multiples de **3 ET 5** (c'est-à-dire les multiples de 15), afficher **"FizzBuzz"** au lieu du nombre
- Pour tous les autres nombres, afficher le nombre lui-même

## Exemple de sortie

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
etc ...

## Contraintes

- Le programme doit traiter les nombres de 1 à 100 inclus
- L'ordre des règles est important : vérifier d'abord les multiples de 15, puis 3, puis 5

## Critères de réussite

Tous les multiples de 3 (mais pas de 5) affichent "Fizz"
Tous les multiples de 5 (mais pas de 3) affichent "Buzz"
Tous les multiples de 15 affichent "FizzBuzz"
Tous les autres nombres sont affichés tels quels

## Extensions possibles

Une fois le kata de base maîtrisé, vous pouvez essayer ces variantes :

1. **Paramétrable** : Permettre de choisir la plage de nombres (min, max)
2. **Règles personnalisées** : Ajouter d'autres règles (ex: multiples de 7 → "Woof")
3. **Fonction pure** : Créer une fonction qui retourne un tableau/liste au lieu d'afficher directement
4. **Tests unitaires** : Écrire des tests pour valider chaque règle

## Conseils

- Commencez simple, faites-le fonctionner, puis optimisez
- Pensez à l'ordre des conditions (testez d'abord les multiples de 15)
- Évitez la répétition de code (principe DRY - Don't Repeat Yourself)
