function calcularVoltajeWatt(){
    var potencia = document.getElementById("potencia").value;
    var intensidad = document.getElementById("intensidad").value;
    var result = document.getElementById("result");
    var result = document.getElementById("resultados1");
    if(potencia < 0){
        mostrarMensajeDeErrorPotencia()
    }
    else if(intensidad< 1){
        mostrarMensajeDeErrorIntensidad()
    }
    
    else{
    var sol = parseFloat(potencia) / parseFloat(intensidad);
        result.innerHTML = "El valor del VOLTAJE es: {}V".replace("{}", sol);
    }
}
    function mostrarMensajeDeErrorPotencia(){
        alert("ERROR el valor de la POTENCIA no puede ser NEGATIVO")
    }
    
    function mostrarMensajeDeErrorIntensidad(){
        alert("ERROR el valor de la INTENSIDAD no puede ser NEGATIVO ó igual a CERO")
    }
