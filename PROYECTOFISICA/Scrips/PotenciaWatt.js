function calcularPotenciaWatt(){
    var intensidad = document.getElementById("intensidad").value;
    var voltaje = document.getElementById("voltaje").value;
    var result = document.getElementById("result");
    if(esNegativo(voltaje, intensidad)){
        mostrarMensajeDeError()
    }else{
    var sol = parseFloat(voltaje) * parseFloat(intensidad);
        result.innerHTML = "El valor de la POTENCIA es: {}W".replace("{}", sol);
    }
}
function esNegativo(voltaje, intensidad){
    return voltaje < 0 || intensidad < 0
}

function mostrarMensajeDeError(){
    alert("ERROR El valor de  la INTENSIDAD ó el VOLTAJE no pueden ser NEGATIVOS")
}

