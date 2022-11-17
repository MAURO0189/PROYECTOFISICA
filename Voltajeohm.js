function calcularVoltajeohm(){
    var corriente = document.getElementById("corriente").value;
    var resistencia = document.getElementById("resistencia").value;
    var result = document.getElementById("result")
    var result = document.getElementById("resultados1")

    if(corriente<0){
        MostrarMensajeDeErrorCorriente()
    }

    else if(resistencia<0){
        MostrarmeMensajeDeErrorResistencia()
    }

    else{
        var sol = parseFloat(corriente) * parseFloat(resistencia)
        result.innerHTML = "El resultado del VOLTAJE es: {}V".replace("{}",sol); 
    }

    
        function MostrarMensajeDeErrorCorriente(){
            alert("el valor de la Corriente no puede ser negativa")
        }

        function MostrarmeMensajeDeErrorResistencia(){
            alert("el valor de la Resistencia no puede ser negativa")
        }

    
}
