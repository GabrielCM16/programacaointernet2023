// criar referencias aos elementos da pag
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    //evita o envio do formulario
    e.preventDefault();
    console.log("e.target.value");

    // obter os valores dos inputs
    const frase = String(frm.inFrase.value);
    const item = String(frm.inItem.value);
    const nums = String(frm.inPos.value);
    
    


    console.log(insertString(frase, item, ))
    console.log(insertString("O lelebas deu uma sugada", "no narebas", [15]))
    

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