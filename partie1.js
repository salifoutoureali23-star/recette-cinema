const prix1 = 1500;
const prix2 = 2500;
let nb1500 = 0;
let nb2500 = 0;
let recette = 0;

// Nous allons afficher l'âge et le prix du billet de chaque personne.
for (let age = 11; age <= 20; age += 1) {
  if (age < 16) {
    console.log(`Vous avez ${age} ans, et votre billet est de ${prix1} FCFA`);
    nb1500++;
  } else {
    console.log(`Vous avez ${age} ans, et votre billet est de ${prix2} FCFA`);
    nb2500++;
  }
}

// Nous calculons la recette totale.
recette = nb1500 * prix1 + nb2500 * prix2;
console.log(`La recette totale est de ${recette} FCFA`);

// Nous affichons le nombre de billets vendus pour chaque tarif.
console.log(`Le nombre de billets vendus à 1500 FCFA est égal à : ${nb1500}`);
console.log(`Le nombre de billets vendus à 2500 FCFA est égal à : ${nb2500}`);