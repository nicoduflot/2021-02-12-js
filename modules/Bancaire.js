import loaded from './Utilities.js';
import CompteInteret from './CompteInteret.js';
import CompteCourant from './CompteCourant.js';

loaded(()=>{
    const monCompteCourant = new CompteCourant('Duflot', 'Nicolas Compte Cheque', 1500, '1234');

    console.log(monCompteCourant);

    const compteEpicier = new CompteCourant('Aldi', 'Lowcost', 25000000, '0000');

    console.log(monCompteCourant.payerParCarte(20, '1234', compteEpicier));

});