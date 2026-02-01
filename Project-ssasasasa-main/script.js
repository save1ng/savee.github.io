function toggleImages () {
    const container = document.querySelector (".characters-img")
    const button = document.getElementById ("toggleBtn")
    let images = document.querySelectorAll(".hidden")
    images.forEach (img =>{
        img.style.display= "block" ;
    })
    container.classList.toggle("open")
    if (container.classList.contains("open")){
        button.textContent ="сховати"
    }else{
        images.forEach(img=>img.style.display="none");
        button.textContent ="показати більше"
        
    }
}
