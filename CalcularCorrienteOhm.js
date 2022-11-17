function calcularCorrienteOhm(){
    var voltaje = document.getElementById("voltaje").value;
    var resistencia = document.getElementById("resistencia").value;
    var result = document.getElementById("result")
    var result = document.getElementById("resultados2")
    if(resistencia<=0) {
        MostrarMensajeDeErrorResistencia()
    }

    else if(voltaje<0){
        MostrarMensajeDeErrorVoltaje()
    }

    else {
        var sol = parseFloat(voltaje) / parseFloat(resistencia)
        result.innerHTML = "El resultado de la CORRIENTE es: {}A".replace("{}",sol); 

    }
    function MostrarMensajeDeErrorResistencia(){
        alert("el valor de la RESISTENCIA No puede ser CERO ó NEGATIVO")
    }

    function MostrarMensajeDeErrorVoltaje(){
        alert("el valor del VOLTAJE No puede ser NEGATIVO")
    }

 }



    
