const inputArea = document.querySelector("input.validate");
const buttonGenerate = document.querySelector("body.s12 a#al");
const container = document.querySelector("div#main_container");
const buttonHelp = document.querySelector("a#help");

function showHelp() {
    container.innerHTML = "";
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const img = document.createElement("img");
    img.setAttribute("src", "img/fib.png");
    p.appendChild(document.createTextNode("Sequência de fibonacci é infinita e começa com 0 e 1."));
    p2.appendChild(document.createTextNode("Onde o termo sucessor consiste na soma dos dois termos anteriores."));
    img.style.width = "200px";
    p.style.color = "black";
    p.style.textAlign = "left";
    p2.style.color = "black";
    p2.style.textAlign = "left";
    container.appendChild(p);
    container.appendChild(img);
    container.appendChild(p2)
}

function generateFibonacciSequence(num) {
    const fibNumbers = [0, 1];

    for (let i = 2; i <= num; i++) {
        const fib = fibNumbers[i-1] + fibNumbers[i-2];
        fibNumbers.push(fib);
    }

    return fibNumbers;
}

function displayFibonacciNumbers(numbers) {
    container.innerHTML = "";
    container.classList.add("#e0f2f1", "teal", "lighten-5", "col", "s12");

    numbers.forEach((num, index) => {
        const p = document.createElement("p");
        const text = document.createTextNode(`F(${index}) = ${num}`);
        p.appendChild(text);
        container.appendChild(p);
    });
}

function showAlert() {
    alert("Somente números inteiros positivos");
}

function handleGenerateClick() {
    const input = Number(inputArea.value);
    if (isValidInput(input)) {
        const fibNumbers = generateFibonacciSequence(input);
        displayFibonacciNumbers(fibNumbers);
    } else {
        showAlert();
    }
}

function isValidInput(input) {
    return Number.isInteger(input) && input > 0;
}

buttonHelp.onmouseenter = showHelp;
buttonHelp.onmouseleave = () => container.innerHTML = "";
buttonGenerate.onclick = handleGenerateClick;