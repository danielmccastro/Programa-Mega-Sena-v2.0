const btnSortear = document.getElementById("sortear");
btnSortear.addEventListener('click', sortearNumeros);
// btnSortear.addEventListener('mousedown', mDown);
// btnSortear.addEventListener('mouseup', mUp);

const btnLimpar = document.getElementById("limpar");
btnLimpar.addEventListener('click', limparNumeros);

/* function mDown() {
    btnSortear.innerHTML = "Sorteando...";
}

function mUp() {
    btnSortear.innerHTML = "Sortear";
} */


function sortearNumeros() {
    var numeros = document.querySelector('input[name="numeros"]:checked').value;
    var arrayNumeros = [];
    while (arrayNumeros.length < numeros) {
        var num = parseInt(Math.random() * (60) + 1);
        if (arrayNumeros.indexOf(num) == -1) // Verifica se o número não existe na array(index == -1). Se não existe, ele insere com push.
            arrayNumeros.push(num);
    }
    var arrayOdernada = arrayNumeros.sort((a, b) => a - b);
    const novaLinha = document.createElement("p");
    novaLinha.innerHTML = arrayOdernada;
    novaLinha.id = "resultados";
    document.getElementById("respostas").appendChild(novaLinha);
}

function limparNumeros() {
    var node = document.getElementById("respostas");
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}