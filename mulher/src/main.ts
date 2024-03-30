
 
const manipularQuery = () => {
  const mulher = document.querySelector(".mulher") as HTMLImageElement
  const imagemquery = document.querySelector(".imagemquery") as HTMLDivElement
  if (matchMedia("(max-width: 768px)").matches) {
    mulher.src = "src/base-apparel-coming-soon-master/images/hero-mobile.jpg"
    setarLarguraEtamanho(mulher)
    imagemquery.appendChild(mulher)
  }
}


const setarLarguraEtamanho = (imagem: HTMLImageElement) => {
  imagem.style.width = "100%"
  imagem.style.height = "100%"
}

manipularQuery()

const input = document.querySelector("input") as HTMLInputElement
const valorSemNada = (input: string) => {
  return input === ""
}
const inputValidarEmail = (input: string)  => {
  const regex = /@[a-zA-Z0-9.-]+\.com\b/;
  return regex.test(input)
}


const exibirtexto = document.querySelector(".exibirtexto") as HTMLParagraphElement

const addClassesEtirar = (texto: HTMLParagraphElement, valor1: string, valor2: string) => {
  texto.classList.add(valor1)
  texto.classList.remove(valor2)
}

const mensagemVazio = () => {
  exibirtexto.innerHTML = "O input esta vazio."
  addClassesEtirar(exibirtexto, "alerta", "remover")
}

const mensagemEnviado = () => {
  exibirtexto.innerHTML = "Dados enviados com sucesso!"
  addClassesEtirar(exibirtexto,"remover", "alerta")
}


const validacoes = () => {
  if (valorSemNada(input.value)) {
    mensagemVazio()
  }else if(inputValidarEmail(input.value)){
    alert("email invalido")
  }else{
    mensagemEnviado()
  }
}

const botao = document.querySelector("button") as HTMLButtonElement
botao.addEventListener("click", () => {
  validacoes()
})
