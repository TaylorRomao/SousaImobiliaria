<div class="content" id="contato">
    <h1 class="titulo_pagina">Contato</h1>
    <div class="contato">
        <div class="localizacao">
            <center><span class="titulo">© Union Softwares - Exemplo - Todos os direitos reservados.</span><br><br><span>Indaiatuba - SP</span><br><span>Rua Padre Bento Pacheco, 2973</span><br><span>Vila Aurora, CEP: 13.339-370</span><br><br>
                <a href="https://www.google.com.br/maps/place/Rua Padre Bento Pacheco,2973,Vila Aurora,Indaiatuba,SP/" target="_blank" style="color:#000;">Clique aqui e veja nossa localização.</a><br><br><span>(19) 3512-6900</span><br><span>(19) 3512-6900</span><br><span>(11) 97523-9223</span><br><br>
                <u><a href="mailto:contato@uso.com.br" style="color:#000;">contato@uso.com.br</a></u>
            </center>
        </div>
        <div class="formulario">
            <center><span>Caso você tenha dúvidas, críticas ou sugestões, preencha o formulário abaixo:</span></center><br>
            <div class="input-group">
                <div class="input-group-addon i fa fa-user"></div><input type="text" placeholder="*Nome" valor="nome" formulario="form-contato" obrigatorio="true" name="nome"
                    class="form-control"></div><br>
            <div class="input-group">
                <div class="input-group-addon i fa fa-at"></div><input type="text" placeholder="*E-Mail" valor="email" formulario="form-contato" obrigatorio="true"
                    name="email" class="form-control"></div><br>
            <div class="input-group">
                <div class="input-group-addon i fa fa-phone"></div><input type="text" placeholder="Telefone" valor="telefone" formulario="form-contato" name="telefone"
                    class="form-control"></div><br>
            <div class="input-group">
                <div class="input-group-addon i fa fa-phone"></div><input type="text" placeholder="Celular" valor="celular" formulario="form-contato" name="celular" class="form-control"></div><br>
            <div class="input-group">
                <div class="input-group-addon i fa fa-users">
                </div>
                <select valor="departamento" formulario="form-contato" name="departamento" class="form-control">
                    <option value="">Selecione o departamento</option>
                    <option value="contato@uso.com.br">SAC - Atendimento ao Cliente</option>
                    <option value="contato@uso.com.br">Venda</option>
                    <option value="contato@uso.com.br">Locação</option>
                    <option value="contato@uso.com.br">Administração de Imóveis</option>
                    <option value="contato@uso.com.br">Administração de Condomínios</option>
                    <option value="contato@uso.com.br">Ouvidoria</option>
                    <option value="contato@uso.com.br">Outros</option>
                </select>
            </div>
            <br>
            <textarea placeholder="Mensagem" rows="5" valor="mensagem" formulario="form-contato" name="mensagem" class="form-control"></textarea><br>
            <center>
            <div class="input-group">
            <div class="input-group-addon i fa fa-address-book">
            </div>
            <select valor="departamento" formulario="form-contato" name="departamento" class="form-control">
                <option value="">Resposta por</option>
                <option value="resposta-email">E-Mail</option>
                <option value="resposta-whatsapp">WhatsApp</option>
                <option value="resposta-telefone">Telefone</option>
                <option value="resposta-indiferente">Indiferente</option>                    
            </select>
            </div>    
            <br clear="all"><br clear="all"><span>Campos com (*) são obrigatórios</span></center>
            <br clear="all">
            <center><button onclick="clearForm('form-contato');" class="btn">Limpar</button><button id="btn_enviar" onclick="sendForm('form-contato', this);"
                    class="btn">Enviar</button></center>
        </div>
    </div><br clear="all"></div>