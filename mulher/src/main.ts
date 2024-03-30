const mulher = document.querySelector(".mulher") as HTMLImageElement
 


const manipularQuery = () => {
  if (matchMedia("(max-width: 768px)").matches) {
    mulher.src = "src/base-apparel-coming-soon-master/images/hero-mobile.jpg"
    mulher.style.width = "100%"
    mulher.style.height = "100%"
    
  }
}


manipularQuery()