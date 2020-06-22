function validarFormulario(){
    //Validar nombre
    var nombre = document.formulario.name.value.trim();
    if(!nombre){
        alert("Escriba su nombre por favor");
        document.formulario.name.focus();
        return false;
    }else if(nombre.length < 3){
        alert("Su nombre tiene que ser mas largo");
        document.formulario.name.focus();
        return false;
    }

    // Validar Apellido
    var apellido = document.formulario.lastname.value.trim();
    if(!apellido){
        alert("Escriba su apellido por favor");
        document.formulario.lastname.focus();
        return false;
    }else if(apellido.length < 3){
        alert("Su apellido tiene que ser mas largo");
        document.formulario.lastname.focus();
        return false;
    }

    // Validar Email
    var email = document.formulario.email.value.trim();
    var regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regEx.test(email)){
        alert("Ha introducido mal su email");
        document.formulario.email.focus();
        return false;
    }

    // Validar que haya algun checkbox clickeado
    var numberOfChecked = 0;

    var checkboxArray = document.getElementsByName("intereses");

    for(var i = 0; i < checkboxArray.length; i++){
        if(checkboxArray[i].checked){
            numberOfChecked++;
        }
    }

    if(numberOfChecked == 0){
        alert("Por favor seleccione algun checkbox.");
        return false;
    }

    alert("Gracias por enviar su mail!");
}