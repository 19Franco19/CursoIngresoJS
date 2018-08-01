function mostrar()
{

	var precioInicial;
	var descuento;
	var precioFinal;

	precioInicial=prompt("Ingrese el Precio:");
	descuento=prompt("Ingrese el Descuento:");
	
	
	precioInicial=parseInt(precioInicial);
	descuento=parseInt(descuento);
	precioFinal=parseInt(precioFinal);

	descuento=  precioInicial * descuento / 100

	precioFinal= precioInicial - descuento
	document.getElementById('elPrecioFinal').value = precioFinal;
}
