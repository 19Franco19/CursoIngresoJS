function mostrar()
{
	var Numero1;
	var Numero2;
	var Resultado;
	Numero1=prompt ("Ingrese un numero: ");
	Numero2=prompt ("Ingrese otro numero: ");
	//Numero1=parseInt(Numero1);
	//Numero2=parseInt(Numero2);
	if (Numero1 == Numero2) 
	{
		Resultado= Numero1 + Numero2;
		alert("El resultado es " + Resultado);
	}
	else if (Numero1 > Numero2 ) 
	{
		Numero1=parseInt(Numero1);
		Numero2=parseInt(Numero2);
		Resultado= parseInt(Numero1 / Numero2);
		alert("El resultado es " + Resultado);
	}
	else
	{
		Numero1=parseInt(Numero1);
		Numero2=parseInt(Numero2);
		Resultado= parseInt(Numero1 + Numero2)
		alert("El resultado es " + Resultado);
	}

	  
}