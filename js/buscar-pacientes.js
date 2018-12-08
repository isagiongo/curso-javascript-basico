var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientesssss");

    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(paciente => {
                adicionarPacienteNaTabela(paciente);
            });

        } else {
            console.log(xhr.status);
            console.log(xhr.statusText);
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();

});