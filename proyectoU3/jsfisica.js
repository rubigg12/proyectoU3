function limpiarFormulario() {
	document.getElementById('miForm').reset();
 }

 var volumen=function(i){
 	var num1=parseFloat(document.getElementById("num1").value);
 	var num2=parseFloat(document.getElementById("num2").value);
 	var resultado=(num1*num1)*num2;
 	return resultado;
 }