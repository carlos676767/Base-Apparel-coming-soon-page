
 
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