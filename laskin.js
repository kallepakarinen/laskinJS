var lasku;

function summa() {
  var summa;
  lasku = document.calculator.lasku.value;
  summa = eval(lasku);
    document.calculator.tulos.value = summa;
    document.calculator.lasku.value = summa;
}

function btnNumber(clicked_id) {
  document.calculator.lasku.value = document.calculator.lasku.value + clicked_id;
}

function btnClear(){
  document.calculator.tulos.value = "";
  document.calculator.lasku.value = "";
}
