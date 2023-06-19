// criar referencias aos elementos da pag
const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const respsoma = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    //evita o envio do formulario
    e.preventDefault();
    console.log("e.target.value");
    // obter os valores dos inputs

    const numero = Number(frm.inNumero.value);
    let res = "";
    let soma = 0;

    for (let i = 0; i <= 10; i++) {
        res += numero + " * " + i + " = " + numero * i + "\n";
        soma += numero * i;
    }

    resp.innerText = res;
    respsoma.innerText = "a soma dos resultados é: " + soma
});