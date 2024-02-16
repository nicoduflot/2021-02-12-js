/*
c'est dnas les premières lignes d'un fichier de module qu'on importe 
les différentes bibliothèque (ensemble de fonctions, de fichiers, de config, etc.)
dont on va avoir besoin pour éxécuter les instructions JS de Modules.js
*/

/* import des modules */
import * as other from './Others.js';
import loaded, {s, sA, toto} from './Utilities.js';
import Company from './Company.js';
import Asso from './Company.js';
import AnotherCompany from './Another.js';

/* le script qui sera appliqué à la page */


loaded(function(){
    console.log(other.test());
    console.log(other.m);

    const button = s('#addSpan');
    console.log(button);

    const p = sA('p');
    console.log(p);

    console.log(toto());

    const myCompany = new Company('Agence tous risques');
    console.log(myCompany);
    console.log(myCompany.constructor.name);

    const myAsso = new Asso('AEVL');
    console.log(myAsso);
    console.log(myAsso.constructor.name);

    const customCompany = new AnotherCompany('Nike', 'Just Do It');
    console.log(customCompany);
    console.log(customCompany.constructor.name);
});