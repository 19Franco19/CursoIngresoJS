function mostrar()
{
//tomo la edad  
	var Edad;  
	Edad= document.getElementById('edad').value;
	if (Edad > 17)
	{
		alert("La persona es mayor de edad");
	}
	else if (Edad < 13) 
	{
		alert("La persona es un niño");
	}
	else
	{
		alert("La persona es adolescente");
	}

	/* Opcion 1 = If()
                  If()	
                  if()

       Opcion 2 = If()
                  {
	
                  }
                  else
                  {
	              if()
	              {
	
	              }
	              else
	              {
	
	              }
                  }


}//FIN DE LA FUNCIÓN