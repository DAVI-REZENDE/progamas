$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria() {
    $("#spinner").toggle();

    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
        .fail(function() {
            $("#erro").toggle();
            setTimeout(function() {
                $("#erro").toggle();
            }, 5500)
        })
        .always(function() {
            $("#spinner").toggle();
        });

}

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroFrase = Math.floor(Math.random() * data.length);
    frase.text(data[numeroFrase].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroFrase].tempo);

}

function buscaFrase() {
    var fraseId = $("#frase-id").val();
    var dados = { id: fraseId };

    $("#spinner").toggle();

    $.get("http://localhost:3000/frases", dados, trocaFrase)
        .fail(function() {

            $("#erro").toggle();
            setTimeout(function() {
                $("#erro").toggle();
            }, 5500)
        })
        .always(function() {
            $("#spinner").toggle();
        });

}

function trocaFrase(data) {
    var frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);

}