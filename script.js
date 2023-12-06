// pegar o elemento do visor
var visor = document.getElementById("visor");

// quando uma tecla for pressionada, seu valor vai pro visor
function adicionae(tecla) {
  visor.value = visor.value + tecla;
}

 // quando o "c" for pressionado limpa o visor
function limpezatotal() {
  visor.value = "";
  alert("Apagando... ✨");
}

 // quando o "=" for pressionado calcula
function calculari() {
  visor.value = eval(visor.value);
}

function deleteLastDigit() {
  var currentValue = visor.value;
  visor.value = currentValue.slice(0, -1);}

// Adicione um evento para teclas pressionadas
document.addEventListener('keydown', function(event) {
  // Verifica se a tecla pressionada é um número ou operador
  if (/[\d\+\-\*\/]/.test(event.key)) {
    adicionae(event.key);
  } else if (event.key === 'Enter') {
    event.preventDefault();
    calculari();
  } else if (event.key === 'c' || event.key === 'C') {
    limpezatotal();
  } else if (event.key === 'Backspace') {
  deleteLastDigit();
}
});
