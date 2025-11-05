/*## Objectif

Écrire un programme qui affiche les nombres de 1 à 100, en respectant les règles suivantes :

- Pour les multiples de **3**, afficher **"Fizz"** au lieu du nombre
- Pour les multiples de **5**, afficher **"Buzz"** au lieu du nombre
- Pour les multiples de **3 ET 5** (c'est-à-dire les multiples de 15), afficher **"FizzBuzz"** au lieu du nombre
- Pour tous les autres nombres, afficher le nombre lui-même*/

function displayMulti(number) {
  for (let i = 1; i < number; i++) {
    fizz = i % 3;
    fizz == 0 && console.log("Fizz");
    Buzz = i % 5;
    Buzz == 0 && console.log("Buzz");
    FizzBuzz = i % 15;
    FizzBuzz == 0 && console.log("FizzBuzz")
  }
}
displayMulti(16);
