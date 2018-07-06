function mostrar()
{
	var Precio;
	var Descuento;
	var IVA;
	var PrecioconDescuento;
	var DescuentoenDinero;
	var PrecioFinal;
	Precio= prompt("Ingrese el precio");
	Descuento= prompt("Ingrese el descuento");

	DescuentoenDinero= (Precio * Descuento) / 100;

	PrecioconDescuento= Precio - DescuentoenDinero;

	IVA= Precio * 0.21;

	PrecioFinal= parseInt(PrecioconDescuento) + parseInt(IVA);
	document.getElementById('elPrecioFinal').value= PrecioFinal;
	

	alert("El Descuento en dinero es " + DescuentoenDinero + " El precio con el descuento es " + PrecioconDescuento + " Y el IVA es " + IVA);


}
