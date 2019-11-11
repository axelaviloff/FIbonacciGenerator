var inptArea = document.querySelector("input.validate");
var btnGerar = document.querySelector("body.s12 a#al");
var ctainer = document.querySelector("div#main_container");
var btnHelp = document.querySelector("a#help");


btnHelp.onmouseenter = function () {
    ctainer.innerHTML = "";
    var p = document.createElement("p");
    var p2 = document.createElement("p");
    var img = document.createElement("img");
    img.setAttribute("src", "img/fib.png");
    p.appendChild(document.createTextNode("Sequência de fibonacci é infinita e começa com 0 e 1."));
    p2.appendChild(document.createTextNode("Onde o termo sucessor consiste na soma dos dois termos anteriores."));
    img.style.width = "200px";
    p.style.color = "black";
    p.style.textAlign = "left";
    p2.style.color = "black";
    p2.style.textAlign = "left";
    ctainer.appendChild(p);
    ctainer.appendChild(img);
    ctainer.appendChild(p2)
};
btnHelp.onmouseleave = function () {
    ctainer.innerHTML = "";
};

btnGerar.onclick = function () {
    showSequence();
};

function showSequence() {
    ctainer.innerHTML = "";
    ctainer.setAttribute("class", "#e0f2f1 teal lighten-5 col s12");
    if (Number(inptArea.value) <= 0) {
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



