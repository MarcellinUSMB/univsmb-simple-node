const fs = require('fs')
class Fichier{
    constructor(fichier){
        this.fichier = fichier
    }
    Lire(){
        this.contenu = fs.readFileSync(this.fichier,{encoding:'utf8',flag:'r'});
        //this.affichage
    }

    Ecrire(contenu){
        fs.writeFileSync(this.fichier,this.contenu + '\n'+contenu)
      
        
    }

    affichage(){
        if(this.contenu != undefined){
        console.log("Mon contenu :\n" + this.contenu)
}
}
    delete(){
        fs.rmSync(this.fichier)
    }

    vider(){
        fs.writeFileSync(this.fichier,'')

    }
}

let monFichier = new Fichier('myfile.txt');
monFichier.Lire()
monFichier.affichage()
monFichier.Ecrire("bonjour1")
//monFichier.delete()
//monFichier.vider()

class GestionFichier_json extends Fichier{

    constructor
}