console.log("Arquivo externo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Teste";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for(var i = 0; i < pacientes.length; i++){
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if(!pesoValido){
    tdPeso.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
  }

  if(!alturaValida){
    tdAltura.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }

  if(pesoValido && alturaValida){
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  } else{
    tdImc.textContent = "Altura e/ou Peso inválidos"
  }

  console.log(peso);
  console.log(altura);
  console.log(imc);

}

function validaPeso(peso){
  if(peso >= 0 && peso < 1000){
    return true;
  }
  return false;
}

function validaAltura(altura){
  if(altura >= 0 && altura < 2.99){
    return true;
  }
  return false;
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);

}
