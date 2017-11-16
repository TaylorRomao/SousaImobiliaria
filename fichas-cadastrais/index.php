<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
    
    <title>Sousa Imóveis - Imoboliária Sorocaba</title>

    <link rel="stylesheet" href="/stylesheets/vendor/font-awesome.min.css">
    <link rel="stylesheet" href="/stylesheets/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="/stylesheets/vendor/bootstrap-multiselect.css">
    <link rel="stylesheet" href="/stylesheets/vendor/gldatepicker.default.css">
    <link rel="stylesheet" href="/stylesheets/vendor/fotorama.css">

    <link rel="stylesheet" href="/stylesheets/style.css">

    <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,700" rel="stylesheet" type="text/css">

</head>

<body>
    <?php include '../botoes-midia-digital.php';?>
    <?php include '../chat-corretor.php';?>


    <?php include '../favoritos.php';?>

    <input id="whatsapp_hora_inicio" type="hidden" value="07:00">
    <input id="whatsapp_hora_fim" type="hidden" value="19:00">
    <input id="whatsapp_dias" type="hidden">

    

    <br clear="all">
    <div class="topo">

        <?php include '../menu.php';?>

        <?php include '../conteudo-home/busca-rapida/busca-rapida.php';?>

        <comprar></comprar>

        <div class="titulo_pagina">&nbsp;</div>

       <h1 class="titulo_home">Imobiliária</h1>

       <br clear="all">
       <br clear="all">

       <?php include 'fichas-cadastrais.php' ?> 

        <?php include '../rodape.php' ?>       

    <script type="text/javascript" src="../javascripts/vendor/jquery.min.js"></script>
    <script type="text/javascript" src="../javascripts/vendor/jquery.lazyload.min.js"></script>
    <script type="text/javascript" src="../javascripts/vendor/jquery.mask.min.js"></script>
    <script type="text/javascript" src="../javascripts/vendor/bootstrap-multiselect.js"></script>
    <script type="text/javascript" src="../javascripts/vendor/popper.min.js"></script>     <script type="text/javascript" src="../javascripts/vendor/bootstrap.min.js"></script>
    <script type="text/javascript" src="../javascripts/vendor/gldatepicker.min.js"></script>
    <script type="text/javascript" src="../javascripts/vendor/scripts.js"></script>
    <script type="text/javascript" src="../javascripts/vendor/fotorama.js"></script>

    <script>
    $(document).ready(function() { 
            window.location.href='#fichas-cadastrais';
        });
    </script>
</body>

</html>