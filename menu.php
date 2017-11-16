<div class="center" id="menu-topo">
    <div class="logo_topo"><a href="/"><img src="../images/topo.png" title="Sousa Negócios Imobiliários" alt="Souza Negócios Imobiliários"></a></div>
    

    <div class="menu_topo">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/empresa">Institucional</a></li>
            <li><a href="/imoveis">Imóveis</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/contato">Contato</a></li>
        </ul>
    </div>
    
    <div class="telefone_topo"><span> (15) </span>3325-4441<span><br/> (15) </span>99712-3432</div>
    <div class="menu_topo_tablet">
        <div id="menu_tablet" onclick="slideMenu()" class="btn_menu_tablet"></div>
        <ul>
            <li style="text-align: right;padding-right: 15px;"><span> (15) 3325-4441</span></li>
            <li style="text-align: right;padding-right: 15px;"><span> (15) 99712-3432 </span></li>
            <li><a href="/"><i class="fa fa-home" aria-hidden="true"></i> Home</a></li>
            <li><a href="/empresa"><i class="fa fa-chevron-right" aria-hidden="true"></i> Quem Somos</a></li>
            <li><a href="/imoveis"> <i class="fa fa-chevron-right" aria-hidden="true"></i>Imóveis</a></li>
            <li><a href="/empreendimentos" class="efeitoHover"><i class="fa fa-chevron-right" aria-hidden="true"></i> Lançamentos</a></li>
            <li><a href="/contato"><i class="fa fa-chevron-right" aria-hidden="true"></i> Contato</a></li>
            <li style="height: 10px;"><hr style="border-color: rgb(59,56,56); margin-right: 1em;"></li>
            <li ><span style="color: rgb(175,171,171)">Busque seu Imóvel:</span></li>
            <li>
                <select onchange="selecionar('finalidade', '')">
                    <option value="comprar">Comprar</option>
                    <option value="alugar">Alugar</option>
                    <option value="temporada">Temporada</option>
                </select>   
            </li>
            <li>
                <select onchange="selecionar('tipo', '')" >
                    <option value="">Tipos</option>
                    <option value="APARTAMENTO">APARTAMENTO</option>
                    <option value="BARRACÃO">BARRACÃO</option>
                    <option value="CASA">CASA</option>
                    <option value="CHÁCARA">CHÁCARA</option>
                    <option value="SÍTIO">SÍTIO</option>
                    <option value="TERRENO">TERRENO</option>
                </select>  
            </li>
            <li>
                <select onchange="selecionar('cidade', '')" >
                    <option value="">Cidades</option>
                    <option value="CAMPINAS - SP">CAMPINAS - SP</option>
                    <option value="INDAIATUBA - SP">INDAIATUBA - SP</option>
                </select> 
            </li>
            <li>
                <select>
                    <option value="">Bairros</option>
                    <option value="ALTOS DA BELA VISTA">ALTOS DA BELA VISTA</option>
                    <option value="CAMBUI">CAMBUI</option>
                    <option value="CENTRO">CENTRO</option>
                    <option value="CHACARA ALVORADA">CHACARA ALVORADA</option>
                    <option value="CIDADE NOVA II">CIDADE NOVA II</option>
                    <option value="COLINAS DE INDAIATUBA II">COLINAS DE INDAIATUBA II</option>
                    <option value="COLINAS DO MOSTEIRO DE ITAICI">COLINAS DO MOSTEIRO DE ITAICI</option>
                    <option value="DISTRITO INDUSTRIAL DOMINGOS GIOMI">DISTRITO INDUSTRIAL DOMINGOS GIOMI</option>
                    <option value="JARDIM ALICE">JARDIM ALICE</option>
                    <option value="JARDIM BRASIL">JARDIM BRASIL</option>
                    <option value="JARDIM CIDADE JARDIM">JARDIM CIDADE JARDIM</option>
                    <option value="PARQUE SAO TOMAZ DE AQUINO">PARQUE SAO TOMAZ DE AQUINO</option>
                    <option value="TERRAS DE ITAICI">TERRAS DE ITAICI</option>
                    <option value="VALE DO SOL">VALE DO SOL</option>
                    <option value="VILA AURORA">VILA AURORA</option>
                    <option value="VILA TODOS OS SANTOS">VILA TODOS OS SANTOS</option>
                </select>
            </li>
            <li>
                <select>
                    <option value="" >Valor</option>
                    <option value="max_100000" >até 100 mil</option>
                    <option value="100000_150000" >de 100 até 150 mil</option>
                    <option value="150000_200000" >de 150 até 200 mil</option>
                    <option value="200000_300000" >de 200 até 300 mil</option>
                    <option value="300000_400000" >de 300 até 400 mil</option>
                    <option value="400000_500000" >de 400 até 500 mil</option>
                    <option value="500000_750000" >de 500 até 750 mil</option>
                    <option value="750000_1000000" >de 750 até 1 milhão</option>
                    <option value="1000000_1250000" >de 1 até 1.250 milhões</option>
                    <option value="1250000_1500000" >de 1.250 até 1.500 milhões</option>
                    <option value="1500000_1750000" >de 1.500 até 1.750 milhões</option>
                    <option value="1750000_2000000" >de 1.750 até 2 milhões</option>
                    <option value="2000000_2250000" >de 2 até 2.225 milhões</option>
                    <option value="2250000_2500000" >de 2.250 até 2.500 milhões</option>
                    <option value="2500000_2750000" >de 2.500 até 2.750 milhões</option>
                    <option value="2750000_3000000" >de 2.750 até 3 milhões</option>
                    <option value="min_3000000" >acima de 3 milhões</option>
                </select>   
            </li>
            <li>
                <input type="text" placeholder="Busca por Cód" class="referencia form-control">
            </li>
            <li style="padding-bottom: 60px;padding-top: 15px;">
                <div> 
                    <a href="/imoveis" class="btn btn-primary" style="width: 90%;">Buscar</a> 
                </div> 
            </li>
        </ul>
        
        
    </div>
</div>
<script>

    function slideMenu(){
        
        $('.menu_topo_tablet ul').slideToggle();
        $('.menu_topo_tablet').toggleClass('menu-active');
        $('.topo .btn_menu_tablet').toggleClass('btn-menu-active');

        
         $("html,body").toggleClass('disable-overflow');
        
    }

    </script>
    