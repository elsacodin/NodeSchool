var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data){
    //if (err) return console.log(err);
    var nblines = data.split("\n").length;
    console.log(nblines-1);
});
// affichera  le coucou avant le nblines calculé en asynchrone
// console.log('coucou');

//solution officielle
// var fs = require('fs')
//     var file = process.argv[2]
//
//     fs.readFile(file, function (err, contents) {
//       if (err) {
//         return console.log(err)
//       }
//       var lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })
