const nameList = ["Aline", "Otavio", "Camila", "Nareba", "Jean", "Julebas", "Rany", "TI"]


const botaofil = document.getElementById("Filtrar");
const botaoadd = document.getElementById("add");
const botaosel = document.getElementById("sel");
const botaorel = document.getElementById("rel");
const saida = document.getElementById("saida");
const listEl = document.getElementById("list");
const searchField = document.getElementById("searchField");


this.fillList();

function fillList(list = nameList) {
    listEl.innerHTML = "";
    for(let i = 0; i < list.length; i++) {
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listEl.appendChild(listItems);
    }
}

function inputHandler() {
    saida.innerHTML = ""
    const filteredList = nameList.filter(el => {
        const listItems = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItems.includes(searchWord);
    })
    fillList(filteredList);
}

botaofil.addEventListener("click", inputHandler);

function adicionarNome(){
    nome = searchField.value.toLowerCase();
    //adciona o nome ao final da lista
    nameList.push(nome);
    saida.innerHTML = "Nome adicionado " + nome 

}

botaoadd.addEventListener("click", adicionarNome)


function removerNome(){
    nome = searchField.value.toLowerCase();
    
}




