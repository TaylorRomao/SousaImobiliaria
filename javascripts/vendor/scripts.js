function escondeCorretorBarra() {
    $(".corretor_menos").hide(), $(".corretor_mais").show(), $(".corretor_texto").slideToggle()
}

function exibeCorretorBarra() {
    $(".corretor_menos").show(), $(".corretor_mais").hide(), $(".corretor_texto").slideToggle()
}

function escondeSmartBar() {
    $(".boxBarra .boxSeta1").hide(), $(".boxBarra .smartbar").hide(), $(".boxBarra .boxSeta2").show(), ajax({
        action: "escondeSmartBar",
        valor: "1"
    }, function (e) {})
}

function mostrarSmartBar() {
    $(".boxBarra .boxSeta2").hide(), $(".boxBarra .boxSeta1").show(), $(".boxBarra .smartbar").show(), ajax({
        action: "escondeSmartBar",
        valor: ""
    }, function (e) {})
}

function fecharFB() {
    $(".facebook").hide(), $(".facebook_frame").show(), $(".facebook_frame").html("<iframe src='https://www.univencrm.com.br/sites_login_facebook/?raiz=" + window.location.href + "&url=" + window.location.href + "' frameborder='0' style='width:150px; height:30px; float:right;' scrolling='no' ></iframe>"), ajax({
        action: "fecharFB"
    }, function (e) {})
}

function trocarOportunidades(e) {
    try {
        1 == e ? pagina_oportunidades++ : pagina_oportunidades--, $(".banner_oportunidades_prontos").each(function () {
            if ($(this).children("div").length > 1) {
                pagina_oportunidades == $(this).children("div").length && (pagina_oportunidades = 0), 0 > pagina_oportunidades && (pagina_oportunidades = $(this).children("div").length - 1);
                var e = 0;
                $(this).children("div").each(function () {
                    e == pagina_oportunidades ? $(this).show() : $(this).hide(), e++
                })
            }
        })
    } catch (a) {}
}

function selecionar(e, a) {
    if ("finalidade" == e) {
        mobile || $("#" + a + "tipo").multiselect("destroy"), $("#" + a + "tipo").html("");
        try {
            $("#tipo").prepend('<option value="" disabled="true" selected="true">Tipos</option>')
        } catch (t) {}
        try {
            $("#tipo").append('<option value="">Todos</option>')
        } catch (t) {}
        if ($.each(tipos(localizacoes, $("#" + a + "finalidade").val()), function (e, t) {
                $("#" + a + "tipo").append('<option value="' + t + '">' + t + "</option>")
            }), mobile || $("#" + a + "tipo").multiselect({
                maxHeight: 250,
                enableFiltering: !0,
                enableCaseInsensitiveFiltering: !0,
                buttonWidth: "100%",
                filterPlaceholder: "Pesquisar",
                nonSelectedText: "Tipo",
                allSelectedText: "Tipos"
            }).multiselect("refresh"), mobile || $("#" + a + "condominios").multiselect("destroy"), $("#" + a + "condominios").html(""), mobile) {
            try {
                $("#condominios").prepend('<option value="todos" disabled="true" selected="true">Condomínios</option>')
            } catch (t) {}
            try {
                $("#" + a + "condominios").append('<option value="todos">Todos</option>')
            } catch (t) {}
        } else try {
            $("#" + a + "condominios").append('<option value="todos">Todos</option>')
        } catch (t) {}
        $.each(condominios(localizacoes, $("#" + a + "finalidade").val(), $("#" + a + "tipo").val(), $("#" + a + "cidade").val()), function (e, t) {
            0 == $("#" + a + "condominios option[value='" + t + "']").length && 0 == $("#" + a + "condominios option[value='" + t.removeDiacritics() + "']").length && $("#" + a + "condominios").append('<option value="' + t + '">' + t + "</option>")
        }), mobile || $("#" + a + "condominios").multiselect({
            maxHeight: 250,
            enableFiltering: !0,
            enableCaseInsensitiveFiltering: !0,
            buttonWidth: "100%",
            filterPlaceholder: "Pesquisar",
            nonSelectedText: "Condomínio",
            allSelectedText: "Condomínios"
        }).multiselect("refresh"), mobile || $("#" + a + "cidade").multiselect("destroy"), $("#" + a + "cidade").html("");
        try {
            $("#cidade").prepend('<option value="" disabled="true" selected="true">Cidades</option>')
        } catch (t) {}
        try {
            $("#cidade").append('<option value="">Todos</option>')
        } catch (t) {}
        if ($.each(cidades(localizacoes, $("#" + a + "finalidade").val(), $("#" + a + "tipo").val(), $("#" + a + "uf").val()), function (e, t) {
                0 == $("#" + a + "cidade option[value='" + t + "']").length && $("#" + a + "cidade").append('<option value="' + t + '">' + t + "</option>")
            }), mobile || $("#" + a + "cidade").multiselect({
                maxHeight: 250,
                enableFiltering: !0,
                enableCaseInsensitiveFiltering: !0,
                buttonWidth: "100%",
                filterPlaceholder: "Pesquisar",
                nonSelectedText: "Cidade",
                allSelectedText: "Cidades"
            }).multiselect("refresh"), mobile || $("#" + a + "bairro").multiselect("destroy"), $("#" + a + "bairro").html(""), mobile) try {
            $("#bairro").prepend('<option value="" disabled="true" selected="true">Bairros</option>')
        } catch (t) {} else try {
            $("#bairro").prepend('<option value="" disabled="true">Bairros</option>')
        } catch (t) {}
        try {
            $("#bairro").append('<option value="">Todos</option>')
        } catch (t) {}
        $.each(bairros(localizacoes, $("#" + a + "finalidade").val(), $("#" + a + "tipo").val(), $("#" + a + "uf").val(), $("#" + a + "cidade").val()), function (e, t) {
            0 == $("#" + a + "bairro option[value='" + t + "']").length && 0 == $("#" + a + "bairro option[value='" + t.removeDiacritics() + "']").length && $("#" + a + "bairro").append('<option value="' + t + '">' + t + "</option>")
        }), mobile || $("#" + a + "bairro").multiselect({
            maxHeight: 250,
            enableFiltering: !0,
            enableCaseInsensitiveFiltering: !0,
            numberDisplayed: 0,
            buttonWidth: "100%",
            nSelectedText: "bairro(s)",
            filterPlaceholder: "Pesquisar",
            nonSelectedText: "Bairro",
            allSelectedText: "Bairros"
        }), "comprar" == $("#" + a + "finalidade").val() && (mobile || $("#" + a + "valor").multiselect("destroy"), $("#" + a + "valor").html(""), $.each(faixa_valor.venda, function (e, t) {
            $("#" + a + "valor").append('<option value="' + t.valor + '">' + t.label + "</option>")
        }), mobile || $("#" + a + "valor").multiselect({
            maxHeight: 250,
            buttonWidth: "100%",
            filterPlaceholder: "Pesquisar",
            nonSelectedText: "Valor"
        })), "alugar" == $("#" + a + "finalidade").val() && (mobile || $("#" + a + "valor").multiselect("destroy"), $("#" + a + "valor").html(""), $.each(faixa_valor.locacao, function (e, t) {
            $("#" + a + "valor").append('<option value="' + t.valor + '">' + t.label + "</option>")
        }), mobile || $("#" + a + "valor").multiselect({
            maxHeight: 250,
            buttonWidth: "100%",
            filterPlaceholder: "Pesquisar",
            nonSelectedText: "Valor"
        })), "estudante" == $("#" + a + "finalidade").val() && (mobile || $("#" + a + "valor").multiselect("destroy"), $("#" + a + "valor").html(""), $.each(faixa_valor.locacao, function (e, t) {
            $("#" + a + "valor").append('<option value="' + t.valor + '">' + t.label + "</option>")
        }), mobile || $("#" + a + "valor").multiselect({
            maxHeight: 250,
            buttonWidth: "100%",
            filterPlaceholder: "Pesquisar",
            nonSelectedText: "Valor"
        })), "temporada" == $("#" + a + "finalidade").val() && (mobile || $("#" + a + "valor").multiselect("destroy"), $("#" + a + "valor").html(""), $.each(faixa_valor.locacao, function (e, t) {
            $("#" + a + "valor").append('<option value="' + t.valor + '">' + t.label + "</option>")
        }), mobile || $("#" + a + "valor").multiselect({
            maxHeight: 250,
            buttonWidth: "100%",
            filterPlaceholder: "Pesquisar",
            nonSelectedText: "Valor"
        })), "permuta" == $("#" + a + "finalidade").val() && (mobile || $("#" + a + "valor").multiselect("destroy"), $("#" + a + "valor").html(""), $.each(faixa_valor.locacao, function (e, t) {
            $("#" + a + "valor").append('<option value="' + t.valor + '">' + t.label + "</option>")
        }), mobile || $("#" + a + "valor").multiselect({
            maxHeight: 250,
            buttonWidth: "100%",
            filterPlaceholder: "Pesquisar",
            nonSelectedText: "Valor"
        })), "comprar,alugar" == $("#" + a + "finalidade").val() && (mobile || $("#" + a + "valor").multiselect("destroy"), $("#" + a + "valor").html(""), $.each(faixa_valor.venda_locacao, function (e, t) {
            $("#" + a + "valor").append('<option value="' + t.valor + '">' + t.label + "</option>")
        }), mobile || $("#" + a + "valor").multiselect({
            maxHeight: 250,
            buttonWidth: "100%",
            filterPlaceholder: "Pesquisar",
            nonSelectedText: "Valor"
        }))
    }
    if ("tipo" == e) {
        mobile || $("#" + a + "subtipo").multiselect("destroy"), $("#" + a + "subtipo").html("");
        try {
            $("#subtipo").prepend('<option value="">Todos</option>')
        } catch (t) {}
        $.each(subtipos(localizacoes, $("#" + a + "tipo").val()), function (e, t) {
            $("#" + a + "subtipo").append('<option value="' + t + '">' + t + "</option>")
        }), mobile || $("#" + a + "subtipo").multiselect({
            maxHeight: 250,
            enableFiltering: !0,
            enableCaseInsensitiveFiltering: !0,
            buttonWidth: "100%",
            filterPlaceholder: "Pesquisar",
            nonSelectedText: "Subtipo",
            allSelectedText: "Subtipos"
        }).multiselect("refresh"), mobile || $("#" + a + "uf").multiselect("destroy"), $("#" + a + "uf").html(""), $.each(uf(localizacoes, $("#" + a + "tipo").val()), function (e, t) {
            $("#" + a + "uf").append('<option value="' + t + '">' + t + "</option>")
        }), mobile || $("#" + a + "uf").multiselect({
            maxHeight: 250,
            buttonWidth: "100%",
            filterPlaceholder: "Pesquisar",
            nonSelectedText: "UF"
        }).multiselect("refresh"), mobile || $("#" + a + "cidade").multiselect("destroy"), $("#" + a + "cidade").html("");
        try {
            $("#cidade").prepend('<option value="" disabled="true" selected="true">Cidades</option>')
        } catch (t) {}
        try {
            $("#cidade").append('<option value="">Todos</option>')
        } catch (t) {}
        if ($.each(cidades(localizacoes, $("#" + a + "finalidade").val(), $("#" + a + "tipo").val(), $("#" + a + "uf").val()), function (e, t) {
                0 == $("#" + a + "cidade option[value='" + t + "']").length && $("#" + a + "cidade").append('<option value="' + t + '">' + t + "</option>")
            }), mobile || $("#" + a + "cidade").multiselect({
                maxHeight: 250,
                enableFiltering: !0,
                enableCaseInsensitiveFiltering: !0,
                buttonWidth: "100%",
                filterPlaceholder: "Pesquisar",
                nonSelectedText: "Cidade",
                allSelectedText: "Cidades"
            }).multiselect("refresh"), mobile || $("#" + a + "bairro").multiselect("destroy"), $("#" + a + "bairro").html(""), mobile) try {
            $("#bairro").prepend('<option value="" disabled="true" selected="true">Bairros</option>')
        } catch (t) {} else try {
            $("#bairro").prepend('<option value="" disabled="true">Bairros</option>')
        } catch (t) {}
        try {
            $("#bairro").append('<option value="">Todos</option>')
        } catch (t) {}
        if ($.each(bairros(localizacoes, $("#" + a + "finalidade").val(), $("#" + a + "tipo").val(), $("#" + a + "uf").val(), $("#" + a + "cidade").val()), function (e, t) {
                0 == $("#" + a + "bairro option[value='" + t + "']").length && 0 == $("#" + a + "bairro option[value='" + t.removeDiacritics() + "']").length && $("#" + a + "bairro").append('<option value="' + t + '">' + t + "</option>")
            }), mobile || $("#" + a + "bairro").multiselect({
                maxHeight: 250,
                enableFiltering: !0,
                enableCaseInsensitiveFiltering: !0,
                numberDisplayed: 0,
                buttonWidth: "100%",
                nSelectedText: "bairro(s)",
                filterPlaceholder: "Pesquisar",
                nonSelectedText: "Bairro",
                allSelectedText: "Bairros"
            }), mobile || $("#" + a + "condominios").multiselect("destroy"), $("#" + a + "condominios").html(""), mobile) {
            try {
                $("#condominios").prepend('<option value="todos" disabled="true" selected="true">Condomínios</option>')
            } catch (t) {}
            try {
                $("#" + a + "condominios").append('<option value="todos">Todos</option>')
            } catch (t) {}
        } else try {
            $("#" + a + "condominios").append('<option value="todos">Todos</option>')
        } catch (t) {}
        $.each(condominios(localizacoes, $("#" + a + "finalidade").val(), $("#" + a + "tipo").val(), $("#" + a + "cidade").val()), function (e, t) {
            0 == $("#" + a + "condominios option[value='" + t + "']").length && 0 == $("#" + a + "condominios option[value='" + t.removeDiacritics() + "']").length && $("#" + a + "condominios").append('<option value="' + t + '">' + t + "</option>")
        }), mobile || $("#" + a + "condominios").multiselect({
            maxHeight: 250,
            enableFiltering: !0,
            enableCaseInsensitiveFiltering: !0,
            buttonWidth: "100%",
            filterPlaceholder: "Pesquisar",
            nonSelectedText: "Condomínio",
            allSelectedText: "Condomínios"
        }).multiselect("refresh")
    }
    if ("uf" == e) {
        mobile || $("#" + a + "cidade").multiselect("destroy"), $("#" + a + "cidade").html("");
        try {
            $("#" + a + "cidade").prepend('<option value="" disabled="true" selected="true">Cidades</option>')
        } catch (t) {}
        try {
            $("#" + a + "cidade").append('<option value="">Todos</option>')
        } catch (t) {}
        if ($.each(cidades(localizacoes, $("#" + a + "finalidade").val(), $("#" + a + "tipo").val(), $("#" + a + "uf").val()), function (e, t) {
                0 == $("#" + a + "cidade option[value='" + t + "']").length && $("#" + a + "cidade").append('<option value="' + t + '">' + t + "</option>")
            }), mobile || $("#" + a + "cidade").multiselect({
                maxHeight: 250,
                enableFiltering: !0,
                enableCaseInsensitiveFiltering: !0,
                buttonWidth: "100%",
                filterPlaceholder: "Pesquisar",
                nonSelectedText: "Cidade",
                allSelectedText: "Cidades"
            }).multiselect("refresh"), mobile || $("#" + a + "bairro").multiselect("destroy"), $("#" + a + "bairro").html(""), mobile) try {
            $("#bairro").prepend('<option value="" disabled="true" selected="true">Bairros</option>')
        } catch (t) {} else try {
            $("#bairro").prepend('<option value="" disabled="true">Bairros</option>')
        } catch (t) {}
        try {
            $("#bairro").append('<option value="">Todos</option>')
        } catch (t) {}
        if ($.each(bairros(localizacoes, $("#" + a + "finalidade").val(), $("#" + a + "tipo").val(), $("#" + a + "uf").val(), $("#" + a + "cidade").val()), function (e, t) {
                0 == $("#" + a + "bairro option[value='" + t + "']").length && 0 == $("#" + a + "bairro option[value='" + t.removeDiacritics() + "']").length && $("#" + a + "bairro").append('<option value="' + t + '">' + t + "</option>")
            }), mobile || $("#" + a + "bairro").multiselect({
                maxHeight: 250,
                enableFiltering: !0,
                enableCaseInsensitiveFiltering: !0,
                numberDisplayed: 0,
                buttonWidth: "100%",
                nSelectedText: "bairro(s)",
                filterPlaceholder: "Pesquisar",
                nonSelectedText: "Bairro",
                allSelectedText: "Bairros"
            }), mobile || $("#" + a + "condominios").multiselect("destroy"), $("#" + a + "condominios").html(""), mobile) {
            try {
                $("#condominios").prepend('<option value="todos" disabled="true" selected="true">Condomínios</option>')
            } catch (t) {}
            try {
                $("#" + a + "condominios").append('<option value="todos">Todos</option>')
            } catch (t) {}
        } else try {
            $("#" + a + "condominios").append('<option value="todos">Todos</option>')
        } catch (t) {}
        $.each(condominios(localizacoes, $("#" + a + "finalidade").val(), $("#" + a + "tipo").val(), $("#" + a + "cidade").val()), function (e, t) {
            0 == $("#" + a + "condominios option[value='" + t + "']").length && 0 == $("#" + a + "condominios option[value='" + t.removeDiacritics() + "']").length && $("#" + a + "condominios").append('<option value="' + t + '">' + t + "</option>")
        }), mobile || $("#" + a + "condominios").multiselect({
            maxHeight: 250,
            enableFiltering: !0,
            enableCaseInsensitiveFiltering: !0,
            buttonWidth: "100%",
            filterPlaceholder: "Pesquisar",
            nonSelectedText: "Condomínio",
            allSelectedText: "Condomínios"
        }).multiselect("refresh")
    }
    if ("cidade" == e) {
        if (mobile || $("#" + a + "bairro").multiselect("destroy"), $("#" + a + "bairro").html(""), mobile) try {
            $("#bairro").prepend('<option value="" disabled="true" selected="true">Bairros</option>')
        } catch (t) {} else try {
            $("#bairro").prepend('<option value="" disabled="true">Bairros</option>')
        } catch (t) {}
        try {
            $("#bairro").append('<option value="">Todos</option>')
        } catch (t) {}
        if ($.each(bairros(localizacoes, $("#" + a + "finalidade").val(), $("#" + a + "tipo").val(), $("#" + a + "uf").val(), $("#" + a + "cidade").val()), function (e, t) {
                0 == $("#" + a + "bairro option[value='" + t + "']").length && 0 == $("#" + a + "bairro option[value='" + t.removeDiacritics() + "']").length && $("#" + a + "bairro").append('<option value="' + t + '">' + t + "</option>")
            }), mobile || $("#" + a + "bairro").multiselect({
                maxHeight: 250,
                enableFiltering: !0,
                enableCaseInsensitiveFiltering: !0,
                numberDisplayed: 0,
                buttonWidth: "100%",
                nSelectedText: "bairro(s)",
                filterPlaceholder: "Pesquisar",
                nonSelectedText: "Bairro",
                allSelectedText: "Bairros"
            }), mobile || $("#" + a + "condominios").multiselect("destroy"), $("#" + a + "condominios").html(""), mobile) {
            try {
                $("#condominios").prepend('<option value="todos" disabled="true" selected="true">Condomínios</option>')
            } catch (t) {}
            try {
                $("#" + a + "condominios").append('<option value="todos">Todos</option>')
            } catch (t) {}
        } else try {
            $("#" + a + "condominios").append('<option value="todos">Todos</option>')
        } catch (t) {}
        $.each(condominios(localizacoes, $("#" + a + "finalidade").val(), $("#" + a + "tipo").val(), $("#" + a + "cidade").val()), function (e, t) {
            0 == $("#" + a + "condominios option[value='" + t + "']").length && 0 == $("#" + a + "condominios option[value='" + t.removeDiacritics() + "']").length && $("#" + a + "condominios").append('<option value="' + t + '">' + t + "</option>")
        }), mobile || $("#" + a + "condominios").multiselect({
            maxHeight: 250,
            enableFiltering: !0,
            enableCaseInsensitiveFiltering: !0,
            buttonWidth: "100%",
            filterPlaceholder: "Pesquisar",
            nonSelectedText: "Condomínio",
            allSelectedText: "Condomínios"
        }).multiselect("refresh")
    }
}

