var filterDir = require ('./mymodule');

var dir = process.argv[2];
var extension = process.argv[3];

//appel de fonction avec les 3 bons arguments
filterDir(dir, extension, function (err, data) {

  // traitement de l'erreur: affiche message erreur en console avec le callback
  if (err) {
    return callback(err);
    // ou return console.error('There was an error:', err)

  };

  // afficher le nom des fichiers filtrés
  data.forEach(function(file) {
  //data.forEach(function(file) {
  console.log(file);
  });

});
