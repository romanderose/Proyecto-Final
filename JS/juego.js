let imagen = document.querySelectorAll(".imagenesjuego")

//console.log(imagen)

let destino = document.querySelectorAll(".zonadestino")
let botonreinicio= document.querySelector(".reinicio")

//console.dir(botonreinicio)

function MouseOverAndLeave(a,b,c){
    /*Para que al pasar el mouse por encima de las zonas destino se pongan en
    negro y cuando salgo de ellas vuelvan a gris*/

    //zona de la izquierda
    a.addEventListener('mouseover', ()=>{
        a.style.backgroundColor="black";
    })
    a.addEventListener('mouseout',()=>{
        a.style.backgroundColor="grey";
    })

    //zona del centro
    b.addEventListener('mouseover', ()=>{
        b.style.backgroundColor="black";
    })
    b.addEventListener('mouseout',()=>{
        b.style.backgroundColor="grey";
    })

    //zona de la izquierda
    c.addEventListener('mouseover', ()=>{
        c.style.backgroundColor="black";
    })
    c.addEventListener('mouseout',()=>{
        c.style.backgroundColor="grey";
    })
}

MouseOverAndLeave(destino[0],destino[1],destino[2])

//--------------------------------------------------------------------------------------------

/*DATOS DE LA IMAGEN DE LA IZQUIERDA (QUE AL ARMAR CORRECTAMENTE EL 
ROMPECABEZAS QUEDARÍA EN EL CENTRO)*/

//eventos de la imagen a arrastrar

imagen[0].addEventListener('dragstart', inicioTraslado);

imagen[0].addEventListener('dragend', finalTraslado);

function inicioTraslado(evento){
    evento.dataTransfer.setData('Text',"./rompe2.png")
}

function finalTraslado(evento){
    imagen[0].style.visibility="hidden";
}


//eventos de la zona de destino

destino[1].addEventListener('dragover', prevenirDefault);

destino[1].addEventListener('drop', soltarElemento);

function soltarElemento(evento){
    let dataimagen = evento.dataTransfer.getData('Text')

    destino[1].innerHTML= `<img id="central" src="${dataimagen}"/>`
}

function prevenirDefault(evento){
    evento.preventDefault()
}

//--------------------------------------------------------------------------------------------

/*DATOS DE LA IMAGEN DEL CENTRO (QUE AL ARMAR CORRECTAMENTE EL 
ROMPECABEZAS QUEDARÍA EN LA IZQUIERDA)*/

//eventos de la imagen a arrastrar

imagen[1].addEventListener('dragstart', inicioTraslado1);

imagen[1].addEventListener('dragend', finalTraslado1);

function inicioTraslado1(evento){
    evento.dataTransfer.setData('Text',"./rompe1.png")
}

function finalTraslado1(evento){
    imagen[1].style.visibility="hidden";
}


//eventos de la zona de destino

destino[0].addEventListener('dragover', prevenirDefault);

destino[0].addEventListener('drop', soltarElemento1);

function soltarElemento1(evento){
    let dataimagen1 = evento.dataTransfer.getData('Text')

    destino[0].innerHTML= `<img id="central" src="${dataimagen1}"/>`
}

//--------------------------------------------------------------------------------------------

/*DATOS DE LA IMAGEN DE LA DERECHA (QUE AL ARMAR CORRECTAMENTE EL 
ROMPECABEZAS QUEDARÍA TAMBIÉN EN LA DERECHA)*/

//eventos de la imagen a arrastrar

imagen[2].addEventListener('dragstart', inicioTraslado2);

imagen[2].addEventListener('dragend', finalTraslado2);

function inicioTraslado2(evento){
    evento.dataTransfer.setData('Text',"./rompe3.png")
}

function finalTraslado2(evento){
    imagen[2].style.visibility="hidden";
}


//eventos de la zona de destino

destino[2].addEventListener('dragover', prevenirDefault);

destino[2].addEventListener('drop', soltarElemento2);

function soltarElemento2(evento){
    let dataimagen2 = evento.dataTransfer.getData('Text')

    destino[2].innerHTML= `<img id="central" src="${dataimagen2}"/>`
}

//--------------------------------------------------------------------------------------------

botonreinicio.style.marginTop="-50px"
