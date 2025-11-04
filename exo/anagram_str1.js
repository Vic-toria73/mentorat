// ### Anagram Checker

// Pattern : Comptage / Fréquence → Map ou Object

// **Enoncé :***
// Écris une fonction areAnagrams(str1, str2) qui retourne true si str1 et str2 sont des anagrammes (mêmes lettres, même quantité, ordre différent).

// Ce que ça développe :
// - Savoir compter les fréquences de lettres
// - Comparer deux objets (ou maps)
// - Développer le réflexe de la “signature” d’un mot

function areAnagrams(str1, str2) {
  if ((str1.length == str2.length)) {
    
    const arrayA = [];                      // crée un tableau vide
    for (let i = 0; i < str1.length; i++) { // boucle sur la longueur du mot
      arrayA.push(str1.at(i));              // pousse dans le tableau 
      //console.log(arrayA.at(i));
    }

    const a = str1.split('').sort().join(''); // .split : permet de découper le mot par lettre, .sort: trie les lettres par ordre alphabétique, 
    const b = str2.split('').sort().join(''); // .join : regroupe toute les lettres.
    return (a == b);
  };
};

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "holle")); // true
console.log(areAnagrams("test", "tost")); // false 
// ⸻