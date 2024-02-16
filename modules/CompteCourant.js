import Compte from './Compte.js';

export default class CompteCourant extends Compte{
    constructor(nom, prenom, solde, codePin){
        super(nom, prenom, solde);
        this._codePin = codePin;
    }

    payerParCarte(montant, codepin, receveur){
        if(this._codePin === codepin){
            return `Un paiement de ${montant} € a été effectué par carte à ${receveur.nom}.
            \n${this.retirerArgent(montant)} 
            \n${receveur.ajouterArgent(montant)}`;
        }else{
            return `Une tentative de paiement par carte de ${montant} € a échoué`;
        }
    }
}