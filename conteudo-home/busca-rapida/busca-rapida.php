<div class="center">
    <div class="busca_rapida">
        <div class="boxBuscaRapida">
            <div class="campos">
                <?php include 'finalidade.php';?>
                <?php include 'tipo.php';?>
                <?php include 'cidade.php';?>
                <?php include 'bairro.php';?>
                <?php include 'valor.php';?>
                <div class="txt"><input id="referencia" type="text" placeholder="Busca por Cód" class="referencia form-control"></div>
            </div>
            <div onclick="pesquisar()" class="btn_buscar_rapida efeitoHover">
                <span>BUSCAR</span>
            </div>
        </div>
    </div>
</div>