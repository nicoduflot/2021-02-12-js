import Compte from './Compte.js';

export default class CompteInteret extends Compte{
    constructor(nom, prenom, solde, tauxInteret){
        super(nom, prenom, solde);
        this.tauxInteret = tauxInteret;
    }

    /* méthodes pour un compte intérêts ? */
    calculerInterets(){
        /*return ((this.tauxInteret - 1) * this.solde).toFixed(2);*/
        return Math.floor(((this.tauxInteret - 1) * this.solde) * 100) / 100;
    }

    crediterInterets(){
        return this.ajouterArgent(this.calculerInterets());
    }
}