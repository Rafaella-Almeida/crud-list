let input = document.querySelector(".input");
// para enviar ao pressionar a tecla enter
const containerLista = document.querySelector(".container-lista")
input.addEventListener("keypress", (e)=> {
    if(e.key === "Enter"){
        return botaoEnviar()
    }
})

// botão para enviar itens
function botaoEnviar(){
    
    const texto = document.createElement("li")
    texto.style.fontSize = "18px"
    texto.style.fontFamily = "Georgia";
    texto.style.display = "flex";
    containerLista.appendChild(texto)
    texto.innerText = input.value

    // para excluir item
    const excluir = document.createElement("img")
    excluir.src = "./assets/lixo.png" // atribui propriedades á tag <a>
    excluir.style.width = "20px";
    excluir.style.height= "20px";
    excluir.style.cursor = "pointer";
    excluir.style.marginTop = "2px";
    excluir.style.marginLeft = "10px";
    
    texto.appendChild(excluir)
    
    excluir.addEventListener("click", ()=>{
        texto.remove()
        texto.innerText = input.value = null; // para não aparecer novamente dentro do imput
        
        
    })
    
    // para editar item
    const editar = document.createElement("img")
    editar.src = "./assets/editar.png" // atribui propriedades á tag <a>
    editar.style.width = "15px";
    editar.style.height= "15px";
    editar.style.cursor = "pointer";
    editar.style.marginLeft = "4px";
    editar.style.marginTop = "4px";
    
    texto.appendChild(editar)
    
    
    editar.addEventListener("click", ()=> {
        input.value = `${texto.textContent}`;
    })
    
    
    input.value = ""
    
    localStorage.setItem("itemLista", JSON.stringify(texto.textContent) );
    
    localStorage.getItem("itemLista")
}

