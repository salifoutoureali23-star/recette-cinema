const prix1 = 1500
const prix2 = 2500
let Nb1500 = 0
let Nb2500 = 0
let recette = 0

// Nous affichons l’âge et le prix du billet de chaque personne.
for ( let age = 11 ; age <= 20; age = age +1 ) {
    if ( age < 16) {
        console.log(`Vous avez ${age} ans, et votre billet est de ${prix1} FCFA`);
        Nb1500++
    }    
    else if (age >= 18) { 
        console.log(`Vous avez ${age} ans, et votre billet est de ${prix2 - 500} FCFA`);
        Nb2500++
    } else {
        console.log(`Vous avez ${age} ans, et votre billet est de ${prix2} FCFA`);
        Nb2500++
    }
}
// Nous calculons la recette totale
recette = Nb1500 * prix1 + Nb2500 * prix2 ;
console.log (`La recette totale est de ${recette} FCFA`);

// Nous calculons le nombre de billets vendus pour chaque tarif 
console.log(`Le nombre de billets vendus à 1500 FCFA est égal à : ${Nb1500}`);
console.log(`Le nombre de billets vendus à 2500 FCFA est égal à : ${Nb2500}`);