let input = document.querySelector(".input");
const containerLista = document.querySelector(".container-lista")
input.addEventListener("keypress", (e)=> {
    if(e.key === "Enter"){
        return botaoEnviar()
    }
})

function botaoEnviar(){
    
    const texto = document.createElement("li")
    texto.style.fontSize = "18px"
    texto.style.fontFamily = "Georgia";
    texto.style.display = "flex";
    
    
    containerLista.appendChild(texto)
    texto.innerText = input.value

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
    
    
    const editar = document.createElement("img")
    editar.src = "./assets/editar.png" // atribui propriedades á tag <a>
    editar.style.width = "15px";
    editar.style.height= "15px";
    editar.style.cursor = "pointer";
    editar.style.marginLeft = "4px";
    editar.style.marginTop = "4px";
    
    texto.appendChild(editar)
    
    
    texto.addEventListener("click", ()=> {
        
        input.value = `${texto.textContent}`;
        
        
    })
    
    input.value = ""

    
}
// var salvarLi = function(){
//     var texto = document.getElementById('texto').value;
// }
// const editar = document.createElement(img)
// editar.src = "./assets/editar.png"
