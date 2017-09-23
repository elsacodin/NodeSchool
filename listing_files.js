var fs = require('fs');
var path = require('path');
filtered_array = [];
var dir = process.argv[2];
var extension = process.argv[3];

//récupérer le tab contenant noms de fichiers du dossier
fs.readdir(dir, function (err, filesList){
    //if (err) return console.log(err);

    //filtrer  les noms de fichiers avec extension x
    filtered_array = filesList.filter(function selectPath(file) {
      var p = path.extname(file);
      return p === '.' + extension;
    });
    // console.log(filtered_array);
    for (i=0; i<filtered_array.length; i++){
      console.log(filtered_array[i]);
    }
});

//solution officielle avec une condition sur extension des noms de fichiers

    // var fs = require('fs')
    // var path = require('path')
    //
    // var folder = process.argv[2]
    // var ext = '.' + process.argv[3]
    //
    // fs.readdir(folder, function (err, files) {
    //   if (err) return console.error(err)
    //   files.forEach(function (file) {
    //     if (path.extname(file) === ext) {
    //       console.log(file)
    //     }
    //   })
    // })
