## PREMIERS PAS   
   *program-sum-js*

  Écrivez un programme qui accepte un ou plusieurs nombres comme arguments  
  de la ligne de commande, et affiche la somme de ces nombres sur la console  
  (stdout ou console.log).  
 ────────────────────────────────────────────────────────────────────────────
 ## CONSEILS  

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
    *first-I-O.js*

  Écrivez un programme qui utilise une opération synchrone sur le système de  
  fichiers pour lire un fichier et afficher son nombre de fins de ligne sur  
  la console (stdout), un peu comme si vous faisiez cat file | wc -l.  (wc  
  comptera le nombre de lignes, pas les fins de lignes, donc votre résultat  
  devrait être supérieur de 1 (un) au sien.)  

  Le chemin complet du fichier à lire vous sera fourni comme premier  
  argument de la ligne de commande.  Il est inutile de faire votre propre  
  fichier de test.  

 ─────────────────────────────────────────────────────────────────────────────
 ## CONSEILS  

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
  *first_IO_async.js*

    Écrivez un programme qui utilise une opération asynchrone sur le système  
    de fichiers pour lire un fichier et afficher son nombre de fins de ligne  
    sur la console (stdout), un peu comme si vous faisiez cat file | wc -l.  

    Le chemin complet du fichier à lire vous sera fourni comme premier  
    argument de la ligne de commande.  

   ─────────────────────────────────────────────────────────────────────────────  

   # CONSEILS  

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

    ### KL
      * module 'fs'
      * méthode ReadFileSync qui renvoie string ou buffer
      * méthode toString()
