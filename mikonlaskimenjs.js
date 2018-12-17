function laske(value) {
    var n1, n2, t;
    n1 = Number(document.calculator.numero1.value);
    n2 = Number(document.calculator.numero2.value);
    if (value == "+") // this.value välitettiin, funktiossa value. Istolta kopioin. :)
        t = n1 + n2;
    if (value == "-")
        t = n1 - n2;
    if (value == "*")
        t = n1 * n2;
    if (value == "/")
        t = n1 / n2;
    document.calculator.tulos.value = t;
}