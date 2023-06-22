// criar referencias aos elementos da pag
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    //evita o envio do formulario
    e.preventDefault();
    console.log("e.target.value");

    // obter os valores dos inputs
    const frase = String(frm.inFrase.value.toUpperCase());

    var soma = 0;
    const numeros = new Map();

    numeros.set("I", 1);
    numeros.set("V", 5);
    numeros.set("X", 10);
    numeros.set("L", 50);
    numeros.set("C", 100);
    numeros.set("D", 500);
    numeros.set("M", 1000);

    console.log(numeros);

    for (var i = 0; i < frase.length; i++) {
        var aux1 = numeros.get(frase[i])
        var aux2 = numeros.get(frase[i + 1])

        console.log(aux1, aux2);
        if (aux2 && aux1 < aux2) {
            soma += aux2 - aux1;
            i++;
        } else {
            soma += aux1;
        }

      }

    resp.innerHTML = soma;

});
