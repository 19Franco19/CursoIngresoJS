function mostrar()
{

	var Planetas;
	Planetas=prompt('Ingrese un planeta');
	switch(Planetas)
	{
		case "mercurio":
		case "venus":
		alert("Aca hace mas calor");
		break;
		case "tierra":
		alert("Aca Vivimos");
		break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "pluton":
		alert("Aca hace mas frio");
		break;
		default:
		alert("El planeta ingresado no es valido");
		break;






	}
}
