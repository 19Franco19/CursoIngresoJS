function mostrar()
{
	var dia;
	dia=prompt("Ingrese un dia de la semana:");

	switch(dia)
	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
		alert("A trabajar !!!");
		break;
		case "sabado":
		case "domingo":
		alert("Buen Finde");
		break;
		default:
		alert("El dia ingresado no es valido");
		break;








	}



}
