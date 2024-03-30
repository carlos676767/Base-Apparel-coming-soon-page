
 
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
const validacoes = () => {
  if (valorSemNada(input.value)) {
    alert("sem nd")
  }
}


const botao = document.querySelector("button") as HTMLButtonElement
botao.addEventListener("click", () => {
  validacoes()
})
