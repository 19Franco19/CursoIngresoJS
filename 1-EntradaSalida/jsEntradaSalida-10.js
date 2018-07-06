/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var Importe;
	var ImporteDescuento;
	var Descuento;

	Importe= parseFloat(document.getElementById('importe').value);
	Descuento= Importe * 0.25;
	ImporteDescuento= parseInt(Importe) - parseInt(Descuento);

	document.getElementById('resultado').value= ImporteDescuento;

	//si quiero sacar solo el descuento hago dato * 0.25.
	//si quiero sacar el dato con el descuento ya restado hago 0.75.


}
