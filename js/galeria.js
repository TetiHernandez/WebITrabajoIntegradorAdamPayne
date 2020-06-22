var indice = 1;

mostrarFoto(indice);

function navegarFoto(n){
    mostrarFoto(indice += n);
}

function fotoActual(n){
    mostrarFoto(indice = n);
}

function mostrarFoto(n){
    var i;
    var fotos = document.getElementsByClassName("foto");
    
    if(n > fotos.length){
        indice = 1;
    }

    if(n < 1){
        indice = fotos.length;
    }

    for(i = 0; i < fotos.length; i++){
        fotos[i].style.display = "none";
    }

    
    fotos[indice-1].style.display = "block";
    
}