//chercher le module noyeau de Node fs (tout ce qui concerne les fichiers)
var fs = require ('fs');

//méthode readFileSync qui renvoie string ou buffer
var string = fs.readFileSync(process.argv[2], 'utf8');
// console.log(string);

// compte le nb de lignes dans la string splitée par le séparateur \n
var nblines = string.split('\n').length;
console.log(nblines-1);

//solution officielle
// si on ne précise pas l'option String dans méthode readFileSync, ca retourne un objet buffer
// var contents = fs.readFileSync(process.argv[2])
//     var lines = contents.toString().split('\n').length - 1
//     console.log(lines)
