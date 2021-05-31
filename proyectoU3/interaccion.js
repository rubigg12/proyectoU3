//FORMULARIO DE CALCULO
function limpiarFormulario() {
	document.getElementById('miForm').reset();
 }

 var calcular=function(i){
 	var num1=parseFloat(document.getElementById("num1").value);
 	var resultado=num1*1;
 	return resultado;
 }