function calcular(){
    var b = document.getElementById("base").value;
    var h = document.getElementById("altura").value;
    var res = document.getElementById("result");
    if(isNegative(b, h)){
        mostrarMensajeDeError()
    }else{
        var sol = (parseFloat(b) * parseFloat(h))/2;
        res.innerHTML = sol;
    }

}

function isNegative(b, h){
    return b < 0 && h < 0
}

function mostrarMensajeDeError(){
    alert("El valor de es negatiovo")
}