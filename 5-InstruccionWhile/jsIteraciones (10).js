function mostrar()
{

	var Numero;
	var promedioPositivos;
	var promedioNegativos;
	var Diferencia;
	var negativos;
	var positivos;
	var contNegativos;
	var contPositivos;
	var contCeros;
	var contPares;

	var contador=0;
	var negativos=0;
	var positivos=0;
	var contNegativos=0;
	var contPositivos=0;
	var contCeros=0;
	var contPares=0
	

	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		Numero= prompt('Ingrese un numero')
		Numero= parseInt(Numero);
		respuesta= prompt('Ingrese no para salir');
		
		if (Numero < 0 ) 
		{
			negativos= negativos + Numero;
			contNegativos++;
		}

		if (Numero > 0) 
		{
			positivos= positivos + Numero;
			contPositivos++;

		}

		if(Numero == 0)
		{
			contCeros++;
		}

		if (Numero % 2 == 0) 
		{
			contPares++;
		}

	}

	promedioPositivos= positivos / contPositivos;
	promedioNegativos= negativos / contNegativos;
	Diferencia= positivos - negativos;
	
	document.write("1-La Suma de los negativos es " + negativos + "<br>");
	document.write("2-La Suma de los positivos es " + positivos + "<br>");
	document.write("3-La Cantidad de Positivos es " + contPositivos + "<br>");
	document.write("4-La Cantidad de Negativos es " + contNegativos + "<br>");
	document.write("5-La Cantidad de Ceros es " + contCeros + "<br>");
	document.write("6-La Cantidad de Pares es " + contPares + "<br>");
	document.write("7-El Promedio de los Positivos es " + promedioPositivos + "<br>");
	document.write("8-El Promedio de los Negativos es " + promedioNegativos + "<br>");
	document.write("9-La Diferencia entre Positivos y Negativos es " + Diferencia + "<br>");
}//FIN DE LA FUNCIÓN