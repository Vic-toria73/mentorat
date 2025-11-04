// ### Group Anagrams

// Pattern : Grouper des items → Object avec Array

// **Enoncé :***

// Écris une fonction groupAnagrams(arr) qui regroupe les mots anagrammes entre eux.

//groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// → [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

// Ce que ça développe :
// - Créer une clé de regroupement (souvent un mot trié : "aet")
// - Créer un objet de regroupement dynamique
// - Utiliser Object.values() à la fin

function groupAnagrams(arr) {
  //const array = [];
  const strings = "aet"
  for (let i = 0; i < arr.length; i++) {
   // array.push(arr.at(i));
    if (arr[i].toLowerCase() !=  strings) {
      const arrayB = []
      arrayB.push(arr.at(i))
      console.log(arrayB)
  }
  
  //console.log(arr.());
  //console.log(Object.values(arr));
}
}
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// ⸻
