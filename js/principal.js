console.log("Arquivo externo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Teste";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var tdImc = document.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 || peso >= 500){
  pesoValido = false;
  tdPeso.textContent = "Peso inválido";
}

if(altura <= 0 || altura >= 3.00){
  alturaValida = false;
  tdAltura.textContent = "Altura inválida";
}

if(pesoValido && alturaValida){
  var imc = peso / (altura * altura);
  tdImc.textContent = imc;
} else{
  tdImc.textContent = "Altura e/ou Peso inválidos"
}

console.log(peso);
console.log(altura);
console.log(imc);
