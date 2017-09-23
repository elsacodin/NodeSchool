/**
Module qui exporte une unique fonction qui prend 3 arguments :
  - le chemin du répertoire
  - l’extension de filtrage
  -  et une fonction de rappel, dans cet ordre.

  Contrat de module
  1. Exporter une unique fonction qui prend exactement les arguments décrits.
   2. Appeler la fonction de rappel une et une seule fois avec soit une erreur,
      soit des données, de la façon décrite.
   3. Ne rien changer d’autre, telles que les variables globales ou la sortie
      standard.
   4. Traiter toute erreur qui pourrait survenir en les passant à la fonction
      de rappel.

  */

  var fs = require('fs')
  var path = require('path')

  module.exports = function filterDir(dirPath, extension, callback){

      fs.readdir(dirPath, function (err, filesList){
        if (err) return callback(err);

        //filtrer dans un array les noms de fichiers avec extension x
        filtered_array = filesList.filter(function selectPath(file) {
          var p = path.extname(file);
          return p === '.' + extension;
        });
        // passe 2 arguments à la fonction de rappel
        // 1er: null pour traitement de l'erreur
        // 2ème: array de fichiers filtré
        return callback(null, filtered_array);
  });








   }
