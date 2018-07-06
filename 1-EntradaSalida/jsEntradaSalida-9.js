/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var Importe;
	var ImporteAumento;
	var Aumento;

	Importe= parseFloat(document.getElementById('sueldo').value);
	Aumento= Importe * 0.1;
	ImporteAumento= parseInt(Importe) + parseInt(Aumento);

	document.getElementById('resultado').value= ImporteAumento;

	//si quiero sacar solo el aumento hago dato * 0.10.
	//si quiero sacar el dato con el aumento ya sumado hago 1.10.


}
