var calculateValue;

function summa() {
  var total;
  calculateValue = document.calculator.lasku.value;
  total = eval(calculateValue);
  document.calculator.tulos.value = total;
  document.calculator.lasku.value = total;
}

function btnNumber(clicked_id) {
  document.calculator.lasku.value = document.calculator.lasku.value + clicked_id;
}

function btnClear() {
  document.calculator.tulos.value = "";
  document.calculator.lasku.value = "";
}
