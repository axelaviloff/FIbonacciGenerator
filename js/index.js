var inptArea = document.querySelector("input.validate");
var btnGerar = document.querySelector("body.s12 a#al");
var ctainer = document.querySelector("div#main_container");

btnGerar.onclick = function () {
    showSequence();
};

function showSequence() {
    ctainer.innerHTML = "";

    if (Number(inptArea.value) < 0) {
        alert("Somente números inteiros positivos")
    } else if (Number(inptArea.value) % 1 !== 0) {
        alert("Somente números inteiros positivos")
    } else {
        generateFibonnaci(Number(inptArea.value))
    }
}

function generateFibonnaci(num) {
    var num1 = 0;
    var num2 = 1;
    var fib = 1;
    if (num === 0) {
        var p = document.createElement("p");
        var text = document.createTextNode("F(0) = 0");
        p.appendChild(text);
        ctainer.appendChild(p);
    } else if (num === 1) {
        var p = document.createElement("p");
        var text = document.createTextNode("F(0) = 0");
        p.appendChild(text);
        ctainer.appendChild(p);
        var p = document.createElement("p");
        var text = document.createTextNode("F(1) = 1");
        p.appendChild(text);
        ctainer.appendChild(p);
    } else {
        var p = document.createElement("p");
        var text = document.createTextNode("F(0) = 0");
        p.appendChild(text);
        ctainer.appendChild(p);
        var p = document.createElement("p");
        var text = document.createTextNode("F(1) = 1");
        p.appendChild(text);
        ctainer.appendChild(p);
        for (var i = 2; i<=num;i++) {
            fib = num1+num2;
            num1 = num2;
            num2 = fib;
            var p = document.createElement("p");
            var text = document.createTextNode("F("+i+") = "+fib);
            p.appendChild(text);
            ctainer.appendChild(p);
        }
    }
}



