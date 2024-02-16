export default class Compte{
    constructor(nom, prenom, solde){
        this.nom = nom;
        this.prenom = prenom;
        this.solde = parseFloat(solde);
    }

    get getSolde(){
        return Math.floor(this.solde * 100) / 100;
    }

    afficherSolde(){
        return `Solde ${ (this.solde >= 0)? 'créditeur' : 'débiteur'} : ${this.solde}€ }`;
    }

    retirerArgent(montant){
        this.solde = this.solde - montant;
        return `${this.nom} : ${montant} € retiré(s) \n${this.afficherSolde()}`;
    }

    ajouterArgent(montant){
        this.solde = this.solde + montant;
        return `${this.nom} : ${montant} € ajouté(s) \n${this.afficherSolde()}`;
    }
}