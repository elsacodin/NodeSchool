## PREMIERS PAS   
   **program-sum.js**

  Écrivez un programme qui accepte un ou plusieurs nombres comme arguments  
  de la ligne de commande, et affiche la somme de ces nombres sur la console  
  (stdout ou console.log).  
 ────────────────────────────────────────────────────────────────────────────
 ### CONSEILS

  Vous pouvez accéder aux arguments de la ligne de commande via l’objet  
  global process.  L’objet process a une propriété argv qui est un tableau  
  contenant la ligne de commande complète : process.argv.  

  Pour vous lancer, écrivez un programme, dans un fichier que vous  
  appelleriez par exemple program.js, qui contient simplement :  

     console.log(process.argv)  

  Exécutez-le en faisant node program.js suivi de quelques arguments, par  
  exemple comme ceci :  

     $ node program.js 1 2 3  

  Dans ce cas, l’affichage obtenu serait un tableau similaire à celui-ci :  

     [ 'node', '/path/to/your/program.js', '1', '2', '3' ]  

  Vous aurez besoin de réfléchir à une façon d’itérer à travers les  
  arguments numériques pour pouvoir calculer leur somme.  Le premier élément  
  du tableau process.argv est toujours 'node', et le second est toujours le  
  chemin du programme JS exécuté, de sorte que vous devrez démarrer à partir  
  du troisième élément (index 2), et ajouter chaque élément à un total  
  jusqu'à atteindre le bout du tableau.  

