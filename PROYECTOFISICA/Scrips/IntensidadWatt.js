function calcularIntensidadWatt(){
    var potencia = document.getElementById("potencia").value;
    var voltaje = document.getElementById("voltaje").value;
    var result = document.getElementById("result");
    if(potencia < 0){
        mostrarMensajeDeErrorPotencia()
    }
    else if(voltaje < 1){
        mostrarMensajeDeErrorVoltaje()
    }
    else{
    var sol = parseFloat(potencia) / parseFloat(voltaje);
        result.innerHTML = "El valor de la INTENSIDAD es: {}A".replace("{}", sol);
    }
}

function mostrarMensajeDeErrorPotencia(){
    alert("ERROR el valor de la POTENCIA no puede ser NEGATIVO")
}

function mostrarMensajeDeErrorVoltaje(){
    alert("ERROR el valor del VOLTAJE no puede ser NEGATIVO ó igual a CERO")
}
