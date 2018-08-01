
function mostrar()
{
	var base;
	var altura;
	var perimetro;
	var superficie;

	base=prompt("Ingrese la Base:");
	altura=prompt("Ingrese la Altura:");
	base=parseInt(base)
	altura=parseInt(altura)
    perimetro= base + (altura * 2)
	superficie= (base * altura) / 2

	alert("El perimetro es " + perimetro + "y su superficie es " + superficie);

}