### KL
  * en Node, tout ce qui est renvoyé en console est String -> utiliser Number()
  * objet Process avec propriété argv qui contien la ligne de commande

  ## MA PREMIÈRE E/S !
  **first-IO.js**

  Écrivez un programme qui utilise une opération synchrone sur le système de  
  fichiers pour lire un fichier et afficher son nombre de fins de ligne sur  
  la console (stdout), un peu comme si vous faisiez cat file | wc -l.  (wc  
  comptera le nombre de lignes, pas les fins de lignes, donc votre résultat  
  devrait être supérieur de 1 (un) au sien.)  

  Le chemin complet du fichier à lire vous sera fourni comme premier  
  argument de la ligne de commande.  Il est inutile de faire votre propre  
  fichier de test.  

 ─────────────────────────────────────────────────────────────────────────────
 ### CONSEILS  

  Tout ce qui touche au système de fichiers se trouve dans le module noyau  
  fs (un module noyau est fourni de base par Node).  Pour charger ce type de  
  module, il vous suffit d’un appel comme le suivant :  

     var fs = require('fs')  

  À présent vous avez le module fs entier mis à disposition dans votre  
  variable nommée fs.  

  Toutes les opérations synchrones (bloquantes) du système de fichier dans  
  le module fs ont un nom qui se termine par 'Sync'.  Pour lire un fichier,  
  vous aurez donc besoin de fs.readFileSync('/chemin/du/fichier').  Cette  
  méthode vous renverra un objet Buffer avec l’intégralité du contenu du  
  fichier.  

  La documentation du module fs :
  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html  

  Les objets Buffer sont l’approche retenue par Node pour représenter  
  efficacement des tableaux de données, qu’il s’agisse de texte ASCII, de  
  binaire ou d’autres formats.  Les objets Buffer peuvent être convertis en  
  chaînes de caractères par un simple appel à leur méthode toString(), par  
  exemple var str = buf.toString().  

  La documentation des Buffers est disponible en ouvrant le fichier suivant  
  dans votre navigateur :  

  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/buffer.html  

  Si vous cherchez un moyen simple de compter les sauts de lignes dans une  
  chaîne de caractères, souvenez-vous qu’une String JavaScript peut être  
  découpée avec .split() en un tableau de sous-chaînes, et que '\n' peut y  
  être renseigné comme délimiteur.  À ce propos, le fichier de test n’aura  
  pas de '\n' à la fin, donc il contiendra un élément de plus que le nombre  
  de fins de ligne.  

  ### KL
    * module 'fs'
    * méthode ReadFileSync qui renvoie string ou buffer
    * méthode toString()



  ## MA PREMIÈRE E/S ASYNCHRONE !
  **first_IO_async.js**

    Écrivez un programme qui utilise une opération asynchrone sur le système  
    de fichiers pour lire un fichier et afficher son nombre de fins de ligne  
    sur la console (stdout), un peu comme si vous faisiez cat file | wc -l.  

    Le chemin complet du fichier à lire vous sera fourni comme premier  
    argument de la ligne de commande.  

   ─────────────────────────────────────────────────────────────────────────────  

   ## Conseils  

    La solution à ce problème est presque exactement la même que pour le  
    précédent, à ceci près que vous devez désormais le faire à la façon  
    Node.js : en asynchrone.  

    Au lieu de recourir à fs.readFileSync(), vous voudrez plutôt utiliser  
    fs.readFile(), et plutôt que de récupérer la valeur de retour de la  
    méthode, vous l’obtiendrez via la fonction de rappel que vous allez passer  
    comme deuxième argument.  
    Pour en savoir plus sur les fonctions de rappel: (https://github.com/maxogden/art-of-node#callbacks).  

    Les fonctions de rappel idiomatiques en Node.js ont la  
    signature suivante :  

       function callback (err, data) { /* ... / }  

    …ainsi vous pouvez vérifier si une erreur a eu lieu en déterminant si le  
    premier argument est truthy.  S’il n’y a pas d’erreur, vous devriez avoir  
    un objet Buffer comme deuxième argument.  Tout comme avec readFileSync(),  
    vous pouvez passer 'utf8' en deuxième argument, auquel cas vous décalerez  
    la fonction de rappel en troisième argument, et celle-ci recevra une  
    String plutôt qu’un Buffer.  

    La documentation du module fs
    file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html  

    ### Key Learnings
      * méthode ReadFile en asynchrone (mode Node) qui renvoie string ou buffer
      `fs.readFile(file, 'utf8', callback)`
      * convention Node de callback `function (err, data) { /* ... / } `
      * ne pas oublier dans la callback:
      `if (err) {
         return console.log(err)
         }`

    ## LISTING FILTRÉ
      **listing_files.js**

           Créez un programme qui affiche une liste de fichiers au sein d’un  
           répertoire donné, filtrés en fonction de leur extension.  Vous recevrez le chemin du répertoire comme premier argument de la ligne de commande (par  
           ex. '/chemin/du/dossier/'), et comme deuxième argument une extension de fichier à utiliser pour le filtrage.  

           Par exemple, si vous recevez 'txt' comme deuxième argument, vous devrez filtrer la liste pour ne garder que les fichiers dont le nom se termine par .txt.  Remarquez bien que le deuxième argument qui vous sera fourni ne commencera pas par un '.'.  

           La liste des fichiers devrait être affichée sur la console, à raison d’un fichier par ligne.  Vous devez utiliser des E/S asynchrones.  

          ─────────────────────────────────────────────────────────────────────

          ## CONSEILS  

           La méthode fs.readdir() prend un chemin comme premier argument et une fonction de rappel en deuxième.  La signature de la fonction de rappel est :  function callback (err, list) { /* ...  }  

           …dans laquelle list est un tableau de chaînes de caractères représentant les noms de fichiers.  

           La documentation du module noyau path, en particulier sa méthode extname:  
          file:///usr/local/lib/node_modules/learnyounode/node_apidoc/path.html  

          ─────────────────────────────────────────────────────────────────────## KL
          * Méthode JS filter
          The filter() method creates a new array with all elements that pass the test implemented by the provided function.
          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
              `var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
              var filtered = numbers.filter( function evenNumbers (number){
                 return number % 2 ===0;
                 });
              console.log(filtered);`


          * méthode asynchrone fs.readdir()
          * module noyau 'path' et sa méthode extname pour extraire l'extension du fichier
          * dans callback
          ` if (err) {
              return console.log(err)
              }`

  ## MODULARISE-MOI ÇA

  **app-module.js**
  **mymodule.js**

  Ce problème est le même que le précédent, mais il introduit le concept de  
  modules.  Vous devrez créer deux fichiers distincts pour résoudre cet  
  exercice.
  Créez un programme qui affiche une liste de fichiers au sein d’un  
  répertoire donné (fourni en premier argument), filtrés en fonction de leur  
  extension (fournie en deuxième argument).  La liste des fichiers doit être  
  affichée sur la console, à raison d’un fichier par ligne.  Vous devez  
  utiliser des E/S asynchrones.  

  Vous devez écrire un fichier de module pour contenir l’essentiel du  
  boulot. Ce module doit exporter une unique fonction qui prendra trois  
  arguments :
  - le chemin du répertoire
  - l’extension de filtrage
  -  et une fonction de rappel, dans cet ordre.  
  L’argument d’extension de filtrage devra être exactement celui passé à votre programme.  N’en faites pas une RegExp, ne le préfixez pas avec '.' ou quoi que ce soit d’autre, passez-lejuste à votre module, dans lequel vous placerez les opérations nécessaires pour faire fonctionner le filtre.  

  La fonction de rappel devra être appelée en utilisant la **convention  
  Node.js (erreur, données)**.  Cette convention stipule qu’à moins qu’une    
  erreur survienne, le premier argument passé devra être null, et le second  
  sera vos données.  Dans cet exercice, les données seront la liste filtrée  
  des fichiers, en tant que tableau.  Si vous recevez une erreur, par  
  exemple suite à votre appel de fs.readdir(), la fonction de rappel de  
  votre module devra être appelée avec cette erreur, et uniquement cette  
  erreur, comme premier argument.  

  Vous devez vous abstenir d’afficher directement sur la console depuis  
  votre fichier de module, et réserver ce traitement à votre programme  
  principal uniquement.  

  Dans le cas d’une erreur qui remonterait à votre programme principal,  
  vérifiez simplement sa présence et affichez un message d’information sur  
  la console.  

  Les 4 points suivants constituent le contrat que votre module doit  
  respecter :  

   1. Exporter une unique fonction qui prend exactement les arguments décrits.  
   2. Appeler la fonction de rappel une et une seule fois avec soit une erreur,  
      soit des données, de la façon décrite.  
   3. Ne rien changer d’autre, telles que les variables globales ou la sortie  
      standard.  
   4. Traiter toute erreur qui pourrait survenir en les passant à la fonction  
      de rappel.  

  L’avantage d’avoir un contrat est que votre module peut être utilisé par  
  quiconque s’attend à ce contrat.  Donc votre module pourrait être utilisé  
  par n’importe qui faisant learnyounode, ou le vérificateur, et marcher tel  
  quel.  

 ─────────────────────────────────────────────────────────────────────────────
 ## Conseils  

  Créez un nouveau module en créant simplement un nouveau fichier qui  
  contiendrait votre fonction de lecture de répertoire et de filtrage. Pour  
  définir un export de fonction unique, affectez cette fonction à l’objet  
  module.exports, en écrasant sa valeur précédente :  

     module.exports = function filterDir(args) { /* ... / }  

  Vous pouvez aussi déclarer la fonction d’abord et affecter sa référence à  
  l’objet ensuite.  

  Pour utiliser ce nouveau module dans votre programme principal, utilisez  
  un appel à require() comme vous le faites déjà avec require('fs') pour  
  obtenir le module fs.  La seule différence, c’est que les modules locaux  
  doivent utiliser des chemins relatifs, ici préfixés par './'.  Donc si  
  votre module s’appelle mymodule.js, vous devriez faire :  

     var myModule = require('./mymodule');  

  Même s’il est possible de préciser aussi l’extension du fichier ('.js'),  
  celle-ci est optionelle et traditionnellement omise, afin de faciliter le  
  recours éventuel à des chargeurs alternatifs de modules.  

  Vous avez désormais l’objet fourni par le module.exports de votre module  
  qui est mis à disposition dans votre variable locale myModule.  Comme vous  
  avez exporté une simple fonction, myModule est une fonction que vous  
  pouvez appeler !  

  Gardez aussi à l’esprit qu’il est idiomatique en Node de vérifier si on  
  s’est pris une erreur et de court-circuiter vers la fonction de rappel  
  supérieure dans ce cas :  

     function bar (callback) {  
       foo(function (err, data) {  
         if (err) {  
           return callback(err); // propagation et court-circuit  
         }  

         // … pas d’erreur, on continue à faire des trucs cool avec `data`  

         // tout s’est bien passé, on appelle `callback` avec `null` pour  
         // l’argument d’erreur  

         callback(null, data)  
       })  
     }  

  ## Key Learnings

    * méthode js forEach() pour executer une fonction donnée sur les éléments d'un tableau
    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach
        `var a = ['a', 'b', 'c'];
          a.forEach(function(element) {
          console.log(element);
        });
        // a
        // b
        // c`
    * modularisation: séparer l'algo métier (le "contrat" du module) de l'exploitation du résultat -> en créant 2 fichiers
    Le module exporté se limite à faire l'algo mais sans traiter l'erreur ou traiter le résultat
    * définir un export de fonction unique :
        `module.exports = function MyModule(args dont callback) { /* ... / }`
    * en fin du module: appeler la callback avec le résultat visé en 2ème argument
        `return callback( null, data);`
        **convention Node.js (erreur, données)**

    Dans le fichier principal:
    * appel du module par le chemin relatif:
        `var myModule = require('./mymodule'); `
    * et appel de la fonction avec les args adéquats et callback
        `myModule(arg1, arg2, function (err, data) {
          if (err) {
            return callback(err);
            };
            ...`

  ## CLIENT HTTP

   [image] (ex7Learnyounode.jpg)

    Écrivez un programme qui fait une requête HTTP GET sur une URL fournie  
    comme premier argument de la ligne de commande.  Affichez le contenu  
    String de chaque événement 'data' de la réponse sur sa propre ligne dans  
    la console (stdout).  

   ────────────────────────────────────────────────────────────────────────────

   # Conseils  

    Pour cet exercice, vous aurez besoin du module noyau http.  
    file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html  

    La méthode http.get() est un raccourci pour les requêtes GET simples, vous pouvez l’utiliser pour simplifier votre solution.
    Le premier argument peut être l’URL que vous voulez récupérer ; passez une fonction de rappel en deuxième argument.  
    Contrairement aux autres fonctions de rappel, celle-ci a comme signature :   function callback (response) { /* ... }  

    …dans laquelle l’objet response est un objet flux (stream) Node. Vous  
    pouvez traiter les flux Node comme des objets émettant des événements. Les Les 3 événements qui nous intéressent le plus sont : 'data', 'error' et  
    'end'.  Vous pouvez écouter un événement comme ceci :  

       response.on("data", function (data) { /* ... */ });  

    L’événement 'data' est émis pour chaque bloc de données disponible et prêt  
    à être traité.  La taille du bloc dépend de la source de données  
    sous-jacente.  

    L’objet response que vous obtenez suite à un http.get() dispose aussi  
    d’une méthode setEncoding(). Si vous l’appelez avec l’argument 'utf8', les  
    événements 'data' émettront des String au lieu des Buffer habituels, qu’il  
    vous aurait fallu convertir explicitement en String.  
