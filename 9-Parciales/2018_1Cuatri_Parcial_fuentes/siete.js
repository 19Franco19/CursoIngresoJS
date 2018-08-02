/*
tomar datos
Jose M 33 9
Maria F 22 6
Fer F 15 10
Ger M 18 1
Susana F 56 2
Mirta F 99 8

1-Sexo Peor Nota:
2-Nombre Del mas Viejo:
3-Nota del mas chico:
*/
function mostrar()
{
	// variables
	var edad;
	var sexo;
	var nombre;
	var nota;
	var contador;
	var peorNota;
	var peorNotaSexo;
	var masVieje;
	var masViejeNombre;


	contador=0;

	while(contador<6)
	{
		contador++;
		nombre= prompt("ingrese nombre");

		sexo= prompt("ingrese sexo");	
		while( sexo!="f" && sexo!="m")
		{
			sexo= prompt("ingrese sexo");		
		}


		edad= prompt("ingrese edad");
		edad=parseInt(edad);
		while(isNaN(edad)|| edad<0 || edad >100)
		{
			edad= prompt("ingrese edad");
			edad=parseInt(edad);
		}


		nota= prompt("ingrese nota");
		nota=parseInt(nota);
		while(isNaN(nota)|| nota<0 || nota >10)
		{
			nota= prompt("ingrese nota");
			nota=parseInt(nota);
		}


		

		if(contador==1)
		{
			peorNota=nota;
			peorNotaSexo=sexo;
			masVieje=edad;
			masViejeNombre=nombre;
		}
		else
		{
			if(nota<peorNota)
			{
				peorNota=nota;
				peorNotaSexo=sexo;
			}

			if(edad>masVieje)
			{
				masVieje=edad;
				masViejeNombre=nombre;

			}

		}
	}
	




			

}

	//mas operaciones



	//mostrar



