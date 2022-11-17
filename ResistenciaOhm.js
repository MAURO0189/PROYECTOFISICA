function calcularResistenciaohm(){
    var voltaje = document.getElementById("voltaje").value;
    var corriente = document.getElementById("intensidad").value;
    var resultado = document.getElementById("result");
    var resultado = document.getElementById("resultados3");  
    if(esNegativo(voltaje)){
        mostrarMensajeDeError()
    }
        else if(esNegativoigualacero(corriente)){
            mostrarMensajeErrorcorriente()
        }  
        else{
            var solucion = (parseFloat(voltaje) / parseFloat(corriente));
            resultado.innerHTML = "El valor de la RESISTENCIA es: {}Ω".replace("{}",+ solucion);
        }
                
        
    function esNegativo(voltaje){
        return voltaje < 0
    }  

    function esNegativoigualacero(corriente){
        return corriente <= 0
    }  

    function mostrarMensajeDeError(){
        alert("ERROR el valor del voltaje no puede ser negativo")
    }

    function mostrarMensajeErrorcorriente(){
        alert("ERROR el valor de la corriente es menor a cero o es negativo")
    }
            
}