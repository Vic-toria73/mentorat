// ### Anagram Checker

// Pattern : Comptage / Fréquence → Map ou Object

// **Enoncé :***

// Écris une fonction areAnagrams(str1, str2) qui retourne true si str1 et str2 sont des anagrammes (mêmes lettres, même quantité, ordre différent).

areAnagrams("listen", "silent"); // true
areAnagrams("hello", "holle"); // true
areAnagrams("test", "tost"); // false

// Ce que ça développe :
// - Savoir compter les fréquences de lettres
// - Comparer deux objets (ou maps)
// - Développer le réflexe de la “signature” d’un mot

// ⸻

// ### First Unique Character

// Pattern : Fréquence + Deuxième Passe

// **Enoncé :***

// Écris une fonction firstUniqueChar(str) qui retourne le premier caractère non répété dans une string.
// Sinon, retourne null.

firstUniqueChar("leetcode"); // "l"
firstUniqueChar("aabbcc"); // null

// Ce que ça développe :
// - Parcourir deux fois une string
// - Compter avec un Map ou Object
// - Savoir séparer collecte et analyse

// ⸻

// ### Group Anagrams

// Pattern : Grouper des items → Object avec Array

// **Enoncé :***

// Écris une fonction groupAnagrams(arr) qui regroupe les mots anagrammes entre eux.

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// → [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

// Ce que ça développe :
// - Créer une clé de regroupement (souvent un mot trié : "aet")
// - Créer un objet de regroupement dynamique
// - Utiliser Object.values() à la fin

// ⸻

// Récapitulatif des patterns couverts

// KATA -> Pattern mental	-> Structures clés
// Anagram Checker ->	Fréquence + comparaison ->	Map, Object
// First Unique Char ->	Fréquence + 2-pass ->	Map, Object
// Group Anagrams ->	Grouper par clé commune ->	Object de tableaux
