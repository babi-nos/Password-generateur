const datelowercase = "azertyuiopqsdfghjklmwxcvbn";
const dateUppercase = datelowercase.toUpperCase(); // ici je passe ma les donner de ma variable au dessus mais en metten les lettre en minuscule 
const dateNumbers = "0123456789";
const dateSymbols = ';:?£$%*µ./"§|-&';
const rangeValue = document.getElementById("password-length");
const passwordOutPut = document.getElementById("password-output");


function generatePassword() { 
  let data = [];  // je cree un  tableau qui va accuillir la data, les checkbox qui seront check
  let password = "";

  if (lowercase.checked) data.push(...datelowercase); // avec les 3point je concatenne mais varibale dans le tableau data
  if (uppercase.checked) data.push(...dateUppercase);
  if (number.checked) data.push(...dateNumbers);
  if (symbols.checked) data.push(...dateSymbols);

  if (data.length === 0) { // Si l'utilisateur n'a cocher aucun case alors alert
    alert("Veuillez sélectionner des critéres");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutPut.value = password;

  passwordOutPut.select(); // pour selectionne le mdpasse crée 
  document.execCommand("copy"); // ceci me permet de copie quand l'utilisateur a genere un mdpasse 

  generateButton.textContent = "Copié ! "; // je rajoute ce texte quand l'utilisateur a générer le mdp
  
  setTimeout(() => { // setimeout me permet de faire en sort que quand l'utilisateur a clique alors 500ms il remettra le texte d'avant 
    generateButton.textContent = "Générer mot de passe";

  },500)
}

generateButton.addEventListener("click", generatePassword); // ici je genere la fonction car en haut elle est juste cree.
