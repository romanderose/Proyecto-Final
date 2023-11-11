let img1 = document.getElementsByTagName("img")[1]

/*
let img2 = document.getElementsByTagName("img")[2]
let img3 = document.getElementsByTagName("img")[3]
let imagenes = [img1, img2, img3]
*/


let destino1 = document.querySelectorAll("div")[1]

/*
let destino2 = document.querySelectorAll("div")[2]
let destino3 = document.querySelectorAll("div")[3]
let destinos = [destino1, destino2, destino3]
*/


//imagenes a trasladar

imagenes.addEventListener('dragstart', iniciotraslado);
imagenes.addEventListener('dragend', finaltraslado);


function iniciotraslado(evento){
    evento.dataTransfer.setData('Text',"./Rompe-1.png")
}

function finaltraslado(evento){
    alert("Proceso finalizado")
}


//destino

destino1.addEventListener('drop', soltarelemento);

function soltarelemento(evento){

    let data = evento.dataTransfer.getdata('Text');
    destino1.innerHTML= '<img id="img1">'
}

