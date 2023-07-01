// criar referencias aos elementos da pag
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    //evita o envio do formulario
    e.preventDefault();
    console.log("e.target.value");

    // obter os valores dos inputs
    const frase = String(frm.inFrase.value);
    const item = String(frm.inItem.value);
    const nums = String(frm.inPos.value);
    
    var aux = nums.split(","); //separa os numeros por ,
    var posicoes = []
    for (let i = 0; i < aux.length; i++) {
        let str = aux[i]
        let number = parseInt(str)
        posicoes.push(number);
    }

    let saida = insertString(frase, item, posicoes);
    resp.innerHTML = saida;

});

function insertString(str, toInsert, indexes){
    const charArray = str.split("");
    let insertCount = 0;

    for (let i = 0; i <= str.length; i++) {
        //const element = str[i];
        if (indexes.includes(i)){
            charArray.splice(i + insertCount, 0, toInsert);
            insertCount++;
        }
    }
    return charArray.join("");
}
