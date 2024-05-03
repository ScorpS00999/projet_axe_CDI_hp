<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="css/style.css" />
        <title>Personnage</title>
        <link rel="icon" href="img/HP_-_Harry_Potter_wordmark.svg.png" />
    </head>
    <body>
        <h2>Bonjour,</h2>
        <p>Dans le formulaire précédent, vous avez fourni les
        informations suivantes :</p>
        
        <?php
            echo 'email : '.$_POST["email"].'<br>';
            
        ?>

        <a href="index.html" id="bouton_retour">Retour</a>

        <script></script>
    </body>
</html>
