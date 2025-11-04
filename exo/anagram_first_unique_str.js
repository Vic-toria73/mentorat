// ### First Unique Character

// Pattern : Fréquence + Deuxième Passe

// **Enoncé :***

// Écris une fonction firstUniqueChar(str) qui retourne le premier caractère non répété dans une string.
// Sinon, retourne null.

// Ce que ça développe :
// - Parcourir deux fois une string
// - Compter avec un Map ou Object
// - Savoir séparer collecte et analyse
function firstUniqueChar(str) {
  const string = str[0].toLowerCase(); // permet d'afficher la premiere lettre en minuscule -> toLowerCase()
  for (let i = 1; i < str.length; i++) {  // boucle avec la premiere lettre la longueur du mot 
    if (str[i].toLowerCase() === string) return null; // compare chaque caractère et si le caractère2 est identique on renvoie null 
  }
  return string;
}
console.log(firstUniqueChar("leetcode")); // "l"
console.log(firstUniqueChar("aabbcc")); // null
// ⸻