function tipos(e, a) {
    var t = [],
        o = 0;
    return $.each(e, function () {
        e[o]._id.inf_tipo && -1 === $.inArray(e[o]._id.inf_tipo.toUpperCase().removeDiacritics(), t) && -1 === $.inArray(e[o]._id.inf_tipo.toUpperCase(), t) && ("comprar" == a && 1 == e[o]._id.inf_venda && t.push(e[o]._id.inf_tipo.toUpperCase()), "alugar" == a && 1 == e[o]._id.inf_locacao && t.push(e[o]._id.inf_tipo.toUpperCase()), "estudante" == a && 1 == e[o]._id.inf_locacao_estu && t.push(e[o]._id.inf_tipo.toUpperCase()), "temporada" == a && 1 == e[o]._id.inf_temporada && t.push(e[o]._id.inf_tipo.toUpperCase()), "permuta" == a && 1 == e[o]._id.inf_permuta && t.push(e[o]._id.inf_tipo.toUpperCase()), ("" == a || "comprar,alugar" == a || null == a) && t.push(e[o]._id.inf_tipo.toUpperCase())), o++
    }), t.sort()
}

function subtipos(e, a) {
    var t = [],
        o = 0;
    return $.each(e, function () {
        e[o]._id.inf_subtipo && -1 === $.inArray(e[o]._id.inf_subtipo.toUpperCase().removeDiacritics(), t) && (e[o]._id.inf_tipo.toUpperCase() == a.toUpperCase() || "" == a) && t.push(e[o]._id.inf_subtipo.toUpperCase()), o++
    }), t.sort()
}

function uf(e, a) {
    var t = [],
        o = 0;
    return void 0 == a && (a = ""), $.each(e, function () {
        e[o]._id.inf_uf && -1 === $.inArray(e[o]._id.inf_uf.toUpperCase().removeDiacritics(), t) && (e[o]._id.inf_tipo.toUpperCase() == a.toUpperCase() || "" == a) && t.push(e[o]._id.inf_uf.toUpperCase()), o++
    }), t.sort()
}

function cidades(e, a, t, o) {
    var i = [],
        r = 0;
    return void 0 == t && (t = void 0 != $("#filtro-tipo").val() ? $("#filtro-tipo").val() : ""), void 0 == o && (o = void 0 != $("#filtro-uf").val() ? $("#filtro-uf").val() : ""), "" == o ? $.each(e, function () {
        var o = !1;
        "comprar" == a && 1 == e[r]._id.inf_venda && (o = !0), "alugar" == a && 1 == e[r]._id.inf_locacao && (o = !0), "estudante" == a && 1 == e[r]._id.inf_locacao_estu && (o = !0), "temporada" == a && 1 == e[r]._id.inf_temporada && (o = !0), "permuta" == a && 1 == e[r]._id.inf_permuta && (o = !0), "" == a && (o = !0), e[r]._id.inf_cidade && -1 === $.inArray(e[r]._id.inf_cidade.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics() + " - " + e[r]._id.inf_uf.toUpperCase().replace(/\s+/g, " ").removeDiacritics(), i) && (e[r]._id.inf_tipo.toUpperCase().removeDiacritics() == t.toUpperCase().removeDiacritics() && o || "" == t && o) && i.push(e[r]._id.inf_cidade.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics() + " - " + e[r]._id.inf_uf.toUpperCase().replace(/\s+/g, " ")), r++
    }) : $.each(e, function () {
        var l = !1;
        "comprar" == a && 1 == e[r]._id.inf_venda && (l = !0), "alugar" == a && 1 == e[r]._id.inf_locacao && (l = !0), "estudante" == a && 1 == e[r]._id.inf_locacao_estu && (l = !0), "temporada" == a && 1 == e[r]._id.inf_temporada && (l = !0), "permuta" == a && 1 == e[r]._id.inf_permuta && (l = !0), "" == a && (l = !0), e[r]._id.inf_cidade && -1 === $.inArray(e[r]._id.inf_cidade.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics() + " - " + e[r]._id.inf_uf.toUpperCase().replace(/\s+/g, " ").removeDiacritics(), i) && (e[r]._id.inf_tipo.toUpperCase().removeDiacritics() == t.toUpperCase().removeDiacritics() && e[r]._id.inf_uf.toUpperCase() == o.toUpperCase() && l || "" == t && e[r]._id.inf_uf.toUpperCase() == o.toUpperCase() && l) && i.push(e[r]._id.inf_cidade.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics() + " - " + e[r]._id.inf_uf.toUpperCase().replace(/\s+/g, " ")), r++
    }), i.sort()
}

