function mostrar()
{

	var Numero1;
	var Numero2;
	var Suma;

	Numero1=prompt("Ingrese un numero:");
	Numero2=prompt("Ingrese otro numero");
	/*Numero1= parseInt(Numero1);
	Numero2= parseInt(Numero2);*/

	if (Numero1 == Numero2) 
	{
		alert(Numero1 + Numero2);
	}

	else if (Numero1 > Numero2) 
	{
		Numero1=parseInt(Numero1);
		Numero2=parseInt(Numero2);
		alert(Numero1 - Numero2);
	}

	else
	{
		Numero1=parseInt(Numero1);
		Numero2=parseInt(Numero2);
		alert(Numero1 + Numero2);
	}




}
