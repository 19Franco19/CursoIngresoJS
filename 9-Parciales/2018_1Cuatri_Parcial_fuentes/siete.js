/*
tomar datos


1-
2-
3-
*/
function mostrar()
{
	// variables
	var edades;
	var sexo;
	var nombre;



	//inicializaciones
	var contador=0
	var edades=0
	var respuesta="si";
			//tomardatos
			//pedir
			//parsear
			//validar

	while(respuesta !="no")
	{	
		edades= prompt('Ingrese Una Edad:');
		edades=parseInt(edades);
		respuesta= prompt('Ingrese no para salir');

		while(edades  > 0 && edades < 100 )
		{
			edades= prompt('Ingrese Una Edad:');
			edades=parseInt(edades);
		}

		sexo= prompt('Ingrese El Sexo:');

		while(sexo == "f" || sexo == "m")
		
		{
		sexo= prompt('Ingrese El Sexo:');
		}

		nombre= prompt('"Ingrese El Nombre:');

		while(nombre)
		{
		nombre= prompt('"Ingrese El Nombre:');
	    }



		



		//analisis

			

	}

	//mas operaciones



	//mostrar


}
