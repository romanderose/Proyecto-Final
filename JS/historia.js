let video = document.getElementById("video")
let zonatiempo= document.querySelector(".tiempo")

console.dir(video)

//dura 280.640726 segundos (4:40 minutos)

zonatiempo.textContent= "4:40"

let botonplay= document.querySelectorAll("button")[0]
let botonpause= document.querySelectorAll("button")[1]

const iniciarvideo=()=>{
    video.play()
}

const pararvideo=()=>{
    video.pause()
}