function cidadesAutocomplete(e) {
    var a = 0,
        t = [];
    return $.each(e, function () {
        -1 === $.inArray(e[a]._id.inf_cidade.toUpperCase().replace(/\s+/g, " ").replace("'", "") + " (" + e[a]._id.inf_uf.toUpperCase().replace(/\s+/g, " ").replace("'", "") + ")", t) && t.push(e[a]._id.inf_cidade.toUpperCase().replace(/\s+/g, " ").replace("'", "") + " (" + e[a]._id.inf_uf.toUpperCase().replace(/\s+/g, " ").replace("'", "") + ")"), a++
    }), t.sort()
}

function bairros(e, a, t, o, i) {
    void 0 == i && (i = void 0 != $("#filtro-cidade").val() ? $("#filtro-cidade").val() : ""), "" != i && (i = i.split(" - ")), void 0 == t && (t = void 0 != $("#filtro-tipo").val() ? $("#filtro-tipo").val() : ""), void 0 == o && (o = void 0 != $("#filtro-uf").val() ? $("#filtro-uf").val() : "");
    var r = [],
        l = 0;
    return $.each(e, function () {
        var n = !1;
        "comprar" == a && 1 == e[l]._id.inf_venda && (n = !0), "alugar" == a && 1 == e[l]._id.inf_locacao && (n = !0), "estudante" == a && 1 == e[l]._id.inf_locacao_estu && (n = !0), "temporada" == a && 1 == e[l]._id.inf_temporada && (n = !0), "permuta" == a && 1 == e[l]._id.inf_permuta && (n = !0), "" == a && (n = !0), e[l]._id.inf_bairro && -1 === $.inArray(e[l]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics(), r) && ("" != o ? "" != i ? "" != t ? e[l]._id.inf_uf.toUpperCase().removeDiacritics() == o.toUpperCase().removeDiacritics() && e[l]._id.inf_cidade.toUpperCase().removeDiacritics() == i[0].toUpperCase().removeDiacritics() && e[l]._id.inf_tipo.toUpperCase().removeDiacritics() == t.toUpperCase().removeDiacritics() && n && r.push(e[l]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : e[l]._id.inf_uf.toUpperCase().removeDiacritics() == o.toUpperCase().removeDiacritics() && e[l]._id.inf_cidade.toUpperCase().removeDiacritics() == i[0].toUpperCase().removeDiacritics() && n && r.push(e[l]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : "" != t ? e[l]._id.inf_uf.toUpperCase().removeDiacritics() == o.toUpperCase().removeDiacritics() && e[l]._id.inf_tipo.toUpperCase().removeDiacritics() == t.toUpperCase().removeDiacritics() && n && r.push(e[l]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : e[l]._id.inf_uf.toUpperCase().removeDiacritics() == o.toUpperCase().removeDiacritics() && n && r.push(e[l]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : "" != i ? "" != t ? e[l]._id.inf_cidade.toUpperCase().removeDiacritics() == i[0].toUpperCase().removeDiacritics() && e[l]._id.inf_tipo.toUpperCase().removeDiacritics() == t.toUpperCase().removeDiacritics() && n && r.push(e[l]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : e[l]._id.inf_cidade.toUpperCase().removeDiacritics() == i[0].toUpperCase().removeDiacritics() && n && r.push(e[l]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : "" != t ? e[l]._id.inf_tipo.toUpperCase().removeDiacritics() == t.toUpperCase().removeDiacritics() && n && r.push(e[l]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : n && r.push(e[l]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", ""))), l++
    }), r.sort()
}

function bairrosAutocomplete(e) {
    var a = 0,
        t = [];
    return $.each(e, function () {
        -1 === $.inArray(e[a]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "") + " (" + e[a]._id.inf_cidade.toUpperCase().replace(/\s+/g, " ").replace("'", "") + " - " + e[a]._id.inf_uf.toUpperCase().replace(/\s+/g, " ").replace("'", "") + ")", t) && t.push(e[a]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "") + " (" + e[a]._id.inf_cidade.toUpperCase().replace(/\s+/g, " ").replace("'", "") + " - " + e[a]._id.inf_uf.toUpperCase().replace(/\s+/g, " ").replace("'", "") + ")"), a++
    }), t.sort()
}

function condominios(e, a, t, o) {
    void 0 == o && (o = void 0 != $("#filtro-cidade").val() ? $("#filtro-cidade").val() : ""), "" != o && (o = o.split(" - ")), void 0 == t && (t = void 0 != $("#filtro-tipo").val() ? $("#filtro-tipo").val() : "");
    var i = [],
        r = 0;
    return $.each(e, function () {
        var l = !1;
        "comprar" == a && 1 == e[r]._id.inf_venda && (l = !0), "alugar" == a && 1 == e[r]._id.inf_locacao && (l = !0), "estudante" == a && 1 == e[r]._id.inf_locacao_estu && (l = !0), "temporada" == a && 1 == e[r]._id.inf_temporada && (l = !0), "permuta" == a && 1 == e[r]._id.inf_permuta && (l = !0), "" == a && (l = !0), e[r]._id.inf_condonome && -1 === $.inArray(e[r]._id.inf_condonome.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics(), i) && ("" != o ? "" != t ? e[r]._id.inf_cidade.toUpperCase().removeDiacritics() == o[0].toUpperCase().removeDiacritics() && e[r]._id.inf_tipo.toUpperCase().removeDiacritics() == t.toUpperCase().removeDiacritics() && l && i.push(e[r]._id.inf_condonome.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : e[r]._id.inf_cidade.toUpperCase().removeDiacritics() == o[0].toUpperCase().removeDiacritics() && l && i.push(e[r]._id.inf_condonome.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : "" != t ? e[r]._id.inf_tipo.toUpperCase().removeDiacritics() == t.toUpperCase().removeDiacritics() && l && i.push(e[r]._id.inf_condonome.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : l && i.push(e[r]._id.inf_condonome.toUpperCase().replace(/\s+/g, " ").replace("'", ""))), r++
    }), i.sort()
}

function estado_obra(e, a, t) {
    void 0 == t && (t = void 0 != $("#filtro-cidade").val() ? $("#filtro-cidade").val() : ""), "" != t && (t = t.split(" - ")), void 0 == a && (a = void 0 != $("#filtro-tipo").val() ? $("#filtro-tipo").val() : "");
    var o = [],
        i = 0;
    return $.each(e, function () {
        e[i]._id.inf_estado && -1 === $.inArray(e[i]._id.inf_estado.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics(), o) && ("" != t ? "" != a ? e[i]._id.inf_cidade.toUpperCase().removeDiacritics() == t[0].toUpperCase().removeDiacritics() && e[i]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && o.push(e[i]._id.inf_estado.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : e[i]._id.inf_cidade.toUpperCase().removeDiacritics() == t[0].toUpperCase().removeDiacritics() && o.push(e[i]._id.inf_estado.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : "" != a ? e[i]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && o.push(e[i]._id.inf_estado.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : o.push(e[i]._id.inf_estado.toUpperCase().replace(/\s+/g, " ").replace("'", ""))), i++
    }), o.sort()
}

function construtora(e, a, t) {
    void 0 == t && (t = void 0 != $("#filtro-cidade").val() ? $("#filtro-cidade").val() : ""), "" != t && (t = t.split(" - ")), void 0 == a && (a = void 0 != $("#filtro-tipo").val() ? $("#filtro-tipo").val() : "");
    var o = [],
        i = 0;
    return $.each(e, function () {
        e[i]._id.inf_construtora && -1 === $.inArray(e[i]._id.inf_construtora.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics(), o) && ("" != t ? "" != a ? e[i]._id.inf_cidade.toUpperCase().removeDiacritics() == t[0].toUpperCase().removeDiacritics() && e[i]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && o.push(e[i]._id.inf_construtora.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : e[i]._id.inf_cidade.toUpperCase().removeDiacritics() == t[0].toUpperCase().removeDiacritics() && o.push(e[i]._id.inf_construtora.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : "" != a ? e[i]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && o.push(e[i]._id.inf_construtora.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : o.push(e[i]._id.inf_construtora.toUpperCase().replace(/\s+/g, " ").replace("'", ""))), i++
    }), o.sort()
}

function quadra(e, a, t, o) {
    void 0 == o && (o = void 0 != $("#filtro-cidade").val() ? $("#filtro-cidade").val() : ""), "" != o && (o = o.split(" - ")), void 0 == t && (t = void 0 != $("#filtro-tipo").val() ? $("#filtro-tipo").val() : "");
    var i = [],
        r = 0;
    return $.each(e, function () {
        var l = !1;
        "comprar" == a && 1 == e[r]._id.inf_venda && (l = !0), "alugar" == a && 1 == e[r]._id.inf_locacao && (l = !0), "estudante" == a && 1 == e[r]._id.inf_locacao_estu && (l = !0), "temporada" == a && 1 == e[r]._id.inf_temporada && (l = !0), "permuta" == a && 1 == e[r]._id.inf_permuta && (l = !0), "" == a && (l = !0), e[r]._id.inf_quadra && -1 === $.inArray(e[r]._id.inf_quadra.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics(), i) && ("" != o ? "" != t ? e[r]._id.inf_cidade.toUpperCase().removeDiacritics() == o[0].toUpperCase().removeDiacritics() && e[r]._id.inf_tipo.toUpperCase().removeDiacritics() == t.toUpperCase().removeDiacritics() && l && i.push(e[r]._id.inf_quadra.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : e[r]._id.inf_cidade.toUpperCase().removeDiacritics() == o[0].toUpperCase().removeDiacritics() && l && i.push(e[r]._id.inf_quadra.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : "" != t ? e[r]._id.inf_tipo.toUpperCase().removeDiacritics() == t.toUpperCase().removeDiacritics() && l && i.push(e[r]._id.inf_quadra.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : l && i.push(e[r]._id.inf_quadra.toUpperCase().replace(/\s+/g, " ").replace("'", ""))), r++
    }), i.length > 0 && $("#inf_quadra").css({
        display: "block"
    }), i.sort()
}

function pesquisar(e) {
    var a = "",
        t = "",
        o = "",
        i = "",
        r = "",
        l = "",
        n = "",
        c = "",
        s = "",
        d = "",
        p = "",
        u = "",
        h = "",
        m = "",
        f = "",
        v = "",
        g = "",
        b = "",
        _ = "",
        x = "",
        y = "",
        C = "",
        x = "",
        y = "",
        w = "",
        S = "",
        F = "",
        T = "";
    if (e) {
        try {
            a = $("#filtro-finalidade").val()
        } catch (k) {}
        try {
            t = $("#filtro-tipo").val()
        } catch (k) {}
        try {
            o = $("#filtro-subtipo").val()
        } catch (k) {}
        try {
            i = $("#filtro-uf").val()
        } catch (k) {}
        try {
            r = $("#filtro-cidade").val()
        } catch (k) {}
        try {
            n = $("#filtro-bairro").val()
        } catch (k) {}
        try {
            s = $("#filtro-dormitorios").val()
        } catch (k) {}
        try {
            d = $("#filtro-banheiros").val()
        } catch (k) {}
        try {
            p = $("#filtro-suites").val()
        } catch (k) {}
        try {
            vagas = $("#filtro-vagas").val()
        } catch (k) {}
        try {
            u = $("#filtro-salas").val()
        } catch (k) {}
        try {
            h = $("#filtro-condominio").val()
        } catch (k) {}
        try {
            m = $("#filtro-condominios").val()
        } catch (k) {}
        try {
            g = $("#filtro-quadra").val()
        } catch (k) {}
        try {
            b = $("#filtro-padrao").val()
        } catch (k) {}
        try {
            _ = $("#filtro-lote").val()
        } catch (k) {}
        try {
            x = $("#filtro-valor").val()
        } catch (k) {}
        try {
            y = $("#filtro-area").val()
        } catch (k) {}
        try {
            S = $("#ordem-campo").val()
        } catch (k) {}
        try {
            F = $("#ordem-resultado").val()
        } catch (k) {}
        try {
            T = $("#total-imoveis").val()
        } catch (k) {}
        try {
            w = $("#filtro-referencia").val()
        } catch (k) {}
    } else {
        try {
            a = $("#finalidade").val()
        } catch (k) {}
        try {
            t = $("#tipo").val()
        } catch (k) {}
        try {
            o = $("#subtipo").val()
        } catch (k) {}
        try {
            i = $("#uf").val()
        } catch (k) {}
        try {
            r = $("#cidade").val()
        } catch (k) {}
        try {
            l = $("#cidadeSugestao").val()
        } catch (k) {}
        try {
            n = $("#bairro").val()
        } catch (k) {}
        try {
            c = $("#bairroSugestao").val()
        } catch (k) {}
        try {
            s = $("#dormitorios").val()
        } catch (k) {}
        try {
            d = $("#banheiros").val()
        } catch (k) {}
        try {
            p = $("#suites").val()
        } catch (k) {}
        try {
            vagas = $("#vagas").val()
        } catch (k) {}
        try {
            h = $("#condominio").val()
        } catch (k) {}
        try {
            m = $("#condominios").val()
        } catch (k) {}
        try {
            f = $("#estado_obra").val()
        } catch (k) {}
        try {
            v = $("#construtora").val()
        } catch (k) {}
        try {
            g = $("#quadra").val()
        } catch (k) {}
        try {
            b = $("#padrao").val()
        } catch (k) {}
        try {
            C = $("#financiamento").val()
        } catch (k) {}
        try {
            _ = $("#lote").val()
        } catch (k) {}
        try {
            x = $("#valor").val()
        } catch (k) {}
        try {
            y = $("#area").val()
        } catch (k) {}
        try {
            w = $("#referencia").val()
        } catch (k) {}
    }
    null == n && (n = "");
    try {
        a = a.toString().toLowerCase()
    } catch (k) {}
    try {
        t = t.toString().toLowerCase()
    } catch (k) {}
    try {
        o = o.toString().toLowerCase()
    } catch (k) {}
    try {
        i = i.toString().toLowerCase()
    } catch (k) {}
    try {
        r = r.toString().toLowerCase().split(" - ")
    } catch (k) {}
    try {
        l = l.toString().toLowerCase().split(" - ")
    } catch (k) {}
    try {
        n = n.toString().toLowerCase()
    } catch (k) {}
    try {
        c = c.toString().toLowerCase()
    } catch (k) {}
    try {
        s = s.toString().toLowerCase()
    } catch (k) {}
    try {
        d = d.toString().toLowerCase()
    } catch (k) {}
    try {
        p = p.toString().toLowerCase()
    } catch (k) {}
    try {
        u = u.toString().toLowerCase()
    } catch (k) {}
    try {
        h = h.toString().toLowerCase()
    } catch (k) {}
    try {
        m = m.toString().toLowerCase()
    } catch (k) {}
    try {
        f = f.toString().toLowerCase()
    } catch (k) {}
    try {
        v = v.toString().toLowerCase()
    } catch (k) {}
    try {
        g = g.toString().toLowerCase()
    } catch (k) {}
    try {
        b = b.toString().toLowerCase()
    } catch (k) {}
    try {
        C = C.toString().toLowerCase()
    } catch (k) {}
    try {
        _ = _.toString().toLowerCase()
    } catch (k) {}
    try {
        x = x.toString().toLowerCase()
    } catch (k) {}
    try {
        y = y.toString().toLowerCase()
    } catch (k) {}
    try {
        w = w.toString()
    } catch (k) {}
    try {
        S = S.toString().toLowerCase()
    } catch (k) {}
    try {
        F = F.toString().toLowerCase()
    } catch (k) {}
    try {
        T = T.toString().toLowerCase()
    } catch (k) {}
    try {
        a = a.split(",").join("-ou-")
    } catch (k) {}
    var D = window.location.toString().split("https://").join("").split("http://").join("").split("?");
    if ("" != w && void 0 != w) "pagina=facebook" == D[1] ? window.location = "/imoveis/referencia-" + w.trim() + "?pagina=facebook" : window.location = "/imoveis/referencia-" + w.trim();
    else {
        ("" == a || void 0 == a) && (a = "imoveis");
        var P = "/" + a;
        "" != i && void 0 != i && (P += "/" + i.replace(/\s+/g, " ").split("/").join(" ").split(" ").join("-")), void 0 != r && "" != r[0] && void 0 != r[0] && (P += "/" + r[1] + "/" + r[0].replace(/\s+/g, " ").split("/").join(" ").split(" ").join("-").split(",").join("_")), void 0 != l && "" != l[0] && void 0 != l[0] && (P += "/" + l[1] + "/" + l[0].replace(/\s+/g, " ").split("/").join(" ").split(" ").join("-").split(",").join("_")), "" != n && void 0 != n && (P += "/" + n.replace(/\s+/g, " ").split("/").join(" ").split(" ").join("-").split(",").join("_")), "" != c && void 0 != c && (P += "/" + c.replace(/\s+/g, " ").split("/").join(" ").split(" ").join("-").split(",").join("_")), "" != t && void 0 != t && (P += "/" + t.replace(/\s+/g, " ").split("/").join(" ").split(" ").join("-")), "" != o && void 0 != o && (P += "/" + o.replace(/\s+/g, " ").split("/").join(" ").split(" ").join("-")), "" != s && void 0 != s && (P += "/dormitorios-" + s.split("/").join(" ").split(" ").join("-")), "" != d && void 0 != d && (P += "/banheiros-" + d.split("/").join(" ").split(" ").join("-")), "" != p && void 0 != p && (P += "/suites-" + p.split("/").join(" ").split(" ").join("-")), "" != vagas && void 0 != vagas && (P += "/vagas-" + vagas.split("/").join(" ").split(" ").join("-")), "" != u && void 0 != u && (P += "/salas-" + u.split("/").join(" ").split(" ").join("-")), "" != h && void 0 != h && (P += "/condominio-" + h.split("/").join(" ").split(" ").join("-")), "" != m && void 0 != m && (P += "todos" == m ? "/condominio-1" : "/nome-condominio-" + m.split("/").join(" ").split(" ").join("-")), "" != f && void 0 != f && (P += "/estado-obra-" + f.split("/").join(" ").split(" ").join("-")), "" != v && void 0 != v && (P += "/construtora-" + v.split("/").join(" ").split(" ").join("-")), "" != g && void 0 != g && (P += "/quadra-" + g.split("/").join(" ").split(" ").join("-")), "" != b && void 0 != b && (P += "/padrao-" + b.split("/").join(" ").split(" ").join("-")), "" != C && void 0 != g && (P += "/financiamento"), "" != _ && void 0 != _ && (P += "/lote-" + _.split("/").join(" ").split(" ").join("-")), window.location.toString().split("/comercial").length > 1 && (P += "/comercial"), "" != x && void 0 != x && (P += "/valor-" + x.split(" ").join("-")), "" != y && void 0 != y && (P += "/area-" + y.split(" ").join("-")), -1 != window.location.toString().split("https://").join("").split("http://").join("").indexOf("corretor-nome-") && (P += "/corretor-nome-" + window.location.toString().split("https://").join("").split("http://").join("").split("corretor-nome-")[1]), -1 != window.location.toString().split("https://").join("").split("http://").join("").indexOf("imobiliaria-") && (P += "/imobiliaria-" + window.location.toString().split("https://").join("").split("http://").join("").split("imobiliaria-")[1]), "" != S && void 0 != S && (P += "/ordem-" + S), "" != F && void 0 != F && (P += "/resultado-" + F), "" != T && void 0 != T && (P += "/quantidade-" + T), P = P.removeDiacritics() + "/", "pagina=facebook" == D[1] && (P += "?pagina=facebook"), window.location = P
    }
}

function pesquisarLivre() {
    var e = "";
    try {
        e = $("#pesquisar-livre").val()
    } catch (a) {}
    "" != e && void 0 != e && $.post("/pesquisar-livre", {
        termos: e
    }, function (e) {
        window.location.href = e
    })
}

function sendForm(a, t) {
    var o = Array();
    $(t).prop("disabled", !0), $(t).html("<i class='fa fa-spinner fa-spin'></i> Enviando"), $("*[formulario='" + a + "']").each(function (i) {
        "true" == $(this).attr("obrigatorio") && "" == $(this).val() && (focus($(this)), $(this).css('border-color', 'red'), $(t).prop("disabled", !1), $(t).html("Enviar"), $(this).focus(), e.stopImmediatePropagation());
        var r = $(this).attr("valor"),
            l = $(this).val();
        "checkbox" != $(this).attr("type") && "radio" != $(this).attr("type") || "" != l || (l = $(this).is(":checked") ? "Sim" : "Não"), "" == l && (l = "Não informado"), r = r.split("-").join(" ").split("_").join(" ").capitalize(), o.push({
            formulario: a,
            campo: r,
            valor: l
        }), i == $("*[formulario='" + a + "']").length - 1 && $.post("/enviar-formulario", {
            data: JSON.stringify(o)
        }, function (e) {
            e ? "form-imovel-facebook" == a || "form-indicar-para-um-amigo-facebook" == a ? (alert("Mensagem enviada com sucesso!"), "form-imovel-facebook" == a && $("#fechar_imovel_facebook").click(), "form-indicar-para-um-amigo-facebook" == a && $("#fechar_indicar_facebook").click()) : window.location = "/agradecimento" : alert("Ocorreu algum problema no envio do formulário, tente novamente."), $(t).prop("disabled", !1), $(t).html("Enviar")
        })
    })
}

$("input[type=text]").blur(function() { 
    $(this).css('border-color', '#cdcdcd')
});

function clearForm(e) {
    $("*[formulario='" + e + "']").each(function () {
        $(this).val(""), "checkbox" == $(this).attr("type") && $(this).is(":checked") && $(this).prop("checked", !1)
    })
}

// function corretorOnline(e, a, t) {
//     $("#pkimovel").attr("value") && (e = $("#pkimovel").attr("value"), a = $("#inf_referencia").attr("value"), t = $("#fkempresa").attr("value")), e ? window.open("http://www.univenchat.com.br/atendimento.aspx?empresa=" + t + "&fkimovel=" + e + "&referencia=" + a, "popup", "width=425 , height=550, top=5, left=370, scrollbars=no,fullscreen=no") : window.open("/abrir-corretor-online", "popup", "width=425 , height=550, top=5, left=370, scrollbars=no,fullscreen=no")
// }

// function corretorOnline2(e, a, t) {
//     $("#pkimovel").attr("value") && (e = $("#pkimovel").attr("value"), a = $("#inf_referencia").attr("value"), t = $("#fkempresa").attr("value")), mobile ? e ? window.open("http://www.univenchat.com.br/atendimento.aspx?empresa=" + t + "&fkimovel=" + e + "&referencia=" + a, "popup", "width=425 , height=550, top=5, left=370, scrollbars=no,fullscreen=no") : window.open("/abrir-corretor-online", "popup", "width=425 , height=550, top=5, left=370, scrollbars=no,fullscreen=no") : e ? ($(".chat_corretor iframe").attr("src", "http://www.univenchat.com.br/atendimento.aspx?empresa=" + t + "&fkimovel=" + e + "&referencia=" + a), $(".chat_corretor").slideToggle()) : ($(".chat_corretor iframe").attr("src", "/abrir-corretor-online"), $(".chat_corretor").slideToggle())
// }

function ligueGratis(e, a) {
    window.open("http://www.blap.com.br/liguegratis.aspx?id=" + e + "&cid=" + a, "popup", "width=430 , height=380, top=150, left=300, scrollbars=no,fullscreen=no")
}

function ligueGratis2(e, a) {
    mobile ? window.open("http://www.blap.com.br/liguegratis.aspx?id=" + e + "&cid=" + a, "popup", "width=430 , height=380, top=150, left=300, scrollbars=no,fullscreen=no") : ($(".chat_corretor iframe").attr("src", "http://www.blap.com.br/liguegratis.aspx?id=" + e + "&cid=" + a), $(".chat_corretor").slideToggle())
}

function favoritos(e) {
    var a = "";
    if (getCookie("favoritos").split(e).length > 1) {
        if (getCookie("favoritos").split("#").length > 0)
            for (var t = 0; t < getCookie("favoritos").split("#").length; t++) getCookie("favoritos").split("#")[t] != e && (a += "#" + getCookie("favoritos").split("#")[t]);
        "#" == a.substring(0, 1) && (a = a.substring(1, a.length))
    } else if ("" != getCookie("favoritos")) var a = getCookie("favoritos") + "#" + e;
    else var a = e;
    document.cookie = "favoritos = " + a + "; path=/", "Adicionar aos favoritos" == $("#favoritos").html() ? ($("#favoritos").html("Remover dos favoritos"), $("#btn_favoritos i").toggleClass("fa-heart-o"), $("#btn_favoritos i").toggleClass("fa-heart"), $("#botao_favoritos").show()) : ($("#favoritos").html("Adicionar aos favoritos"), $("#btn_favoritos i").toggleClass("fa-heart-o"), $("#btn_favoritos i").toggleClass("fa-heart"))
}

function validarCampo(e) {
    return e ? e : ""
}

function getCookie(e) {
    for (var a = e + "=", t = document.cookie.split(";"), o = 0; o < t.length; o++) {
        for (var i = t[o];
            " " == i.charAt(0);) i = i.substring(1);
        if (0 == i.indexOf(a)) return i.substring(a.length, i.length)
    }
    return ""
}

function verificarCaptcha(e) {
    var a = grecaptcha.getResponse();
    0 != a && (window.location.href = e, document.cookie = "verificaCaptcha = true; path=/")
}

function novaBusca() {
    var e = $.map(arrayBairros, function (e) {
            return {
                value: e,
                data: {
                    category: "BAIRROS"
                }
            }
        }),
        a = $.map(arrayCidades, function (e) {
            return {
                value: e,
                data: {
                    category: "CIDADES"
                }
            }
        }),
        t = e.concat(a);
    $("#autocomplete").devbridgeAutocomplete({
        lookup: t,
        minChars: 1,
        onSelect: function (e) {
            if ("CIDADES" == e.data.category) {
                var a = e.value.split("(")[0].trim(),
                    t = " - " + e.value.split("(")[1].replace(")", "").trim();
                $("#cidadeSugestao").val(a + t)
            }
            if ("BAIRROS" == e.data.category) {
                var o = e.value.split("(")[0].trim(),
                    a = e.value.split("(")[1].replace(")", "").split("-")[0].trim(),
                    t = " - " + e.value.split("(")[1].replace(")", "").split("-")[1].trim();
                $("#bairroSugestao").val(o), $("#cidadeSugestao").val(a + t)
            }
        },
        showNoSuggestionNotice: !0,
        noSuggestionNotice: "Desculpe, nenhuma sugestão.",
        groupBy: "category"
    })
}
var localizacoes = "",
    faixa_valor = "",
    pagina_oportunidades = 0,
    arrayBairros = [],
    arrayCidades = [],
    mobile = !1,
    params = window.location.pathname.split("/");
$("#fotorama_banner").on("fotorama:load", function (e, a, t) {
    $("#fotorama_banner .fotorama__img").removeAttr("style")
}), $("#fotorama_opt").on("fotorama:load", function (e, a, t) {
    $("#fotorama_opt .fotorama__html div, #fotorama_opt .fotorama__html a").css({
        height: "auto"
    })
}), $("#fotorama_ficha").on("fotorama:ready", function () {
    $("#fotorama_ficha .fotorama__fullscreen-icon").css({
        width: "100%",
        height: "100%",
        background: "none"
    }), $("#fotorama_ficha .fotorama__arr").css({
        "z-index": "9999"
    })
}), $("#fotorama_ficha").on("fotorama:fullscreenenter", function () {
    $("#fotorama_ficha .fotorama__fullscreen-icon").css({
        width: "32px",
        height: "32px",
        background: "url(/images/fotorama.png) no-repeat",
        "background-position": "0 -32px"
    })
}), $("#fotorama_ficha").on("fotorama:fullscreenexit", function () {
    $("#fotorama_ficha .fotorama__fullscreen-icon").css({
        width: "100%",
        height: "100%",
        background: "none"
    })
}), $("#fotorama_ficha_facebook").on("fotorama:ready", function () {
    $("#fotorama_ficha_facebook .fotorama__fullscreen-icon").css({
        width: "100%",
        height: "100%",
        background: "none"
    }), $("#fotorama_ficha_facebook .fotorama__arr").css({
        "z-index": "9999"
    })
}), $("#fotorama_ficha_facebook").on("fotorama:fullscreenenter", function () {
    $("#fotorama_ficha_facebook .fotorama__fullscreen-icon").css({
        width: "180px",
        height: "32px",
        background: "url(/images/novo_fotorama.png) no-repeat"
    })
}), $("#fotorama_ficha_facebook").on("fotorama:fullscreenexit", function () {
    $("#fotorama_ficha_facebook .fotorama__fullscreen-icon").css({
        width: "100%",
        height: "100%",
        background: "none"
    })
}), $("#capa_imovel").click(function () {
    var e = $("#fotorama_ficha").fotorama({
        allowfullscreen: !0
    }).data("fotorama");
    e.requestFullScreen()
}), $("#item_foto").click(function () {
    var e = $("#fotorama_ficha").fotorama({
        allowfullscreen: !0
    }).data("fotorama");
    e.requestFullScreen()
}), $("#item_lazer").click(function () {
    var e = $("#fotorama_lazer").fotorama({
        allowfullscreen: !0
    }).data("fotorama");
    e.requestFullScreen()
}), $("#item_planta").click(function () {
    var e = $("#fotorama_planta").fotorama({
        allowfullscreen: !0
    }).data("fotorama");
    e.requestFullScreen()
}), $("#item_implantação").click(function () {
    var e = $("#fotorama_implantação").fotorama({
        allowfullscreen: !0
    }).data("fotorama");
    e.requestFullScreen()
}), $("#item_projeto").click(function () {
    var e = $("#fotorama_projeto").fotorama({
        allowfullscreen: !0
    }).data("fotorama");
    e.requestFullScreen()
}), $("#item_obras").click(function () {
    var e = $("#fotorama_obras").fotorama({
        allowfullscreen: !0
    }).data("fotorama");
    e.requestFullScreen()
}), $(document).ready(function () {
    function e(e) {
        var a = 0;
        $(".destaques_prontos").each(function () {
            var t = ($(this).children("div").length, parseInt($(this).attr("total")) / 2);
            s = "undefined" == typeof $(this).attr("tempodes") ? 1e4 : 1e3 * parseInt($(this).attr("tempodes"));
            var o = 0;
            a++, $(this).children("div").each(function () {
                o++, o > t && $(this).hide()
            }), $(".destaques_prontos").length == a && e(s)
        })
    }

    function a(e, a) {
        for (var t = new Array, o = e; a >= o;) t.push(new Date(o)), o = o.addDays(1);
        return t
    }

    function t(e) {
        var a = {
            dateFormat: "dd/mm/yyyy",
            dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
            dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
            monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            showAlways: !1,
            allowMonthSelect: !0,
            allowYearSelect: !0,
            specialDates: e,
            onClick: function (e, a, t, o) {
                null != o ? alert(o.message) : e.val(t.getDate() + "/" + (t.getMonth() + 1) + "/" + t.getFullYear())
            }
        };
        try {
            $("[valor='data_entrada']").glDatePicker(a)
        } catch (t) {}
        try {
            $("[valor='data_saida']").glDatePicker(a)
        } catch (t) {}
        // var o = "";
        // o = $("#ctrl_form_imovel").val(), "1" != o && $(".form_imovel").slideToggle()
    }
    $(".translation-icons a").click(function (e) {
        e.preventDefault();
        var a = $(this).data("placement"),
            t = $(".translation-icons a").length,
            o = $(".goog-te-menu-frame:first");
        if (!o.size()) return alert("Error: Could not find Google translate frame."), !1;
        var i = $(".goog-te-menu-frame:first").contents().find("a span.text");
        return i.length != t && (a += 1), i.eq(a).click(), !1
    });
    try {
        var o = window.location.toString().split("https://").join("").split("http://").join("").split("/");
        "" != o[1] && $("html, body").animate({
            scrollTop: $(".titulo_pagina").offset().top
        })
    } catch (i) {}
    var r = new Date;
    "" != $("#whatsapp_chat").val() && ("" == $("#whatsapp_dias").val() ? r.getHours() >= parseInt($("#whatsapp_hora_inicio").val().split(":")[0]) && r.getHours() <= parseInt($("#whatsapp_hora_fim").val().split(":")[0]) ? ($("#whatsapp_numero").hide(), $("#whatsapp_chat, #whatsapp_ficha").show()) : ($("#whatsapp_chat, #whatsapp_ficha").hide(), $("#whatsapp_numero").show()) : "1" == $("#whatsapp_dias").val() ? r.getDay() >= 1 && r.getDay() <= 5 && r.getHours() >= parseInt($("#whatsapp_hora_inicio").val().split(":")[0]) && r.getHours() <= parseInt($("#whatsapp_hora_fim").val().split(":")[0]) && $("#whatsapp_fixo").show() : "2" == $("#whatsapp_dias").val() && (6 == r.getDay() || 0 == r.getDay()) && r.getHours() >= parseInt($("#whatsapp_hora_inicio").val().split(":")[0]) && r.getHours() <= parseInt($("#whatsapp_hora_fim").val().split(":")[0]) && $("#whatsapp_fixo").show());
    try {
        var o = window.location.toString().split("https://").join("").split("http://").join("").split("/");
        getCookie("favoritos").split(o[o.length - 1]).length > 1 && ($("#favoritos").html("Remover dos favoritos"), $("#btn_favoritos i").toggleClass("fa-heart-o"), $("#btn_favoritos i").toggleClass("fa-heart"))
    } catch (i) {}
    getCookie("favoritos") && $("#botao_favoritos").show(), $("#semMapa").length && $("#resultados").addClass("resultados2");
    try {
        var l = $("#valor_empre_txt").val();
        void 0 != l && "R$ 0,00" != l && $("#valor_empre").html("<h2>Vendas a partir de</h2><h3>" + l + "</h3>");
        var n = $("#valor_locacao_empre_txt").val();
        void 0 != n && "R$ 0,00" != n && $("#valor_locacao_empre").html("<h2>Locações a partir de</h2><h3>" + n + "</h3>")
    } catch (i) {}
    var c = getCookie("view");
    "1" == c && $("#btn_galeria").click();
    try {
        var s = 10;
        e(function (e) {
            setInterval(function () {
                $(".destaques_prontos").each(function () {
                    var e = $(this).children("div").length,
                        a = parseInt($(this).attr("total")) / 2;
                    e == 2 * a && $(this).children("div").each(function () {
                        $(this).is(":visible") ? $(this).hide() : $(this).show()
                    })
                })
            }, e)
        })
    } catch (i) {}
    try {
        $(".destaques_prontos2").each(function () {
            s = "undefined" == typeof $(this).attr("tempodes") ? 1e4 : 1e3 * parseInt($(this).attr("tempodes"))
        });
        var d = 1;
        $(".novoDest").hide(), $(".novoDest_1").show(), setInterval(function () {
            $(".destaques_prontos2").each(function () {
                var e = parseInt($("#quantidade_troca").val());
                d++, $(".novoDest").hide(), $(".novoDest_" + d).show(), d == e && (d = 0)
            })
        }, s)
    } catch (i) {}
    try {
        $(".banner_oportunidades_prontos").each(function () {
            var e = 0;
            $(this).children("div").each(function () {
                e == pagina_oportunidades ? $(this).show() : $(this).hide(), e++
            })
        })
    } catch (i) {}
    $("#div_lazer").height() > 0 && $("#btn_lazer").css({
        display: "block"
    }), $("#div_projeto").height() > 0 && $("#btn_projeto").css({
        display: "block"
    }), $("#div_plantas").height() > 0 && $("#btn_plantas").css({
        display: "block"
    }), $("#div_implantacao").height() > 0 && $("#btn_implantacao").css({
        display: "block"
    }), $("#div_acompanhe").height() > 0 && $("#btn_acompanhe").css({
        display: "block"
    }) ; /*$.post("/corretor-online", {}, function (e) {
        e.online && $(".corretor_online").show(), "true" == e.status ? $(".status_corretor").html("Online") : $(".status_corretor").html("Offline")
    }) */
    var p = null;
    try {
        var u = $("#datas_ocupadas").val(),
            h = $("#flag_pernoite").val();
        if ("" != u && void 0 != u) {
            p = [], u = u.split(",");
            for (var d = 0; d < u.length; d++) {
                var m = u[d].split("#")[0].split("-"),
                    f = u[d].split("#")[1].split("-"),
                    v = parseInt(m[0]),
                    g = parseInt(m[1]),
                    b = parseInt(m[2]),
                    _ = parseInt(f[0]),
                    x = parseInt(f[1]),
                    y = parseInt(f[2]);
                m = new Date(v + "	" + g + "/" + b), f = new Date(_ + "/" + x + "/" + y), b != y && "1" == h && f.setDate(f.getDate() - 1);
                try {
                    p.push({
                        date: m,
                        data: {
                            message: "Período reservado"
                        },
                        repeatMonth: !1
                    })
                } catch (i) {}
                try {
                    p.push({
                        date: f,
                        data: {
                            message: "Período reservado"
                        },
                        repeatMonth: !1
                    })
                } catch (i) {}
                var C = a(m, f);
                if (C.length > 0)
                    for (var w = 0; w < C.length; w++) {
                        try {
                            p.push({
                                date: C[w],
                                data: {
                                    message: "Período reservado"
                                },
                                repeatMonth: !1
                            })
                        } catch (i) {}
                        d == u.length - 1 && w == C.length - 1 && t(p)
                    } else d == u.length - 1 && t(p)
            }
        } else t(p)
    } catch (i) {}
    var S = function (e) {
            return 11 === e.replace(/\D/g, "").length ? "(00) 00000-0000" : "(00) 0000-00009"
        },
        F = {
            onKeyPress: function (e, a, t, o) {
                t.mask(S.apply({}, arguments), o)
            }
        };
    try {
        $("[valor='data']").mask("00/00/0000")
    } catch (i) {}
    try {
        $("[valor='data-nascimento']").mask("00/00/0000")
    } catch (i) {}
    try {
        $("[valor='telefone']").mask(S, F)
    } catch (i) {}
    try {
        $("[valor='celular']").mask(S, F)
    } catch (i) {}
    try {
        $("[valor='cpf']").mask("000.000.000-00")
    } catch (i) {}
    try {
        $("[valor='area']").mask("#.##0,00", {
            reverse: !0
        })
    } catch (i) {}
    try {
        $("[valor='valor']").mask("#.##0,00", {
            reverse: !0
        })
    } catch (i) {}
    $.getJSON("/data/localizacoes.json", function (e) {
        localizacoes = e, arrayBairros = bairrosAutocomplete(e), arrayCidades = cidadesAutocomplete(e), $("#flag_busca_sugestao").length && "" != $("#flag_busca_sugestao").val() && novaBusca();
        try {
            $("#referencia").keypress(function (e) {
                13 == e.which && pesquisar()
            })
        } catch (a) {}
        var t = 0,
            o = "",
            i = "",
            r = "";
        // try {
        //     if (tipos(e, "comprar").length > 0) {
        //         var l = !0;
        //         try {
        //             $(".submenu_tipos").append('<li><a class="efeitoHover" href="/comprar">COMPRAR</a></li>'), t++
        //         } catch (a) {}
        //     }
        //     if (tipos(e, "alugar").length > 0) {
        //         var n = !0;
        //         try {
        //             $(".submenu_tipos").append('<li><a class="efeitoHover" href="/alugar">ALUGAR</a></li>'), t++
        //         } catch (a) {}
        //     }
        //     if (tipos(e, "temporada").length > 0) {
        //         var c = !0;
        //         try {
        //             $(".submenu_tipos").append('<li><a class="efeitoHover" href="/temporada">TEMPORADA</a></li>'), t++
        //         } catch (a) {}
        //     }
        //     if (tipos(e, "estudante").length > 0) {
        //         var s = !0;
        //         try {
        //             $(".submenu_tipos").append('<li><a class="efeitoHover" href="/estudante">ESTUDANTE</a></li>'), t++
        //         } catch (a) {}
        //     }
        //     if (tipos(e, "permuta").length > 0) {
        //         var d = !0;
        //         try {
        //             $(".submenu_tipos").append('<li><a class="efeitoHover" href="/permuta">PERMUTA</a></li>'), t++
        //         } catch (a) {}
        //     }
        //     $.each(tipos(e, ""), function (e, a) {
        //         try {
        //             $(".submenu_tipos").append('<li><a class="efeitoHover" href="/imoveis/' + a.toLowerCase().removeDiacritics().split(" ").join("-") + '">' + a + "</a></li>"), t++
        //         } catch (r) {}(l && "APARTAMENTO" == a || l && "CASA" == a || l && "TERRENO" == a) && (o += '<h3><a href="/comprar/' + a.toLowerCase().removeDiacritics() + '">COMPRAR ' + a + "</a></h3>"), (n && "APARTAMENTO" == a || n && "CASA" == a || n && "TERRENO" == a) && (o += '<h3><a href="/alugar/' + a.toLowerCase().removeDiacritics() + '">ALUGAR ' + a + "</a></h3>"), i += '<h3><a href="/imoveis/' + a.toLowerCase().removeDiacritics().split(" ").join("-") + '">' + a + "</a></h3>"
        //     }), c && (r += '<h3><a href="/temporada">TEMPORADA</a></h3>'), s && (r += '<h3><a href="/estudante">ESTUDANTE</a></h3>'), d && (r += '<h3><a href="/permuta">PERMUTA</a></h3>'), o += i + r, $("#links_seo").html(o), t > 15 && $(".submenu_tipos").css({
        //         "overflow-y": "scroll"
        //     })
        // } catch (a) {}
        try {
            $("#uf").attr("size", "2")
        } catch (a) {}
        try {
            $("#cidade").attr("size", "2")
        } catch (a) {}
        try {
            $("#tipo").attr("size", "2")
        } catch (a) {}
        try {
            $("#subtipo").attr("size", "2")
        } catch (a) {}
        try {
            $("#vagas").attr("size", "2")
        } catch (a) {}
        try {
            $("#dormitorios").attr("size", "2")
        } catch (a) {}
        try {
            $("#banheiros").attr("size", "2")
        } catch (a) {}
        try {
            $("#condominio").attr("size", "2")
        } catch (a) {}
        try {
            $("#condominios").attr("size", "2")
        } catch (a) {}
        try {
            $("#estado_obra").attr("size", "2")
        } catch (a) {}
        try {
            $("#construtora").attr("size", "2")
        } catch (a) {}
        try {
            $("#quadra").attr("size", "2")
        } catch (a) {}
        try {
            $("#padrao").attr("size", "2")
        } catch (a) {}
        try {
            $("#tipo").prepend('<option value="">Todos</option>')
        } catch (a) {}
        try {
            $("#subtipo").prepend('<option value="">Todos</option>')
        } catch (a) {}
        try {
            $("#uf").prepend('<option value="">Todos</option>')
        } catch (a) {}
        try {
            $("#cidade").prepend('<option value="">Todos</option>')
        } catch (a) {}
        try {
            $("#condominios").prepend('<option value="todos">Todos</option>')
        } catch (a) {}
        try {
            $("#estado_obra").prepend('<option value="todos">Todos</option>')
        } catch (a) {}
        try {
            $("#construtora").prepend('<option value="todos">Todos</option>')
        } catch (a) {}
        try {
            $("#quadra").prepend('<option value="todos">Todos</option>')
        } catch (a) {}
        if ("" == $("#cidade").val() && $("#cidade option:selected").removeAttr("selected"), "" == $("#tipo").val() && $("#tipo option:selected").removeAttr("selected"), "" == $("#subtipo").val() && $("#subtipo option:selected").removeAttr("selected"), "" == $("#vagas").val() && $("#vagas option:selected").removeAttr("selected"), "" == $("#dormitorios").val() && $("#dormitorios option:selected").removeAttr("selected"), "" == $("#banheiros").val() && $("#banheiros option:selected").removeAttr("selected"), "" == $("#condominio").val() && $("#condominio option:selected").removeAttr("selected"), "" == $("#condominios").val() && $("#condominio option:selected").removeAttr("selected"), "" == $("#estado_obra").val() && $("#estado_obra option:selected").removeAttr("selected"), "" == $("#construtora").val() && $("#construtora option:selected").removeAttr("selected"), "" == $("#quadra").val() && $("#quadra option:selected").removeAttr("selected"), "" == $("#padrao").val() && $("#padrao option:selected").removeAttr("selected"), tipos(e, "comprar").length > 0) {
            try {
                0 == $("#finalidade option[value='comprar']").length && $("#finalidade").append('<option value="comprar">Comprar</option>'), 0 == $("#finalidade-mapa option[value='comprar']").length && $("#finalidade-mapa").append('<option value="comprar" selected="selected">Comprar</option>')
            } catch (a) {}
            try {
                0 == $("#filtro-finalidade option[value='comprar']").length && $("#filtro-finalidade").append('<option value="comprar">Comprar</option>')
            } catch (a) {}
        }
        if (tipos(e, "alugar").length > 0) {
            try {
                0 == $("#finalidade option[value='alugar']").length && $("#finalidade").append('<option value="alugar">Alugar</option>'), 0 == $("#finalidade-mapa option[value='alugar']").length && $("#finalidade-mapa").append('<option value="alugar">Alugar</option>')
            } catch (a) {}
            try {
                0 == $("#filtro-finalidade option[value='alugar']").length && $("#filtro-finalidade").append('<option value="alugar">Alugar</option>')
            } catch (a) {}
        }
        if (tipos(e, "temporada").length > 0) {
            try {
                0 == $("#finalidade option[value='temporada']").length && $("#finalidade").append('<option value="temporada">Temporada</option>'), 0 == $("#finalidade-mapa option[value='temporada']").length && $("#finalidade-mapa").append('<option value="temporada">Temporada</option>')
            } catch (a) {}
            try {
                0 == $("#filtro-finalidade option[value='temporada']").length && $("#filtro-finalidade").append('<option value="temporada">Temporada</option>')
            } catch (a) {}
        }
        if (tipos(e, "estudante").length > 0) {
            try {
                0 == $("#finalidade option[value='estudante']").length && $("#finalidade").append('<option value="estudante">Estudante</option>'), 0 == $("#finalidade-mapa option[value='estudante']").length && $("#finalidade-mapa").append('<option value="estudante">Estudante</option>')
            } catch (a) {}
            try {
                0 == $("#filtro-finalidade option[value='estudante']").length && $("#filtro-finalidade").append('<option value="estudante">Estudante</option>')
            } catch (a) {}
        }
        if (tipos(e, "permuta").length > 0) {
            try {
                0 == $("#finalidade option[value='permuta']").length && $("#finalidade").append('<option value="permuta">Permuta</option>'), 0 == $("#finalidade-mapa option[value='permuta']").length && $("#finalidade-mapa").append('<option value="permuta">Permuta</option>')
            } catch (a) {}
            try {
                0 == $("#filtro-finalidade option[value='permuta']").length && $("#filtro-finalidade").append('<option value="permuta">Permuta</option>')
            } catch (a) {}
        }
        if (mobile) {
        //     try {
        //         $("#tipo").prepend('<option value="" disabled="true" selected="true">Tipos</option>')
        //     } catch (a) {}
        //     try {
        //         $("#cidade").prepend('<option value="" disabled="true" selected="true">Cidades</option>')
        //     } catch (a) {}
        //     try {
        //         $("#dormitorios").prepend('<option value="" disabled="true" selected="true">Dormitórios</option>')
        //     } catch (a) {}
            try {
                $("#vagas").prepend('<option value="" disabled="true" selected="true">Vagas</option>')
            } catch (a) {}
            try {
                $("#bairro").prepend('<option value="" disabled="true" selected="true">Bairros</option>')
            } catch (a) {}
            try {
                $("#condominio").prepend('<option value="" disabled="true" selected="true">Condomínio</option>')
            } catch (a) {}
            try {
                $("#condominios").prepend('<option value="" disabled="true" selected="true">Condomínios</option>')
            } catch (a) {}
            try {
                $("#estado_obra").prepend('<option value="" disabled="true" selected="true">Estágio da Obra</option>')
            } catch (a) {}
            try {
                $("#construtora").prepend('<option value="" disabled="true" selected="true">Construtora</option>')
            } catch (a) {}
            try {
                $("#quadra").prepend('<option value="" disabled="true" selected="true">Quadra</option>')
            } catch (a) {}
    
            try {
                $("#padrao").prepend('<option value="" disabled="true" selected="true">Padrão</option>');
            } catch (a) {}
            $("#finalidade").show(), 
            $("#tipo").show(), 
            $("#cidade").show(), 
            $("#bairro").show(), 
            $("#valor").show(), 
            $("#area").show(), 
            $("#suites").show(), 
            $("#dormitorios").show(), 
            $("#vagas").show(), 
            $("#condominio").show(), 
            $("#condominios").show(), 
            $("#estado_obra").show(), 
            $("#construtora").show(), 
            $("#quadra").show(), 
            $("#padrao").show(), 
            $(".filtros select").show(), 
            
            $("#finalidade").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $("#tipo").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $("#cidade").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $("#bairro").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $("#valor").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $("#area").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $("#suites").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $("#vagas").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $("#dormitorios").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $("#condominio").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $("#condominios").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $("#estado_obra").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $("#construtora").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $("#quadra").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $("#padrao").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $(".filtros select").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $("#referencia").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $("#autocomplete").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $("#ordem-campo").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $("#ordem-resultado").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            }), $("#total-imoveis").css({
                width: "90%",
                "margin-left": "5%",
                "margin-right": "5%",
                height: "35px",
                padding: "5px 0 5px 5%",
                color: "#555",
                "-webkit-appearance": "none",
                "margin-bottom": "10px",
                background: "#FFF",
                "-webkit-border-radius": "3px",
                "-moz-border-radius": "3px",
                "border-radius": "3px"
            })
    
    
    
        } else {
            try {
                $("#filtro-finalidade").multiselect({
                    maxHeight: 250,
                    enableFiltering: !1,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Finalidade",
                    allSelectedText: "Finalidades"
                })
            } catch (a) {}
            try {
                $("#filtro-dormitorios").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Dormitório",
                    allSelectedText: "Dormitórios"
                })
            } catch (a) {}
            try {
                $("#filtro-banheiros").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Banheiro",
                    allSelectedText: "Banheiros"
                })
            } catch (a) {}
            try {
                $("#filtro-suites").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Suíte",
                    allSelectedText: "Suítes"
                })
            } catch (a) {}
            try {
                $("#filtro-vagas").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Vaga",
                    allSelectedText: "Vagas"
                })
            } catch (a) {}
            try {
                $("#filtro-salas").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Dormitório",
                    allSelectedText: "Dormitórios"
                })
            } catch (a) {}
            try {
                $("#filtro-condominio").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Condomínio",
                    allSelectedText: "Condomínio"
                })
            } catch (a) {}
            try {
                $("#filtro-padrao").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Padrão",
                    allSelectedText: "Padrão"
                })
            } catch (a) {}
            try {
                $("#finalidade").multiselect({
                    maxHeight: 250,
                    classes: "finalidade-select",
                    enableFiltering: !1,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Finalidade",
                    allSelectedText: "Finalidades"
                })
            } catch (a) {}
            try {
                $("#dormitorios").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Dormitório",
                    allSelectedText: "Dormitórios"
                })
            } catch (a) {}
            try {
                $("#banheiros").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Banheiro",
                    allSelectedText: "Banheiros"
                })
            } catch (a) {}
            try {
                $("#suites").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Suíte",
                    allSelectedText: "Suítes"
                })
            } catch (a) {}
            try {
                $("#vagas").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Vaga",
                    allSelectedText: "Vagas"
                })
            } catch (a) {}
            try {
                $("#condominio").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Condomínio",
                    allSelectedText: "Condomínio"
                })
            } catch (a) {}
            try {
                $("#padrao").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Padrão",
                    allSelectedText: "Padrão"
                })
            } catch (a) {}
            try {
                $("#ordem-campo").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Valor"
                })
            } catch (a) {}
            try {
                $("#ordem-resultado").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Valor"
                })
            } catch (a) {}
            try {
                $("#total-imoveis").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Valor"
                })
            } catch (a) {}
        }
        var p = "";
        $("#filtro-finalidade").length && (p = "filtro-");
        try {
            $.each(tipos(e, $("#" + p + "finalidade").val()), function (e, a) {
                if (0 == $("#tipo option[value='" + a + "']").length) try {
                    $("#tipo").append('<option value="' + a + '">' + a + "</option>")
                } catch (t) {}
                if (0 == $("#filtro-tipo option[value='" + a + "']").length) try {
                    $("#filtro-tipo").append('<option value="' + a + '">' + a + "</option>")
                } catch (t) {}
            })
        } catch (a) {}
        if (!mobile) {
            try {
                $("#tipo").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Tipo",
                    allSelectedText: "Tipos"
                })
            } catch (a) {}
            try {
                $("#filtro-tipo").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Tipo",
                    allSelectedText: "Tipos"
                })
            } catch (a) {}
        }
        try {
            $.each(subtipos(e, $("#" + p + "tipo").val()), function (e, a) {
                try {
                    $("#subtipo").append('<option value="' + a + '">' + a + "</option>")
                } catch (t) {}
                try {
                    $("#filtro-subtipo").append('<option value="' + a + '">' + a + "</option>")
                } catch (t) {}
            })
        } catch (a) {}
        if (!mobile) {
            try {
                $("#subtipo").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Subtipo",
                    allSelectedText: "Subtipos"
                })
            } catch (a) {}
            try {
                $("#filtro-subtipo").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Subtipo",
                    allSelectedText: "Subtipos"
                })
            } catch (a) {}
        }
        try {
            $.each(uf(e, $("#" + p + "tipo").val()), function (e, a) {
                if (0 == $("#uf option[value='" + a + "']").length) try {
                    $("#uf").append('<option value="' + a + '">' + a + "</option>")
                } catch (t) {}
                if (0 == $("#filtro-uf option[value='" + a + "']").length) try {
                    $("#filtro-uf").append('<option value="' + a + '">' + a + "</option>")
                } catch (t) {}
            })
        } catch (a) {}
        if (!mobile) {
            try {
                $("#uf").multiselect({
                    maxHeight: 250,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "UF"
                })
            } catch (a) {}
            try {
                $("#filtro-uf").multiselect({
                    maxHeight: 250,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "UF"
                })
            } catch (a) {}
        }
        try {
            $.each(cidades(e, $("#" + p + "finalidade").val(), $("#" + p + "tipo").val(), $("#" + p + "uf").val()), function (e, a) {
                if (0 == $("#cidade option[value='" + a + "']").length) try {
                    $("#cidade").append('<option value="' + a + '">' + a + "</option>")
                } catch (t) {}
                if (0 == $("#filtro-cidade option[value='" + a + "']").length) try {
                    $("#filtro-cidade").append('<option value="' + a + '">' + a + "</option>")
                } catch (t) {}
            })
        } catch (a) {}
        if (!mobile) {
            try {
                $("#cidade").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Cidade",
                    allSelectedText: "Cidades"
                })
            } catch (a) {}
            try {
                $("#filtro-cidade").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Cidade",
                    allSelectedText: "Cidades"
                })
            } catch (a) {}
        }
        try {
            $.each(bairros(e, $("#" + p + "finalidade").val(), $("#" + p + "tipo").val(), $("#" + p + "uf").val(), $("#" + p + "cidade").val()), function (e, a) {
                if (0 == $("#bairro option[value='" + a + "']").length && 0 == $("#bairro option[value='" + a.removeDiacritics() + "']").length) try {
                    $("#bairro").append('<option value="' + a + '">' + a + "</option>")
                } catch (t) {}
                if (0 == $("#filtro-bairro option[value='" + a + "']").length && 0 == $("#filtro-bairro option[value='" + a.removeDiacritics() + "']").length) try {
                    $("#filtro-bairro").append('<option value="' + a + '">' + a + "</option>")
                } catch (t) {}
            })
        } catch (a) {}
        if (!mobile) {
            try {
                $("#bairro").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    numberDisplayed: 0,
                    nSelectedText: "bairro(s)",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Bairro",
                    allSelectedText: "Bairros"
                })
            } catch (a) {}
            try {
                $("#filtro-bairro").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    numberDisplayed: 0,
                    nSelectedText: "bairro(s)",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Bairro",
                    allSelectedText: "Bairros"
                })
            } catch (a) {}
        }
        try {
            $.each(condominios(e, $("#" + p + "finalidade").val(), $("#" + p + "tipo").val(), $("#" + p + "cidade").val()), function (e, a) {
                if (0 == $("#condominios option[value='" + a + "']").length) try {
                    $("#condominios").append('<option value="' + a + '">' + a + "</option>")
                } catch (t) {}
                if (0 == $("#filtro-condominios option[value='" + a + "']").length) try {
                    $("#filtro-condominios").append('<option value="' + a + '">' + a + "</option>")
                } catch (t) {}
            })
        } catch (a) {}
        if (!mobile) {
            try {
                $("#condominios").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Condomínio",
                    allSelectedText: "Condomínios"
                })
            } catch (a) {}
            try {
                $("#filtro-condominios").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Condomínio",
                    allSelectedText: "Condomínios"
                })
            } catch (a) {}
        }
        try {
            $.each(estado_obra(e, $("#" + p + "tipo").val(), $("#" + p + "cidade").val()), function (e, a) {
                if (0 == $("#estado_obra option[value='" + a + "']").length) try {
                    $("#estado_obra").append('<option value="' + a + '">' + a + "</option>")
                } catch (t) {}
            })
        } catch (a) {}
        if (!mobile) try {
            $("#estado_obra").multiselect({
                maxHeight: 250,
                enableFiltering: !0,
                enableCaseInsensitiveFiltering: !0,
                filterPlaceholder: "Pesquisar",
                nonSelectedText: "Estágio da Obra",
                allSelectedText: "Estágio da Obra"
            })
        } catch (a) {}
        try {
            $.each(construtora(e, $("#" + p + "tipo").val(), $("#" + p + "cidade").val()), function (e, a) {
                if (0 == $("#construtora option[value='" + a + "']").length) try {
                    $("#construtora").append('<option value="' + a + '">' + a + "</option>")
                } catch (t) {}
            })
        } catch (a) {}
        if (!mobile) try {
            $("#construtora").multiselect({
                maxHeight: 250,
                enableFiltering: !0,
                enableCaseInsensitiveFiltering: !0,
                filterPlaceholder: "Pesquisar",
                nonSelectedText: "Construtora",
                allSelectedText: "Construtora"
            })
        } catch (a) {}
        try {
            $.each(quadra(e, $("#" + p + "finalidade").val(), $("#" + p + "tipo").val(), $("#" + p + "cidade").val()), function (e, a) {
                if (0 == $("#quadra option[value='" + a + "']").length) try {
                    $("#quadra").append('<option value="' + a + '">' + a + "</option>")
                } catch (t) {}
                if (0 == $("#filtro-quadra option[value='" + a + "']").length) try {
                    $("#filtro-quadra").append('<option value="' + a + '">' + a + "</option>")
                } catch (t) {}
            })
        } catch (a) {}
        if (!mobile) {
            try {
                $("#quadra").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Quadra",
                    allSelectedText: "Quadra"
                })
            } catch (a) {}
            try {
                $("#filtro-quadra").multiselect({
                    maxHeight: 250,
                    enableFiltering: !0,
                    enableCaseInsensitiveFiltering: !0,
                    buttonWidth: "100%",
                    filterPlaceholder: "Pesquisar",
                    nonSelectedText: "Quadra",
                    allSelectedText: "Quadra"
                })
            } catch (a) {}
        }
        faixa_area = {
            areas: [{
                valor: "",
                label: "Qualquer área"
            }, {
                valor: "max_100",
                label: "até 100m²"
            }, {
                valor: "100_150",
                label: "de 100m² até 150m²"
            }, {
                valor: "150_200",
                label: "de 150m² até 200m²"
            }, {
                valor: "200_250",
                label: "de 200m² até 250m²"
            }, {
                valor: "250_300",
                label: "de 250m² até 300m²"
            }, {
                valor: "350_400",
                label: "de 350m² até 400m²"
            }, {
                valor: "400_450",
                label: "de 400m² até 450m²"
            }, {
                valor: "450_500",
                label: "de 450m² até 500m²"
            }, {
                valor: "500_750",
                label: "de 500m² até 750m²"
            }, {
                valor: "750_1000",
                label: "de 750m² até 1.000m²"
            }, {
                valor: "1000_1250",
                label: "de 1.000m² até 1.250m²"
            }, {
                valor: "1250_1500",
                label: "de 1.250m² até 1.500m²"
            }, {
                valor: "1500_3000",
                label: "de 1.500m² até 3.000m²"
            }, {
                valor: "3000_5000",
                label: "de 3.000m² até 5.000m²"
            }, {
                valor: "min_5000",
                label: "acima de 5.000m²"
            }]
        }, $.each(faixa_area.areas, function (e, a) {
            $("#area").append('<option value="' + a.valor + '"">' + a.label + "</option>"), $("#filtro-area").append('<option value="' + a.valor + '"">' + a.label + "</option>")
        }), mobile || ($("#area").multiselect({
            maxHeight: 250,
            buttonWidth: "100%",
            filterPlaceholder: "Pesquisar",
            nonSelectedText: "Área"
        }), $("#filtro-area").multiselect({
            maxHeight: 250,
            buttonWidth: "100%",
            filterPlaceholder: "Pesquisar",
            nonSelectedText: "Valor"
        })), faixa_valor = {
            locacao: [{
                valor: "",
                label: "Valor"
            }, {
                valor: "max_300",
                label: "até 300"
            }, {
                valor: "300_400",
                label: "de 300 até 400"
            }, {
                valor: "400_500",
                label: "de 400 até 500"
            }, {
                valor: "500_750",
                label: "de 500 até 750"
            }, {
                valor: "750_1000",
                label: "de 750 até 1.000 mil"
            }, {
                valor: "1000_1250",
                label: "de 1.000 até 1.250 mil"
            }, {
                valor: "1250_1500",
                label: "de 1.250 até 1.500 mil"
            }, {
                valor: "1500_2000",
                label: "de 1.500 até 2.000 mil"
            }, {
                valor: "2000_3000",
                label: "de 2.000 até 3.000 mil"
            }, {
                valor: "3000_5000",
                label: "de 3.000 até 5.000 mil"
            }, {
                valor: "5000_7500",
                label: "de 5.000 até 7.500 mil"
            }, {
                valor: "7500_10000",
                label: "de 7.500 até 10.000 mil"
            }, {
                valor: "10000_12500",
                label: "de 10.000 até 12.500 mil"
            }, {
                valor: "12500_15000",
                label: "de 12.500 até 15.000 mil"
            }, {
                valor: "15000_30000",
                label: "de 15.000 até 30.000 mil"
            }, {
                valor: "min_30000",
                label: "acima de 30.000 mil"
            }],
            venda: [{
                valor: "",
                label: "Valor"
            }, {
                valor: "max_100000",
                label: "até 100 mil"
            }, {
                valor: "100000_150000",
                label: "de 100 até 150 mil"
            }, {
                valor: "150000_200000",
                label: "de 150 até 200 mil"
            }, {
                valor: "200000_300000",
                label: "de 200 até 300 mil"
            }, {
                valor: "300000_400000",
                label: "de 300 até 400 mil"
            }, {
                valor: "400000_500000",
                label: "de 400 até 500 mil"
            }, {
                valor: "500000_750000",
                label: "de 500 até 750 mil"
            }, {
                valor: "750000_1000000",
                label: "de 750 até 1 milhão"
            }, {
                valor: "1000000_1250000",
                label: "de 1 até 1.250 milhões"
            }, {
                valor: "1250000_1500000",
                label: "de 1.250 até 1.500 milhões"
            }, {
                valor: "1500000_1750000",
                label: "de 1.500 até 1.750 milhões"
            }, {
                valor: "1750000_2000000",
                label: "de 1.750 até 2 milhões"
            }, {
                valor: "2000000_2250000",
                label: "de 2 até 2.225 milhões"
            }, {
                valor: "2250000_2500000",
                label: "de 2.250 até 2.500 milhões"
            }, {
                valor: "2500000_2750000",
                label: "de 2.500 até 2.750 milhões"
            }, {
                valor: "2750000_3000000",
                label: "de 2.750 até 3 milhões"
            }, {
                valor: "min_3000000",
                label: "acima de 3 milhões"
            }],
            venda_locacao: [{
                valor: "",
                label: "Valor"
            }]
        }, "comprar" == $("#finalidade").val() || "comprar" == $("#filtro-finalidade").val() || "permuta" == $("#finalidade").val() || "permuta" == $("#filtro-finalidade").val() ? $.each(faixa_valor.venda, function (e, a) {
            0 == $("#valor option[value='" + a.valor + "']").length && $("#valor").append('<option value="' + a.valor + '"">' + a.label + "</option>"), 0 == $("#filtro-valor option[value='" + a.valor + "']").length && $("#filtro-valor").append('<option value="' + a.valor + '"">' + a.label + "</option>")
        }) : $.each(faixa_valor.locacao, function (e, a) {
            0 == $("#valor option[value='" + a.valor + "']").length && $("#valor").append('<option value="' + a.valor + '"">' + a.label + "</option>"), 0 == $("#filtro-valor option[value='" + a.valor + "']").length && $("#filtro-valor").append('<option value="' + a.valor + '"">' + a.label + "</option>")
        }), mobile || ($("#valor").multiselect({
            maxHeight: 250,
            filterPlaceholder: "Pesquisar",
            nonSelectedText: "Valor"
        }), $("#filtro-valor").multiselect({
            maxHeight: 250,
            buttonWidth: "100%",
            filterPlaceholder: "Pesquisar",
            nonSelectedText: "Valor"
        }))
    }), $("img.lazy").show().lazyload({
        effect: "fadeIn",
        skip_invisible: !1
    }), $("#voltar").click(function () {
        history.back()
    }), $(".corretor_fixo_lateral, .ligue_fixo_lateral, .whatsapp_fixo_lateral, .messenger_lateral, .skype_lateral").css({
        "-webkit-transition": "width 0.5s",
        transition: "width 0.5s",
        display: "block !important"
    }), $(".corretor_fixo_lateral").hover(function (e) {
        $(".corretor_fixo_lateral").css("width", "mouseenter" === e.type ? "128px" : "56px")
    }), $(".ligue_fixo_lateral").hover(function (e) {
        $(".ligue_fixo_lateral").css("width", "mouseenter" === e.type ? "128px" : "56px")
    }), $(".whatsapp_fixo_lateral").hover(function (e) {
        $(".whatsapp_fixo_lateral").css("width", "mouseenter" === e.type ? "200px" : "56px")
    }), $(".previsao_total").hover(function () {
        $(".previsao_fixo_lateral").animate({
            width: "293px"
        }, "500"), $(".frame_previsao").animate({
            width: "150px"
        }, "500")
    }), $(".previsao_total").mouseleave(function () {
        $(".frame_previsao").animate({
            width: "0"
        }, "500"), $(".previsao_fixo_lateral").animate({
            width: "56px"
        }, "500")
    }), $(".conversor_total").hover(function () {
        $(".conversor_fixo_lateral").animate({
            width: "342px"
        }, "500"), $(".frame_conversor").animate({
            width: "197px"
        }, "500")
    }), $(".conversor_total").mouseleave(function () {
        $(".frame_conversor").animate({
            width: "0"
        }, "500"), $(".conversor_fixo_lateral").animate({
            width: "56px"
        }, "500")
    });
    var T = new Date,
        k = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"),
        D = "";
    D = T.getHours() >= 19 ? "Boa noite" : T.getHours() >= 12 ? "Boa tarde" : "Bom dia", $(".data").html("<span>" + T.getDate() + "</span> de " + k[T.getMonth()] + " de " + T.getFullYear()), $(".facebook_frame").html("<iframe src='https://www.univencrm.com.br/sites_login_facebook/?raiz=" + window.location.href + "&url=" + window.location.href + "' frameborder='0' style='width:150px; height:30px; float:right;' scrolling='no' ></iframe>"), $(".saudacao").html(D), olaCorretor = setTimeout(function () {
        $(".corretor_mais").click()
    }, 5e3)
});
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i)
    },
    any: function () {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()
    }
};
String.prototype.removeDiacritics = function () {
    for (var e = [
            [/[\300-\306]/g, "A"],
            [/[\340-\346]/g, "a"],
            [/[\310-\313]/g, "E"],
            [/[\350-\353]/g, "e"],
            [/[\314-\317]/g, "I"],
            [/[\354-\357]/g, "i"],
            [/[\322-\330]/g, "O"],
            [/[\362-\370]/g, "o"],
            [/[\331-\334]/g, "U"],
            [/[\371-\374]/g, "u"],
            [/[\321]/g, "N"],
            [/[\361]/g, "n"],
            [/[\307]/g, "C"],
            [/[\347]/g, "c"]
        ], a = this, t = 0; t < e.length; t++) a = a.replace(e[t][0], e[t][1]);
    return a
}, String.prototype.capitalize = function (e) {
    return this.toLowerCase().replace(/^.|\s\S/g, function (e) {
        return e.toUpperCase()
    })
}, Date.prototype.addDays = function (e) {
    var a = new Date(this.valueOf());
    return a.setDate(a.getDate() + e), a
};