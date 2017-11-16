<div class="imovel">
    <div class="topo_ficha">
        <div class="conteudo_imovel">
        
            <!-- Social Buttons -->
            <div class="social_buttons">
                <span>Compartilhar em: </span>
                
                <!-- LinkedIn -->
                <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http://novo.sousaimobiliaria.com.br" target="_blank">
                    <img src="/images/linkedin.png" alt="LinkedIn" />
                </a>
                <!-- Facebook -->
                <a  href="http://www.facebook.com/sharer.php?u=http://novo.sousaimobiliaria.com.br" target="_blank">
                    <img src="/images/facebook.png" alt="Facebook" />
                </a>
                <!-- Twitter -->
                <a href="https://twitter.com/share?url=http://novo.sousaimobiliaria.com.br&amp;text=SousaImobiliaria&amp;hashtags=sousaimobiliaria" target="_blank">
                    <img src="/images/twitter.png" alt="Twitter" />
                </a>
                <!-- WhatsApp -->
                <a href="whatsapp://send?text=Text to send with message: http://novo.sousaimobiliaria.com.br" target="_blank">
                    <img src="/images/whatsapp.png" alt="Twitter" />
                </a>


                
                <div class="buttons-share-div">
                    <div class="buttons-share">
                        <!-- <a href="mailto:?Subject=Assunto&amp;Body=TextoBody http://novo.sousaimobiliaria.com.br" class="btn btn-primary"><i class="fa fa-envelope" aria-hidden="true"></i> Indicar este imóvel</a> -->
                        <button type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn_indicar btn_topo_ficha"><i class="fa fa-envelope"></i><span>Indicar este imóvel</span></button>
                    </div>
                    <div class="buttons-share">
                        <!-- <a href="#" class="btn btn-primary" ><i class="fa fa-heart-o" aria-hidden="true"></i> Adicionar aos favoritos</a> -->
                        <button id="btn_favoritos" onclick="favoritos('1114346');" class="btn btn_favoritos btn_topo_ficha"><i class="fa fa-heart-o"></i><span id="favoritos">Adicionar aos favoritos</span></button>
                    </div>
                </div>
            </div>

            <div class="controle_capa">
                <div id="capa_imovel2" style="z-index:3;" class="capa_imovel itens_capa">
                    <script src="js/jssor.slider-26.3.0.min.js" type="text/javascript"></script>
                    <script type="text/javascript">
                        jssor_1_slider_init = function() {

                            var jssor_1_SlideshowTransitions = [
                            {$Duration:1200,$Zoom:1,$Easing:{$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2},
                            {$Duration:1000,$Zoom:11,$SlideOut:true,$Easing:{$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2},
                            {$Duration:1200,$Zoom:1,$Rotate:1,$During:{$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Easing:{$Zoom:$Jease$.$Swing,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:0.5}},
                            {$Duration:1000,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Zoom:$Jease$.$InQuint,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}},
                            {$Duration:1200,x:0.5,$Cols:2,$Zoom:1,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
                            {$Duration:1200,x:4,$Cols:2,$Zoom:11,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2},
                            {$Duration:1200,x:0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Opacity:2,$Round:{$Rotate:0.5}},
                            {$Duration:1000,x:-4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InQuint,$Zoom:$Jease$.$InQuart,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}},
                            {$Duration:1200,x:-0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Opacity:2,$Round:{$Rotate:0.5}},
                            {$Duration:1000,x:4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InQuint,$Zoom:$Jease$.$InQuart,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}},
                            {$Duration:1200,x:0.5,y:0.3,$Cols:2,$Zoom:1,$Rotate:1,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}},
                            {$Duration:1000,x:0.5,y:0.3,$Cols:2,$Zoom:1,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.7}},
                            {$Duration:1200,x:-4,y:2,$Rows:2,$Zoom:11,$Rotate:1,$Assembly:2049,$ChessMode:{$Row:28},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}},
                            {$Duration:1200,x:1,y:2,$Cols:2,$Zoom:11,$Rotate:1,$Assembly:2049,$ChessMode:{$Column:19},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.8}}
                            ];

                            var jssor_1_options = {
                            $AutoPlay: 1,
                            $Align: 0,
                            $SlideshowOptions: {
                                $Class: $JssorSlideshowRunner$,
                                $Transitions: jssor_1_SlideshowTransitions,
                                $TransitionsOrder: 1
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $Rows: 2,
                $Cols: 6,
                $SpacingX: 14,
                $SpacingY: 12,
                $Orientation: 2,
                $Align: 156
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            /*#region responsive code begin*/

            var MAX_WIDTH = 960;

            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                    jssor_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        };
    </script>
    <style>
        /* jssor slider loading skin spin css */
        .jssorl-009-spin img {
            animation-name: jssorl-009-spin;
            animation-duration: 1.6s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }

        @keyframes jssorl-009-spin {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }


        .jssora093 {display:block;position:absolute;cursor:pointer;}
        .jssora093 .c {fill:none;stroke:#fff;stroke-width:400;stroke-miterlimit:10;}
        .jssora093 .a {fill:none;stroke:#fff;stroke-width:400;stroke-miterlimit:10;}
        .jssora093:hover {opacity:.8;}
        .jssora093.jssora093dn {opacity:.6;}
        .jssora093.jssora093ds {opacity:.3;pointer-events:none;}

        .jssort101 .p {position: absolute;top:0;left:0;box-sizing:border-box;background:#000;}
        .jssort101 .p .cv {position:relative;top:0;left:0;width:100%;height:100%;border:2px solid #000;box-sizing:border-box;z-index:1;}
        .jssort101 .a {fill:none;stroke:#fff;stroke-width:400;stroke-miterlimit:10;visibility:hidden;}
        .jssort101 .p:hover .cv, .jssort101 .p.pdn .cv {border:none;border-color:transparent;}
        .jssort101 .p:hover{padding:2px;}
        .jssort101 .p:hover .cv {background-color:rgba(0,0,0,6);opacity:.35;}
        .jssort101 .p:hover.pdn{padding:0;}
        .jssort101 .p:hover.pdn .cv {border:2px solid #fff;background:none;opacity:.35;}
        .jssort101 .pav .cv {border-color:#fff;opacity:.35;}
        .jssort101 .pav .a, .jssort101 .p:hover .a {visibility:visible;}
        .jssort101 .t {position:absolute;top:0;left:0;width:100%;height:100%;border:none;opacity:.6;}
        .jssort101 .pav .t, .jssort101 .p:hover .t{opacity:1;}
    </style>
    <div id="jssor_1" style="position:relative;margin:0 auto;top:0px;left:0px;width:1085px;height:600px;overflow:hidden;visibility:hidden;background-color:#24262e;">
        <!-- Loading Screen -->
        <div data-u="loading" class="jssorl-009-spin" style="position:absolute;top:0px;left:0px;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,0.7);">
            <img style="margin-top:-19px;position:relative;top:50%;width:38px;height:38px;" src="img/spin.svg" />
        </div>
        <div data-u="slides" id="slides_imovel" style="cursor:default;position:relative;top:0px;left:240px;width:720px;height:600px;overflow:hidden;">
            <div>
                <img data-u="image" src="img/004.jpg" />
                <img data-u="thumb" src="img/004-s99x66.jpg" />
            </div>
            <div>
                <img data-u="image" src="img/005.jpg" />
                <img data-u="thumb" src="img/005-s99x66.jpg" />
            </div>
            <div>
                <img data-u="image" src="img/006.jpg" />
                <img data-u="thumb" src="img/006-s99x66.jpg" />
            </div>
            <div>
                <img data-u="image" src="img/007.jpg" />
                <img data-u="thumb" src="img/007-s99x66.jpg" />
            </div>
            <div>
                <img data-u="image" src="img/008.jpg" />
                <img data-u="thumb" src="img/008-s99x66.jpg" />
            </div>
            <div>
                <img data-u="image" src="img/009.jpg" />
                <img data-u="thumb" src="img/009-s99x66.jpg" />
            </div>
            <div>
                <img data-u="image" src="img/010.jpg" />
                <img data-u="thumb" src="img/010-s99x66.jpg" />
            </div>
            <div>
                <img data-u="image" src="img/013.jpg" />
                <img data-u="thumb" src="img/013-s99x66.jpg" />
            </div>
            <div>
                <img data-u="image" src="img/014.jpg" />
                <img data-u="thumb" src="img/014-s99x66.jpg" />
            </div>
            <div>
                <img data-u="image" src="img/015.jpg" />
                <img data-u="thumb" src="img/015-s99x66.jpg" />
            </div>
            <div>
                <img data-u="image" src="img/016.jpg" />
                <img data-u="thumb" src="img/016-s99x66.jpg" />
            </div>
            <div>
                <img data-u="image" src="img/017.jpg" />
                <img data-u="thumb" src="img/017-s99x66.jpg" />
            </div>
            <div>
                <img data-u="image" src="img/018.jpg" />
                <img data-u="thumb" src="img/018-s99x66.jpg" />
            </div>
        </div>
        <!-- Thumbnail Navigator -->
        <div data-u="thumbnavigator" class="jssort101" style="position:absolute;left:0px;top:0px;width:240px;height:480px;background-color:#000;" data-autocenter="2" data-scale-left="0.75">
            <div data-u="slides">
                <div data-u="prototype" class="p" style="width:99px;height:66px;">
                    <div data-u="thumbnailtemplate" class="t"></div>
                    <svg viewbox="0 0 16000 16000" class="cv">
                        <circle class="a" cx="8000" cy="8000" r="3238.1"></circle>
                        <line class="a" x1="6190.5" y1="8000" x2="9809.5" y2="8000"></line>
                        <line class="a" x1="8000" y1="9809.5" x2="8000" y2="6190.5"></line>
                    </svg>
                </div>
            </div>
        </div>
        <!-- Arrow Navigator -->
        <div data-u="arrowleft" class="jssora093" style="width:50px;height:50px;top:0px;left:270px;" data-autocenter="2">
            <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                <circle class="c" cx="8000" cy="8000" r="5920"></circle>
                <polyline class="a" points="7777.8,6080 5857.8,8000 7777.8,9920 "></polyline>
                <line class="a" x1="10142.2" y1="8000" x2="5857.8" y2="8000"></line>
            </svg>
        </div>
        <div data-u="arrowright" class="jssora093" style="width:50px;height:50px;top:0px;right:30px;" data-autocenter="2">
            <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                <circle class="c" cx="8000" cy="8000" r="5920"></circle>
                <polyline class="a" points="8222.2,6080 10142.2,8000 8222.2,9920 "></polyline>
                <line class="a" x1="5857.8" y1="8000" x2="10142.2" y2="8000"></line>
            </svg>
        </div>
    </div>
    <script type="text/javascript">jssor_1_slider_init();</script>
                </div>

                <!--Pop-up contato-->
                <div class="info_contato">
                    <div class="valor">
                        <h2>Temporada</h2>
                        <h3>R$ 50.000,00</h3>
                    </div>
                    <div onclick="$('.form_imovel').slideToggle();" class="clique">
                        <span>clique aqui para entrar em contato</span>
                    </div>
                    <div class="form_imovel">
                        <div class="fechar_contato">
                            <i onclick="$('.form_imovel').slideToggle();" class="fa fa-times"></i>
                        </div>
                        <div class="input-group">
                            <div class="input-group-addon i fa fa-user"></div>
                            <input type="text" placeholder="*Nome" valor="nome" formulario="form-imovel" obrigatorio="true" name="nome" class="form-control">
                        </div>
                        <br>
                        <div class="input-group">
                            <div class="input-group-addon i fa fa-at"></div>
                            <input type="text" placeholder="*E-Mail" valor="email" formulario="form-imovel" obrigatorio="true" name="email" class="form-control">
                        </div>
                        <br>
                        <div class="input-group">
                            <div class="input-group-addon i fa fa-phone"></div>
                            <input type="text" placeholder="Telefone" valor="telefone" formulario="form-imovel" name="telefone" class="form-control">
                        </div>
                        <br>
                        <div class="input-group">
                            <div class="input-group-addon i fa fa-phone"></div>
                            <input type="text" placeholder="Celular" valor="celular" formulario="form-imovel" name="celular" class="form-control">
                        </div>
                        <br>
                        <div class="input-group">
                            <div class="input-group-addon i fa fa-users"></div>
                            <input type="number" placeholder="Acomodações Para" valor="acomodacoes" formulario="form-imovel" name="acomodacoes" class="form-control">
                        </div>
                        <span style="font-size:11px; position:absolute;">Quantidade de pessoas. Ex.: 8</span>
                        <br>
                        
                        <span style="font-size:11px; position:absolute;">*Tipo de reserva: <span>diária</span></span>
                        <br>
                        <textarea placeholder="Mensagem" valor="mensagem" formulario="form-imovel" rows="5" name="mensagem" class="form-control"></textarea>
                        <input type="hidden" id="fkempresa" valor="fkempresa" formulario="form-fichaimovel" value="642" class="form-control">
                        <input type="hidden" valor="pkimovel" formulario="form-imovel" value="978788" class="form-control">
                        <input type="hidden" valor="imovel" formulario="form-imovel" value="AP00001" class="form-control">
                        <input type="text" valor="link-imovel" formulario="form-imovel" value="http://www.uso.com.brimoveis/referencia-AP00001" style=" display:none;"
                            class="form-control">
                        <input type="hidden" id="fkempresa_imovel" valor="fkempresa_imovel" formulario="form-imovel" value="642" class="form-control">
                        <br>
                        <input id="datas_ocupadas" type="hidden" value="2017-02-03#2017-02-06,2017-02-10#2017-02-12,2017-02-13#2017-02-15,2017-03-01#2017-03-05"
                            class="form-control">
                        <input id="flag_pernoite" type="hidden" value="0">
                        <button onclick="sendForm('form-imovel', this);" class="btn">Enviar Mensagem</button>
                    </div>
                </div>

                </div>
                <br clear="all">
                <br clear="all">
                <br clear="all">
                <br clear="all">
                <br clear="all">
                <br clear="all">
                <br clear="all">
                <br clear="all">
                <br clear="all">
                <br clear="all">
                <br clear="all">
                <br clear="all">
            
                <!--Info Imoveis-->
                <div class="info_imovel">

                    <div class="pretensao_referencia">
                        <div class="pretensao"></div>
                        <div class="referencia"><span>Ref.: </span><span>AP00001</span></div>
                    </div>

                    <h1 class="titulo">APARTAMENTO<span> - RUA HUMAITA<span>, 1586</span></span></h1>
                    <h2 class="cidade_bairro">INDAIATUBA, SP - CAMBUI</h2>
                    <div class="esquerda_ficha">

                        <div class="detalhes">
                            <div title="Dormitórios" class="detalhe"><i class="fa fa-bed"></i><span>3</span><span> dormitórios</span><span> sendo 2 suítes</span></div>
                            <div title="Banheiros" class="detalhe"><i class="fa fa-bath"></i><span>2</span><span> banheiros</span></div>
                            <div title="Vagas" class="detalhe"><i class="fa fa-car"></i><span>-</span></div>
                        </div>

                        <div class="detalhes">
                            <div title="Áreas" class="detalhe"><i class="fa fa-expand"></i><span>350</span><span> m² útil</span><span> / </span><span>350</span><span> m² construída</span><span> / </span><span>350</span><span> m² terreno</span><span> / </span><span>350</span><span> m² total</span></div>
                        </div>

                        <div class="detalhes">
                            <div title="Valores" class="detalhe"><i class="fa fa-usd"></i><span>IPTU: <span>-</span></span><span> / Condomínio: <span>R$ 1.000,00</span></span>
                            </div>
                        </div>
                    </div>

                    <div class="direita_ficha">
                        <div class="detalhes"><button onclick="corretorOnline('978788','AP00001','642');" class="btn btn_detalhes"><i class="fa fa-comments"></i><span>Falar online com um corretor</span></button></div>
                        <div class="detalhes"><button data-toggle="modal" data-target="#modal-agendar-visita" class="btn btn_detalhes"><i class="fa fa-address-book"></i><span>Agendar uma visita</span></button></div>
                        <div class="detalhes"><button data-toggle="modal" data-target="#modal-dados-corretor" class="btn btn_detalhes"><i class="fa fa-user"></i><span>Dados do corretor</span></button></div>
                        <!--Apenas no mobile-->
                    </div>

                </div>

                <div class="descricao">
                    <h3 class="titulo_ficha">Descrição</h3>
                    <div class="texto">Belíssimo apartamento, com sala espaçosa, sol da manhã, condomínio tranquilo. Com piscina, área de lazer para todas as
                        faixas etárias, churrasqueira etc.</div>
                </div>
                <div class="mais_detalhes">
                    <h3 class="titulo_ficha">Mais Detalhes</h3>
                    <div class="todos_itens">
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Água</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Área de serviço</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Armário Banheiro</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Armário Cozinha</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Armário Dorm.</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Campo de Futebol</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Churrasqueira</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Cozinha planejada</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Despensa</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Energia</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Escritório</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Esgoto</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Lavabo</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Lavanderia</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Mármore	</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Pavimentação</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Piscina</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Piso Frio</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Sacada Frente</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Salão de Festas</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Sauna</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>TV a Cabo</span></div>
                        <div class="item_unico"><i class="fa fa-check-circle-o"></i><span>Varanda</span></div>
                    </div>
                </div>
                <div class="semelhantes"></div>
                
            </div>
       </div>
              
    </div>
    
</div>