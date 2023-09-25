function toggleMode(){
  const html = document.documentElement
    html.classList.toggle("light")
    const img = document.querySelector('#profile img')
  if(html.classList.contains('light')){
   img.setAttribute("src","./assets/safsf.png")
  }else{
    img.setAttribute("src","./assets/avatar.png")
  } // faz o mesmo processo do que o comando abaixo
  

  //pegar a tag img 
  //substituir a imagem 
}